function buscarEndereco() {
    var cep = document.getElementById('cep').value;
    if (cep.length == 8) {
      $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
        if (!data.erro) {
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('estado').value = data.uf;
        } else {
          alert('CEP não encontrado.');
        }
      });
    }
  }