import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FeatureTrackerData } from "@/data/featureTrackerData";

interface FeatureTrackerViewProps {
  data: FeatureTrackerData;
}

export default function FeatureTrackerView({ data }: FeatureTrackerViewProps) {
  const getCoverageColor = (coverage: string) => {
    if (coverage.toLowerCase().includes("full")) {
      return "bg-green-100 text-green-800";
    } else if (coverage.toLowerCase().includes("partial")) {
      return "bg-yellow-100 text-yellow-800";
    } else {
      return "bg-red-100 text-red-800";
    }
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
              {data.features.map((feature) => (
                <TableRow key={feature.id}>
                  <TableCell className="whitespace-nowrap text-sm font-medium text-slate-900">
                    {feature.id}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium text-slate-900">{feature.name}</div>
                    <div className="text-sm text-slate-500 mt-1">{feature.description}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <Badge variant="outline" className={`mb-1 ${getCoverageColor(feature.current_pathx_status.coverage)}`}>
                        {feature.current_pathx_status.coverage}
                      </Badge>
                      <span className="text-xs text-slate-500">{feature.current_pathx_status.notes}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-slate-700">
                    {feature.gap_for_uk}
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
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
