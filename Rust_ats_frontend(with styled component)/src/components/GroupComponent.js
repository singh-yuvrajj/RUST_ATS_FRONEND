import styled from "styled-components";
import PropTypes from "prop-types";

const Jobprofile = styled.div`
  height: 211px;
  width: 465px;
  position: relative;
  border-radius: 14px;
  background-color: #fff;
  display: none;
  max-width: 100%;
  z-index: 1;
`;
const SoftwareEngineer = styled.span`
  font-weight: 600;
`;
const SoftwareEngineer1 = styled.span`
  display: block;
`;
const JobId12xxx = styled.span``;
const SoftwareEngineerJobContainer = styled.p`
  margin: 0;
  height: 141px;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
  height: ${(p) => p.propHeight};
`;
const InnerImageChild = styled.div`
  align-self: stretch;
  width: 110px;
  position: relative;
  background-color: #acbde7;
  display: none;
`;
const Image5Icon = styled.img`
  height: 110px;
  width: 107px;
  position: relative;
  object-fit: cover;
  z-index: 2;
`;
const InnerImage = styled.div`
  background-color: #acbde7;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 3px;
  z-index: 1;
  padding: ${(p) => p.propPadding1};
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13px 0px 0px;
  margin-left: -119px;
`;
const JobprofileParentRoot = styled.div`
  align-self: stretch;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 38px 40px 32px 47px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 450px) {
    padding-left: 23px;
    box-sizing: border-box;
  }
  padding: ${(p) => p.propPadding};
`;

const GroupComponent = ({
  className = "",
  propPadding,
  propHeight,
  propPadding1,
}) => {
  return (
    <JobprofileParentRoot propPadding={propPadding} className={className}>
      <Jobprofile />
      <SoftwareEngineerJobContainer propHeight={propHeight}>
        <SoftwareEngineer1>
          <SoftwareEngineer>Software Engineer</SoftwareEngineer>
        </SoftwareEngineer1>
        <SoftwareEngineer1>
          <JobId12xxx>Job Id: 12XXX</JobId12xxx>
        </SoftwareEngineer1>
        <SoftwareEngineer1>
          <JobId12xxx>{`Location: `}</JobId12xxx>
        </SoftwareEngineer1>
        <SoftwareEngineer1>
          <JobId12xxx>{`Company: `}</JobId12xxx>
        </SoftwareEngineer1>
      </SoftwareEngineerJobContainer>
      <ImageWrapper>
        <InnerImage propPadding1={propPadding1}>
          <InnerImageChild />
          <Image5Icon loading="lazy" alt="" src="/image-5@2x.png" />
        </InnerImage>
      </ImageWrapper>
    </JobprofileParentRoot>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default GroupComponent;
