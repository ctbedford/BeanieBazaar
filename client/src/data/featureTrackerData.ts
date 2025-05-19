export interface PathXStatus {
  coverage: string;
  notes: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  target_for_beanies?: string;
  current_pathx_status: PathXStatus;
  gap_for_uk: string;
  dev_effort_sprints: number;
  status: string;
  key_dependencies?: string;
}

export interface FeatureTrackerData {
  features: Feature[];
}

const featureTrackerData: FeatureTrackerData = {
  features: [
    {
      id: "COS-F01",
      name: "Multi-Retailer Data Ingestion & Unified Lakehouse (UK Focus)",
      description: "Ingest, normalize, and store POS, panel, media logs, and other relevant data from UK retailers (Asda, Sainsbury's, etc.) and data providers (Crisp, NielsenIQ) into a unified data lakehouse (DuckDB based on PathX spec).",
      target_for_beanies: "Real-time/near real-time ingestion of Crisp feeds (daily SKU-level sales & inventory) for Asda & Sainsbury's. Integration of NielsenIQ UK panel data. Ingestion of RMN spend and performance data. Daily ROS & ACV calculation at SKU x Store level.",
      current_pathx_status: { 
        coverage: "Full (for US/North America)", 
        notes: "Existing robust Python/FastAPI ETL micro-services, DuckDB lake-house, Terraform IaC for AWS EKS, SOC 2 Type I controls. Connectors are US-centric." 
      },
      gap_for_uk: "Specific API/SFTP connectors for Crisp/Atheon (Asda, Sainsbury's). Mapping of UK retailer store IDs and product codes (EANs) to internal PathX/Nielsen hierarchies. Adaptation to UK data formats and retailer portal export structures if Crisp direct feeds are partial.",
      dev_effort_sprints: 2,
      status: "Sprint 1-2 (Analyze)",
      key_dependencies: "Crisp trial feed access & SLA confirmation. NielsenIQ UK data feed specifications. UK Store-code mapping strategy and validation."
    },
    {
      id: "COS-F02",
      name: "Semantic Layer & Shared Commercial Glossary API",
      description: "A machine-readable commercial ontology defining key UK CPG & retail terms (ACV, ROS, ROMI, JBP, Period P1-P13, HFSS, £RRP, etc.) accessible via an API (/meta/terms).",
      target_for_beanies: "API exposing ~30 key commercial terms relevant to Beanies and UK grocery (Asda, Sainsbury's). Ensures consistent definitions for JBP Wizard, dashboards, alerts, and TPO engine.",
      current_pathx_status: {
        coverage: "Implicit / Partial",
        notes: "Existing Django models (inventory, digitalshelf, dashboard) provide a base. Confluence docs exist but are not an API."
      },
      gap_for_uk: "Formalized, versioned, machine-readable glossary API. Mapping existing Django model fields to standardized UK commercial terms. Logic for UK-specific terms like 'Period P1-P13'.",
      dev_effort_sprints: 1,
      status: "Sprint 1-2 (Analyze)",
      key_dependencies: "Finalized list of ~30 UK commercial terms for Beanies. Input from Beanies' marketing/sales teams on UK terminology."
    },
    {
      id: "COS-F03",
      name: "Automated Joint Business Plan (JBP) Deck Builder",
      description: "Service to auto-generate retailer-specific (Asda, Sainsbury's) JBP PowerPoint/Google Slides decks, pre-filled with live data from the COS (ROS, ACV, range gaps, promo plans, media plans, digital shelf insights).",
      target_for_beanies: "Generates Asda & Sainsbury's JBP templates. Aims to auto-populate >80% of slides, including range recommendations (Hazelnut vs Irish Cream), promo calendars (P13/P15 £1-off bursts), and media co-investment proposals. Reduces JBP build time from ~30 hrs to minutes.",
      current_pathx_status: {
        coverage: "None",
        notes: "Current process is manual PowerPoint. PathX has Next.js/React UI framework that could host a trigger for this service."
      },
      gap_for_uk: "Templating engine (python-pptx or Google Slides API). Retailer-specific JBP slide masters/layouts for Asda & JS. Logic to pull data from Semantic Layer API (COS-F02) and other COS services (TPO, RMN insights) to populate templates dynamically.",
      dev_effort_sprints: 2,
      status: "Sprint 3-6 (Iterate/Integrate)",
      key_dependencies: "Semantic Layer API (COS-F02). TPO Engine (COS-F04) for promo plans. RMN insights (COS-F05). Digital Shelf insights (COS-F08). Extracted Asda & JS JBP templates. Decision on templating engine."
    },
    {
      id: "COS-F04",
      name: "Promo-Elasticity & Trade Promotion Optimization (TPO) Engine (UK)",
      description: "ML engine (LightGBM) to model price elasticity for Beanies SKUs in UK context, predict sales lift from various promo mechanics (£1-off, multi-buy), and recommend optimal promo depths/timings. Considers UK retailer fiscal calendars (Periods P1-P13) and regulatory constraints (HFSS, £RRP).",
      target_for_beanies: "TPO Engine MVP that prioritizes promo depths for Beanies SKUs in Asda/JS with ±10 bps margin error. Provides /promo/simulate API for JBP wizard. Validates £1-off for P13/P15.",
      current_pathx_status: {
        coverage: "Strong (for post-hoc lift measurement in US)",
        notes: "Patented Lift-Engine (US 20250112831) for test/control. Existing algorithms for diff-in-diff, synthetic control. Benchmark & Elasticity tables from >400 US studies."
      },
      gap_for_uk: "Adaptation/retraining of models for UK market & Beanies data. Incorporation of UK retailer fiscal period logic. Engine for ex-ante optimization (predictive TPO). Integration of HFSS & £RRP guardrails.",
      dev_effort_sprints: 3,
      status: "Sprint 5-6 (Integrate)",
      key_dependencies: "Historical UK promo data for Beanies & category. Defined HFSS & £RRP rules. Retailer Period Calendar Service. PathX Lift Engine adapted for UK data."
    },
    {
      id: "COS-F05",
      name: "UK Retail Media Network (RMN) Optimization & Connectors",
      description: "Integration with Nectar360 (Sainsbury's/CitrusAd) and Asda Access (LS Eleven/LiveRamp) for first-party audience syncing to DSPs (TradeDesk, Basis), campaign parameter write-back (where APIs permit), spend tracking, and closed-loop sales measurement via clean rooms.",
      target_for_beanies: "Connectors for Nectar360 & Asda Access. Enable Beanies to target Gen-Z coffee shoppers using loyalty data. Provide closed-loop ROAS reporting for RMN campaigns in COS dashboard.",
      current_pathx_status: {
        coverage: "Full (for US DSPs - Basis, Google Ads, Meta)",
        notes: "Existing Media-Activation Hub with API connectors. SOC 2 Type I infra."
      },
      gap_for_uk: "Specific API connectors for Nectar360 (CitrusAd) & Asda Access (LiveRamp). Workflows for UK RMN audience management. GDPR-compliant data sharing protocols for clean rooms.",
      dev_effort_sprints: 3,
      status: "Sprint 5-7 (Integrate/Execute)",
      key_dependencies: "RMN platform API credentials and documentation. GDPR-compliant data exchange protocols approved by legal."
    }
  ]
};

export default featureTrackerData;
