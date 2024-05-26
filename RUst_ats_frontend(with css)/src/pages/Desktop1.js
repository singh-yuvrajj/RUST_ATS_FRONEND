import FrameComponent from "../components/FrameComponent";
import SkillsAndExperienceContaine from "../components/SkillsAndExperienceContaine";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-4">
      <FrameComponent />
      <main className="second-column">
        <section className="job-details-container">
          <div className="jobprofile-parent">
            <div className="jobprofile" />
            <div className="software-engineer-job-content-wrapper">
              <div className="software-engineer-job-content">
                <p className="software-engineer-job-container1">
                  <span className="blank-line1">
                    <span className="blank-line2">&nbsp;</span>
                  </span>
                  <span className="software-engineer2">
                    <span className="software-engineer3">
                      Software Engineer
                    </span>
                  </span>
                  <span className="job-id-12xxx1">
                    <span>Job Id: 12XXX</span>
                  </span>
                  <span className="location1">
                    <span>{`Location: `}</span>
                  </span>
                  <span className="company1">
                    <span>{`Company: `}</span>
                  </span>
                </p>
                <div className="software-engineer-job-content-child" />
              </div>
            </div>
          </div>
          <SkillsAndExperienceContaine />
        </section>
      </main>
    </div>
  );
};

export default Desktop1;
