import {typeDropdown,typeDropdownBtn,statusDropdown,statusDropdownBtn} from "./dom-loader";

typeDropdownBtn.addEventListener("click", function(e) {
    typeDropdown.style.display = typeDropdown.style.display === "none" ? "block" : "none";
})
statusDropdownBtn.addEventListener("click", function(e) {
    statusDropdown.style.display = statusDropdown.style.display === "none" ? "block" : "none";
})