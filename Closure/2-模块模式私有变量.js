/* @模块模式 */

const Person = function(name, age, pet) {
  let _pet = pet;
  this.name = name;
  this.age = age;

  return {
    name,
    age,
    getPet: () => _pet,
    setPet: newPet => (_pet = newPet)
  };
};

const p1 = new Person("tao", 25, { name: "大黄" });
const p2 = new Person("asdadas", 215, { name: "小黑" });

console.log(p1.getPet());
console.log(p2.getPet());

console.log(p1.name);
p1.name = "newName for p1";
console.log(p1.name);

// 缺点：
// 无法使用 instanceof 判断类型
