const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];

townsClone.push("aldebaran");
townsClone.push("lighthalzen");

console.log({ towns, townsCopy, townsClone });

townsCopy.pop();

console.log({ towns, townsCopy, townsClone });

const townsObj = { ...townsClone };
const townsObjClone = { ...townsObj };

townsObjClone.test = "test";

console.log({ townsObj, townsObjClone });
