
window.alert('AVISO: Esta página é um exemplo para a construção de sites , e apenas  usamos o logo da XP Investimentos como referência. ')
function calc_cotas() {
    var val_fi = window.document.getElementById('vfi')
    var val_fi2 = Number(val_fi.value)
    var div_men = window.document.getElementById('dm')
    var div_men2 = Number(div_men.value)
    var rend_men_desej = window.document.getElementById('rdm')
    var rend_men_desej2 = Number(rend_men_desej.value)
    var calc_cotas = val_fi2 / div_men2
    var calc_cotas2 = Math.round(calc_cotas)
    var calc_viv_renda = (rend_men_desej2 / div_men2 ) * val_fi2
    var calc_viv_renda2 = calc_viv_renda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); // variável convertida para real - R$ . 
    var res = window.document.getElementById('res')
    



if ( window.document.getElementById('vfi').value.length == "" || window.document.getElementById('dm').value.length == "" || window.document.getElementById('rdm').value.length == " ") { // selecão dos elementos do HTML já dentro do IF com o value.length para ler/medir o comprimento de caracteres das variáveis.     


    window.alert("Por favor, preencha todos os campos.")

} else {


 
     
    res.innerHTML =  ` <p> Você precisa comprar <strong> ${calc_cotas2}</strong>  cotas.  `
    res.innerHTML+=  `<P>  Irá ser necessário investir  ${calc_viv_renda2} para viver de renda. `
    
}

}

