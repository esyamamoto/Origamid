function livro(nome , ano , autor){
    return {
        nome: nome.toUpperCase(),
        totalAnos: 2050 - ano,
        frase: nome + " por " + autor,
    };
}

const livro1 = livro ('O Senhor dos Anéis',1954,'J. R. R. Tolkien');

console.log(livro1);

/*
function livro(nome , ano , autor){
    const nomeMaior = nome.toUpperCase();
    const totalAnos = 2050 - ano;
    const frase = nome + " por " + autor;
    const objeto ={
        nome: nomeMaior,
        totalAnos, 
        frase,
};
    return objeto;
}

const livro1 = livro ('O Senhor dos Anéis',1954,'J. R. R. Tolkien');

console.log(livro1);
*/
