import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";
import {DrinkDetailChartData} from "types/DrinkDetailChart";


interface DrinkDetailChartProps {
  chartData: DrinkDetailChartData
}

const DrinkDetailChart: React.FC<DrinkDetailChartProps> = (props) => {

  const data = [
    { label: props.chartData.label1, value: props.chartData.value1 },
    { label: props.chartData.label2, value: props.chartData.value2 },
    { label: props.chartData.label3, value: props.chartData.value3 },
    { label: props.chartData.label4, value: props.chartData.value4 },
    { label: props.chartData.label5, value: props.chartData.value5 }
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
      <PolarAngleAxis dataKey="label" />
      <PolarRadiusAxis angle={90} domain={[0, 5]} />
      <Radar
        name="janken"
        dataKey="value"
        stroke="#ffa500"
        fill="#fffacd"
        fillOpacity={0.6}
      />
      <Tooltip />
    </RadarChart>
  )
}

export default DrinkDetailChart;
