import FrameComponent from "../components/FrameComponent";
import styled from "styled-components";
import SkillsAndExperienceContaine from "../components/SkillsAndExperienceContaine";

const Jobprofile = styled.div`
  height: 225.6px;
  width: 1274px;
  position: relative;
  border-radius: 14px;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const BlankLine = styled.span`
  font-weight: 600;
`;
const BlankLine1 = styled.span`
  display: block;
`;
const JobId12xxx = styled.span``;
const SoftwareEngineerJobContainer = styled.p`
  margin: 0;
  position: absolute;
  top: 10px;
  left: 0px;
  display: inline-block;
  width: 1088px;
  height: 150px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const SoftwareEngineerJobContentChild = styled.div`
  position: absolute;
  top: 0px;
  left: 934px;
  background-color: #acbde7;
  width: 154px;
  height: 141px;
  z-index: 2;
`;
const SoftwareEngineerJobContent = styled.div`
  height: 160px;
  flex: 1;
  position: relative;
  max-width: 100%;
`;
const SoftwareEngineerJobContentWrapper = styled.div`
  width: 1088px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const JobprofileParent = styled.div`
  align-self: stretch;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 31.2px 20px 34.4px 36px;
  box-sizing: border-box;
  max-width: 100%;
`;
const JobDetailsContainer = styled.section`
  height: 2062.2px;
  width: 1274px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 1836.6px;
  box-sizing: border-box;
  gap: 54.6px;
  max-width: 100%;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1200px) {
    padding-bottom: 776px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    height: auto;
    padding-bottom: 504px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 27px;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 328px;
    box-sizing: border-box;
  }
`;
const SecondColumn = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;
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
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 226px;
  box-sizing: border-box;
  gap: 92.8px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1050px) {
    gap: 46px;
  }
  @media screen and (max-width: 750px) {
    gap: 23px;
  }
`;

const Desktop1 = () => {
  return (
    <DesktopRoot>
      <FrameComponent />
      <SecondColumn>
        <JobDetailsContainer>
          <JobprofileParent>
            <Jobprofile />
            <SoftwareEngineerJobContentWrapper>
              <SoftwareEngineerJobContent>
                <SoftwareEngineerJobContainer>
                  <BlankLine1>
                    <BlankLine>&nbsp;</BlankLine>
                  </BlankLine1>
                  <BlankLine1>
                    <BlankLine>Software Engineer</BlankLine>
                  </BlankLine1>
                  <BlankLine1>
                    <JobId12xxx>Job Id: 12XXX</JobId12xxx>
                  </BlankLine1>
                  <BlankLine1>
                    <JobId12xxx>{`Location: `}</JobId12xxx>
                  </BlankLine1>
                  <BlankLine1>
                    <JobId12xxx>{`Company: `}</JobId12xxx>
                  </BlankLine1>
                </SoftwareEngineerJobContainer>
                <SoftwareEngineerJobContentChild />
              </SoftwareEngineerJobContent>
            </SoftwareEngineerJobContentWrapper>
          </JobprofileParent>
          <SkillsAndExperienceContaine />
        </JobDetailsContainer>
      </SecondColumn>
    </DesktopRoot>
  );
};

export default Desktop1;
