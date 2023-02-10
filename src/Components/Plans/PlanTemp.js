const PlanTemp = ({ type, price, description, features }) => {
  return (
    <div>
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
    </div>
  );
};

export default PlanTemp;
