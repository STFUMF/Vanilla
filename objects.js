/* const mapping = new Map();

mapping.set("name", "soc");
mapping.set(42, "age")

mapping.set(42, "Answer")

mapping.delete(42)

console.log(mapping.get("name")); */

const person = {
  name: "Soc",
};

const greeting = (name) => `Hello: ${name}`;

Object.assign(person, {
  greeting: greeting(person.name),
});

console.log(person);
