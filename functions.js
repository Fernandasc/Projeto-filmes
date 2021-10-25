function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      var campoFilme = "<img src=" + filmeFavorito + ">";
      var listaFilmes = document.getElementById("listaFilmes");
      listaFilmes.innerHTML = listaFilmes.innerHTML + campoFilme;
    } else {
      alert("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }