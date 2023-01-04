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
const AdminDashboard = lazy(() => import("../admin/Dashboard"));
const AdminCategory = lazy(() => import("../admin/Categories"));
const AdminDesignation = lazy(() => import("../admin/Designations"));
const AdminSkills = lazy(() => import("../admin/Skills"));
const AdminPosts = lazy(() => import("../admin/Posts"));
const AdminUsers = lazy(() => import("../admin/Users"));
const AdminProfile = lazy(() => import("../admin/Profile"));
const AdminSettings = lazy(() => import("../admin/Settings"));

// users

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
          <Route index element={<AdminDashboard />} />
          <Route path="categories" element={<AdminUsers />} />
          <Route path="designations" element={<AdminDesignation />} />
          <Route path="skills" element={<AdminSkills />} />
          <Route path="posts" element={<AdminPosts />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<AdminSettings />} />
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
