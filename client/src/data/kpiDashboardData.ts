export interface KPI {
  id: string;
  name: string;
  description: string;
  current_value: string;
  target_value: string;
  trend: string;
  notes: string;
}

export interface KpiDashboardData {
  kpis: KPI[];
}

const kpiDashboardData: KpiDashboardData = {
  kpis: [
    {
      id: "KPI001",
      name: "Rate of Sale (ROS)",
      description: "Measures the rate at which products are sold in specific stores over a defined period.",
      current_value: "£6.31 (52 wks JS)",
      target_value: "≥ 20% uplift on pilot SKUs",
      trend: "Stable",
      notes: "Critical velocity metric for Beanies SKUs."
    },
    {
      id: "KPI002",
      name: "ACV Distribution",
      description: "Percentage of total category sales volume in stores where a specific SKU is listed.",
      current_value: "45% (Hazelnut example)",
      target_value: "+10% distribution points",
      trend: "Needs Improvement",
      notes: "Key for identifying distribution gaps."
    }
  ]
};

export default kpiDashboardData;
