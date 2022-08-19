import React from "react";
import { BarChart } from "react-d3-components";
import { Text, Title } from "@mantine/core";

export default function BarChartContainer(props) {
  const climbData = props.items;
  const data = dataHandler(climbData);
  return (
    <Title className="title">
      Climbs
      <Text className="age">
        <span /> Grade
      </Text>
      <BarChart
        data={data}
        width={347}
        height={345}
        margin={{ top: 20, bottom: 50, left: 50, right: 0 }}
      />
    </Title>
  );
}

// go through the data, x axis will be grade, y will be count at each grade
function dataHandler(climbData) {
  let mappedData = {
    // to be filled with grade: count
  };

  for (let climb of climbData) {
    mappedData[climb.grade] = ++mappedData[climb.grade] || 1;
  }

  let values = [
    // to be filled with x: 'grade', y: count
  ];

  for (let key in mappedData) {
    values.push({ x: key, y: mappedData[key] });
  }

  let data = [
    {
      label: "climbs",
      values: values,
    },
  ];
  return data;
}
