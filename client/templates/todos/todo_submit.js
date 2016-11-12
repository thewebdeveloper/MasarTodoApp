Template.todoSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var todo = {
      task: e.target[0].value,
      notes: e.target[1].value,
      status: e.target[2].value
    };

    Meteor.call('todoInsert', todo, function(error, result) {
      if (error)
        return alert(error.reason);

      // the second argument takes us to the todoPage which is just created, by adding the id
      Router.go('todoPage', {_id: result._id});
    });
  }
});
