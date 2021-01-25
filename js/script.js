//Carne - 400gr por pessoa + de 6 horas - 650
//Cerveja - 1200ml por pessoa + 6 horas - 2000ml
//Refri/Agua - 1000 ml por pessoa + 6 horas 1500ml
//crianças valem por 0,5


let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

calc = () =>{
	console.log("Calculando...");

	let adultos = inputAdultos.value;
	let criancas = inputCriancas.value;
	let duracao = inputDuracao.value;
	

	let qtdTotalCarne = carnePp(duracao) * adultos + (carnePp(duracao) / 2 * criancas);
	let qtdTotalCerva = cervaPp(duracao) * adultos;
	let qtdTotalBebidas = bebidasPp(duracao) * adultos + (bebidasPp(duracao) / 2 * criancas);	


resultado.innerHTML = `<p>${qtdTotalCarne / 1000}kg de Carne &#127830</p>`;
resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerva / 355)} Latas de Cerveja &#127866</p>`;
resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas 2L de Bebidas &#129380</p>`;


}



carnePp = (duracao)=>{
	if(duracao >= 6 ){
		return 650;
	}else{
	return 400;
	}
}


cervaPp = (duracao)=>{
	if(duracao >= 6 ){
		return 2000;
	}else{
	return 1200;
	}
}

bebidasPp = (duracao)=>{
	if(duracao >= 6 ){
		return 1500;
	}else{
	return 1000;
	}
}