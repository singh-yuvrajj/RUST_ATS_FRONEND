import JobItems from "./JobItems";
import GroupComponent1 from "./GroupComponent1";
import styled from "styled-components";
import PropTypes from "prop-types";

const JobItemTemplate = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
`;
const JobItemContainerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 2px 0px 3px;
  box-sizing: border-box;
  max-width: 100%;
`;

const JobItemContainer = ({ className = "" }) => {
  return (
    <JobItemContainerRoot className={className}>
      <JobItemTemplate>
        <JobItems
          image5="/image-5-3@2x.png"
          propWidth="465px"
          propPadding="0px 5px 0px 0px"
          propPadding1="51px 40px 50px 46px"
          propWidth1="459.3px"
        />
        <GroupComponent1 />
        <GroupComponent1 />
      </JobItemTemplate>
    </JobItemContainerRoot>
  );
};

JobItemContainer.propTypes = {
  className: PropTypes.string,
};

export default JobItemContainer;
