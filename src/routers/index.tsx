import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppRoutes } from "../util/AppRoutes";

//const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Signout = lazy(() => import("../auth/Signout"));
const Auth = lazy(() => import("../auth"));
const Signin = lazy(() => import("../auth/Signin"));
const Signup = lazy(() => import("../auth/Signup"));
const VerifyEmail = lazy(() => import("../auth/EmailVerify"));
const ForgotPassword = lazy(() => import("../auth/ForgotPassword"));

const Developers = lazy(() => import("../pages/Developers"));

// admin
const Admin = lazy(() => import("../admin"));
const Dashboard = lazy(() => import("../admin/Dashboard"));

// users
const Users = lazy(() => import("../admin/Users"));

const User = lazy(() => import("../user"));
const UserDashboard = lazy(() => import("../user/Dashboard"));
const UserFriends = lazy(() => import("../user/Friends"));
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
      <Route path={AppRoutes.root}>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Navigate to="auth" />} />
        <Route path={AppRoutes.about} element={<About />} />
        <Route path={AppRoutes.contact} element={<Contact />} />
        <Route path={AppRoutes.developers} element={<Developers />} />
        <Route path={AppRoutes.authSignout} element={<Signout />} />

        {/* Auth  */}
        <Route path={AppRoutes.auth} element={<Auth />}>
          <Route index element={<Signin />} />
          <Route path={AppRoutes.authSignup} element={<Signup />} />
          <Route path={AppRoutes.authVerifyEmail} element={<VerifyEmail />} />
          <Route
            path={AppRoutes.authForgotPassword}
            element={<ForgotPassword />}
          />
        </Route>

        {/* Admin */}
        <Route path={AppRoutes.admin} element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* User */}
        <Route path={AppRoutes.user} element={<User />}>
          <Route index element={<UserDashboard />} />
          <Route path={AppRoutes.userPosts} element={<UserPosts />} />
          <Route path={AppRoutes.userFriends} element={<UserFriends />} />
          <Route path={AppRoutes.userPhotos} element={<UserPhotos />} />
          <Route path={AppRoutes.userVideos} element={<UserVideos />} />
          <Route path={AppRoutes.userProfile} element={<UserProfile />} />
          <Route path={AppRoutes.userSettings} element={<UserSetting />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routers;
