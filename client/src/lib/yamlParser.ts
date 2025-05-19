import { parse } from 'yaml';
import { ResearchNode, DetailedResearchDocument } from '@/data/researchSpineData';

export interface ParsedResearchDocument {
  nodeId: string;
  document: DetailedResearchDocument;
}

/**
 * Parses a YAML research document string and converts it to the application's data model
 */
export function parseResearchDocument(yamlContent: string): ParsedResearchDocument {
  try {
    // Parse the YAML document
    const parsedYaml = parse(yamlContent);
    
    // Extract the node ID from the document
    const nodeId = extractNodeId(parsedYaml);
    
    // Transform to our application's data model
    const document: DetailedResearchDocument = {
      metadata: {
        version: parsedYaml._generation_metadata?.original_prompt_context || '1.0',
        date: extractYamlDate(yamlContent)
      },
      session_kick_off_and_alignment: {
        critical_takeaway: parsedYaml.session_kick_off_and_alignment?._critical_takeaway,
        section_tldr: parsedYaml.session_kick_off_and_alignment?._section_tldr
      },
      executive_summary_phase: {
        critical_takeaway: parsedYaml.executive_summary_phase?._critical_takeaway,
        section_tldr: parsedYaml.executive_summary_phase?._section_tldr
      },
      detailed_analysis_phase: transformDetailedAnalysisPhase(parsedYaml),
      evidence_and_transparency_phase: {
        critical_takeaway: parsedYaml.evidence_and_transparency_phase?._critical_takeaway,
        section_tldr: parsedYaml.evidence_and_transparency_phase?._section_tldr
      },
      key_learnings_and_reinforcement: {
        critical_takeaway: parsedYaml.key_learnings_and_reinforcement?._critical_takeaway,
        section_tldr: parsedYaml.key_learnings_and_reinforcement?._section_tldr
      },
      concluding_thoughts_and_path_forward: {
        critical_takeaway: parsedYaml.concluding_thoughts_and_path_forward?._critical_takeaway,
        section_tldr: parsedYaml.concluding_thoughts_and_path_forward?._section_tldr
      }
    };
    
    return { nodeId, document };
  } catch (error) {
    console.error('Error parsing YAML research document:', error);
    throw new Error('Failed to parse research document YAML');
  }
}

/**
 * Extracts the node ID from the document content
 */
function extractNodeId(parsedYaml: any): string {
  // Try to find node ID in various places
  if (parsedYaml.detailed_analysis_phase?.content_sections?.[0]?.node_document?.node_id) {
    return parsedYaml.detailed_analysis_phase.content_sections[0].node_document.node_id;
  }
  
  // Try to find from the node title, assuming format like "1. Node Name"
  const nodeTitle = parsedYaml.detailed_analysis_phase?.content_sections?.[0]?.node_document?.node_title;
  if (nodeTitle && nodeTitle.includes('.')) {
    const nodeNumber = nodeTitle.split('.')[0].trim();
    return `R${nodeNumber.padStart(2, '0')}`;
  }
  
  // Extract from generation metadata if possible
  const genMetadata = parsedYaml._generation_metadata;
  if (genMetadata) {
    if (genMetadata.generation_mode_flags.includes('first_node_generation')) {
      return 'R01';
    }
    if (genMetadata.generation_mode_flags.includes('second_node_generation')) {
      return 'R02';
    }
  }
  
  // Default fallback
  return 'R00';
}

/**
 * Extract the date from YAML content using regex
 */
function extractYamlDate(yamlContent: string): string {
  const dateMatch = yamlContent.match(/Date:\s*(\d{4}-\d{2}-\d{2})/);
  return dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
}

/**
 * Transform the detailed analysis phase from YAML to our data model
 */
function transformDetailedAnalysisPhase(parsedYaml: any) {
  if (!parsedYaml.detailed_analysis_phase) {
    return {};
  }
  
  const detailedPhase = parsedYaml.detailed_analysis_phase;
  
  return {
    critical_takeaway: detailedPhase._critical_takeaway,
    section_tldr: detailedPhase._section_tldr,
    content_sections: transformContentSections(detailedPhase.content_sections)
  };
}

/**
 * Transform content sections from YAML to our data model
 */
