//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

//code here
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

//code here
const instructor = new Person("Aodhan", 28);
const instructor1 = new Person("Oscar", 24);
const instructor2 = new Person("Noe", 20);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

//code here
Person.prototype.sayName = function() {
  alert(this.name);
};
