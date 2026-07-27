/* const mapping = new Map();

mapping.set("name", "soc");
mapping.set(42, "age")

mapping.set(42, "Answer")

mapping.delete(42)

console.log(mapping.get("name")); */

function underStanding(initialvalue) {
  let value = initialvalue;

  function insideFunc() {
    return value;
  }

  insideFunc.meth = function (nextValue) {
    value = nextValue;
  };

  return insideFunc;
}

const fn = underStanding(10);

console.log(fn.insideFunc());

fn.meth(2);

console.log(fn());
