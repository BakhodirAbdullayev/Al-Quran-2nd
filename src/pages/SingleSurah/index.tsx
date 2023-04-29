import { useParams } from "react-router-dom";
import Ayahs from "../../components/Ayahs";
import SingleSurahDetails from "../../components/SingleSurahDetails";
import { useToggle } from "../../utilities/state";
import { Container, Left, Right } from "./SingleSurah.styles";

const SingleSurah = () => {
  const { surahId = "1" } = useParams();
  const { toggle } = useToggle();

  return (
    <Container>
      <Left className="scroll">
        <Ayahs surahId={surahId} />
      </Left>
      <Right toggle={toggle} className="scroll">
        <SingleSurahDetails />
      </Right>
    </Container>
  );
};

export default SingleSurah;
