import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { RiHome5Fill } from "react-icons/ri";
import { Container, Link, LinksWrapper } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <Container>
      <LinksWrapper>
        <Link to="/">
          <RiHome5Fill />
        </Link>
        <Link to="/surahs">
          <FaBookOpen />
        </Link>
        <Link to="/times">
          <BsClockFill />
        </Link>
      </LinksWrapper>
    </Container>
  );
};

export default Sidebar;
