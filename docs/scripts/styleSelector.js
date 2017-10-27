function choose() {
  let currentStyle = document.cookie;
  console.log(currentStyle);
  if (!currentStyle) {
    currentStyle = 'black';
  }
document.cookie = currentStyle;
  document.getElementsByTagName('body')[0].className = currentStyle;
}

document.addEventListener("DOMContentLoaded", function(event) {
    choose();
  });
