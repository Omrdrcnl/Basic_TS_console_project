"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name) {
    name = name.toLowerCase();
    console.log("merhaba :" + name);
}
hello("Ömer");
const names = [];
names.push("Orhan");
names.push("Mehmet", "Tuğba");
console.log("Sınıf Listesi :" + names);
const todays = "friday";
console.log("Todays is ", todays);
const turkey = {
    name: "Türkiye",
    areaCode: 90,
    cities: [
        {
            name: "Çorum",
            plateCode: 19,
            areaCode: 364,
            isCapital: false,
        },
        {
            name: "Ankara",
            plateCode: 6,
            areaCode: 312,
            isCapital: true,
        },
    ],
};
console.log(turkey);
function addCity(country, name, plateCode, areaCode, isCapital) {
    country.cities.push({ name, areaCode, plateCode, isCapital });
}
addCity(turkey, "Samsun", 55, 362, false);
addCity(turkey, "İstanbul", 34, 216, false);
console.log(turkey);
