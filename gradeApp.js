// Grading App v1.0
 btnSubmit.addEventListener("click", function(){
      
    var grade = document.getElementById("grade").value;

//Input your code below:
        if(grade >= 90){
  alert("A");
}
   else if(grade >= 80 && grade < 90){
  alert("B");
   }
   else if(grade >= 70 && grade < 80){
     alert("C");
   }
   else if(grade >= 60 && grade < 70){
     alert("D");
   }
   else if(grade < 60 && grade >= 0){
     alert("FAIL");
   } else if(grade == 'a' || grade == 'A'){
     alert('Your grade is between 90 and 100.')
   } else if(grade.toLowerCase() == 'b'){
     alert('your grade is between 80 and 89')
   }
   

   
 });   