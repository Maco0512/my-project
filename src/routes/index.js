import React from "react";
import HeroWrapper from "../components/HeroWrapper";
import HomePage from "../pages/Home";
import RegistrationPage from "../pages/Registration/Registration";
import ListPage from "../pages/List";
import ProfilePage from "../pages/Profile/Profile";
import DashboardPage from "../pages/Dashboard";
import UserPage from "../pages/User";
// Private routes.
const AdminOnly = () => <HeroWrapper title="Admin Only" />;
const Users = () => <UserPage />;
const Dashboard = () => <DashboardPage />;
const Manager = () => <HeroWrapper title="Manager" />;
const Customers = () => <HeroWrapper title="Customers" />;
const Registration = () => <RegistrationPage />;
const List = () => <ListPage />;
const Profile = () => <ProfilePage />;
// const Home = () => <HomePage/>;

export {
  AdminOnly,
  Users,
  Dashboard,
  Manager,
  Customers,
  Registration,
  List,
  Profile,
  // Home
};
