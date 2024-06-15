const buttons = document.querySelectorAll('.btn button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var parent = this.parentElement.parentElement;
    var goodness = parent.querySelector('.goodness');
    var details = parent.querySelector('.details'); 
    if (goodness.style.display === 'none') {
      goodness.style.display = 'block';
      details.style.display = 'none';
    } else {
      goodness.style.display = 'none';
      details.style.display = 'block';
    }
  });
});
