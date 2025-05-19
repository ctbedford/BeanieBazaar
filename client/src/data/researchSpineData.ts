export interface SourceLink {
  title: string;
  url: string;
}

export interface FindingPoint {
  text: string;
  citation?: string;
  subpoints?: FindingPoint[];
}

export interface FindingGroup {
  title: string;
  critical_takeaway?: string;
  points: FindingPoint[];
}

export interface QuestionBank {
  question: string;
  status?: "answered" | "in_progress" | "pending";
}

export interface DetailedResearchNode {
  node_id: string;
  node_title: string;
  portability_flag?: string;
  priority: string;
  status_box?: string;
  core_scope_and_key_questions_summary: string;
  question_bank: string[];
  key_findings: FindingGroup[];
  source_links?: SourceLink[];
}

export interface ResearchPhase {
  critical_takeaway?: string;
  section_tldr?: string;
  title?: string;
  content?: any;
}

export interface DetailedResearchDocument {
  _generation_metadata?: GenerationMetadata;
  session_kick_off_and_alignment?: SessionKickOffPhase;
  executive_summary_phase?: ExecutiveSummaryHAPGPhase;
  detailed_analysis_phase?: DetailedAnalysisHAPGPhase;
  evidence_and_transparency_phase?: EvidenceAndTransparencyPhase;
  key_learnings_and_reinforcement?: KeyLearningsAndReinforcementPhase;
  concluding_thoughts_and_path_forward?: ConcludingThoughtsAndPathForwardPhase;
  _presenter_notes?: PresenterNotes;
}

export interface HAPGPhaseBase {
  _critical_takeaway?: string;
  _section_tldr?: string;
}

export interface SessionKickOffPhase extends HAPGPhaseBase {
  session_topic_and_purpose?: string;
  key_objectives_for_this_discussion?: string[] | string;
  agenda_overview_and_scope?: string[] | string;
}

export interface ExecutiveSummaryHAPGPhase extends HAPGPhaseBase {
  summary_of_recommendations?: string[] | string; // Generic, can be adapted
  summary_of_key_findings?: string[] | string; // Example if needed
  key_implications_for_commerce_os?: string[] | string;
}

export interface NodeDocumentCore {
  node_id: string;
  node_title: string;
  portability_flag?: string; // This might be sourced from ResearchNode.portability_flag instead
  priority: string; // This might be sourced from ResearchNode.priority instead
  status_box?: string; // This will map to ResearchNode.status
  core_scope_and_key_questions_summary: string;
  question_bank: string[];
  key_findings: FindingGroup[];
  source_links?: SourceLink[];
}

export interface DetailedAnalysisHAPGPhase extends HAPGPhaseBase {
  // Assuming one node_document per detailed_analysis_phase based on current HAPG YAMLs
  // If multiple content_sections with different node_documents can exist, this needs adjustment.
  node_document?: NodeDocumentCore; 
  // Or if it's an array like before for other types of content sections:
  // content_sections?: { title?: string; points?: any[]; node_document?: NodeDocumentCore }[];
}

export interface EvidenceAndTransparencyPhase extends HAPGPhaseBase {
  data_sourcing_and_methodology?: {
    primary_sources?: string;
    secondary_sources?: string;
    information_nature?: string;
    methodology?: string;
  };
  confidence_level_and_limitations?: {
    confidence?: string | string[];
    limitations?: string | string[];
  };
  // Retain source_links here if it's specific to this phase in the HAPG model
  // source_links?: SourceLink[]; // If NodeDocumentCore.source_links isn't the sole source
}

export interface KeyLearningsAndReinforcementPhase extends HAPGPhaseBase {
  recap_of_key_insights?: string[] | string;
  strategic_considerations_for_commerce_os?: string[] | string;
  recap_of_key_objectives_for_internal_team?: string[] | string; // If applicable
  strategic_importance_of_this_internal_node?: string[] | string; // If applicable
}

export interface ConcludingThoughtsAndPathForwardPhase extends HAPGPhaseBase {
  summary_of_node_completion?: string;
  next_steps_in_research_spine?: string[] | string;
  call_to_action_or_discussion_points?: string[] | string;
  recommended_next_steps_post_consolidation?: string[] | string; // If applicable
  final_strategic_discussion_points?: string[] | string; // If applicable
}

export interface GenerationMetadata {
  original_prompt_context?: string;
  ai_generation_objective_for_user?: string;
  generation_mode_flags?: string[];
  key_assumptions_for_presentation_mode?: string[];
  // Include old metadata fields if they map here, e.g.:
  version?: string;
  date?: string;
  author?: string;
}

export interface PresenterNotes {
  _presenter_cue?: string[] | string;
}

export interface ResearchNode {
  node_id: string;
  title: string;
  scope: string;
  priority: "High" | "Medium" | "Low"; // Keeping original type, adjust if more needed
  status: "Not Started" | "In Progress" | "Completed" | "Blocked";
  portability_flag?: "⚖️ Same" | "🔀 Adapt" | "❗ New" | "🌟 Consolidated View";
  core_questions: string[];
  key_outputs_or_impact_on_cos: string[];
  detailed_document_path?: string; // Path to the YAML file
}

export interface ResearchSpineData {
  title: string;
  purpose: string;
  research_nodes: ResearchNode[];
  how_to_use_this_spine?: string;
}

