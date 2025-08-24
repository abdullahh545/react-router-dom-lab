import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ mailboxes, addBox }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    _id: mailboxes.length + 1,
    boxSize: "Small",
    boxOwner: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <div>
      <h2>Create Mailbox</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Box Holder:</label>
        <input
          id="boxOwner"
          name="boxOwner"
          type="text"
          value={formData.boxOwner}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
