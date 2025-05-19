import { useState } from "react";
import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FeatureTrackerData } from "@/data/featureTrackerData";

interface FeatureTrackerViewProps {
  data: FeatureTrackerData;
}

export default function FeatureTrackerView({ data }: FeatureTrackerViewProps) {
  const [expandedFeatureId, setExpandedFeatureId] = useState<string | null>(null);

  const getCoverageColor = (coverage: string) => {
    if (coverage.toLowerCase().includes("full") || coverage.toLowerCase().includes("strong")) {
      return "bg-green-100 text-green-800";
    } else if (coverage.toLowerCase().includes("partial") || coverage.toLowerCase().includes("implicit")) {
      return "bg-yellow-100 text-yellow-800";
    } else {
      return "bg-red-100 text-red-800";
    }
  };

  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes("completed")) {
      return "bg-green-100 text-green-800";
    } else if (status.toLowerCase().includes("in progress") || status.toLowerCase().includes("analyze") || status.toLowerCase().includes("sprint 1")) {
      return "bg-yellow-100 text-yellow-800";
    } else {
      return "bg-slate-100 text-slate-800";
    }
  };

  const toggleFeatureExpand = (id: string) => {
    if (expandedFeatureId === id) {
      setExpandedFeatureId(null);
    } else {
      setExpandedFeatureId(id);
    }
  };

  // Generate an array of rows that includes both feature rows and detail rows
  const tableRows = [];
  data.features.forEach((feature) => {
    // Add the main feature row
    tableRows.push(
      <TableRow 
        key={feature.id}
        className={`cursor-pointer ${expandedFeatureId === feature.id ? 'bg-blue-50' : ''}`}
        onClick={() => toggleFeatureExpand(feature.id)}
      >
        <TableCell className="whitespace-nowrap text-sm font-medium text-slate-900">
          {feature.id}
        </TableCell>
        <TableCell>
          <div className="text-sm font-medium text-slate-900">{feature.name}</div>
          <div className="text-sm text-slate-500 mt-1 line-clamp-2">{feature.description}</div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col">
            <Badge variant="outline" className={`mb-1 ${getCoverageColor(feature.current_pathx_status.coverage)}`}>
              {feature.current_pathx_status.coverage}
            </Badge>
            <span className="text-xs text-slate-500 line-clamp-1">{feature.current_pathx_status.notes}</span>
          </div>
        </TableCell>
        <TableCell className="text-sm text-slate-700 max-w-[250px]">
          <div className="line-clamp-2">{feature.gap_for_uk}</div>
        </TableCell>
        <TableCell className="whitespace-nowrap text-sm text-slate-700">
          {feature.dev_effort_sprints} sprints
        </TableCell>
        <TableCell className="whitespace-nowrap">
          <Badge variant="outline" className={getStatusColor(feature.status)}>
            {feature.status}
          </Badge>
        </TableCell>
      </TableRow>
    );

    // If this feature is expanded, add the details row
    if (expandedFeatureId === feature.id) {
      tableRows.push(
        <TableRow key={`${feature.id}-details`}>
          <TableCell colSpan={6} className="p-0 border-t-0">
            <Card className="border-0 shadow-none">
              <CardContent className="p-4 bg-blue-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-900">Target for Beanies</h4>
                    <p className="text-sm text-slate-700">{feature.target_for_beanies || "Not specified"}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-900">Key Dependencies</h4>
                    <p className="text-sm text-slate-700">{feature.key_dependencies || "None specified"}</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">Full Description</h4>
                  <p className="text-sm text-slate-700">{feature.description}</p>
                </div>
                
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">Current PathX Status</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={getCoverageColor(feature.current_pathx_status.coverage)}>
                      {feature.current_pathx_status.coverage}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-700">{feature.current_pathx_status.notes}</p>
                </div>
                
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">Full Gap Analysis for UK</h4>
                  <p className="text-sm text-slate-700">{feature.gap_for_uk}</p>
                </div>
              </CardContent>
            </Card>
          </TableCell>
        </TableRow>
      );
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Feature Development & Gap Analysis</h2>
          <p className="text-slate-500">Track COS features, development status and gap analysis</p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="text-xs font-medium text-slate-500 uppercase">ID</TableHead>
                <TableHead className="text-xs font-medium text-slate-500 uppercase">Feature</TableHead>
                <TableHead className="text-xs font-medium text-slate-500 uppercase">Current PathX Status</TableHead>
                <TableHead className="text-xs font-medium text-slate-500 uppercase">Gap for UK</TableHead>
                <TableHead className="text-xs font-medium text-slate-500 uppercase">Dev Effort</TableHead>
                <TableHead className="text-xs font-medium text-slate-500 uppercase">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableRows}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-sm text-blue-700">
          <i className="fas fa-info-circle mr-2"></i>
          Click on any feature row to view detailed information about targets, dependencies, and full descriptions.
        </p>
      </div>
    </div>
  );
}