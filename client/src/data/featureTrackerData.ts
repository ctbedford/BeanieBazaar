export interface PathXStatus {
  coverage: string;
  notes: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  current_pathx_status: PathXStatus;
  gap_for_uk: string;
  dev_effort_sprints: number;
  status: string;
}

export interface FeatureTrackerData {
  features: Feature[];
}

const featureTrackerData: FeatureTrackerData = {
  features: [
    {
      id: "COS-F01",
      name: "Multi-Retailer Data Ingestion (UK Focus)",
      description: "Ingest, normalize, and store POS, panel, media logs...",
      current_pathx_status: { coverage: "Full (for US/North America)", notes: "Connectors US-centric" },
      gap_for_uk: "Specific connectors for UK retailers...",
      dev_effort_sprints: 2,
      status: "To Do"
    },
    {
      id: "COS-F03",
      name: "Automated JBP Deck Builder",
      description: "Service to auto-generate retailer-specific JBP decks...",
      current_pathx_status: { coverage: "None", notes: "Manual PPT export" },
      gap_for_uk: "Templating engine, retailer style guides...",
      dev_effort_sprints: 2,
      status: "To Do"
    }
  ]
};

export default featureTrackerData;
