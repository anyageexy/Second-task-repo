var counter_text_field = 0;
var check_text_field = document.getElementById("text-field");

document.addEventListener("click", (evt) => {
  const flyoutElement = document.getElementById("text-field");
  let targetElement = evt.target; // нажатый элемент

  do {
      if (targetElement == flyoutElement) {
          // Do nothing, just return.
          document.getElementById("text-field").value = "This is pretty";
          return;
      }
      // Go up the DOM.
      targetElement = targetElement.parentNode;
  } while (targetElement);

  // Do something useful here.
  document.getElementById("text-field").value = "";
});

document.addEventListener("mouseover", (evt) => {
  const flyoutElement = document.getElementById("text-field");
  let targetElement = evt.target; // нажатый элемент

  do {
      if (targetElement == flyoutElement) {
          // Do nothing, just return.
          document.getElementById("text-field").value = "This is pretty";
          return;
      }
      // Go up the DOM.
      targetElement = targetElement.parentNode;
  } while (targetElement);

  // Do something useful here.
  document.getElementById("text-field").value = "";//когда уводим мышку то текстовое поле очищается
  //нам нужно чтобы оно очищалось, если ничего не введено
});
