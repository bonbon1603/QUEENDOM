async function playVideoSequence(words) {
    const videoElement = document.getElementById("video-player");

    for (let w of words) {
        let file = `videos/${w}.mp4`;

        // Check file tồn tại
        const exists = await fetch(file).then(res => res.ok);

        if (!exists) {
            console.warn("Missing video:", file);
            continue;
        }

        videoElement.src = file;
        await videoElement.play();

        await new Promise(resolve => {
            videoElement.onended = resolve;
        });
    }
}
