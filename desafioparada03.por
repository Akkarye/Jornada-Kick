programa {
  funcao inicio() {
    
    inteiro n1, n2, resp, op
    caracter repete

   enquanto (repete != "n" ){

    escreva("Digite um número: ")
    leia(n1)

    escreva("Digite outro número: ")
    leia(n2)

    escreva("--- Operadores --- \n")
    escreva("1 - soma \n")
    escreva("2 - subtração \n")
    escreva("3 - multiplicação \n")
    escreva("4 - divisão \n")
    escreva("Digite o número do operador: ")
    leia(op)

    escolha(op){
      caso 1:
        resp = n1 + n2
        escreva(n1, " + ", n2, " = ", resp)
        pare
      caso 2:
        resp = n1 - n2
        escreva(n1, " - ", n2, " = ", resp)
        pare
      caso 3:
        resp = n1 * n2
        escreva(n1, " * ", n2, " = ", resp)
        pare
      caso 4:
        resp = n1 / n2
        escreva(n1, " / ", n2, " = ", resp)
        pare
      caso contrario
        escreva("Opção inválida!")
    }

    escreva("\nDeseja fazer outra conta? (s/ n): ")
    leia(repete)
    }
  }
}
