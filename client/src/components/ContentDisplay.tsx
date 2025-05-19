import ProjectPlanView from "./views/ProjectPlanView";
import KpiDashboardView from "./views/KpiDashboardView";
import FeatureTrackerView from "./views/FeatureTrackerView";
import { ViewType } from "@/pages/Home";
import { ProjectPlanData } from "@/data/projectPlanData";
import { KpiDashboardData } from "@/data/kpiDashboardData";
import { FeatureTrackerData } from "@/data/featureTrackerData";

interface ContentDisplayProps {
  activeView: ViewType;
  projectPlanData: ProjectPlanData;
  kpiDashboardData: KpiDashboardData;
  featureTrackerData: FeatureTrackerData;
}

export default function ContentDisplay({
  activeView,
  projectPlanData,
  kpiDashboardData,
  featureTrackerData
}: ContentDisplayProps) {
  return (
    <>
      {activeView === "project-plan" && <ProjectPlanView data={projectPlanData} />}
      {activeView === "kpi-dashboard" && <KpiDashboardView data={kpiDashboardData} />}
      {activeView === "feature-tracker" && <FeatureTrackerView data={featureTrackerData} />}
    </>
  );
}
