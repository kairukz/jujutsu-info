function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById
  ("resultados-pesquisa");

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value
  
  if (campoPesquisa === "") {
    section.innerHTML = "<p style='color: white;'>Nada foi encontrado. Você precisa digitar o nome de um personagem ou técnica.</p>";
    return;
  }

 campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let titulo =  "";
  let descricao = "";
  let tags = "";

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //se titulo includes campoPesquisa
    if( titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Cria um novo elemento 
      resultados += `
      <div class="item-resultado">
        <img src="${dado.imagem}"" width="130px" alt="uma imagem de satoru gojo" ${dado.titulo}>
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank"> mais informações</a>
      </div>
    `;
    }

   
    // Cria uma nova div para cada item do resultado
   
  }

if (!resultados) {
    resultados = "<p> Nada foi encontrado </p>"
}
  // Atribui os resultados formatados à seção HTML
  section.innerHTML = resultados;
}

