
import { Line } from "react-chartjs-2";
import Chart, {CategoryScale } from 'chart.js/auto';
import { PersonalBestByMonth } from "../exercise/Exercise";

const personalBestsByMonth: PersonalBestByMonth[] = [
  { month: 'Jan', personalBest: 10 },
  { month: 'Feb', personalBest: 20 },
  { month: 'Mar', personalBest: 15 },
  { month: 'Apr', personalBest: 25 },
  { month: 'May', personalBest: 27 },
  { month: 'Jun', personalBest: 30 },
  { month: 'Jul', personalBest: 28 },
];

const dataset = {
  labels: personalBestsByMonth.map(row => row.month),
  datasets: [
    {
      label: "This month's PB",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: personalBestsByMonth.map(row => row.personalBest),
    },
  ],
};

Chart.register(
  CategoryScale,
);

const LineChart = () => {
  return (
    <div>
      <Line data={dataset} />
    </div>
  );
};

export default LineChart;