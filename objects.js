/* const mapping = new Map();

mapping.set("name", "soc");
mapping.set(42, "age")

mapping.set(42, "Answer")

mapping.delete(42)

console.log(mapping.get("name")); */

function createApp() {
  const state = {
    name: null,
    age: null,
    address: null,
  };

  const app = {
    getName(value) {
      state.name = value;

      return app;
    },

    getAge(value) {
      state.age = value;

      return app;
    },

    getAddress(value) {
      state.address = value;
      return app;
    },
  };

  return app;
}

const testss = createApp().getName("soc");

console.log(testss);
