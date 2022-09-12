const nome = 'bruno';
const sobrenome = 'navarro';
const trizal = 'tropa';

const falaNome = () => nome + ' ' + sobrenome + ' ' + trizal;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.zueiraTeste = 'faço o que eu quiser'; // this tambem indica há exports
//console.log(exports);