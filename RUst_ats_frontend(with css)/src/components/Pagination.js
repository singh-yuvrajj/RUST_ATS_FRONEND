import GroupComponent1 from "./GroupComponent1";
import JobItems from "./JobItems";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ className = "" }) => {
  return (
    <section className={`pagination ${className}`}>
      <div className="page-items">
        <GroupComponent1 />
        <JobItems
          image5="/image-5@2x.png"
          propWidth="473px"
          propPadding="0px 8px 0px 0px"
          propPadding1="51px 40px 50px 47px"
          propWidth1="465px"
        />
        <JobItems
          image5="/image-5@2x.png"
          propWidth="465px"
          propPadding="0px 0px 1px"
          propPadding1="51px 40px 50px 47px"
          propWidth1="465px"
        />
      </div>
    </section>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
