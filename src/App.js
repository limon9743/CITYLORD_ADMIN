import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllLandlord from "./pages/AllLandlord/AllLandlord";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import LandlordFormRenter from "./components/landlordFormRenter/landlordFormRenter";
import LandlordFormSeller from "./components/landlordFormSeller/landlordFormSeller";
import ToRent from "./components/AddProperty/ToRent/ToRent";
import AllProperties from "./pages/AllProperties/Page/AllProperties";
import DialogBox from "./pages/DialogBox/DialogBox";
import ForSale from "./components/AddProperty/ForSale/ForSale";
import Room from "./components/AddProperty/Room/Room";
import AllPropertiesToRent from "./pages/AllPropertiesToRent/Page/AllPropertiesToRent";
import AllPropertiesToSale from "./pages/AllPropertiesToSale/Page/AllPropertiesToSale";
import AllRooms from "./pages/AllRooms/Page/AllRooms";
import ArrangeViewing from "./pages/ArrangeViewing/Page/ArrangeViewing";
import FormWithPropertyBrief from "./pages/ArrangeViewing/Components/FormWithPropertyBrief/FormWithPropertyBrief";
import ScrollToTop from "./pages/ScrollToTop";
import RegisteredViewing from "./pages/RegisteredViewing/Page/RegisteredViewing";
import RequestedViewing from "./pages/RequestedViewing/Page/RequestedViewing";
import HtmlEditor from "./components/Editor/HtmlEditor";
import PropertyDetailsForSale from "./pages/PropertyDetailsForSale/Page/PropertyDetailsForSale";
import Contractor from "./pages/Contractor/Page/Contractor";
import DetailsPage from "./pages/Contractor/Components/DetailsPage/DetailsPage";
import AddContractorForm from "./pages/Contractor/Components/AddContractorForm/AddContractorForm";

import ActiveTenants from "./pages/ActiveTenants/Page/ActiveTenants";
import PotentialTenants from "./pages/PotentialTenants/Page/PotentialTenants";
import AllTenants from "./pages/AllTenants/Page/AllTenants";
import Employees from "./pages/Employees/Page/Employees";
import AddEmployeeForm from "./pages/AddEmployeeForm/Page/AddEmployeeForm";
import Invoice from "./pages/Invoice/Page/Invoice";
import ActiveLandlord from "./pages/ActiveLandlord/Page/ActiveLandlord";
import PotentialLandlord from "./pages/PotentialLandlord/Page/PotentialLandlord";
import ActiveSellerLandlord from "./pages/ActiveSellerLandlord/Page/ActiveSellerLandlord";
import PotentialSellerLandlord from "./pages/PotentialSellerLandlord/Page/PotentialSellerLandlord";
import ActiveTenantForm from "./pages/ActiveTenants/Components/ActiveTenantForm/ActiveTenantForm";
import ArrangeViewingFormPotentialTenants from "./pages/PotentialTenants/Components/ArrangeViewingFormPotentialTenants/ArrangeViewingFormPotentialTenants";
import FormForEdit from "./pages/PotentialTenants/Components/FormForEdit/FormForEdit";
import FormForContractorEdit from "./pages/Contractor/Components/FormForContractorEdit/FormForContractorEdit";
import AddPotentialTenantsFormAdmin from "./pages/PotentialTenants/Components/AddPotentialTenantsFormAdmin/AddPotentialTenantsFormAdmin";
import FormForEditActiveTenants from "./pages/ActiveTenants/Components/FormForEditActiveTenants/FormForEditActiveTenants";
import ContractorPersonalPage from "./pages/ContractorPersonalPage/Pages/ContractorPersonalPage";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import NotificationsPage from "./pages/ContractorPersonalPage/Components/NotificationsPage/NotificationsPage";
import ContractorSideBar from "./pages/ContractorPersonalPage/Components/ContractorSideBar/ContractorSideBar";
import ContractorHomePage from "./pages/ContractorPersonalPage/Pages/ContractorHomePage/ContractorHomePage";
import ContractorNotificationPage from "./pages/ContractorPersonalPage/Pages/ContractorNotificationPage/ContractorNotificationPage";
import NotificationDetails from "./pages/ContractorPersonalPage/Components/NotificationDetails/NotificationDetails";
import ContractorNotificationDetailsPage from "./pages/ContractorPersonalPage/Pages/ContractorNotificationDetailsPage/ContractorNotificationDetailsPage";
import Login from "./pages/Login/Page/Login";
import LoginForm from "./pages/Login/Components/LoginForm/LoginForm";
import EntryButtons from "./pages/WelcomePage/Components/EntryButtons/EntryButtons";
import MessageToContractorForm from "./pages/Contractor/Components/MessageForm/MessageToContractorForm";
import ArrangeViewingFormForEdit from "./pages/ArrangeViewing/Components/ArrangeViewingFormForEdit/ArrangeViewingFormForEdit";

