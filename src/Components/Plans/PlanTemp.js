const PlanTemp = ({ type, price, description, features }) => {
  return (
    <div className="plan-temp">
      <h2>{type}</h2>
      <div className="price">
        <span className="dollar-sign">$</span>
        <span className="price-num">{price}</span>
        <span className="per-month">/month</span>
      </div>
      <button>Start for free</button>
      <p className="description">{description}</p>
      <div className="features">
        {features.map((feature) => {
          return (
            <div>
              <p>{feature}</p>
            </div>
          );
        })}
      </div>
      <button>Start for free</button>
    </div>
  );
};

export default PlanTemp;
