Template.todoSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var todo = {
      task: e.target[0].value,
      notes: e.target[1].value,
      status: e.target[2].value
    };

    todo._id = Todos.insert(todo);
    Router.go('todoPage', todo);
  }
});
