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
  align-self: stretch;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const SoftwareEngineerJobId12xxWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameChild = styled.div`
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
const RectangleParent = styled.div`
  background-color: #acbde7;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 3px;
  z-index: 1;
  margin-left: -119px;
`;
const JobprofileParentRoot = styled.div`
  width: 465px;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 51px 40px 50px 47px;
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
`;

const GroupComponent1 = ({ className = "" }) => {
  return (
    <JobprofileParentRoot className={className}>
      <Jobprofile />
      <SoftwareEngineerJobId12xxWrapper>
        <SoftwareEngineerJobContainer>
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
      </SoftwareEngineerJobId12xxWrapper>
      <RectangleParent>
        <FrameChild />
        <Image5Icon loading="lazy" alt="" src="/image-5@2x.png" />
      </RectangleParent>
    </JobprofileParentRoot>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
