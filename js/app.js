function play(item) {
    var rep = document.getElementById(item);
    if (rep) {
        // Tenta tocar, captura erro se houver
        rep.play().catch(e => {
            console.log("Erro ao tocar áudio:", e);
        });
    } else {
        console.log("Elemento de áudio não encontrado:", item);
    }
}

// Config Param Rotação
const logoanimatespin = [
    { transform: "rotate(0)" },
    { transform: "rotate(360deg)" },
];

const logoanimatetime = {
    duration: 200,
    iterations: 1,
};

// Config Param Pulo
const animatejump = [
    { transform: "translateY(0px)", offset: 0.1, },
    { transform: "translateY(-100px)", offset: 0.5, },
    { transform: "translateY(0px)", offset: 0.6, },
    { transform: "translateY(-20px)", offset: 0.7, },
    { transform: "translateY(0px)", offset: 0.8, },
    { transform: "translateY(-10px)", offset: 0.9, },
    { transform: "translateY(0px)", offset: 1.0, }
];

const jumptime = {
    duration: 1000,
    iterations: 1,
};

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada!");
    
    // === CONFIGURAÇÃO DA INTRO (página intro.html) ===
    const startButton = document.getElementById('clickIntro');
    
    if (startButton) {
        console.log("Botão de intro encontrado!");
        
        // Previne o redirecionamento imediato para tocar o som primeiro
        startButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o redirecionamento agora
            
            console.log("Tocando áudio de introdução...");
            play('audiointro');
            
            // Aguarda o som terminar (aproximadamente 1 segundo) ou redireciona imediatamente
            setTimeout(function() {
                window.location.href = startButton.getAttribute('href');
            }, 500); // 500ms = meio segundo de delay
        });
    }
    
    // === CONFIGURAÇÃO DA HOME (página home.html) ===
    // Esses elementos só existem na home, então verificamos se estão presentes
    const logoanimate = document.querySelector(".logoanimate");
    const shieldanimate = document.querySelector(".shieldanimate");
    const titulo = document.querySelector(".titulosite");

    if (shieldanimate) {
        console.log("Escudo encontrado!");
        shieldanimate.addEventListener("click", () => {
            shieldanimate.animate(animatejump, jumptime);
            play('audioescudo');
        });
    }
    
    if (logoanimate) {
        console.log("Logo encontrado!");
        logoanimate.addEventListener("click", () => {
            logoanimate.animate(logoanimatespin, logoanimatetime);
            // play('audiovento'); // Se tiver esse áudio
        });
    
    }
    if(audiozelda){
        console.log("logo zelda tocando");
        titulo.addEventListener("click",()=>{
            play('audiozelda');
        });

    }
});