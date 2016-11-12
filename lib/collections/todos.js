Todos = new Mongo.Collection('todos');

Meteor.methods({
  todoInsert: function(todoProps) {
    // checks if there is a loggedIn user
    check(Meteor.userId(), String);
    // checks the type of data inserted matches our condition
    check(todoProps, {
      task: String,
      notes: String,
      status: String
    });

    // create a variable user object, to extend its properties
    var user = Meteor.user();

    // along with the data we got from the form, we added more data using _.extend() function
    var todo = _.extend(todoProps, {
      userId: user._id,
      createdBy: user.username,
      createdAt: new Date()
    });

    // finally, we save the insert function in todoId, and return it
    var todoId = Todos.insert(todo);

    return {
      _id: todoId
    };
  }
});
