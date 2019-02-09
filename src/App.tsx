import * as React from "react";
// @ts-ignore
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import MovieList from "./containers/MovieList/MovieList";
import Header from "./components/Header/Header";
import MovieDetail from "./containers/MovieDetail/MovieDetail";


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
              <Header/>
              <Switch>
                <Route exact path={'/'} render={() => {
                 return <Redirect to="/movies" />
                }}/>
                <Route exact path={'/movies'} component={MovieList}/>
                <Route exact path={'/movies/:id'} component={MovieDetail}/>
              </Switch>

          </React.Fragment>
        </BrowserRouter>

    );
  }
}
export default App;
