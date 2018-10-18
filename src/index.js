import _ from 'lodash'
import './style.css'
import Icon from './assets/img/icon.png'
import Data from './data.xml'

function component() {
	var element = document.createElement('div')

	// Lodash, now imported by this script
	element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ')
	element.classList.add('hello')
	element.style.height = '400px'
	element.style.fontSize = '36px'

	// Add the image to our existing div.
	var myIcon = new Image()
	myIcon.src = Icon

	element.appendChild(myIcon)

	console.log(Data)

	return element
}

document.body.appendChild(component())
