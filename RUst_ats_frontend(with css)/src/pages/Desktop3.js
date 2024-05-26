import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Actions from "../components/Actions";
import "./Desktop3.css";

const Desktop3 = () => {
  return (
    <div className="desktop-8">
      <header className="main">
        <div className="navbar2" />
        <div className="left-panel">
          <div className="top-actions">
            <img
              className="briefcase-1-icon2"
              loading="lazy"
              alt=""
              src="/briefcase-1.svg"
            />
            <a className="rehire2">ReHire</a>
          </div>
        </div>
        <div className="middle-panel">
          <div className="filter">
            <a className="hr1"> HR</a>
          </div>
          <div className="shape">
            <img
              className="circle-icon"
              loading="lazy"
              alt=""
              src="/ellipse-19@2x.png"
            />
            <div className="circle" />
          </div>
        </div>
      </header>
      <div className="bottom-panel">
        <div className="divider" />
        <div className="resizeable-heads">
          <div className="cell-header">
            <b className="value">Email</b>
            <div className="divider1" />
          </div>
          <div className="cell-header1">
            <div className="header-item">
              <b className="value1">Interviewer</b>
            </div>
            <div className="divider2" />
          </div>
          <div className="cell-header2">
            <div className="value-wrapper">
              <b className="value2">Resumes</b>
            </div>
            <div className="divider3" />
          </div>
        </div>
      </div>
      <main className="table">
        <form className="search-row">
          <div className="advance-filter">
            <div className="input-field">
              <img
                className="fisearch-icon"
                loading="lazy"
                alt=""
                src="/fisearch.svg"
              />
              <div className="search-by-applicant">
                Search by: Applicant name, Email...
              </div>
            </div>
            <div className="divider4" />
            <Button
              className="button"
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
            </Button>
          </div>
          <div className="content1">
            <div className="table-header">
              <div className="cell-header3">
                <div className="header-title">
                  <b className="value3">Applicant Name</b>
                </div>
                <div className="divider5" />
              </div>
              <div className="row">
                <div className="content-item">
                  <div className="inner-content">
                    <div className="deep-content">
                      <div className="element-row">
                        <div className="element-item">
                          <div className="status" />
                          <div className="value4">WW</div>
                        </div>
                        <div className="element-description">
                          <div className="value5">Wade Warren</div>
                        </div>
                      </div>
                    </div>
                    <div className="divider6" />
                  </div>
                </div>
                <TextField
                  className="cell-text"
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
                <TextField
                  className="table-cell"
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
                <div className="value-cell">
                  <div className="value6">View</div>
                </div>
                <div className="divider7" />
                <div className="icon-button-row">
                  <div className="icon-button-item">
                    <div className="icon-button-container">
                      <img
                        className="icon-button"
                        loading="lazy"
                        alt=""
                        src="/icon-button.svg"
                      />
                    </div>
                    <div className="divider8" />
                  </div>
                </div>
                <Actions />
              </div>
            </div>
            <div className="row1">
              <div className="row-item">
                <div className="cell">
                  <div className="inner-cell">
                    <div className="element">
                      <div className="element-value">
                        <div className="badge" />
                        <div className="item-value">
                          <div className="value7">BS</div>
                        </div>
                      </div>
                      <div className="cell-value">
                        <div className="value8">Brooklyn Simmons</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider9" />
                </div>
              </div>
              <TextField
                className="cell-text1"
                placeholder="debbie.baker@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="action-row"
                placeholder="Darlene Robertson"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="data-row-item">
                <div className="value9">View</div>
              </div>
              <div className="divider10" />
              <div className="icon-row">
                <div className="icon-item">
                  <div className="icon-button-cell">
                    <img
                      className="icon-button1"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider11" />
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="row-inner">
                <div className="frame-div">
                  <div className="frame-wrapper1">
                    <div className="frame-parent1">
                      <div className="ellipse-parent">
                        <div className="frame-inner" />
                        <div className="value10">JB</div>
                      </div>
                      <div className="value-container">
                        <div className="value11">Jerome Bell</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider12" />
                </div>
              </div>
              <TextField
                className="cell-text2"
                placeholder="felicia.reid@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="row-child"
                placeholder="Theresa Webb"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-frame">
                <div className="value12">View</div>
              </div>
              <div className="divider13" />
              <div className="row-inner1">
                <div className="frame-parent2">
                  <div className="icon-button-wrapper">
                    <img
                      className="icon-button2"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider14" />
                </div>
              </div>
            </div>
            <div className="row3">
              <div className="row-inner2">
                <div className="frame-parent3">
                  <div className="frame-wrapper2">
                    <div className="frame-parent4">
                      <div className="ellipse-group">
                        <div className="ellipse-div" />
                        <div className="value13">CW</div>
                      </div>
                      <div className="value-wrapper1">
                        <div className="value14">Cameron Williamson</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider15" />
                </div>
              </div>
              <TextField
                className="cell-text3"
                placeholder="nevaeh.simmons@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="frame-textfield"
                placeholder="Guy Hawkins"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="divider16" />
              <div className="value-wrapper2">
                <div className="value15">View</div>
              </div>
              <div className="row-inner3">
                <div className="frame-parent5">
                  <div className="icon-button-frame">
                    <img
                      className="icon-button3"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider17" />
                </div>
              </div>
            </div>
            <div className="row4">
              <div className="row-inner4">
                <div className="frame-parent6">
                  <div className="frame-wrapper3">
                    <div className="frame-parent7">
                      <div className="ellipse-container">
                        <div className="frame-child1" />
                        <div className="value-wrapper3">
                          <div className="value16">FM</div>
                        </div>
                      </div>
                      <div className="value-wrapper4">
                        <div className="value17">Floyd Miles</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider18" />
                </div>
              </div>
              <TextField
                className="cell-text4"
                placeholder="michael.mitc@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="row-child1"
                placeholder="Wade Warren"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-wrapper5">
                <div className="value18">View</div>
              </div>
              <div className="divider19" />
              <div className="row-inner5">
                <div className="frame-parent8">
                  <div className="icon-button-wrapper1">
                    <img
                      className="icon-button4"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider20" />
                </div>
              </div>
            </div>
            <div className="row5">
              <div className="row-inner6">
                <div className="frame-parent9">
                  <div className="frame-wrapper4">
                    <div className="frame-parent10">
                      <div className="ellipse-parent1">
                        <div className="frame-child2" />
                        <div className="value-wrapper6">
                          <div className="value19">JC</div>
                        </div>
                      </div>
                      <div className="value-wrapper7">
                        <div className="value20">Jane Cooper</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider21" />
                </div>
              </div>
              <TextField
                className="cell-text5"
                placeholder="curtis.weaver@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="row-child2"
                placeholder="Ralph Edwards"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-wrapper8">
                <div className="value21">View</div>
              </div>
              <div className="divider22" />
              <div className="row-inner7">
                <div className="frame-parent11">
                  <div className="icon-button-wrapper2">
                    <img
                      className="icon-button5"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider23" />
                </div>
              </div>
            </div>
            <div className="row6">
              <div className="row-inner8">
                <div className="frame-parent12">
                  <div className="frame-wrapper5">
                    <div className="frame-parent13">
                      <div className="ellipse-parent2">
                        <div className="frame-child3" />
                        <div className="value22">RR</div>
                      </div>
                      <div className="value-wrapper9">
                        <div className="value23">Ronald Richards</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider24" />
                </div>
              </div>
              <TextField
                className="cell-text6"
                placeholder="georgia.young@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="row-child3"
                placeholder="Bessie Cooper"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-wrapper10">
                <div className="value24">Design</div>
              </div>
              <div className="divider25" />
              <div className="row-inner9">
                <div className="frame-parent14">
                  <div className="icon-button-wrapper3">
                    <img
                      className="icon-button6"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider26" />
                </div>
              </div>
            </div>
            <div className="row7">
              <div className="row-inner10">
                <div className="frame-parent15">
                  <div className="frame-wrapper6">
                    <div className="frame-parent16">
                      <div className="ellipse-parent3">
                        <div className="frame-child4" />
                        <div className="value-wrapper11">
                          <div className="value25">SN</div>
                        </div>
                      </div>
                      <div className="value-wrapper12">
                        <div className="value26">Savannah Nguyen</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider27" />
                </div>
              </div>
              <div className="cell-text7">
                <div className="value-wrapper13">
                  <p className="value27">kenzi.lawson@example.com</p>
                </div>
                <div className="divider28" />
              </div>
              <div className="cell-text-wrapper">
                <div className="cell-text8">
                  <div className="value-wrapper14">
                    <div className="value28">Kathryn Murphy</div>
                  </div>
                  <div className="divider29" />
                </div>
              </div>
              <div className="value-wrapper15">
                <div className="value29">Development</div>
              </div>
              <div className="divider30" />
              <div className="row-inner11">
                <div className="frame-parent17">
                  <div className="icon-button-wrapper4">
                    <img
                      className="icon-button7"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider31" />
                </div>
              </div>
            </div>
            <div className="row8">
              <div className="row-inner12">
                <div className="frame-parent18">
                  <div className="frame-wrapper7">
                    <div className="frame-parent19">
                      <div className="ellipse-parent4">
                        <div className="frame-child5" />
                        <div className="value-wrapper16">
                          <div className="value30">JW</div>
                        </div>
                      </div>
                      <div className="value-wrapper17">
                        <div className="value31">Jenny Wilson</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider32" />
                </div>
              </div>
              <div className="cell-text9">
                <div className="value-wrapper18">
                  <p className="value32">tanya.hill@example.com</p>
                </div>
                <div className="divider33" />
              </div>
              <div className="cell-text-container">
                <div className="cell-text10">
                  <div className="value-wrapper19">
                    <p className="value33">Dianne Russell</p>
                  </div>
                  <div className="divider34" />
                </div>
              </div>
              <div className="value-wrapper20">
                <div className="value34">Project Management</div>
              </div>
              <div className="divider35" />
              <div className="row-inner13">
                <div className="frame-parent20">
                  <div className="icon-button-wrapper5">
                    <img
                      className="icon-button8"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider36" />
                </div>
              </div>
            </div>
            <div className="row9">
              <div className="row-inner14">
                <div className="frame-parent21">
                  <div className="frame-wrapper8">
                    <div className="frame-parent22">
                      <div className="ellipse-parent5">
                        <div className="frame-child6" />
                        <div className="value-wrapper21">
                          <div className="value35">EH</div>
                        </div>
                      </div>
                      <div className="value-wrapper22">
                        <div className="value36">Esther Howard</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider37" />
                </div>
              </div>
              <div className="cell-text11">
                <div className="value-wrapper23">
                  <div className="value37">sara.cruz@example.com</div>
                </div>
                <div className="divider38" />
              </div>
              <div className="cell-text-frame">
                <div className="cell-text12">
                  <div className="value-wrapper24">
                    <p className="value38">Cody Fisher</p>
                  </div>
                  <div className="divider39" />
                </div>
              </div>
              <div className="value-wrapper25">
                <div className="value39">Sales</div>
              </div>
              <div className="divider40" />
              <div className="row-inner15">
                <div className="frame-parent23">
                  <div className="icon-button-wrapper6">
                    <img
                      className="icon-button9"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider41" />
                </div>
              </div>
            </div>
            <div className="row10">
              <div className="row-inner16">
                <div className="frame-parent24">
                  <div className="frame-wrapper9">
                    <div className="frame-parent25">
                      <div className="ellipse-parent6">
                        <div className="frame-child7" />
                        <div className="value-wrapper26">
                          <div className="value40">CH</div>
                        </div>
                      </div>
                      <div className="value-wrapper27">
                        <div className="value41">Courtney Henry</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider42" />
                </div>
              </div>
              <TextField
                className="cell-text13"
                placeholder="jessica.hanson@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <div className="cell-text-wrapper1">
                <div className="cell-text14">
                  <div className="value-wrapper28">
                    <div className="value42">Annette Black</div>
                  </div>
                  <div className="divider43" />
                </div>
              </div>
              <div className="value-wrapper29">
                <div className="value43">Sales</div>
              </div>
              <div className="divider44" />
              <div className="row-inner17">
                <div className="frame-parent26">
                  <div className="icon-button-wrapper7">
                    <img
                      className="icon-button10"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider45" />
                </div>
              </div>
            </div>
            <div className="row11">
              <div className="row-inner18">
                <div className="frame-parent27">
                  <div className="frame-wrapper10">
                    <div className="frame-parent28">
                      <div className="ellipse-parent7">
                        <div className="frame-child8" />
                        <div className="value-wrapper30">
                          <div className="value44">AF</div>
                        </div>
                      </div>
                      <div className="value-wrapper31">
                        <div className="value45">Albert Flores</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider46" />
                </div>
              </div>
              <TextField
                className="cell-text15"
                placeholder="jackson.graham@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <div className="cell-text-wrapper2">
                <div className="cell-text16">
                  <div className="value-wrapper32">
                    <div className="value46">Robert Fox</div>
                  </div>
                  <div className="divider47" />
                </div>
              </div>
              <div className="value-wrapper33">
                <div className="value47">Digital Marketing</div>
              </div>
              <div className="divider48" />
              <div className="row-inner19">
                <div className="frame-parent29">
                  <div className="icon-button-wrapper8">
                    <img
                      className="icon-button11"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider49" />
                </div>
              </div>
            </div>
            <div className="row12">
              <div className="row-inner20">
                <div className="frame-parent30">
                  <div className="frame-wrapper11">
                    <div className="frame-parent31">
                      <div className="ellipse-parent8">
                        <div className="frame-child9" />
                        <div className="value48">RE</div>
                      </div>
                      <div className="value-wrapper34">
                        <div className="value49">Ralph Edwards</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider50" />
                </div>
              </div>
              <TextField
                className="cell-text17"
                placeholder="willie.jennings@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="row-child4"
                placeholder="Jenny Wilson"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-wrapper35">
                <div className="value50">{`Engineering `}</div>
              </div>
              <div className="divider51" />
              <div className="row-inner21">
                <div className="frame-parent32">
                  <div className="icon-button-wrapper9">
                    <img
                      className="icon-button12"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider52" />
                </div>
              </div>
            </div>
            <div className="row13">
              <div className="row-inner22">
                <div className="frame-parent33">
                  <div className="frame-wrapper12">
                    <div className="frame-parent34">
                      <div className="ellipse-parent9">
                        <div className="frame-child10" />
                        <div className="value51">KM</div>
                      </div>
                      <div className="value-wrapper36">
                        <div className="value52">Kathryn Murphy</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider53" />
                </div>
              </div>
              <TextField
                className="cell-text18"
                placeholder="bill.sanders@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="row-child5"
                placeholder="Kristin Watson"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-wrapper37">
                <div className="value53">Development</div>
              </div>
              <div className="divider54" />
              <div className="row-inner23">
                <div className="frame-parent35">
                  <div className="icon-button-wrapper10">
                    <img
                      className="icon-button13"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider55" />
                </div>
              </div>
            </div>
            <div className="row14">
              <div className="row-inner24">
                <div className="frame-parent36">
                  <div className="frame-wrapper13">
                    <div className="frame-parent37">
                      <div className="ellipse-parent10">
                        <div className="frame-child11" />
                        <div className="value54">DS</div>
                      </div>
                      <div className="value-wrapper38">
                        <div className="value55">Darrell Steward</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider56" />
                </div>
              </div>
              <div className="cell-text19">
                <div className="value-wrapper39">
                  <div className="value56">tim.jennings@example.com</div>
                </div>
                <div className="divider57" />
              </div>
              <TextField
                className="row-child6"
                placeholder="Floyd Miles"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-wrapper40">
                <div className="value57">{`Engineering `}</div>
              </div>
              <div className="divider58" />
              <div className="row-inner25">
                <div className="frame-parent38">
                  <div className="icon-button-wrapper11">
                    <img
                      className="icon-button14"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider59" />
                </div>
              </div>
            </div>
            <div className="row15">
              <div className="row-inner26">
                <div className="frame-parent39">
                  <div className="frame-wrapper14">
                    <div className="frame-parent40">
                      <div className="ellipse-parent11">
                        <div className="frame-child12" />
                        <div className="value58">KW</div>
                      </div>
                      <div className="value-wrapper41">
                        <div className="value59">Kristin Watson</div>
                      </div>
                    </div>
                  </div>
                  <div className="divider60" />
                </div>
              </div>
              <TextField
                className="cell-text20"
                placeholder="debra.holt@example.com"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                }}
              />
              <TextField
                className="row-child7"
                placeholder="Marvin McKinney"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "40px", fontSize: "14px" },
                  "& .MuiInputBase-input": { color: "#252c32" },
                  width: "562.8px",
                }}
              />
              <div className="value-wrapper42">
                <div className="value60">Design</div>
              </div>
              <div className="divider61" />
              <div className="row-inner27">
                <div className="frame-parent41">
                  <div className="icon-button-wrapper12">
                    <img
                      className="icon-button15"
                      alt=""
                      src="/icon-button.svg"
                    />
                  </div>
                  <div className="divider62" />
                </div>
              </div>
            </div>
            <div className="row16">
              <div className="row-inner28">
                <div className="frame-parent42">
                  <div className="frame-parent43">
                    <div className="ellipse-parent12">
                      <div className="frame-child13" />
                      <div className="value61">GH</div>
                    </div>
                    <div className="button-cell">
                      <div className="value62">Guy Hawkins</div>
                    </div>
                  </div>
                  <div className="value-wrapper43">
                    <div className="value63">alma.lawson@example.com</div>
                  </div>
                </div>
              </div>
              <div className="value-wrapper44">
                <div className="value64">Eleanor Pena</div>
              </div>
              <div className="frame-parent44">
                <div className="value-wrapper45">
                  <div className="value65">Sales</div>
                </div>
                <img
                  className="cell-button-icon"
                  loading="lazy"
                  alt=""
                  src="/cell-button.svg"
                />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Desktop3;
