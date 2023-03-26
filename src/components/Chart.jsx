import { Flex } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 3400, amt: 4400 },
  { name: "Page c", uv: 900, pv: 5400, amt: 1400 },
  { name: "Page d", uv: 1000, pv: 1400, amt: 1400 },
  { name: "Page e", uv: 600, pv: 6400, amt: 3400 },
  { name: "Page f", uv: 700, pv: 9400, amt: 4400 },
  { name: "Page g", uv: 800, pv: 1400, amt: 6400 },
];

const data = [
  {
    name: "January",
    Iphone: 4000,
  },
  {
    name: "March",
    Iphone: 1000,
  },
  {
    name: "May",
    Iphone: 4000,
  },
  {
    name: "July",
    Iphone: 800,
  },
  {
    name: "October",
    Iphone: 1500,
  },
];

function Chart() {
  return (
    <>
      <h2>Quarterly sales figures</h2>
      <Flex p={"1rem 3rem"}>
        <LineChart width={400} height={400} data={data1}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        <ResponsiveContainer
          height={"100%"}
          width="90%"
          backgroundColor={"red"}
          aspect={3}
        >
          <LineChart
            width={500}
            height={800}
            data={data}
            backgroundColor={"red"}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
            <XAxis dataKey="name" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={false}
            />
            <Line
              type="monotone"
              dataKey="Iphone"
              stroke="#8884d8"
              strokeWidth="5"
              dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
              activeDot={{
                fill: "#2e4355",
                stroke: "#8884d8",
                strokeWidth: 5,
                r: 10,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </>
  );
}

export default Chart;

// background color: #132737; (Goes on the index.css)

// text color: #fff (white)

// Horizontal Grid Color: #243240

// chart line color : #2e4355

// Data point Dot Fill color : #2e4355

// Data point Dot Stroke  color (dot outline outline) : #8884d8
