var Squareboat = function Squareboat() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'sb-icon-wrapper flex-center' },
      React.createElement('img', {
        src: '../../../../images/squareboat.png',
        className: 'squareboat-icon'
      })
    ),
    React.createElement(
      'div',
      { className: 'sb-details' },
      React.createElement(
        'span',
        { className: 'font-kalam black-heading' },
        'Sailing the boat @ Squareboat!'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'i',
          null,
          React.createElement(
            'span',
            null,
            'Full Stack Developer (React.JS)'
          ),
          ' |',
          ' ',
          React.createElement(
            'span',
            null,
            ' October\'20 - Present'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'mt-32 max-w-80 sb-details-content' },
        React.createElement(
          'p',
          { className: 'mt-24' },
          'Working as a full stack developer to provide WebApp & PWA Solutions maintaining scalable and efficient coding standards.'
        ),
        React.createElement(
          'p',
          { className: 'mt-24' },
          'Working on technologies and projects including React.JS, Next.JS, Nest.JS, MySQL, MongoDB, Rest API.'
        ),
        React.createElement(
          'p',
          { className: 'mt-24' },
          'Delivering key deliverable efficiently and on a timely basis along with experience in mentoring and managing the team.'
        ),
        React.createElement(
          'p',
          { className: 'mt-24' },
          'Understanding of SDLC, Scrums & other Agile methodologies.'
        ),
        React.createElement(
          'p',
          { className: 'mt-24' },
          'Knowledge of communication, project & task management tools including Bitbucket, Github, JIRA, Trello, Slack, Teams, etc.'
        ),
        React.createElement(
          'p',
          { className: 'mt-24' },
          React.createElement(
            'b',
            null,
            'Contact:'
          ),
          '\xA0\xA0',
          React.createElement(
            'a',
            { href: 'mailto:rahul.sharma@squareboat.com' },
            'rahul.sharma@squareboat.com'
          )
        )
      )
    )
  );
};

var domContainer = document.querySelector('.squareboat-details');
ReactDOM.render(React.createElement(Squareboat, null), domContainer);