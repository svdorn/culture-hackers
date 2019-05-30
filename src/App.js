import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
// import Header and Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import routes
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import "./App.css";

const palette = {
    primary: {
        main: "#17c8fe"
    },
    secondary: {
        main: "#000000"
    }
};

const theme = createMuiTheme({ palette });

const App = () => (
    <Router>
        <ScrollToTop>
            <MuiThemeProvider theme={theme}>
                <Header />

                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                </div>

                <Footer />
            </MuiThemeProvider>
        </ScrollToTop>
    </Router>
);

export default App;
