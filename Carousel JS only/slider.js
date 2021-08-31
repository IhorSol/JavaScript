var feedbacks = document.getElementsByClassName("feedback");

function slideRight() {
  let ids = [];
  let j = 0;
  for (var i = 0; i < feedbacks.length; i++) {
    if (feedbacks[i].classList.contains("active")) {
      feedbacks[i].classList.remove("active");
      ids[j] = feedbacks[i].id;
      j++;
      // console.log(feedbacks[i].id);
    }
  }
  // console.log("ids: " + ids);
  if ((ids[0] == feedbacks.length - 1) && ids[1] == feedbacks.length) {
    feedbacks[0].classList.add("active");
    feedbacks[1].classList.add("active");
  } else {
    feedbacks[parseInt(ids[0]) + 1].classList.add("active");
    feedbacks[parseInt(ids[1]) + 1].classList.add("active");
  }
}

function slideLeft() {
  // console.log(feedbacks.length);
  let ids = [];
  let j = 0;
  for (var i = 0; i < feedbacks.length; i++) {
    if (feedbacks[i].classList.contains("active")) {
      feedbacks[i].classList.remove("active");
      ids[j] = feedbacks[i].id;
      j++;
      // console.log(feedbacks[i].id);
    }
  }
  if ((parseInt(ids[0]) == 1) && parseInt(ids[1]) == 2) {
    feedbacks[feedbacks.length - 2].classList.add("active");
    feedbacks[feedbacks.length - 1].classList.add("active");
  } else {
    // console.log("else");
    feedbacks[parseInt(ids[0]) - 3].classList.add("active");
    feedbacks[parseInt(ids[1]) - 3].classList.add("active");
  }
}

function tabSetActiveFeedback(id1, id2) {
  for (var i = 0; i < feedbacks.length; i++) {
    if (feedbacks[i].classList.contains("active")) {
      feedbacks[i].classList.remove("active");
    }
  }
  feedbacks[id1].classList.add("active");
  feedbacks[id2].classList.add("active");
}
