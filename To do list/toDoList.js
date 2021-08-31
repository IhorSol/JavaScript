var id = 0;
let btnClick = document.getElementById("add-btn");

btnClick.onclick = function() {
  let task = document.getElementById("task-descr").value;
  let taskInsert = '<li id='+ id +'  ondblclick="removeTask('+id+')">' + task + '</li>';
  document.getElementById("all-tasks").insertAdjacentHTML("beforeend", taskInsert);
  id++;
}

function removeTask(id) {
  document.getElementById(id).remove();
}
