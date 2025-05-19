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
      name: "Rate of Sale (ROS) - Pilot SKUs",
      description: "Units sold per store per week for Beanies Hazelnut & Caramel Jars in Asda & Sainsbury's.",
      current_value: "Baseline TBD in P1 (e.g., JS £ROS £6.31 overall)",
      target_value: "≥ 20% uplift signal vs baseline post-COS interventions",
      trend: "To Monitor",
      notes: "Primary indicator of velocity and impact of COS-driven strategies (range changes, optimized promos)."
    },
    {
      id: "KPI002",
      name: "ACV Distribution - Pilot SKUs",
      description: "All Commodity Volume % for Beanies Hazelnut & Caramel Jars in Asada & Sainsbury's.",
      current_value: "Baseline TBD in P1 (e.g., Caramel avg 335 JS stores)",
      target_value: "+10 distribution points (overall COS OKR)",
      trend: "To Monitor",
      notes: "Measures success of range gap identification and JBP negotiation."
    },
    {
      id: "KPI003",
      name: "Return on Marketing Investment (ROMI) - Pilot Campaigns",
      description: "Profitability of specific RMN campaigns and trade promotions run for pilot SKUs.",
      current_value: "N/A (to be tracked in P4)",
      target_value: "Promo ROI ≥ 150%; Overall ROMI ↑ 25% (COS OKR)",
      trend: "To Monitor",
      notes: "Requires closed-loop measurement via RMN connectors and PathX Lift Engine."
    },
    {
      id: "KPI004",
      name: "JBP Auto-Generation Fill Rate (Asda Pilot)",
      description: "Percentage of Asda JBP template automatically populated by COS JBP Wizard with live data.",
      current_value: "N/A",
      target_value: ">80%",
      trend: "To Monitor (during P3)",
      notes: "Internal COS efficiency metric."
    },
    {
      id: "KPI005",
      name: "JBP Creation Time (Asda Pilot)",
      description: "Time taken to produce a data-rich Asda JBP using the COS.",
      current_value: "~30 hours (manual baseline)",
      target_value: "<5 minutes for 90% auto-fill",
      trend: "To Monitor (during P3/P4)",
      notes: "Measures direct time-saving benefit for account managers."
    },
    {
      id: "KPI006",
      name: "Range-Gap Alert Accuracy & Action Rate",
      description: "Accuracy of COS-generated range-gap alerts and percentage of alerts leading to a JBP action/pitch.",
      current_value: "N/A",
      target_value: "Accuracy >90%; Action Rate >50% (TBD)",
      trend: "To Monitor (during P4)",
      notes: "Measures effectiveness of automated opportunity identification."
    },
    {
      id: "KPI007",
      name: "Share of Voice (SOV) - Digital Shelf",
      description: "Beanies' visibility (e.g., search rank for 'flavoured coffee') on Asda.com, Sainsburys.co.uk for pilot SKUs vs. Little's.",
      current_value: "Baseline TBD (via Digital Shelf tool)",
      target_value: "Improve vs baseline; Target 10-15% for sponsored search",
      trend: "To Monitor",
      notes: "Indicates online discoverability."
    },
    {
      id: "KPI008",
      name: "Online Out-of-Stock (OOS) Rate - Pilot SKUs",
      description: "Percentage of time pilot SKUs are OOS on key retailer websites.",
      current_value: "Baseline TBD (via Digital Shelf tool)",
      target_value: "Reduce vs baseline (target <5% TBD)",
      trend: "To Monitor",
      notes: "Impacts online sales and customer experience."
    },
    {
      id: "KPI009",
      name: "COS Alert SLA (Range Gap / OOS)",
      description: "Time from data availability (e.g., Crisp feed update) to COS alert generation.",
      current_value: "N/A",
      target_value: "< 1 hour",
      trend: "To Monitor (during P4)",
      notes: "Measures COS responsiveness."
    },
    {
      id: "KPI010",
      name: "Retailer Engagement (Qualitative)",
      description: "Feedback from Asda & Sainsbury's buyers on the quality of data, insights, and JBP process with COS.",
      current_value: "Baseline based on current relationships",
      target_value: "Improved feedback, faster JBP approvals",
      trend: "To Monitor",
      notes: "Track via KAM feedback. Contributes to Retailer NPS."
    }
  ]
};

export default kpiDashboardData;
