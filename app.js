


// dropdown function
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


// rating section

window.onload = function() {
  var ratingSection = document.querySelector('.rating-section');
  var ratingCards = document.querySelectorAll('.rating-card');
  var totalWidth = ratingSection.scrollWidth - ratingSection.clientWidth;
  
  var currentOffset = totalWidth;
  setInterval(function() {
      currentOffset--;
      if (currentOffset < 0) {
          currentOffset = totalWidth;
      }
      ratingSection.scrollTo(currentOffset, 0);
  }, 30);
};
// up button

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > (document.documentElement.scrollHeight * 0.8) || document.documentElement.scrollTop > (document.documentElement.scrollHeight * 0.8)) {
        document.getElementById("myButton").style.display = "block";
    } else {
        document.getElementById("myButton").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}