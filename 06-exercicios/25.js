const buscaPalavrasSemelhantes = (termo, palavras) => palavras.filter((p) => p.includes(termo));

console.log(buscaPalavrasSemelhantes("pro", ["Programação", "mobile", "profissional"]));
console.log(buscaPalavrasSemelhantes("python", ["javascript", "java", "c++"]));
