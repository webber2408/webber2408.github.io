var ParmeetKaur = function ParmeetKaur() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "college-recommendation" },
      React.createElement(
        "div",
        { className: "college-recommendation__text" },
        React.createElement(
          "i",
          null,
          " ",
          "\"Rahul is a consistent and meticulous learner who played an active role in the classroom. He was attentive and quick to grasp complex concepts. His openness to deepen his knowledge through conversation and debate was delightful as we often delved into engaging discussions on different matters.\""
        )
      ),
      React.createElement(
        "div",
        { className: "college-recommendation__image" },
        React.createElement("img", { src: "../../../../images/parmeet-maam.jpeg" })
      ),
      React.createElement(
        "div",
        { className: "college-recommendation__from" },
        React.createElement(
          "p",
          null,
          React.createElement(
            "b",
            null,
            "Dr. Parmeet Kaur"
          )
        ),
        React.createElement(
          "p",
          null,
          "Assistant Professor (Senior Grade)"
        ),
        " ",
        React.createElement(
          "a",
          { href: "https://www.jiit.ac.in/dr-parmeet-kaur", target: "_blank" },
          "\uD83D\uDD17"
        ),
        React.createElement(
          "p",
          null,
          "Jaypee Institute of Information Technology, Noida"
        )
      )
    )
  );
};

var domContainer = document.querySelector(".parmeet-kaur");
ReactDOM.render(React.createElement(ParmeetKaur, null), domContainer);