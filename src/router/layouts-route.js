import { Switch, Route } from "react-router-dom";
import Layout1 from "../layouts/backend/layout1";
import BlankLayout from "../layouts/blanklayout";
import ProtectedRoute from "../views/backend/pages/auth/ProtectRoute";
import LoginComponent from "../views/backend/pages/auth/login";
import ProtectedComponent from "../views/backend/home/home";
import Error404 from "../views/backend/pages/auth/error404";

const LayoutsRoute = (props) => {
  const isAuthenticated = false;
  return (
    <Switch>
  <Route path="/pages" component={BlankLayout} />
  <ProtectedRoute
    path="/protected-route"
    component={ProtectedComponent}
    isAuthenticated={isAuthenticated}
  />
 

  <Route path="/login" component={LoginComponent} />
  <Route path="/" component={Layout1} />
</Switch>

  );
};

export default LayoutsRoute;
