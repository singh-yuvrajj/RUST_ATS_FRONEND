import styled from "styled-components";
import AdvanceFilter from "../components/AdvanceFilter";
import GroupComponent from "../components/GroupComponent";

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
  gap: 20px;
`;
const FrameWrapper = styled.div`
  width: 201px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 10px;
  box-sizing: border-box;
`;
const User1 = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 46px;
  z-index: 1;
`;
const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19px 0px 0px;
`;
const FrameChild = styled.img`
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
  gap: 28px;
  font-size: 20px;
`;
const NavbarParent = styled.header`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 21px 174px 21px 162px;
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  gap: 20px;
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1125px) {
    padding-left: 81px;
    padding-right: 87px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-left: 40px;
    padding-right: 43px;
    box-sizing: border-box;
  }
`;
const Desktop1Child = styled.img`
  width: 62px;
  height: 62px;
  position: relative;
  border-radius: 50%;
  object-fit: contain;
  display: none;
`;
const ResultHeader = styled.div`
  width: 465px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 282px;
  min-width: 465px;
  max-width: 100%;
  @media screen and (max-width: 1325px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 141px;
  }
`;
const FrameItem = styled.div`
  width: 1111px;
  height: 704px;
  position: relative;
  border-radius: 14px;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const SoftwareEngineer = styled.span`
  font-weight: 600;
`;
const SoftwareEngineer1 = styled.span`
  display: block;
`;
const JobId12xxx = styled.span``;
const SoftwareEngineerJobContainer = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const JobSummaryContent = styled.div`
  width: 387px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 22px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const ApplyBackground = styled.div`
  position: absolute;
  top: 25px;
  left: 0px;
  border-radius: 14px;
  background-color: #0a65cc;
  width: 177px;
  height: 49px;
  z-index: 1;
`;
const Apply = styled.b`
  position: absolute;
  top: 38px;
  left: 7px;
  font-weight: 600;
  display: inline-block;
  width: 65px;
  height: 24px;
  min-width: 65px;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const ApplyWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 49px;
  width: 100px;
  overflow: hidden;
  z-index: 3;
`;
const ApplyButton = styled.div`
  height: 100px;
  width: 177px;
  position: relative;
  color: #fff;
`;
const JobSummary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 1325px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const DetailsWrapper = styled.div`
  width: 992px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 1px;
  box-sizing: border-box;
  max-width: 100%;
`;
const JobDescriptionLoremContainer = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const DescriptionContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 1px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Skills = styled.b`
  width: 213px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const SkillBar = styled.div`
  height: 30px;
  flex: 1;
  position: relative;
  border-radius: 14px;
  background-color: #e6eaec;
  min-width: 98px;
  max-width: 107px;
  z-index: 1;
`;
const SkillBars = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 26px;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const SkillsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  max-width: 100%;
`;
const SkillsContentWrapper = styled.div`
  width: 508px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 1px;
  box-sizing: border-box;
  max-width: 100%;
`;
const YearsOfExperienceInConsult = styled.li`
  margin-bottom: 0px;
`;
const YearsOfExperienceInConsult1 = styled.ul`
  margin: 0;
  font-size: inherit;
  padding-left: 27px;
`;
const YearsOfExperienceInConsult2 = styled.li``;
const BasicQualifications3Container = styled.p`
  margin: 0;
  align-self: stretch;
  height: 163px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const Description = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 41px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: 20px;
  }
`;
const RectangleParent = styled.div`
  flex: 1;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13px 37px 42px 46px;
  box-sizing: border-box;
  gap: 58px;
  min-width: 722px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-left: 23px;
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 800px) {
    gap: 29px;
    padding-top: 20px;
    padding-bottom: 27px;
    box-sizing: border-box;
  }
`;
const ResultHeaderParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
  }
`;
const AdvanceFilterParent = styled.section`
  width: 1596px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 33px;
  max-width: 100%;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const Desktop1Inner = styled.main`
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
  padding: 0px 0px 69px;
  box-sizing: border-box;
  gap: 93px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1125px) {
    gap: 46px;
  }
  @media screen and (max-width: 800px) {
    gap: 23px;
  }
