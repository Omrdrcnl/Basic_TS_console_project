type City = {
  name: string;
  plateCode: number;
  areaCode: number;
  isCapital: boolean;
};

type Country = {
  name: string;
  areaCode: number;
  cities: City[];
};

type Species = "Mammals" | "Birds" | "Reptiles" | "Arthropohds";

type Diet = "carnivorous" | "herbivorous" | "omnivore";

export type { City, Country, Species, Diet };
