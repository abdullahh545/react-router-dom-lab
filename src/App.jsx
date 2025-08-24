import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";

import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetail";
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import LetterForm from "./components/LetterForm/LetterForms";

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {
      _id: 1,
      boxSize: "Small",
      boxOwner: "Alex",
    },
  ]);

  const [letters, setLetters] = useState([]);

  const addBox = (box) => {
    setMailboxes((prev) => [...prev, box]);
  };

  const addLetter = (letter) => {
    setLetters((prev) => [...prev, letter]);
    console.log("Letters:", [...letters, letter]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h2>📮 Post Office</h2>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} mailboxes={mailboxes} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
