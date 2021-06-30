import React from "react";
import HeroWrapper from "../components/HeroWrapper";
import HomePage from "../pages/Home";
import FossilRegistrationPage from "../pages/Registration/FossilRegistration";
import CollectionRegistrationPage from "../pages/Registration/CollectionRegistration";
import TreasuryRegistrationPage from "../pages/Registration/TreasuryRegistration";
//Requests
import Request from "../pages/Request";
import RequestList from "../pages/RequestList";
// import FossilListPage from "../pages/List/FossilList";
import ProfilePage from "../pages/Profile/Profile";
import DashboardPage from "../pages/Dashboard";
import UserPage from "../pages/User";
// Private routes.
const AdminOnly = () => <HeroWrapper title="Admin Only" />;
const Users = () => <UserPage />;
const Dashboard = () => <DashboardPage />;
const Manager = () => <HeroWrapper title="Manager" />;
const Customers = () => <HeroWrapper title="Customers" />;
const CollectionRegistration = () => <CollectionRegistrationPage />;
const FossilRegistration = () => <FossilRegistrationPage />;
const TreasuryRegistration = () => <TreasuryRegistrationPage />;
// const Request = () => <RequestPage />;
// const RequestList = () => <RequestListPage />;
const Profile = () => <ProfilePage />;
// const Home = () => <HomePage/>;

export {
  AdminOnly,
  Users,
  Dashboard,
  Manager,
  Customers,
  CollectionRegistration,
  FossilRegistration,
  TreasuryRegistration,
  // Request,
  RequestList,
  Profile,
  // Home
};
