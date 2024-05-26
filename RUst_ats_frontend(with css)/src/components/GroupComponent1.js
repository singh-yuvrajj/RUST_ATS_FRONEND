import "./GroupComponent1.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div className={`group-div ${className}`}>
      <div className="jobprofile4" />
      <div className="software-engineer-job-id-12xx-container">
        <p className="software-engineer-job-container4">
          <span className="software-engineer8">
            <span className="software-engineer9">Software Engineer</span>
          </span>
          <span className="job-id-12xxx4">
            <span>Job Id: 12XXX</span>
          </span>
          <span className="location4">
            <span>{`Location: `}</span>
          </span>
          <span className="company4">
            <span>{`Company: `}</span>
          </span>
        </p>
      </div>
      <div className="rectangle-parent1">
        <div className="frame-child17" />
        <img
          className="image-5-icon2"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
