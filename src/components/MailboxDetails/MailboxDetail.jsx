import { useParams, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const navigate = useNavigate();

  const box = mailboxes.find((m) => m._id === Number(mailboxId));
  const boxLetters = letters.filter((l) => l.mailboxId === Number(mailboxId));

  return (
    <div>
      {box ? (
        <div>
          <h2>Mailbox Information</h2>
          <p>
            <strong>Box Number:</strong> {box._id}
          </p>
          <p>
            <strong>Owner:</strong> {box.boxOwner}
          </p>
          <p>
            <strong>Size:</strong> {box.boxSize}
          </p>
        </div>
      ) : (
        <PageNotFound />
      )}

      {boxLetters && boxLetters.length > 0 ? (
        <div>
          <h2>Letters in this Mailbox</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {boxLetters.map((letter, idx) => (
              <li key={idx}>
                <hr />
                <p>
                  <b>Recipient:</b> {letter.recipient}
                </p>
                <p>
                  <b>Message:</b> {letter.message}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default MailboxDetails;
