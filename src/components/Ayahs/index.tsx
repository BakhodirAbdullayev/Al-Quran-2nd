import React, { useEffect, useRef } from "react";
import { HeartFilled } from "@ant-design/icons";
import { BsShareFill, BsPlayCircle } from "react-icons/bs";
import { GiKneeling } from "react-icons/gi";
import { useGetData } from "../../utilities/getData";
import { useAudio, useLang } from "../../utilities/state";
import {
  Ayah,
  Left,
  Right,
  Top,
  Sajda,
  Bottom,
  Like,
  Play,
  Share,
  Translate,
  Container,
} from "./Ayahs.styles";
import { GetSurahIdParams, SingleAyah } from "./Ayahs.types";
import Loader from "../Loader";
import AyahSkeleton from "../Skeleton/AyahSkeleton";

const Ayahs = ({ surahId }: GetSurahIdParams) => {
  const { lang } = useLang();
  const { setAudio } = useAudio();

  const arabicAyahs = useGetData(
    ["single surah", surahId],
    `surah/${surahId}`,
    {
      enabled: !!surahId || !!lang,
    }
  );
  const langAyahs = useGetData(
    ["single surah", surahId, lang],
    `surah/${surahId}/${lang}`
  );

  return (
    <Container>
      {arabicAyahs.isLoading || langAyahs.isLoading ? (
        <AyahSkeleton />
      ) : (
        langAyahs.data.data.ayahs.map((a: SingleAyah, i: number) => (
          <Ayah key={a?.number}>
            <Top>
              <Left>
                {langAyahs?.data?.data?.number + ":" + a?.numberInSurah}
              </Left>
              <Right>{arabicAyahs?.data?.data?.ayahs[i]?.text}</Right>
            </Top>
            <Translate>{a?.text}</Translate>
            <Bottom>
              {/* <Like>
                  <HeartFilled />
                </Like> */}

              <Play
                onClick={() =>
                  setAudio({
                    surahNum: langAyahs.data.data.number,
                    totalAyahs: langAyahs.data.data.numberOfAyahs,
                    ayahNumber: a.numberInSurah,
                  })
                }
              >
                <BsPlayCircle />
              </Play>
              <Sajda>
                <GiKneeling className={a?.sajda ? "active" : ""} />
              </Sajda>
              <Share>
                <BsShareFill />
              </Share>
            </Bottom>
          </Ayah>
        ))
      )}
    </Container>
  );
};

export default Ayahs;
