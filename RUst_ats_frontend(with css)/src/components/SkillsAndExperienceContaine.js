import { Button } from "@mui/material";
import ContactFormFirstAndLast from "./ContactFormFirstAndLast";
import PropTypes from "prop-types";
import "./SkillsAndExperienceContaine.css";

const SkillsAndExperienceContaine = ({ className = "" }) => {
  return (
    <div className={`skills-and-experience-containe ${className}`}>
      <div className="skills-and-experience-containe-child" />
      <form className="project-skill-form">
        <div className="project-skill-form-labels">
          <div className="contact-form-labels">
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
          </div>
          <div className="experience-container">
            <b className="experience">Experience</b>
            <div className="experience-dropdown">
              <img
                className="experience-dropdown-child"
                alt=""
                src="/rectangle-49.svg"
              />
              <img className="caretdown-icon" alt="" src="/caretdown.svg" />
            </div>
          </div>
          <div className="project-skill-labels">
            <b className="projects">Projects</b>
            <div className="project-skill-labels-child" />
          </div>
          <div className="project-skill-labels1">
            <b className="skills1">Skills</b>
            <div className="project-skill-labels-item" />
          </div>
        </div>
        <div className="education-container">
          <div className="education-input">
            <div className="educational-qualifications-con">
              <div className="educational-qualifications">
                Educational Qualifications:
              </div>
              <b className="institute">Institute:</b>
            </div>
            <div className="add-another-button-container">
              <Button
                className="add-another-button-content"
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
              </Button>
            </div>
          </div>
          <div className="degree-major-container">
            <div className="degree-major-content">
              <div className="degree-container">
                <div className="degree-container-child" />
                <div className="degree-dropdown">
                  <b className="degree">Degree:</b>
                  <div className="rectangle-group">
                    <div className="rectangle-div" />
                    <img
                      className="caretdown-icon1"
                      alt=""
                      src="/caretdown.svg"
                    />
                  </div>
                </div>
                <div className="major-container">
                  <div className="major-input">
                    <div className="majorfield-of-study">
                      Major/Field of Study:
                    </div>
                  </div>
                  <div className="major-container-child" />
                </div>
              </div>
              <div className="upload-image-container">
                <img
                  className="image-8-icon"
                  loading="lazy"
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
            </div>
            <div className="resume-container">
              <b className="resumecv">Resume/CV:</b>
              <div className="upload-resume-container">
                <div className="upload-resume-container-child" />
                <div className="resume-image-icon-container">
                  <img
                    className="image-9-icon"
                    loading="lazy"
                    alt=""
                    src="/image-9@2x.png"
                  />
                </div>
                <div className="upload-a-file">Upload a file</div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="submit-container">
        <Button
          className="submit-button-container"
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
        </Button>
      </div>
    </div>
  );
};

SkillsAndExperienceContaine.propTypes = {
  className: PropTypes.string,
};

export default SkillsAndExperienceContaine;
