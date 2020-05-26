const Words = [
    "teleskop",
    "brasa",
    "underminera",
    "spelaren",
    "bevara",
    "uppror",
    "staket",
    "observationsorgan",
    "månad",
    "kvacksalvare",
    "aerosol",
    "oljig",
    "förening"
];

let GetRandomWord = () => {
    let index = Math.floor(Math.random() * Words.length);
    return Words[index];
}

export default GetRandomWord;