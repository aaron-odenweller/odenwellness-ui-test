import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chores } from "./pages/Chores";
import { Grocery } from "./pages/Grocery";
import { Budget } from "./pages/Budget";
import { Recipes } from "./pages/Recipes";
import { RecipeDetails } from "./components/RecipeDetails";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/budget" component={Budget} />} />
          <Route exact path="/chores" component={Chores} />
          <Route exact path="/grocery" component={Grocery} />
          <Route exact path="/recipes" component={Recipes} />
          <Route path="/directory/:recipeId" component={RecipeDetails} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
