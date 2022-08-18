import React from "react";
import { BarChart } from "react-d3-components";

export default function BarChartContainer(props) {
  const climbData = props.items;
  const data = dataHandler(climbData);
  return (
    <h1 className="title">
      Climbs
      <p className="age">
        <span /> Grade
      </p>
      <BarChart
        data={data}
        width={347}
        height={307}
        margin={{ top: 10, bottom: 50, left: 50, right: 0 }}
      />
    </h1>
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
