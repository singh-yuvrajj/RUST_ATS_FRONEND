import styled from "styled-components";
import PropTypes from "prop-types";

const FirstName = styled.b`position: relative;
  font-weight: 600;
  z-index: 1;
  @media screen and (max-width: 450px) {
  font-size: 20px;
  
  }
  width: ${(p) => p.propWidth}
  display: ${(p) => p.propDisplay}
`;
const FirstNameAndNumberChild = styled.div`
  align-self: stretch;
  height: 59px;
  position: relative;
  border-radius: 14px;
  background-color: #e6eaec;
  z-index: 1;
`;
const FirstNameAndNumber = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9px;
  min-width: 302px;
  max-width: 100%;
`;
const LastName = styled.b`
  position: relative;
  font-weight: 600;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
  flex: ${(p) => p.propFlex};
`;
const LastNameAndEmailInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 7px;
  width: ${(p) => p.propWidth1};
`;
const ContactFormFirstAndLastRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 23px;
  max-width: 100%;
  text-align: left;
  font-size: 25px;
  color: #000;
  font-family: Inter;
`;

const ContactFormFirstAndLast = ({
  className = "",
  firstName,
  lastName,
  propWidth,
  propDisplay,
  propWidth1,
  propFlex,
}) => {
  return (
    <ContactFormFirstAndLastRoot className={className}>
      <FirstNameAndNumber>
        <FirstName propWidth={propWidth} propDisplay={propDisplay}>
          {firstName}
        </FirstName>
        <FirstNameAndNumberChild />
      </FirstNameAndNumber>
      <FirstNameAndNumber>
        <LastNameAndEmailInput propWidth1={propWidth1}>
          <LastName propFlex={propFlex}>{lastName}</LastName>
        </LastNameAndEmailInput>
        <FirstNameAndNumberChild />
      </FirstNameAndNumber>
    </ContactFormFirstAndLastRoot>
  );
};

ContactFormFirstAndLast.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex: PropTypes.any,
};

export default ContactFormFirstAndLast;
