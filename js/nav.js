const menuBar= document.querySelector('.opcionesMenu');
const enlaces= menuBar.querySelectorAll('a')


enlaces.forEach(e=>{
	e.addEventListener('mouseover', ()=>{
		
		e.style.backgroundPosition = '0 0'
		e.style.color= 'white'
		e.style.background= 'black';
		

	})

	e.addEventListener('mouseout',()=>{
		
		e.style.backgroundPosition = '150% 0'
		e.style.color= 'black'
		e.style.removeProperty('background')
		
	})
})