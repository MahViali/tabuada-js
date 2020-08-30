function Tabuada(tabuada, indice){    
  const resultado = tabuada * indice;

  if(indice <= 10){    
    const lista = document.getElementById('tabuada');
    const novo = document.createElement('li');
    novo.appendChild(document.createTextNode(`${tabuada} x ${indice} = ${resultado}`));
    lista.appendChild(novo);

    indice = indice + 1;
    Tabuada(tabuada, indice)
  }
}

document.getElementById('button').addEventListener('click', () => {
  const tabuada = document.getElementById('tabuada');
  tabuada.innerHTML = "";

  Tabuada(document.getElementById('input').value, 0);
});

