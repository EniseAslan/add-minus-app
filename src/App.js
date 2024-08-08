import "./App.css";
import { AddMinus } from "./components/addMinus";

function App() {
  return (
    <div className="container">
      <AddMinus title="Quantity" />
      <AddMinus title="Money" />
    </div>
  );
}

export default App;
