
//função com nome calc_total... criar varriavel qtd... essa variavel vai pagar o conteudo da caixa de texto quantidade que tem o id=cQtd... 
//como cQtd tem que ser um número vamos converter isso usando o parametro parseInt=converter p nºinteiro... na c
function calc_total() {
		var qtd = parseInt(document.getElementById('cQtd').value) // com isso temos na variavel qtd o q o usuario digitar na caixa de texto cQtd...
		
		//variavel total
		tot = qtd * 1800;
		// mostrar na caixa de texto total que tem como id=cTot	o valor já calculado
		document.getElementById('cTot').value = tot
// essa função cal_total vai ser chamada sempre q digitar no formulario... qdo mudar a qtde faz o calculo total		
}
