import headerComponent from "./components/head/head.js"
import splitComponent from "./components/split/split.js"

document.getElementById("split").innerHTML = splitComponent()
document.getElementById("head").innerHTML = headerComponent()