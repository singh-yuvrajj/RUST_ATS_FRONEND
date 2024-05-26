import JobItems from "./JobItems";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import "./Results.css";

const Results = ({ className = "" }) => {
  return (
    <div className={`results ${className}`}>
      <div className="job-listings">
        <JobItems image5="/image-5@2x.png" />
        <JobItems
          image5="/image-5@2x.png"
          propWidth="471px"
          propPadding="0px 6px 0px 0px"
          propPadding1="51px 40px 50px 47px"
          propWidth1="465px"
        />
        <GroupComponent1 />
      </div>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
};

export default Results;
