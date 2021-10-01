var NTPCInternship = function NTPCInternship() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "np-icon-wrapper flex-center" },
      React.createElement("img", { src: "../../../../images/ntpc.svg", className: "ntpc-icon" })
    ),
    React.createElement(
      "div",
      { className: "np-details" },
      React.createElement(
        "span",
        { className: "font-kalam black-heading" },
        "National Thermal Power Corporation (NTPC)\xA0",
        React.createElement(
          "a",
          { href: "https://www.ntpc.co.in/", target: "_blank" },
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
            "Information Technology Trainee"
          ),
          " |",
          " ",
          React.createElement(
            "span",
            null,
            " Jun'18 - Jul'18 "
          )
        )
      ),
      React.createElement(
        "div",
        { className: "mt-32 max-w-80 np-details-content" },
        React.createElement(
          "p",
          { className: "mt-24" },
          "Worked on building a project \u2013\u201CPowerplant Protocol Portal\u201D to digitalize the existing paper-driven protocol process."
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Worked on technologies and projects including PHP, HTML, CSS, JavaScript, REST API."
        )
      )
    )
  );
};

var domContainer = document.querySelector(".ntpc-internship");
ReactDOM.render(React.createElement(NTPCInternship, null), domContainer);