import React from "react";
import { Bar } from "react-chartjs-2";

interface BarGraphProps {
  chartData: any;
}

export const BarGraph: React.FC<BarGraphProps> = ({ chartData }) => {
  return <Bar data={chartData} />;
};
