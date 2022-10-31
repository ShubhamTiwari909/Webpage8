import {
    typeDropdown, typeDropdownBtn, statusDropdown, statusDropdownBtn,
    typeInputText, statusInputText, valueOne, valueTwo, valueThree,
    statusvalueOne, statusvalueTwo, statusvalueThree
} from "./dom-loader";


typeDropdownBtn.addEventListener("click", function (e) {
    typeDropdown.style.display = typeDropdown.style.display === "none" ? "block" : "none";

})
statusDropdownBtn.addEventListener("click", function (e) {
    statusDropdown.style.display = statusDropdown.style.display === "none" ? "block" : "none";
})


valueOne.addEventListener("click", function () {
    typeInputText.innerText = valueOne.innerText;
})
valueTwo.addEventListener("click", function () {
    typeInputText.innerText = valueTwo.innerText;
})
valueThree.addEventListener("click", function () {
    typeInputText.innerText = valueThree.innerText;
})

statusvalueOne.addEventListener("click", function () {
    statusInputText.innerText = statusvalueOne.innerText;
    statusDropdown.style.display = "none"
})
statusvalueTwo.addEventListener("click", function () {
    statusInputText.innerText = statusvalueTwo.innerText
    statusDropdown.style.display = "none"
})
statusvalueThree.addEventListener("click", function () {
    statusInputText.innerText = statusvalueThree.innerText
    statusDropdown.style.display = "none"
})




