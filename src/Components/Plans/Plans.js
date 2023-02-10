import { useState } from 'react';
import MonthlyPlan from './MonthlyPlan';
import YearlyPlan from './YearlyPlan';

const Plans = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="plans">
      <h1 className="h1-plans">
        Pick the best plan for
        <br />
        your business
      </h1>

      <div className="plans-buttons">
        <ButtonPlan
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
          className="monthly-button"
        >
          Monthly
        </ButtonPlan>

        <ButtonPlan
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
          className="yearly-button"
        >
          Yearly <span className="offer-in-button">2 months for free</span>
        </ButtonPlan>
      </div>

      <div className="plans-grid">
        {activeIndex === 2 ? <YearlyPlan /> : <MonthlyPlan />}
      </div>
    </div>
  );
};

export default Plans;

const ButtonPlan = ({ className, children, isActive, onShow }) => {
  return (
    <button
      onClick={onShow}
      className={isActive ? (className += ' clicked-btn') : className}
    >
      {children}
    </button>
  );
};
