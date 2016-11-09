if (Todos.find().count() === 0) {
  Todos.insert({
    task: 'Go to the market',
    status: 'Pending',
    notes: 'I need to go to market and buy the list on my paper'
  });

  Todos.insert({
    task: 'Pick my daughter',
    status: 'Done',
    notes: 'Will pick my daughter from school at 2:00 PM'
  });
}
