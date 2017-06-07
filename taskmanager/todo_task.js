angular.module('todoTaskApp', [])
  .controller('TodoTaskListController', function() {
    var todoTaskList = this;
    todoTaskList.todoTasks = [];
 
    todoTaskList.addTodoTask = function() {
      todoTaskList.todoTasks.push({text:todoTaskList.todoTaskText});
      todoTaskList.todoTaskText = '';
    };
 
    todoTaskList.archive = function() {
      var oldTodoTasks = todoTaskList.todoTasks;
      todoTaskList.todoTasks = [];
      angular.forEach(oldTodoTasks, function(todoTask) {
        if (!todoTask.done) todoTaskList.todoTasks.push(todoTask);
      });
    };
  });