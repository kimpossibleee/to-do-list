function addTask() {
    let input = document.querySelector("#taskInput");
    let task = input.value;
    if (task === "") {
      return;
    }

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

    let label = document.createElement("label");
    label.innerHTML = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      li.parentNode.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    document.querySelector("#taskList").appendChild(li);

    input.value = "";
  }
