var X = document.getElementById('X')
var Y = document.getElementById('Y')
var planet = document.getElementById('planet')
var banner = document.querySelector('.splash-banner')
const body = document.getElementById('splash-container') 
X.onclick = function(){
	planet.style.background = 'linear-gradient(rgba(229,95,69,0.4), #000), url(planet2.jpg)'
	planet.style.backgroundSize = 'cover'
	planet.style.animation = 'rotationX 50s linear infinite'
	banner.innerHTML = 'Planet-X'
}

Y.onclick = function(){
	planet.style.background = 'linear-gradient(rgba(229,95,69,0.5), #000 calc(40vh)), url(planet2.jpg)'
	planet.style.backgroundSize = '100vw auto'
	planet.style.animation = 'rotationY 50s linear infinite'
	banner.innerHTML = 'Planet-Y'
}

var starNumber = 100
var star = 0
var x = 0
var y = 0
var size = 0
var blink = 0

for(var i = 0; i<starNumber;i++){
	star = document.createElement('div')
	star.setAttribute('class', 'star')

	x = Math.random()*100
	y = Math.random()*100
	blink = Math.random()*5+2
	size = Math.random()*5
	star.style.width = size+'px'
	star.style.height = size+'px'
	star.style.left = x+'%'
	star.style.top = y+'%'
	star.style.animation = 'blink '+blink+'s infinite'

	body.appendChild(star)
}


