import React from "react";

const performanceChart = () => {
  const data = [
    { month: "Jan", net_change: 300 },
    { month: "Feb", net_change: -150 },
    { month: "Mar", net_change: 500 },
    // Fill this from your API
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="net_change" fill="#4CAF50" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default performanceChart;
