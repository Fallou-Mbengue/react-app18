import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // update
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bugs, fixed:true} : bug))

    // use immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      {/* <ListGroup items={items} title="List" onSelectItem={handleSelectItem} />
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My button
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Show alert</Alert>
      )} */}
      <div>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "fixed" : "New"}
          </p>
        ))}
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}

export default App;
