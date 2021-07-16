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

function main_counter(){
  var head = document.querySelector('.head-text');
  var counter_1 = document.querySelector('.span-count_1').innerHTML;
  var counter_2 = document.querySelector('.span-count_2').innerHTML;
  var counter_3 = document.querySelector('.span-count_3').innerHTML;
  head.innerHTML = counter_1 + " спален, " + counter_2 + " кроватей, " + counter_3 + " ванных комнат";
  if(head.innerHTML.length > 20){
    head.innerHTML = head.innerHTML.substring(0, 20) + "...";
  }
}

function item_1_decrement(){
  var counter_1 = document.querySelector('.span-count_1');
  if(counter_1.innerHTML > 0){
    counter_1.innerHTML -= 1;
  };
  main_counter();
}

function item_1_increment(){
  var counter_1 = document.querySelector('.span-count_1');
  if(counter_1.innerHTML < 100){
    counter_1.innerHTML = parseInt(parseInt(counter_1.innerHTML)+1);
  };
  main_counter();
}

function item_2_decrement(){
  var counter_2 = document.querySelector('.span-count_2');
  if(counter_2.innerHTML > 0){
    counter_2.innerHTML -= 1;
  };
  main_counter();
}

function item_2_increment(){
  var counter_2 = document.querySelector('.span-count_2');
  if(counter_2.innerHTML < 100){
    counter_2.innerHTML = parseInt(parseInt(counter_2.innerHTML)+1);
  };
  main_counter();
}

function item_3_decrement(){
  var counter_3 = document.querySelector('.span-count_3');
  if(counter_3.innerHTML > 0){
    counter_3.innerHTML -= 1;
  };
  main_counter();
}

function item_3_increment(){
  var counter_3 = document.querySelector('.span-count_3');
  if(counter_3.innerHTML < 100){
    counter_3.innerHTML = parseInt(parseInt(counter_3.innerHTML)+1);
  };
  main_counter();
}