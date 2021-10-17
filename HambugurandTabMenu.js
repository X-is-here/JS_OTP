const HambagarMenuContainerTag = document.querySelector(".HambagarMenuContainer")

const overlayMenuTag = document.querySelector(".overlayMenu")
const line1Tag = document.querySelector(".line1")
const line2Tag = document.querySelector(".line2")
const line3Tag = document.querySelector(".line3")
const liTag = document.getElementsByTagName("li")

const ulTag = document.querySelector("ul")
const sliderTag = document.querySelector(".slider")

const tabs = ["Home", "Services", "About Us", "Contact us", "Log In" ]

const handleTabChange = (event) => {
    const clickedTabId = event.target.value ;
    const clickedLiTag = document.getElementById(clickedTabId);
    const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
    const clickedLiTagOffsetWidth = clickedLiTag.offsetWidth;
    sliderTag.style.width = clickedLiTagOffsetWidth + "px";
    sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`
}
for (let i = 0; i < tabs.length; i++) {
    const liTag = document.createElement("li")
    liTag.classList.add("TabMenu")
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click", handleTabChange);
    ulTag.append(liTag);
}



HambagarMenuContainerTag.addEventListener("click", () => {
    if(HambagarMenuContainerTag.classList.contains("isOpened")) {
        overlayMenuTag.classList.remove("showOverlayMenu")
        line1Tag.classList.remove("UpperLine");
    line2Tag.classList.remove("HideLine2");
    line3Tag.classList.remove("LastLine");
    HambagarMenuContainerTag.classList.remove("isOpened");
    for (let i = 0; i < liTag.length; i++) {
        liTag[i].classList.remove("MoveliTagUp")
    } } else{
    overlayMenuTag.classList.add("showOverlayMenu")
    line1Tag.classList.add("UpperLine");
    line2Tag.classList.add("HideLine2");
    line3Tag.classList.add("LastLine");
    HambagarMenuContainerTag.classList.add("isOpened");
    for (let i = 0; i < liTag.length; i++) {
        liTag[i].classList.add("MoveliTagUp")
    }
}
    });