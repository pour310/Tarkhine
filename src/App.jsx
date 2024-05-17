import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BranchPage from "./pages/BranchPage";
import AboutUsPage from "./pages/About";
import ContactUs from "./pages/ContactUs";
import DeputizePage from "./DeputizePage";
import MenuPage from "./MenuPage";
import Layout from "./layout/Layout";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import BranchDetails from "./pages/BranchDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/Deputize" element={<DeputizePage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Branch" element={<BranchPage />}>
          <Route path="/Branch/:id" element={<BranchDetails />} />
        </Route>
        <Route path="/Profile" element={<Profile />}>
          <Route path="/Profile/:id" element={<ProfileDetails />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
