'use strict';

//map + display marker (for data from code + on click)

document.querySelector('body').style.height='600px';
document.querySelector('#map').style.height='600px';

//map
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        function(position){
            const {latitude}=position.coords;
            const {longitude}=position.coords;
const coords =[latitude,longitude];
console.log(coords);
const map =L.map('map').setView(coords,13);
L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,'}).addTo(map);

//marker on load in current position
L.marker(coords)
.addTo(map)
.bindPopup(
L.popup({
    maxWidth : 250,
    minWidth :100,
    autoClose :false,
    closeOnClick :false,
    className : 'add css class here',
})
)
.setPopupContent('i am here')
.openPopup();

// array of objects 
const data =[{
    id: 33100005,
    name:'Clos des Celestins',
    latitude:46.12966,
    longitude:3.42564,
},{
    id: 33100006,
    name:'Plage des CC)lestins',
    latitude:46.11867,
    longitude:3.4222,
},{
    id: 33100010,
    name:'Stade Equestre de Vichy',
    latitude:46.132575,
    longitude:3.425185,
},];

//loop over the array + create markers for each lat and lng of each object in array
data.forEach(function(d){
    L.marker([d.latitude,d.longitude])
    .addTo(map)
    .bindPopup(
    L.popup({
        maxWidth : 250,
        minWidth :100,
        autoClose :false,
        closeOnClick :false,
        className : 'add css class here',
    })
    )
    .setPopupContent('My marker')
    .openPopup();
});

//add marker on click
map.on('click', 
function(mapEvent){
const {lat,lng} = mapEvent.latlng;
L.marker([lat,lng])
.addTo(map)
.bindPopup(
L.popup({
    maxWidth : 250,
    minWidth :100,
    autoClose :false,
    closeOnClick :false,
    className : 'add css class here',
})
)
.setPopupContent('My Marker')
.openPopup();
});
}, 

function(){
            alert('could not get your position');
        }
    );
}
