import LogoImg from "../../images/quran.png";
import {
  Body,
  Container,
  Header,
  Left,
  Logo,
  PlayerWrapper,
  Right,
  Toggle,
} from "./Layout.styles";
import Sidebar from "../Sidebar/Sidebar";
import { HiOutlineBars2, HiOutlineXMark } from "react-icons/hi2";
import { useAudio, useToggle } from "../../utilities/state";
import { useLocation } from "react-router-dom";
import Player from "../Player";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { toggle, setToggle } = useToggle();
  const location = useLocation();
  const { audio } = useAudio();

  return (
    <Container>
      <Header>
        <Logo to="/">
          <img src={LogoImg} alt="logo" />
        </Logo>
        {location.pathname.includes("/surahs/") ? (
          <Toggle onClick={setToggle}>
            {toggle ? <HiOutlineXMark /> : <HiOutlineBars2 />}
          </Toggle>
        ) : null}
      </Header>
      <Body>
        <Left>
          <Sidebar />
        </Left>
        <Right>
          {audio.surahNum > 0 ? (
            <PlayerWrapper>
              <div className="test">
                <Player />
              </div>
            </PlayerWrapper>
          ) : null}
          {children}
        </Right>
      </Body>
    </Container>
  );
};

export default Layout;
