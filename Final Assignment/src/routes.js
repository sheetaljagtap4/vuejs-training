import Home from './components/Home';
import load from './components/user/load';
import portfolio from './components/user/portfolio';
import stocks from './components/user/stocks';


export const routes = [{
  path: '',
  component: Home
},{
  path: '/load',
  component: load
},{
  path: '/portfolio',
  component: portfolio
},{
  path: '/stocks',
  component: stocks
}];