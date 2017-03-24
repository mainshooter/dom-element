function arrayToString(array) {
  var text = "";
  for (var i = 0; i < array.length; i++) {
    text += array[i];
  }
  return(text);
}
function stringToArray(string) {
var array = string.split("");
return(array);
}

function $(element) {
  // SELECTS an element by id or by class
var array = stringToArray(element);
if (array[0] == ".") {
  array.shift();
  element = arrayToString(array);
  element = document.getElementsByClassName(element);
}
else if (array[0] == "#") {
  array.shift();
  element = arrayToString(array);
  element = document.getElementById(element);
}
else {
  element = arrayToString(array);
  element = document.getElementsByTagName(element);
}
// var element = document.getElementById(id);
return(element);
}

function removeClass(className) {
  // Remove the className from a lement
  var pre = $("." + className);
  var array = htmlCollectionToArray(pre);

  for (var i = 0; i < array.length; i++) {
    $("." + className)[0].className = "";
    // Because remove the first class element the next one
    // Will also be 0 because the 1 has become 0
  }
}
function setClassName(id, classname) {
  var element = $("#" + id).className = classname;
}
function changeText(elementSelector, text) {
  // This function changes the text
  console.log(elementSelector);

  $("#" + elementSelector).innerHTML = text;
}
function htmlCollectionToArray(htmlcollection) {
  // Transform a html collection to array
  var array = [].slice.call(htmlcollection);
  return(array);
}
  removeClass("prefilled");
  // setClassName("name", "prefilled");
  // setClassName("studentnumber", "prefilled");
  // changeText("name", "Peter Romijn");
  // changeText("studentnumber", "49883");

// $("#name").className = "prefilled";
// $("#name").className = "prefilled";
