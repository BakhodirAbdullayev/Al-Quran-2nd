import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HafizType {
  hafiz: string;
  setHafiz: (newHafiz: string) => void;
}
export const useHafiz = create<HafizType>()((set) => ({
  hafiz: "ar.alafasy",
  setHafiz: (newHafiz) => set((prevState) => ({ hafiz: newHafiz })),
}));

// ============================================================

interface LangType {
  lang: string;
  setLang: (newLang: string) => void;
}
export const useLang = create<LangType>()(
  persist(
    (set) => ({
      lang: "en.asad",
      setLang: (newLang) => set((prevState) => ({ lang: newLang })),
    }),
    { name: "language" }
  )
);
// ===========================================================
interface Toggle {
  toggle: boolean;
  setToggle: () => void;
}
export const useToggle = create<Toggle>()((set) => ({
  toggle: false,
  setToggle: () => set((p) => ({ toggle: !p.toggle })),
}));
//=============================================================
interface AudioObj {
  surahNum: number;
  ayahNumber: number;
  totalAyahs: number;
}
interface AudioData {
  audio: AudioObj;
  setAudio: (val: AudioObj) => void;
}
export const useAudio = create<AudioData>()((set) => ({
  audio: {
    surahNum: -1,
    ayahNumber: -1,
    totalAyahs: -1,
  },
  setAudio: (val) => set(() => ({ audio: val })),
}));
