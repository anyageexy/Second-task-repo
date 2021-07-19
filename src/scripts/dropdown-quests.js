// function myFunction() {
//     alert("тык");
//     //document.getElementsByClassName("dropdown-list").classList.toggleClass('show');
//     document.querySelector('.dropdown-list').classList.toggleClass('show');
// }

function myFunction_quests() {
  var menu = document.querySelector('.dropdown-quests-list'); // Using a class instead, see note below.
  var head = document.querySelector('.dropdown-quests-head');
  menu.classList.toggle('quests-show');
  head.classList.toggle('dropdown-quests-head-show');
}
function btn_clear_show(){
  var btn = document.querySelector('.btn-clear');
  btn.classList.add('btn-clear-show');
}
function btn_clear_hidden(){
  var btn = document.querySelector('.btn-clear');
  btn.classList.remove('btn-clear-show');
  var head = document.querySelector('.dropdown-quests-head');
  head.innerHTML = "Сколько гостей";
}
function main_counter_quests(){
  var head = document.querySelector('.quests-head-text');
  // var counter_1 = document.querySelector('.span-count_1').innerHTML;
  // var counter_2 = document.querySelector('.span-count_2').innerHTML;
  // var counter_3 = document.querySelector('.span-count_3').innerHTML;
  head.innerHTML = string_quests_item();
  if(head.innerHTML.length > 20){
    head.innerHTML = head.innerHTML.substring(0, 20) + "...";
  }
}

function quests_item_1_decrement(){
  var counter_1 = document.querySelector('.quests-span-count_1');
  if(counter_1.innerHTML > 0){
    counter_1.innerHTML -= 1;
  };
  main_counter_quests();
}

function quests_item_1_increment(){
  var counter_1 = document.querySelector('.quests-span-count_1');
  if(counter_1.innerHTML < 100){
    counter_1.innerHTML = parseInt(parseInt(counter_1.innerHTML)+1);
  };
  main_counter_quests();
}

function quests_item_2_decrement(){
  var counter_2 = document.querySelector('.quests-span-count_2');
  if(counter_2.innerHTML > 0){
    counter_2.innerHTML -= 1;
  };
  main_counter_quests();
}

function quests_item_2_increment(){
  var counter_2 = document.querySelector('.quests-span-count_2');
  if(counter_2.innerHTML < 100){
    counter_2.innerHTML = parseInt(parseInt(counter_2.innerHTML)+1);
  };
  main_counter_quests();
}

function quests_item_3_decrement(){
  var counter_3 = document.querySelector('.quests-span-count_3');
  if(counter_3.innerHTML > 0){
    counter_3.innerHTML -= 1;
  };
  main_counter_quests();
}

function quests_item_3_increment(){
  var counter_3 = document.querySelector('.quests-span-count_3');
  if(counter_3.innerHTML < 100){
    counter_3.innerHTML = parseInt(parseInt(counter_3.innerHTML)+1);
  };
  main_counter_quests();
}

var string_quests_item = function(){
  var count_1 = document.querySelector('.quests-span-count_1').innerHTML;
  var count_2 = document.querySelector('.quests-span-count_2').innerHTML;
  var count_3 = document.querySelector('.quests-span-count_3').innerHTML;
  var count_main = parseInt(parseInt(count_1) + parseInt(count_2) + parseInt(count_3));
  var lastone = count_main.toString().slice(-1);
  if ((count_main == 1)||(count_main == 21)||(count_main == 31)||(count_main == 41)||(count_main == 51)||(count_main == 61)||(count_main == 71)||(count_main == 81)||(count_main == 91)){
    return count_main + " гость";
  } else if (((lastone == 2)||(lastone == 3)||(lastone == 4))&&(count_main != 12)&&(count_main != 13)&&(count_main != 14)){
    return count_main + " гостя";
  } else return count_main + " гостей";
}