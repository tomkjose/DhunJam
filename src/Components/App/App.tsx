import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Fof } from "../../Pages/Index";
import "../../Styles/index.css";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
