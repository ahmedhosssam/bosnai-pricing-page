const PlanTemp = ({ type, price, description, features }) => {
  return (
    <div className="plan-temp">
      <div>
        <h2>{type}</h2>
        <div>
          $ <h3>{price}</h3> <span className="per-month">/month</span>
        </div>
        <button>Start for free</button>
        <p className="description">{description}</p>
      </div>
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
