function myFunction() {
  var menu = document.querySelector('.dropdown-list');
  var head = document.querySelector('.dropdown-head');
  menu.classList.toggle('show');
  head.classList.toggle('dropdown-head-show');
}

function main_counter(){
  var head = document.querySelector('.head-text');
  head.innerHTML = string_item_1() + ", " + string_item_2() + ", " + string_item_3();
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

var string_item_1 = function(){
  var count = document.querySelector('.span-count_1').innerHTML;
  var lastone = count.toString().slice(-1);
  if ((count == 1)||(count == 21)||(count == 31)||(count == 41)||(count == 51)||(count == 61)||(count == 71)||(count == 81)||(count == 91)){
    return count + " спальня";
  } else if (((lastone == 2)||(lastone == 3)||(lastone == 4))&&(count != 12)&&(count != 13)&&(count != 14)){
    return count + " спальни";
  } else return count + " спален";
}

var string_item_2 = function(){
  var count = document.querySelector('.span-count_2').innerHTML;
  var lastone = count.toString().slice(-1);
  if((count == 1)||(count == 21)||(count == 31)||(count == 41)||(count == 51)||(count == 61)||(count == 71)||(count == 81)||(count == 91)){
    return count + " кровать";
  } else if (((lastone == 2)||(lastone == 3)||(lastone == 4))&&(count != 12)&&(count != 13)&&(count != 14)){
    return count + " кровати";
  } else return count + " кроватей";
}

var string_item_3 = function(){
  var count = document.querySelector('.span-count_3').innerHTML;
  var lastone = count.toString().slice(-1);
  if((count == 1)||(count == 21)||(count == 31)||(count == 41)||(count == 51)||(count == 61)||(count == 71)||(count == 81)||(count == 91)){
    return count + " ванная комната";
  } else if (((lastone == 2)||(lastone == 3)||(lastone == 4))&&(count != 12)&&(count != 13)&&(count != 14)){
    return count + " ванные комнаты";
  } else return count + " ванных комнат";
}