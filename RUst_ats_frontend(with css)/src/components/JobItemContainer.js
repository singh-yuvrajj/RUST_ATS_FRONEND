import JobItems from "./JobItems";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import "./JobItemContainer.css";

const JobItemContainer = ({ className = "" }) => {
  return (
    <div className={`job-item-container ${className}`}>
      <div className="job-item-template">
        <JobItems
          image5="/image-5-3@2x.png"
          propWidth="465px"
          propPadding="0px 5px 0px 0px"
          propPadding1="51px 40px 50px 46px"
          propWidth1="459.3px"
        />
        <GroupComponent1 />
        <GroupComponent1 />
      </div>
    </div>
  );
};

JobItemContainer.propTypes = {
  className: PropTypes.string,
};

export default JobItemContainer;
