function throwError() {
  throw new Error("...");
}

function printName(person) {
  try {
    console.log(`Hey, ${person.fullName.toUpperCase()} !!!`);
  } catch (error) {
    throwError();
  } finally {
    console.log("finally");
  }
}

const person = { fullName: "Matheus Antonio" };
const secondPerson = { fakeName: "Matheus Antonio" };

printName(person);

printName(secondPerson);
