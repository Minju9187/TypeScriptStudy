"use strict";
const el = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Max", "Schwarz");
result.split(" ");
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log(fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job.title);
const userInput = "";
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
//# sourceMappingURL=app.js.map