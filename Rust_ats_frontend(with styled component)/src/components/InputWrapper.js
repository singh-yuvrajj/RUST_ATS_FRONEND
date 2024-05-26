import styled from "styled-components";
import PropTypes from "prop-types";

const MappinIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  min-height: 24px;
`;
const CityStateOr = styled.div`
  position: relative;
  line-height: 24px;
`;
const InputField = styled.div`
  align-self: stretch;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px;
  gap: 8px;
  white-space: nowrap;
`;
const InputWrapperRoot = styled.div`
  width: 424px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 16px;
  color: #9199a3;
  font-family: Inter;
`;

const InputWrapper = ({ className = "" }) => {
  return (
    <InputWrapperRoot className={className}>
      <InputField>
        <MappinIcon alt="" src="/mappin.svg" />
        <CityStateOr>City, state or zip code</CityStateOr>
      </InputField>
    </InputWrapperRoot>
  );
};

InputWrapper.propTypes = {
  className: PropTypes.string,
};

export default InputWrapper;
