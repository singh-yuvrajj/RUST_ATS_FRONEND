import { Button } from "@mui/material";
import styled from "styled-components";

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
const TopNavigationInner = styled.div`
  width: 194px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 10px;
  box-sizing: border-box;
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
  padding: 19px 0px 0px;
  box-sizing: border-box;
`;
const FrameChild = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 50%;
  max-height: 100%;
  width: 62px;
  object-fit: cover;
  z-index: 1;
`;
const FrameItem = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 12px;
  border-radius: 50%;
  width: 62px;
  z-index: 2;
`;
const EllipseParent = styled.div`
  height: 62px;
  flex: 1;
  position: relative;
`;
const RightNavigation = styled.div`
  width: 118px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11px;
  font-size: 20px;
`;
const TopNavigation = styled.header`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 21px 20px;
  box-sizing: border-box;
  gap: 1288px;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: 35px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1200px) {
    gap: 644px;
  }
  @media screen and (max-width: 750px) {
    gap: 322px;
  }
  @media screen and (max-width: 450px) {
    gap: 161px;
  }
`;
const Jobprofile = styled.div`
  width: 1596px;
  height: 1341px;
  position: relative;
  border-radius: 14px;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const JobId = styled.b`
  position: relative;
  font-weight: 600;
  display: inline-block;
  min-width: 82px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const JobLocation = styled.b`
  position: relative;
  font-weight: 600;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const JobMetaLabels = styled.div`
  width: 805px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Placeholder = styled.div`
  height: 61px;
  flex: 1;
  position: relative;
  border-radius: 14px;
  background-color: #e6eaec;
  min-width: 408px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    min-width: 100%;
  }
`;
const ButtonPlaceholder = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
  max-width: 100%;
`;
const JobMeta = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  max-width: 100%;
`;
const JobTitle = styled.b`
  position: relative;
  font-weight: 600;
  display: inline-block;
  min-width: 113px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const JobDetailPlaceholders = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: 14px;
  background-color: #e6eaec;
  z-index: 1;
`;
const JobDetails = styled.div`
  align-self: stretch;
  height: 119px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 8px;
  box-sizing: border-box;
  gap: 7px;
`;
const JobDetailsChild = styled.textarea`
  border: none;
  background-color: #e6eaec;
  height: 297px;
  width: auto;
  outline: none;
  align-self: stretch;
  position: relative;
  border-radius: 14px;
  z-index: 1;
`;
const JobDetails1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 38px;
  gap: 25px;
`;
const KeyQualifications = styled.div`
  position: relative;
  font-weight: 600;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const JobDetails2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 37px;
  gap: 7px;
`;
const Submission = styled(Button)`
  width: 161px;
  height: 63px;
  z-index: 1;
`;
const JobInfo = styled.section`
  width: 1596px;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 95px 161px 105px;
  box-sizing: border-box;
  gap: 25px;
  max-width: 100%;
  text-align: left;
  font-size: 25px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1200px) {
    padding: 62px 80px 68px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding: 40px 40px 44px;
    box-sizing: border-box;
  }
`;
const Content = styled.main`
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
  padding: 0px 0px 117px;
  box-sizing: border-box;
  gap: 133px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1050px) {
    gap: 66px;
  }
  @media screen and (max-width: 750px) {
    gap: 33px;
  }
`;

const Desktop4 = () => {
  return (
    <DesktopRoot>
      <TopNavigation>
        <Navbar />
        <TopNavigationInner>
          <Briefcase1Parent>
            <Briefcase1Icon loading="lazy" alt="" src="/briefcase-1.svg" />
            <Rehire>ReHire</Rehire>
          </Briefcase1Parent>
        </TopNavigationInner>
        <RightNavigation>
          <HrWrapper>
            <Hr> HR</Hr>
          </HrWrapper>
          <EllipseParent>
            <FrameChild loading="lazy" alt="" src="/ellipse-19@2x.png" />
            <FrameItem />
          </EllipseParent>
        </RightNavigation>
      </TopNavigation>
      <Content>
        <JobInfo>
          <Jobprofile />
          <JobMeta>
            <JobMetaLabels>
              <JobId>Job Id:</JobId>
              <JobLocation>Job location:</JobLocation>
            </JobMetaLabels>
            <ButtonPlaceholder>
              <Placeholder />
              <Placeholder />
            </ButtonPlaceholder>
          </JobMeta>
          <JobDetails>
            <JobTitle>Job Title:</JobTitle>
            <JobDetailPlaceholders />
          </JobDetails>
          <JobDetails1>
            <JobLocation>Job Description:</JobLocation>
            <JobDetailsChild rows={15} cols={64} />
          </JobDetails1>
          <JobDetails2>
            <KeyQualifications>{`Key Qualifications: `}</KeyQualifications>
            <JobDetailsChild rows={15} cols={64} />
          </JobDetails2>
          <Submission
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "#0a65cc",
              borderRadius: "14px",
              "&:hover": { background: "#0a65cc" },
              width: 161,
              height: 63,
            }}
          >
            Submit
          </Submission>
        </JobInfo>
      </Content>
    </DesktopRoot>
  );
};

export default Desktop4;
