import React from "react";
import { Line } from "react-chartjs-2";

export const LineGraph = ({ chartData }) => {
  return <Line data={chartData} />;
};
