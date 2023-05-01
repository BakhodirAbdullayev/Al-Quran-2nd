import React, { useEffect } from "react";
import { useState } from "react";
import { useGetData } from "../../utilities/getData";
import { CardsWrapper, Container, Pag } from "./Surahs.styles";
import { Pagination } from "antd";
import SingleSurahCard from "../../components/SingleSurahCard";
import { SurahObjType } from "./Surahs.types";
import MiniSkeleton from "../../components/Skeleton/MiniSkeleton";
import { Box } from "@chakra-ui/react";

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
  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <Container>
      {surahsData.isLoading ? (
        <Box
          display={"flex"}
          alignItems="center"
          maxW={"100%"}
          flexWrap="wrap"
          gap={5}
          justifyContent="space-evenly"
        >
          {skeleton.map((s) => {
            if (window.innerWidth < 500 && s > 3) {
              return null;
            } else if (window.innerWidth < 800 && s > 7) {
              return null;
            } else return <MiniSkeleton key={s} />;
          })}
        </Box>
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
