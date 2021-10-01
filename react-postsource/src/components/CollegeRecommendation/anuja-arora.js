var AnujaArora = function AnujaArora() {
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
          "\"Through Rahul's presentations and reports, I closely observed his communication and and organizational skills, which were excellent. He has a good academic record which attributes to his insightfulness, his keen learning attitude and bold resolution to achieve goals.\""
        )
      ),
      React.createElement(
        "div",
        { className: "college-recommendation__image" },
        React.createElement("img", { src: "../../../../images/anuja-maam.jpeg" })
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
            "Dr. Anuja Arora"
          )
        ),
        React.createElement(
          "p",
          null,
          "Associate Professor"
        ),
        " ",
        React.createElement(
          "a",
          { href: "https://www.jiit.ac.in/dr-anuja-arora", target: "_blank" },
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

var domContainer = document.querySelector(".anuja-arora");
ReactDOM.render(React.createElement(AnujaArora, null), domContainer);