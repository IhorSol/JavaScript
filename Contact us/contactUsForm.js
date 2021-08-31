
function formCheck() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telephone = document.getElementById("telephone").value;
  let message = document.getElementById("message").value;

  let inputs = document.getElementsByClassName("input-field");
  let messageLen = document.getElementById("message").value.length;
  console.log("Email - " + email);

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length == 0) {
      console.log("Не все поля заполнены");
      document.getElementById("error").innerHTML = "Не все поля заполнены";
      return
    }
  }
  if (email.search("@") == -1) {
    document.getElementById("error").innerHTML = "Имейл заполнен некорректно";
    return
  }
  if (messageLen < 50) {
    document.getElementById("error").innerHTML = "Сообщение должно быть более 50 символов";
    return
  } else if (messageLen > 400) {
    document.getElementById("error").innerHTML = "Сообщение должно быть не более 400 символов";
    return
  }
    document.getElementById("error").innerHTML = "";
    document.getElementById("form-button").innerHTML = "Готово";
    document.getElementById("form").reset();
//add green border color
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.add("success");
    }
// add comments to comments section
  let comment = '<div class="comment"> <p><span class="comment-begin">Email: </span>' + email + '</p> <p><span class="comment-begin">Имя: </span>' + name + '</p> <p><span class="comment-begin">Телефон: </span>' + telephone + '</p> <p>' + message + '</p> </div>';

  document.getElementById("all-comments").insertAdjacentHTML("afterbegin", comment)
}
