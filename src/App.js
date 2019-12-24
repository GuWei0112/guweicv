import React from "react";
import "./App.css";
import Header from "./pages/header/Header.components";
import Footer from "./pages/footer/Footer.components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SkillPage from "./pages/skill/Skill.components";
import ContactPage from "./pages/contact/Contact.components";
import EducationPage from "./pages/education/Education.components";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Lorum iSpan</h1>
        <Footer />
        </div>
        <Switch>
          <Route exact path="/skills" component={SkillPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/education" component={EducationPage} />
          </Switch>
        </BrowserRouter>
  );
}

export default App;
