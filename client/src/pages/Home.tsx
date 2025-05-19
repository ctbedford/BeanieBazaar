import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import projectPlanData from "@/data/projectPlanData";
import kpiDashboardData from "@/data/kpiDashboardData";
import featureTrackerData from "@/data/featureTrackerData";

export type ViewType = "project-plan" | "kpi-dashboard" | "feature-tracker";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>("project-plan");
  
  return (
    <MainLayout 
      activeView={activeView} 
      setActiveView={setActiveView}
      projectPlanData={projectPlanData}
      kpiDashboardData={kpiDashboardData}
      featureTrackerData={featureTrackerData}
    />
  );
}
