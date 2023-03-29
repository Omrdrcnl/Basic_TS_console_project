import { Country, City } from "./typeExample";

function hello(name: string) {
  name = name.toLowerCase();
  console.log("merhaba :" + name);
}

hello("Ömer");

const names: string[] = [];

names.push("Orhan");
names.push("Mehmet", "Tuğba");

console.log("Sınıf Listesi :" + names);

type WeekDays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

const todays: WeekDays = "friday";

console.log("Todays is ", todays);

const turkey: Country = {
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

function addCity(
  country: Country,
  name: string,
  plateCode: number,
  areaCode: number,
  isCapital: boolean
) {
  country.cities.push({ name, areaCode, plateCode, isCapital });
}
addCity(turkey, "Samsun", 55, 362, false);
addCity(turkey, "İstanbul", 34, 216, false);
console.log(turkey);
