function calcularMedia() {
    // Obter os valores das notas
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
  
    // Calcular a média
    let media = (nota1 + nota2 + nota3) / 3;
  
    // Verificar o status do aluno
    let status = media >= 6 ? "Aprovado" : "Reprovado";
  
    // Exibir o resultado
    document.getElementById("resultado").textContent = "Média do aluno: " + media.toFixed(2) + " - " + status;
  }
  