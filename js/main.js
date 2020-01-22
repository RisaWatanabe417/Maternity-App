(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'task1',
        'task2',
        'task3'
      ]
    },
    methods: {
      addItem: function() {
        this.todos.push(this.newItem);
        this.newItem = "";
      },
      deleteItem: function(index) {
        if (confirm('リストを削除しますがよろしいですか？')) {
          this.todos.splice(index, 1);
        }
      }
    }
  });
})();