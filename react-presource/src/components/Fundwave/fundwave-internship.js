const FundwaveInternship = () => {
  return (
    <React.Fragment>
      <div className="fw-icon-wrapper flex-center">
        <img
          src={"../../../../images/fundwave.png"}
          className="fundwave-icon"
        />
      </div>
      <div className="fw-details">
        <span className="font-kalam black-heading">
          Fundwave&nbsp;
          <a href="https://fundwave.com/" target="_blank">
            🔗
          </a>
        </span>
        <div>
          <i>
            <span>Software Engineer Intern</span> |{" "}
            <span> Feb'19 - Jul'19 </span>
          </i>
        </div>
        <div className="mt-32 max-w-80 fw-details-content">
          <p className="mt-24">
            Worked upon learning LitElement.JS, Java & MySQL by implementing
            various POCs.
          </p>
          <p className="mt-24">
            Worked on technologies and projects including React.JS,
            LitElement.JS, Java, Hibernate, MySQL, Rest API.
          </p>
          <p className="mt-24">Worked on building Bank Reconciliation System</p>
          <p className="mt-24">Got appraised in-between the internship! :D</p>
        </div>
      </div>
    </React.Fragment>
  );
};

let domContainer = document.querySelector(".fundwave-internship");
ReactDOM.render(<FundwaveInternship />, domContainer);
