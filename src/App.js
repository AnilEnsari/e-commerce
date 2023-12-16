import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productpage from './pages/Productpage';
import ProductListPage from './pages/ProductListPage';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import FormPage from './components/FormPage';
import LoginPage from './components/LoginPage';

import { api } from "../src/api/api"
import { useDispatch, useSelector } from 'react-redux';
import { getUserByVerify, setUser } from "../src/store/actions/userActions"

import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import axios from 'axios';
import { setProductList } from './store/actions/productActions';
import { setLoading } from './store/actions/loadingAction';
import ProductPageSingleProduct from './components/ProductPageSingleProduct';
import { BigShoppingCardPage } from './components/BigShoppingCardPage';

function App() {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  console.log("APP JS USER ", user)

  useEffect(() => {

    dispatch(setLoading(true))
    const token = localStorage.getItem("token");
    api.get("categories")
        .then((res) => {
          const categories = res.data;
          console.log("CATEGORI Basarılır cekıldı: ", categories)
          dispatch({ type: "SET_CATEGORY", payload: categories })
        }).catch(error => {
          console.log("CATEGORIES ERROR : ", error.message)
        })

    if (token !== null) {
      axios.defaults.headers.common["Authorization"] = token;
      console.log("Token mevcut, otomatik giriş yapılıyor ...");
      if (token) {
        dispatch(getUserByVerify())
      }
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/productlistpage" component={Productpage} />
          <Route path="/products" component={ProductListPage} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/signup" component={FormPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/shoppingcard" component={BigShoppingCardPage} />
          <Route path="/:categoryid/:productid/:productNameSlug" component={ProductPageSingleProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;