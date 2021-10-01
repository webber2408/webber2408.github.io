const AnujaArora = () => {
  return (
    <React.Fragment>
      <div className="college-recommendation">
        <div className="college-recommendation__text">
          <i>
            {" "}
            "Through Rahul's presentations and reports, I closely observed his
            communication and and organizational skills, which were excellent.
            He has a good academic record which attributes to his
            insightfulness, his keen learning attitude and bold resolution to
            achieve goals."
          </i>
        </div>
        <div className="college-recommendation__image">
          <img src={"../../../../images/anuja-maam.jpeg"} />
        </div>
        <div className="college-recommendation__from">
          <p>
            <b>Dr. Anuja Arora</b>
          </p>
          <p>Associate Professor</p>{" "}
          <a href="https://www.jiit.ac.in/dr-anuja-arora" target="_blank">
            🔗
          </a>
          <p>Jaypee Institute of Information Technology, Noida</p>
        </div>
      </div>
    </React.Fragment>
  );
};

let domContainer = document.querySelector(".anuja-arora");
ReactDOM.render(<AnujaArora />, domContainer);
