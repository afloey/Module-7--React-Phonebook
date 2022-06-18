import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Phonebook, Contact, About } from './components'
import './styles.css'
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { SignIn } from './components/SignIn/SignIn';


const temp_props = "Ashley's Phonebook"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/phonebook'>
          <Phonebook></Phonebook>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
				{/* Add a route for our impending Sign In page */}
				<Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
