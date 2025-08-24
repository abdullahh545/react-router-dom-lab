import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>All Mailboxes</h2>

      <ul
        style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0 }}
      >
        {mailboxes.map((m) => (
          <li key={m._id}>
            <Link to={`/mailboxes/${m._id}`}>Mailbox #{m._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;
