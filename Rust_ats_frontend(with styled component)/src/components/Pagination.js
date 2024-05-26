import GroupComponent1 from "./GroupComponent1";
import JobItems from "./JobItems";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageItems = styled.div`
  width: 1601px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const PaginationRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px 0px 25px;
  box-sizing: border-box;
  max-width: 100%;
`;

const Pagination = ({ className = "" }) => {
  return (
    <PaginationRoot className={className}>
      <PageItems>
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
      </PageItems>
    </PaginationRoot>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
