import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import InputWrapper from "./InputWrapper";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <form className={`advance-filter-group ${className}`}>
      <div className="advance-filter2">
        <TextField
          className="search-field"
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
        <div className="divider64" />
        <InputWrapper />
        <div className="search-button">
          <Button
            className="button2"
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
      </div>
      <div className="filter-button">
        <Button
          className="button3"
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
        </Button>
      </div>
    </form>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
