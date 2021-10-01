const NTPCInternship = () => {
  return (
    <React.Fragment>
      <div className="np-icon-wrapper flex-center">
        <img src={"../../../../images/ntpc.svg"} className="ntpc-icon" />
      </div>
      <div className="np-details">
        <span className="font-kalam black-heading">
          National Thermal Power Corporation (NTPC)&nbsp;
          <a href="https://www.ntpc.co.in/" target="_blank">
            🔗
          </a>
        </span>
        <div>
          <i>
            <span>Information Technology Trainee</span> |{" "}
            <span> Jun'18 - Jul'18 </span>
          </i>
        </div>
        <div className="mt-32 max-w-80 np-details-content">
          <p className="mt-24">
            Worked on building a project –“Powerplant Protocol Portal” to
            digitalize the existing paper-driven protocol process.
          </p>
          <p className="mt-24">
            Worked on technologies and projects including PHP, HTML, CSS,
            JavaScript, REST API.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

let domContainer = document.querySelector(".ntpc-internship");
ReactDOM.render(<NTPCInternship />, domContainer);
