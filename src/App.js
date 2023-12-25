import "./App.css";
import Header from "./components/Header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<h1>HELLO WORLD</h1>}></Route>
          <Route path="movie/:id" element={<h1>MOVIE DETAILS PAGE</h1>}></Route>
          <Route path="movies/:type" element={<h1>MOVIE LIST PAGE</h1>}></Route>
          <Route path="/*" element={<h1>ERROR PAGE NOT FOUND</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
