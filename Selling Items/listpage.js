document.querySelectorAll('.condition-btn').forEach(function (button) {
  button.addEventListener('click', function () {
      document.querySelectorAll('.condition-btn').forEach(function (btn) {
          btn.classList.remove('active');
      });
      this.classList.add('active');
      document.querySelector('#item-condition').value = this.dataset.condition;
  });
});