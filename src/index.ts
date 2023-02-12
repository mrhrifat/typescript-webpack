import Imam from "./lib/class";
import ImamInterface from "./lib/interface";

console.log("Hello Programmers");
const imams: object[] = [];

const imam1: ImamInterface = new Imam(1, "Ibn Jawji", 67, "Bagdad", "ASWJ");
console.log({ imam1 });
imam1.seeImam();
imams.push(imam1);

// const imam2: ImamInterface = new Imam(2, "Ibn Kayyim", "Iraq", 34, "ASWJ"); // Not allow cause of "Iraq" stay is wrong position
// const imam2: ImamInterface = new Imam(2, "Ibn Kayyim", 68, "Iraq", 34, "ASWJ"); // Not allow cause of 6 parameter instead of 5

let imam2: ImamInterface = new Imam(2, "Ibn Kayyim", 68, "Iraq", "ASWJ");
imams.push(imam2);
console.log({ imam2 });
imam2.seeImam();
imam2.seeMajhab();

const imam3: ImamInterface = new Imam(3, "Ibn Kasir", 78, "Iraq", "ASWJ");
imams.push(imam3);

console.log(imams);
