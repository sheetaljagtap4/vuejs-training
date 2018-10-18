import Home from './components/Home';
import portfolio from './components/user/portfolio';
import stocks from './components/user/stocks';

export const routes = [{
  path: '',
  component: Home
},{
  path: '/portfolio',
  component: portfolio
},{
  path: '/stocks',
  component: stocks
}];
