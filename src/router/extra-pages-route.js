import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../views/backend/pages/auth/ProtectRoute";
import { components } from "react-select";

// Lazy load the view components
const SignUp = lazy(() => import("../views/backend/pages/auth/signup"));
const Login = lazy(() => import("../views/backend/pages/auth/login"));
const Video = lazy(() => import("../views/backend/pages/video"));
const RecoverPswd = lazy(() =>
  import("../views/backend/pages/auth/recover-pswd")
);
const VerifyOtp = lazy(() => import("../views/backend/pages/auth/verify-otp"));
const ResetPassword = lazy(() =>
  import("../views/backend/pages/auth/resetPassword")
);
const InterestPage = lazy(() => import("../views/backend/interests/interest"));
const Error404 = lazy(() => import("../views/backend/pages/auth/error404"));

const ExtraPages = () => {
  return (
    <>
          <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <ProtectedRoute path="/pages/watch-video" component={Video} />
          <Route path="/pages/sign-up" component={SignUp} />
          <Route path="/pages/login" component={Login} />
          <Route path="/pages/recover-pswd" component={RecoverPswd} />
          <Route path="/pages/verify-otp" component={VerifyOtp} />
          <Route path="/pages/resetpassword" component={ResetPassword} />
          <Route path="/pages/interest" component={InterestPage} />

          <Route path="/pages" component={Error404} />
        </Switch>
      </Suspense>
    </>
  );
};

export default ExtraPages;
