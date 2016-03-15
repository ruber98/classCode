alert('script.js working')
var count = 1;
var limit = 100;

while (count <= limit){
 $('.counter').append(count + " of " + limit + "<br>");
    count++;
}