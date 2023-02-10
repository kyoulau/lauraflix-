var listaFilmes = []
listaFilmes[0] = 'https://m.media-amazon.com/images/I/81RmRRzJsiL._RI_.jpg'
listaFilmes[1] = 'https://m.media-amazon.com/images/M/MV5BNjNhNjVjZDQtMzRhMS00YmI2LTkxZmEtMDdkMWU3OWQ2NjNmXkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_FMjpg_UX1000_.jpg'
listaFilmes[2] = 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/97/BackFuturePoster.jpg/225px-BackFuturePoster.jpg'
listaFilmes[3] = 'https://br.web.img3.acsta.net/medias/nmedia/18/90/57/96/20121842.jpg'
listaFilmes[4] = 'https://upload.wikimedia.org/wikipedia/en/3/32/Serial_Experiments_Lain_DVD_vol_1.jpg'
var nomesFilmes = [
  'Crepusculo','Querido menino','De volta para o futuro', 'Batman-o cavaleiro das trevas','Serial experiments Lain']

//for (var i = 0; i < listaFilmes.length; i++) {
  //elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var trailerFilme = document.getElementById("trailer").value; 
  var elementoFilme = "<a href=" + trailerFilme + " target='_blank'>" + "<img src=" + filmeFavorito + ">" + "</a>";
  
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme
   document.getElementById("filme").value = "";
  document.getElementById("trailer").value = "";}