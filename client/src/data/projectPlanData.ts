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
      objective: "Establish project charter, define vision & problem, secure initial data access credentials.",
      eos_milestone: "EOS Vision/Traction mtg (COO + SVP)",
      key_success_metrics: "Charter signed; data credentials unblocked.",
      sprints_or_tasks: [
        { id: "S0.1", name: "Define Problem statement", status: "Completed", owner: "Project Lead" },
        { id: "S0.2", name: "Create KPI north-star sheet", status: "Completed", owner: "Project Lead" }
      ]
    },
    {
      id: "P1",
      name: "Phase 1: Analyze",
      duration: "Weeks 1-3 (Sprints 1-2)",
      objective: "Consolidate datasets, establish baseline KPIs, draft opportunity map, create glossary.",
      eos_milestone: "Weekly L10 (15 min IDS)",
      key_success_metrics: "Baseline KPIs published; glossary accepted.",
      sprints_or_tasks: [
        { id: "S1.1.1", name: "Develop Unified data lake stub", status: "In Progress", owner: "Data Engineering" },
        { id: "S1.2.2", name: "Develop Glossary v1", status: "To Do", owner: "Product Manager" }
      ]
    }
  ]
};

export default projectPlanData;
