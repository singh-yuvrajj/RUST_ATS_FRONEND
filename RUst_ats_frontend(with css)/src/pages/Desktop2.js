import FrameComponent1 from "../components/FrameComponent1";
import Results from "../components/Results";
import JobItemContainer from "../components/JobItemContainer";
import Pagination from "../components/Pagination";
import "./Desktop2.css";

const Desktop2 = () => {
  return (
    <div className="desktop-3">
      <img className="desktop-3-child" alt="" src="/ellipse-18@2x.png" />
      <header className="header">
        <div className="navbar1" />
        <div className="left-sidebar">
          <div className="briefcase-1-group">
            <img
              className="briefcase-1-icon1"
              loading="lazy"
              alt=""
              src="/briefcase-1.svg"
            />
            <a className="rehire1">ReHiRE</a>
          </div>
        </div>
        <div className="frame-group">
          <div className="hr-wrapper">
            <a className="hr"> HR</a>
          </div>
          <img
            className="notification-icon"
            loading="lazy"
            alt=""
            src="/ellipse-19@2x.png"
          />
        </div>
      </header>
      <section className="content">
        <div className="frame-container">
          <FrameComponent1 />
          <Results />
          <JobItemContainer />
        </div>
      </section>
      <Pagination />
    </div>
  );
};

export default Desktop2;
