programa {
  funcao inicio() {
    
    inteiro n1, n2, resp, op
    caracter repete

   enquanto (repete != "n" ){

    escreva("Digite um n�mero: ")
    leia(n1)

    escreva("Digite outro n�mero: ")
    leia(n2)

    escreva("--- Operadores --- \n")
    escreva("1 - soma \n")
    escreva("2 - subtra��o \n")
    escreva("3 - multiplica��o \n")
    escreva("4 - divis�o \n")
    escreva("Digite o n�mero do operador: ")
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
        escreva("Op��o inv�lida!")
    }

    escreva("\nDeseja fazer outra conta? (s/ n): ")
    leia(repete)
    }
  }
}
