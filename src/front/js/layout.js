import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { MyProfile } from "./pages/myProfile";
import { UserProfile } from "./pages/userProfile";
import { SingleDeal } from "./pages/singleDeal";
import { PostDeal } from "./pages/postDeal";
import { SearchResults } from "./pages/searchResults";
import { Games } from "./pages/games";
import { Feed } from "./pages/feed";
import { PasswordRecovery } from "./pages/passwordRecovery";
import { PrivacyPolicy } from "./pages/privacyPolicy";

import injectContext from "./store/appContext";

import "/workspaces/loggon-dak-final-project-v2/src/front/styles/fontNove.css"
import "/workspaces/loggon-dak-final-project-v2/src/front/styles/button.css"


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Feed />} path="/" />
                        <Route element={<MyProfile />} path="/myprofile/:username" />
                        <Route element={<SingleDeal />} path="/post/:id" />
                        <Route element={<Games />} path="/games" />
                        <Route element={<SearchResults />} path="/search/results" />
                        <Route element={<PostDeal />} path="/postdeal/:username" />
                        <Route element={<UserProfile />} path="/profile/:username" />
                        <Route element={<PasswordRecovery />} path="/password_recovery" />
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
