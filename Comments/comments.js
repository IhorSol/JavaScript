let btnForm = document.querySelector("#comments-form button");
let countComments = 0;
let idComment = 0;

btnForm.onclick = function() {
  idComment++
  let form = document.querySelector("#comments-form");
  if(form.name.value.length < 4) {
    document.querySelector("#error").innerHTML = "Длинна имени не мение 4 символов";
    return false;
  } else if (form.comment.value.length < 10) {
    document.querySelector("#error").innerHTML = "Длинна сообщения не мение 10 символов";
    return false;
  }
  document.querySelector("#error").innerHTML = "";
  console.log('click');

  // Установим новое значение для подсчета комментариев
  if (countComments == 0)
    document.querySelector("#comments").innerHTML = "";

    countComments++
    document.querySelector(".count-comm").innerHTML = countComments;

    let newComment = "<div class='comment' id='block-" + idComment + "'>" +
    "<span class='delete' onclick='delCom(" + idComment +
    ")'>&times;</span>" +
    "<p class='name'>" + form.name.value + "</p>" +
    "<p class='mes'>" + form.comment.value + "</p>"
    "</div>";

    document.querySelector("#comments")
    .insertAdjacentHTML('afterbegin', newComment);

console.log('insertAdjacentHTML');
      // Очистка форми
      form.comment.value = "";
  };


function delCom(id) {
  document.querySelector("#block-" + id).remove();

  countComments--;
  document.querySelector(".count-comm").innerHTML = countComments;

  if (countComments == 0)
    document.querySelector("#comments").innerHTML = "Пока комментариев нет";
}
