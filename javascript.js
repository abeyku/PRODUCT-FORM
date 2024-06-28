function validateForm() {
  let x = document.forms["myForm"]["fname","email","address","city"].value;
  if (x == "") {
    alert("Parameters must be filled out");
    return false;
  }
}