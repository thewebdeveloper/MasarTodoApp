Template.todoSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var todo = {
      task: e.target[0].value,
      notes: e.target[1].value,
      status: e.target[2].value
    };

    Meteor.call('todoInsert', todo, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

      // show this result but route anyway
      if (result.todoExists)
        alert('This task has been already been added');

      // the second argument takes us to the todoPage which is just created, by adding the id
      Router.go('todoPage', {_id: result._id});
    });
  }
});
