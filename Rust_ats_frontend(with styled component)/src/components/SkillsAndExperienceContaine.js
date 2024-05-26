import { Button } from "@mui/material";
import styled from "styled-components";
import ContactFormFirstAndLast from "./ContactFormFirstAndLast";
import PropTypes from "prop-types";

const SkillsAndExperienceContaineChild = styled.div`
  width: 1274px;
  height: 1782px;
  position: relative;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const ContactFormLabels = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  max-width: 100%;
`;
const Experience = styled.b`
  width: 163px;
  position: relative;
  font-size: 25px;
  font-weight: 600;
  font-family: Inter;
  color: #000;
  text-align: left;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const ExperienceDropdownChild = styled.img`
  height: 59px;
  width: 462px;
  position: relative;
  border-radius: 14px;
  display: none;
  max-width: 100%;
`;
const CaretdownIcon = styled.img`
  height: 30px;
  width: 26px;
  position: relative;
  z-index: 2;
`;
const ExperienceDropdown = styled.div`
  align-self: stretch;
  border-radius: 14px;
  background-color: #e6eaec;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 15px 14px 14px;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
`;
const ExperienceContainer = styled.div`
  width: 462px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 19px;
  box-sizing: border-box;
  gap: 14px;
  max-width: 100%;
`;
const ProjectSkillLabelsChild = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: 14px;
  background-color: #e6eaec;
  z-index: 1;
`;
const ProjectSkillLabels = styled.div`
  align-self: stretch;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 9px;
  box-sizing: border-box;
  gap: 4px;
`;
const ProjectSkillLabelsItem = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: 14px;
  background-color: #e5e7e8;
  z-index: 1;
`;
const ProjectSkillLabels1 = styled.div`
  align-self: stretch;
  height: 93px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const EducationalQualifications = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 25px;
  font-weight: 600;
  font-family: Inter;
  color: #000;
  text-align: left;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const Institute = styled.b`
  position: relative;
  font-size: 25px;
  font-weight: 600;
  font-family: Inter;
  color: #000;
  text-align: left;
  display: inline-block;
  min-width: 116px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const EducationalQualificationsCon = styled.div`
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 33px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 16px;
  }
`;
const AddAnotherButtonContent = styled(Button)`
  align-self: stretch;
  height: 63px;
  z-index: 1;
`;
const AddAnotherButtonContainer = styled.div`
  width: 161px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
  box-sizing: border-box;
`;
const EducationInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const DegreeContainerChild = styled.div`
  align-self: stretch;
  height: 59px;
  position: relative;
  border-radius: 14px;
  background-color: #e5e7e8;
  z-index: 1;
`;
const Degree = styled.b`
  width: 116px;
  position: relative;
  font-size: 25px;
  font-weight: 600;
  font-family: Inter;
  color: #000;
  text-align: left;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const FrameChild = styled.div`
  height: 59px;
  width: 465px;
  position: relative;
  border-radius: 14px;
  background-color: #e5e7e8;
  display: none;
  max-width: 100%;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  border-radius: 14px;
  background-color: #e5e7e8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 15px 14px 14px;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
`;
const DegreeDropdown = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 5px;
  box-sizing: border-box;
  gap: 14px;
  max-width: 100%;
`;
const MajorfieldOfStudy = styled.div`
  flex: 1;
  position: relative;
  font-size: 25px;
  font-weight: 600;
  font-family: Inter;
  color: #000;
  text-align: left;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const MajorInput = styled.div`
  width: 287px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3px;
  box-sizing: border-box;
`;
const MajorContainer = styled.div`
  align-self: stretch;
  height: 103px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;
const DegreeContainer = styled.div`
  width: 465px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  max-width: 100%;
`;
const Image8Icon = styled.img`
  width: 58px;
  height: 58px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const UploadImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
`;
const DegreeMajorContent = styled.div`
  width: 902px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const Resumecv = styled.b`
  width: 281px;
  position: relative;
  font-size: 25px;
  font-weight: 600;
  font-family: Inter;
  color: #000;
  text-align: left;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const UploadResumeContainerChild = styled.div`
  width: 953px;
  height: 198px;
  position: relative;
  border-radius: 14px;
  background-color: rgba(229, 231, 232, 0.92);
  display: none;
  max-width: 100%;
`;
const Image9Icon = styled.img`
  height: 81px;
  width: 81px;
  position: relative;
  object-fit: cover;
  z-index: 2;
`;
const ResumeImageIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px;
`;
const UploadAFile = styled.div`
  width: 159px;
  position: relative;
  font-size: 20px;
  font-family: Inter;
  color: #000;
  text-align: left;
  display: inline-block;
  z-index: 3;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const UploadResumeContainer = styled.div`
  align-self: stretch;
  border-radius: 14px;
  background-color: rgba(229, 231, 232, 0.92);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 54px 20px 39px 415px;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 750px) {
    padding-left: 207px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: 20px;
    box-sizing: border-box;
  }
