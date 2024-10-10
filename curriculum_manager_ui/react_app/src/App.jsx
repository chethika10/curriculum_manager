import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Module from "./Screens/module";
import Login from "./Screens/Login";

function App() {
  // const [count, setCount] = useState(0);
  // const [code, setCode] = useState("");
  // const [title, setTitle] = useState("");
  // const [isgpa, setGpa] = useState("");
  // const [lectureHours, setLectureHours] = useState(0);
  // const [labHours, setLabHours] = useState(0);
  // const [credits, srtCredits] = useState(0);
  // const [EvaluationCa, setEvaluationCa] = useState(0);

  return (
    <main className="App">
      <Login />
    </main>
  );
}

export default App;
