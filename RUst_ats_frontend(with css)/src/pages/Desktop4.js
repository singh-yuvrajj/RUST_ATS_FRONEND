import { Button } from "@mui/material";
import "./Desktop4.css";

const Desktop4 = () => {
  return (
    <div className="desktop-6">
      <header className="top-navigation">
        <div className="navbar3" />
        <div className="top-navigation-inner">
          <div className="briefcase-1-container">
            <img
              className="briefcase-1-icon3"
              loading="lazy"
              alt=""
              src="/briefcase-1.svg"
            />
            <a className="rehire3">ReHire</a>
          </div>
        </div>
        <div className="right-navigation">
          <div className="hr-container">
            <a className="hr2"> HR</a>
          </div>
          <div className="ellipse-parent13">
            <img
              className="ellipse-icon"
              loading="lazy"
              alt=""
              src="/ellipse-19@2x.png"
            />
            <div className="frame-child14" />
          </div>
        </div>
      </header>
      <main className="content2">
        <section className="job-info">
          <div className="jobprofile1" />
          <div className="job-meta">
            <div className="job-meta-labels">
              <b className="job-id">Job Id:</b>
              <b className="job-location">Job location:</b>
            </div>
            <div className="button-placeholder">
              <div className="placeholder" />
              <div className="placeholder1" />
            </div>
          </div>
          <div className="job-details">
            <b className="job-title">Job Title:</b>
            <div className="job-detail-placeholders" />
          </div>
          <div className="job-details1">
            <b className="job-description2">Job Description:</b>
            <textarea className="job-details-child" rows={15} cols={64} />
          </div>
          <div className="job-details2">
            <div className="key-qualifications">{`Key Qualifications: `}</div>
            <textarea className="job-details-item" rows={15} cols={64} />
          </div>
          <Button
            className="submission"
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
        </section>
      </main>
    </div>
  );
};

export default Desktop4;
