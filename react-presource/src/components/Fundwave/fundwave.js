const Fundwave = () => {
  return (
    <React.Fragment>
      <div className="fw-icon-wrapper flex-center">
        <img
          src={"../../../../images/fundwave.png"}
          className="fundwave-icon"
        />
      </div>
      <div className="fw-details">
        <span className="font-kalam black-heading">
          Fundwave &nbsp;
          <a href="https://fundwave.com/" target="_blank">
            🔗
          </a>
        </span>
        <div>
          <i>
            <span>Software Engineer</span> | <span> July'19 - Mar'20 </span>
          </i>
        </div>
        <div className="mt-32 max-w-80 fw-details-content">
          <p className="mt-24">
            Developed scalable dashboards using LitElement.JS
          </p>
          <p className="mt-24">
            Worked on technologies and projects including React.JS,
            LitElement.JS, Java, MySQL, Rest API.
          </p>
          <p className="mt-24">
            Worked on building Investment Summary, Custom Dashboard, and
            optimizing the existing WebApp into a PWA
          </p>
          <p className="mt-24">
            Implemented caching strategies and split chunk webpack optimizations
            for APIs, assets & libraries in the existing WebApp.
          </p>
          <p className="mt-24">
            Delivered various nerd talks on MongoDB, Webpack, ECMAScript
            (2015-2019), Mixins & OOPS
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

let domContainer = document.querySelector(".fundwave-details");
ReactDOM.render(<Fundwave />, domContainer);
