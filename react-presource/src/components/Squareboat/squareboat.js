const Squareboat = () => {
  return (
    <React.Fragment>
      <div className="sb-icon-wrapper flex-center">
        <img
          src={"../../../../images/squareboat.png"}
          className="squareboat-icon"
        />
      </div>
      <div className="sb-details">
        <span className="font-kalam black-heading">
          Sailed the boat @ Squareboat!&nbsp;
          <a href="https://squareboat.com/" target="_blank">
            🔗
          </a>
        </span>
        <div>
          <i>
            <span>Full Stack Developer (React.JS, Nest.JS)</span> |{" "}
            <span> October'20 - July'21</span>
          </i>
        </div>
        <div className="mt-32 max-w-80 sb-details-content">
          <p className="mt-24">
            Worked as a full stack developer to provide WebApp & PWA Solutions
            maintaining scalable and efficient coding standards.
          </p>
          <p className="mt-24">
            Worked on technologies and projects including React.JS, Next.JS,
            Nest.JS, MySQL, MongoDB, Rest API.
          </p>
          <p className="mt-24">
            Delivered key deliverable efficiently and on a timely basis along
            with experience in mentoring and managing the team.
          </p>
          <p className="mt-24">
            Understanding of SDLC, Scrums & other Agile methodologies.
          </p>
          <p className="mt-24">
            Knowledge of communication, project & task management tools
            including Bitbucket, Github, JIRA, Trello, Slack, Teams, etc.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

let domContainer = document.querySelector(".squareboat-details");
ReactDOM.render(<Squareboat />, domContainer);
