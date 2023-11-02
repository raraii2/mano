document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bg-music");

    // Iniciar a música quando a página carregar
    bgMusic.play();

    // Capturar o link para a página de fotos
    const momentos = document.getElementById("momentos.html");

    // Adicionar um ouvinte de evento para prevenir a reprodução da música ao clicar no link
    momentos.addEventListener("click", function (e) {
        e.preventDefault(); // Prevenir o comportamento padrão do link
        window.location.href = momentos.html.href; // Redirecionar para a página de fotos
    });
});


 