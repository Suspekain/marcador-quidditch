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

var equipoGryffindor = JSON.parse(teamG);
var equipoSlytherin = JSON.parse(teamS);
var equipoRavenclaw = JSON.parse(teamR);
var equipoHufflepuff = JSON.parse(teamH);

for (var i = 0; i <= 6; i++) {
  console.log(equipoGryffindor.jugador[i].nombre + " " + equipoGryffindor.jugador[i].posicion + " " + equipoGryffindor.jugador[i].puntos);
}
for (var i = 0; i <= 6; i++) {
  console.log(equipoSlytherin.jugador[i].nombre + " " + equipoSlytherin.jugador[i].posicion + " " + equipoSlytherin.jugador[i].puntos);
}
for (var i = 0; i <= 6; i++) {
  console.log(equipoRavenclaw.jugador[i].nombre + " " + equipoRavenclaw.jugador[i].posicion + " " + equipoRavenclaw.jugador[i].puntos);
}
for (var i = 0; i <= 6; i++) {
  console.log(equipoHufflepuff.jugador[i].nombre + " " + equipoHufflepuff.jugador[i].posicion + " " + equipoHufflepuff.jugador[i].puntos);
}
