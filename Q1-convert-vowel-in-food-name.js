const convertVowel = (food_name) => {
  food_name.toLowerCase();
  const array_food_name = food_name.split("");
  const keys_values_vowels = {
    e: "a",
    i: "e",
    o: "i",
    u: "o",
    a: "u",
  };
  const edited_food_name = array_food_name.map((char) => {
    if (keys_values_vowels[char]) return keys_values_vowels[char];
    return char;
  });
  return edited_food_name.join("");
};

console.log(convertVowel("eppli"));
