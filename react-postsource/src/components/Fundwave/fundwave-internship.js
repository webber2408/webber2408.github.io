var FundwaveInternship = function FundwaveInternship() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "fw-icon-wrapper flex-center" },
      React.createElement("img", {
        src: "../../../../images/fundwave.png",
        className: "fundwave-icon"
      })
    ),
    React.createElement(
      "div",
      { className: "fw-details" },
      React.createElement(
        "span",
        { className: "font-kalam black-heading" },
        "Fundwave\xA0",
        React.createElement(
          "a",
          { href: "https://fundwave.com/", target: "_blank" },
          "\uD83D\uDD17"
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "i",
          null,
          React.createElement(
            "span",
            null,
            "Software Engineer Intern"
          ),
          " |",
          " ",
          React.createElement(
            "span",
            null,
            " Feb'19 - Jul'19 "
          )
        )
      ),
      React.createElement(
        "div",
        { className: "mt-32 max-w-80 fw-details-content" },
        React.createElement(
          "p",
          { className: "mt-24" },
          "Worked upon learning LitElement.JS, Java & MySQL by implementing various POCs."
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Worked on technologies and projects including React.JS, LitElement.JS, Java, Hibernate, MySQL, Rest API."
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Worked on building Bank Reconciliation System"
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Got appraised in-between the internship! :D"
        )
      )
    )
  );
};

var domContainer = document.querySelector(".fundwave-internship");
ReactDOM.render(React.createElement(FundwaveInternship, null), domContainer);