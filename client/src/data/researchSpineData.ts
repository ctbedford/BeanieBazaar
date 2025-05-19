export interface ResearchQuestion {
  question: string;
}

export interface ResearchNodeOutput {
  output: string;
}

export interface ResearchNode {
  node_id: string;
  title: string;
  scope: string;
  priority: string;
  core_questions: string[];
  key_outputs_or_impact_on_cos: string[];
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
      core_questions: [
        "How have UK grocery market shares (Tesco, Sainsbury's, Asda, Morrisons, Aldi, Lidl, Ocado) evolved from 2019-2025, and what are the primary drivers for these shifts (e.g., price, convenience, range, online adoption)?",
        "What are the current and upcoming key regulatory milestones (HFSS implementation details, Extended Producer Responsibility for packaging, Digital Services Act impact on RMNs, VAT rules for CPGs) that will directly intersect with coffee promotion, packaging, pricing, and online advertising in the next 12-24 months?"
      ],
      key_outputs_or_impact_on_cos: [
        "Market sizing and trend data to inform Beanies' JBP narratives and COS opportunity mapping.",
        "Compliance requirements list for TPO engine (HFSS, pricing rules) and JBP content (packaging claims)."
      ]
    },
    {
      node_id: "R02",
      title: "Retailer Profiles, JBP Processes & Incentive Models (UK Focus)",
      scope: "In-depth analysis of key UK grocery retailers: Tesco, Sainsbury's, Asda, Morrisons. Secondary focus: Aldi, Lidl, Ocado, Boots, Costco.",
      priority: "High",
      core_questions: [
        "For Asda & Sainsbury's (initial pilot): What is their precise fiscal calendar (Period P1-P13 start/end dates) and JBP submission/review cadence for 2025-2026?",
        "What are the explicit and implicit rules/criteria for shelf-space allocation and range reviews for the coffee category at Asda & Sainsbury's?"
      ],
      key_outputs_or_impact_on_cos: [
        "Detailed templates and data requirements for COS Auto-JBP Deck Builder (COS-F03).",
        "Input for retailer-specific fiscal calendar logic in COS (COS-F07 component)."
      ]
    },
    {
      node_id: "R03",
      title: "Beanies Product Portfolio & Competitive Landscape",
      scope: "Comprehensive analysis of Beanies' UK portfolio, competitive SKUs, price positioning, listing distribution, and promotional response dynamics.",
      priority: "Medium",
      core_questions: [
        "What is the complete UK SKU landscape for Beanies (flavor, pack size, format, RRP) and where does each SKU sit in the current assortment strategy?",
        "What is the detailed competitive set by retailer (which brands/SKUs does Beanies compete with directly in each retailer)?"
      ],
      key_outputs_or_impact_on_cos: [
        "SKU metadata and competitor mapping for COS data model.",
        "Input for TPO engine promo elasticity modeling and range optimization algorithms."
      ]
    },
    {
      node_id: "R04",
      title: "UK Coffee Category Shopper Insights & Path to Purchase",
      scope: "UK coffee shopper demographics, purchase drivers, behavioral segments, and digital/physical path to purchase analysis.",
      priority: "Medium",
      core_questions: [
        "What are the key shopper segments for flavored instant coffee in the UK, and what percentage of category buyers purchase flavored coffee (vs. regular)?",
        "What is the typical digital and physical path to purchase for Beanies' core demographic in UK grocery?"
      ],
      key_outputs_or_impact_on_cos: [
        "Audience segments for RMN targeting.",
        "Digital touchpoint prioritization for media optimization."
      ]
    }
  ],
  how_to_use_this_spine: "1. Create one dedicated research document/repository... \n2. Within each node's document, start with a \"Question Bank\"...\n3. Actively link all discovered data sources...\n4. Maintain a status for each research question...\n5. Maintain an overall status for each research_spine node...\n6. Review the entire research spine and individual node statuses weekly...\n7. Use the \"Key Outputs or Impact on COS\" to directly inform the backlog..."
};

export default researchSpineData;