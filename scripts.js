import headerComponent from "./components/head/head.js"
import splitComponent from "./components/split/split.js"
import footerComponent from "./components/footer/footer.js"

document.getElementById("split").innerHTML = splitComponent()
document.getElementById("head").innerHTML = headerComponent()
document.getElementById("footer").innerHTML = footerComponent()