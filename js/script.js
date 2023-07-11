let now = new Date();
let year = now.getFullYear();

const dateOfBirth = Number(prompt(`Enter year of birth:`));
let age = null;
let stringAge = ``;
if (dateOfBirth == 0) {
    alert(`It's a pity that you didn't want to enter your age.`);
}
else if (dateOfBirth > year) {
    alert(`Error. The entered value cannot exceed the current date.`);
}
else if (isNaN(dateOfBirth)){
    alert(`Error. The date entered is not a number.`);
}
else if (dateOfBirth < (year - 150)) {
    alert(`Error. You are very old.`);
}
else {
    age = year - dateOfBirth;
}

if (age == null) {
    stringAge = `Sorry, we couldn't calculate your age due to a data entry error.`;
} else {
    stringAge = `Your age is ${age}.`;
}

const city = prompt(`Enter the city where you live:`);

let stringCity = ``;
if (city == null) {
    alert(`It's a pity that you didn't want to enter your city.`);
    stringCity = `You have not entered city information.`;
}
else if (city === `Київ` || city === `Kyiv`) {
    stringCity = `You live in the capital of Ukraine`;
}
else if (city === `Вашингтон` || city === `Washington`) {
    stringCity = `You live in the capital of USA`;
}
else if (city === `Лондон` || city === `London`) {
    stringCity = `You live in the capital of United Kingdom`;
}
else {
    stringCity = `You live in a city called ${city}`;
}

const sport = prompt(`Enter your favorite sport:
*Implemented: boxing, athletics, swimming`);

let stringSport = ``;
console.log(sport);

if (sport == null) {
    alert(`It's a pity that you didn't want to enter your favorite sport.`);
    stringSport = `You have not entered data about your favorite sport.`;
}
else if (sport.toLowerCase() === `boxing`|| sport.toLowerCase() === `бокс`) {
    stringSport = `Cool! Your favorite sport is boxing. Do you want to become Oleksandr Usyk?`;
}
else if (sport.toLowerCase() === `athletics` || sport.toLowerCase() === `легка атлетика`) {
    stringSport = `Cool! Your favorite sport is athletics. Do you want to become Marcell Jacobs?`;
}
else if (sport.toLowerCase() === `swimming` || sport.toLowerCase() === `плавання`) {
    stringSport = `Cool! Your favorite sport is swimming. Do you want to become Caeleb Dressel?`;
}
else {
    stringSport = `Is ${sport} your favorite sport? Cool!`
}

alert(`${stringAge}
${stringCity}
${stringSport}`);