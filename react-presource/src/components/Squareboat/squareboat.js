const Squareboat = () => {
  return (
    <React.Fragment>
      <div className='sb-icon-wrapper flex-center'>
        <img
          src={'../../../../images/squareboat.png'}
          className='squareboat-icon'
        />
      </div>
      <div className='sb-details'>
        <span className='font-kalam black-heading'>
          Sailing the boat @ Squareboat!
        </span>
        <div>
          <i>
            <span>Full Stack Developer (React.JS)</span> |{' '}
            <span> October'20 - Present</span>
          </i>
        </div>
        <div className='mt-32 max-w-80 sb-details-content'>
          <p className='mt-24'>
            Working as a full stack developer to provide WebApp & PWA Solutions
            maintaining scalable and efficient coding standards.
          </p>
          <p className='mt-24'>
            Working on technologies and projects including React.JS, Next.JS,
            Nest.JS, MySQL, MongoDB, Rest API.
          </p>
          <p className='mt-24'>
            Delivering key deliverable efficiently and on a timely basis along
            with experience in mentoring and managing the team.
          </p>
          <p className='mt-24'>
            Understanding of SDLC, Scrums & other Agile methodologies.
          </p>
          <p className='mt-24'>
            Knowledge of communication, project & task management tools
            including Bitbucket, Github, JIRA, Trello, Slack, Teams, etc.
          </p>
          <p className='mt-24'>
            <b>Contact:</b>&nbsp;&nbsp;
            <a href='mailto:rahul.sharma@squareboat.com'>
              rahul.sharma@squareboat.com
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

let domContainer = document.querySelector('.squareboat-details');
ReactDOM.render(<Squareboat />, domContainer);
