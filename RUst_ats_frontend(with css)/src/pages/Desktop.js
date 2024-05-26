import AdvanceFilter from "../components/AdvanceFilter";
import GroupComponent from "../components/GroupComponent";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <header className="navbar-parent">
        <div className="navbar" />
        <div className="frame-wrapper">
          <div className="briefcase-1-parent">
            <img
              className="briefcase-1-icon"
              loading="lazy"
              alt=""
              src="/briefcase-1.svg"
            />
            <a className="rehire">ReHire</a>
          </div>
        </div>
        <div className="frame-parent">
          <div className="user-wrapper">
            <a className="user">User</a>
          </div>
          <img
            className="frame-child"
            loading="lazy"
            alt=""
            src="/ellipse-19@2x.png"
          />
        </div>
      </header>
      <img className="desktop-1-child" alt="" src="/ellipse-18@2x.png" />
      <main className="desktop-1-inner">
        <section className="advance-filter-parent">
          <AdvanceFilter />
          <div className="result-header-parent">
            <div className="result-header">
              <GroupComponent />
              <GroupComponent
                propPadding="38px 40px 42px 47px"
                propHeight="131px"
                propPadding1="0px 3px 0px 0px"
              />
            </div>
            <div className="rectangle-parent">
              <div className="frame-item" />
              <div className="details-wrapper">
                <div className="job-summary">
                  <div className="job-summary-content">
                    <p className="software-engineer-job-container">
                      <span className="software-engineer">
                        <span className="software-engineer1">
                          Software Engineer
                        </span>
                      </span>
                      <span className="job-id-12xxx">
                        <span>Job Id: 12XXX</span>
                      </span>
                      <span className="location">
                        <span>{`Location: `}</span>
                      </span>
                      <span className="company">
                        <span>{`Company: `}</span>
                      </span>
                    </p>
                  </div>
                  <div className="apply-button">
                    <div className="apply-background" />
                    <div className="apply-wrapper">
                      <b className="apply">Apply</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description">
                <div className="description-content">
                  <p className="job-description-lorem-container">
                    <span className="job-description">
                      <span className="job-description1">{`Job Description: `}</span>
                    </span>
                    <span className="lorem-ipsum-is-simply-dummy-te">
                      <span>
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
                      </span>
                    </span>
                  </p>
                </div>
                <div className="skills-content-wrapper">
                  <div className="skills-content">
                    <b className="skills">Skills:</b>
                    <div className="skill-bars">
                      <div className="skill-bar" />
                      <div className="skill-bar1" />
                      <div className="skill-bar2" />
                      <div className="skill-bar3" />
                    </div>
                  </div>
                </div>
                <p className="basic-qualifications-3-container">
                  <span className="basic-qualifications">
                    <span className="basic-qualifications1">{`Basic Qualifications: `}</span>
                  </span>
                  <ul className="years-of-experience-in-consult">
                    <li className="years-of-experience-in-consult1">
                      <span>
                        3+ years of experience in consulting, payor operations,
                        finance, business services, corporate strategy, project
                        management, pre-sales, value engineering, or sales ​
                      </span>
                    </li>
                  </ul>
                  <span className="blank-line">
                    <span>&nbsp;</span>
                  </span>
                  <ul className="years-of-experience-in-consult2">
                    <li>
                      <span>
                        3+ years of experience in consulting, payor operations,
                        finance, business services, corporate strategy, project
                        management, pre-sales, value engineering, or sales ​
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
