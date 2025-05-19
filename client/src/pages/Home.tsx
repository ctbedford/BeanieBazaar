import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import projectPlanData from "@/data/projectPlanData";
import kpiDashboardData from "@/data/kpiDashboardData";
import featureTrackerData from "@/data/featureTrackerData";
import researchSpineData, { ResearchSpineData, ResearchNode } from "@/data/researchSpineData";
import YamlDocumentImporter from "@/components/YamlDocumentImporter";

export type ViewType = "project-plan" | "kpi-dashboard" | "feature-tracker" | "research-spine";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>("project-plan");
  const [currentResearchData, setCurrentResearchData] = useState<ResearchSpineData>(researchSpineData);
  
  // Handle importing a new research node from YAML
  const handleImportResearchNode = (newNode: ResearchNode) => {
    setCurrentResearchData(prev => {
      // Check if the node already exists
      const existingIndex = prev.research_nodes.findIndex(node => node.node_id === newNode.node_id);
      
      if (existingIndex >= 0) {
        // Replace existing node
        const updatedNodes = [...prev.research_nodes];
        updatedNodes[existingIndex] = newNode;
        
        return {
          ...prev,
          research_nodes: updatedNodes
        };
      } else {
        // Add new node
        return {
          ...prev,
          research_nodes: [...prev.research_nodes, newNode]
        };
      }
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {activeView === "research-spine" && (
        <div className="px-4 pt-4">
          <YamlDocumentImporter onImport={handleImportResearchNode} />
        </div>
      )}
      
      <MainLayout 
        activeView={activeView} 
        setActiveView={setActiveView}
        projectPlanData={projectPlanData}
        kpiDashboardData={kpiDashboardData}
        featureTrackerData={featureTrackerData}
        researchSpineData={currentResearchData}
      />
    </div>
  );
}
