document.querySelector('.share_icon').addEventListener("click", function(){
    // console.log('Hello')
    let popUp = document.getElementById("popup_box");
    console.log(popUp);
    popUp.classList.toggle("show");
    // popUp.onclick("removePopup()");
})
// document.getElementById("popup_box").addEventListener("click", removePopup());
// function removePopup() {
//     this.style.display = "none";
// }