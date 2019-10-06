const n1 = Number(prompt("Enter No 1"));
const n2 = Number(prompt("Enter No 2"));

if (n1 == n2) {
	document.write(n1 + "<br>Both numbers are equal.");
} else if (n1 > n2) {
	document.write(n1 + "<br>Number 1 is greater.");
} else {
	document.write(n2 + "<br>Number 2 is greater.");
}