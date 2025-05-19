export interface Task {
  id: string;
  name: string;
  status: string;
  owner: string;
}

export interface Phase {
  id: string;
  name: string;
  duration: string;
  objective: string;
  eos_milestone: string;
  key_success_metrics: string;
  sprints_or_tasks: Task[];
}

export interface ProjectPlanData {
  phases: Phase[];
}

const projectPlanData: ProjectPlanData = {
  phases: [
    {
      id: "P0",
      name: "Phase 0: Charter & Data Access",
      duration: "Week 0-1",
      objective: "Establish project charter, define vision & problem (Beanies' manual JBP process is slow and reactive, missing growth opportunities), secure initial data access credentials for key UK retailers and data sources.",
      eos_milestone: "EOS Vision/Traction mtg (COO + SVP)",
      key_success_metrics: "Charter signed by Exec Sponsor, COO, SVP; Data credentials for Nielsen/Kantar, EPOS (Asda, Sainsbury's via Crisp trial), and relevant media logins (e.g., RMN sandbox) unblocked.",
      sprints_or_tasks: [
        { id: "S0.1", name: "Define Problem Statement & Vision", status: "Completed", owner: "Project Lead" },
        { id: "S0.2", name: "Create KPI North-Star Sheet", status: "Completed", owner: "Project Lead" },
        { id: "S0.3", name: "Establish Initial RAID Log", status: "Completed", owner: "Project Manager" },
        { id: "S0.4", name: "Secure Exec Sponsor, COO, SVP for Charter Sign-off Meeting", status: "Completed", owner: "Project Lead" },
        { id: "S0.5", name: "Finalize & Sign Project Charter", status: "Completed", owner: "Exec Sponsor, COO, SVP, Project Lead" },
        { id: "S0.6", name: "Define & Obtain Data Access Matrix and Credentials", status: "Completed", owner: "Data Lead / IT" },
        { id: "S0.7", name: "Confirm Sprint Team Roster & Velocity Assumption", status: "Completed", owner: "Project Lead / Resource Managers" },
        { id: "S0.8", name: "Define Budget Guardrail for Cloud + BI Tooling (Prototype)", status: "Completed", owner: "Project Lead / Finance" },
        { id: "S0.9", name: "Phase 0 EOS L10-style IDS Checkpoint & Sprint Demo", status: "Completed", owner: "All Team" }
      ]
    },
    {
      id: "P1",
      name: "Phase 1: Analyze (Data Consolidation & Baseline)",
      duration: "Weeks 1-3 (Sprints 1-2)",
      objective: "Consolidate initial datasets (UK POS, Nielsen), establish baseline KPIs (ROS, ACV for Beanies pilot SKUs), draft initial opportunity map, and create v1 of the commercial glossary.",
      eos_milestone: "Weekly L10 (15 min IDS)",
      key_success_metrics: "Baseline KPIs (ROS, ACV for Hazelnut/Caramel in Asda/JS) published; Commercial Glossary v1 accepted by stakeholders.",
      sprints_or_tasks: [
        { id: "S1.1.1", name: "Sprint 1 Goal: Develop Unified Data Lake Stub & Initial Data Ingestion (Crisp, Nielsen)", status: "In Progress", owner: "Data Engineering Lead" },
        { id: "S1.1.2", name: "Sprint 1: Develop Baseline ROS/ACV Dashboard Structure", status: "In Progress", owner: "BI Developer / Data Science" },
        { id: "S1.1.3", name: "Sprint 1: Draft Commercial Glossary v0.1 & Semantic Layer API Stub", status: "In Progress", owner: "Product Manager / Backend Dev" },
        { id: "S1.2.1", name: "Sprint 2 Goal: Finalize Baselines, Publish KPIs, Accept Glossary, Draft Opportunity Map", status: "To Do", owner: "Project Lead" },
        { id: "S1.2.2", name: "Sprint 2: Finalize Baseline ROS/ACV Dashboard & Publish KPIs", status: "To Do", owner: "BI Developer / Data Science" },
        { id: "S1.2.3", name: "Sprint 2: Finalize & Accept Commercial Glossary v1; Semantic Layer API v1", status: "To Do", owner: "Product Manager / Backend Dev" },
        { id: "S1.2.4", name: "Sprint 2: Draft Initial Opportunity Map (Range Gaps, Promo Inefficiencies)", status: "To Do", owner: "Commercial Analyst / Data Science" },
        { id: "S1.2.5", name: "Phase 1 EOS L10 & Sprint Demos (Sprints 1 & 2)", status: "To Do", owner: "All Team" }
      ]
    },
    {
      id: "P2",
      name: "Phase 2: Iterate (Hypotheses, Experiments, JBP Wizard POC)",
      duration: "Weeks 4-6 (Sprints 3-4)",
      objective: "Develop rapid hypotheses for growth (e.g., promo lift, range extension), design and queue micro-experiments, create a clickable JBP-wizard prototype, and map metric lineage.",
      eos_milestone: "L10 + mid-sprint demo",
      key_success_metrics: "Hypothesis backlog (e.g., for promo elasticity, range swaps) groomed & prioritized; JBP Wizard POC clicks end-to-end for Asda template.",
      sprints_or_tasks: [
        { id: "S2.3.1", name: "Sprint 3 Goal: JBP Wizard Wireframes & Design Two Promo-Lift Experiments", status: "To Do", owner: "Product Manager / UI/UX" },
        { id: "S2.3.2", name: "Sprint 3: Develop Metric Lineage Map", status: "To Do", owner: "Data Governance / PM" },
        { id: "S2.4.1", name: "Sprint 4 Goal: JBP Wizard Clickable POC & Queue Experiments", status: "To Do", owner: "Dev Team Lead" },
        { id: "S2.4.2", name: "Sprint 4: Refine Hypothesis Backlog (Promo Elasticity, Range Swaps)", status: "To Do", owner: "Data Science / Commercial Analyst" },
        { id: "S2.4.3", name: "Phase 2 EOS L10 & Sprint Demos (Sprints 3 & 4)", status: "To Do", owner: "All Team" }
      ]
    },
    {
      id: "P3",
      name: "Phase 3: Integrate (Data Model, Auto-Deck, TPO Engine MVP)",
      duration: "Weeks 7-10 (Sprints 5-6)",
      objective: "Hard-wire the production-grade semantic data model, develop the auto-deck generator for Asda JBP style, and build the Trade Promotion Optimization (TPO) engine MVP.",
      eos_milestone: "L10; IDS resolves scope creep",
      key_success_metrics: "Production Semantic Model v1 deployed; Auto-Deck generator fills >80% of Asda JBP deck automatically using live data connections; TPO Engine MVP functional (predicts lift for £1-off).",
      sprints_or_tasks: [
        { id: "S3.5.1", name: "Sprint 5 Goal: Production Semantic Model v1 & TPO Engine Core Algorithm", status: "To Do", owner: "Data Engineering / Data Science" },
        { id: "S3.5.2", name: "Sprint 5: Develop Auto-Deck Templating Library (Asda Style) - Core", status: "To Do", owner: "Dev Team" },
        { id: "S3.6.1", name: "Sprint 6 Goal: Finalize Semantic Model, TPO MVP, and Auto-Deck (Asda)", status: "To Do", owner: "Tech Lead" },
        { id: "S3.6.2", name: "Sprint 6: Integrate TPO Engine MVP with JBP Wizard (/promo/simulate API)", status: "To Do", owner: "Data Science / Dev Team" },
        { id: "S3.6.3", name: "Sprint 6: Test & Refine Auto-Deck Generator for Asda (>80% fill rate)", status: "To Do", owner: "Dev Team / QA" },
        { id: "S3.6.4", name: "Phase 3 EOS L10 & Sprint Demos (Sprints 5 & 6)", status: "To Do", owner: "All Team" }
      ]
    },
    {
      id: "P4",
      name: "Phase 4: Execute (Live Pilot, Alerting, Scale Plan)",
      duration: "Weeks 11-13 (Sprint 7+)",
      objective: "Go live with pilot SKUs in Asda & Sainsbury's, implement daily ROS alerting, track ROMI, conduct sprint retrospective, and develop the scale-up plan for multiple brands.",
      eos_milestone: "EOS Quarterly Session with execs",
      key_success_metrics: "Live ROS alerting functional for Asda & Sainsbury's; ROMI tracker operational; ≥ 20% ROS uplift signal on pilot SKUs (e.g., Hazelnut, Caramel); Go/no-go decision for multi-brand roll-out based on pilot success.",
      sprints_or_tasks: [
        { id: "S4.7.1", name: "Sprint 7 Goal: Go Live (Asda & JS), ROS Alerting, ROMI Tracker", status: "To Do", owner: "Ops Lead / Dev Team" },
        { id: "S4.7.2", name: "Sprint 7: Monitor Pilot Performance & Gather Initial Learnings", status: "To Do", owner: "Data Science / Commercial Analyst" },
        { id: "S4.7.3", name: "Sprint 7 (and beyond): Conduct Pilot Retrospective & Develop Scale Roadmap", status: "To Do", owner: "Project Lead / All Team" }
      ]
    }
  ]
};

export default projectPlanData;
