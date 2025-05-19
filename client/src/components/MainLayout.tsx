import { useState } from "react";
import SidebarNav from "./SidebarNav";
import ContentDisplay from "./ContentDisplay";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ViewType } from "@/pages/Home";
import { ProjectPlanData } from "@/data/projectPlanData";
import { KpiDashboardData } from "@/data/kpiDashboardData";
import { FeatureTrackerData } from "@/data/featureTrackerData";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  projectPlanData: ProjectPlanData;
  kpiDashboardData: KpiDashboardData;
  featureTrackerData: FeatureTrackerData;
}

export default function MainLayout({
  activeView,
  setActiveView,
  projectPlanData,
  kpiDashboardData,
  featureTrackerData
}: MainLayoutProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  
  const handleNavigate = (view: ViewType) => {
    setActiveView(view);
    if (isMobile) {
      setOpen(false);
    }
  };

  const navItems = [
    { name: "Project Plan", path: "project-plan", icon: "list-check" },
    { name: "KPI Dashboard", path: "kpi-dashboard", icon: "chart-line" },
    { name: "Feature Tracker", path: "feature-tracker", icon: "code-branch" },
  ];

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex md:flex-col">
        <div className="p-4 border-b border-slate-200">
          <h1 className="text-xl font-bold text-slate-900">Beanies Commerce OS</h1>
          <p className="text-sm text-slate-500">Info Hub MVP</p>
        </div>
        <SidebarNav 
          navItems={navItems} 
          currentViewPath={activeView} 
          onNavigate={handleNavigate} 
        />
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Beanies Commerce OS</h1>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md text-slate-700 hover:bg-slate-100">
              <Menu size={20} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <div className="p-4 border-b border-slate-200">
              <h1 className="text-xl font-bold text-slate-900">Beanies COS</h1>
            </div>
            <SidebarNav 
              navItems={navItems} 
              currentViewPath={activeView} 
              onNavigate={handleNavigate} 
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <ContentDisplay 
          activeView={activeView} 
          projectPlanData={projectPlanData}
          kpiDashboardData={kpiDashboardData}
          featureTrackerData={featureTrackerData}
        />
      </main>
    </div>
  );
}
