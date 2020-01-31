import React from "react";
import "./App.css";
import Header from "./pages/header/Header.components";
import Footer from "./pages/footer/Footer.components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SkillPage from "./pages/skill/Skill.components";
import AboutPage from "./pages/about/About.components";
import ProjPage from './pages/proj/Project.components'
import IndexPage from "./pages/index/Index.components";
function App() { 
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Gu Wei CV</h1>
        <hr />
        <Footer />
      </div>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/skills" component={SkillPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/proj" component={ProjPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
