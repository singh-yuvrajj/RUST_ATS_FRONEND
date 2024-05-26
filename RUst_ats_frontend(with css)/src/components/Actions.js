import "./Actions.css";

const Actions = ({ className = "" }) => {
  return (
    <div className={`actions ${className}`}>
      <div className="action-container">
        <div className="action-container-inner">
          <div className="dev-u-criterias-parent">
            <div className="dev-u-criterias">
              <div className="checkbox">
                <div className="checkbox-inner">
                  <div className="frame-child18" />
                </div>
                <div className="devu">Remove Candidate</div>
              </div>
            </div>
            <div className="dev-u-criterias1">
              <div className="checkbox1">
                <div className="checkbox-child">
                  <div className="frame-child19" />
                </div>
                <div className="devu1">Assign Interviewer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dev-u-container">
        <div className="checkbox2">
          <div className="checkbox-inner1">
            <div className="frame-child20" />
          </div>
          <div className="devu2">Change Interviewer</div>
        </div>
      </div>
    </div>
  );
};

Actions.propTypes = {
  className: PropTypes.string,
};

export default Actions;