const App = () => {
  const [isContractor, setIsContractor] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isEmployee, setIsEmployee] = useState(false);
  const [isLandlord, setIsLandlord] = useState(false);
  const [isTenant, setIsTenant] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAdmin = () => {
    setIsAdmin(true);
  };
  const handleContractor = () => {
    setIsContractor(true);
  };
  // const handleEmployee = () => {
  //   setIsEmployee(true);
  // };
  // const handleLandlord = () => {
  //   setIsLandlord(true);
  // };
  // const handleTenant = () => {
  //   setIsTenant(true);
  // };

  return (
    <Router>
      <ScrollToTop />
      {/* <Routes>
        <Route path="/" element={<LoginForm setAdmin={handleAdmin} />}></Route>
      </Routes> */}
      {/* <Routes>
        <Route
          path="/"
          element={
            <EntryButtons
              setAdmin={handleAdmin}
              setContractor={handleContractor}
            />
          }
        ></Route>
      </Routes> */}

      {isContractor && (
        <Routes>
          <Route path="/contractor/*" element={<ContractorHomePage />}>
            <Route path="notifications" element={<NotificationsPage />}></Route>
            <Route
              path="notifications/details"
              element={<NotificationDetails />}
            ></Route>
          </Route>
        </Routes>
      )}
      {/* {!isLoggedIn && (
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      )} */}

      {isAdmin && (
        <>
          <Topbar />
          <div className="app-container">
            <Sidebar />

            {/* {window.location.pathname === "/contractor/homepage" ? (
          !(<Sidebar />)
        ) : window.location.pathname === "/contractor/notifications" ? (
          !(<Sidebar />)
        ) : window.location.pathname === "/contractor/notifications/details" ? (
          !(<Sidebar />)
        ) : window.location.pathname === "/login" ? (
          !(<Sidebar />)
        ) : window.location.pathname === "/login" ? (
          !(<Topbar />)
        ) : (
          <Sidebar />
        )} */}

            {/* Contractor Personal Page Start*/}

            {/* <Routes>
          <Route
            path="/contractor/notifications"
            element={<NotificationsPage />}
          ></Route>
        </Routes> */}

            {/* Contractor Personal Page End*/}

            <Routes>
              {/* <Route element={<Sidebar />}></Route> */}

              <Route path="/" element={<Home />}></Route>
              <Route path="/landlords" element={<AllLandlord />}></Route>
              <Route path="/landlord/:landlordsId" element={<User />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/product/:productId" element={<Product />}></Route>
              <Route path="/newproduct" element={<NewProduct />}></Route>
              <Route
                path="/landlordrenter"
                element={<LandlordFormRenter />}
              ></Route>
              <Route
                path="/landlordseller"
                element={<LandlordFormSeller />}
              ></Route>
              <Route
                path="/allproperties/torent"
                element={<AllPropertiesToRent />}
              ></Route>
              <Route
                path="/allproperties/forsale"
                element={<AllPropertiesToSale />}
              ></Route>
              <Route path="/allproperties/room" element={<AllRooms />}></Route>
              <Route path="/allproperties" element={<AllProperties />}></Route>
              <Route
                path="/allproperties/torent/add"
                element={<ToRent />}
              ></Route>
              <Route
                path="/allproperties/forsale/add"
                element={<ForSale />}
              ></Route>
              <Route path="/allproperties/room/add" element={<Room />}></Route>
              {/* <Route
            path="/landlordlists/dialogbox"
            element={<DialogBox />}
          ></Route> */}
              <Route
                path="/arrange-viewing"
                element={<ArrangeViewing />}
              ></Route>
              <Route
                path="/arrange-viewing/:propertyPostCode"
                element={<FormWithPropertyBrief />}
              ></Route>
              {/* <Route
            path="/tenants/potential/arrange-viewing/:contact"
            element={<ArrangeViewingFormPotentialTenants />}
          ></Route> */}
              <Route
                path="/tenants/potential/arrange-viewing/:id"
                element={<ArrangeViewingFormPotentialTenants />}
              ></Route>
              <Route
                path="/registered-viewing"
                element={<RegisteredViewing />}
              ></Route>
              <Route
                path="/registered-viewing/details/:id"
                element={<ArrangeViewingFormForEdit />}
              ></Route>
              <Route
                path="/requested-viewing"
                element={<RequestedViewing />}
              ></Route>
              <Route
                path="/allproperties/forsale/details/:postcode"
                element={<PropertyDetailsForSale />}
              ></Route>
              <Route path="/contractors" element={<Contractor />}></Route>
              <Route
                path="/contractors/edit/:id"
                element={<FormForContractorEdit />}
              ></Route>
              <Route
                path="/contractors/addform"
                element={<AddContractorForm />}
              ></Route>
              <Route path="/tenants" element={<AllTenants />}></Route>
              <Route path="/tenants/active" element={<ActiveTenants />}></Route>
              <Route
                path="/tenants/potential"
                element={<PotentialTenants />}
              ></Route>
              <Route
                path="/tenants/potential/admin/add"
                element={<AddPotentialTenantsFormAdmin />}
              ></Route>
              <Route path="/employees" element={<Employees />}></Route>
              <Route
                path="/employees/addemployee"
                element={<AddEmployeeForm />}
              ></Route>
              <Route path="/invoice" element={<Invoice />}></Route>
              <Route
                path="/landlord/active"
                element={<ActiveLandlord />}
              ></Route>
              <Route
                path="/landlord/potential"
                element={<PotentialLandlord />}
              ></Route>
              <Route
                path="/landlord/seller/active"
                element={<ActiveSellerLandlord />}
              ></Route>
              <Route
                path="/landlord/seller/potential"
                element={<PotentialSellerLandlord />}
              ></Route>
              <Route
                path="/tenants/active/add"
                element={<ActiveTenantForm />}
              ></Route>
              <Route
                path="/tenants/potential/edit/:id"
                element={<FormForEdit />}
              ></Route>
              <Route
                path="/tenants/active/edit/:id"
                element={<FormForEditActiveTenants />}
              ></Route>
              <Route
                path="/contractors/message/:id"
                element={<MessageToContractorForm />}
              ></Route>
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
};

export default App;
