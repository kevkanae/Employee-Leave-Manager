import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f7d9d9";
  });
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
      </BrowserRouter>
    </>
  );
}

export default App;
