Router.configure({
  layoutTemplate: 'layout', // the layout for our whole app
  loadingTemplate: 'loading', // shows loading page while loading
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('todos');
  }
});

Router.route('/', {name: 'todosList'});

Router.route('/todos/:_id', {
  name: 'todoPage',
  data: function() {
    return Todos.findOne(this.params._id);
  }
});

Router.route('/submit', {name: 'todoSubmit'});

// preventing non-logged users from acccessing the form page.
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'todoSubmit'});
