
class Student {
    constructor(firstName, lastName , rollNumber , age) {
        //complete this function to initialize the object
        this.firstName=firstName;
        this.lastName=lastName;
        this.rollNumber=rollNumber;
        this.age=age;
    }
    
    printFullName() {
        //complete this function to print the full Name of the student object invoking the method
        console.log(this.firstName+this.lastName);
    }
    
    minorOrMajor(){
       //If age greater than 18 print Major
       //if age less than 18 print Minor
       //Complete this function
       if (this.age<18) {
        console.log("Minor");
       } else {
        console.log("Major");
       }
    }
}
function createNewStudents(){
    //create 2 object Yash and Ram with initial values as mentioned in question
    const s1=new Student('yash', 'prasad', 12, 27);
    const s2=new Student('ram', 'prasad', 14, 15);

    //Print yash's full name by invoking printFullName()   
    s1.printFullName();


    //Print whether yash is minor or major by invoking minorOrMajor function
   s1.minorOrMajor();

   //Print Rams's full name by invoking printFullName()  
    s2.printFullName();

    //Print whether Ram is minor or major by invoking minorOrMajor function
    s2.minorOrMajor();
}


createNewStudents();