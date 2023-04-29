import React from "react";
import { Left, Name, Right, Time, TimePray } from "./PrayTimeDetail.styles";
import { PrayTimeDetailProps } from "./PrayTimeDetail.types";

const PrayTimeDetail = ({
  icon: Icon,
  firstTime,
  lastTime,
  name,
  time,
  status,
}: PrayTimeDetailProps) => {
  const comp = (t1: string, t2: string, p?: string): boolean => {
    const [h1, m1] = t1.split(":").map((i) => +i);
    const [h2, m2] = t2.split(":").map((i) => +i);
    const bool = time.indexOf("PM");
    const [h3, m3] = time
      .split(":")
      .map((i) => +i)
      .map((i, x) => {
        if (bool > -1 && x == 0) {
          i = i + 12;
          return i;
        }
        return i;
      });
    if ((p == "hufton" && h1 < h3) || (h1 == h3 && p == "hufton" && m3 > m1)) {
      return true;
    }
    if (
      (h1 < h3 && h3 < h2) ||
      (h1 == h3 && m3 >= m1) ||
      (h2 == h3 && m3 <= m2)
    ) {
      return true;
    } else return false;
  };

  return (
    <>
      <Time
        className={
          comp(firstTime, lastTime, status) && status !== "quyosh"
            ? "active"
            : ""
        }
      >
        <Left>{Icon}</Left>
        <Right>
          <Name>{name}</Name>
          <TimePray>{firstTime}</TimePray>
        </Right>
      </Time>
    </>
  );
};

export default PrayTimeDetail;