`;

const Desktop = () => {
  return (
    <DesktopRoot>
      <NavbarParent>
        <Navbar />
        <FrameWrapper>
          <Briefcase1Parent>
            <Briefcase1Icon loading="lazy" alt="" src="/briefcase-1.svg" />
            <Rehire>ReHire</Rehire>
          </Briefcase1Parent>
        </FrameWrapper>
        <FrameParent>
          <UserWrapper>
            <User1>User</User1>
          </UserWrapper>
          <FrameChild loading="lazy" alt="" src="/ellipse-19@2x.png" />
        </FrameParent>
      </NavbarParent>
      <Desktop1Child alt="" src="/ellipse-18@2x.png" />
      <Desktop1Inner>
        <AdvanceFilterParent>
          <AdvanceFilter />
          <ResultHeaderParent>
            <ResultHeader>
              <GroupComponent />
              <GroupComponent
                propPadding="38px 40px 42px 47px"
                propHeight="131px"
                propPadding1="0px 3px 0px 0px"
              />
            </ResultHeader>
            <RectangleParent>
              <FrameItem />
              <DetailsWrapper>
                <JobSummary>
                  <JobSummaryContent>
                    <SoftwareEngineerJobContainer>
                      <SoftwareEngineer1>
                        <SoftwareEngineer>Software Engineer</SoftwareEngineer>
                      </SoftwareEngineer1>
                      <SoftwareEngineer1>
                        <JobId12xxx>Job Id: 12XXX</JobId12xxx>
                      </SoftwareEngineer1>
                      <SoftwareEngineer1>
                        <JobId12xxx>{`Location: `}</JobId12xxx>
                      </SoftwareEngineer1>
                      <SoftwareEngineer1>
                        <JobId12xxx>{`Company: `}</JobId12xxx>
                      </SoftwareEngineer1>
                    </SoftwareEngineerJobContainer>
                  </JobSummaryContent>
                  <ApplyButton>
                    <ApplyBackground />
                    <ApplyWrapper>
                      <Apply>Apply</Apply>
                    </ApplyWrapper>
                  </ApplyButton>
                </JobSummary>
              </DetailsWrapper>
              <Description>
                <DescriptionContent>
                  <JobDescriptionLoremContainer>
                    <SoftwareEngineer1>
                      <SoftwareEngineer>{`Job Description: `}</SoftwareEngineer>
                    </SoftwareEngineer1>
                    <SoftwareEngineer1>
                      <JobId12xxx>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </JobId12xxx>
                    </SoftwareEngineer1>
                  </JobDescriptionLoremContainer>
                </DescriptionContent>
                <SkillsContentWrapper>
                  <SkillsContent>
                    <Skills>Skills:</Skills>
                    <SkillBars>
                      <SkillBar />
                      <SkillBar />
                      <SkillBar />
                      <SkillBar />
                    </SkillBars>
                  </SkillsContent>
                </SkillsContentWrapper>
                <BasicQualifications3Container>
                  <SoftwareEngineer1>
                    <SoftwareEngineer>{`Basic Qualifications: `}</SoftwareEngineer>
                  </SoftwareEngineer1>
                  <YearsOfExperienceInConsult1>
                    <YearsOfExperienceInConsult>
                      <JobId12xxx>
                        3+ years of experience in consulting, payor operations,
                        finance, business services, corporate strategy, project
                        management, pre-sales, value engineering, or sales ​
                      </JobId12xxx>
                    </YearsOfExperienceInConsult>
                  </YearsOfExperienceInConsult1>
                  <SoftwareEngineer1>
                    <JobId12xxx>&nbsp;</JobId12xxx>
                  </SoftwareEngineer1>
                  <YearsOfExperienceInConsult1>
                    <YearsOfExperienceInConsult2>
                      <JobId12xxx>
                        3+ years of experience in consulting, payor operations,
                        finance, business services, corporate strategy, project
                        management, pre-sales, value engineering, or sales ​
                      </JobId12xxx>
                    </YearsOfExperienceInConsult2>
                  </YearsOfExperienceInConsult1>
                </BasicQualifications3Container>
              </Description>
            </RectangleParent>
          </ResultHeaderParent>
        </AdvanceFilterParent>
      </Desktop1Inner>
    </DesktopRoot>
  );
};

export default Desktop;
