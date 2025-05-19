import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KpiDashboardData } from "@/data/kpiDashboardData";

interface KpiDashboardViewProps {
  data: KpiDashboardData;
}

export default function KpiDashboardView({ data }: KpiDashboardViewProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend.toLowerCase()) {
      case "increasing":
      case "improving":
        return "fas fa-arrow-up";
      case "decreasing":
      case "declining":
        return "fas fa-arrow-down";
      case "stable":
      default:
        return "fas fa-arrow-right";
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend.toLowerCase()) {
      case "increasing":
      case "improving":
        return "bg-green-100 text-green-800";
      case "decreasing":
      case "declining":
      case "needs improvement":
        return "bg-yellow-100 text-yellow-800";
      case "stable":
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getKpiIcon = (kpiId: string) => {
    // Map different KPI types to appropriate icons
    if (kpiId.includes("001")) return "fas fa-chart-line";
    if (kpiId.includes("002")) return "fas fa-percentage";
    return "fas fa-chart-pie";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">KPI & Metrics Dashboard</h2>
          <p className="text-slate-500">Key performance indicators and metrics framework</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.kpis.map((kpi) => (
          <Card key={kpi.id} className="shadow-sm">
            <CardContent className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">{kpi.id}</p>
                  <h3 className="text-xl font-semibold text-slate-900">{kpi.name}</h3>
                </div>
                <div className="rounded-full bg-blue-100 p-2">
                  <i className={`${getKpiIcon(kpi.id)} text-blue-600`}></i>
                </div>
              </div>
              
              <p className="text-sm text-slate-700">{kpi.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Current Value</p>
                  <p className="text-lg font-semibold text-slate-900">{kpi.current_value}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Target Value</p>
                  <p className="text-lg font-semibold text-green-600">{kpi.target_value}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <p className="text-xs italic text-slate-500">{kpi.notes}</p>
                <Badge variant="outline" className={getTrendColor(kpi.trend)}>
                  <i className={`${getTrendIcon(kpi.trend)} mr-1 text-xs`}></i>
                  {kpi.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
