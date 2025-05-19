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
      ],
      detailed_document: {
        metadata: {
          version: "1.0",
          date: "2025-05-18"
        },
        session_kick_off_and_alignment: {
          critical_takeaway: "Understanding the UK's unique commerce landscape, including regulatory timelines and shopper behavior, is foundational for successful market entry and adaptation of the Commerce-OS platform.",
          section_tldr: "This session initiates the UK Commerce-OS research by examining the Macro UK Commerce Environment node, setting the stage for subsequent detailed analyses."
        },
        executive_summary_phase: {
          critical_takeaway: "The UK commerce environment is characterized by significant online penetration, evolving consumer missions driven by economic pressures, and a complex, dynamic regulatory landscape (HFSS, EPR) that requires careful navigation.",
          section_tldr: "The UK presents both opportunities (strong e-commerce) and challenges (regulatory changes, cost-of-living impact) that will influence Commerce-OS adaptation."
        },
        detailed_analysis_phase: {
          critical_takeaway: "A granular understanding of UK vs. US market dynamics, the specific timelines and impacts of HFSS and EPR regulations, and current shopper behavior trends is essential for tailoring Commerce-OS effectively.",
          section_tldr: "This section breaks down the core scope and key questions for the Macro UK Commerce Environment, providing initial findings and identifying areas for ongoing research.",
          content_sections: [
            {
              node_document: {
                node_id: "R01",
                node_title: "Macro UK Commerce Environment",
                portability_flag: "🔀 Adapt",
                priority: "High",
                status_box: "➤ In Progress",
                core_scope_and_key_questions_summary: "Investigating UK vs. US market share shifts, critical regulatory timelines (HFSS, EPR, RRP considerations), and evolving shopper mission growth patterns to inform Commerce-OS localization.",
                question_bank: [
                  "What are the key differences in retail market share and growth trajectories between the UK and US from 2019-2025, particularly in e-commerce?",
                  "What is the detailed implementation timeline for HFSS regulations in the UK, including key dates and scope of restrictions (placement, promotions, advertising)?",
                  "What is the detailed implementation timeline for EPR for packaging regulations in the UK, including data collection, fee structures, and labelling requirements?",
                  "Are there specific regulations or significant trends related to Recommended Retail Price (£RRP) that impact pricing strategies in the UK?",
                  "What are the dominant and emerging shopper missions in the UK, and how are they evolving (e.g., convenience, value, online, sustainability)?"
                ],
                key_findings: [
                  {
                    title: "2019-25 Share Shifts UK vs US",
                    critical_takeaway: "The UK has a higher e-commerce prevalence than the US; while overall retail volumes in the UK have been recovering post-pandemic, they remain below 2019 levels in some sectors, with online sales being a key growth driver.",
                    points: [
                      { 
                        text: "UK consumers spent £517 billion on retail in 2024. Online shopping is more prevalent in the UK than in Europe and the US.", 
                        citation: "UK Retail Trends 2025 | Coface" 
                      },
                      { 
                        text: "Online sales in the UK surged from 20% in March 2020 to 37% in February 2021 and remain significantly higher than pre-pandemic levels.", 
                        citation: "UK Retail Trends 2025 | Coface" 
                      },
                      { 
                        text: "While annual sales volumes rose in the UK for the first time since 2021, overall sales volumes remain below 2019 levels as of late 2024.", 
                        citation: "UK Retail Trends 2025 | Coface" 
                      },
                      { 
                        text: "In 2024, UK online spending increased 1.7% year-on-year.", 
                        citation: "UK Retail Trends 2025 | Coface" 
                      },
                      { 
                        text: "Sector performance (2024/2025 outlook): Food Stores (Winner), Non-Store Retail (Online - Winner), Textiles & Clothing (Loser), Household Goods (Loser).", 
                        citation: "UK Retail Trends 2025 | Coface" 
                      }
                    ]
                  },
                  {
                    title: "HFSS / EPR / £RRP Timeline",
                    critical_takeaway: "HFSS and EPR regulations have distinct, phased timelines requiring significant operational adjustments for UK retailers, while RRP remains a guideline subject to fair pricing scrutiny.",
                    points: [
                      { 
                        text: "HFSS (High Fat, Sugar, Salt) Timeline:",
                        subpoints: [
                          { 
                            text: "October 2022: Restrictions on placement of HFSS products in prominent store locations (entrances, aisle ends, checkouts) and their online equivalents came into force in England for large retailers.",
                            citation: "What is HFSS – and does it affect your business? - Hooley Brown, Restricting promotions of products high in fat, sugar or salt - GOV.UK"
                          },
                          { 
                            text: "October 2025: Further laws in England will ban multi-buy offers (BOGOF, 3-for-2) on HFSS products and free refills of sugar-sweetened drinks. Additionally, a ban on TV adverts for HFSS foods before 9 pm and paid-for online advertising campaigns for HFSS products (UK-wide) is due.",
                            citation: "What is HFSS – and does it affect your business? - Hooley Brown"
                          },
                          { 
                            text: "Wales plans to implement similar restrictions from March 2026.", 
                            citation: "HFSS toolkit | The Food & Drink Federation" 
                          }
                        ]
                      },
                      { 
                        text: "EPR (Extended Producer Responsibility) for Packaging Timeline:",
                        subpoints: [
                          { 
                            text: "January 2023: Businesses started collecting correct packaging data.", 
                            citation: "Extended Producer Responsibility (EPR) UK Insight Guide - KM Packaging" 
                          },
                          { 
                            text: "2024: First payments due based on 2023 data. Fees initially depend on material disposal costs.", 
                            citation: "Extended Producer Responsibility (EPR) UK Insight Guide - KM Packaging" 
                          },
                          { 
                            text: "2025: Modulated fees become fully operational, based on comprehensive recyclability assessments. Large producers submit data every 6 months; small producers annually.",
                            citation: "Extended Producer Responsibility (EPR) UK Insight Guide - KM Packaging"
                          },
                          { 
                            text: "March 31, 2026: Mandatory 'Recycle' / 'Do Not Recycle' labelling for packaging (except films and flexibles).",
                            citation: "Extended Producer Responsibility (EPR) UK Insight Guide - KM Packaging" 
                          }
                        ]
                      },
                      { 
                        text: "£RRP (Recommended Retail Price) Considerations:",
                        subpoints: [
                          { 
                            text: "RRP is a price suggested by manufacturers; it's not mandatory for retailers.", 
                            citation: "Understanding RRP Meaning - Supdropshipping" 
                          },
                          { 
                            text: "The Advertising Standards Authority (ASA) advises against using RRPs if the product wasn't genuinely sold at that price by other retailers or if the marketer is the sole seller.",
                            citation: "Prices: Recommended retail prices (RRPs) - ASA | CAP" 
                          },
                          { 
                            text: "The Competition and Markets Authority (CMA) has been reviewing unit pricing in the groceries sector to ensure transparency and fairness for consumers (findings published Jan 2024).",
                            citation: "Unit pricing - GOV.UK" 
                          }
                        ]
                      }
                    ]
                  },
                  {
                    title: "Shopper-Mission Growth",
                    critical_takeaway: "UK shopper missions are increasingly diverse, shaped by online convenience, value-seeking due to economic pressures, the rise of discounters, and a growing, albeit cautious, interest in sustainability.",
                    points: [
                      { 
                        text: "Younger Britons (25-39) favor online shopping, while older shoppers (55+) prefer in-store experiences.", 
                        citation: "UK retail trends and insights – YouGov Business" 
                      },
                      { 
                        text: "Cost-of-living crisis continues to impact sales volumes; consumers are price-sensitive.", 
                        citation: "UK Retail Trends 2025 | Coface" 
                      },
                      { 
                        text: "Growth in demand for health supplements, vitamins, and high-protein foods, influenced by social media, particularly among Gen Z.", 
                        citation: "UK Retail Trends 2025 | Coface" 
                      },
                      { 
                        text: "Shift towards more frequent 'top-up' shopping is creating growth in the convenience store market, though these stores face challenges with price perception.", 
                        citation: "UK Convenience Stores Market Report 2025 - Mintel Store" 
                      },
                      { 
                        text: "Discounters continue to gain market share, with 95% of UK consumers having shopped at a discounter in the past year. Aldi and Lidl are major players.", 
                        citation: "UK Discount Retail Market Report 2024-2029 - Mintel Store" 
                      },
                      { 
                        text: "Loyalty programs are key, but paid schemes face resistance; discounts and monetary rewards are most appealing.", 
                        citation: "UK retail trends and insights – YouGov Business" 
                      }
                    ]
                  }
                ],
                source_links: [
                  {
                    title: "UK Retail Trends 2025: Challenges, Winners & Market Shifts | Coface",
                    url: "https://www.coface.uk/news-economy-and-insights/uk-sector-snapshot-retail-trends"
                  },
                  {
                    title: "Retail sector in the UK - UK Parliament",
                    url: "https://researchbriefings.files.parliament.uk/documents/SN06186/SN06186.pdf"
                  },
                  {
                    title: "HFSS toolkit | The Food & Drink Federation",
                    url: "https://www.fdf.org.uk/fdf/resources/toolkits/diet-and-health/hfss-toolkit/"
                  },
                  {
                    title: "Extended Producer Responsibility (EPR) UK Insight Guide - KM Packaging",
                    url: "https://www.kmpackaging.com/knowledge/library/extended-producer-responsibility-epr-insight-guide"
                  },
                  {
                    title: "UK retail trends and insights – YouGov Business",
                    url: "https://business.yougov.com/content/51273-uk-retail-trends-and-insights-a-comprehensive-overview-for-2024"
                  }
                ]
              }
            }
          ]
        },
        evidence_and_transparency_phase: {
          critical_takeaway: "The findings for the UK Macro Commerce Environment are based on publicly available data from governmental bodies, market research firms, and industry publications, ensuring a transparent foundation for analysis.",
          section_tldr: "This section confirms that the presented data is collated from credible, open sources concerning UK retail and regulatory landscapes."
        },
        key_learnings_and_reinforcement: {
          critical_takeaway: "Successfully entering the UK market requires proactive adaptation to its advanced e-commerce scene, strict adherence to upcoming HFSS and EPR regulations, and a nuanced understanding of value-driven, mission-oriented UK shopper behavior.",
          section_tldr: "Recapping the core themes: the UK's digital maturity, significant regulatory shifts, and evolving consumer demands are pivotal for Commerce-OS strategy."
        },
        concluding_thoughts_and_path_forward: {
          critical_takeaway: "The 'Macro UK Commerce Environment' node provides the essential groundwork; future nodes will delve into specific retailer profiles, media networks, and other critical components for a holistic UK market understanding.",
          section_tldr: "This initial analysis of the UK macro environment is complete, setting the stage for subsequent detailed node investigations as per the research spine."
        }
      }
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