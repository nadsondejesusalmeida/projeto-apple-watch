const navLinks = document.querySelector('#nav-links');
const openMenuButton = document.querySelector('#open-menu-button');
const closeMenuButton = document.querySelector('#close-menu-button');

const productTitle = document.querySelector('#product-title');
const imageVisualization = document.querySelector('#image-visualization');
const selectedColorName = document.querySelector('#selected-color-name');

const imageOption0 = document.getElementById('0-thumbnail-image');
const imageOption1 = document.getElementById('1-thumbnail-image');
const imageOption2 = document.getElementById('2-thumbnail-image');

const greenCypress = {
	name: 'Verde-cipreste',
	imageFolderName: 'green-cypress'
}

const blueWinter = {
	name: 'Azul-inverno',
	imageFolderName: 'blue-winter'
}

const midnight = {
	name: 'Meia-noite',
	imageFolderName: 'midnight'
}

const stellar = {
	name: 'Estelar',
	imageFolderName: 'stellar'
}

const lightPink = {
	name: 'Rosa-claro',
	imageFolderName: 'light-pink'
}

const colorOptions = [
	greenCypress,
	blueWinter,
	midnight,
	stellar,
	lightPink
]

const sizeOptions = ['41 mm', '45 mm']

let selectedSize = 1;
let selectedImage = 1;
let selectedColor = 1;

function closeMenu() {
	navLinks.style.display = 'none';
	document.querySelector('body').style.overflow = 'auto';
}

function openMenu() {
	navLinks.style.display = 'flex';
	document.querySelector('body').style.overflow = 'hidden';
}

function showOrHideMenu() {
	if (window.innerWidth >= 900) {
		openMenu();
	} else {
		closeMenu();
	}
}

function updateSize() {
	const selectedSizeOption = document.querySelector('input[name="size-option"]:checked').id.charAt(0);
	
	productTitle.innerText = `Pulseira loop esportiva ${colorOptions[selectedColor].name.toLowerCase()} para caixa de ${sizeOptions[selectedSizeOption]}`;
	selectedSize = parseInt(selectedSizeOption);
	
	if (sizeOptions[selectedSize] === '41 mm') {
		imageVisualization.classList.add('small-box');
	} else {
		imageVisualization.classList.remove('small-box');
	}
}

function updateSelectedImage() {
	const selectedImageOption = document.querySelector('input[name="image-option"]:checked').id.charAt(0);
	
	selectedImage = parseInt(selectedImageOption);
	
	imageVisualization.src = `images/color-options/${colorOptions[selectedColor].imageFolderName}/imagem-${selectedImage}.jpeg`;
}

function updateSelectedColor() {
	const selectedColorNumber = document.querySelector('input[name="color-option"]:checked').id.charAt(0);
	
	selectedColor = parseInt(selectedColorNumber);
	
	productTitle.innerText = `Pulseira loop esportiva ${colorOptions[selectedColor].name.toLowerCase()} para caixa de ${sizeOptions[selectedSize]}`;
	selectedColorName.innerText = `Cor: ${colorOptions[selectedColor].name}`;
	
	imageVisualization.src = `images/color-options/${colorOptions[selectedColor].imageFolderName}/imagem-${selectedImage}.jpeg`;
	
	imageOption0.src = `images/color-options/${colorOptions[selectedColor].imageFolderName}/imagem-0.jpeg`;
	imageOption1.src = `images/color-options/${colorOptions[selectedColor].imageFolderName}/imagem-1.jpeg`;
	imageOption2.src = `images/color-options/${colorOptions[selectedColor].imageFolderName}/imagem-2.jpeg`;
}