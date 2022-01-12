# GA-LIST Frontend

##### Table of Contents  
[Headers](#headers)  
[Emphasis](#emphasis)  
...snip...    
<a name="headers"/>
## Headers

| Components | Links to Code | Description |
| --- | --- | --- |
| `App`| [`App`](https://github.com/SEI-1025/mern-authentication-frontend#app-component) | The component that manages the entire app |
| `Signup`| [`Signup`](https://github.com/SEI-1025/mern-authentication-frontend/blob/main/docs/signup.md) | Allow the user to signup |
| `Login`| [`Login`](https://github.com/SEI-1025/mern-authentication-frontend/blob/main/docs/login.md) | Allows the user to login to the app |
| `Navbar`| [`Navbar`](https://github.com/SEI-1025/mern-authentication-frontend/blob/main/docs/navbar.md) | A navbar that displays the links based on if the user is logged in or not |
| `Profile`| [`Profile`](https://github.com/SEI-1025/mern-authentication-frontend/blob/main/docs/profile.md) | A component that displays the user profile information |
| `setAuthToken`| [`setAuthToken`](https://github.com/SEI-1025/mern-authentication-frontend/blob/main/docs/setAuthToken.md) | A utility function that adds a token to the `Authentication` header to manage current user |
| `Post Form`| [`PostForm`](https://github.com/kyleisme14/ga-list/blob/main/src/components/PostForm.js) | A component that allows posting to the database. |
| `Jobs`| [`JobsContainer`](https://github.com/kyleisme14/ga-list/blob/main/src/components/JobContainer.js) | A component displays the jobs from the database. |
| `Footer`| [`Footer`](https://github.com/SEI-1025/mern-authentication-frontend/blob/main/docs/other-components.md#footer) | A footer that goes on each component |
| `HomePage`| [`HomePage`](https://github.com/kyleisme14/ga-list/blob/main/src/components/HomePage.js) | A welcome page for the user |

### `App` Component

### Imports for `App`

```jsx
// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Sale from "./components/Sale";
import SaleContainer from "./components/SaleContainer";
import Job from "./components/Job";
import JobContainer from "./components/JobContainer";
import HomePage from "./components/HomePage";
import JobPostForm from "./components/PostForm";
import SalePostForm from "./components/SalePostForm";
import ForumPostForm from "./components/ForumPostForm";
```

### `useState` inside `App`

```jsx
function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
}
```

### `PrivateRoute`

```jsx
const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}
```

### `useEffect` inside `App`

```jsx
useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);
```

### `nowCurrentUser`

```jsx
const nowCurrentUser = (userData) => {
    console.log('===> nowCurrentUser is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
}
```

### `handleLogout`

```jsx
const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
        // remove token for localStorage
        localStorage.removeItem('jwtToken');
        setCurrentUser(null);
        setIsAuthenticated(false);
    }
}
```

### `return` of `App`

```jsx
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={HomePage} />
          <Route path="/sales" component={SaleContainer} />
          <Route path="/jobs" component={JobContainer} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/sales/:id" element={< Sale />} />
          <Route path="/jobpostform" component={JobPostForm} />
          <Route path="/salepostform" component={SalePostForm} />
          <Route path="/forumpostform" component={ForumPostForm} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
```

### Finished

```jsx
// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Sale from "./components/Sale";
import SaleContainer from "./components/SaleContainer";
import Job from "./components/Job";
import JobContainer from "./components/JobContainer";
import HomePage from "./components/HomePage";
import JobPostForm from "./components/PostForm";
import SalePostForm from "./components/SalePostForm";
import ForumPostForm from "./components/ForumPostForm";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem('jwtToken');
  // console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }} />
}


function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      // console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    // console.log('===> nowCurrentUser is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={HomePage} />
          <Route path="/sales" component={SaleContainer} />
          <Route path="/jobs" component={JobContainer} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/sales/:id" element={< Sale />} />
          <Route path="/jobpostform" component={JobPostForm} />
          <Route path="/salepostform" component={SalePostForm} />
          <Route path="/forumpostform" component={ForumPostForm} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

```
