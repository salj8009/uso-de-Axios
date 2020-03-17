const BtnPrecios = document.getElementById('btnPrecios')

BtnPrecios.addEventListener('click', () => {
	axios({
		method : 'GET',
		url : 'https://api.datos.gob.mx/v1/precio.gasolina.publico'
	})
	.then(res => {
		//console.log(res)
		const Contenedor = document.getElementById('contenedor')
		const Fragment = document.createDocumentFragment()
		for(const Resultado of res.data.results) {
			//console.log(Resultado)
			const DivItem = document.createElement('DIV')
			DivItem.classList.add('mydiv')
			DivItem.textContent = `La Gasolineria con direecion: ${Resultado.calle} , con razón social: ${Resultado.razonsocial}
			tiene la gasolina regular: ${Resultado.regular} y la gasolina premium: ${Resultado.premium}`

			Fragment.append(DivItem)
		}
		Contenedor.append(Fragment)
	})
	.catch(err => console.log(err))
})