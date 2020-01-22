(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'タスク1',
        isDone: false
      }, {
        title: 'タスク2',
        isDone: false
      }, {
        title: 'タスク3',
        isDone: true
      }]
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = "";
      },
      deleteItem: function(index) {
        if (confirm('リストを削除しますがよろしいですか？')) {
          this.todos.splice(index, 1);
        }
      }
    },
    computed: {
      remaining: function() {
        var items = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
        return items.length;
      }
    }
  });
})();