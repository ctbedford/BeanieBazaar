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