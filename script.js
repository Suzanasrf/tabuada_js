function gerarTabuada() {
    var selecao = parseInt(document.getElementById('selecao').value);
    console.log(selecao);
   
    if (isNaN(selecao)) {
        document.getElementById('resultado').innerHTML = 'Selecione um número';
        return;
      }
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    var resultado = '';
    num.forEach(function(n) {
      var selecao_N = selecao * n;
      resultado += selecao + " x " + n + " = " + selecao_N + "<br>";

     
    });
    document.getElementById('resultado').style.display = 'block'
    document.getElementById('resultado').innerHTML = resultado;
  }
  