var tabLinks = document.getElementsByClassName("titles")
var tabContents = document.getElementsByClassName("content-tab")
function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-title")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-title")
    document.getElementById(tabName).classList.add("active-tab")
}