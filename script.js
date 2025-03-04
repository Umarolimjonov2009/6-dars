let students = [
    "Amirxon",
    "Umar",
    "Humoyun",
    "Abdulloh",
];
console.log(students);
alert("Boshlanishdagi array uzunligi: " + students.length);

let javob=confirm("ichidan bitta element o'chirmoqchimiz")

 if(javob==true){
    students.pop();
    alert(" array uzunligi: " + students.length);
 }else{
    alert("Boshlanishdagi array uzunligi: " + students.length);
 }
 console.log(students);