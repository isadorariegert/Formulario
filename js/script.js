// INCLUINDO VALIDAÇÃO COM JQ: 

$("#formulario").validate({
    rules : {
        nome : {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
        },
        fone: {
            required: true,
            minlength: 15
        },
        CPF: {
            required: true,
            minlength: 14
        },
        nasc: {
            required: true,
            minlength: 10
        },
        end: {
            required: true,
            minlength: 5
        },
        CEP: {
            required: true,
            minlength: 9
        },
        cidade: {
            required: true,
            minlength: 3
        },
        UF: {
            required: true,
            minlength: 2
        },
        checkbox: {
            required: true,
        }

    },
    messages : {
        nome: {
            required: "Por favor, informar seu Nome.",
            minlength: "Informar um nome válido."
        },
        email: {
            required: "Por favor, preencher o campo E-mail",
            email: "Insira um e-mail válido."
        },
        fone: {
            required: "Por favor, preencher o campo Telefone",
            minlength: "Insira um número válido."
        },
        CPF: {
            required: "Por favor, informar seu CPF",
            minlength: "Informar um CPF válido."
        },
        nasc: {
            required: "Por favor, informar data de nascimento.",
            minlength: "Informar data no formato: DD/MM/AAAA."
        },
        end: {
            required: "Por favor, informar seu endereço",
            minlength: "Informar um endereço válido."
        },
        CEP: {
            required: "Por favor, informar o CEP.",
            minlength: "Informar um CEP válido."
        },
        cidade: {
            required: "Por favor, preencher o campo Cidade.",
            minlength: "Informar Cidade válida."
        },
        UF: {
            required: "Por favor, preencher o campo Estado.",
            minlength: "Informar UF."
        },
        checkbox: {
            required: "Este campo é obrigatório!"
        }
    }
});

// INCLUIDO MÁSCARAS COM JQ:

$("#fone").mask('(00) 00000-0000');

$("#CPF").mask('000.000.000-00');

$("#nasc").mask('00/00/0000');

$("#CEP").mask('00000-000');

$("#UF").mask('AA');


