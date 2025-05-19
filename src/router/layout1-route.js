import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Pricing from "../views/backend/main/pricing";

//blog
import Blog from "../views/backend/blog/blog";
import BlogDetail from "../views/backend/blog/blog-details";

//App
import UserProfile from "../views/backend/app/usermanagement/userprofile";
import UserAccountSettingList from "../views/backend/app/usermanagement/useraccountsetting";
import manageUserProfile from "../views/backend/app/usermanagement/manageUser";

//Extrapages
import FAQ from "../views/backend/pages/faq";
import TermsOfUse from "../views/backend/pages/extrapages/termsOfUse";
import PrivacyPolicy from "../views/backend/pages/extrapages/privacyPolicy";
import AboutUs from "../views/backend/pages/about-us";
import HelpSupport from "../views/backend/pages/helpSupport";
import PricingPlan2 from "../views/backend/pages/pricing/pricing2";

//Category
import CategoryList from "../views/backend/category/category-list";

//Movie
import MovieList from "../views/backend/movie/movie-list";
import MovieDetails from "../views/backend/movie/Movie-details";

//new and popular
import NewAndPopular from "../views/backend/new&Popular/NewAndPopular";

//Show
import ShowList from "../views/backend/show/show-list";

// Select Profile
import ChosseProfile from "../views/backend/movie/SelectProfile";
// Home
import Homepage from "../views/backend/home/home";
import newPage from "../views/backend/WatchlistFavourite/WatchlistFavourite";
import ViewAll from "../views/backend/movie/ViewAll";
import SearchPage from "../views/backend/movie/SearchPage";
import AddProfile from "../views/backend/movie/AddProfile";
// import CreateProfile from "../views/backend/movie/Createprofle";
import Createprofile from "../views/backend/movie/Createprofle";

import ProtectedRoute from "../views/backend/pages/auth/ProtectRoute";
import EditProfile from "../views/backend/movie/EditProfile";
import SubUserProfile from "../views/backend/app/usermanagement/subUserProfile";
import EditSubUser from "../views/backend/app/usermanagement/editSubUser";
import UserInterest from "../views/backend/movie/interest/userInterest";
import Live from "../views/backend/live/Live";
import LiveDetails from "../views/backend/live/Live-Details";
import InterestPage from "../views/backend/interests/interest";

// page not found
 import Error404 from "../views/backend/pages/auth/errorSend"
import Footerstyle from "../components/partials/backend/footerstyle/footerstyle";
import ErrorSend from "../views/backend/pages/auth/errorSend";
import Setting from "../views/backend/movie/settingPage";

const Layout1Route = () => {
  let location = useLocation();

  const addToWatchList = (movie) => {
    // Add the movie to the watchlist here
    console.log("Adding movie to watchlist:", movie);
  };


  return (
    <>
    <TransitionGroup>
      <CSSTransition
        // key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          
          <Route path="/pricing-plan-1" component={Pricing} />

          {/* App */}
          <ProtectedRoute path="/manage" component={UserProfile} />
          <ProtectedRoute path="/manage-user" component={manageUserProfile} />
          <ProtectedRoute
            path="/subuser-profile/:id"
            component={SubUserProfile}
          />
          <Route exact path="/editSubUser" component={EditSubUser} />
          <Route exact path="/userInterest" component={UserInterest} />
          <Route path="/setting" component={UserAccountSettingList} />
          <ProtectedRoute path="/watchlist" component={newPage} />

          {/* Blog */}
          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetail} />

          {/* Extrapages */}
          <Route path="/settingPage" component={Setting} />
          <Route path="/faq" component={FAQ} />
          <Route path="/terms-of-service" component={TermsOfUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/help-support" component={HelpSupport} />
          <Route path="/pricing-plan-2" component={PricingPlan2} />
          <Route path="/view-all" component={ViewAll} />
          <ProtectedRoute path="/search-page" component={SearchPage} />
          <Route path="/add-profile" component={AddProfile} />
          <Route path="/creat-profile" component={Createprofile} />
          <Route path="/edit-profile" component={EditProfile} />

          {/* Select Profile */}
          <Route path="/select-profile" component={ChosseProfile} />

          {/* Category */}
          <Route
  path="/show-category"
  render={(routeProps) => <CategoryList {...routeProps} addToWatchList={addToWatchList} />}
/>

          {/* Movie */}
          {/* <ProtectedRoute path="/movie-details" component={AddMovie} /> */}
          <Route path="/movie-category" component={MovieList} />
          <ProtectedRoute path="/movie-details" component={MovieDetails} />

          {/* live  */}
          <Route path="/live" component={Live} />
          <ProtectedRoute path="/live-details" component={LiveDetails} />

          {/* new and popular  */}
          <Route path="/new-popular" component={NewAndPopular} />

          {/* new and popular  */}
        

          {/* Show */}
          <ProtectedRoute path="/show-details" component={ShowList} />

          {/* homepage */}
          <Route path="/" exact component={Homepage} />

          {/* Not found page */}
      <Route path="/*" component={ErrorSend} />//
         
         
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    
    <Footerstyle />
   

    </>
  );
};

export default Layout1Route;
