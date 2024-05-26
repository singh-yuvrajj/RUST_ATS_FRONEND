import styled from "styled-components";
import PropTypes from "prop-types";

const Navbar = styled.div`
  height: 104px;
  width: 1920px;
  position: relative;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const Briefcase1Icon = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const BriefcaseAndRehire = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
`;
const Rehire = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-weight: 600;
  color: inherit;
  white-space: nowrap;
  z-index: 1;
`;
const JobFormContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const FirstColumn = styled.div`
  width: 191px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 9px;
  box-sizing: border-box;
`;
const User1 = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 46px;
  z-index: 1;
`;
const UserIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19px 0px 0px;
`;
const FrameChild = styled.img`
  height: 62px;
  width: 62px;
  position: relative;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
`;
const UserIconContainerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px;
  font-size: 20px;
`;
const NavbarParentRoot = styled.header`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 21px 174px 21px 161px;
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  gap: 20px;
  text-align: left;
  font-size: 35px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1050px) {
    padding-left: 80px;
    padding-right: 87px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: 40px;
    padding-right: 43px;
    box-sizing: border-box;
  }
`;

const FrameComponent = ({ className = "" }) => {
  return (
    <NavbarParentRoot className={className}>
      <Navbar />
      <FirstColumn>
        <JobFormContainer>
          <BriefcaseAndRehire>
            <Briefcase1Icon loading="lazy" alt="" src="/briefcase-1.svg" />
          </BriefcaseAndRehire>
          <Rehire>ReHire</Rehire>
        </JobFormContainer>
      </FirstColumn>
      <UserIconContainerParent>
        <UserIconContainer>
          <User1>User</User1>
        </UserIconContainer>
        <FrameChild loading="lazy" alt="" src="/ellipse-19@2x.png" />
      </UserIconContainerParent>
    </NavbarParentRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
