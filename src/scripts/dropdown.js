// function myFunction() {
//     alert("тык");
//     //document.getElementsByClassName("dropdown-list").classList.toggleClass('show');
//     document.querySelector('.dropdown-list').classList.toggleClass('show');
// }

function myFunction() {
  var menu = document.querySelector('.dropdown-list'); // Using a class instead, see note below.
  var head = document.querySelector('.dropdown-head');
  menu.classList.toggle('show');
  head.classList.toggle('dropdown-head-show');
 
}