import React, { useEffect } from "react";
import { useState } from "react";
import { useGetData } from "../../utilities/getData";
import { CardsWrapper, Container, Pag } from "./Surahs.styles";
import { Pagination } from "antd";
import SingleSurahCard from "../../components/SingleSurahCard";
import { SurahObjType } from "./Surahs.types";

const Surahs = () => {
  const surahsData = useGetData(["all surahs"], "surah");
  const [slicedSurahs, setSlicedSurahs] = useState([] as SurahObjType[]);
  const [limit, setLimit] = useState<number>(10);
  const [current, setCurrent] = useState<number>(1);

  useEffect(() => {
    !surahsData.isLoading &&
      setSlicedSurahs(
        surahsData.data.data.slice((current - 1) * limit, current * limit)
      );
  }, [current, surahsData.data, limit]);

  const onChange = (cur: number, size: number): void => {
    setCurrent(cur);
    setLimit(size);
  };

  return (
    <Container>
      {surahsData.isLoading ? (
        "Loading"
      ) : (
        <>
          <CardsWrapper>
            {slicedSurahs.map((s: SurahObjType) => (
              <SingleSurahCard key={s.number} data={s} />
            ))}
          </CardsWrapper>
          <Pag>
            <Pagination current={current} onChange={onChange} total={114} />
          </Pag>
        </>
      )}
    </Container>
  );
};

export default Surahs;
