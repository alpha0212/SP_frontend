import React from "react";
import { PolarArea } from "react-chartjs-2";

interface PolarAreaProps {
  chartData: any;
}

export const CircleGraph: React.FC<PolarAreaProps> = ({ chartData }) => {
  return <PolarArea data={chartData} />;
};
