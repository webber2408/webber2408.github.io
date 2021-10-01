var Fundwave = function Fundwave() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "sb-icon-wrapper flex-center" },
      React.createElement("img", {
        src: "../../../../images/fundwave.png",
        className: "fundwave-icon"
      })
    ),
    React.createElement(
      "div",
      { className: "sb-details" },
      React.createElement(
        "span",
        { className: "font-kalam black-heading" },
        "Fundwave"
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
            "Software Engineer"
          ),
          " | ",
          React.createElement(
            "span",
            null,
            " July'19 - Mar'20 "
          )
        )
      ),
      React.createElement(
        "div",
        { className: "mt-32 max-w-80 sb-details-content" },
        React.createElement(
          "p",
          { className: "mt-24" },
          "Developed scalable dashboards using LitElement.JS"
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Worked on technologies and projects including React.JS, LitElement.JS, Java, MySQL, Rest API."
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Worked on building Investment Summary, Custom Dashboard, and optimizing the existing WebApp into a PWA"
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Implemented caching strategies and split chunk webpack optimizations for APIs, assets & libraries in the existing WebApp."
        ),
        React.createElement(
          "p",
          { className: "mt-24" },
          "Delivered various nerd talks on MongoDB, Webpack, ECMAScript (2015-2019), Mixins & OOPS"
        )
      )
    )
  );
};

var domContainer = document.querySelector(".fundwave-details");
ReactDOM.render(React.createElement(Fundwave, null), domContainer);