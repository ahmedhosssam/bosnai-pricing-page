import greenCheckImg from '../../Assets/green-check.svg';

const PlanTemp = ({ type, price, description, features, isValue }) => {
  return (
    <div className={isValue ? 'plan-temp best-value' : 'plan-temp'}>
      {isValue ? <p className="best-value-title">Best Value For Money</p> : ''}
      <h2 className="type">{type}</h2>
      <div className="price">
        <span className="dollar-sign">$</span>
        <span className="price-num">{price}</span>
        <span className="per-month">/month</span>
      </div>
      <button className="start-for-free-btn">Start for free</button>
      <p className="description">{description}</p>
      <div className="features">
        {features.map((feature) => {
          return (
            <div className="one-feature">
              <img alt="" src={greenCheckImg} />
              <p>{feature}</p>
            </div>
          );
        })}
      </div>
      <button className="start-for-free-btn">Start for free</button>
    </div>
  );
};

export default PlanTemp;
