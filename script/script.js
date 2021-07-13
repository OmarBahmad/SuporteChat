// function ler(n){
//     let solucao = document.querySelectorAll('.solucao');
//     for (let i = 0; i < solucao[i]; i++){
//         solucao[i].style.display = 'none';
//     }
//     solucao[n].style.display = 'show';
// }

function ler(n){
    let campo = document.getElementsByClassName('campo')

    let solucao = document.getElementsByClassName('solucao')
     for(i = 0; i <= solucao.length; i++ ){
         solucao[i].className= 'solucao hidden'
     }
    solucao[n].className = 'solucao'
}
