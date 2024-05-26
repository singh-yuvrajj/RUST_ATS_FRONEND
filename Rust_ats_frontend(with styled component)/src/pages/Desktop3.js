import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import Actions from "../components/Actions";

const Navbar = styled.div`
  height: 104px;
  width: 1920px;
  position: relative;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const Briefcase1Icon = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
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
const TopActions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11px;
`;
const LeftPanel = styled.div`
  width: 192px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0px 0px;
  box-sizing: border-box;
`;
const Hr = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  font-weight: 600;
  color: inherit;
  white-space: nowrap;
  z-index: 1;
`;
const Filter = styled.div`
  width: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19px 0px 0px;
  box-sizing: border-box;
`;
const CircleIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const Circle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Shape = styled.div`
  height: 62px;
  flex: 1;
  position: relative;
`;
const MiddlePanel = styled.div`
  width: 117px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
  font-size: 20px;
`;
const Main = styled.header`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 21px 174px 21px 162px;
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  gap: 20px;
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: Inter;
  @media screen and (max-width: 1125px) {
    padding-left: 81px;
    padding-right: 87px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    padding-left: 40px;
    padding-right: 43px;
    box-sizing: border-box;
  }
`;
const Divider = styled.div`
  height: 1.1px;
  width: 1588.6px;
  position: absolute;
  margin: 0 !important;
  bottom: 0.1px;
  left: -257px;
  background-color: #e5e9eb;
  overflow: hidden;
  flex-shrink: 0;
`;
const Value = styled.b`
  width: 511px;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  max-width: 100%;
`;
const Divider1 = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  background-color: #e5e9eb;
  overflow: hidden;
  flex-shrink: 0;
`;
const CellHeader = styled.div`
  width: 543px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 0px 0px;
  box-sizing: border-box;
  gap: 11px;
  max-width: 100%;
  font-family: Inter;
`;
const Value1 = styled.b`
  width: 497px;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  max-width: 105%;
`;
const HeaderItem = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 4px;
  box-sizing: border-box;
  max-width: 100%;
`;
const CellHeader1 = styled.div`
  width: 480px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 0px 0px;
  box-sizing: border-box;
  gap: 11px;
  max-width: 100%;
`;
const Value2 = styled.b`
  flex: 1;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: 600;
`;
const ValueWrapper = styled.div`
  width: 245px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 68px;
  box-sizing: border-box;
`;
const CellHeader2 = styled.div`
  width: 258px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 0px 0px;
  box-sizing: border-box;
  gap: 11px;
`;
const ResizeableHeads = styled.div`
  flex: 1;
  border-radius: 0px 10px 0px 0px;
  background-color: #e5e7e8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4px;
  box-sizing: border-box;
  row-gap: 20px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
  }
`;
const BottomPanel = styled.div`
  width: 1332px;
  margin: 0 !important;
  position: absolute;
  top: 233px;
  left: 422px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const FisearchIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
`;
const SearchByApplicant = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-family: Inter;
  color: #9199a3;
  text-align: left;
`;
const InputField = styled.div`
  flex: 1;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px;
  box-sizing: border-box;
  gap: 12px;
  max-width: calc(100% - 184px);
`;
const Divider2 = styled.div`
  margin-top: -12px;
  height: 73px;
  width: 1px;
  position: relative;
  border-right: 1px solid #edeff5;
  box-sizing: border-box;
`;
const Button1 = styled(Button)`
  height: 48px;
  width: 160px;
`;
const AdvanceFilter = styled.div`
  align-self: stretch;
  height: 62px;
  box-shadow: 0px 8px 24px rgba(0, 44, 109, 0.04);
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #e4e5e8;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 7px 11px;
  gap: 11.5px;
  max-width: 100%;
`;
const Value3 = styled.b`
  flex: 1;
  position: relative;
  font-size: 12px;
  letter-spacing: 0.02em;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Roboto;
  color: #6d7d89;
  text-align: left;
`;
const HeaderTitle = styled.div`
  width: 192px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 16px;
  box-sizing: border-box;
`;
const CellHeader3 = styled.div`
  width: 257px;
  border-radius: 10px 0px 0px 0px;
  background-color: #e5e7e8;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 0px 0px;
  box-sizing: border-box;
  gap: 11px;
  flex-shrink: 0;
  debug_commit: bf4bc93;
  z-index: 3;
`;
const Status1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: #e0a818;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Value4 = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 21px;
  z-index: 1;
