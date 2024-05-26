import JobItems from "./JobItems";
import GroupComponent1 from "./GroupComponent1";
import styled from "styled-components";
import PropTypes from "prop-types";

const JobListings = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
`;
const ResultsRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 2px 0px 3px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
`;

const Results = ({ className = "" }) => {
  return (
    <ResultsRoot className={className}>
      <JobListings>
        <JobItems image5="/image-5@2x.png" />
        <JobItems
          image5="/image-5@2x.png"
          propWidth="471px"
          propPadding="0px 6px 0px 0px"
          propPadding1="51px 40px 50px 47px"
          propWidth1="465px"
        />
        <GroupComponent1 />
      </JobListings>
    </ResultsRoot>
  );
};

Results.propTypes = {
  className: PropTypes.string,
};

export default Results;
