// add event listeners to create collapsible menu
let colls = document.getElementsByClassName("collapsible");

for (let i = 0; i < colls.length; i++) {
  colls[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      //content.style.maxHeight = content.scrollHeight + "px";
      content.style.maxHeight = "2500px";
    } 
  });
};
