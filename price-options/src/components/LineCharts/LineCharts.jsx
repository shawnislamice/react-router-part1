import { LineChart, Line, XAxis, YAxis, } from "recharts";

const LineCharts = () => {
  const studentMarks = [
    { id: 1, student: 1, math: 85, physics: 75, chemistry: 90 },
    { id: 2, student: 2, math: 75, physics: 80, chemistry: 85 },
    { id: 3, student: 3, math: 90, physics: 85, chemistry: 88 },
    { id: 4, student: 4, math: 80, physics: 70, chemistry: 75 },
    { id: 5, student: 5, math: 65, physics: 60, chemistry: 70 },
    { id: 6, student: 6, math: 88, physics: 82, chemistry: 92 },
    { id: 7, student: 7, math: 72, physics: 68, chemistry: 78 },
    { id: 8, student: 8, math: 82, physics: 78, chemistry: 85 },
    { id: 9, student: 9, math: 78, physics: 76, chemistry: 80 },
    { id: 10, student: 10, math: 95, physics: 88, chemistry: 92 },
  ];


  return <div>
    <LineChart width={500} height={400} data={studentMarks}>
      <XAxis ></XAxis>
      <YAxis ></YAxis>
      <Line type="monotone" dataKey="math" stroke="#8884d8" />
      <Line type="monotone" dataKey="chemistry" stroke="#F00" />
      <Line type="monotone" dataKey="physics" stroke="yellow" />
    </LineChart>
  </div>;
};

export default LineCharts;
