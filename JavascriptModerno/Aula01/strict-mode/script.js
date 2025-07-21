// "use strict";

function showMessage() {
	message = "Fala dev!"
    console.log(message);
}

showMessage();

class Student{
	get pont(){
		return 7;
	}
}

student = new Student();
console.log(student.pont);