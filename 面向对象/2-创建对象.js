const person = {};

Object.defineProperty(person, "name", {
  writable: false,
  value: "Nicole"
});

console.log(person.name);
person.name = "James";
console.log(person.name);

const book = {
  _year: 2004,
  edition: 1
};

Object.defineProperty(book, "year", {
  get: function() {
    return this._year + " year";
  },
  set: function(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
});

console.log(book.year);
book.year = 2009;
console.log(book);

function Person() {}
Person.prototype.name = "Nicole";
Person.prototype.age = 25;
Person.prototype.job = "engineer";
Person.prototype.greet = function() {
  console.log(`hello ${this.name} ${this.age} ${this.job}`);
};

const p1 = new Person();
const p2 = new Person();
p1.greet();

console.log(p1.greet === p2.greet); // true

for (let key in p1) {
  console.log(key);
}

function Animal(type, age, weight) {
  this.type = type;
  this.age = age;
  this.weight = weight;

  if (typeof this.eat !== "function") {
    Animal.prototype.greet = function() {
      console.log(this.type);
    };
  }
}

const a1 = new Animal("dog", 5, 1.9);
const a2 = new Animal("dog", 5, 1.9);

a1.greet();
console.log(a1.greet === a2.greet);
