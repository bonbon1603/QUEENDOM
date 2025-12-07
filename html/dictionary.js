/* ============================
   OPTIMIZED EN → SIGN ROOT MAP
   ============================ */

const dictionary = {
    // Personal pronouns
    i: ["i", "me", "my", "myself"],
    you: ["you", "your", "yourself"],
    he: ["he", "him", "his"],
    she: ["she", "her"],
    they: ["they", "them", "their", "themselves"],
    we: ["we", "us", "our"],

    // Verbs
    love: ["love"],
    like: ["like"],
    need: ["need"],
    want: ["want"],
    eat: ["eat"],
    drink: ["drink"],
    go: ["go"],
    come: ["come"],
    see: ["see"],
    know: ["know"],
    understand: ["understand"],

    // Nouns
    water: ["water"],
    food: ["food"],
    home: ["home", "house"],
    school: ["school"],
    friend: ["friend"],
    family: ["family"],
    mother: ["mother", "mom"],
    father: ["father", "dad"],

    // Greetings
    hi: ["hi", "hello"],
    bye: ["bye", "goodbye"],

    // Other
    yes: ["yes"],
    no: ["no"],
    not: ["not"]
};

/* ============================
   BUILD LOOKUP TABLE
   (fast lookup: any word → root)
   ============================ */

const lookup = {};

for (const root in dictionary) {
    for (const word of dictionary[root]) {
        lookup[word.toLowerCase()] = root;
    }
}

/* ============================
   NORMALIZE INPUT TEXT
   ============================ */

function normalizeText(str){
    if (!str) return "";
    let s = str.toLowerCase().trim();

    // Remove accents
    s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Keep only letters/numbers/spaces
    s = s.replace(/[^a-z0-9'\s]/g, "");

    // Remove extra spaces
    s = s.replace(/\s+/g, " ").trim();

    return s;
}

/* ============================
   GET VIDEO FOR SPECIFIC WORD
   ============================ */

function getVideoForWord(word){
    const root = lookup[word.toLowerCase()];
    if (!root) return null;

    return `videos/${root}.mp4`;  
}

/* ============================
   PROCESS FULL SENTENCE
   (return list of video filenames)
   ============================ */

function translateToSigns(sentence){
    const clean = normalizeText(sentence);
    if (!clean) return [];

    const words = clean.split(" ");

    const results = [];

    for (const w of words) {
        const video = getVideoForWord(w);
        if (video) results.push(video);
    }

    return results;
}
