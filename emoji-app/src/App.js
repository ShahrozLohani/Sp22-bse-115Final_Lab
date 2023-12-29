import { Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './features/category/categoryThunks';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:categoryId" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
