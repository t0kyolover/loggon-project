import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/utils/scrollToTop";
import { BackendURL } from "./component/utils/backendURL";

import { MyProfile } from "./pages/user/myProfile";
import { UserProfile } from "./pages/user/userProfile";
import { SingleDeal } from "./pages/deal/singleDeal";
import { PostDeal } from "./pages/deal/postDeal";
import { SearchResults } from "./pages/utils/searchResults";
import { FeedGames } from "./pages/game/feedGames";
import { FeedDeals } from "./pages/deal/feedDeals";
import { PasswordRecovery } from "./pages/utils/passwordRecovery";
import { PrivacyPolicy } from "./pages/utils/privacyPolicy";

import injectContext from "./store/appContext";

import "../styles/fonts.css";
import "../styles/button.css";
import "../styles/styles.css";

import { Navbar } from "./component/navbar/navbar";
import { Footer } from "./component/utils/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<FeedDeals />} path="/" />
            <Route element={<MyProfile />} path="/myprofile/:username" />
            <Route element={<SingleDeal />} path="/post/:id" />
            <Route element={<FeedGames />} path="/games" />
            <Route
              element={<SearchResults />}
              path="/search_results/:keyword"
            />
            <Route element={<PostDeal />} path="/postdeal/user/:username" />
            <Route element={<UserProfile />} path="/profile/:username" />
            <Route
              element={<PasswordRecovery />}
              path="/password_recovery/:username"
            />
            <Route element={<PrivacyPolicy />} path="/privacy_policy" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
