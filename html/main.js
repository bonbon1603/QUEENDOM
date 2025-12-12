document.getElementById("translate-btn").onclick = async () => {
    const text = document.getElementById("text-input").value;

    const words = normalizeSentence(text);

    console.log("Processed words:", words);

    await playVideoSequence(words);
};
