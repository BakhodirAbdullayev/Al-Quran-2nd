import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { HiXMark } from "react-icons/hi2";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { Container, Prew, Delete, Next } from "./Player.styles";
import { useAudio, useHafiz } from "../../utilities/state";
import { useGetData } from "../../utilities/getData";

const Player = () => {
  const { audio, setAudio } = useAudio();
  const { hafiz } = useHafiz();
  const playAudioData = useGetData(["audio version", hafiz], `quran/${hafiz}`, {
    enabled: !!hafiz,
  });
  console.log(playAudioData);

  const [playingAudioSrc, setPlayingAudioSrc] = useState("");
  useEffect(() => {
    try {
      if (playAudioData.data !== undefined) {
        console.log(playAudioData?.data?.data);

        setPlayingAudioSrc(
          playAudioData?.data?.data?.surahs[audio.surahNum - 1]?.ayahs[
            audio?.ayahNumber - 1
          ]?.audio
        );
      }
    } catch (e) {
      console.log(e);
    }
  }, [playAudioData?.data, audio]);
  console.log(playingAudioSrc);

  const lastAudio = () => {
    if (audio.ayahNumber > 1) {
      setAudio({
        surahNum: audio.surahNum,
        totalAyahs: audio.totalAyahs,
        ayahNumber: audio.ayahNumber - 1,
      });
    } else {
      setAudio({
        surahNum: audio.surahNum - 1,
        totalAyahs:
          playAudioData.data?.data?.surahs[audio.surahNum - 2].ayahs.length,
        ayahNumber: 1,
      });
    }
  };
  const nextAudio = () => {
    if (audio.ayahNumber < audio.totalAyahs) {
      setAudio({
        surahNum: audio.surahNum,
        totalAyahs: audio.totalAyahs,
        ayahNumber: audio.ayahNumber + 1,
      });
    } else if (audio.surahNum < 114) {
      setAudio({
        surahNum: audio.surahNum + 1,
        totalAyahs:
          playAudioData.data?.data?.surahs[audio.surahNum].ayahs.length,
        ayahNumber: 1,
      });
    }
  };

  return (
    <>
      {playingAudioSrc === "" ? null : (
        <Container>
          <Prew onClick={() => lastAudio()}>
            <AiFillFastBackward />
          </Prew>
          <Next onClick={() => nextAudio()}>
            <AiFillFastForward />
          </Next>
          {/* <ReactAudioPlayer
            className="audio"
            src={playingAudioSrc}
            autoPlay
            controls={true}
            onEnded={() => nextAudio()}
          /> */}
          <audio
            src={playingAudioSrc}
            controls
            autoPlay={true}
            className="audio"
            onEnded={() => nextAudio()}
          />
          <Delete
            onClick={() => {
              setAudio({
                surahNum: -1,
                ayahNumber: -1,
                totalAyahs: -1,
              });
            }}
          >
            <HiXMark />
          </Delete>
        </Container>
      )}
    </>
  );
};

export default Player;