const researchSpineData: ResearchSpineData = {
  title: "Refined Commerce OS Research Spine for Beanies UK Pilot",
  purpose: "A living index of research-node documents to be compiled before and during the COS build. Each node outlines its scope, detailed core questions, priority, and how insights plug into the platform roadmap.",
  research_nodes: [
    {
      node_id: "R01",
      title: "Macro UK Commerce Environment & Regulatory Landscape",
      scope: "Economic trends (inflation, consumer spending), grocery channel share shifts (online, convenience, discounters), prevalent promotional mechanics and norms, key regulatory timelines (HFSS, EPR, Digital Services Act, VAT implications).",
      priority: "High",
      status: "In Progress",
      portability_flag: "🔀 Adapt",
      core_questions: [
        "How have UK grocery market shares (Tesco, Sainsbury's, Asda, Morrisons, Aldi, Lidl, Ocado) evolved from 2019-2025, and what are the primary drivers for these shifts (e.g., price, convenience, range, online adoption)?",
        "What are the current and upcoming key regulatory milestones (HFSS implementation details, Extended Producer Responsibility for packaging, Digital Services Act impact on RMNs, VAT rules for CPGs) that will directly intersect with coffee promotion, packaging, pricing, and online advertising in the next 12-24 months?"
      ],
      key_outputs_or_impact_on_cos: [
        "Market sizing and trend data to inform Beanies' JBP narratives and COS opportunity mapping.",
        "Compliance requirements list for TPO engine (HFSS, pricing rules) and JBP content (packaging claims)."
      ],
      detailed_document_path: "/research_data/nodes/R01_Macro_UK_Environment.yaml",
    },
    {
      node_id: "R02",
      title: "UK Consumer Behaviors & Coffee Category Dynamics",
      scope: "Post-pandemic shifts in shopper missions, coffee consumption habits (at-home vs. out-of-home), role of private label, brand loyalty factors, key coffee segments (instant, pods, beans), and online coffee purchasing trends.",
      priority: "High",
      status: "Not Started",
      portability_flag: "🔀 Adapt",
      core_questions: [
        "How have UK consumer shopping missions (e.g., main shop, top-up, convenience, online) evolved post-pandemic, and what are the implications for coffee product placement, promotion, and availability?",
        "What are the current trends in UK coffee consumption, including the balance between at-home and out-of-home, the growth of different coffee segments (e.g., instant, ground, beans, pods, RTD), and the influence of private label vs. branded coffee?"
      ],
      key_outputs_or_impact_on_cos: [
        "Shopper personas and journey maps relevant to coffee for COS personalization features.",
        "Category insights for assortment planning and promotional strategy modules in COS."
      ],
      detailed_document_path: "/research_data/nodes/R02_UK_Consumer_Coffee_Dynamics.yaml",
    },
    {
      node_id: "R03",
      title: "Retailer Engagement Models & JBP Mechanics (UK Focus)",
      scope: "Analysis of typical JBP structures, promotional funding, trade terms, and data sharing practices with major UK retailers (Tesco, Sainsbury's, etc.). Identify specific requirements for COS JBP module.",
      priority: "High",
      status: "Not Started",
      portability_flag: "🔀 Adapt",
      core_questions: [
        "What are the standard components and negotiation levers in UK retailer JBPs?", 
        "How does promotional funding and performance tracking typically work?"
      ],
      key_outputs_or_impact_on_cos: [
        "Requirements for JBP planning and tracking modules in COS.", 
        "Templates for UK-specific JBP proposals."
      ],
      detailed_document_path: "/research_data/nodes/R03_UK_Retailer_Engagement.yaml",
    },
    {
      node_id: "R04",
      title: "UK Retail Media Networks (RMNs) & Shopper Marketing Landscape",
      scope: "Overview of major UK RMNs (e.g., Tesco Media, Sainsbury's Nectar360), their capabilities, campaign activation processes, and data/measurement offerings. Implications for COS RMN module.",
      priority: "Medium",
      status: "Not Started",
      portability_flag: "🔀 Adapt",
      core_questions: [
        "Which RMNs dominate the UK grocery landscape?", 
        "What are their typical campaign types and performance metrics?"
      ],
      key_outputs_or_impact_on_cos: [
        "Integration points for COS with UK RMN platforms.", 
        "Data requirements for RMN campaign planning and reporting in COS."
      ],
      detailed_document_path: "/research_data/nodes/R04_UK_RMN_Landscape.yaml",
    },
    {
      node_id: "R05",
      title: "Supply Chain & Logistics Considerations for UK Grocery",
      scope: "Key aspects of UK grocery supply chain, including warehousing, transportation, last-mile delivery, and retailer-specific logistics requirements. Impact on COS inventory and fulfilment modules.",
      priority: "Medium",
      status: "Not Started",
      portability_flag: "❗ New",
      core_questions: [
        "What are the primary logistics challenges in the UK grocery sector?", 
        "How do retailer inbound requirements differ?"
      ],
      key_outputs_or_impact_on_cos: [
        "Localization needs for COS inventory management and order fulfilment.", 
        "Data for estimating lead times and logistics costs."
      ],
      detailed_document_path: "/research_data/nodes/R05_UK_Supply_Chain.yaml",
    }
  ],
  how_to_use_this_spine: "This spine is a dynamic knowledge base. Click on any research node to see its summary. For nodes with completed HAPG YAML documents, a link or button will allow you to view the full detailed research output. Use the 'Portability Flag' to understand how existing US Commerce OS knowledge/features might apply to the UK context: ⚖️ Same (Largely directly applicable), 🔀 Adapt (Requires modification/localization), ❗ New (Requires new build/significant new logic for UK), 🌟 Consolidated View (Synthesizes multiple inputs or provides overarching strategic context)."
};

export default researchSpineData;
