import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import { PRIMARY } from "../../helpers/color";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];
const BarChartContainer = (props: any) => {
  return (
    <BarChartContainerWrapper className="col-sm-3 col-md-3">
      <div className="inner">
        <ResponsiveContainer width="95%" height={270}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar type="monotone" dataKey="pv" fill="#ffffff" radius={5} />
          </BarChart>
        </ResponsiveContainer>
        <h5>New Users</h5>
        <h6>
          <b>(+23%)</b>than last week
        </h6>
      </div>
    </BarChartContainerWrapper>
  );
};

export default BarChartContainer;

const BarChartContainerWrapper = styled.div`
  padding: 15px;
  .inner {
    background: ${PRIMARY};
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 15px;
    tspan {
      font-family: Inter;
      font-style: normal;
      font-weight: 200;
      font-size: 12px;
      line-height: 140%;
      /* or 17px */

      text-align: right;
      letter-spacing: -0.3px;

      /* Label */

      fill: #ffffff;
    }
    h5 {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      /* identical to box height */

      letter-spacing: -0.442553px;

      /* White */

      color: #ffffff;
    }
    h6 {
      font-weght: 100;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      letter-spacing: -0.387234px;

      /* White */

      color: #ffffff;
    }
  }
  @media screen and (max-width: 590px) {
  }
`;
