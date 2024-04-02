//complete this code
class Person {
	  #name;
        #age;
        constructor(name,age){
          this.#name = name
          this.#age = age

        }
        set age(data){
          this.#age = data
        }

        get name(){
          return this.#name
        }
}

class Student extends Person {
	 constructor(name,age){
          super(name,age)
        }
        study(){
          console.log(`${this.name} is studying`)
        }
}

class Teacher extends Person {
	 constructor(name,age){
          super(name,age)

        }
        teach(){
          console.log(`${this.name} is teaching`)
        }
}
 const person = new Person("Anis",24)
      console.log(person.name)

      person.age = 30
      console.log(person.age)

      const student = new Student("shamim",27)
      student.study()
      
      const teacher = new Teacher("bob",40)
      teacher.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
