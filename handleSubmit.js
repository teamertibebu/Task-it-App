const App = {
  count: 0,

  initialize: () => {
    $("#taskItButton").click(() => {
      const task = $("#enterTask").val();
      $("#enterTask").val("");
      App.createTaskDiv(task);
    });
  },

  createTaskDiv: (task) => {
    const html = `
    <div class='taskDiv' id='taskDiv${App.count}'>
    <div class='task'>${task}</div>
    <button class='untaskItButton' id='untaskItButton${App.count}'>Untask it!</button>
    <input type='checkbox' class='completedTask'></input>
    <label for='completedTask'>Task Completed!</label>
    </div>`;
    const buttonId = `#untaskItButton${App.count}`;

    App.count++;
    $("#lowerDiv").append(html);
    App.untaskButton(buttonId);
    App.completedTask();
  },

  untaskButton: (buttonId) => {
    $(buttonId).click(() => {
      $(buttonId).parent("div").remove();
    });
  },

  completedTask: () => {
    $('input[type="checkbox"]').click(() => {
      console.log("outside");
      if ($(this).prop("checked") == true) {
        console.log("Checkbox is checked.");
      } else if ($(this).prop("checked") == false) {
        console.log("Checkbox is unchecked.");
      }
    });
  },
};

window.App = App;
