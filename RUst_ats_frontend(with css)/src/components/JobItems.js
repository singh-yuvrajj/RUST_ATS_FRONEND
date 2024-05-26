import { useMemo } from "react";
import "./JobItems.css";

const JobItems = ({
  className = "",
  image5,
  propWidth,
  propPadding,
  propPadding1,
  propWidth1,
}) => {
  const jobItemsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const jobProfileStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`job-items ${className}`} style={jobItemsStyle}>
      <div className="jobprofile-container" style={groupDiv1Style}>
        <div className="jobprofile3" style={jobProfileStyle} />
        <div className="software-engineer-job-id-12xx-wrapper">
          <p className="software-engineer-job-container3">
            <span className="software-engineer6">
              <span className="software-engineer7">Software Engineer</span>
            </span>
            <span className="job-id-12xxx3">
              <span>Job Id: 12XXX</span>
            </span>
            <span className="location3">
              <span>{`Location: `}</span>
            </span>
            <span className="company3">
              <span>{`Company: `}</span>
            </span>
          </p>
        </div>
        <div className="rectangle-container">
          <div className="frame-child16" />
          <img className="image-5-icon1" loading="lazy" alt="" src={image5} />
        </div>
      </div>
    </div>
  );
};

JobItems.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default JobItems;
