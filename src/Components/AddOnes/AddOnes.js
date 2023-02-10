const AddOnes = () => {
  return (
    <div className="add-ones">
      <h2 className="add-ones-title">
        Take it to the
        <br />
        next level with add-ones
      </h2>
      <div className="addones-items-gird">
        <AddOneItem
          label="Collaborators"
          description="Invite other users to specific projects for limited access and functionality."
          price="Free"
        />
        <AddOneItem
          label="Partners"
          description="Invite other users for full account access and company management."
          price={
            <div className="price-div">
              $9<span className="per-month">/month</span>
            </div>
          }
        />
        <AddOneItem
          label="Tax Assistant"
          description="Track expenses, identify write-offs, and estimate quarterly taxes easily."
          price={
            <div className="price-div">
              $15<span className="per-month">/month</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default AddOnes;

const AddOneItem = ({ label, description, price }) => {
  return (
    <div className="add-one-item">
      <label>{label}</label>
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  );
};
