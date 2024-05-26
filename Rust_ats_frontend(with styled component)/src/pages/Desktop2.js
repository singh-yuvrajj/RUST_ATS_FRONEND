import styled from "styled-components";
import FrameComponent1 from "../components/FrameComponent1";
import Results from "../components/Results";
import JobItemContainer from "../components/JobItemContainer";
import Pagination from "../components/Pagination";

const Desktop3Child = styled.img`
  width: 62px;
  height: 62px;
  position: relative;
  border-radius: 50%;
  object-fit: contain;
  display: none;
`;
const Navbar = styled.div`
  height: 104px;
  width: 1920px;
  position: relative;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const Briefcase1Icon = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Rehire = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-weight: 600;
  color: inherit;
  white-space: nowrap;
  z-index: 1;
`;
const Briefcase1Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px;
`;
const LeftSidebar = styled.div`
  width: 362px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Hr = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  font-weight: 600;
  color: inherit;
  white-space: nowrap;
  z-index: 1;
`;
const HrWrapper = styled.div`
  width: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 0px 0px;
  box-sizing: border-box;
`;
const NotificationIcon = styled.img`
  height: 62px;
  width: 62px;
  position: relative;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 26px;
  font-size: 20px;
`;
const Header = styled.header`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 21px 20px;
  box-sizing: border-box;
  gap: 1094px;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1200px) {
    gap: 547px;
  }
  @media screen and (max-width: 850px) {
    gap: 273px;
  }
  @media screen and (max-width: 450px) {
    gap: 137px;
  }
`;
const FrameGroup = styled.div`
  width: 1598px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 38.5px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: 19px;
  }
`;
const Content = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 24px 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
`;
const DesktopRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #f1f2f4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 78px;
  box-sizing: border-box;
  gap: 54.5px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 850px) {
    gap: 27px;
  }
`;

const Desktop2 = () => {
  return (
    <DesktopRoot>
      <Desktop3Child alt="" src="/ellipse-18@2x.png" />
      <Header>
        <Navbar />
        <LeftSidebar>
          <Briefcase1Parent>
            <Briefcase1Icon loading="lazy" alt="" src="/briefcase-1.svg" />
            <Rehire>ReHiRE</Rehire>
          </Briefcase1Parent>
        </LeftSidebar>
        <FrameParent>
          <HrWrapper>
            <Hr> HR</Hr>
          </HrWrapper>
          <NotificationIcon loading="lazy" alt="" src="/ellipse-19@2x.png" />
        </FrameParent>
      </Header>
      <Content>
        <FrameGroup>
          <FrameComponent1 />
          <Results />
          <JobItemContainer />
        </FrameGroup>
      </Content>
      <Pagination />
    </DesktopRoot>
  );
};

export default Desktop2;
