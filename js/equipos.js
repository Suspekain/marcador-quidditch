var teamG = '{"jugador" : [' +
  '{"id":"g1", "nombre":"Katie Bell", "posicion":"cazador", "puntos":0},' +
  '{"id":"g2", "nombre":"Ginny Weasly", "posicion":"cazador", "puntos":0},' +
  '{"id":"g3", "nombre":"Demelza Robins", "posicion":"cazador", "puntos":0},' +
  '{"id":"g4", "nombre":"Jimmy Peakes", "posicion":"golpeador", "puntos":0},' +
  '{"id":"g5", "nombre":"Ritchie Coote", "posicion":"golpeador", "puntos":0},' +
  '{"id":"g6", "nombre":"Ron Weasley", "posicion":"guardian", "puntos":0},' +
  '{"id":"g7", "nombre":"Harry Potter", "posicion":"buscador", "puntos":0}' +
']}';

var teamS = '{"jugador" : [' +
  '{"id":"s1", "nombre":"Urquhart", "posicion":"cazador", "puntos":0},' +
  '{"id":"s2", "nombre":"Vaisey", "posicion":"cazador", "puntos":0},' +
  '{"id":"s3", "nombre":"Blaise Zabini", "posicion":"cazador", "puntos":0},' +
  '{"id":"s4", "nombre":"Vincent Crabbe", "posicion":"golpeador", "puntos":0},' +
  '{"id":"s5", "nombre":"Gregory Goyle", "posicion":"golpeador", "puntos":0},' +
  '{"id":"s6", "nombre":"Salazar Slytherin", "posicion":"guardian", "puntos":0},' +
  '{"id":"s7", "nombre":"Draco Malfoy", "posicion":"buscador", "puntos":0}' +
']}';

var teamR = '{"jugador" : [' +
  '{"id":"r1", "nombre":"Roger Davies", "posicion":"cazador", "puntos":0},' +
  '{"id":"r2", "nombre":"Jeremy Stretton", "posicion":"cazador", "puntos":0},' +
  '{"id":"r3", "nombre":"Randolph Burrow", "posicion":"cazador", "puntos":0},' +
  '{"id":"r4", "nombre":"Duncan Inglebee", "posicion":"golpeador", "puntos":0},' +
  '{"id":"r5", "nombre":"Jason Samuels", "posicion":"golpeador", "puntos":0},' +
  '{"id":"r6", "nombre":"Grant Page", "posicion":"guardian", "puntos":0},' +
  '{"id":"r7", "nombre":"Cho Chang", "posicion":"buscador", "puntos":0}' +
']}';

var teamH = '{"jugador" : [' +
  '{"id":"h1", "nombre":"Malcom Preece", "posicion":"cazador", "puntos":0},' +
  '{"id":"h2", "nombre":"Heidi Macavoy", "posicion":"cazador", "puntos":0},' +
  '{"id":"h3", "nombre":"Tramsin Applebee", "posicion":"cazador", "puntos":0},' +
  '{"id":"h4", "nombre":"Anthony Rickett", "posicion":"golpeador", "puntos":0},' +
  '{"id":"h5", "nombre":"Michael McManus", "posicion":"golpeador", "puntos":0},' +
  '{"id":"h6", "nombre":"Herbert Fleet", "posicion":"guardian", "puntos":0},' +
  '{"id":"h7", "nombre":"Cedric Digory", "posicion":"buscador", "puntos":0}' +
']}';

var jugadoresGryffindor = JSON.parse(teamG);
var jugadoresSlytherin = JSON.parse(teamS);
var jugadoresRavenclaw = JSON.parse(teamR);
var jugadoresHufflepuff = JSON.parse(teamH);

class Equipo {

  constructor(nombre,imagen,jugadores) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.jugadores = jugadores;
    this.puntos = 0;
  }
  
}

gryffindor = new Equipo("gryffindor","gryffindor.png",jugadoresGryffindor);
slytherin = new Equipo("slytherin","slytherin.png",jugadoresSlytherin);
ravenclaw = new Equipo("ravenclaw","ravenclaw.png",jugadoresRavenclaw);
hufflepuff = new Equipo("hufflepuff","hufflepuff.png",jugadoresHufflepuff);
