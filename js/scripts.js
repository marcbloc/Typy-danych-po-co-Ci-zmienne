var a;
var b;
var triangleArea;

a = prompt('dodaj długość');
if (isNaN(a)) {
	alert('to nie liczba');
} else { 
	alert('to liczba');
}
b = prompt('podaj wysokość');
if (isNaN(b)) {
	alert('to nie liczba');
} else {
	alert('to liczba');
}
triangleArea = (a*h/2);
alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);


console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);