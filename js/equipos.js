var teamG = '{"jugador" : [' +
  '{"nombre":"Katie Bell", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Ginny Weasly", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Demelza Robins", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Jimmy Peakes", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Ritchie Coote", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Ron Weasley", "posicion":"guardian", "puntos":0},' +
  '{"nombre":"Harry Potter", "posicion":"buscador", "puntos":0}' +
']}';

var teamS = '{"jugador" : [' +
  '{"nombre":"Urquhart", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Vaisey", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Blaise Zabini", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Vincent Crabbe", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Gregory Goyle", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Salazar Slytherin", "posicion":"guardian", "puntos":0},' +
  '{"nombre":"Draco Malfoy", "posicion":"buscador", "puntos":0}' +
']}';

var teamR = '{"jugador" : [' +
  '{"nombre":"Roger Davies", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Jeremy Stretton", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Randolph Burrow", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Duncan Inglebee", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Jason Samuels", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Grant Page", "posicion":"guardian", "puntos":0},' +
  '{"nombre":"Cho Chang", "posicion":"buscador", "puntos":0}' +
']}';

var teamH = '{"jugador" : [' +
  '{"nombre":"Malcom Preece", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Heidi Macavoy", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Tramsin Applebee", "posicion":"cazador", "puntos":0},' +
  '{"nombre":"Anthony Rickett", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Michael McManus", "posicion":"golpeador", "puntos":0},' +
  '{"nombre":"Herbert Fleet", "posicion":"guardian", "puntos":0},' +
  '{"nombre":"Cedric Digory", "posicion":"buscador", "puntos":0}' +
']}';

var jugadoresGryffindor = JSON.parse(teamG);
var jugadoresSlytherin = JSON.parse(teamS);
var jugadoresRavenclaw = JSON.parse(teamR);
var jugadoresHufflepuff = JSON.parse(teamH);

class Equipo {
  constructor(nombre,imagen,jugadores) {
    this._nombre = nombre;
    this._imagen = imagen;
    this._jugadores = jugadores;
    this._puntos = 0;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(x) {
    this._nombre = x;
  }
  get imagen() {
    return this._imagen;
  }
  set imagen(x) {
    this._imagen = x;
  }
  get jugadores() {
    return this._jugadores;
  }
  set jugadores(x) {
    this._jugadores = x;
  }
  get puntos() {
    return this._puntos;
  }
  set puntos(x) {
    this._puntos = x;
  }
}

gryffindor = new Equipo("gryffindor","gryffindor.png",jugadoresGryffindor);
slytherin = new Equipo("gryffindor","gryffindor.png",jugadoresSlytherin);
ravenclaw = new Equipo("gryffindor","gryffindor.png",jugadoresRavenclaw);
hufflepuff = new Equipo("gryffindor","gryffindor.png",jugadoresHufflepuff);