`;
const ElementItem = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
`;
const Value5 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 83px;
`;
const ElementDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3px 0px 0px;
`;
const ElementRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const DeepContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 16px;
`;
const InnerContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const ContentItem = styled.div`
  width: 241px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0px 0px;
  box-sizing: border-box;
`;
const CellText = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 40px;
  flex: 1;
  font-family: Roboto;
  font-size: 14px;
  color: #252c32;
  min-width: 300px;
  max-width: 100%;
`;
const TableCell = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 40px;
  width: 562.8px;
  font-family: Roboto;
  font-size: 14px;
  color: #252c32;
  max-width: 100%;
`;
const Value6 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
`;
const ValueCell = styled.div`
  width: 154px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px 0px 0px;
  box-sizing: border-box;
`;
const Divider3 = styled.div`
  height: 1px;
  width: 170px;
  position: absolute;
  margin: 0 !important;
  right: 84px;
  bottom: 4.9px;
  background-color: #e5e9eb;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const IconButton1 = styled.img`
  height: 24px;
  width: 60px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
`;
const IconButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 12px;
`;
const IconButtonItem = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;
const IconButtonRow = styled.div`
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 0px;
  box-sizing: border-box;
`;
const Row = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4.9px;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  debug_commit: bf4bc93;
  row-gap: 20px;
  max-width: 100%;
  z-index: 2;
  margin-top: -0.1px;
`;
const TableHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Badge = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  border-radius: 50%;
  background-color: #4094f7;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
`;
const Value7 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 15px;
  z-index: 1;
`;
const ItemValue = styled.div`
  width: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0px 0px;
  box-sizing: border-box;
  margin-left: -22px;
`;
const ElementValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 7px 0px 0px;
`;
const Value8 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 116px;
`;
const DataRowItem = styled.div`
  width: 154px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 8px 0px 0px;
  box-sizing: border-box;
`;
const Row1 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4.9px;
  box-sizing: border-box;
  position: relative;
  row-gap: 20px;
  max-width: 100%;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: #34a260;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Value9 = styled.div`
  position: absolute;
  top: 5px;
  left: 8px;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 14px;
  z-index: 1;
`;
const Value10 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 74px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: #607ce2;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Value11 = styled.div`
  position: absolute;
  top: 5px;
  left: 6px;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 18px;
  z-index: 1;
`;
const Value12 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 128px;
`;
const FrameInner = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  border-radius: 50%;
  background-color: #9a5fbd;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
`;
const Value13 = styled.div`
  position: relative;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 17px;
  z-index: 1;
`;
const ValueWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0px 0px;
  margin-left: -23px;
`;
const EllipseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 6px 0px 0px;
`;
const Value14 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 70px;
`;
const Row2 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4.9px;
  box-sizing: border-box;
  position: relative;
  row-gap: 20px;
  max-width: 100%;
  z-index: 2;
`;
const EllipseDiv = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  border-radius: 50%;
  background-color: #e0a818;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
`;
const Value15 = styled.div`
  position: relative;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 14px;
  z-index: 1;
`;
const ValueWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0px 0px;
  margin-left: -22px;
`;
const EllipseParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 8px 0px 0px;
`;
const Value16 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 79px;
`;
const Value17 = styled.div`
  position: absolute;
  top: 5px;
  left: 8px;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 15px;
  z-index: 1;
`;
const Value18 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 100px;
`;
const Value19 = styled.div`
  position: relative;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 16px;
  z-index: 1;
`;
const Value20 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 111px;
`;
const Value21 = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  white-space: nowrap;
  max-width: 100%;
`;
const ValueWrapper3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 16px;
  box-sizing: border-box;
  max-width: 100%;
`;
const CellText1 = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 0px;
  box-sizing: border-box;
  gap: 7px;
  min-width: 356px;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const Value22 = styled.div`
  flex: 1;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  max-width: 100%;
`;
const CellText2 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 0px;
  box-sizing: border-box;
  gap: 7px;
  max-width: 100%;
`;
const CellTextWrapper = styled.div`
  width: 562.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 15px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const Value23 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 82px;
`;
const Value24 = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  max-width: 100%;
`;
const FrameChild1 = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  border-radius: 50%;
  background-color: #34a260;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
`;
const Value25 = styled.div`
  position: relative;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 15px;
  z-index: 1;
`;
const Value26 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 91px;
`;
const Value27 = styled.div`
  flex: 1;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  white-space: nowrap;
  max-width: 100%;
