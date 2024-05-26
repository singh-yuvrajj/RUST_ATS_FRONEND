import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styled from "styled-components";
import InputWrapper from "./InputWrapper";
import PropTypes from "prop-types";

// const InputWrapper = styled(TextField)`
//   border: none;
//   background-color: transparent;
//   height: 60px;
//   flex: 1;
//   font-family: Inter;
//   font-size: 16px;
//   color: #9199a3;
//   min-width: 300px;
//   max-width: 100%;
// `;
const Divider = styled.div`
  height: 73px;
  width: 1px;
  position: relative;
  border-right: 1px solid #edeff5;
  box-sizing: border-box;
  @media screen and (max-width: 1125px) {
    width: 100%;
    height: 1px;
  }
`;
const Button1 = styled(Button)`
  align-self: stretch;
  height: 48px;
`;
const PrimaryButton = styled.div`
  width: 115px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 0px 0px;
  box-sizing: border-box;
`;
const AdvanceFilterRoot = styled.form`
  margin: 0;
  align-self: stretch;
  box-shadow: 0px 8px 24px rgba(0, 44, 109, 0.04);
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #e4e5e8;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 11px;
  gap: 11.7px;
  max-width: 100%;
`;

const AdvanceFilter = ({ className = "" }) => {
  return (
    <AdvanceFilterRoot className={className}>
      <InputWrapper
        placeholder="Search by: Job tittle, Position, Keyword..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <img width="24px" height="24px" src="/fisearch.svg" />
          ),
        }}
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "60px",
            paddingLeft: "12px",
            borderRadius: "0px 0px 0px 0px",
          },
          "& .MuiInputBase-input": { paddingLeft: "12px", color: "#9199a3" },
        }}
      />
      <Divider />
      <InputWrapper />
      <PrimaryButton>
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
            height: 48,
          }}
        >
          Find Job
        </Button1>
      </PrimaryButton>
    </AdvanceFilterRoot>
  );
};

AdvanceFilter.propTypes = {
  className: PropTypes.string,
};

export default AdvanceFilter;
