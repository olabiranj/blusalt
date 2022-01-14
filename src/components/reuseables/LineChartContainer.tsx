import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "Dec",
    uv: 3000,
    pv: 2700,
    amt: 2600,
  },
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
const LineChartContainer = () => {
  return (
    <LineChartContainerWrapper className="col-sm-9 col-md-9">
      <div className="inner">
        <div className="details mb-4">
          <div>
            <h4>User Inflow Statistics</h4>
            <h5>Nov - July</h5>
          </div>
          <div>
            <div className="mr-4">
              <h5>
                <span className="fas fa-circle text-info"></span> AGENTS
              </h5>
              <h4>475 273</h4>
            </div>
            <div className="d-none">
              <h5>
                <span className="fas fa-circle text-success"></span> AGENTS
              </h5>
              <h4>475 273</h4>
            </div>
            <div>
              <h5>
                <span className="fas fa-circle text-success"></span> USERS
              </h5>

              <h4>782 396</h4>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="95%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </LineChartContainerWrapper>
  );
};

export default LineChartContainer;

const LineChartContainerWrapper = styled.div`
  padding: 15px;
  .inner {
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 15px;
    tspan {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 140%;
      /* or 17px */

      text-align: right;
      letter-spacing: -0.3px;

      /* Label */

      color: #b9b9b9;
    }

    .details {
      display: flex;
      justify-content: space-between;
      div {
        h4 {
          font-size: 18px;
          line-height: 120%;
          letter-spacing: -0.4px;

          color: #171717;
        }
        h5 {
          font-size: 14px;
          line-height: 140%;
          letter-spacing: -0.5px;

          color: #b9b9b9;
        }
        :nth-of-type(2) {
          display: flex;
        }
      }
    }
  }
  @media screen and (max-width: 590px) {
  }
`;
