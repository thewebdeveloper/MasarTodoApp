if (Todos.find().count() === 0) {
  Todos.insert({
    title: 'Go to the market',
    completed: false,
    notes: 'I need to go to market and buy the list on my paper'
  });

  Todos.insert({
    title: 'Pick my daughter',
    completed: false,
    notes: 'Will pick my daughter from school at 2:00 PM'
  });
}
