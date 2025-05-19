import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { parse } from "yaml";
import { ResearchNode } from "@/data/researchSpineData";

interface ResearchDocumentImporterProps {
  onImport: (newNode: ResearchNode) => void;
}

export default function ResearchDocumentImporter({ onImport }: ResearchDocumentImporterProps) {
  const [yamlContent, setYamlContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleImport = () => {
    try {
      setError(null);
      
      if (!yamlContent.trim()) {
        setError("Please enter YAML content");
        return;
      }
      
      // Parse the YAML content
      const parsedYaml = parse(yamlContent);
      
      // Extract node ID from detailed_analysis_phase
      const nodeDoc = parsedYaml.detailed_analysis_phase?.content_sections?.[0]?.node_document;
      if (!nodeDoc) {
        setError("Could not find node document in YAML");
        return;
      }
      
      // Extract node ID from the title (e.g., "9. Internal Capability FitMap" -> "R09")
      const nodeIdMatch = nodeDoc.node_title?.match(/^(\d+)\./);
      const nodeId = nodeIdMatch ? `R${nodeIdMatch[1].padStart(2, '0')}` : "R00";
      
      // Create a new research node
      const newNode: ResearchNode = {
        node_id: nodeId,
        title: nodeDoc.node_title?.replace(/^\d+\.\s*/, '') || "Unknown Node",
        scope: nodeDoc.core_scope_and_key_questions_summary || "",
        priority: nodeDoc.priority || "Medium",
        core_questions: nodeDoc.question_bank_for_internal_assessment ? 
          nodeDoc.question_bank_for_internal_assessment.flatMap((section: any) => 
            section.questions || []
          ) : [],
        key_outputs_or_impact_on_cos: ["Imported from YAML document"],
        detailed_document: {
          metadata: {
            version: "1.0",
            date: extractDateFromYaml(yamlContent)
          },
          session_kick_off_and_alignment: {
            critical_takeaway: parsedYaml.session_kick_off_and_alignment?._critical_takeaway,
            section_tldr: parsedYaml.session_kick_off_and_alignment?._section_tldr
          },
          executive_summary_phase: {
            critical_takeaway: parsedYaml.executive_summary_phase?._critical_takeaway,
            section_tldr: parsedYaml.executive_summary_phase?._section_tldr
          },
          detailed_analysis_phase: {
            critical_takeaway: parsedYaml.detailed_analysis_phase?._critical_takeaway,
            section_tldr: parsedYaml.detailed_analysis_phase?._section_tldr,
            content_sections: [{
              node_document: {
                node_id: nodeId,
                node_title: nodeDoc.node_title || "Unknown Node",
                portability_flag: nodeDoc.portability_flag || "⚖️ Same",
                priority: nodeDoc.priority || "Medium",
                status_box: nodeDoc.status_box || "☐ Not Started",
                core_scope_and_key_questions_summary: nodeDoc.core_scope_and_key_questions_summary || "",
                question_bank: nodeDoc.question_bank_for_internal_assessment ? 
                  nodeDoc.question_bank_for_internal_assessment.flatMap((section: any) => 
                    section.questions || []
                  ) : [],
                key_findings: [{
                  title: "Key Findings",
                  points: [{
                    text: nodeDoc.key_findings_guidance_template || "No findings available"
                  }]
                }]
              }
            }]
          },
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
        }
      };
      
      // Call the import callback
      onImport(newNode);
      
      // Reset the form
      setYamlContent("");
      setIsOpen(false);
    } catch (err) {
      console.error("Import error:", err);
      setError(err instanceof Error ? err.message : "Invalid YAML content");
    }
  };
  
  function extractDateFromYaml(content: string): string {
    const dateMatch = content.match(/Date:\s*(\d{4}-\d{2}-\d{2})/);
    return dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
  }
  
  if (!isOpen) {
    return (
      <Button 
        variant="outline" 
        className="mb-4"
        onClick={() => setIsOpen(true)}
      >
        Import YAML Document
      </Button>
    );
  }
  
  return (
    <div className="mb-6 p-4 border-2 border-dashed rounded-lg bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Import YAML Research Document</h2>
        <p className="text-sm text-gray-500">
          Paste the YAML content of a research document to import it
        </p>
      </div>
      
      <div className="mb-4">
        <Textarea
          value={yamlContent}
          onChange={(e) => setYamlContent(e.target.value)}
          className="h-[400px] font-mono text-sm"
          placeholder="# Paste your YAML research document here..."
        />
        
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
            {error}
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <Button variant="ghost" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={handleImport}>
          Import Document
        </Button>
      </div>
    </div>
  );
}