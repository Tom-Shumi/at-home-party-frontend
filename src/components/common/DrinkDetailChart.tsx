import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";


interface DrinkDetailChartProps {

}

const DrinkDetailChart: React.FC<DrinkDetailChartProps> = (props) => {
  const data = [
    { rank: '国　語', value: 5 },
    { rank: '数　学', value: 4 },
    { rank: '理　科', value: 3 },
    { rank: '社　会', value: 2 },
    { rank: '英　語', value: 1 },
    ];

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid/>
      <PolarAngleAxis dataKey="rank" />
      <PolarRadiusAxis angle={90} domain={[0, 5]} />
      <Radar
        name="janken"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Tooltip />
    </RadarChart>
  )
}

export default DrinkDetailChart;
