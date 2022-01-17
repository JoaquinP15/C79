var Name_of_student=[];

function submit()


{var name1=document.getElementById("Name_of_student_1").value;
var name2=document.getElementById("Name_of_student_2").value;
var name3=document.getElementById("Name_of_student_3").value;
var name4=document.getElementById("Name_of_student_4").value;

Name_of_student.push(name1);
Name_of_student.push(name2);
Name_of_student.push(name3);
Name_of_student.push(name4);

console.log(Name_of_student);

document.getElementById("Display_name").innerHTML=Name_of_student;

document.getElementById("Submit_button").style.display="none";

document.getElementById("Sort_button").style.display="inline-block";

}

function sorting(){
    Name_of_student.sort();
    
    console.log(Name_of_student);

    document.getElementById("Display_name").innerHTML=Name_of_student;
}