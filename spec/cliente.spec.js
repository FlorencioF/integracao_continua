const Cliente = require('../models/cliente');
const { ExpectationFailed } = require('http-errors');

test('Testando se o modelo cliente tem a propriedade nome', () => {
    let cliente = new Cliente();
    cliente.nome = 'Fernando';
    expect(cliente.nome).not.toBeUndefined();
});

test('Testando se o modelo cliente tem a propriedade cpf', () => {
    let cliente = new Cliente();
    cliente.cpf = '444.222.333-66';
    expect(cliente.cpf).not.toBeUndefined();
});

test('Validando o cpf', () => {
    let cliente = new Cliente();
    cliente.cpf = '423.467.658-64';
    expect(cliente.validarCPF()).toBe(true);
});

test('Validando o cpf underfined', () => {
    let cliente = new Cliente();
    cliente.cpf = undefined;
    expect(cliente.validarCPF()).toBe(false);
});