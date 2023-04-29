import { Select } from "antd";
import React, { useState } from "react";
import { BsFillSunriseFill, BsFillSunsetFill, BsSunFill } from "react-icons/bs";
import { IoPartlySunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { FaCloudMoon } from "react-icons/fa";
import PrayTimeDetail from "../../components/PrayTimeDetail";
import { regions } from "../../utilities/cities";
import { useGetTime } from "../../utilities/getData";
import {
  TimesWrapper,
  Container,
  Head,
  Now,
  Region,
  Settings,
} from "./PrayTimes.styles";
import { isError } from "@tanstack/react-query";
import Loader from "../../components/Loader";

const PrayTime = () => {
  const [region, setRegion] = useState<string>("Toshkent");

  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime, 1000);

  const timePray = useGetTime(["pray time", region], `day?region=${region}`, {
    enabled: !!region,
  });

  const { data, isError, error } = timePray;
  if (isError) {
    if (typeof error === "object") {
      return (
        <h1 style={{ textAlign: "center", marginTop: 30 }}>
          {error?.response?.status} | {error?.response?.statusText}
        </h1>
      );
    }
  }

  return (
    <Container>
      <Head>Prayer Time for {region}</Head>
      <Settings>
        <Now>{ctime}</Now>
        <Region>
          <Select
            defaultValue={region}
            style={{ width: 200 }}
            options={regions}
            onChange={(e) => setRegion(e)}
            size={window.innerWidth < 1001 ? "middle" : "large"}
          />
        </Region>
      </Settings>
      {timePray.isLoading ? (
        <Loader />
      ) : (
        <TimesWrapper>
          <PrayTimeDetail
            icon={<FaCloudMoon />}
            name="Fajar"
            firstTime={data?.times?.tong_saharlik}
            lastTime={data?.times?.quyosh}
            time={ctime}
            status="bomdod"
          />
          <PrayTimeDetail
            icon={<BsFillSunriseFill />}
            name="Sun Rise"
            firstTime={data?.times?.quyosh}
            lastTime={data?.times?.peshin}
            time={ctime}
            status="quyosh"
          />
          <PrayTimeDetail
            icon={<BsSunFill />}
            name="Zuhar"
            firstTime={data?.times?.peshin}
            lastTime={data?.times?.asr}
            time={ctime}
            status="peshin"
          />
          <PrayTimeDetail
            icon={<IoPartlySunny />}
            name="Asar"
            firstTime={data?.times?.asr}
            lastTime={data?.times?.shom_iftor}
            time={ctime}
            status="asr"
          />
          <PrayTimeDetail
            icon={<BsFillSunsetFill />}
            name="Magrib"
            firstTime={data?.times?.shom_iftor}
            lastTime={data?.times?.hufton}
            time={ctime}
            status="shom"
          />
          <PrayTimeDetail
            icon={<IoIosMoon />}
            name="Isha"
            firstTime={data?.times?.hufton}
            lastTime={data?.times?.tong_saharlik}
            time={ctime}
            status="hufton"
          />
        </TimesWrapper>
      )}
    </Container>
  );
};

export default PrayTime;
