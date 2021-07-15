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

function item_1_decrement(){
  var counter_1 = document.querySelector('.span-count_1');
  if(counter_1.innerHTML > 0){
    counter_1.innerHTML -= 1;
  }
}

function item_1_increment(){
  var counter_1 = document.querySelector('.span-count_1');
  if(counter_1.innerHTML < 100){
    counter_1.innerHTML = parseInt(parseInt(counter_1.innerHTML)+1);
  }
}