import PlanTemp from './PlanTemp';

const MonthlyPlan = () => {
  return (
    <div className="monthly-plan-grid">
      <PlanTemp
        type="Starter"
        price={24}
        description="Ideal for freelancers and contractors just starting out."
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
      />

      <PlanTemp
        type="Professional"
        price={39}
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
      />

      <PlanTemp
        type="Business"
        price={79}
        description="The perfect package for small businesses and agencies."
        features={[
          'Everything in Professional, plus:',
          'Subcontractor Management',
          'Hiring Agreement Templates',
          'Subcontractor Onboarding',
          'Talent Pool',
          '3 Team Seats',
          'Accountant Access',
          'Unlimited Subcontractors',
          'Unlimited Project Collaborators',
        ]}
      />
    </div>
  );
};

export default MonthlyPlan;
