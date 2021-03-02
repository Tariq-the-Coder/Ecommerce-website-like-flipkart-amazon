import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import Navbar from './componants/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
          <Navbar />
          <main>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/search/name/:name?" component={SearchScreen} exact ></Route>
            <Route path="/search/category/:category" component={SearchScreen} exact ></Route>
            <Route path="/search/category/:category/name/:name" component={SearchScreen} exact ></Route>
            <Route exact path="/" component={HomeScreen} ></Route>
          </main>
          <footer className="row center"> All right reserved</footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
