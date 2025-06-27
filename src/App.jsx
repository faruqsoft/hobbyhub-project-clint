import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AllGroups from "./pages/AllGroups";
import MyGroups from "./pages/MyGroups";
import CreateGroup from "./pages/CreateGroup";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from './routes/PrivateRoute';
import GroupDetails from "./pages/GroupDetails";
import UpdateGroup from './pages/UpdateGroup';
import NotFound from './pages/NotFound';

import 'react-tooltip/dist/react-tooltip.css';
import OffersPage from "./pages/OffersPage";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="groups" element={<AllGroups />} />
        
        <Route path="myGroups" element={<MyGroups />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound/>} />

        <Route path="createGroup" element={<PrivateRoute><CreateGroup /></PrivateRoute>} />
        <Route path="myGroups" element={<PrivateRoute><MyGroups /></PrivateRoute>} />
        <Route path="/groups" element={<AllGroups />} />
         <Route path="/offers" element={<PrivateRoute> <OffersPage/></PrivateRoute> } />

        <Route path="/group/:id" element={
            <PrivateRoute>
              <GroupDetails/>
            </PrivateRoute>
          } />
       </Route>

      <Route path="/myGroups" element={
        <PrivateRoute>
          <MyGroups />
        </PrivateRoute>
      } />
     


        <Route path="/updateGroup/:id" element={
          <PrivateRoute>
            <UpdateGroup/>
          </PrivateRoute>
        } />

           {/* Global Tooltip with animation and custom style */}
     
    </Routes>
  );
}

export default App;
