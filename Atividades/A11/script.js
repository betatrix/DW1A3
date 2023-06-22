
'use strict';

const cep = document.querySelector('#cep');
const buscarCepBtn = document.querySelector('#buscarCepBtn');
buscarCepBtn.addEventListener('click', buscaCEP);

function apresentarDados(data) {
    for (const campo in data) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = data[campo];
        }
    }
}

function buscaCEP(e) {
    e.preventDefault(); 

    let busca = cep.value.replace('-', '');

    const option = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${busca}/json/`, option)
        .then((response) => {
            response.json()
                .then((data) => {
                    apresentarDados(data);
                });
        })
        .catch((e) => {
            console.log('Erro: ', e.message);
        });
}