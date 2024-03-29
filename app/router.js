import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('calculator');
  this.route('home');
  this.route('list');
  this.route('login');
  this.route('register');
});

export default Router;
