import './App.css';
import {Provider} from 'react-redux'
import React from 'react'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
function App() {
  

  return (
    <Provider store = {store}>
    <div className="App">
    <UserContainer/>  
    <HooksCakeContainer />
      <CakeContainer />
      <NewCakeContainer/>
      <IceCreamContainer/>
     <HooksIceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