`;
const Row3 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4.9px;
  box-sizing: border-box;
  position: relative;
  row-gap: 20px;
  max-width: 100%;
  z-index: 3;
`;
const FrameChild2 = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  border-radius: 50%;
  background-color: #607ce2;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
`;
const Value28 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 96px;
`;
const Value29 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 92px;
`;
const Value30 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 98px;
`;
const FrameChild3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: #9a5fbd;
  border: 0px solid #dee5e8;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Value31 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 94px;
`;
const Value32 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 90px;
`;
const Value33 = styled.div`
  position: absolute;
  top: 5px;
  left: 7px;
  font-size: 11.7px;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  min-width: 17px;
  z-index: 1;
`;
const Value34 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  display: inline-block;
  min-width: 81px;
`;
const Value35 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.01em;
  line-height: 24px;
  font-family: Roboto;
  color: #252c32;
  text-align: left;
  white-space: nowrap;
`;
const ValueWrapper4 = styled.div`
  width: 515px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const RowInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0px 0px;
  box-sizing: border-box;
  min-width: 491px;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`;
const ValueWrapper5 = styled.div`
  width: 515px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const ValueWrapper6 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 0px 0px;
`;
const CellButtonIcon = styled.img`
  height: 40px;
  width: 84px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const FrameParent1 = styled.div`
  width: 238px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const Row4 = styled.div`
  align-self: stretch;
  border-radius: 0px 0px 10px 10px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4.9px 16px;
  box-sizing: border-box;
  gap: 31.8px;
  max-width: 100%;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
    padding-right: 16px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.1px;
  max-width: 100%;
`;
const SearchRow = styled.form`
  margin: 0;
  width: 1592px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 19px;
  max-width: 100%;
`;
const Table = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 24px 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
`;
const DesktopRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #f1f2f4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 39px;
  box-sizing: border-box;
  gap: 48px;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: 12px;
  color: #6d7d89;
  font-family: Roboto;
  @media screen and (max-width: 800px) {
    gap: 24px;
  }
`;

