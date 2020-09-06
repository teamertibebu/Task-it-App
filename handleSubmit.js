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
    <input type='checkbox' id='completedTask${App.count}'></input>
    <label for='completedTask${App.count}'>Task Completed!</label>
    </div>`;
    const buttonId = `#untaskItButton${App.count}`;
    const checkboxId = `completedTask${App.count}`;

    App.count++;
    $("#lowerDiv").append(html);
    App.untaskButton(buttonId);
    App.completedTask(checkboxId, buttonId);
  },

  untaskButton: (buttonId) => {
    $(buttonId).click(() => {
      $(buttonId).parent("div").remove();
    });
  },

  completedTask: (checkboxId, buttonId) => {
    const cb = document.getElementById(checkboxId);
    $(cb).change(() => {
      if (cb.checked) {
        const temp = $(`#${checkboxId}`).parent("div");
        $(`#${checkboxId}`).parent("div").remove();
        $("#completedDiv").append(temp);
      }
    });
  },
};

window.App = App;
