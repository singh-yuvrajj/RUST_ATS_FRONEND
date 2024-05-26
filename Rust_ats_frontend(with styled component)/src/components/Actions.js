import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #c6c1ca;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const CheckboxInner = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  display: none;
`;
const Devu = styled.div`
  position: relative;
  line-height: 16px;
  display: inline-block;
  min-width: 118px;
`;
const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 23px 0px 0px;
  gap: 10px;
`;
const DevUCriterias = styled.div`
  width: 138px;
  border-bottom: 1px solid #d9dfe4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 6px 10px;
`;
const Devu1 = styled.div`
  position: relative;
  line-height: 16px;
  white-space: pre-wrap;
  display: inline-block;
  min-width: 119px;
`;
const Checkbox1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 22px 0px 0px;
  gap: 10px;
`;
const DevUCriteriasParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  gap: 1px;
`;
const ActionContainerInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ActionContainer = styled.div`
  width: 96px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Devu2 = styled.div`
  position: relative;
  line-height: 16px;
  white-space: pre-wrap;
  display: inline-block;
  min-width: 124px;
`;
const Checkbox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 17px 0px 0px;
  gap: 10px;
`;
const DevUContainer = styled.div`
  align-self: stretch;
  border-bottom: 1px solid #d9dfe4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 2px 10px;
`;
const ActionsRoot = styled.div`
  width: 164px;
  margin: 0 !important;
  position: absolute;
  right: 57.6px;
  bottom: -67.2px;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 16px 13px 10px;
  box-sizing: border-box;
  gap: 12px;
  z-index: 3;
  text-align: left;
  font-size: 14px;
  color: #645e6a;
  font-family: Roboto;
`;

const Actions = ({ className = "" }) => {
  return (
    <ActionsRoot className={className}>
      <ActionContainer>
        <ActionContainerInner>
          <DevUCriteriasParent>
            <DevUCriterias>
              <Checkbox>
                <CheckboxInner>
                  <FrameChild />
                </CheckboxInner>
                <Devu>Remove Candidate</Devu>
              </Checkbox>
            </DevUCriterias>
            <DevUCriterias>
              <Checkbox1>
                <CheckboxInner>
                  <FrameChild />
                </CheckboxInner>
                <Devu1>Assign Interviewer</Devu1>
              </Checkbox1>
            </DevUCriterias>
          </DevUCriteriasParent>
        </ActionContainerInner>
      </ActionContainer>
      <DevUContainer>
        <Checkbox2>
          <CheckboxInner>
            <FrameChild />
          </CheckboxInner>
          <Devu2>Change Interviewer</Devu2>
        </Checkbox2>
      </DevUContainer>
    </ActionsRoot>
  );
};

Actions.propTypes = {
  className: PropTypes.string,
};

export default Actions;
