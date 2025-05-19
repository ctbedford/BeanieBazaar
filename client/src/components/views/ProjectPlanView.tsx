import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell 
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { ProjectPlanData } from "@/data/projectPlanData";

interface ProjectPlanViewProps {
  data: ProjectPlanData;
}

export default function ProjectPlanView({ data }: ProjectPlanViewProps) {
  const [expandedPhases, setExpandedPhases] = useState<string[]>([data.phases[0].id]);

  const handleAccordionChange = (phaseId: string) => {
    setExpandedPhases((prev) => {
      if (prev.includes(phaseId)) {
        return prev.filter((id) => id !== phaseId);
      } else {
        return [...prev, phaseId];
      }
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-yellow-100 text-yellow-800";
      case "to do":
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Project & Sprint Master Plan</h2>
          <p className="text-slate-500">Track progress across project phases and sprints</p>
        </div>
      </div>

      {data.phases.map((phase) => (
        <div key={phase.id} className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div 
            className="p-4 cursor-pointer flex items-center justify-between bg-slate-50 border-b border-slate-200"
            onClick={() => handleAccordionChange(phase.id)}
          >
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100">
                {phase.id}
              </Badge>
              <h3 className="text-lg font-semibold text-slate-900">{phase.name}</h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-500">{phase.duration}</span>
              <i className={`fas fa-chevron-down text-slate-400 transition-transform ${
                expandedPhases.includes(phase.id) ? "transform rotate-180" : ""
              }`}></i>
            </div>
          </div>
          
          {expandedPhases.includes(phase.id) && (
            <div className="p-4 border-b border-slate-200">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">Objective</p>
                  <p className="text-sm text-slate-600">{phase.objective}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">EOS Milestone</p>
                  <p className="text-sm text-slate-600">{phase.eos_milestone}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">Key Success Metrics</p>
                  <p className="text-sm text-slate-600">{phase.key_success_metrics}</p>
                </div>
              </div>
              
              <div className="rounded-md border border-slate-200 overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="text-xs font-medium text-slate-500 uppercase">ID</TableHead>
                      <TableHead className="text-xs font-medium text-slate-500 uppercase">Task</TableHead>
                      <TableHead className="text-xs font-medium text-slate-500 uppercase">Owner</TableHead>
                      <TableHead className="text-xs font-medium text-slate-500 uppercase">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {phase.sprints_or_tasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell className="whitespace-nowrap text-sm font-medium text-slate-900">
                          {task.id}
                        </TableCell>
                        <TableCell className="whitespace-nowrap text-sm text-slate-700">
                          {task.name}
                        </TableCell>
                        <TableCell className="whitespace-nowrap text-sm text-slate-700">
                          {task.owner}
                        </TableCell>
                        <TableCell className="whitespace-nowrap">
                          <Badge variant="outline" className={getStatusColor(task.status)}>
                            {task.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
