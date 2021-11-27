// Empty JS for your own code to be here
function toggle(ref,b){
  var el = document.getElementById(ref);
  if (!el) return true;
  if (el.style.display == "none"){
    el.style.display="block"
    b.value = "hide bibtex";
    b.childNodes[0].nodeValue = "[Hide Bibtex]";

  } else {
    el.style.display="none"
    b.value = "show bibtex";
    b.childNodes[0].nodeValue = "[Bibtex]";
  }
  return true;
}