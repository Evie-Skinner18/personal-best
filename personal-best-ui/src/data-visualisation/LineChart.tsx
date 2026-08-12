
import { Line } from "react-chartjs-2";
import Chart, {CategoryScale } from 'chart.js/auto';
import { PersonalBestByMonth } from "../domain/personal-best/PersonalBest";

const personalBestsByMonth: PersonalBestByMonth[] = [
  { month: 'Jan', personalBest: 10 },
  { month: 'Feb', personalBest: 20 },
  { month: 'Mar', personalBest: 15 },
  { month: 'Apr', personalBest: 25 },
  { month: 'May', personalBest: 27 },
  { month: 'Jun', personalBest: 30 },
  { month: 'Jul', personalBest: 28 },
];

// to-do pass in exercise name
const getDataset = (exerciseName: string, lineColour: string, borderColour: string) => {
  return {
  labels: personalBestsByMonth.map(row => row.month),
  datasets: [
    {
      label: `This month's PB for ${exerciseName}`,
      backgroundColor: lineColour,
      borderColor: borderColour,
      data: personalBestsByMonth.map(row => row.personalBest),
    },
  ],
}};

interface LineChartProps {
  exerciseName: string;
  lineColour: string;
  borderColour: string;
}

Chart.register(
  CategoryScale,
);

const LineChart = (props: LineChartProps) => {
  const { exerciseName, lineColour, borderColour } = props;
  return (
    <div>
      <Line data={getDataset(exerciseName, lineColour, borderColour)} />
    </div>
  );
};

export default LineChart;