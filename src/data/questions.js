const questions = [
  // Preguntitas Ochenteras (y algún clásico que sienta bien)
  {
    question: "¿Que nave desapareció, fue a un lugar terrible y trajo algo consigo, convirtiéndose en una entidad embrujada y malévola en sí misma?",
    options: [
      { type: 'image', value: '/imgGame/nave1.jpg' },
      { type: 'image', value: '/imgGame/Event.jpg' }, // Correcta 
      { type: 'image', value: '/imgGame/nave2.jpg' },
      { type: 'image', value: '/imgGame/nave3.jpg' }
    ],
    correctAnswer: '/imgGame/Event.jpg'
  },
  {
    question: "¿Cuál fue el nombre del campamento en Viernes 13 (1980)?",
    options: [
      { type: 'text', value: "Camp Blood" },
      { type: 'text', value: "Forest Hills" },
      { type: 'text', value: "Crystal Lake" }, // Correcta
      { type: 'text', value: "Pine Haven" }
    ],
    correctAnswer: "Crystal Lake"
  },
  {
    question: "¿Quién interpretó a Freddy Krueger en Pesadilla en Elm Street (1984)?",
    options: [
      { type: 'text', value: "Robert Englund" }, // Correcta
      { type: 'text', value: "Kane Hodder" },
      { type: 'text', value: "Doug Bradley" },
      { type: 'text', value: "Tony Moran" }
    ],
    correctAnswer: "Robert Englund"
  },
  {
    question: "¿Qué tipo de criatura es el monstruo en La Cosa (The Thing) (1982)?",
    options: [
      { type: 'text', value: "Un demonio del infierno" },
      { type: 'text', value: "Un virus genético" },
      { type: 'text', value: "Un extraterrestre metamorfo" }, // Correcta
      { type: 'text', value: "Un experimento fallido" }
    ],
    correctAnswer: "Un extraterrestre metamorfo"
  },
  {
    question: "¿Cuál es la casa de El Resplandor (1980)?",
    options: [
      { type: 'image', value: '/imgGame/mansion1.jpg' },
      { type: 'image', value: '/imgGame/resplandor.jpg' }, // Correcta
      { type: 'image', value: '/imgGame/mansion2.jpg' },
      { type: 'image', value: '/imgGame/mansion3.jpg' }
    ],
    correctAnswer: '/imgGame/resplandor.jpg'
  },
  {
    question: "¿En qué año se estrenó la película original de Halloween (197...) de John Carpenter?",
    options: [
      { type: 'text', value: "1970" },
      { type: 'text', value: "1972" },
      { type: 'text', value: "1976" },
      { type: 'text', value: "1978" } // Correcta
    ],
    correctAnswer: "1978"
  },
  {
    question: "¿Cuál es el nombre del payaso diabólico en la novela 'It' de Stephen King (adaptada en los 80 como miniserie)?",
    options: [
      { type: 'text', value: "Bob Gray" },
      { type: 'text', value: "Captain Trips" },
      { type: 'text', value: "Randall Flagg" },
      { type: 'text', value: "Pennywise" } // Correcta
    ],
    correctAnswer: "Pennywise"
  },
  {
    question: "¿Qué arma icónica utiliza Leatherface en 'La Matanza de Texas 2' (1986)?",
    options: [
      { type: 'text', value: "Una motosierra" }, // Correcta
      { type: 'text', value: "Un martillo" },
      { type: 'text', value: "Un cuchillo de carnicero" },
      { type: 'text', value: "Un hacha" }
    ],
    correctAnswer: "Una motosierra"
  },
  {
    question: "¿Cuál de estas películas NO está dirigida por Wes Craven?",
    options: [
      { type: 'text', value: "Pesadilla en Elm Street (1984)" },
      { type: 'text', value: "La serpiente y el arco iris (1988)" },
      { type: 'text', value: "El sótano del miedo (The People Under the Stairs) (1991)" },
      { type: 'text', value: "Viernes 13 (1980)" } // Correcta
    ],
    correctAnswer: "Viernes 13 (1980)"
  },
  // Pregunta 10 (Imagen - Casas de terror)
  {
    question: "¿Cuál de estas casas es la de la película 'Psicosis' (1960, influencia en el terror ochentero)?",
    options: [
      { type: 'image', value: '/imgGame/casa3.jpg' },
      { type: 'image', value: '/imgGame/casa2.jpg' },
      { type: 'image', value: '/imgGame/casa1.jpg' },
      { type: 'image', value: '/imgGame/psicosis.jpg' } // Correcta
    ],
    correctAnswer: '/imgGame/psicosis.jpg'
  },
  // Preguntas 11-14 (Texto)
  {
    question: "¿Quién escribió la novela 'Frankenstein' (influencia literaria clave)?",
    options: [
      { type: 'text', value: "Bram Stoker" },
      { type: 'text', value: "Mary Shelley" }, // Correcta
      { type: 'text', value: "Edgar Allan Poe" },
      { type: 'text', value: "H.P. Lovecraft" }
    ],
    correctAnswer: "Mary Shelley"
  },
  {
    question: "¿Qué tipo de maldición afecta a la familia Freeling en 'Poltergeist' (1982)?",
    options: [
      { type: 'text', value: "Una posesión demoníaca" },
      { type: 'text', value: "Un antiguo cementerio indio" }, // Correcta
      { type: 'text', value: "Una bruja ancestral" },
      { type: 'text', value: "Fantasmas vengativos" }
    ],
    correctAnswer: "Un antiguo cementerio indio"
  },
  {
    question: "¿Cuál es el nombre del muñeco diabólico en la película 'Child's Play' (1988)?",
    options: [
      { type: 'text', value: "Billy" },
      { type: 'text', value: "Annabelle" },
      { type: 'text', value: "Jigsaw" },
      { type: 'text', value: "Chucky" } // Correcta
    ],
    correctAnswer: "Chucky"
  },
  {
    question: "¿En qué ciudad ficticia tienen lugar muchos de los relatos de H.P. Lovecraft (influencia en el terror ochentero)?",
    options: [
      { type: 'text', value: "Arkham" }, // Correcta
      { type: 'text', value: "Salem" },
      { type: 'text', value: "Silent Hill" },
      { type: 'text', value: "Raccoon City" }
    ],
    correctAnswer: "Arkham"
  },
  // Pregunta 15 (Imagen - Armas de terror)
  {
    question: "¿Cuál de estas armas es la favorita de Michael Myers en 'Halloween II' (1981)?",
    options: [
      { type: 'image', value: '/imgGame/arma3.jpg' },
      { type: 'image', value: '/imgGame/arma1.jpg' },
      { type: 'image', value: '/imgGame/arma2.jpg' },
      { type: 'image', value: '/imgGame/Mayers.jpg' } // Correcta
    ],
    correctAnswer: '/imgGame/Mayers.jpg'
  },
  // Preguntas 16-19 (Texto)
  {
    question: "¿Qué líquido vital buscan los vampiros en películas como 'Los Jóvenes Ocultos' (1987)?",
    options: [
      { type: 'text', value: "Agua bendita" },
      { type: 'text', value: "Aceite hirviendo" },
      { type: 'text', value: "Lágrimas de ángel" },
      { type: 'text', value: "Sangre" } // Correcta
    ],
    correctAnswer: "Sangre"
  },
  {
    question: "¿Cuál de estas películas de zombis se estrenó en los 80?",
    options: [
      { type: 'text', value: "La noche de los muertos vivientes" },
      { type: 'text', value: "El día de los muertos" }, // Correcta
      { type: 'text', value: "Braindead" },
      { type: 'text', value: "28 Days Later" }
    ],
    correctAnswer: "El día de los muertos"
  },
  {
    question: "¿Qué famoso hotel es el escenario principal de 'El Resplandor' (1980)?",
    options: [
      { type: 'text', value: "El Hotel Bates" },
      { type: 'text', value: "El Hotel Transylvania" },
      { type: 'text', value: "El Hotel California" },
      { type: 'text', value: "El Hotel Overlook" } // Correcta
    ],
    correctAnswer: "El Hotel Overlook"
  },
  {
    question: "¿En que criatura se transformaba David Kessler en Londres (1981)?",
    options: [
      { type: 'text', value: "Un vampiro" },
      { type: 'text', value: "Una banshee" }, 
      { type: 'text', value: "Un hombre lobo" }, // Correcta
      { type: 'text', value: "Un gólem" }
    ],
    correctAnswer: "Un hombre lobo"
  },
  // Pregunta 20 (Imagen - Actores de terror)
  {
    question: "¿Qué actor interpretó a Pinhead en 'Hellraiser' (1987)?",
    options: [
      { type: 'image', value: '/imgGame/Hellreiser.jpg' }, // Correcta
      { type: 'image', value: '/imgGame/calvo1.jpg' },
      { type: 'image', value: '/imgGame/calvo2.jpg' },
      { type: 'image', value: '/imgGame/calvo3.jpg' }
    ],
    correctAnswer: '/imgGame/Hellreiser.jpg'
  },
  // Preguntas 21-24 (Texto)
  {
    question: "¿Cuál es el nombre del pueblo ficticio donde ocurren eventos sobrenaturales (videojuego de los 90, pero con influencias ochenteras)?",
    options: [
      { type: 'text', value: "Raccoon City" },
      { type: 'text', value: "Silent Hill" }, // Correcta
      { type: 'text', value: "Amityville" },
      { type: 'text', value: "Haddonfield" }
    ],
    correctAnswer: "Silent Hill"
  },
  {
    question: "¿Qué tipo de magia practica una bruja, como se ve en películas de los 80 como 'Noche de brujas' (1988)?",
    options: [
      { type: 'text', value: "Ilusionismo" },
      { type: 'text', value: "Telequinesis" },
      { type: 'text', value: "Adivinación" },
      { type: 'text', value: "Hechicería" } // Correcta
    ],
    correctAnswer: "Hechicería"
  },
  {
    question: "¿Qué evento apocalíptico desata la amenaza en 'Day of the Dead' (1985)?",
    options: [
      { type: 'text', value: "Una guerra nuclear" },
      { type: 'text', value: "Una invasión alienígena" },
      { type: 'text', value: "Un desastre natural" },
      { type: 'text', value: "Una plaga zombi" } // Correcta
    ],
    correctAnswer: "Una plaga zombi"
  },
  {
    question: "¿Cuál es el nombre del libro de los muertos en la saga de 'Evil Dead' (comenzó en los 80)?",
    options: [
      { type: 'text', value: "Necronomicón Ex-Mortis" }, // Correcta
      { type: 'text', value: "Malleus Maleficarum" },
      { type: 'text', value: "De Vermis Mysteriis" },
      { type: 'text', value: "Liber Ivonis" }
    ],
    correctAnswer: "Necronomicón Ex-Mortis"
  },
  // Pregunta 25 (Imagen - Objetos malditos)
  {
    question: "¿Cuál de estos objetos fué un muñeco maldito de película de terror de los 80?",
    options: [
      { type: 'image', value: '/imgGame/muñeco1.jpg' },
      { type: 'image', value: '/imgGame/Puppet.jpg' }, //Correcta 
      { type: 'image', value: '/imgGame/muñeco2.jpg' },
      { type: 'image', value: '/imgGame/muñeco3.jpg' } 
    ],
    correctAnswer: '/imgGame/Puppet.jpg'
  },
  // Preguntas 26-29 (Texto)
  {
    question: "¿Qué tipo de criatura es un 'banshee' en el folclore irlandés (presente en algunas películas de terror de los 80)?",
    options: [
      { type: 'text', value: "Un duende travieso" },
      { type: 'text', value: "Un guerrero espectral" },
      { type: 'text', value: "Una ninfa del agua malvada" },
      { type: 'text', value: "Un espíritu femenino que presagia la muerte" } // Correcta
    ],
    correctAnswer: "Un espíritu femenino que presagia la muerte"
  },
  {
    question: "¿Quién dirigió la película 'La Mosca' (1986)?",
    options: [
      { type: 'text', value: "George Lucas" },
      { type: 'text', value: "Francis Ford Coppola" },
      { type: 'text', value: "David Cronenberg" }, // Correcta
      { type: 'text', value: "Ridley Scott" },
    ],
    correctAnswer: "David Cronenberg"
  },
  {
    question: "¿Qué le sucede a las personas que son mordidas por un zombi en películas de los 80 como 'Re-Animator' (1985)?",
    options: [
      { type: 'text', value: "Se curan rápidamente" },
      { type: 'text', value: "Obtienen superpoderes" },
      { type: 'text', value: "Se convierten en zombis (a veces con particularidades)" }, // Correcta
      { type: 'text', value: "Se desmayan" }
    ],
    correctAnswer: "Se convierten en zombis (a veces con particularidades)"
  },
  {
    question: "¿Cuál es el nombre del protagonista de la saga 'Evil Dead' (comenzó en los 80)?",
    options: [
      { type: 'text', value: "Bruce Campbell" },
      { type: 'text', value: "Ash Williams" }, // Correcta
      { type: 'text', value: "Evil Ash" },
      { type: 'text', value: "Linda Blair" }
    ],
    correctAnswer: "Ash Williams"
  },
  // Pregunta 30 (Imagen - Escenarios de terror)
  {
    question: "¿Cuál de estos lugares evoca un campamento de terror ochentero como Crystal Lake?",
    options: [
      { type: 'image', value: '/imgGame/campamento1.jpg' },
      { type: 'image', value: '/imgGame/campamento2.jpg' },
      { type: 'image', value: '/imgGame/campamento3.jpg' },
      { type: 'image', value: '/imgGame/Lake.jpg' } // Correcta
    ],
    correctAnswer: '/imgGame/Lake.jpg'
  },
  // Preguntas 31-34 (Texto)
  {
    question: "¿Qué criatura marina gigante aterroriza a los marineros en el folclore (presente en películas de monstruos de los 80)?",
    options: [
      { type: 'text', value: "El Kraken" }, // Correcta
      { type: 'text', value: "Moby Dick" },
      { type: 'text', value: "Leviatán" },
      { type: 'text', value: "Cthulhu" }
    ],
    correctAnswer: "El Kraken"
  },
  {
    question: "¿Qué poder sobrenatural posee Carrie White en la novela de Stephen King 'Carrie' (adaptada al cine en 1976, influencia en los 80)?",
    options: [
      { type: 'text', value: "Clarividencia" },
      { type: 'text', value: "Piroquinesis" },
      { type: 'text', value: "Telequinesis" }, // Correcta
      { type: 'text', value: "Invisibilidad" }
    ],
    correctAnswer: "Telequinesis"
  },
  {
    question: "¿Cuál es el nombre del barco en la película 'Alien' (1979, influyente en el terror de los 80)?",
    options: [
      { type: 'text', value: "Nostromo" }, // Correcta
      { type: 'text', value: "Sulaco" },
      { type: 'text', value: "Event Horizon" },
      { type: 'text', value: "Serenity" }
    ],
    correctAnswer: "Nostromo"
  },
  {
    question: "¿Qué tipo de máscara usa Jason Voorhees en las películas de 'Viernes 13' (saga de los 80)?",
    options: [
      { type: 'text', value: "Una máscara de payaso" },
      { type: 'text', value: "Una máscara de calavera" },
      { type: 'text', value: "Una máscara de cerdo" },
      { type: 'text', value: "Una máscara de hockey" } // Correcta
    ],
    correctAnswer: "Una máscara de hockey"
  },
  // Pregunta 35 (Imagen - Máscaras de terror)
  {
    question: "¿Cuál de estas máscaras podría pertenecer a un slasher de los 80?",
    options: [
      { type: 'image', value: '/imgGame/Trampa.jpg' }, // Ghostface es de los 90, pero el estilo encaja
      { type: 'image', value: '/imgGame/mascara1.jpg' },
      { type: 'image', value: '/imgGame/mascara3.jpg' },
      { type: 'image', value: '/imgGame/mascara2.jpg' }
    ],
    correctAnswer: '/imgGame/Trampa.jpg'
  },
  // Preguntas 36-39 (Texto)
  {
    question: "¿Qué criatura de otra dimensión aterroriza a Hawkins en 'Stranger Things' (ambientada en los 80)?",
    options: [
      { type: 'text', value: "Un Xenomorfo" },
      { type: 'text', value: "Un Predator" },
      { type: 'text', value: "Pinhead" },
      { type: 'text', value: "El Demogorgon" } // Correcta
    ],
    correctAnswer: "El Demogorgon"
  },
  {
    question: "¿Cuál es el nombre de la niña poseída en 'El Exorcista' (1973, pero influyente en el terror ochentero)?",
    options: [
      { type: 'text', value: "Nancy Thompson" },
      { type: 'text', value: "Regan MacNeil" }, // Correcta
      { type: 'text', value: "Laurie Strode" },
      { type: 'text', value: "Carol Anne Freeling" }
    ],
    correctAnswer: "Regan MacNeil"
  },
  {
    question: "¿Qué tipo de muñecos aterradores son los protagonistas de la película 'Puppet Master' (1989)?",
    options: [
      { type: 'text', value: "Marionetas animadas por magia oscura" }, // Correcta
      { type: 'text', value: "Robots asesinos en miniatura" },
      { type: 'text', value: "Alienígenas disfrazados" },
      { type: 'text', value: "Juguetes de peluche poseídos" }
    ],
    correctAnswer: "Marionetas animadas por magia oscura"
  },
  {
    question: "¿Cuál es el lema icónico de la película 'Alien' (1979, influyente en el terror ochentero)?",
    options: [
      { type: 'text', value: "Prepárate para el dolor" },
      { type: 'text', value: "Correr no te salvará" },
      { type: 'text', value: "El mal ha vuelto" },
      { type: 'text', value: "En el espacio nadie puede oírte gritar" } // Correcta
    ],
    correctAnswer: "En el espacio nadie puede oírte gritar"
  },
  // Pregunta 40 (Imagen - Criaturas del terror)
  {
    question: "¿Cuál de estas criaturas es un Xenomorfo de la saga 'Alien' (comenzó en los 70 y continuó en los 80)?",
    options: [
      { type: 'image', value: '/imgGame/alien1.jpg' },
      { type: 'image', value: '/imgGame/alien2.jpg' },
      { type: 'image', value: '/imgGame/Xeno.jpg' }, // Correcta
      { type: 'image', value: '/imgGame/alien3.jpg' }
    ],
    correctAnswer: '/imgGame/Xeno.jpg'
  },
  // Preguntas 41-44 (Texto)
  {
    question: "¿Qué famoso director de cine dirigió 'La Niebla' (The Fog) (1980)?",
    options: [
      { type: 'text', value: "John Carpenter" }, // Correcta
      { type: 'text', value: "Wes Craven" },
      { type: 'text', value: "Tobe Hooper" },
      { type: 'text', value: "Sam Raimi" }
    ],
    correctAnswer: "John Carpenter"
  },
  {
    question: "¿Cuál es el nombre del campamento donde ocurren los asesinatos en 'Sleepaway Camp' (1983)?",
    options: [
      { type: 'text', value: "Camp Hemlock" },
      { type: 'text', value: "Camp Crystal Lake" },
      { type: 'text', value: "Camp Arawak" }, // Correcta
      { type: 'text', value: "Camp Bloodbath" }
    ],
    correctAnswer: "Camp Arawak"
  },
  {
    question: "¿Qué posesión lleva Kaylee, la niña en 'The Gate' (1987), que parece atraer a los demonios?",
    options: [
      { type: 'text', value: "Un espejo antiguo" },
      { type: 'text', value: "Una caja de música" },
      { type: 'text', value: "Un libro de hechizos" },
      { type: 'text', value: "Una piedra preciosa" } // Correcta
    ],
    correctAnswer: "Una piedra preciosa"
  },
  {
    question: "¿Cuál es el nombre del protagonista que lucha contra los Cenobitas en 'Hellraiser' (1987)?",
    options: [
      { type: 'text', value: "Ash Williams" },
      { type: 'text', value: "Kirsty Cotton" }, // Correcta
      { type: 'text', value: "Pinhead" },
      { type: 'text', value: "Frank Cotton" }
    ],
    correctAnswer: "Kirsty Cotton"
  },
  // Pregunta 45 (Imagen - Lugares embrujados)
  {
    question: "¿Qué actor interpretó a Jack Torrance en El Resplandor (1980)?",
    options: [
      { type: 'image', value: '/imgGame/actor2.jpg' },
      { type: 'image', value: '/imgGame/Jack.jpg' }, // Correcta
      { type: 'image', value: '/imgGame/actor1.jpg' },
      { type: 'image', value: '/imgGame/actor3.jpg' }
    ],
    correctAnswer: '/imgGame/jack.jpg'
  },
  // Preguntas 46-49 (Texto)
  {
    question: "¿Qué criatura legendaria del folclore haitiano fue popularizada en películas de terror de los 80 como 'La Serpiente y el Arco Iris' (1988)?",
    options: [
      { type: 'text', value: "El Chupacabras" },
      { type: 'text', value: "La Llorona" },
      { type: 'text', value: "El Yeti" },
      { type: 'text', value: "Un zombi" } // Correcta
    ],
    correctAnswer: "Un zombi"
  },
  {
    question: "¿Quién dirigió la película 'Re-Animator' (1985)?",
    options: [
      { type: 'text', value: "Stuart Gordon" }, // Correcta
      { type: 'text', value: "Brian Yuzna" },
      { type: 'text', value: "Frank Henenlotter" },
      { type: 'text', value: "Tobe Hooper" }
    ],
    correctAnswer: "Stuart Gordon"
  },
  {
    question: "¿Qué tipo de entidad maligna aterroriza a los Bowen en 'Poltergeist' (1982)?",
    options: [
      { type: 'text', value: "Un vampiro ancestral" },
      { type: 'text', value: "Un extraterrestre hostil" },
      { type: 'text', value: "Un demonio vengativo" }, // Correcta
      { type: 'text', value: "Un asesino enmascarado" }
    ],
    correctAnswer: "Un demonio vengativo"
  },
  {
    question: "¿Cuál es el nombre del protagonista de 'Videodrome' (1983)?",
    options: [
      { type: 'text', value: "Max Renn" }, // Correcta
      { type: 'text', value: "Rick Deckard" },
      { type: 'text', value: "Travis Bickle" },
      { type: 'text', value: "Harry Angel" }
    ],
    correctAnswer: "Max Renn"
  },
  // Pregunta 50 
  {
    question: "¿Cuál de los siguientes actores o actrices participó en más películas de terror durante la década de los 80?",
    options: [
      { type: 'image', value: '/imgGame/Jeffrey.jpg' }, // Clásico influyente
      { type: 'image', value: '/imgGame/Linnea.jpg' }, // Más moderno
      { type: 'image', value: '/imgGame/Bruce.jpg' }, // No es terror
      { type: 'image', value: '/imgGame/Robert.jpg' } // Más moderno
    ],
    correctAnswer: '/imgGame/Linnea.jpg'
  }
];

export default questions;