const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},

]



let urlleftarrow = document.querySelector("#arrow_left")
let urlrightarrow = document.querySelector("#arrow_right")
let baliseImage = document.querySelector("#banner-image")
let baliseTagLine = document.querySelector("#tagline")
let dotLight = document.querySelector(".dots")
let path = "./assets/images/slideshow/"
let currentIndex = 0
let dotIndex = 0
let arrayLength = slides.length
console.log(arrayLength)
console.log(currentIndex)


for (let i = 0; i < arrayLength; i++) {
	console.log("dotLight", i)
	dotLight.insertAdjacentHTML("beforeend", `<div class="dot" id="dot_${i}"></div>`)
}
document.querySelector("#dot_0").classList.add("dot_selected")


urlrightarrow.addEventListener("click", () => {
	console.log(currentIndex, arrayLength)

	currentIndex++
	dotIndex++
	console.log(currentIndex)
	console.log("Vous avez cliqué sur le bouton droit")

	if (currentIndex == arrayLength) {
		currentIndex = 0
		dotIndex = 0
		console.log("else")
	}
	baliseImage.src = path + slides[currentIndex]["image"]
	baliseImage.setAttribute("alt", slides[currentIndex]["tagLine"])
	baliseTagLine.innerHTML = slides[currentIndex]["tagLine"]
	console.log(currentIndex)
	console.log(dotIndex)
	document.querySelector("#dot_" + dotIndex).classList.add("dot_selected")
	document.querySelector("#dot_" + (dotIndex == 0 ? arrayLength - 1 : dotIndex - 1)).classList.remove("dot_selected")
	console.log(dotIndex)
})

urlleftarrow.addEventListener("click", () => {
	console.log("Vous avez cliqué sur le bouton gauche")
	if (currentIndex != 0) {
		currentIndex--
		dotIndex--
		console.log(currentIndex)
		console.log("Vous avez cliqué sur le bouton gauche")
		console.log(dotIndex)
	} else
		if (currentIndex == 0) {
			currentIndex = arrayLength - 1
			dotIndex = arrayLength - 1
			console.log("retour en arrière")
			console.log(currentIndex)
			console.log(dotIndex)
		}
	baliseImage.src = path + slides[currentIndex]["image"]
	baliseImage.setAttribute("alt", slides[currentIndex]["tagLine"])
	baliseTagLine.innerHTML = slides[currentIndex]["tagLine"]
	document.querySelector("#dot_" + currentIndex).classList.add("dot_selected")
	document.querySelector("#dot_" + (dotIndex == arrayLength - 1 ? 0 : dotIndex + 1)).classList.remove("dot_selected")
})