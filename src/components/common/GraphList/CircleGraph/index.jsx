import React from "react";
import { Doughnut } from "react-chartjs-2";

export const CircleGraph = ({ chartData }) => {
  return <Doughnut data={chartData} />;
};
