function validacao(){

    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let data = document.getElementById("i_data");
    let senha = document.getElementById("i_senha");
    let com_senha = document.getElementById("i_conSenha");

    input_style(nome, "#f45656", "#008000");
    input_style(sobrenome, "#f45656", "#008000");
    input_style(data, "#f45656", "#008000");
    input_style(senha, "#f45656", "#008000");
    input_style(com_senha, "#f45656", "#008000");
    
}

//input recebe um campo do formulario
//cor_1 altera o campo quando o campo esta errado
//cor_2 altera o campo quando esta certo
function input_style(input, cor_1, cor_2){

    //quando o campo esta errado
    if(!input.checkValidity()){
       return input.style.border = `3px solid ${cor_1}`
    }else{
       return input.style.border = `2px solid ${cor_2}`
    }

    
}