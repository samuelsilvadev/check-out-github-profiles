import { Route, Routes } from "react-router-dom";
import SearchUsers from "~/pages/search-users";
import User from "~/pages/user";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SearchUsers />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </main>
  );
}

export default App;
