
    let removedTask = null;
    let nextSibling = null;

    $('#addTask').click(function () {
      const task = $('#taskInput').val().trim();
      if (task !== '') {
        const newTask = $(`<li>${task}<span class="delete">🗑</span></li>`);
        $('#taskList').append(newTask);
        $('#taskInput').val('');
      }
    });

    $('#taskList').on('click', 'li', function (e) {
      if (!$(e.target).hasClass('delete')) {
        $(this).toggleClass('done');
      }
    });

    $('#taskList').on('click', '.delete', function (e) {
      e.stopPropagation();
      removedTask = $(this).parent();
      nextSibling = removedTask.next();
      removedTask.detach();
    });

    $('#undoTask').click(function () {
      if (removedTask) {
        if (nextSibling.length > 0) {
          removedTask.insertBefore(nextSibling);
        } else {
          $('#taskList').append(removedTask);
        }
        removedTask = null;
        nextSibling = null;
      }
    });