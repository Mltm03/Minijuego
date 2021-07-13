const widht=400; 
const height= 400; 

let target = {
    x: RandomNum (widht),
    y: RandomNum (height)
}; 

let $map = document.getElementById('map'); 
let $distance = document.getElementById('distance'); 
let clicks = 0; 

$map.addEventListener('click', function (e) {
 clicks++; 
 let distance = getDistance(e, target);
 let distanceHint= getDistanceHint(distance); 
 $distance.innerHTML = `<h1>${distanceHint}</h1>`

 if (distance < 20){
     alert (`Found the treasure in ${clicks} clicks!`);
     location.reload(); 
 
    }

})