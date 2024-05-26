import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={`navbar-group ${className}`}>
      <div className="navbar4" />
      <div className="first-column">
        <div className="job-form-container">
          <div className="briefcase-and-rehire">
            <img
              className="briefcase-1-icon4"
              loading="lazy"
              alt=""
              src="/briefcase-1.svg"
            />
          </div>
          <a className="rehire4">ReHire</a>
        </div>
      </div>
      <div className="user-icon-container-parent">
        <div className="user-icon-container">
          <a className="user1">User</a>
        </div>
        <img
          className="frame-child15"
          loading="lazy"
          alt=""
          src="/ellipse-19@2x.png"
        />
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
