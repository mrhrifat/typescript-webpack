import Imam from "./lib/class";
import ImamInterface from "./lib/interface";

console.log("Hello Programmers");
const imam: ImamInterface = new Imam(1, "Ibn Jawji", 67, "Bagdad");
console.log(imam);
imam.seeImam();

// const imam2: ImamInterface = new Imam(2, "Ibn Kayyim", "Iraq", 34); // Not allow cause of "Iraq" stay is wrong position
// const imam2: ImamInterface = new Imam(2, "Ibn Kayyim", 68, "Iraq", 34); // Not allow cause of 5 parameter instead of 4
const imam2: ImamInterface = new Imam(2, "Ibn Kayyim", 68, "Iraq"); // Not allow cause of 5 parameter instead of 4
console.log(imam2);
