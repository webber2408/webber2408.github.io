const ParmeetKaur = () => {
  return (
    <React.Fragment>
      <div className="college-recommendation">
        <div className="college-recommendation__text">
          <i>
            {" "}
            "Rahul is a consistent and meticulous learner who played an active
            role in the classroom. He was attentive and quick to grasp complex
            concepts. His openness to deepen his knowledge through conversation
            and debate was delightful as we often delved into engaging
            discussions on different matters."
          </i>
        </div>
        <div className="college-recommendation__image">
          <img src={"../../../../images/parmeet-maam.jpeg"} />
        </div>
        <div className="college-recommendation__from">
          <p>
            <b>Dr. Parmeet Kaur</b>
          </p>
          <p>Assistant Professor (Senior Grade)</p>{" "}
          <a href="https://www.jiit.ac.in/dr-parmeet-kaur" target="_blank">
            🔗
          </a>
          <p>Jaypee Institute of Information Technology, Noida</p>
        </div>
      </div>
    </React.Fragment>
  );
};

let domContainer = document.querySelector(".parmeet-kaur");
ReactDOM.render(<ParmeetKaur />, domContainer);