`;
const ResumeContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  max-width: 100%;
`;
const DegreeMajorContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 25px;
  }
`;
const EducationContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
`;
const ProjectSkillForm = styled.form`
  margin: 0;
  width: 953px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 58px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 29px;
  }
`;
const SubmitButtonContainer = styled(Button)`
  height: 63px;
  width: 161px;
  z-index: 1;
`;
const SubmitContainer = styled.div`
  width: 953px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px 2px;
  box-sizing: border-box;
  max-width: 100%;
`;
const SkillsAndExperienceContaineRoot = styled.div`
  align-self: stretch;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 133px 23px 50px 20px;
  box-sizing: border-box;
  gap: 89px;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 1200px) {
    padding-top: 86px;
    padding-bottom: 32px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    gap: 44px;
    padding-top: 56px;
    padding-bottom: 21px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 22px;
  }
  @media screen and (max-width: 450px) {
    padding-top: 36px;
    padding-bottom: 20px;
    box-sizing: border-box;
  }
`;

const SkillsAndExperienceContaine = ({ className = "" }) => {
  return (
    <SkillsAndExperienceContaineRoot className={className}>
      <SkillsAndExperienceContaineChild />
      <ProjectSkillForm>
        <ContactFormLabels>
          <ContactFormLabels>
            <ContactFormFirstAndLast
              firstName="First Name:"
              lastName="Last Name:"
            />
            <ContactFormFirstAndLast
              firstName="Contact No."
              lastName="Email:"
              propWidth="163px"
              propDisplay="inline-block"
              propWidth1="111px"
              propFlex="1"
            />
          </ContactFormLabels>
          <ExperienceContainer>
            <Experience>Experience</Experience>
            <ExperienceDropdown>
              <ExperienceDropdownChild alt="" src="/rectangle-49.svg" />
              <CaretdownIcon alt="" src="/caretdown.svg" />
            </ExperienceDropdown>
          </ExperienceContainer>
          <ProjectSkillLabels>
            <Experience>Projects</Experience>
            <ProjectSkillLabelsChild />
          </ProjectSkillLabels>
          <ProjectSkillLabels1>
            <Experience>Skills</Experience>
            <ProjectSkillLabelsItem />
          </ProjectSkillLabels1>
        </ContactFormLabels>
        <EducationContainer>
          <EducationInput>
            <EducationalQualificationsCon>
              <EducationalQualifications>
                Educational Qualifications:
              </EducationalQualifications>
              <Institute>Institute:</Institute>
            </EducationalQualificationsCon>
            <AddAnotherButtonContainer>
              <AddAnotherButtonContent
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#0a65cc",
                  borderRadius: "14px",
                  "&:hover": { background: "#0a65cc" },
                  height: 63,
                }}
              >
                Add another
              </AddAnotherButtonContent>
            </AddAnotherButtonContainer>
          </EducationInput>
          <DegreeMajorContainer>
            <DegreeMajorContent>
              <DegreeContainer>
                <DegreeContainerChild />
                <DegreeDropdown>
                  <Degree>Degree:</Degree>
                  <RectangleParent>
                    <FrameChild />
                    <CaretdownIcon alt="" src="/caretdown.svg" />
                  </RectangleParent>
                </DegreeDropdown>
                <MajorContainer>
                  <MajorInput>
                    <MajorfieldOfStudy>Major/Field of Study:</MajorfieldOfStudy>
                  </MajorInput>
                  <ProjectSkillLabelsItem />
                </MajorContainer>
              </DegreeContainer>
              <UploadImageContainer>
                <Image8Icon loading="lazy" alt="" src="/image-8@2x.png" />
              </UploadImageContainer>
            </DegreeMajorContent>
            <ResumeContainer>
              <Resumecv>Resume/CV:</Resumecv>
              <UploadResumeContainer>
                <UploadResumeContainerChild />
                <ResumeImageIconContainer>
                  <Image9Icon loading="lazy" alt="" src="/image-9@2x.png" />
                </ResumeImageIconContainer>
                <UploadAFile>Upload a file</UploadAFile>
              </UploadResumeContainer>
            </ResumeContainer>
          </DegreeMajorContainer>
        </EducationContainer>
      </ProjectSkillForm>
      <SubmitContainer>
        <SubmitButtonContainer
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
        </SubmitButtonContainer>
      </SubmitContainer>
    </SkillsAndExperienceContaineRoot>
  );
};

SkillsAndExperienceContaine.propTypes = {
  className: PropTypes.string,
};

export default SkillsAndExperienceContaine;
