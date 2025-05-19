import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResearchSpineData } from "@/data/researchSpineData";

interface ResearchSpineViewProps {
  data: ResearchSpineData;
}

export default function ResearchSpineView({ data }: ResearchSpineViewProps) {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const toggleNodeExpand = (nodeId: string) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter(id => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{data.title}</h2>
        <p className="text-slate-500 mt-1">{data.purpose}</p>
      </div>

      <div className="grid gap-6">
        {data.research_nodes.map((node) => (
          <Card key={node.node_id} className="overflow-hidden">
            <CardHeader 
              className={`cursor-pointer ${expandedNodes.includes(node.node_id) ? 'bg-blue-50' : 'bg-white'}`}
              onClick={() => toggleNodeExpand(node.node_id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-slate-100 text-slate-800">
                    {node.node_id}
                  </Badge>
                  <CardTitle className="text-lg">{node.title}</CardTitle>
                </div>
                <Badge variant="outline" className={getPriorityColor(node.priority)}>
                  {node.priority} Priority
                </Badge>
              </div>
              <CardDescription className="text-slate-600 mt-2">
                {node.scope}
              </CardDescription>
            </CardHeader>
            {expandedNodes.includes(node.node_id) && (
              <CardContent className="bg-blue-50/50 p-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Core Research Questions</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {node.core_questions.map((question, index) => (
                        <li key={index} className="text-slate-700">{question}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Outputs & Impact on COS</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {node.key_outputs_or_impact_on_cos.map((output, index) => (
                        <li key={index} className="text-slate-700">{output}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {data.how_to_use_this_spine && (
        <Card className="bg-amber-50 border-amber-100">
          <CardHeader>
            <CardTitle className="text-amber-900">How to Use This Research Spine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-amber-800 whitespace-pre-line">
              {data.how_to_use_this_spine}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}