function goodNews(nota) {
  if (nota >= 7) {
    console.log(`Aprovado com ${nota}`);
  }
}

goodNews(8.1);
goodNews(6.99);

function ifTrue(value) {
  if (value) console.log(`É verdade... ${value}`);
}

ifTrue();
ifTrue(null);
ifTrue(undefined);
ifTrue(NaN);
ifTrue(0);
ifTrue(-1);
ifTrue(1);
ifTrue("");
ifTrue("?");
ifTrue({ true: true });
ifTrue([1, 2, 3]);
