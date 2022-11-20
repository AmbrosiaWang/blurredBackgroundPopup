const containerEl = document.querySelector(".main-container")
const btnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container")
const closeIconEl = document.querySelector(".close-icon")

btnEl.addEventListener("click", function(){
    containerEl.classList.add("hide");
    popupContainerEl.classList.remove("hide");
});

closeIconEl.addEventListener("click",function(){
    popupContainerEl.classList.add("hide");
    containerEl.classList.remove("hide");
})