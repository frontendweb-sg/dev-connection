import Private from "./Private";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Auth = lazy(() => import("../auth"));
const Signin = lazy(() => import("../auth/Signin"));
const Signup = lazy(() => import("../auth/Signup"));
const VerifyEmail = lazy(() => import("../auth/EmailVerify"));
const ForgotPassword = lazy(() => import("../auth/ForgotPassword"));

// admin
const Admin = lazy(() => import("../admin"));
const Dashboard = lazy(() => import("../admin/Dashboard"));

// users
const Users = lazy(() => import("../admin/Users"));

const User = lazy(() => import("../user"));
const UserDashboard = lazy(() => import("../user/Dashboard"));
const UserProfile = lazy(() => import("../user/Profile"));
const UserSetting = lazy(() => import("../user/Setting"));
const UserPosts = lazy(() => import("../user/Posts"));
const UserPhotos = lazy(() => import("../user/Photos"));
const UserVideos = lazy(() => import("../user/Videos"));
/**
 * Routers component
 * @returns
 */
const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Auth  */}
        <Route path="auth" element={<Auth />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Admin */}
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* User */}
        <Route path="user" element={<User />}>
          <Route index element={<UserDashboard />} />
          <Route path="posts" element={<UserPosts />} />
          <Route path="photos" element={<UserPhotos />} />
          <Route path="videos" element={<UserVideos />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<UserSetting />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routers;
