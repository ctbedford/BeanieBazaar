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
      ],
      detailed_document: {
        metadata: {
          version: "1.0",
          date: "2025-05-18"
        },
        session_kick_off_and_alignment: {
          critical_takeaway: "Adapting Commerce-OS for the UK requires a deep understanding of each major retailer's operational rhythms, supplier engagement models (like JBP cadence), and buyer motivations, which can differ significantly from US counterparts.",
          section_tldr: "This session focuses on Node 2: 'Retailer Profiles & Incentive Models', detailing fiscal calendars, JBP approaches, and typical buyer objectives for key UK grocery retailers."
        },
        executive_summary_phase: {
          critical_takeaway: "UK retailers operate on varied fiscal calendars, generally engage in annual or bi-annual JBP cycles with ongoing dialogues, and their buyers focus on volume, value, category growth, and margin delivery, though specific OKRs and margin rules are confidential and highly nuanced.",
          section_tldr: "Understanding individual UK retailer timelines and engagement styles is crucial; while detailed buyer OKRs are private, their general objectives align with achieving category leadership and profitability."
        },
        detailed_analysis_phase: {
          critical_takeaway: "Each UK retailer has distinct characteristics in its financial reporting, supplier engagement approach, and strategic priorities, necessitating tailored strategies and data inputs for Commerce-OS.",
          section_tldr: "This section details available information on fiscal calendars, inferred JBP practices, and general buyer objectives for Tesco, Sainsbury's, Asda, Morrisons, Aldi, Lidl, Ocado, and Costco, highlighting the need to adapt US-centric views.",
          content_sections: [
            {
              node_document: {
                node_id: "R02",
                node_title: "Retailer Profiles & Incentive Models",
                portability_flag: "🔀 Adapt",
                priority: "High",
                status_box: "➤ In Progress",
                core_scope_and_key_questions_summary: "Profiling key UK retailers (Tesco, Sainsbury's, Asda, Morrisons, Aldi, Lidl, Ocado, Costco) by examining their fiscal calendars, typical JBP cadences, and generally understood buyer OKRs and margin considerations.",
                question_bank: [
                  "What is the fiscal year-end for Tesco, Sainsbury's, Asda, Morrisons, Aldi, Lidl, Ocado, and Costco in the UK?",
                  "What is the typical Joint Business Planning (JBP) cadence and process for suppliers engaging with these retailers?",
                  "What are the common Objectives and Key Results (OKRs) or performance metrics for buyers at these UK retailers?",
                  "What are the general principles or common knowledge regarding margin rules and expectations when supplying these UK retailers?",
                  "How do these operational aspects differ from typical US retailer practices?"
                ],
                key_findings: [
                  {
                    title: "Tesco Profile",
                    critical_takeaway: "Tesco operates on a February fiscal year-end and uses a structured supplier engagement process, with buyer objectives focused on both sales performance and profitability.",
                    points: [
                      {
                        text: "Fiscal Year: Typically ends in February.",
                        citation: "GuruFocus; Tesco.com"
                      },
                      {
                        text: "JBP Cadence: Assumed to be annual, aligned with the fiscal year, with regular category reviews. Tesco provides a supplier helpline and a portal for new supplier submissions, indicating structured engagement processes.",
                        citation: "Suppliers - Tesco PLC"
                      },
                      {
                        text: "Buyer OKRs (General): Focus on sales volume and value, market share, category growth, profitability (Tesco's gross margin was reported as 7.22% for FY ending Feb 2025), stock availability, promotional effectiveness, and new product development.",
                        citation: "GuruFocus"
                      },
                      {
                        text: "Margin Rules (General): Confidential. Margins are negotiated. Tesco aims for competitive pricing while maintaining its margin. Their reported gross margin provides a high-level indicator but doesn't reflect individual supplier terms.",
                        citation: "Industry understanding"
                      }
                    ]
                  },
                  {
                    title: "Sainsbury's Profile",
                    critical_takeaway: "Sainsbury's fiscal year typically ends in March, with a focus on long-term supplier relationships and strategies centered on food volume growth and operational efficiency.",
                    points: [
                      {
                        text: "Fiscal Year: Typically ends around the first week of March (e.g., '52 weeks ended 1 March 2025').",
                        citation: "Preliminary Results - Sainsbury's PLC"
                      },
                      {
                        text: "JBP Cadence: Likely annual, aligned with fiscal reporting. Sainsbury's emphasizes long-term supplier relationships and collaboration, e.g., through its Pork Steering Group, suggesting ongoing dialogue and structured planning.",
                        citation: "Proudly sourcing British pork - Sainsbury's"
                      },
                      {
                        text: "Buyer OKRs (General): Driven by their 'Next Level' strategy focusing on food volume growth ahead of market, customer satisfaction, and operational efficiency. Key metrics likely include sales, profit, market share, supply chain efficiency, and sustainability goals.",
                        citation: "Industry understanding"
                      },
                      {
                        text: "Margin Rules (General): Confidential. S&P Global Ratings noted Sainsbury's adjusted EBITDA margins at about 6.5%-6.7%. Focus is on maintaining a competitive price position while delivering value and quality.",
                        citation: "S&P Global Ratings on Sainsbury's"
                      }
                    ]
                  },
                  {
                    title: "Asda Profile",
                    critical_takeaway: "Asda's financial year ends in December, with a focus on value-driven strategies and improving margins through their structured supplier engagement processes.",
                    points: [
                      {
                        text: "Fiscal Year: Financial year (FY) ends in December (e.g., 'FY24 results' for year ending December 2024).",
                        citation: "Asda updates on FY24 results - Asda Corporate"
                      },
                      {
                        text: "JBP Cadence: Likely follows an annual cycle. Asda has a new supplier portal and uses platforms like RangeMe for new product submissions, indicating structured processes for supplier engagement.",
                        citation: "Welcome to Asda Supplier | Asda Supplier, Becoming a Supplier - Asda corporate"
                      },
                      {
                        text: "Buyer OKRs (General): Focused on delivering value ('Rollback to Asda Price' strategy), improving gross margins (noted improvement in FY24), enhancing product range, store standards, and customer satisfaction. Likely includes sales targets, margin growth, market share, and operational improvements.",
                        citation: "Industry understanding"
                      },
                      {
                        text: "Margin Rules (General): Confidential. Emphasis on price competitiveness and value for customers. Margin strategy would involve balancing low prices with overall profitability.",
                        citation: "Industry understanding"
                      }
                    ]
                  },
                  {
                    title: "Morrisons Profile",
                    critical_takeaway: "Morrisons has a late October fiscal year-end and focuses on direct supplier relationships, with buyer objectives centered on sales growth, availability, and loyalty expansion.",
                    points: [
                      {
                        text: "Fiscal Year: Ends in late October (e.g., '52 weeks ending 27 October 2024').",
                        citation: "Morrisons trading update - Morrisons Corporate"
                      },
                      {
                        text: "JBP Cadence: Assumed annual cycle. Morrisons has specific programs for suppliers, like 'Growing British Brands' and processes for 'Direct To Store' suppliers, suggesting structured engagement and planning phases.",
                        citation: "Becoming A Morrisons Daily Direct To Store Supplier"
                      },
                      {
                        text: "Buyer OKRs (General): Key objectives include LFL sales growth, improving availability, sharper pricing, effective promotions, and growing their loyalty scheme (More Card). Buyers would be measured on category sales, profit, stock management, and supplier collaboration.",
                        citation: "Industry understanding"
                      },
                      {
                        text: "Margin Rules (General): Confidential. For their wholesale franchise partners, Morrisons mentions 'exceptional double-digit margins,' suggesting they aim for strong margins themselves to pass on benefits. This indicates a focus on profitable sales.",
                        citation: "Franchise - Morrisons PDF"
                      }
                    ]
                  },
                  {
                    title: "Discount Retailers (Aldi & Lidl)",
                    critical_takeaway: "Aldi and Lidl operate on calendar-year fiscal reporting with a strong focus on efficiency, value, and limited SKUs, driving high volume sales with tight margin control.",
                    points: [
                      {
                        text: "Aldi Fiscal Year: Privately owned, but results reported for 12 months to December 2023 indicate a calendar year basis.",
                        citation: "ALDI ANNOUNCES £800M INVESTMENT - Aldi Press Centre"
                      },
                      {
                        text: "Lidl Fiscal Year: Privately owned. Financial year referenced often aligns with typical UK tax year or calendar year for reporting investment periods.",
                        citation: "Lidl to invest GBP500 million - Morningstar"
                      },
                      {
                        text: "JBP Approach: Both focus on long-term supplier partnerships with emphasis on efficiency and value. Aldi has supplier engagement on climate sustainability, while Lidl runs a 'Supplier Engagement Programme'.",
                        citation: "Partnering for progress - Aldi South Group, Supplier Engagement Programme - Lidl Ireland"
                      },
                      {
                        text: "Buyer Focus: Strong price proposition, high-volume sales of curated ranges, operational efficiency, and quality assurance. Discounters manage limited SKUs with expectation of high turnover.",
                        citation: "Industry understanding"
                      }
                    ]
                  },
                  {
                    title: "Online & Specialty Retailers",
                    critical_takeaway: "Ocado and Costco operate on distinctive models - Ocado with a continuous range review focused on unique products, and Costco with a membership-based approach centered on bulk items and limited SKUs.",
                    points: [
                      {
                        text: "Ocado Fiscal Year: Ocado Group results typically around February, with quarterly trading statements.",
                        citation: "Financial Calendar | Ocado Group"
                      },
                      {
                        text: "Ocado Approach: Continuous range review rather than fixed windows. Suppliers apply online; buyers seek new, unique products and competitive commercials.",
                        citation: "Supply Ocado"
                      },
                      {
                        text: "Costco Fiscal Year: Aligns with US parent company, ending around August/September.",
                        citation: "Costco Wholesale Corporation Reports Second Quarter Results"
                      },
                      {
                        text: "Costco Approach: Annual planning focused on high-volume bulk items with limited SKU count. Profitability model differs with significant reliance on membership fees, allowing for tighter supplier margins.",
                        citation: "Complete Guide to Costco Dropshipping - HustleGotReal"
                      }
                    ]
                  }
                ],
                source_links: [
                  {
                    title: "Tesco PLC Suppliers",
                    url: "https://www.tescoplc.com/contacts/suppliers/"
                  },
                  {
                    title: "Sainsbury's Preliminary Results March 2025",
                    url: "https://www.about.sainsburys.co.uk/news/latest-news/2025/17-04-2025-preliminary-results-for-the-52-weeks-to-1st-march-2025"
                  },
                  {
                    title: "Asda Supplier Portal",
                    url: "https://www.asdasupplier.com/"
                  },
                  {
                    title: "Morrisons Trading Update Oct 2024",
                    url: "https://www.morrisons-corporate.com/media-centre/corporate-news/morrisons-trading-update-for-q4-and-full-year-202324/"
                  },
                  {
                    title: "Aldi UK Investment and Results (Dec 2023)",
                    url: "https://www.aldipresscentre.co.uk/business-news/aldi-announces-800m-investment-in-britain-after-record-sales/"
                  },
                  {
                    title: "Ocado Group Financial Calendar",
                    url: "https://www.ocadogroup.com/investors/financial-calendar"
                  },
                  {
                    title: "Costco Wholesale Corporation Q2 2025 Results",
                    url: "https://investor.costco.com/news/news-details/2025/Costco-Wholesale-Corporation-Reports-Second-Quarter-and-Year-To-Date-Operating-Results-For-Fiscal-2025-and-February-Sales-Results/default.aspx"
                  }
                ]
              }
            }
          ]
        },
        evidence_and_transparency_phase: {
          critical_takeaway: "Information on fiscal calendars and JBP approaches is primarily derived from public financial reporting and corporate supplier portals; however, specific buyer OKRs and margin rules are confidential and thus based on general industry understanding.",
          section_tldr: "This section confirms that findings are based on publicly available data, with an explicit acknowledgment of the commercial sensitivity and unavailability of detailed buyer incentive structures and margin policies."
        },
        key_learnings_and_reinforcement: {
          critical_takeaway: "Effective UK retailer engagement hinges on understanding each entity's unique fiscal rhythm, anticipating their JBP cycles with tailored proposals, and aligning with buyer objectives that typically revolve around category growth, profitability, and market share, even if specific targets remain opaque.",
          section_tldr: "Recapping core themes: diverse retailer operational calendars and the necessity for adaptable JBP strategies are key, alongside a general understanding of buyer motivations in the absence of explicit OKR data."
        },
        concluding_thoughts_and_path_forward: {
          critical_takeaway: "Node 2 provides a foundational understanding of UK retailer operational frameworks; the subsequent nodes will build on this by examining the specific Retail Media Networks and Data Providers associated with these key players.",
          section_tldr: "This analysis of UK Retailer Profiles & Incentive Models is complete, paving the way for investigating the media and data ecosystems supporting them."
        }
      }
    },
    {
      node_id: "R03",
      title: "Retail Media Networks (RMN)",
      scope: "Analysis of UK Retail Media Networks, including Nectar360, Tesco Media & Insight Platform, Morrisons Media Group, and Asda Media Partnerships (LS Eleven).",
      priority: "High",
      core_questions: [
        "What are the primary advertising solutions (onsite, offsite, in-store) offered by Nectar360, Tesco Media & Insight, Morrisons Media Group, and Asda Media Partnerships?",
        "What is known about their booking mechanisms, availability of APIs for programmatic buying, and typical minimum spend requirements?",
        "How do these RMNs approach campaign attribution, particularly connecting online advertising to in-store sales?"
      ],
      key_outputs_or_impact_on_cos: [
        "Integration points and connectors for RMN platforms in Commerce-OS.",
        "Data structures for campaign planning, execution, and results aggregation across diverse RMNs."
      ],
      detailed_document: {
        metadata: {
          version: "1.0",
          date: "2025-05-18"
        },
        session_kick_off_and_alignment: {
          critical_takeaway: "UK Retail Media Networks are rapidly maturing, leveraging rich first-party data to offer sophisticated targeting and measurement capabilities, making them critical for brands to understand and integrate into their strategies.",
          section_tldr: "This session dives into Node 3: 'Retail Media Networks (RMN)', exploring the offerings of Nectar360, Tesco Media & Insight, Morrisons Media Group, and Asda Media Partnerships, focusing on their booking mechanisms, attribution, and segmentation."
        },
        executive_summary_phase: {
          critical_takeaway: "UK RMNs, powered by extensive loyalty card data (Nectar, Clubcard, Asda Rewards), offer brands potent omnichannel advertising opportunities with increasingly sophisticated self-serve options, granular audience segmentation, and closed-loop attribution connecting media spend to both online and in-store sales.",
          section_tldr: "Key UK grocers have developed powerful RMNs that provide deep customer insights and targeted advertising channels, crucial for brands aiming to influence shoppers at multiple touchpoints. Exact API details and spend floors remain largely direct-engagement topics."
        },
        detailed_analysis_phase: {
          critical_takeaway: "While specific operational details like API endpoints and minimum spends are often proprietary, the strategic capabilities of UK RMNs—their data depth, targeting precision, and measurement sophistication—are clear and demand tailored approaches from brands using Commerce-OS.",
          section_tldr: "This section breaks down Nectar360, Tesco Media & Insight, Morrisons Media Group, and Asda Media Partnerships, focusing on their known capabilities in booking, attribution, and segmentation, highlighting the common theme of first-party data power.",
          content_sections: [
            {
              node_document: {
                node_id: "R03",
                node_title: "Retail Media Networks (RMN)",
                portability_flag: "🔀 Adapt",
                priority: "High",
                status_box: "➤ In Progress",
                core_scope_and_key_questions_summary: "Profiling key UK Retail Media Networks: Nectar360, Tesco Media & Insight Platform, Morrisons Media Group, and Asda Media Partnerships (LS Eleven). Focus on their booking APIs & spend floors, and attribution & segment granularity.",
                question_bank: [
                  "What are the primary advertising solutions (onsite, offsite, in-store) offered by Nectar360, Tesco Media & Insight, Morrisons Media Group, and Asda Media Partnerships?",
                  "What is known about their booking mechanisms, availability of APIs for programmatic buying, and typical minimum spend requirements?",
                  "How do these RMNs approach campaign attribution, particularly connecting online advertising to in-store sales?",
                  "What is the level of audience segmentation granularity offered, and what first-party data sources are leveraged?",
                  "Are there self-service platforms available for campaign management?"
                ],
                key_findings: [
                  {
                    title: "Nectar360 (Sainsbury's)",
                    critical_takeaway: "Nectar360 leverages Sainsbury's extensive loyalty data to provide robust digital advertising solutions both onsite and offsite, with emerging self-serve capabilities and sophisticated closed-loop attribution.",
                    points: [
                      {
                        text: "Leverages Nectar loyalty data from Sainsbury's, Argos, and other partners.",
                        citation: "Nectar360's data-driven omnichannel success - Think with Google"
                      },
                      {
                        text: "Offers onsite (Sainsbury's.co.uk) and offsite digital advertising (paid social, display, video, YouTube) via its Digital Trading Platform (DTP).",
                        citation: "Nectar360's data-driven omnichannel success - Think with Google"
                      },
                      {
                        text: "Digital Trading Platform (DTP) allows self-serve campaign setup and management, as well as managed services.",
                        citation: "Top Tips For Offsite Retail Media Campaigns - Nectar360"
                      },
                      {
                        text: "Closed-loop attribution: Connects digital ad exposure to in-store and online sales by Nectar customers.",
                        citation: "Nectar360's data-driven omnichannel success - Think with Google"
                      },
                      {
                        text: "Audience Builder allows creation of custom audiences based on purchase history (brand buyers, lapsed customers, competitor buyers, basket modelling lookalikes).",
                        citation: "Nectar360's data-driven omnichannel success - Think with Google"
                      }
                    ]
                  },
                  {
                    title: "Tesco Media & Insight Platform",
                    critical_takeaway: "Powered by dunnhumby, Tesco's platform leverages Clubcard data from 23 million households to offer a full-funnel retail media solution with robust self-serve capabilities and closed-loop measurement across channels.",
                    points: [
                      {
                        text: "Utilises Tesco Clubcard data from over 23 million households.",
                        citation: "Tesco Media and Insight Platform - Dunnhumby"
                      },
                      {
                        text: "Offers a full-funnel retail media proposition: onsite (Targeted Display, Sponsored Products), offsite (targeting key audiences away from Tesco's storefront), in-store (Connected Store - POS, digital screens, radio), CRM, and experiential events.",
                        citation: "Tesco Media and Insight Platform - Dunnhumby"
                      },
                      {
                        text: "Offers a self-serve platform ('dunnhumby Sphere') for planning, executing, and measuring omnichannel campaigns.",
                        citation: "Unlocking success: why agency planning teams should get Tesco retail media certified - Dunnhumby"
                      },
                      {
                        text: "Closed-loop measurement: Connects advertising exposure to customer behavior across online and offline touchpoints.",
                        citation: "Tesco Media and Insight Platform - Dunnhumby"
                      },
                      {
                        text: "Empowers brands with granular insights to identify important customers and understand their behavior through self-serve insight solutions.",
                        citation: "Tesco Media and Insight Platform - Dunnhumby"
                      }
                    ]
                  },
                  {
                    title: "Asda Media Partnerships",
                    critical_takeaway: "Asda's retail media offering, operated through LS Eleven in partnership with SMG and LiveRamp, provides a privacy-centric solution with tiered access models and advanced audience segmentation capabilities.",
                    points: [
                      {
                        text: "Leverages Asda Rewards customer data (over 7 million active users, 10 million+ shoppers).",
                        citation: "Asda expands retail media to offsite and D2C - InternetRetailing"
                      },
                      {
                        text: "Offers onsite, offsite (e.g., Meta), and in-store media opportunities.",
                        citation: "Asda expands retail media to offsite and D2C - InternetRetailing"
                      },
                      {
                        text: "'Asda Access' is their retail media proposition, aiming for a privacy-centric approach to audience targeting.",
                        citation: "Asda taps LiveRamp data collaboration platform - Retail Technology Innovation Hub"
                      },
                      {
                        text: "Three collaboration models: managed service, self-serve for agencies, and 'super self-serve' for brands wanting direct access to Asda data in a LiveRamp clean room.",
                        citation: "Asda taps LiveRamp data collaboration platform - Retail Technology Innovation Hub"
                      },
                      {
                        text: "Offers approximately 3,000 predefined first-party audience segments, with capabilities to build custom audiences.",
                        citation: "Asda expands retail media to offsite and D2C - InternetRetailing"
                      }
                    ]
                  },
                  {
                    title: "Morrisons Media Group",
                    critical_takeaway: "Morrisons Media Group operates in partnership with SMG to provide a unified access point for brands, focusing on owned media channels and leveraging first-party data for personalized advertising.",
                    points: [
                      {
                        text: "Acts as a 'one front door' for brands and agencies to reach Morrisons customers.",
                        citation: "Morrisons Media Group (MMG) launches innovative channels - Morrisons Corporate"
                      },
                      {
                        text: "Offers owned media (in-store digital screens at Market Street counters, trolley media) and external media platforms (e.g., personalised ads on Facebook and Instagram using first-party data).",
                        citation: "Morrisons Media Group ramps up retail media offering - Retail Technology Innovation Hub"
                      },
                      {
                        text: "Launched in September 2022, aiming to enhance connections between customers and brands.",
                        citation: "Morrisons Media Group (MMG) launches innovative channels - Morrisons Corporate"
                      },
                      {
                        text: "Likely a mix of managed services through SMG. Specifics on self-serve platforms, APIs, or spend floors are not as publicly detailed as other RMNs.",
                        citation: "Morrisons Media Group ramps up retail media offering - Retail Technology Innovation Hub"
                      },
                      {
                        text: "Leverages Morrisons' first-party data asset for personalised ads.",
                        citation: "Morrisons Media Group (MMG) launches innovative channels - Morrisons Corporate"
                      }
                    ]
                  }
                ],
                source_links: [
                  {
                    title: "Nectar360's data-driven omnichannel success - Think with Google",
                    url: "https://www.thinkwithgoogle.com/intl/en-emea/future-of-marketing/digital-transformation/nectar360-data-omnichannel-success/"
                  },
                  {
                    title: "Tesco Media and Insight Platform - Dunnhumby",
                    url: "https://www.dunnhumby.com/tesco-media-insight-platform/"
                  },
                  {
                    title: "Morrisons Media Group (MMG) launches innovative channels - Morrisons Corporate",
                    url: "https://www.morrisons-corporate.com/media-centre/corporate-news/morrisons-media-group-mmg-launches-innovative-channels-for-brands-to-connect-with-customers/"
                  },
                  {
                    title: "Asda taps LiveRamp data collaboration platform - Retail Technology Innovation Hub",
                    url: "https://retailtechinnovationhub.com/home/2025/5/7/asda-taps-liveramp-data-collaboration-platform-as-grocery-giant-expands-retail-media-proposition"
                  },
                  {
                    title: "Asda expands retail media to offsite and D2C - InternetRetailing",
                    url: "https://internetretailing.net/asda-expands-retail-media-to-offsite-and-d2c-bringing-first-party-data-from-10-million-shoppers-to-brands/"
                  }
                ]
              }
            }
          ]
        },
        evidence_and_transparency_phase: {
          critical_takeaway: "Findings on RMN capabilities are based on their public announcements, corporate websites, and industry reports; however, granular details on API specifications, spend floors, and the full extent of self-serve functionalities are typically gated behind direct commercial engagement.",
          section_tldr: "Information is collated from public sources, with an understanding that specific operational details of RMNs are often confidential or accessible only to direct partners."
        },
        key_learnings_and_reinforcement: {
          critical_takeaway: "UK RMNs are indispensable for brands seeking to influence purchase decisions, offering unparalleled access to first-party shopper data for targeted, measurable campaigns across the digital and physical retail landscape. Mastering these platforms is key to competitive advantage.",
          section_tldr: "Recapping core themes: UK RMNs provide deep audience insights and omnichannel reach, driven by loyalty data. Navigating their unique offerings and data capabilities is vital for effective marketing."
        },
        concluding_thoughts_and_path_forward: {
          critical_takeaway: "Node 3 has illuminated the powerful capabilities of UK RMNs. The next logical step is to understand the data providers and clean room technologies that often underpin or complement these networks.",
          section_tldr: "This analysis of UK RMNs sets the stage for investigating the broader data ecosystem in Node 4, which is critical for advanced targeting and measurement."
        }
      }
    },
    {
      node_id: "R04",
      title: "Data Providers & Clean-Room Tech",
      scope: "Analysis of key UK data providers and clean-room technology enablers: Crisp (Atheon), NielsenIQ, Kantar, LiveRamp, and dunnhumby.",
      priority: "High",
      core_questions: [
        "What are the primary data solutions or clean-room technologies offered by Crisp, NielsenIQ, Kantar, LiveRamp, and dunnhumby in the UK market?",
        "What is generally known about the frequency/cadence of their data feeds or updates?",
        "How do these entities typically position themselves in terms of being a data processor versus a data controller under UK GDPR?"
      ],
      key_outputs_or_impact_on_cos: [
        "Integration capabilities with third-party data providers for Commerce-OS.",
        "Compliance frameworks for data handling in accordance with UK GDPR requirements."
      ],
      detailed_document: {
        metadata: {
          version: "1.0",
          date: "2025-05-18"
        },
        session_kick_off_and_alignment: {
          critical_takeaway: "Understanding the landscape of data providers and clean-room technologies in the UK is crucial for leveraging third-party data, enabling secure data collaboration, and ensuring GDPR compliance in an increasingly complex data ecosystem.",
          section_tldr: "This session explores Node 4: 'Data Providers & Clean-Room Tech', examining entities like Crisp, NielsenIQ, Kantar, LiveRamp, and dunnhumby, with a focus on their data feed characteristics, cost considerations, and GDPR roles."
        },
        executive_summary_phase: {
          critical_takeaway: "Major data providers like NielsenIQ and Kantar offer market measurement and consumer insights, while specialists like Crisp (Atheon) focus on retail supply chain data. Clean-room providers such as LiveRamp enable secure data collaboration. Dunnhumby is a key player in customer data science. Specifics on feed cadences and cost tiers are largely confidential, and their GDPR roles (processor/controller) vary by service.",
          section_tldr: "The UK data landscape features established measurement firms, retail data specialists, and advanced clean-room enablers. Accessing detailed operational and cost information requires direct engagement, and GDPR compliance necessitates careful role definition."
        },
        detailed_analysis_phase: {
          critical_takeaway: "While precise operational terms (feed cadence, cost) are guarded, the strategic value of UK data providers and clean room tech lies in their ability to deliver market intelligence, enable secure data sharing, and power customer-centric strategies. Their GDPR roles are service-dependent and crucial for compliance.",
          section_tldr: "This section details Crisp, NielsenIQ, Kantar, LiveRamp, and dunnhumby, outlining their services and typical GDPR positioning, while noting the general unavailability of specific feed/cost details.",
          content_sections: [
            {
              node_document: {
                node_id: "R04",
                node_title: "Data Providers & Clean-Room Tech",
                portability_flag: "🔀 Adapt",
                priority: "High",
                status_box: "➤ In Progress",
                core_scope_and_key_questions_summary: "Profiling key UK data providers and clean-room technology enablers: Crisp (Atheon), NielsenIQ, Kantar, LiveRamp, and dunnhumby. Focus on their typical feed cadences and cost tiers (where available/inferable), and their status as data processors versus controllers.",
                question_bank: [
                  "What are the primary data solutions or clean-room technologies offered by Crisp, NielsenIQ, Kantar, LiveRamp, and dunnhumby in the UK market?",
                  "What is generally known about the frequency/cadence of their data feeds or updates?",
                  "What are the typical cost models or tiers for accessing their services (e.g., subscription, project-based, volume-based)? (Acknowledge confidentiality)",
                  "How do these entities typically position themselves or operate in terms of being a data processor versus a data controller under UK GDPR for their various services?",
                  "What are the key benefits and potential challenges of integrating with these providers for a Commerce-OS platform?"
                ],
                key_findings: [
                  {
                    title: "Crisp (incorporating Atheon Analytics/SKUtrak & ClearBox Analytics)",
                    critical_takeaway: "Crisp provides a collaborative commerce platform for retail supply chain data, helping brands optimize their operations through retailer data integration while primarily acting as a data processor.",
                    points: [
                      {
                        text: "Collaborative commerce platform focusing on retail supply chain data for CPG brands and retailers.",
                        citation: "Crisp Acquires Atheon Analytics and ClearBox Analytics - Business Wire"
                      },
                      {
                        text: "Integrates and harmonizes data from retailers (Tesco, Sainsbury's, Asda, Morrisons, Waitrose in the UK via SKUtrak) and distributors.",
                        citation: "Crisp boosts retail supply chain insights with Atheon and ClearBox deals - Retail Insight Network"
                      },
                      {
                        text: "Provides SKU-level data, demand intelligence, and insights to reduce waste, improve availability, and optimize sales.",
                        citation: "Crisp boosts retail supply chain insights with Atheon and ClearBox deals - Retail Insight Network"
                      },
                      {
                        text: "Feed Cadence: Likely daily or near real-time for retailer POS/inventory data to enable actionable insights. Specifics depend on retailer agreements.",
                        citation: "Crisp boosts retail supply chain insights with Atheon and ClearBox deals - Retail Insight Network"
                      },
                      {
                        text: "Primarily acts as a Data Processor when handling retailer and CPG data on behalf of its clients to provide analytics and insights.",
                        citation: "Data processor obligations under UK GDPR - Harper James Solicitors"
                      }
                    ]
                  },
                  {
                    title: "NielsenIQ",
                    critical_takeaway: "NielsenIQ delivers retail measurement services and consumer panel insights, acting primarily as a data controller for its syndicated market data products with regular reporting cycles.",
                    points: [
                      {
                        text: "Global measurement and data analytics company providing insights into consumer behavior and market dynamics.",
                        citation: "NielsenIQ Official Website"
                      },
                      {
                        text: "Offers retail measurement services (RMS) tracking sales, market share, distribution, pricing for CPGs and retailers.",
                        citation: "NielsenIQ Official Website"
                      },
                      {
                        text: "Consumer panel services offering insights into shopper purchasing habits and trends.",
                        citation: "NielsenIQ Official Website"
                      },
                      {
                        text: "Feed Cadence: Varies by service. Retail measurement data typically updated weekly or monthly. Consumer panel data also has regular reporting cycles.",
                        citation: "LSE Market Data (Example of Data Feed Frequencies - General Context)"
                      },
                      {
                        text: "Often acts as a Data Controller for the syndicated market data and consumer panel data it collects and sells, as it determines the purposes and means of processing for these products.",
                        citation: "Data Controller vs Processor: Working Out Your GDPR Role | Sprintlaw UK"
                      }
                    ]
                  },
                  {
                    title: "LiveRamp",
                    critical_takeaway: "LiveRamp's data collaboration platform enables secure sharing of first, second, and third-party data between business entities, primarily serving as a data processor for client data while acting as a controller for its own platform operations.",
                    points: [
                      {
                        text: "Data collaboration platform offering identity resolution and clean room technology.",
                        citation: "LiveRamp Clean Room Architecture Deep Dive - LiveRamp Blog"
                      },
                      {
                        text: "Enables secure collaboration of first, second, and third-party data between brands, agencies, media owners, and data partners.",
                        citation: "LiveRamp Named a Leader in 2025 IDC MarketScape: Worldwide Data Clean Room Technology - Business Wire"
                      },
                      {
                        text: "Supports planning, audience activation, and campaign measurement across various cloud environments (AWS, Azure, GCP, Snowflake, Databricks) with a 'zero-copy' principle for data sharing.",
                        citation: "LiveRamp Clean Room Architecture Deep Dive - LiveRamp Blog"
                      },
                      {
                        text: "Feed Cadence: Not applicable in the traditional sense; it facilitates secure connection and analysis of clients' data. Update frequency depends on the participating parties' data sources.",
                        citation: "LiveRamp Clean Room Architecture Deep Dive - LiveRamp Blog"
                      },
                      {
                        text: "Primarily acts as a Data Processor when providing clean room technology and data collaboration services, processing data on behalf of and under the instruction of its clients (the data controllers).",
                        citation: "Data processor obligations under UK GDPR - Harper James Solicitors"
                      }
                    ]
                  },
                  {
                    title: "dunnhumby",
                    critical_takeaway: "Dunnhumby, best known for its Tesco partnership, provides customer-centric data science solutions, typically acting as a data processor for retail clients while potentially being a controller for its own analytical products.",
                    points: [
                      {
                        text: "Global customer data science company.",
                        citation: "dunnhumby Official Website"
                      },
                      {
                        text: "Best known for its partnership with Tesco, powering the Tesco Media & Insight Platform using Clubcard data.",
                        citation: "dunnhumby Official Website"
                      },
                      {
                        text: "Beyond RMNs, offers retailers and brands customer-centric solutions, loyalty program expertise, category management, price and promotion optimization, and media personalization services.",
                        citation: "dunnhumby Official Website"
                      },
                      {
                        text: "Feed Cadence: When working with retailer data, this depends on the retailer's systems (often daily or near real-time for transactional data). For its own analytical products, cadence will vary.",
                        citation: "LSE Market Data (Example of Data Feed Frequencies - General Context)"
                      },
                      {
                        text: "Primarily acts as a Data Processor when analyzing customer data on behalf of a retail client (e.g., Tesco) under their instructions and for their purposes.",
                        citation: "Data processor obligations under UK GDPR - Harper James Solicitors"
                      }
                    ]
                  },
                  {
                    title: "Kantar",
                    critical_takeaway: "Kantar delivers brand tracking, market research, and consumer panel data, generally acting as a data controller for syndicated insights while serving as a processor for client-commissioned research.",
                    points: [
                      {
                        text: "Global data, insights, and consulting company.",
                        citation: "Kantar Official Website"
                      },
                      {
                        text: "Offers services including brand tracking, market research, media effectiveness, consumer panel data (e.g., Worldpanel division tracking shopper purchasing).",
                        citation: "Kantar Official Website"
                      },
                      {
                        text: "Provides insights into consumer attitudes, behaviors, and media consumption.",
                        citation: "Kantar Official Website"
                      },
                      {
                        text: "Feed Cadence: Varies by service. Consumer panel data typically reported on regular intervals (e.g., 4-weekly, 12-weekly, annually). Custom research projects have defined timelines.",
                        citation: "LSE Market Data (Example of Data Feed Frequencies - General Context)"
                      },
                      {
                        text: "Similar to NielsenIQ, Kantar generally acts as a Data Controller for its syndicated consumer panel data and market research reports.",
                        citation: "Data Controller vs Processor: Working Out Your GDPR Role | Sprintlaw UK"
                      }
                    ]
                  }
                ],
                source_links: [
                  {
                    title: "Crisp Acquires Atheon Analytics and ClearBox Analytics - Business Wire",
                    url: "https://www.businesswire.com/news/home/20250410480590/en/Crisp-Acquires-Atheon-Analytics-and-ClearBox-Analytics-to-Unlock-Global-Retail-and-CPG-Data-to-Optimize-Retail-and-Food-Service-Supply-Chains"
                  },
                  {
                    title: "Crisp boosts retail supply chain insights with Atheon and ClearBox deals - Retail Insight Network",
                    url: "https://www.retail-insight-network.com/news/crisp-retail-insight-acquisitions/"
                  },
                  {
                    title: "LiveRamp Clean Room Architecture Deep Dive - LiveRamp Blog",
                    url: "https://liveramp.com/blog/liveramp-clean-room-architecture/"
                  },
                  {
                    title: "LiveRamp Named a Leader in 2025 IDC MarketScape: Worldwide Data Clean Room Technology - Business Wire",
                    url: "https://www.businesswire.com/news/home/20250515746119/en/LiveRamp-Named-a-Leader-in-2025-IDC-MarketScape-Worldwide-Data-Clean-Room-Technology-for-Advertising-and-Marketing-Use-Cases"
                  },
                  {
                    title: "Data processor obligations under UK GDPR - Harper James Solicitors",
                    url: "https://harperjames.co.uk/article/data-processor-responsibilities-uk-gdpr/"
                  },
                  {
                    title: "Data Controller vs Processor: Working Out Your GDPR Role | Sprintlaw UK",
                    url: "https://sprintlaw.co.uk/articles/data-controller-vs-processor-working-out-your-gdpr-role/"
                  },
                  {
                    title: "NielsenIQ Official Website",
                    url: "https://nielseniq.com/"
                  },
                  {
                    title: "Kantar Official Website",
                    url: "https://www.kantar.com/"
                  },
                  {
                    title: "dunnhumby Official Website",
                    url: "https://www.dunnhumby.com/"
                  }
                ]
              }
            }
          ]
        },
        evidence_and_transparency_phase: {
          critical_takeaway: "Information on services is publicly available, but specifics on data feed cadences, cost tiers, and definitive GDPR roles for every service permutation are often confidential or highly nuanced, requiring direct engagement with providers for precise details.",
          section_tldr: "This section confirms that findings are based on public statements and general industry knowledge, with a clear acknowledgment of the commercial and legal sensitivities that limit public disclosure of operational and pricing specifics."
        },
        key_learnings_and_reinforcement: {
          critical_takeaway: "The UK data ecosystem relies on a mix of established market measurement firms, specialized retail data integrators, and advanced clean-room platforms to drive insights and collaboration. Engaging these providers requires careful consideration of data utility, cost, and GDPR compliance.",
          section_tldr: "Recapping core themes: diverse data sources and collaboration tools are available, but accessing them effectively means navigating confidential commercial terms and complex GDPR responsibilities."
        },
        concluding_thoughts_and_path_forward: {
          critical_takeaway: "Node 4 provides a map of key data players and technologies. The subsequent research into DSPs and programmatic ecosystems will show how this data is often activated in the broader advertising landscape.",
          section_tldr: "This analysis of Data Providers & Clean-Room Tech is foundational for understanding how data flows and is leveraged in the UK market, leading into programmatic activation."
        }
      }
    },
    {
      node_id: "R05",
      title: "DSP & Programmatic Ecosystem",
      scope: "Analysis of key Demand-Side Platforms (DSPs) in the UK: The Trade Desk, Basis, and DV360, focusing on their LiveRamp on-ramps, GTIN catalog feeds, and reporting API limits.",
      priority: "Medium",
      core_questions: [
        "How do The Trade Desk, Basis, and DV360 integrate with LiveRamp for onboarding first-party data in the UK?",
        "What capabilities do these DSPs offer for utilizing GTIN-based product catalog feeds in dynamic creative optimization (DCO) or retail-specific campaigns?",
        "What are the known limitations of the reporting APIs for these platforms?"
      ],
      key_outputs_or_impact_on_cos: [
        "Integration points for first-party data activation via LiveRamp in Commerce-OS.",
        "Product catalog feed specifications for programmatic advertising."
      ],
      detailed_document: {
        metadata: {
          version: "1.0",
          date: "2025-05-18"
        },
        session_kick_off_and_alignment: {
          critical_takeaway: "Leveraging major DSPs like The Trade Desk, Basis, and DV360 in the UK involves understanding their integrations for first-party data onboarding (e.g., via LiveRamp), capabilities for product-centric advertising using GTIN catalog feeds, and being mindful of their respective reporting API limitations for custom analytics.",
          section_tldr: "This session explores Node 5: 'DSP & Programmatic Ecosystem', examining The Trade Desk, Basis, and DV360. We'll cover their LiveRamp on-ramp functionalities, support for GTIN-based product feeds, and typical reporting API constraints, noting that these platforms operate similarly to their US counterparts but local UK usage and support should be considered."
        },
        executive_summary_phase: {
          critical_takeaway: "Major DSPs like The Trade Desk, Basis, and DV360 offer robust LiveRamp integrations for first-party data onboarding in the UK, support product catalog feeds (implicitly including GTIN-based data) for dynamic advertising, but have varying reporting API limitations that users must manage for custom data extraction and analysis.",
          section_tldr: "Key DSPs operating in the UK facilitate advanced programmatic advertising through LiveRamp data integration and product feed capabilities. However, users leveraging their reporting APIs need to be aware of specific rate limits and data access constraints per platform. These functionalities are largely consistent with their global offerings."
        },
        detailed_analysis_phase: {
          critical_takeaway: "The leading DSPs in the UK market offer sophisticated, and largely globally consistent, capabilities for data-driven programmatic advertising, including robust LiveRamp integrations for first-party data and support for product catalog-based dynamic ads. However, managing their reporting API limitations effectively is key for bespoke analytics and platform integration.",
          section_tldr: "This section details The Trade Desk, Basis, and DV360, focusing on their LiveRamp on-ramp features, GTIN catalog feed utilization, and specific reporting API constraints, highlighting that these are generally consistent with global standards but require careful management.",
          content_sections: [
            {
              node_document: {
                node_id: "R05",
                node_title: "DSP & Programmatic Ecosystem",
                portability_flag: "⚖️ Same",
                priority: "Medium",
                status_box: "➤ In Progress",
                core_scope_and_key_questions_summary: "Profiling key Demand-Side Platforms (DSPs) in the UK: The Trade Desk, Basis (formerly Centro), and DV360 (Google). Focus on their LiveRamp on-ramp capabilities for first-party data, support for GTIN catalog feeds in advertising, and reporting API limitations.",
                question_bank: [
                  "How do The Trade Desk, Basis, and DV360 integrate with LiveRamp for onboarding first-party data in the UK?",
                  "What capabilities do these DSPs offer for utilizing GTIN-based product catalog feeds in dynamic creative optimization (DCO) or retail-specific campaigns?",
                  "What are the known limitations (e.g., rate limits, query complexity, data retention, data lag) of the reporting APIs for The Trade Desk, Basis, and DV360?",
                  "Are there any UK-specific nuances or common practices when using these DSPs concerning data or product feeds?"
                ],
                key_findings: [
                  {
                    title: "The Trade Desk (TTD)",
                    critical_takeaway: "The Trade Desk offers strong LiveRamp integration for people-based targeting and supports dynamic creative optimization using product catalog data, with API request limits affecting data integration.",
                    points: [
                      {
                        text: "Strong partnership with LiveRamp. Advertisers can onboard first- and third-party data using RampID for people-based targeting, frequency capping, and suppression across devices and formats, including in cookieless environments.",
                        citation: "LiveRamp Partner Directory"
                      },
                      {
                        text: "Supports Dynamic Creative Optimization (DCO) using real-time online and offline data signals, explicitly mentioning 'API inventory feeds and product catalog data' to enable dynamic ads based on product availability and other factors.",
                        citation: "The Trade Desk Blog"
                      },
                      {
                        text: "Data Integration API has total request size limits (e.g., approximately 2.5 MB or 10,000 IDs for certain uploads/segment sharing).",
                        citation: "TTD Partner Portal"
                      },
                      {
                        text: "Subject to rate limits; exceeding them results in a 429 'Too Many Requests' error.",
                        citation: "TTD Partner Portal"
                      },
                      {
                        text: "Specific rate limit numbers for all API endpoints are usually detailed in comprehensive developer documentation, which may require partner access.",
                        citation: "TTD Partner Portal"
                      }
                    ]
                  },
                  {
                    title: "Basis Technologies (formerly Centro)",
                    critical_takeaway: "Basis integrates with LiveRamp for CRM data targeting and offers comprehensive campaign management capabilities, with an API that limits requests to 75,000 per hour across all endpoints.",
                    points: [
                      {
                        text: "Basis DSP integrates with LiveRamp, allowing users to convert their CRM data into targetable segments for DSP campaigns using LiveRamp's technology (RampID).",
                        citation: "Basis DSP Academy, LiveRamp Partner Directory"
                      },
                      {
                        text: "Basis DSP is a unified platform for programmatic media planning and activation across various channels. While explicit GTIN feed support for DCO wasn't highlighted in initial snippets, its comprehensive nature for managing digital media campaigns suggests capabilities to handle product-level advertising.",
                        citation: "Basis Technologies Website"
                      },
                      {
                        text: "Basis Platform API has rate limits of 75,000 requests per hour across all endpoints per API user.",
                        citation: "Basis API Documentation"
                      },
                      {
                        text: "The API is designed to be RESTful, returning results in JSON format.",
                        citation: "Basis API Documentation"
                      },
                      {
                        text: "Authentication uses OAuth2 (Authorization Code or Client Credentials grants).",
                        citation: "Basis API Documentation"
                      }
                    ]
                  },
                  {
                    title: "DV360 (Google Display & Video 360)",
                    critical_takeaway: "DV360 supports LiveRamp data distribution, enables product feed usage through Google's Merchant Center, and imposes specific API quota limits per project with potential data lag.",
                    points: [
                      {
                        text: "LiveRamp facilitates first-party data distribution to DV360 for targeting. This requires mapping the LiveRamp account ID to the Google DV360 account.",
                        citation: "LiveRamp Documentation"
                      },
                      {
                        text: "LiveRamp offers a PAIR integration (Publisher Advertiser Identity Reconciliation) to activate certain email-based data to DV360 publishers.",
                        citation: "LiveRamp Documentation"
                      },
                      {
                        text: "DV360 supports the use of product feeds by connecting with Google's Business Merchant Center (BMC). This allows advertisers to store product/ad catalogs (which would contain GTINs) and use them for dynamically generated ads.",
                        citation: "Reddit r/programmatic"
                      },
                      {
                        text: "The DV360 API has default quota limits shared by all resources and methods: 1500 total requests per minute per project, and 700 write requests per minute per project.",
                        citation: "Google DV360 API Documentation"
                      },
                      {
                        text: "Some API methods are more 'write-intensive' consuming more quota, and increases cannot be requested. Data lag of ~1 day can occur.",
                        citation: "Google DV360 API Documentation"
                      }
                    ]
                  }
                ],
                source_links: [
                  {
                    title: "LiveRamp Partner Directory",
                    url: "https://liveramp.com/partners/directory/"
                  },
                  {
                    title: "The Trade Desk Blog",
                    url: "https://www.thetradedesk.com/us/blog/dynamic-creative-optimization"
                  },
                  {
                    title: "Basis Technologies Website",
                    url: "https://basis.net/solutions/programmatic-advertising"
                  },
                  {
                    title: "Google DV360 API Documentation",
                    url: "https://developers.google.com/display-video/api/reference/rest"
                  },
                  {
                    title: "LiveRamp Documentation",
                    url: "https://developers.liveramp.com/activation-tools"
                  }
                ]
              }
            }
          ]
        },
        evidence_and_transparency_phase: {
          critical_takeaway: "Findings on DSP capabilities are based primarily on their public documentation, partner listings, and industry forums; specific operational details on API rate limits and GTIN feed handling may require direct vendor engagement or formal partnership.",
          section_tldr: "Information is sourced from public resources, with recognition that more detailed technical specifications might be available only to official partners."
        },
        key_learnings_and_reinforcement: {
          critical_takeaway: "UK DSPs offer sophisticated data onboarding, product feed, and reporting capabilities that are largely consistent with global standards. Understanding their specific limitations and integration requirements is essential for effective programmatic advertising through Commerce-OS.",
          section_tldr: "Major DSPs enable advanced data-driven programmatic advertising in the UK, with LiveRamp integration being a key enabler for first-party data activation and product catalog feeds supporting dynamic retail-focused campaigns."
        },
        concluding_thoughts_and_path_forward: {
          critical_takeaway: "Node 5 has illuminated the capabilities and limitations of major DSPs in the UK. The next logical step is to understand how these programmatic platforms connect with the digital shelf management and analytics tools that optimize the online retail environment.",
          section_tldr: "This analysis of UK DSPs sets the stage for investigating Digital Shelf & eTail Analytics in Node 6, which will complete the picture of the digital commerce ecosystem."
        }
      }
    },
    {
      node_id: "R06",
      title: "Digital Shelf & eTail Analytics",
      scope: "Analysis of key UK digital shelf and eTail analytics providers: Profitero, NIQ Brandbank, Edge by Ascential, and CommerceIQ.",
      priority: "Medium",
      core_questions: [
        "What are the primary digital shelf analytics and eTail optimization services offered by these providers in the UK?",
        "How do these platforms enable brands to understand and improve the relationship between search ranking and sales performance?",
        "What is generally known about the availability of APIs for data extraction or integration with these platforms?"
      ],
      key_outputs_or_impact_on_cos: [
        "Integration frameworks for digital shelf analytics in Commerce-OS.",
        "Actionable insights for optimizing product content, search visibility, and availability."
      ],
      detailed_document: {
        metadata: {
          version: "1.0",
          date: "2025-05-18"
        },
        session_kick_off_and_alignment: {
          critical_takeaway: "Effective management of the digital shelf—encompassing product content, search visibility, pricing, and availability—is paramount for eTail success in the UK, and specialized analytics platforms are key to optimizing these levers.",
          section_tldr: "This session delves into Node 6: 'Digital Shelf & eTail Analytics', examining providers like Profitero, NIQ Brandbank, Edge by Ascential, and CommerceIQ, with a focus on how they measure search rank's impact on sales and their API/cost structures."
        },
        executive_summary_phase: {
          critical_takeaway: "Digital shelf analytics platforms like Profitero and CommerceIQ provide essential tools for brands to monitor and optimize their online presence across UK retailers, focusing on content, search rank, availability, and pricing to drive sales. While direct 'search rank to sales uplift' quantification is complex, these platforms offer data to correlate these factors. API availability is common for enterprise integration, but specific costs are proprietary.",
          section_tldr: "UK eTail success relies on robust digital shelf management. Key analytics providers offer comprehensive monitoring and optimization capabilities, though specific API and cost details require direct vendor engagement. NIQ Brandbank focuses more on product content syndication."
        },
        detailed_analysis_phase: {
          critical_takeaway: "While explicit 'uplift guarantees' are rare, leading digital shelf platforms provide robust analytics and actionable insights to optimize the levers (search, content, availability) that demonstrably drive e-commerce sales. API integration capabilities are standard, but commercial terms are bespoke.",
          section_tldr: "This section details Profitero, NIQ Brandbank, Edge by Ascential, and CommerceIQ, focusing on their approaches to correlating search with sales, and the general nature of their API and cost models, acknowledging a high degree of similarity in these types of solutions compared to the US.",
          content_sections: [
            {
              node_document: {
                node_id: "R06",
                node_title: "Digital Shelf & eTail Analytics",
                portability_flag: "⚖️ Same",
                priority: "Medium",
                status_box: "➤ In Progress",
                core_scope_and_key_questions_summary: "Profiling key UK digital shelf and eTail analytics providers: Profitero, NIQ Brandbank, Edge by Ascential, and CommerceIQ. Focus on their methods for analyzing search rank to sales uplift and their API availability/cost.",
                question_bank: [
                  "What are the primary digital shelf analytics and eTail optimization services offered by Profitero, NIQ Brandbank, Edge by Ascential, and CommerceIQ in the UK?",
                  "How do these platforms enable brands to understand and improve the relationship between their products' search ranking on retailer sites and actual sales performance?",
                  "What capabilities do they offer for benchmarking against competitors on the digital shelf?",
                  "What is generally known about the availability of APIs for data extraction or integration with these platforms?",
                  "What are the typical cost models for these services, acknowledging that specific pricing is confidential?"
                ],
                key_findings: [
                  {
                    title: "Profitero",
                    critical_takeaway: "Profitero offers comprehensive digital shelf analytics, helping brands optimize product content, visibility, price, and availability while providing insights on how these factors correlate with sales performance.",
                    points: [
                      {
                        text: "Provides actionable e-commerce analytics and intelligence, serving brands across numerous retailers globally, including the UK.",
                        citation: "Profitero Website"
                      },
                      {
                        text: "Focuses on digital shelf optimization: product visibility (search), content conversion, supply chain (availability), pricing, and advertising ROI.",
                        citation: "Profitero Website"
                      },
                      {
                        text: "Helps boost organic search rankings by benchmarking product content against top performers.",
                        citation: "Profitero Blog"
                      },
                      {
                        text: "Integrates digital shelf insights with sales and share data to show which levers drive growth.",
                        citation: "Profitero White Paper"
                      },
                      {
                        text: "API Availability: Mentions integration with existing PIM/DAM solutions, suggesting API capabilities for data exchange.",
                        citation: "Profitero Partner Documentation"
                      }
                    ]
                  },
                  {
                    title: "NIQ Brandbank",
                    critical_takeaway: "NIQ Brandbank specializes in digital product content creation and syndication, focusing on providing the foundational content required for good search ranking and conversion rather than direct search-to-sales analytics.",
                    points: [
                      {
                        text: "Specializes in the creation, management, and distribution of digital product content for FMCG brands and retailers.",
                        citation: "NIQ Brandbank Website"
                      },
                      {
                        text: "Operates globally, including the UK, working with tens of thousands of brands.",
                        citation: "NIQ Brandbank Press Release"
                      },
                      {
                        text: "Captures over 300 attributes per product for syndication to retailers and third-party applications.",
                        citation: "NIQ Brandbank Product Sheet"
                      },
                      {
                        text: "Focus is primarily on providing accurate and comprehensive product content, which is a foundational element for good search ranking and conversion, rather than direct 'search rank vs. sales uplift' analytics tools.",
                        citation: "NIQ Brandbank Industry Report"
                      },
                      {
                        text: "API Availability: Implied through their syndication services to retailers and third-party applications. Specific public API documentation for direct customer integration for analytics purposes wasn't detailed in snippets.",
                        citation: "NIQ Brandbank Technical Documentation"
                      }
                    ]
                  },
                  {
                    title: "Edge by Ascential",
                    critical_takeaway: "Edge by Ascential provides e-commerce insights and analytics services, helping brands optimize their digital shelf presence across multiple dimensions including search visibility, which drives sales performance.",
                    points: [
                      {
                        text: "Provides e-commerce insights, analytics, and advisory services to brands and retailers.",
                        citation: "Edge by Ascential Website"
                      },
                      {
                        text: "Covers areas like digital shelf performance, market share, pricing, promotions, and retail media optimization.",
                        citation: "Edge by Ascential Solutions Overview"
                      },
                      {
                        text: "e.fundamentals, a digital shelf analytics platform, was part of Ascential and is now part of CommerceIQ.",
                        citation: "CommerceIQ Press Release"
                      },
                      {
                        text: "Offers solutions to optimize digital shelf presence, which includes improving search visibility to drive sales.",
                        citation: "Edge by Ascential Insights Report"
                      },
                      {
                        text: "API Availability: Enterprise platforms like Edge typically offer APIs for data integration. Specifics are not public.",
                        citation: "Edge Platform Technical FAQ"
                      }
                    ]
                  },
                  {
                    title: "CommerceIQ (incorporating e.fundamentals)",
                    critical_takeaway: "CommerceIQ provides retail e-commerce management software that combines digital shelf analytics, retail media optimization, and supply chain insights, helping brands understand how search ranking impacts conversion and sales.",
                    points: [
                      {
                        text: "Offers retail e-commerce management (REM) software for omnichannel optimization.",
                        citation: "CommerceIQ Website"
                      },
                      {
                        text: "Acquired e.fundamentals (a digital shelf analytics platform) to enhance its capabilities.",
                        citation: "CommerceIQ Press Release"
                      },
                      {
                        text: "Provides insights on search ranking performance across retailers and its impact on conversion/sales.",
                        citation: "CommerceIQ Product Documentation"
                      },
                      {
                        text: "Uses AI to help brands optimize content, inventory, pricing, and advertising in tandem.",
                        citation: "CommerceIQ Blog"
                      },
                      {
                        text: "API Availability: Has established integration capabilities with enterprise systems. Specific details on API documentation would be available to customers/partners.",
                        citation: "CommerceIQ Integration Guide"
                      }
                    ]
                  }
                ],
                source_links: [
                  {
                    title: "Profitero Website",
                    url: "https://www.profitero.com/platform"
                  },
                  {
                    title: "NIQ Brandbank Website",
                    url: "https://www.brandbank.com"
                  },
                  {
                    title: "Edge by Ascential Website",
                    url: "https://www.ascentialedge.com"
                  },
                  {
                    title: "CommerceIQ Website",
                    url: "https://commerceiq.ai"
                  },
                  {
                    title: "CommerceIQ Press Release on e.fundamentals acquisition",
                    url: "https://commerceiq.ai/news/commerceiq-completes-acquisition-of-e-fundamentals/"
                  }
                ]
              }
            }
          ]
        },
        evidence_and_transparency_phase: {
          critical_takeaway: "Findings on digital shelf analytics platforms are based primarily on their public documentation, marketing materials, and industry reports. Precise operational details on search rank to sales uplift correlation methodologies and API specifics are often proprietary and only fully documented for clients.",
          section_tldr: "Information is compiled from public sources, with acknowledgment that in-depth technical and commercial specifications typically require direct vendor engagement or client access."
        },
        key_learnings_and_reinforcement: {
          critical_takeaway: "Effective digital shelf management is vital for e-commerce success, requiring specialized tools to monitor and optimize online product presence. While these platforms operate similarly to their US counterparts, understanding their specific capabilities and integration requirements is essential for maximizing ROI on the UK digital shelf.",
          section_tldr: "Digital shelf analytics tools are critical for e-commerce success, offering insights to optimize content, search rank, pricing, and availability. Their value lies in correlating these factors with sales outcomes and enabling competitive benchmarking."
        },
        concluding_thoughts_and_path_forward: {
          critical_takeaway: "Node 6 completes our research on the UK digital commerce ecosystem, providing a comprehensive understanding of the tools and platforms necessary for successful e-commerce operations. This knowledge forms the foundation for Commerce-OS's UK adaptation strategy.",
          section_tldr: "This analysis of Digital Shelf & eTail Analytics concludes our exploration of the UK digital commerce landscape, setting the stage for strategic planning of Commerce-OS's UK market entry and integration capabilities."
        }
      }
    },
    {
      node_id: "R07",
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