function transformContentSections(contentSections: any) {
  if (!contentSections || !Array.isArray(contentSections)) {
    return [];
  }
  
  return contentSections.map(section => {
    if (!section.node_document) {
      return { node_document: {} };
    }
    
    const nodeDoc = section.node_document;
    
    // Handle retailer profile format (R02)
    let keyFindings = [];
    if (nodeDoc.retailer_profile) {
      keyFindings = transformRetailerProfiles(nodeDoc.key_findings);
    } else if (nodeDoc.key_findings) {
      keyFindings = transformKeyFindings(nodeDoc.key_findings);
    }
    
    return {
      node_document: {
        node_id: nodeDoc.node_id,
        node_title: nodeDoc.node_title,
        portability_flag: nodeDoc.portability_flag,
        priority: nodeDoc.priority,
        status_box: nodeDoc.status_box,
        core_scope_and_key_questions_summary: nodeDoc.core_scope_and_key_questions_summary,
        question_bank: nodeDoc.question_bank || [],
        key_findings: keyFindings,
        source_links: transformSourceLinks(nodeDoc.source_links)
      }
    };
  });
}

/**
 * Transform key findings from YAML to our data model
 */
function transformKeyFindings(keyFindings: any) {
  if (!keyFindings || !Array.isArray(keyFindings)) {
    return [];
  }
  
  return keyFindings.map(finding => {
    return {
      title: finding.finding_group_title || finding.title,
      critical_takeaway: finding._critical_takeaway || finding.critical_takeaway,
      points: transformFindingPoints(finding.points)
    };
  });
}

/**
 * Transform retailer profiles from YAML to our data model (R02 specific)
 */
function transformRetailerProfiles(retailerProfiles: any) {
  if (!retailerProfiles || !Array.isArray(retailerProfiles)) {
    return [];
  }
  
  return retailerProfiles.map(profile => {
    let points = [];
    const retailerName = profile.retailer_name;
    
    // Combine fiscal calendar and JBP cadence into points
    if (profile.fiscal_calendar_and_jbp_cadence) {
      points = points.concat(profile.fiscal_calendar_and_jbp_cadence.map((item: string) => {
        // Extract citation if present
        const matches = item.match(/\(([^)]+)\)$/);
        return {
          text: item.replace(/\(([^)]+)\)$/, '').trim(),
          citation: matches ? matches[1] : undefined
        };
      }));
    }
    
    // Add buyer OKRs and margin rules to points
    if (profile.buyer_okrs_and_margin_rules) {
      points = points.concat(profile.buyer_okrs_and_margin_rules.map((item: string) => {
        // Extract citation if present
        const matches = item.match(/\(([^)]+)\)$/);
        return {
          text: item.replace(/\(([^)]+)\)$/, '').trim(),
          citation: matches ? matches[1] : undefined
        };
      }));
    }
    
    return {
      title: retailerName,
      critical_takeaway: "",
      points
    };
  });
}

/**
 * Transform finding points from YAML to our data model
 */
function transformFindingPoints(points: any) {
  if (!points || !Array.isArray(points)) {
    return [];
  }
  
  return points.map(point => {
    // Handle different point formats
    if (typeof point === 'string') {
      // Extract citation if present
      const matches = point.match(/\(([^)]+)\)$/);
      return {
        text: point.replace(/\(([^)]+)\)$/, '').trim(),
        citation: matches ? matches[1] : undefined
      };
    } else if (typeof point === 'object') {
      return {
        text: point.text,
        citation: point.citation,
        subpoints: point.subpoints ? transformFindingPoints(point.subpoints) : undefined
      };
    }
    
    return { text: String(point) };
  });
}

/**
 * Transform source links from YAML to our data model
 */
function transformSourceLinks(sourceLinks: any) {
  if (!sourceLinks || !Array.isArray(sourceLinks)) {
    return [];
  }
  
  return sourceLinks.map(link => {
    return {
      title: link.title,
      url: link.url
    };
  });
}

/**
 * Import research document from a file and merge with existing node
 */
export function importResearchDocumentToNode(
  yamlContent: string, 
  existingNodes: ResearchNode[]
): ResearchNode[] {
  const { nodeId, document } = parseResearchDocument(yamlContent);
  
  // Find the matching node
  const updatedNodes = [...existingNodes];
  const nodeIndex = updatedNodes.findIndex(node => node.node_id === nodeId);
  
  if (nodeIndex >= 0) {
    // Update existing node
    updatedNodes[nodeIndex] = {
      ...updatedNodes[nodeIndex],
      detailed_document: document
    };
  }
  
  return updatedNodes;
}