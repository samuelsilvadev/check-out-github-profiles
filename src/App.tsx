import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchUsers from "~/pages/search-users";
import User from "~/pages/user";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchUsers />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
