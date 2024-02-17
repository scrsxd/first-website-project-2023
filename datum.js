
function dnes (){ 
var datum = new Date(); 
var mesic = datum.getMonth(); 
var navratova_hodnota = null; 
var den = null; 
mesic++; 
if (datum.getDay()==0) {den = "Neděle "} 
if (datum.getDay()==1) {den = "Pondělí "} 
if (datum.getDay()==2) {den = "Úterý "} 
if (datum.getDay()==3) {den = "Středa "} 
if (datum.getDay()==4) {den = "Čtvrtek "} 
if (datum.getDay()==5) {den = "Pátek "} 
if (datum.getDay()==6) {den = "Sobota "} 
navratova_hodnota = den  +  datum.getDate() + "." + mesic + "." + datum.getFullYear();
return(navratova_hodnota); 
}      
