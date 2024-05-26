import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import InputWrapper from "./InputWrapper";
import PropTypes from "prop-types";
import "./AdvanceFilter.css";

const AdvanceFilter = ({ className = "" }) => {
  return (
    <form className={`advance-filter1 ${className}`}>
      <TextField
        className="input-wrapper1"
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
      <div className="divider63" />
      <InputWrapper />
      <div className="primary-button">
        <Button
          className="button1"
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
        </Button>
      </div>
    </form>
  );
};

AdvanceFilter.propTypes = {
  className: PropTypes.string,
};

export default AdvanceFilter;
