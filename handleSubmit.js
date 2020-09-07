const App = {
  count: 0,

  initialize: () => {
    $("#taskItButton").click(() => {
      if ($("#enterTask").val()) {
        const task = $("#enterTask").val();
        $("#enterTask").val("");
        App.createTaskDiv(task);
      }
    });

    document
      .getElementById("enterTask")
      .addEventListener("keyup", function (event) {
        if (event.code === "Enter") {
          event.preventDefault();
          if ($("#enterTask").val()) {
            const task = $("#enterTask").val();
            $("#enterTask").val("");
            App.createTaskDiv(task);
          }
        }
      });
  },

  createTaskDiv: (task) => {
    const html = `
    <div class='taskDiv' id='taskDiv${App.count}'>
    <div class='task' contenteditable='true'>${task}</div>
    <button class='untaskItButton' id='untaskItButton${App.count}'>Untask it!</button>
    <button class='completedTaskButton' id='completedTaskButton${App.count}'>Tasked It!</button>
    </div>`;
    const buttonId = `#untaskItButton${App.count}`;
    const completedId = `#completedTaskButton${App.count}`;
    const taskDivId = `#taskDiv${App.count}`;

    App.count++;
    $("#lowerDiv").prepend(html);
    App.untaskButton(buttonId);
    App.completedTask(completedId, taskDivId, buttonId);
  },

  untaskButton: (buttonId) => {
    $(buttonId).click(() => {
      $(buttonId).parent("div").remove();
    });
  },

  completedTask: (completedId, taskDivId, buttonId) => {
    $(completedId).click(() => {
      $(taskDivId).css({ "text-decoration": "line-through" });
      const temp = $(taskDivId);
      $(temp).remove();
      $("#lowerDiv").append(temp);
      $(buttonId).hide();
      $(completedId).hide();
      const check = $("<span class='check'>&#10003;</span>");
      $(taskDivId).prepend(check);
      App.clearCompletedTasks();
    });
  },

  clearCount: 0,

  clickCount: 0,

  clearCompletedTasks: () => {
    if (App.clearCount === 0) {
      const clearButton = $(
        '<button id="clearButton"><span>Clear Completed Tasks</span></button>'
      );
      $("#footerDiv").append(clearButton);
      App.clearCount++;
    } else {
      $(clearButton).show();
    }
    if (App.clickCount === 0) {
      $("#clearButton").click(() => {
        const lowerDivChildren = Array.from($("#lowerDiv").children());
        lowerDivChildren.forEach((child) => {
          if (child.style.cssText) {
            $(child).remove();
            $(clearButton).hide();
          }
        });
      });
      App.clickCount++;
    }
  },
};

window.App = App;
