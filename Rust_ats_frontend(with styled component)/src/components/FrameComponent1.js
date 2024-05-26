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

const SearchField = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 60px;
  width: 781px;
  font-family: Inter;
  font-size: 16px;
  color: #9199a3;
  max-width: 100%;
`;
const Divider = styled.div`
  height: 73px;
  width: 1px;
  position: relative;
  border-right: 1px solid #edeff5;
  box-sizing: border-box;
  @media screen and (max-width: 1500px) {
    width: 100%;
    height: 1px;
  }
`;
const Button1 = styled(Button)`
  align-self: stretch;
  height: 48px;
`;
const SearchButton = styled.div`
  width: 158px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 0px 0px;
  box-sizing: border-box;
`;
const AdvanceFilter = styled.div`
  flex: 1;
  box-shadow: 0px 8px 24px rgba(0, 44, 109, 0.04);
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #e4e5e8;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 12px;
  gap: 11.7px;
  max-width: 100%;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1200px) {
    min-width: 100%;
  }
`;
const FilterButton = styled.div`
  width: 126px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 14px;
  box-sizing: border-box;
`;
const AdvanceFilterParentRoot = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 32px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: 16px;
  }
`;

const FrameComponent1 = ({ className = "" }) => {
  return (
    <AdvanceFilterParentRoot className={className}>
      <AdvanceFilter>
        <SearchField
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
            width: "781px",
          }}
        />
        <Divider />
        <InputWrapper />
        <SearchButton>
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
        </SearchButton>
      </AdvanceFilter>
      <FilterButton>
        <Button1
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#3c4651",
            border: "#000 solid 1px",
            borderRadius: "8px",
            "&:hover": { background: "#3c4651" },
            height: 48,
          }}
        >
          Post Job
        </Button1>
      </FilterButton>
    </AdvanceFilterParentRoot>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
