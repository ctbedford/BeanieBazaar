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
  metadata?: {
    version?: string;
    date?: string;
    author?: string;
  };
  session_kick_off_and_alignment?: ResearchPhase;
  executive_summary_phase?: ResearchPhase;
  detailed_analysis_phase?: {
    critical_takeaway?: string;
    section_tldr?: string;
    content_sections?: {
      node_document: DetailedResearchNode;
    }[];
  };
  evidence_and_transparency_phase?: ResearchPhase;
  key_learnings_and_reinforcement?: ResearchPhase;
  concluding_thoughts_and_path_forward?: ResearchPhase;
}

export interface ResearchNode {
  node_id: string;
  title: string;
  scope: string;
  priority: string;
  core_questions: string[];
  key_outputs_or_impact_on_cos: string[];
  detailed_document?: DetailedResearchDocument;
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
      node_id: "R12",
      title: "VAT & Pricing Structure",
      scope: "Investigating UK VAT rules for coffee products, FX budgeting considerations for importers, and the impact of VAT on promotional profitability.",
      priority: "Med",
      core_questions: [
        "What are the specific UK VAT rates for different coffee product types?",
        "What are common strategies for FX budgeting for UK imports?",
        "How does UK VAT apply to products sold on promotion?",
        "What is the impact of VAT on the calculation of net promotional cost and overall product margin?"
      ],
      key_outputs_or_impact_on_cos: [
        "Accurate VAT handling for different product types",
        "Support for margin calculations accounting for VAT on promotions",
        "Understanding of FX impact on landed costs and pricing strategies"
      ]
    },
    {
      node_id: "R13",
      title: "Org & Partner Ecosystem",
      scope: "Mapping required organization structure, partner agencies, tech vendors, and talent profiles needed for UK commerce operations.",
      priority: "Med",
      core_questions: [
        "What organizational structure is needed for UK commerce operations?",
        "Which agencies and tech vendors are best suited for UK commerce?",
        "What talent profiles and skills are essential for UK commerce success?",
        "How should UK and US commerce teams collaborate effectively?",
        "What partnership models work best for UK commerce ecosystem?"
      ],
      key_outputs_or_impact_on_cos: [
        "Role definition templates for commerce org",
        "Vendor assessment framework",
        "Collaboration workflow patterns",
        "UK-centric vs global responsibility matrix"
      ]
    },
    {
      node_id: "R14",
      title: "Forward Regulation Radar",
      scope: "Tracking emerging UK/EU regulations around data privacy, AI, sustainability claims, and their impact on commerce operations.",
      priority: "Low",
      core_questions: [
        "What pending UK/EU regulations will impact commerce operations?",
        "How are GDPR and privacy laws evolving in the UK post-Brexit?",
        "What sustainability and ESG reporting requirements are emerging?",
        "How will AI regulations affect commerce personalization?",
        "What industry self-regulation initiatives should be monitored?"
      ],
      key_outputs_or_impact_on_cos: [
        "Compliance roadmap for upcoming regulations",
        "Data privacy control frameworks",
        "Sustainability claim validation processes",
        "AI ethics guidelines implementation",
        "Regulatory monitoring dashboard"
      ]
    },
    {
      node_id: "R15",
      title: "Shopper Journey Touchpoints",
      scope: "Mapping the UK shopper journey, identifying key digital touchpoints, and understanding path-to-purchase differences from US market.",
      priority: "High",
      core_questions: [
        "How does the UK shopper journey differ from the US?",
        "What digital touchpoints are most influential in UK purchase decisions?",
        "How do UK shoppers research products before purchasing?",
        "What role do social platforms play in UK purchase journeys?",
        "How do loyalty programs influence UK shopper behavior?"
      ],
      key_outputs_or_impact_on_cos: [
        "UK shopper journey mapping framework",
        "Touchpoint influence scoring methodology",
        "Channel attribution modeling",
        "Social commerce integration points",
        "Loyalty program engagement mechanics"
      ]
    },
    {
      node_id: "R16",
      title: "Rapid-Commerce & Aggregators",
      scope: "Analyzing UK rapid delivery platforms, dark store operations, aggregator economics, and integration requirements.",
      priority: "Medium",
      core_questions: [
        "What rapid delivery platforms are dominant in UK urban markets?",
        "How do aggregator platforms like Deliveroo and Just Eat structure commerce opportunities?",
        "What integration requirements exist for rapid commerce platforms?",
        "How do economics differ between traditional retail and rapid commerce?",
        "What product categories perform best in rapid commerce?"
      ],
      key_outputs_or_impact_on_cos: [
        "Rapid commerce integration APIs",
        "Dark store inventory optimization",
        "Aggregator platform dashboards",
        "Rapid commerce margin calculators",
        "Product portfolio optimization for rapid"
      ]
    },
    {
      node_id: "R01",
      title: "Macro UK Commerce Environment",
      scope: "Understanding UK consumer market, commerce trends, payment systems, privacy regulations, & media landscape.",
      priority: "High",
      core_questions: [
        "What are fundamental differences between UK/US consumer shopping behaviors?",
        "What major UK regulations impact CPG commerce/marketing?",
        "How do payment systems & digital wallets differ between UK/US markets?",
        "What notable UK media measurement systems must we adapt to?",
        "What commerce trends are uniquely accelerated in UK vs US market?"
      ],
      key_outputs_or_impact_on_cos: [
        "UK-compliant account creation & preference center",
        "UK shopper journey maps with touchpoint analysis",
        "UK regulatory approval workflows (ASA, etc.)",
        "UK payment processing support"
      ]
    },
    {
      node_id: "R02",
      title: "UK Retailer Ecosystem",
      scope: "Mapping the UK grocery and multi-category retail landscape, examining marketplace dynamics, economics, and strategic approaches to ecommerce.",
      priority: "High",
      core_questions: [
        "What is the UK grocery/multi-category retail landscape?",
        "How do key retailers approach ecommerce/marketplace strategies?",
        "What are typical economic models for placements, fees, etc.?",
        "What are retailers' 1P, 3P marketplace approaches?",
        "How do UK retailers use data for targeting, measurement & ROI?",
        "How should brands navigate retailer DMPs vs open web execution?"
      ],
      key_outputs_or_impact_on_cos: [
        "Retailer connection API standards",
        "Margin calculation for retailer-specific economics",
        "Retail media workflow specifications",
        "Standard 1P / 3P logic for varying retailer models",
        "Measurement frameworks for retailer vs. open web ROI comparison"
      ]
    }
  ],
  how_to_use_this_spine: "This research spine provides a comprehensive framework for understanding the UK commerce ecosystem as it relates to the Beanies pilot. Each node represents a critical knowledge area that influences platform development. Detailed node documents contain findings that directly impact platform requirements and should be referenced during sprint planning and feature prioritization."
};

export default researchSpineData;