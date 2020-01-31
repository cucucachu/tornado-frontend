import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewPersonForm from './components/NewPersonForm';
import SearchBox from './components/SearchBox';
//import Header from './components/Header';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

// function App() {
//   return (
//     <div>
//       <Header/>
//       <SearchBox/>
//       {/* <NewPersonForm/> */}
//     </div>
    
//   );
// }

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/SearchBox" component={SearchBox}/>
             <Route path="/newPersonForm" component={NewPersonForm}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
