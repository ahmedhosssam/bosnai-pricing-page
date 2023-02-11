import PlanTemp from './PlanTemp';

const YearlyPlan = () => {
  return (
    <div className="yearly-plan-grid">
      <PlanTemp
        type="Starter"
        price={17}
        description="Ideal for freelancers and contractors just starting out.
        Billed annualy."
        features={[
          'All Templates',
          'Unlimited Clients & Projects',
          'Invoicing & Payments',
          'Proposal & Contracts',
          'Scheduling',
          'Tasks & Time Tracking',
          'Client CRM',
          'Expense Tracking',
          'Up to 5 Project Collaborators',
        ]}
        isValue={false}
      />

      <PlanTemp
        type="Professional"
        price={32}
        description="Everything a growing independent business needs to thrive."
        features={[
          'Everything in Starter, plus:',
          'Custom Branding',
          'Forms & Questionnaires',
          'Workflow Automations',
          'Client Portal',
          'QuickBooks Integration',
          'Calendly Integration',
          'Zapier Integration',
          'Up to 15 Project Collaborators',
        ]}
        isValue={true} // Best Value For Money
      />

      <PlanTemp
        type="Business"
        price={51}
        description="The perfect package for small businesses and agencies."
        features={[
          'Everything in Professional, plus:',
          'Subcontractor Management',
          'Hiring Agreement Templates (1099 contractors)',
          'Subcontractor Onboarding',
          'Talent Pool',
          '3 Team Seats',
          'Accountant Access',
          'Unlimited Subcontractors',
          'Unlimited Project Collaborators',
        ]}
        isValue={false}
      />
    </div>
  );
};

export default YearlyPlan;
