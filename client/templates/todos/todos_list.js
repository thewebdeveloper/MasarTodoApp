var todosData = [
  {
    title: 'Go to the market',
    completed: false,
    notes: 'I need to go to market and buy the list on my paper'
  },
  {
    title: 'Pick my daughter',
    completed: false,
    notes: 'Will pick my daughter from school at 2:00 PM'
  },
  {
    title: 'Wash my car',
    completed: false,
    notes: 'Afternoon, I will wash my car in the loby'
  }
];

Template.todosList.helpers({
  todos: todosData
});
