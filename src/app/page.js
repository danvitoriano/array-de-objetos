export default function Home() {

  const arrayDeObjetos = [{
    rm: 1243,
    nome: 'Danilo',
    idade: 42
  }, {
    rm: 1244,
    nome: 'Diego',
    idade: 20
  }, {
    rm: 1245,
    nome: 'Mariana',
    idade: 22
  },
  {
    rm: 1246,
    nome: 'Roberto',
    idade: 22
  },
];

  return (
    <main>
      <h1>Home</h1>
      <ul>
        {
          arrayDeObjetos.map(
            function(objeto) {
              return (<li key={objeto.rm}>{objeto.nome} - {objeto.idade}</li>)
            }
          )
        }
      </ul>
    </main>
  )
};