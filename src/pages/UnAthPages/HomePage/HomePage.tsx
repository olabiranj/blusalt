import HomePageWrapper from "./Wrapper";
// import tile1 from "../../../assets/images/Rectangle 14.png";
import users from "../../../assets/images/Group 14.svg";
import total from "../../../assets/images/Group 12.svg";
import approved from "../../../assets/images/Group 11.svg";
import trandUp from "../../../assets/icons/icon-trending-up.svg";
import trandDown from "../../../assets/icons/icon-trending-down.svg";
import pending from "../../../assets/images/Group 10.svg";
import Sidebar from "../../../components/reuseables/Sidebar";
import Navbar from "../../../components/reuseables/Navbar";
import Card from "../../../components/reuseables/Card";
import { useEffect, useRef, useState } from "react";
import LineChartContainer from "../../../components/reuseables/LineChartContainer";
import BarChartContainer from "../../../components/reuseables/BarChart";
import Table from "../../../components/reuseables/Table";

function HomePage() {
  const [open, setOpen] = useState(false);
  const ref: any = useRef(null);
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);
  // let navigate = useNavigate();
  return (
    <HomePageWrapper>
      <Sidebar open={open} />
      <div className="main">
        <Navbar open={open} setOpen={setOpen} navRef={ref} />
        <div className="container-fluid">
          <div className="row">
            <Card
              img={pending}
              value={"1,478,286"}
              label={"Pending Requests"}
              ratio={"4.07% "}
              line={trandUp}
            />
            <Card
              img={approved}
              value={"1,478,286"}
              label={"Approved Requests"}
              ratio={"0.24%"}
              line={trandUp}
            />
            <Card
              img={total}
              value={"1,478,286"}
              label={"Total Agents"}
              ratio={"1.64%"}
              line={trandDown}
            />
            <Card
              img={users}
              value={"1,478,286"}
              label={"Total Users"}
              ratio={"0.00%"}
              line={trandDown}
            />
            <LineChartContainer />
            <BarChartContainer />
            <Table />
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
}

export default HomePage;
