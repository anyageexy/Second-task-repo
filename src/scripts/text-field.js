document.addEventListener("click", (evt) => {
  const flyoutElement = document.getElementById("text-field");
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == flyoutElement) {
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
  let targetElement = evt.target; // clicked element

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
