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

function item_2_decrement(){
  var counter_2 = document.querySelector('.span-count_2');
  if(counter_2.innerHTML > 0){
    counter_2.innerHTML -= 1;
  }
}

function item_2_increment(){
  var counter_2 = document.querySelector('.span-count_2');
  if(counter_2.innerHTML < 100){
    counter_2.innerHTML = parseInt(parseInt(counter_2.innerHTML)+1);
  }
}

function item_3_decrement(){
  var counter_3 = document.querySelector('.span-count_3');
  if(counter_3.innerHTML > 0){
    counter_3.innerHTML -= 1;
  }
}

function item_3_increment(){
  var counter_3 = document.querySelector('.span-count_3');
  if(counter_3.innerHTML < 100){
    counter_3.innerHTML = parseInt(parseInt(counter_3.innerHTML)+1);
  }
}