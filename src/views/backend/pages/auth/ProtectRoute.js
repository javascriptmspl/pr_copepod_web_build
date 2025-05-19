// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const storedUserId = localStorage.getItem("username");

//   const isAuthenticated = storedUserId;

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/pages/login" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;


import React, { useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const storedUserId = localStorage.getItem("usertoken");
  const isAuthenticated = storedUserId;
  const location = useLocation();
  const [previousLocation] = useState(location);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : ( 
          <Redirect
            to={{
              pathname: "/pages/login",
              state: { from: previousLocation },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