const Desktop3 = () => {
  return (
    <DesktopRoot>
      <Main>
        <Navbar />
        <LeftPanel>
          <TopActions>
            <Briefcase1Icon loading="lazy" alt="" src="/briefcase-1.svg" />
            <Rehire>ReHire</Rehire>
          </TopActions>
        </LeftPanel>
        <MiddlePanel>
          <Filter>
            <Hr> HR</Hr>
          </Filter>
          <Shape>
            <CircleIcon loading="lazy" alt="" src="/ellipse-19@2x.png" />
            <Circle />
          </Shape>
        </MiddlePanel>
      </Main>
      <BottomPanel>
        <Divider />
        <ResizeableHeads>
          <CellHeader>
            <Value>Email</Value>
            <Divider1 />
          </CellHeader>
          <CellHeader1>
            <HeaderItem>
              <Value1>Interviewer</Value1>
            </HeaderItem>
            <Divider1 />
          </CellHeader1>
          <CellHeader2>
            <ValueWrapper>
              <Value2>Resumes</Value2>
            </ValueWrapper>
            <Divider1 />
          </CellHeader2>
        </ResizeableHeads>
      </BottomPanel>
      <Table>
        <SearchRow>
          <AdvanceFilter>
            <InputField>
              <FisearchIcon loading="lazy" alt="" src="/fisearch.svg" />
              <SearchByApplicant>
                Search by: Applicant name, Email...
              </SearchByApplicant>
            </InputField>
            <Divider2 />
            <Button1
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#0a65cc",
                borderRadius: "8px",
                "&:hover": { background: "#0a65cc" },
                width: 160,
                height: 48,
              }}
            >
              Find Applicant
            </Button1>
          </AdvanceFilter>
          <Content>
            <TableHeader>
              <CellHeader3>
                <HeaderTitle>
                  <Value3>Applicant Name</Value3>
                </HeaderTitle>
                <Divider1 />
              </CellHeader3>
              <Row>
                <ContentItem>
                  <InnerContent>
                    <DeepContent>
                      <ElementRow>
                        <ElementItem>
                          <Status1 />
                          <Value4>WW</Value4>
                        </ElementItem>
                        <ElementDescription>
                          <Value5>Wade Warren</Value5>
                        </ElementDescription>
                      </ElementRow>
                    </DeepContent>
                    <Divider1 />
                  </InnerContent>
                </ContentItem>
                <CellText
                  placeholder="dolores.chambers@example.com"
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "40px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#252c32" },
                  }}
                />
                <TableCell
                  placeholder="Cameron Williamson"
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "40px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#252c32" },
                    width: "562.8px",
                  }}
                />
                <ValueCell>
                  <Value6>View</Value6>
                </ValueCell>
                <Divider3 />
                <IconButtonRow>
                  <IconButtonItem>
                    <IconButtonContainer>
                      <IconButton1
                        loading="lazy"
                        alt=""
                        src="/icon-button.svg"
                      />
                    </IconButtonContainer>
                    <Divider1 />
                  </IconButtonItem>
                </IconButtonRow>
                <Actions />
              </Row>
            </TableHeader>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementValue>
                        <Badge />
                        <ItemValue>
                          <Value7>BS</Value7>
                        </ItemValue>
                      </ElementValue>
                      <ElementDescription>
                        <Value8>Brooklyn Simmons</Value8>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="debbie.baker@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Darlene Robertson"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <DataRowItem>
                <Value6>View</Value6>
              </DataRowItem>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementItem>
                        <FrameChild />
                        <Value9>JB</Value9>
                      </ElementItem>
                      <ElementDescription>
                        <Value10>Jerome Bell</Value10>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="felicia.reid@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Theresa Webb"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>View</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementItem>
                        <FrameItem />
                        <Value11>CW</Value11>
                      </ElementItem>
                      <ElementDescription>
                        <Value12>Cameron Williamson</Value12>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="nevaeh.simmons@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Guy Hawkins"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <Divider3 />
              <ValueCell>
                <Value6>View</Value6>
              </ValueCell>
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row2>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <EllipseContainer>
                        <FrameInner />
                        <ValueWrapper1>
                          <Value13>FM</Value13>
                        </ValueWrapper1>
                      </EllipseContainer>
                      <ElementDescription>
                        <Value14>Floyd Miles</Value14>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="michael.mitc@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Wade Warren"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>View</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row2>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <EllipseParent>
                        <EllipseDiv />
                        <ValueWrapper2>
                          <Value15>JC</Value15>
                        </ValueWrapper2>
                      </EllipseParent>
                      <ElementDescription>
                        <Value16>Jane Cooper</Value16>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="curtis.weaver@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Ralph Edwards"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>View</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementItem>
                        <FrameItem />
                        <Value17>RR</Value17>
                      </ElementItem>
                      <ElementDescription>
                        <Value18>Ronald Richards</Value18>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="georgia.young@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Bessie Cooper"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>Design</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementValue>
                        <FrameInner />
                        <ValueWrapper1>
                          <Value19>SN</Value19>
                        </ValueWrapper1>
                      </ElementValue>
                      <ElementDescription>
                        <Value20>Savannah Nguyen</Value20>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText1>
                <ValueWrapper3>
                  <Value21>kenzi.lawson@example.com</Value21>
                </ValueWrapper3>
                <Divider1 />
              </CellText1>
              <CellTextWrapper>
                <CellText2>
                  <ValueWrapper3>
                    <Value22>Kathryn Murphy</Value22>
                  </ValueWrapper3>
                  <Divider1 />
                </CellText2>
              </CellTextWrapper>
              <ValueCell>
                <Value6>Development</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row2>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <EllipseContainer>
                        <Badge />
                        <ValueWrapper1>
                          <Value13>JW</Value13>
                        </ValueWrapper1>
                      </EllipseContainer>
                      <ElementDescription>
                        <Value23>Jenny Wilson</Value23>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText1>
                <ValueWrapper3>
                  <Value21>tanya.hill@example.com</Value21>
                </ValueWrapper3>
                <Divider1 />
              </CellText1>
              <CellTextWrapper>
                <CellText2>
                  <ValueWrapper3>
                    <Value24>Dianne Russell</Value24>
                  </ValueWrapper3>
                  <Divider1 />
                </CellText2>
              </CellTextWrapper>
              <DataRowItem>
                <Value6>Project Management</Value6>
              </DataRowItem>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row2>
            <Row3>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <EllipseParent>
                        <FrameChild1 />
                        <ValueWrapper1>
                          <Value25>EH</Value25>
                        </ValueWrapper1>
                      </EllipseParent>
                      <ElementDescription>
                        <Value26>Esther Howard</Value26>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText1>
                <ValueWrapper3>
                  <Value27>sara.cruz@example.com</Value27>
                </ValueWrapper3>
                <Divider1 />
              </CellText1>
              <CellTextWrapper>
                <CellText2>
                  <ValueWrapper3>
                    <Value24>Cody Fisher</Value24>
                  </ValueWrapper3>
                  <Divider1 />
                </CellText2>
              </CellTextWrapper>
              <ValueCell>
                <Value6>Sales</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row3>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementValue>
                        <FrameChild2 />
                        <ValueWrapper1>
                          <Value19>CH</Value19>
                        </ValueWrapper1>
                      </ElementValue>
                      <ElementDescription>
                        <Value28>Courtney Henry</Value28>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="jessica.hanson@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <CellTextWrapper>
                <CellText2>
                  <ValueWrapper3>
                    <Value22>Annette Black</Value22>
                  </ValueWrapper3>
                  <Divider1 />
                </CellText2>
              </CellTextWrapper>
              <ValueCell>
                <Value6>Sales</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <EllipseParent>
                        <FrameInner />
                        <ValueWrapper2>
                          <Value15>AF</Value15>
                        </ValueWrapper2>
                      </EllipseParent>
                      <ElementDescription>
                        <Value16>Albert Flores</Value16>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="jackson.graham@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <CellTextWrapper>
                <CellText2>
                  <ValueWrapper3>
                    <Value22>Robert Fox</Value22>
                  </ValueWrapper3>
                  <Divider1 />
                </CellText2>
              </CellTextWrapper>
              <ValueCell>
                <Value6>Digital Marketing</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementItem>
                        <FrameChild />
                        <Value9>RE</Value9>
                      </ElementItem>
                      <ElementDescription>
                        <Value29>Ralph Edwards</Value29>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="willie.jennings@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Jenny Wilson"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>{`Engineering `}</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row2>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementItem>
                        <FrameItem />
                        <Value11>KM</Value11>
                      </ElementItem>
                      <ElementDescription>
                        <Value30>Kathryn Murphy</Value30>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="bill.sanders@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Kristin Watson"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>Development</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row2>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementItem>
                        <FrameChild3 />
                        <Value17>DS</Value17>
                      </ElementItem>
                      <ElementDescription>
                        <Value31>Darrell Steward</Value31>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText1>
                <ValueWrapper3>
                  <Value27>tim.jennings@example.com</Value27>
                </ValueWrapper3>
                <Divider1 />
              </CellText1>
              <TableCell
                placeholder="Floyd Miles"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>{`Engineering `}</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row1>
              <ContentItem>
                <InnerContent>
                  <DeepContent>
                    <ElementRow>
                      <ElementItem>
                        <Status1 />
                        <Value11>KW</Value11>
                      </ElementItem>
                      <ElementDescription>
                        <Value32>Kristin Watson</Value32>
                      </ElementDescription>
                    </ElementRow>
                  </DeepContent>
                  <Divider1 />
                </InnerContent>
              </ContentItem>
              <CellText
                placeholder="debra.holt@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TableCell
                placeholder="Marvin McKinney"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <ValueCell>
                <Value6>Design</Value6>
              </ValueCell>
              <Divider3 />
              <IconButtonRow>
                <IconButtonItem>
                  <IconButtonContainer>
                    <IconButton1 alt="" src="/icon-button.svg" />
                  </IconButtonContainer>
                  <Divider1 />
                </IconButtonItem>
              </IconButtonRow>
            </Row1>
            <Row4>
              <RowInner>
                <FrameParent>
                  <ElementRow>
                    <ElementItem>
                      <FrameChild />
                      <Value33>GH</Value33>
                    </ElementItem>
                    <ElementDescription>
                      <Value34>Guy Hawkins</Value34>
                    </ElementDescription>
                  </ElementRow>
                  <ValueWrapper4>
                    <Value35>alma.lawson@example.com</Value35>
                  </ValueWrapper4>
                </FrameParent>
              </RowInner>
              <ValueWrapper5>
                <Value6>Eleanor Pena</Value6>
              </ValueWrapper5>
              <FrameParent1>
                <ValueWrapper6>
                  <Value6>Sales</Value6>
                </ValueWrapper6>
                <CellButtonIcon loading="lazy" alt="" src="/cell-button.svg" />
              </FrameParent1>
            </Row4>
          </Content>
        </SearchRow>
      </Table>
    </DesktopRoot>
  );
};

export default Desktop3;
