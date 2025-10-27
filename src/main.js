const canciones = [
            "./public/songs/si.mp3",
            "./public/songs/mons.mp3",
            "./public/songs/TAME.mp3"
        ];
        
        const titulos = [
            "Si preguntas por mi",
            "MONSTRUO",
            "Borderline"
        ];
        
        const portadas = [
            "./public/portraits/sipreguntaspormi.jpg",
            "./public/portraits/monstruo.png",
            "./public/portraits/borderline.jpeg"
        ];

        // Referencias a elementos del DOM
        const imagen = document.getElementById("imagen");
        const titulo = document.getElementById("titulo");
        const audio = document.getElementById("cancion");
        const btn = document.getElementById("play-pausa");
        const progressBar = document.getElementById("progress-bar");
        const progress = document.getElementById("progress");
        const currentTimeEl = document.getElementById("current-time");
        const durationEl = document.getElementById("duration");

        let posicion = 0;

        // Función para cambiar la canción
        function cambio() {
            imagen.src = portadas[posicion];
            audio.src = canciones[posicion];
            titulo.textContent = titulos[posicion];
        }

        // Función para la canción anterior
        function prevSong() {
            posicion = (posicion - 1 + canciones.length) % canciones.length;
            cambio();
            audio.play();
        }

        // Función para la siguiente canción
        function nextSong() {
            posicion = (posicion + 1) % canciones.length;
            cambio();
            audio.play();
        }

        // Función para reproducir/pausar
        function togglePlay() {
            if (audio.paused) {
                audio.play();
                btn.textContent = "⏸";
            } else {
                audio.pause();
                btn.textContent = "▶";
            }
        }