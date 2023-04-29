import React from "react";
import { useGetData } from "../../utilities/getData";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Container,
  Card,
  Left,
  Name,
  NameT,
  Num,
  Right,
  SurahList,
  Title,
} from "./SingleSurahDetails.styles";
import { SurahObjType } from "../../pages/Surahs/Surahs.types";
import { Collapse } from "antd";
import ChangeLangAndHafiz from "../ChangeLangAndHafiz";
import { useToggle } from "../../utilities/state";

const SingleSurahDetails = () => {
  const surahList = useGetData(["all surahs"], "surah");
  const { setToggle } = useToggle();
  return (
    <Container>
      <Collapse
        accordion
        bordered={false}
        collapsible="header"
        ghost
        expandIconPosition="end"
      >
        <Collapse.Panel
          header={
            <Title>
              <AiOutlineSetting />
              Settings
            </Title>
          }
          key="1"
        >
          <ChangeLangAndHafiz />
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <Title>
              <HiOutlineBars3 />
              Surahs List
            </Title>
          }
          key="2"
        >
          <SurahList>
            {surahList.data &&
              surahList.data.data.map((s: SurahObjType) => (
                <Card
                  key={s.number}
                  to={`/surahs/${s?.number}`}
                  onClick={setToggle}
                >
                  <Left>
                    <Num>{s.number}</Num>
                  </Left>
                  <Right>
                    <Name>{s.englishName}</Name>
                    <NameT>{s.englishNameTranslation}</NameT>
                  </Right>
                </Card>
              ))}
          </SurahList>
        </Collapse.Panel>
      </Collapse>
    </Container>
  );
};

export default SingleSurahDetails;
