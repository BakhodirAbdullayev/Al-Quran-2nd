import { Select } from "antd";
import { useHafiz, useLang } from "../../utilities/state";
import { hafizs } from "../../utilities/hafiz";
import { Wrapper, Lang, Title } from "./ChangeLangAndHafiz.styles";

const ChangeLangAndHafiz = () => {
  const { lang, setLang } = useLang();
  const { hafiz, setHafiz } = useHafiz();

  const handleChange = (val: string): void => {
    setLang(val);
  };
  const handleHafizChange = (val: string): void => {
    setHafiz(val);
  };
  const options = hafizs.map((h) => {
    return {
      value: h.value,
      label: h.name,
    };
  });

  return (
    <Wrapper>
      <Lang>
        <Title>Language</Title>
        <Select
          defaultValue={lang}
          style={{
            width: "100%",
          }}
          onChange={handleChange}
          options={[
            {
              value: "en.asad",
              label: "English",
            },
            {
              value: "uz.sodik",
              label: "Uzbek",
            },
            {
              value: "ru.kuliev",
              label: "Russian",
            },
          ]}
        />
      </Lang>
      <Lang>
        <Title>Hafiz</Title>
        <Select
          defaultValue={hafiz}
          style={{ width: "100%" }}
          onChange={handleHafizChange}
          options={options}
        />
      </Lang>
    </Wrapper>
  );
};

export default ChangeLangAndHafiz;
