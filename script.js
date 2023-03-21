const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const label = document.querySelector('label')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

// TF = TC * 1.8 + 32
// TC = (TF - 32) / 1.8

// Conwerter
const convertCToF = () => {
	let convertValueC = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C equal ${convertValueC.toFixed(1)}°F`
	converter.value = ''
}
const convertFToC = () => {
	let convertValueF = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F equal ${convertValueF.toFixed(1)}°C`
	converter.value = ''
}

// Reset
const reset = () => {
	converter.value = ''
	result.textContent = ''
}

// Change
const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

const convertDeg = () => {
	if (one.textContent.match('°C') && converter.value != 0) {
		convertCToF()
	} else if (one.textContent.match('°F') && converter.value != 0) {
		convertFToC()
	} else if ((converter.value == '')) {
		result.textContent = 'You should set a number!'
	}
}

convBtn.addEventListener('click', convertDeg)
resetBtn.addEventListener('click', reset)
changeBtn.addEventListener('click', change)
