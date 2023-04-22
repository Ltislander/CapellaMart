document.querySelectorAll('.condition-btn').forEach(function (button) {
  button.addEventListener('click', function () {
      document.querySelectorAll('.condition-btn').forEach(function (btn) {
          btn.classList.remove('active');
      });
      this.classList.add('active');
      document.querySelector('#item-condition').value = this.dataset.condition;
  });
});


document.getElementById("chatTab").addEventListener("click", function () {
  var chatBox = document.getElementById("chatBox");
  if (chatBox.style.display === "none") {
    chatBox.style.display = "block";
  } else {
    chatBox.style.display = "none";
  }
});

function changeImage(clickedThumbnail) {
  var mainImage = document.getElementById('main-image');
  mainImage.src = clickedThumbnail.src;
}