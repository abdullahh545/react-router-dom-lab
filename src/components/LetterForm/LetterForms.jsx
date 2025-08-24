import { useState } from "react";
import { useNavigate } from "react-router";

const LetterForm = ({ mailboxes, addLetter }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mailboxId: 1,
    recipient: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addLetter(formData);
    navigate("/mailboxes");
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <h1>New Letter</h1>

      <form onSubmit={handleSubmit}>
        <select name="mailboxId" id="mailboxId" onChange={handleChange}>
          {mailboxes.map((mailbox) => {
            return (
              <option value={mailbox._id} key={mailbox._id}>
                Mailbox {mailbox._id}
              </option>
            );
          })}
        </select>

        <label htmlFor="recipient">Enter a recipient</label>
        <input
          type="text"
          name="recipient"
          id="recipient"
          onChange={handleChange}
          value={formData.recipient}
        />
        <label htmlFor="message">Enter a message</label>
        <textarea
          type="text"
          name="message"
          id="message"
          onChange={handleChange}
          value={formData.message}
        />

        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default LetterForm;
