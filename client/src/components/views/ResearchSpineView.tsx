import { useState, useEffect } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ResearchSpineData, 
  FindingPoint,
  DetailedResearchDocument
} from "@/data/researchSpineData";
import { Loader2 } from "lucide-react";
import * as yaml from 'js-yaml';

interface ResearchSpineViewProps {
  data: ResearchSpineData;
}

export default function ResearchSpineView({ data }: ResearchSpineViewProps) {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [parsedDetailedContent, setParsedDetailedContent] = useState<DetailedResearchDocument | null>(null);

  const selectedNode = selectedNodeId 
    ? data.research_nodes.find(node => node.node_id === selectedNodeId)
    : null;

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

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-yellow-100 text-yellow-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      case "not started":
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  
  const getPortabilityColor = (flag?: string) => {
    switch (flag) {
      case "⚖️ Same": 
        return "bg-green-100 text-green-800";
      case "🔀 Adapt": 
        return "bg-yellow-100 text-yellow-800";
      case "❗ New": 
        return "bg-red-100 text-red-800";
      case "🌟 Consolidated View": 
        return "bg-indigo-100 text-indigo-800";
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

  // Function to fetch and parse the YAML file
  const fetchAndParseYaml = async (path: string) => {
    try {
      setIsLoadingDetail(true);
      setDetailError(null);
      
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch YAML file: ${response.statusText}`);
      }
      
      const yamlText = await response.text();
      const parsedData = yaml.load(yamlText) as DetailedResearchDocument;
      setParsedDetailedContent(parsedData);
    } catch (error) {
      console.error("Error loading YAML document:", error);
      setDetailError(error instanceof Error ? error.message : "Failed to load detailed document");
    } finally {
      setIsLoadingDetail(false);
    }
  };

  // Effect to load YAML when selected node changes
  useEffect(() => {
    if (selectedNode && selectedNode.detailed_document_path) {
      fetchAndParseYaml(selectedNode.detailed_document_path);
    } else {
      // Reset when no node is selected or node has no document path
      setParsedDetailedContent(null);
    }
  }, [selectedNode]);

  const openDetailView = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    setActiveTab("overview");
  };

  const closeDetailView = () => {
    setSelectedNodeId(null);
  };

  const renderFindingPoint = (point: FindingPoint, index: number, level = 0) => {
    return (
      <div key={index} className={`${level > 0 ? 'ml-5' : ''} mb-3`}>
        <div className="flex items-start">
          <div className="flex-1">
            <p className="text-slate-700">{point.text}</p>
            {point.citation && (
              <div className="text-xs text-slate-500 mt-1 italic">
                Source: {point.citation}
              </div>
            )}
          </div>
        </div>
        {point.subpoints && point.subpoints.length > 0 && (
          <div className="mt-2 pl-4 border-l-2 border-slate-200">
            {point.subpoints.map((subpoint, subIndex) => 
              renderFindingPoint(subpoint, `${index}-${subIndex}` as any, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  // Main list view
  if (!selectedNodeId) {
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
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getStatusColor(node.status)}>
                      {node.status}
                    </Badge>
                    {node.portability_flag && (
                      <Badge variant="outline" className={getPortabilityColor(node.portability_flag)}>
                        {node.portability_flag}
                      </Badge>
                    )}
                    <Badge variant="outline" className={getPriorityColor(node.priority)}>
                      {node.priority} Priority
                    </Badge>
                  </div>
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

                    {node.detailed_document_path && (
                      <div className="mt-4 flex justify-end">
                        <Button 
                          variant="outline" 
                          onClick={(e) => {
                            e.stopPropagation();
                            openDetailView(node.node_id);
                          }}
                        >
                          View Full Research Document
                        </Button>
                      </div>
                    )}
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

  // Detailed document view
  if (!selectedNode) {
    return <div>Loading...</div>;
  }

  if (selectedNode && selectedNode.detailed_document_path && isLoadingDetail) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <p className="text-slate-600">Loading detailed research document...</p>
      </div>
    );
  }

  if (selectedNode && selectedNode.detailed_document_path && detailError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] space-y-4 text-center">
        <div className="p-4 bg-red-50 border border-red-200 rounded-md max-w-md">
          <h3 className="text-lg font-semibold text-red-700 mb-2">Error Loading Document</h3>
          <p className="text-red-600">{detailError}</p>
          <Button variant="outline" className="mt-4" onClick={closeDetailView}>
            Back to Research Spine
          </Button>
        </div>
      </div>
    );
  }

  if (!parsedDetailedContent && selectedNode.detailed_document_path) {
    return <div>No detailed content available.</div>;
  }

  const detailedDoc = parsedDetailedContent;
  const nodeDoc = detailedDoc?.detailed_analysis_phase?.node_document;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{selectedNode.title}</h2>
          <p className="text-slate-500 mt-1">Detailed Research Document</p>
        </div>
        <Button variant="ghost" onClick={closeDetailView}>
          Back to Research Spine
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="executive-summary">Executive Summary</TabsTrigger>
          <TabsTrigger value="detailed-findings">Detailed Findings</TabsTrigger>
          <TabsTrigger value="evidence">Evidence & Sources</TabsTrigger>
          <TabsTrigger value="learnings">Key Learnings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader className="bg-slate-50">
              <div className="flex justify-between items-center">
                <CardTitle>{selectedNode.title}</CardTitle>
                <div className="flex gap-2">
                  {nodeDoc?.portability_flag && (
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      {nodeDoc.portability_flag}
                    </Badge>
                  )}
                  {nodeDoc?.status_box && (
                    <Badge variant="outline" className={getStatusColor(nodeDoc.status_box)}>
                      {nodeDoc.status_box}
                    </Badge>
                  )}
                  <Badge variant="outline" className={getPriorityColor(selectedNode.priority)}>
                    {selectedNode.priority} Priority
                  </Badge>
                </div>
              </div>
              <CardDescription className="mt-2">
                {detailedDoc?.session_kick_off_and_alignment?._critical_takeaway}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Document Scope</h3>
                  <p className="text-slate-700">{selectedNode.scope}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Core Research Questions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedNode.core_questions.map((question, index) => (
                      <li key={index} className="text-slate-700">{question}</li>
                    ))}
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Key Outputs & Impact on COS</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedNode.key_outputs_or_impact_on_cos.map((output, index) => (
                      <li key={index} className="text-slate-700">{output}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metadata Card */}
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle className="text-sm">Document Metadata</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Version:</span> {detailedDoc?._generation_metadata?.version || "1.0"}
                </div>
                <div>
                  <span className="font-medium text-slate-700">Date:</span> {detailedDoc?._generation_metadata?.date || "Not specified"}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Executive Summary Tab */}
        <TabsContent value="executive-summary" className="space-y-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle>Executive Summary</CardTitle>
              <CardDescription className="mt-2 text-blue-800 font-medium">
                {detailedDoc?.executive_summary_phase?._critical_takeaway}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-slate-700">
                  {detailedDoc?.executive_summary_phase?._section_tldr}
                </p>
                
                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-md">
                  <h4 className="font-medium text-blue-800 mb-2">Key Implications for Commerce OS</h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>Platform must adapt to higher UK e-commerce penetration and different shopper journeys.</li>
                    <li>Regulatory compliance modules for HFSS (promotions, advertising) and EPR (data reporting, fee management) will be critical.</li>
                    <li>Analytics capabilities need to capture nuanced shopper mission changes and price sensitivity.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Detailed Findings Tab */}
        <TabsContent value="detailed-findings" className="space-y-6">
          <Card>
            <CardHeader className="bg-slate-50">
              <CardTitle>Detailed Research Findings</CardTitle>
              <CardDescription>
                {detailedDoc?.detailed_analysis_phase?._critical_takeaway}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {nodeDoc?.key_findings.map((finding: any, index: number) => (
                <Accordion key={index} type="single" collapsible className="border-b last:border-b-0">
                  <AccordionItem value={`finding-${index}`} className="border-0">
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-50/80">
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-slate-900">{finding.title}</h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      {finding.critical_takeaway && (
                        <div className="mb-4 p-3 bg-blue-50 text-blue-800 rounded-md">
                          <p className="font-medium">{finding.critical_takeaway}</p>
                        </div>
                      )}
                      <div className="space-y-1">
                        {finding.points.map((point: any, pointIndex: number) => 
                          renderFindingPoint(point, pointIndex)
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Evidence & Sources Tab */}
        <TabsContent value="evidence" className="space-y-6">
          <Card>
            <CardHeader className="bg-slate-50">
              <CardTitle>Evidence & Transparency</CardTitle>
              <CardDescription>
                {detailedDoc.evidence_and_transparency_phase?.critical_takeaway}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Source Links</h3>
                  <div className="grid gap-3">
                    {nodeDoc?.source_links?.map((source: any, index: number) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-md">
                        <p className="font-medium text-slate-900">{source.title}</p>
                        <a 
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {source.url}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Confidence & Limitations</h3>
                  <div className="p-4 bg-slate-50 rounded-md">
                    <p className="mb-2 text-slate-700">
                      <span className="font-medium">Confidence:</span> High for documented regulatory timelines and established market trends.
                    </p>
                    <p className="font-medium mb-1 text-slate-700">Limitations:</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>Market share data and forecasts are subject to change based on economic conditions.</li>
                      <li>Some nuanced shopper behaviors may require deeper, proprietary research.</li>
                      <li>The '£RRP timeline' is more about ongoing pricing practices and scrutiny rather than a fixed regulatory schedule like HFSS/EPR.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Key Learnings Tab */}
        <TabsContent value="learnings" className="space-y-6">
          <Card>
            <CardHeader className="bg-slate-50">
              <CardTitle>Key Learnings & Path Forward</CardTitle>
              <CardDescription>
                {detailedDoc.key_learnings_and_reinforcement?.critical_takeaway}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Recap of Key Insights</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>The UK's retail environment is distinct from the US, with higher online penetration and specific recovery patterns post-pandemic.</li>
                    <li>HFSS and EPR regulations introduce complex compliance requirements with phased timelines through 2027, impacting product marketing, packaging, and operational costs.</li>
                    <li>UK shoppers are increasingly mission-driven, influenced by convenience, value (cost-of-living impact), online channels, and the rise of discounters. Health and sustainability are growing considerations.</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-md">
                  <h3 className="font-semibold text-amber-900 mb-2">Strategic Considerations for Commerce OS</h3>
                  <ul className="list-disc pl-5 space-y-2 text-amber-800">
                    <li>Prioritize development of robust compliance features for HFSS and EPR.</li>
                    <li>Ensure platform flexibility to support diverse and evolving UK shopper missions (e.g., click & collect, rapid delivery, discount models).</li>
                    <li>Leverage data analytics to track and respond to UK-specific market trends and consumer price sensitivity.</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Next Steps in Research Spine</h3>
                  <div className="p-4 bg-blue-50 rounded-md">
                    <ul className="list-disc pl-5 space-y-2 text-blue-800">
                      <li>Proceed to the next node: 'Retailer Profiles & Incentive Models' based on priority.</li>
                      <li>Continuously update this Macro Environment node as new data or regulatory clarifications emerge.</li>
                      <li>Begin mapping specific Commerce-OS features against the identified UK requirements.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}