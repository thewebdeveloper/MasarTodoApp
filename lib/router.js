Router.configure({
  layoutTemplate: 'layout', // the layout for our whole app
  loadingTemplate: 'loading', // shows loading page while loading
  waitOn: function() {
    return Meteor.subscribe('todos');
  }
});

Router.route('/', {name: 'todosList'});
