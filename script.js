document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bg-video");
    const audio = document.getElementById("bg-music");
    const playButton = document.getElementById("play-music");

    // Para garantir que o vídeo funcione no iPhone e Android
    video.play().catch(error => console.log("Erro ao reproduzir vídeo:", error));

    // Tocar música após interação do usuário
    playButton.addEventListener("click", () => {
        audio.play();
        playButton.style.display = "none"; // Esconde o botão depois de tocar
    });
});
