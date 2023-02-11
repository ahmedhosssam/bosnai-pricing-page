import GetStartedImg from '../../Assets/GetStarted.png';

const GetStarted = () => {
  return (
    <div className="getStarted">
      <img src={GetStartedImg} alt="img" />

      <div>
        <h1>
          Need help?
          <br />
          answer in under 5 minutes
        </h1>
        <p>
          Our friendly, speedy, Customer Support has all the answers and is here
          to help you.
        </p>
        <a href="#">Contact Us</a>
      </div>

      <div>
        <h1>
          Quick to set up
          <br />
          Even easier to use
        </h1>
        <p>
          You get 7 days to try it for free. And if it's not what you expected,
          we guarantee your money back within the first two weeks.
        </p>

        <button className="start-for-free-btn">Get Started</button>
      </div>
    </div>
  );
};

export default GetStarted;
