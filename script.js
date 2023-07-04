function tinhToan() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message");
  var audio = document.getElementById("audio");

  if (name) {
    message.innerHTML = "Tôi nhát gái vãi cả lồn, " + name + " ơi!";
    audio.play();
  } else {
    message.innerHTML = "Vui lòng nhập tên người bạn muốn tỏ tình.";
  }
}
