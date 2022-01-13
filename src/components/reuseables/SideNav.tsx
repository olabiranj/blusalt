import React from "react";
import styled from "styled-components";
import Navlink from "./Navlink";
import { ReactComponent as HomeIcon } from "../../assets/icons/Home.svg";
import { ReactComponent as RequestIcon } from "../../assets/icons/request.svg";
import { ReactComponent as KycIcon } from "../../assets/icons/kyc.svg";
import { ReactComponent as ReportIcon } from "../../assets/icons/reports.svg";
import { ReactComponent as AuditIcon } from "../../assets/icons/audit.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/Setting.svg";

const SideNav: React.FC = () => {
  const sidebarLinks: sideLinkType[] = [
    {
      link: "/",
      name: "Dashboard",
      icon: HomeIcon,
    },
    {
      link: "/requests",
      name: "Requests",
      icon: RequestIcon,
    },
    {
      link: "/kyc",
      name: "KYCs",
      icon: KycIcon,
    },
    {
      link: "/reports",
      name: "Reports",
      icon: ReportIcon,
    },
    {
      link: "/audit",
      name: "Audit Trial",
      icon: AuditIcon,
    },
    {
      link: "/users",
      name: "Users",
      icon: UsersIcon,
    },
    {
      link: "/settings",
      name: "Setting",
      icon: SettingsIcon,
    },
  ];
  return (
    <SideNavWrapper>
      <ul>
        {sidebarLinks.map((link, i) => (
          <Navlink key={i} link={link} />
        ))}
      </ul>
    </SideNavWrapper>
  );
};

export default SideNav;

const SideNavWrapper = styled.div`
  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    transition: all 0.3s linear;
  }
  @media screen and (max-width: 590px) {
  }
`;
