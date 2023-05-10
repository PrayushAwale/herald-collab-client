import { Box, Flex } from "@chakra-ui/react";
import ReactEcharts from "echarts-for-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data = [
    {
      name: "January",
      revenues: 4000,
    },
    {
      name: "February",
      revenues: 4500,
    },
    {
      name: "March",
      revenues: 1000,
    },
    {
      name: "April",
      revenues: 500,
    },
    {
      name: "May",
      revenues: 4000,
    },
    {
      name: "April",
      revenues: 3000,
    },
    {
      name: "July",
      revenues: 800,
    },
    {
      name: "August",
      revenues: 1000,
    },
    {
      name: "September",
      revenues: 1500,
    },
    {
      name: "October",
      revenues: 1300,
    },
    {
      name: "November",
      revenues: 1000,
    },
    {
      name: "December",
      revenues: 2000,
    },
  ];

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: "#a90000",
            },
          },
          150,
          80,
          70,
          110,
          130,
        ],
        type: "bar",
      },
    ],
  };
  return (
    <Box maxH={"20rem"}>
      <Flex>
        <ResponsiveContainer width="90%" backgroundColor={"red"} aspect={3}>
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
            <CartesianGrid horizontal="true" vertical="" stroke="#666d73" />
            <XAxis dataKey="name" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fdb78b", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={false}
            />
            <Line
              type="monotone"
              dataKey="revenues"
              stroke="#fdb78b"
              strokeWidth="5"
              dot={{ fill: "#2e4355", stroke: "#fdb78b", strokeWidth: 2, r: 5 }}
              activeDot={{
                fill: "#2e4355",
                stroke: "#fdb78b",
                strokeWidth: 5,
                r: 10,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
        <ReactEcharts option={option} />
      </Flex>
    </Box>
  );
}

export default Chart;
