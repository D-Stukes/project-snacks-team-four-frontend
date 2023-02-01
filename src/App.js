// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

// COMPONENTS
import Nav from "./Components/Nav";
import HeaderBar from "./Components/HeaderBar";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBar />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/new" element={<New />} />
            <Route path="/snacks/:index" element={<Show />} />
            <Route path="/snacks/:index/edit" element={<Edit />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
