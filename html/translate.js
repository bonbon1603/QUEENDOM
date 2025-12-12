document.getElementById("translateBtn").onclick = () => {
    const text = document.getElementById("inputText").value.trim();
    if (!text) return;

    const words = text.split(" ");

    const videoArea = document.getElementById("video-area");
    videoArea.innerHTML = "";

    let index = 0;

    const video = document.createElement("video");
    video.controls = true;
    videoArea.appendChild(video);

    function playNext() {
        if (index >= words.length) return;

        let w = words[index];
        video.src = `videos/${w}.mp4`;
        video.play();

        index++;
    }

    video.onended = playNext;

    playNext();
};
// Auto-expand textarea
const input = document.getElementById("textInput");

input.addEventListener("input", function () {
    this.style.height = "50px";           // reset lại để đo chính xác
    this.style.height = (this.scrollHeight) + "px"; 
});

