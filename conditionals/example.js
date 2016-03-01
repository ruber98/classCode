// if(ans >= 18){
// registered = confirm('Are you registered?');
// }

// if(ans >= 18 && registered) {
//   alert("you can vote!");
// }else if(ans >= 18 && !registered) {
//   alert("you need to register to vote!");
// }
// else {
//   alert("you can't vote yet!");
// }

var ans = parseInt(prompt("Enter your age"));
var registered = false;
var citizen = false;


if(ans >= 18){
  registered = confirm('Are you registered?');
  citizen = confirm('Are you a U.S. Citizen');
}

if(!registered || !citizen){
  alert('you wont be able to vote');
}

// if(ans >= 18 && registered) {
//   alert("you can vote!");
// }else if(ans >= 18 && !registered) {
//   alert("you need to register to vote!");
// }