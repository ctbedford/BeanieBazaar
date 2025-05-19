import ProjectPlanView from "./views/ProjectPlanView";
import KpiDashboardView from "./views/KpiDashboardView";
import FeatureTrackerView from "./views/FeatureTrackerView";
import ResearchSpineView from "./views/ResearchSpineView";
import { ViewType } from "@/pages/Home";
import { ProjectPlanData } from "@/data/projectPlanData";
import { KpiDashboardData } from "@/data/kpiDashboardData";
import { FeatureTrackerData } from "@/data/featureTrackerData";
import { ResearchSpineData } from "@/data/researchSpineData";

interface ContentDisplayProps {
  activeView: ViewType;
  projectPlanData: ProjectPlanData;
  kpiDashboardData: KpiDashboardData;
  featureTrackerData: FeatureTrackerData;
  researchSpineData: ResearchSpineData;
}

export default function ContentDisplay({
  activeView,
  projectPlanData,
  kpiDashboardData,
  featureTrackerData,
  researchSpineData
}: ContentDisplayProps) {
  return (
    <>
      {activeView === "project-plan" && <ProjectPlanView data={projectPlanData} />}
      {activeView === "kpi-dashboard" && <KpiDashboardView data={kpiDashboardData} />}
      {activeView === "feature-tracker" && <FeatureTrackerView data={featureTrackerData} />}
      {activeView === "research-spine" && <ResearchSpineView data={researchSpineData} />}
    </>
  );
}
