document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    let isDarkMode = false;

    darkModeToggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        updateTheme();
    });

    function updateTheme() {
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }
    const wordDisplay = document.getElementById('word-display');
    const wordInput = document.getElementById('word-input');
    const submitButton = document.getElementById('submit-button');
    const timerElement = document.getElementById('timer');

    let timeLeft = 19;

    let palabras = [
        'javascript', 'html', 'css', 'desarrollo', 'programación', 'aplicación',
    'información', 'tecnología', 'computadora', 'desarrollador', 'internet',
    'casa', 'perro', 'gato', 'ordenador', 'programación', 'desarrollo',
    'hamburguesa', 'universidad', 'montaña', 'océano', 'bicicleta',
    'teléfono','jardín', 'aventura', 'libro', 'familia', 'escuela',
           'película', 'música', 'pizza', 'bosque', 'ciencia', 'viaje',
            'fotografía', 'fruta','extraordinario', 'inconcebible', 'intrincado', 'paralelepípedo',
            'quintuplicado', 'inexpugnable', 'anacronismo', 'exacerbación', 'inconmensurable',
            'plegadizo', 'anatema', 'críptico', 'indivisible', 'acérrimo', 'inmarcesible',
            'ubérrimo', 'nefelibata', 'procrastinación', 'vocabulario',
             'zooplancton', 'playa', 'computadora', 'tecnología',
             'naturaleza', 'experiencia', 'imaginación', 'creatividad',
              'historia', 'cultura', 'deporte', 'amistad', 'energía',
               'medicina', 'arquitectura', 'cambio', 'economía', 'educación',
                'emoción', 'entusiasmo', 'equipo', 'felicidad', 'universo',
                 'aventura', 'conocimiento', 'reloj', 'sueño', 'fantasía',
                  'guitarra', 'pintura', 'arte', 'feliz', 'trabajo',
                 'motivación', 'salud', 'riqueza', 'paz', 'amor', 'pasión',
                  'mariposa', 'colibrí', 'estrella', 'espacio', 'carrera',
                   'crecimiento', 'deseo', 'esperanza', 'inspiración',
                    'mente', 'milagro', 'optimismo', 'poder', 'quietud',
                     'renovación', 'sabiduría', 'tejido', 'victoria', 'sombra',
                 'rayo', 'velocidad', 'libertad', 'fuego', 'escultura', 'centelleo',
             'calidez', 'devoción', 'energía', 'enigma', 'euforia', 'felicidad',
              'estallido', 'iluminación', 'impulso', 'inspiración', 'misterio',
               'optimismo', 'vibración', 'voluntad', 'armonía', 'belleza', 'paz',
                'resplandor', 'serenidad', 'vida', 'gracia', 'encanto', 'ternura',
                 'afecto', 'agradecimiento', 'entusiasmo', 'caridad', 'compasión',
                  'esperanza', 'fe', 'amabilidad', 'comprensión', 'compañerismo',
                   'generosidad', 'gratitud', 'paciencia', 'respeto', 'tolerancia',
                    'valor', 'determinación', 'disciplina', 'honestidad',
                     'integridad', 'justicia', 'perseverancia', 'prudencia',
                      'responsabilidad', 'sinceridad', 'veracidad', 'aceptación',
                       'autocontrol', 'autodisciplina', 'autoestima', 'autenticidad',
                        'creatividad', 'curiosidad', 'innovación', 'intuición',
             'aprendizaje', 'desarrollo', 'eficiencia', 'excelencia', 'flexibilidad',
              'ingenio', 'liderazgo', 'pensamiento', 'resiliencia', 'visión',
               'colaboración', 'comunicación', 'cooperación', 'equidad',
             'inclusión', 'solidaridad', 'teamwork', 'tolerancia', 'unidad',
             'sostenibilidad', 'medioambiente', 'ecología', 'renovación',
             'reciclaje', 'responsabilidad', 'eficiencia', 'innovación',
             'desarrollo', 'tecnología', 'crecimiento', 'futuro', 'progreso',
            'transformación', 'revolución', 'invento', 'descubrimiento', 'exploración',
             'imaginación', 'creatividad', 'innovación', 'invención', 'desarrollo', 'progreso',
              'revolución', 'transformación', 'avance', 'descubrimiento', 'exploración',
               'imaginación', 'creatividad', 'innovación', 'invención', 'desarrollo',
                'progreso', 'revolución', 'transformación', 'avance', 'descubrimiento',
                 'exploración', 'imaginación', 'creatividad', 'innovación', 'invención',
                  'desarrollo', 'progreso', 'revolución', 'transformación', 'avance',
                   'descubrimiento', 'exploración', 'imaginación', 'creatividad', 
                   'innovación', 'invención', 'desarrollo', 'progreso', 'revolución',
                    'transformación', 'avance', 'descubrimiento', 'exploración',
                     'imaginación', 'creatividad', 'innovación', 'invención', 'desarrollo',
                      'progreso', 'revolución', 'transformación', 'avance', 'descubrimiento', 
                      'exploración', 'imaginación', 'creatividad', 'innovación', 'invención',
                       'desarrollo', 'progreso', 'revolución', 'transformación',
                        'avance', 'descubrimiento','felicidad', 'serenidad', 'amistad', 'entusiasmo',
                         'maravilla', 'asombro', 'gratitud', 'paz', 'relajación', 'curiosidad', 
                         'optimismo', 'inspiración', 'sabiduría', 'vibración', 'gracia', 'equilibrio',
                          'creatividad', 'imaginación', 'abundancia', 'compasión', 'ternura', 'integridad',
                           'confianza', 'valentía', 'determinación', 'resiliencia', 'paciencia', 
                           'esperanza', 'humildad', 'humor', 'júbilo', 'compañerismo', 'cooperación',
                            'lealtad', 'generosidad', 'tolerancia', 'afecto', 'reconocimiento', 'respeto',
                             'autoestima', 'aceptación', 'autenticidad', 'autocontrol', 'claridad', 'disciplina',
                              'eficiencia', 'eficacia', 'innovación', 'aprendizaje', 
                              'desarrollo', 'excelencia', 'crecimiento', 'prosperidad', 
                              'armonía', 'equidad', 'inclusión', 'unidad', 'solidaridad', 
                              'sostenibilidad', 'responsabilidad', 'sabiduría', 'intuición',
                               'transformación', 'descubrimiento', 'exploración', 'pensamiento',
                                'crecimiento', 'revolución', 'imaginación', 'invención', 'tecnología',
                                 'progreso', 'inventiva', 'inspiración', 'avance', 'conquista', 'logro',
                                  'innovación', 'descubrimiento', 'exploración', 'imaginación', 'creatividad',
                                   'invención', 'desarrollo', 'progreso', 'revolución', 'transformación',
                                    'avance', 'descubrimiento', 'exploración', 'imaginación', 'creatividad', 
                                    'innovación', 'invención', 'desarrollo', 'progreso', 'revolución', 
                                    'transformación', 'avance', 'descubrimiento', 'exploración', 
                                    'imaginación', 'creatividad', 'innovación', 'invención', 
                                    'desarrollo', 'progreso', 'revolución', 'transformación',
                                     'avance', 'descubrimiento', 'exploración', 'imaginación',
                                      'creatividad', 'innovación', 'invención', 'desarrollo',
                                       'progreso', 'revolución', 'transformación', 'avance', 
                                       'descubrimiento', 'exploración', 'imaginación', 'creatividad',
                                        'innovación', 'invención', 'desarrollo', 'progreso', 'revolución',
                                         'transformación', 'avance', 'descubrimiento', 'exploración', 'imaginación',
                                          'creatividad', 'innovación', 'invención', 'desarrollo', 'progreso', 'revolución', 
                                          'transformación', 'avance', 'descubrimiento', 'exploración', 'imaginación',
                                           'creatividad', 'innovación', 'invención', 'desarrollo', 'progreso', 'revolución',
                                            'transformación', 'avance', 'descubrimiento', 'exploración',
                                             'imaginación', 'creatividad', 'innovación', 'invención',
                                              'desarrollo', 'progreso', 'revolución', 'transformación',
                                               'avance', 'descubrimiento'
    ];

    let currentWord = '';

    function startGame() {
        resetTimer();
        selectNewWord();
    }

    function resetTimer() {
        timeLeft = 19;
        updateTimer();
        startTimer();
    }

    function startTimer() {
        const timerInterval = setInterval(function () {
            timeLeft--;
            updateTimer();

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                alert('¡Tiempo agotado! Juego terminado.');
                startGame();
            }
        }, 1000);
    }

    function updateTimer() {
        timerElement.textContent = `Tiempo: ${timeLeft}s`;
    }

    function selectNewWord() {
        const randomIndex = Math.floor(Math.random() * palabras.length);
        currentWord = palabras[randomIndex];
        wordDisplay.textContent = currentWord.toLowerCase(); 
    }

    function checkWord() {
        const userWord = normalize(wordInput.value.trim());

        if (palabras.includes(userWord)) {
            alert(`¡"${userWord}" es válido! Siguiente palabra.`);
            removeWordFromList(userWord);
            startGame();
        } else {
            alert(`"${userWord}" no es válido. Inténtalo de nuevo.`);
        }

        wordInput.value = '';
    }

    function removeWordFromList(word) {
        const index = palabras.indexOf(word);
        if (index !== -1) {
            palabras.splice(index, 1);
        }
    }

    function normalize(str) {
       return str.replace(/[áäâà]/g, 'a').replace(/[éëêè]/g, 'e').replace(/[íïîì]/g, 'i').replace(/[óöôò]/g, 'o').replace(/[úüûù]/g, 'u').toLowerCase();
    }

    submitButton.addEventListener('click', function () {
        checkWord();
    });

    submitButton.addEventListener('touchstart', function (event) {
      event.preventDefault();
        checkWord();
    });

    startGame();
});