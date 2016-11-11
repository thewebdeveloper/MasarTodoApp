Todos = new Mongo.Collection('todos');

Todos.allow({
  insert: function(userId, doc) {
    return !! userId; // only allow posting if you are logged in
  }
});
