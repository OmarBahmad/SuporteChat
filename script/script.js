let solucao = document.querySelectorAll('.solucao');

function ler(n){
    for (let i = 0; i < solucao[i]; i++){
        solucao[i].style.display = 'none';
    }
    solucao[n].style.display = '';
}