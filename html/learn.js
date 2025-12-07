const words = {
    beginner: ["anh", "yeu", "em"],
    intermediate: ["xin", "chao"],
    advanced: ["tuong", "lai"]
};

const levelSelect = document.getElementById("level");
const wordList = document.getElementById("word-list");
const learnArea = document.getElementById("learn-area");
const selectedWordTitle = document.getElementById("selected-word");
const learnVideo = document.getElementById("learn-video");
const nextBtn = document.getElementById("next-word");

let currentWords = [];
let currentIndex = 0;

function loadWords() {
    const level = levelSelect.value;
    currentWords = words[level];
    wordList.innerHTML = "";

    currentWords.forEach(word => {
        const btn = document.createElement("button");
        btn.innerText = word;
        btn.className = "btn";
        btn.onclick = () => startLearning(word);
        wordList.appendChild(btn);
    });
}

function startLearning(word) {
    currentIndex = currentWords.indexOf(word);
    showWord(word);
}

function showWord(word) {
    learnArea.style.display = "block";
    selectedWordTitle.innerText = word;
    learnVideo.src = `videos/${word}.mp4`;
}

nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex >= currentWords.length) {
        alert("Hết từ ở cấp độ này!");
        return;
    }
    showWord(currentWords[currentIndex]);
};

levelSelect.onchange = loadWords;

loadWords();
