function pullContentIntoAtom() {
	const elAll = contentElements(['p', 'h2', 'figure']);

	if (elAll.length > 0) {

		const moveTarget = document.querySelector('body > .element-atom .body-content');
		elAll.forEach((el) => {
			if (el.hasAttribute('data-canonical-url')) {
				// console.log('this is the element', el)
				const url = el.dataset.canonicalUrl;
				let iframeEl = document.createElement('iframe');
				iframeEl.setAttribute('src', url);
				// console.log(iframeEl);
				el.appendChild(iframeEl);

				setTimeout(() => {
					// console.log('hi');
				}, 2000);

			}
			moveTarget.appendChild(el);
		})
		document.body.classList.add('DOMready')
	} else {
		// console.log('DOM ready');
	}
}

pullContentIntoAtom();
let i = 0;
const contentInterval = setInterval(function () {
	pullContentIntoAtom();
	if (i++ >= 20) clearInterval(contentInterval);
}, 3000);


function contentElements(elements) {
	const selector = elements.map((el) => {
		return `body > .element-atom ~ ${el}`;
	}).join(',');
	return document.querySelectorAll(selector);
}




// // pegamos o elemento canvas na DOM
// const canvas = document.querySelector('#canvas1');

// // definimos qual o tipo de contexto será aplicado ao nosso
// //canvas pego na DOM neste será (2d)
// const context = canvas.getContext('2d');

// //setamos que tanto a largura quanto a altura do nosso
// //canvas no context 2d terá o tamanho da área de conteúdo da janela
// context.canvas.width = window.innerWidth;
// context.canvas.height = window.innerHeight;

// let particleArray;

// //criamos agora uma função construtora para enxer nosso canvas
// // com as partículas
// function Particle(x, y, directionX, directionY, size, color) {
// 	this.x = x;
// 	this.y = y;
// 	this.directionX = directionX;
// 	this.directionY = directionY;
// 	this.size = size;
// 	this.color = color;
// }

// //Neste ponto adicionamos um método ao prototype, para desenhar,
// //poderíamos tê-lo adicionado à function Particle
// Particle.prototype.draw = function () {
// 	context.beginPath();
// 	context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
// 	context.fillStyle = this.color;
// 	context.fill();
// }

// // instanciamos o nosso objeto particle1, usando a função construtora Particle
// const particle1 = new Particle(10, 10, 1, 1, 20, '#ffbac8')

// // envocamos a função draw do nosso objeto particle1
// particle1.draw(); //surgirá uma partícula na tela, mas não se mexe

// //agora criamos uma função para atualizar a nossa partícula quadro a quadro
// Particle.prototype.update = function () {
// 	//checamos se a partícula não ultrapassou o tamanho da janela, tanto na
// 	//largura quanto na altura
// 	if (this.x + this.size > canvas.width || this.x - this.size < 0) {
// 		this.directionX = -this.directionX;
// 	}
// 	if (this.y + this.size > canvas.height || this.y - this.size < 0) {
// 		this.directionY = -this.directionY;
// 	}
// 	this.x += this.directionX;
// 	this.y += this.directionY;

// 	this.draw();
// }

// //como desejamos várias partículas, criamos um array, em uma função de inicialização, e dentro dela daremos as medidas e cores
// //das partículas
// function init() {
// 	particleArray = [];
// 	for (let i = 0; i < 100; i++) {
// 		let size = Math.random() * 20;
// 		let x = Math.random() * (innerWidth - size * 2);
// 		let y = Math.random() * (innerHeight - size * 2);
// 		let directionX = (Math.random() * .4) - .2;
// 		let directionY = (Math.random() * .4) - .2;
// 		let color = '#ffbac8';

// 		particleArray.push(new Particle(x, y, directionX, directionY, size, color));

// 	}
// }

// // animation loop
// function animate() {
// 	requestAnimationFrame(animate);
// 	context.clearRect(0, 0, innerWidth, innerHeight);

// 	for (let i = 0; i < particleArray.length; i++) {
// 		particleArray[i].update();
// 	}
// }

// init();
// animate();

// //ao redimensionar a tela, as particulas se esticam ou se encolhem,
// //para isto atribuímos um evento de resize
// window.addEventListener('resize', () => {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// 	init();
// })