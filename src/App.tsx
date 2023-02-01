import { Route, Routes } from "react-router-dom";
import NotFound from "~/components/not-found";
import SearchUsers from "~/pages/search-users";
import User from "~/pages/user";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SearchUsers />} />
        <Route path="/user/:userName" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
