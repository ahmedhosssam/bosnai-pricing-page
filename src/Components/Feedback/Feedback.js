import topPerformer from '../../Assets/Feedback/top-performer.svg';
import excellent from '../../Assets/Feedback/excellent.svg';

const Feedback = () => {
  return (
    <div className="feedback-component">
      <h1>
        Trusted by 500,000+
        <br />
        business owners
      </h1>

      <div className="feedback-imgs">
        <img src={topPerformer} alt="Top Performer" />
        <img src={excellent} alt="Excellent" />
      </div>

      <div className="feedback-items-gallery">
        {FeedBackData.map((FeedBackItem) => {
          return <FeedBackTemp message={FeedBackItem} />;
        })}
      </div>
    </div>
  );
};

const FeedBackTemp = ({ message }) => {
  return <div className="feedback-item">{message}</div>;
};

// I hate copy-paste ?
const FeedBackData = [
  '“My best friend in scaling my business”',
  '“Like putting my finances on auto-pilot”',
  '“Bonsai does the hard work”',
  '“Everything is streamlined”',
  '“Everything is streamlined”',
  '“Huge timesaver”',
  '“It’s been the most stress-free year of my life!”',
  '“I feel more confident”',
  '“Backbone of my business”',
  '“So simple”',
  '“Clients love how easy my systems are”',
  '“A must-have!”',
  '“I do less admin and do more of what I love”',
  '“Worry-free contracts and invoices”',
  '“It pays for itself”',
  '“Great customer service!”',
  '“A life-saver!”',
  '“Clients take me more seriously”',
  '“I upped my rates and won more clients”',
];

export default Feedback;
