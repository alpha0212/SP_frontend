import React from "react";
import { Line } from "react-chartjs-2";

interface LineGraphProps {
  chartData: any;
}

export const LineGraph: React.FC<LineGraphProps> = ({ chartData }) => {
  return <Line data={chartData} />;
};
