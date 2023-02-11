const Footer = () => {
  return (
    <footer>
      <FooterColumn items={FooterItems[0]} />
      <FooterColumn items={FooterItems[1]} />
      <FooterColumn items={FooterItems[2]} />
      <FooterColumn items={FooterItems[3]} />
    </footer>
  );
};

export default Footer;

const FooterColumn = ({ items }) => {
  return (
    <div className="footer-column">
      {items.map((item) => {
        return <button className="footer-item">{item}</button>;
      })}
    </div>
  );
};

const FooterItems = [
  [
    'Company',
    'Help center',
    'Contact us',
    'Privacy',
    'Terms and conditions',
    'Careers',
  ],
  [
    'Products',
    'Proposals',
    'Invoicing',
    'Client CRM',
    'Scheduling',
    'Time tracking',
    'Tasks management',
    'Forms',
    'Accounting',
    'Taxes',
    'Banking',
    'Reviews',
    'Pricing',
  ],
  [
    'Business Types',
    'Accounting',
    'Agencies',
    'Architecture',
    'Beauty and Wellness',
    'Coaching',
    'Consulting',
    'Design',
    'Event Planning',
    'Freelancers',
    'Health',
    'Interior Design',
    'Legal',
    'Marketing',
    'Photography',
    'Real-Estate',
    'Recruiting',
    'Small businesses',
    'Software Development',
    'Virtual Assistant',
    'Writing',
  ],
  [
    'Resources',
    'Freelance Resources',
    'Blog',
    'How to Write a Contract',
    'Online Signature Maker',
    'Self-Employed Taxes Hub',
    'Self-Employed Tax Calculator',
    'Self-Employed Tax Deductions',
  ],
];
