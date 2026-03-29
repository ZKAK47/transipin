const ezquiz = [
  {
    title: 'Quel est la ligne de bus la plus fréquentée de l\'Essonne ?',
    way: 'radio',
    resp: ['9106', '401', '402', '7001Sco'],
    good: '402'
  },
  {
    title: 'Quel est le préfixe de renumérotation utilisé pour le réseau Evry Centre Essonne (TISSE) ?',
    way: 'radio',
    resp: ['42', '43', '45', '61'],
    good: '42'
  },
  {
    title: 'Quels RER desservent le 91 ?',
    way: 'checkbox',
    resp: ['RER A', 'RER C', 'RER D', 'RER E'],
    good: ['RER D', 'RER C']
  },
  {
    title: 'Quels Transilien desservent le 91 ?',
    way: 'checkbox',
    resp: ['Ligne L', 'Ligne P', 'Ligne U', 'Ligne V'],
    good: ['Ligne V']
  },
  {
    title: 'Quel numéro le 403 (ligne entière) a prit en janvier 2025?',
    way: 'number',
    good: ['4212']
  },
];

const midquiz = [
  {
    title: 'Entre la branche de la vallée (Val de seine) et celle du plateau (via Evry-Courcouronnnes) du RER D. Laquelle voit le plus de train circuler',
    way: 'radio',
    resp: ['Via Evry Val de Seine', 'Via Evry-Courcouronnes',],
    good: 'Via Evry-Courcouronnes'
  },
  {
    title: 'Quels lignes desservent directement (<7 min de marche) que ce soit temporaire ou permanent le Lycée Parc des Loges.',
    way: 'checkbox',
    resp: ['4201', '4202', '4203', '4212', '4217', '4271', '4251', '4332', '4777'],
    good: ['4202', '4212', '4217', '4271']
  },
  {
    title: 'Quel Tram dessert le 91 ?',
    way: 'radio',
    resp: ['Tram T8', 'Tram T13', 'Tram T12', 'Tram T9'],
    good: 'Tram T12'
  },
  {
    title: 'Quels Transilien desservent le 91 ?',
    way: 'checkbox',
    resp: ['Ligne L', 'Ligne P', 'Ligne U', 'Ligne V'],
    good: ['Ligne V']
  },
  {
    title: 'Quel bus arrivera vers fin 2025 pour remplacer le 4206 ?',
    way: 'text',
    good: ['TZEN4','TZEN 4','T ZEN4', 'T ZEN 4',]
  },
];

const hardquiz = [
  {
    title: 'Entre Corbeil-Essonnes et Juvisy, le train mettra toujours 15-18 minutes peu importe la branche desservie ?',
    way: 'radio',
    resp: ['Vrai', 'Faux'],
    good: 'Vrai'
  },
  {
    title: 'Parmi celles là lesquels desservent Pyramides temporairement ?',
    way: 'checkbox',
    resp: ['4204', '4241', 'N139', '4277', '4232'],
    good: ['4204', '4241']
  },
  {
    title: 'Quels bus relie l\' Essonne à Paris ?',
    way: 'checkbox',
    resp: ['9105', 'Tzen1', '9115', '4502'],
    good: ['4502', '9115']
  },
  {
    title: 'Quels bus si présent a perdu la désignation express ?',
    way: 'checkbox',
    resp: ['4504', '9101', '4122', '299'],
    good: ['4504','4122']
  },
  {
    title: 'Quel est le moyen de se rendre le plus rapidement à Paris depuis Corbeil-Essonnes (en heure creuse) ?',
    way: 'radio',
    resp: ['RER D (via la Vallée) + RER C', 'RER D simplement', 'RER D jusqu\' Melun puis Ligne R', '9112 + Métro 14'],
    good: 'RER D (via la Vallée) + RER C'
  },
];

const INFERNO = [
  {
    title: 'Quelles lignes ici présentes ne font pas partis d\'un réseau basé sur l\'Essonne mais desservent actuellement l\'Essonne',
    way: 'checkbox',
    resp: ['4280', '4122', '9106', '5154', '3702', '3703', '7715', '4504', '5359', '9114', '199', '450', '480','9108'],
    good: ['5154','3703','7715','5359','450','480']
  },
  {
    title: 'Combien de bus transversaux RER D - RER C entre Mennecy et Etampes (oubliez les scolaires) ?',
    way: 'radio',
    resp: ['5', '2', 'aucun', '3'],
    good: '5'
  },
  {
    title: 'Quels lignes de bus allait jusque Paris en 90 ?',
    way: 'checkbox',
    resp: ['401', '331 (4441)', '107 (4501)', '9105'],
    good: ['331 (4441)', '107 (4501)']
  },
  {
    title: 'Le 4231 (en tant que 7001) desservait le lycée Parc des loges avant.',
    way: 'radio',
    resp: ['Vrai', 'Faux'],
    good: 'Vrai'
  },
  {
    title: 'Quel réseau d\' Essonne n\' a pas encore été complétement renuméroté ?',
    way: 'text',
    good: ['PARIS SACLAY', 'PARIS-SACLAY', 'PARISSACLAY']
  },
];

const allquiz = {
  easy: [ezquiz, 1],
  medium: [midquiz, 1.5],
  hard: [hardquiz, 2],
  expert: [INFERNO, 3],
}

const tquizfacile = `Simple`
const tquizmid = `Moyen : les bases (×${allquiz.medium[1]})`
const tquizhard = `Dur : insolites (×${allquiz.hard[1]})`
const tquizchamp = `Expert ? : (×${allquiz.expert[1]})`

const prequiz = 
  {
    title: 'Choisis ton châti- quiz.',
    way: 'radio',
    resp: [tquizfacile, tquizmid, tquizhard, tquizchamp],
  }

const difficulatt = {
  [tquizfacile] : allquiz.easy,
  [tquizmid] : allquiz.medium,
  [tquizhard] : allquiz.hard,
  [tquizchamp] : allquiz.expert,
}

const tada = new Audio('/assets/audio/sound effects/Tada.mp3')

const bruh = new Audio('/assets/audio/sound effects/XP Windows error.mp3')

const HUH = new Audio('/assets/audio/sound effects/suspense HUH.mp3')

let quizcheat = false

let lesquiz = false

function choisirunquiz() {
  if (quizabandon) {
    quizabandon = false
    return
  }
  const validbut = document.getElementById('valiquiz')
  const titre = document.getElementById("titre-question");
  const questionsDiv = document.getElementById("questions");
  const resplash = document.getElementById("resultat");
  const quizverlay = document.getElementById('quizverlay')
  const quizcont = document.getElementById('quiz-container')
  quizverlay.style.opacity = '0'
  quizverlay.style.display = 'flex'
  quizcont.style.transform = 'translate(0, -100%)'

  setTimeout(() => {
    quizverlay.style.opacity = '1'
    quizcont.style.transform = ''
  }, 50)



  validbut.innerHTML = 'Aucun regret ?'

  titre.textContent = prequiz.title;

  resplash.style.display = 'none'

  questionsDiv.style.display = 'flex'

  // Réinitialiser
  prequiz.resp.forEach((label, i) => {
    const respall = document.createElement('label')
    const input = document.createElement("input");
    const spanbox = document.createElement("span");
    spanbox.classList.add('box')
    const span = document.createElement("span");
    span.classList.add('text')
    span.textContent = "";
      input.type = prequiz.way;
      input.name = "reponse";
      input.value = prequiz.resp[i] || "";
      span.textContent = prequiz.resp[i] || "";
      questionsDiv.appendChild(respall)
      respall.appendChild(input)
      respall.appendChild(spanbox)
      respall.appendChild(span)
    })
}

const quizOriginal = []; // avant de les modifier

let questionCourante = null;

let questionlimits = 5

let questionnum = 0

let bestscore = false

let goodnumber = 0

let quiscore = 0

let quizabandon = false

let ended = false

function quizaban() {
  quizabandon=true
  endquiz()
}

function endquiz() {
  const questionsDiv = document.getElementById("questions");
  const validbut = document.getElementById('valiquiz')
  const label = questionsDiv.querySelectorAll('label')
  label.forEach(el => {
    el.remove()
  })
  if (quizabandon) {
    const quiverlay = document.getElementById('quizverlay')
    quiverlay.style.opacity = 0
    setTimeout(() => {
      quiverlay.style.display = "none"
      verifier()
      }, 1000)
    return
  }
  const titre = document.getElementById("titre-question");
  titre.textContent = "C'est fini, voici votre score"
  const results = document.getElementById('resultat') 
  results.style.display = 'block'
  results.style.textAlign = 'center'
  const adwarn = document.getElementById('inwarn')
  adwarn.style.display = 'block'
  let oldbestscore = bestscore
  quiscore = (goodnumber*100)*difficultmult
  if (quiscore > bestscore || !bestscore) {
    bestscore = quiscore
    setTimeout(() => {
      adwarn.textContent = 'C\'est un nouveau record !'
    }, 500)
  }
  else {
    setTimeout(() => {adwarn.textContent = `Meilleur score : ${bestscore}`}, 500)
  }
  if (quiscore > ((questionlimits*100)*difficultmult)) {
    HUH.play()
    setTimeout(() => {adwarn.textContent = `HUH ??????????`}, 500)
    quizcheat = true
    bestscore = oldbestscore
  }
  else if (quiscore > ((questionlimits*100)*difficultmult)/2) {
    tada.play()
  }
  else {
    bruh.play()
  }
  console.log(adwarn.textContent)
  results.innerHTML = `${Math.trunc(goodnumber)} bonnes réponses sois, ${((goodnumber/questionlimits)*100).toFixed(2)}% de réponses correctes.<br>Score total : ${(quiscore).toFixed(0)} (${((goodnumber)*100).toFixed(0)}×${difficultmult})`
  validbut.innerHTML = "Rejouer"
  validbut.disabled = true
  setInterval(() => {
    validbut.disabled = false
  }, 2000)
}

function gettfout(elements) {
  elements.forEach(group => {
    // Vérifie si group est itérable (tableau, NodeList, etc.)
    if (group && typeof group[Symbol.iterator] === 'function') {
      for (const el of group) {
        if (el) el.style.display = 'none';
      }
    } else if (group) {
      group.style.display = 'none';
    }
  });
}

function choisirQuestion() {
  if (questionnum === questionlimits) {
    ended = true
    endquiz()
    return
  }
  const quizcont = document.getElementById('quiz-container')
  quizcont.style.transition = 'none'
  quizcont.style.transform = 'translate(25%)'
  quizcont.style.opacity = '0'

  setTimeout(() => {
    quizcont.style.transition = 'opacity 1s, transform 1s'
    quizcont.style.opacity = '1'
    quizcont.style.transform = ''
  }, 50)
  questionnum++
  const validbut = document.getElementById('valiquiz')
  const index = Math.floor(Math.random() * lesquiz.length);
  questionCourante = lesquiz[index];
  lesquiz.splice(index, 1);
  const titre = document.getElementById("titre-question");
  const questionsDiv = document.getElementById("questions");
  const labels = questionsDiv.querySelectorAll("label");

  labels.forEach(el => {
    el.remove();
  });

  titre.textContent = questionCourante.title;

  validbut.innerHTML = 'Valider'

  validbut.disabled = false

  if (!questionCourante.resp) {
    nbresp = ['A']
  }
  else {nbresp = questionCourante.resp}

  // Réinitialiser
  nbresp.forEach((label, i) => {
    const respall = document.createElement('label')
    const input = document.createElement("input");
    const spanbox = document.createElement("span");
    spanbox.classList.add('box')
    const span = document.createElement("span");
    span.classList.add('text')
    if (questionCourante.way === 'radio' || questionCourante.way === 'checkbox') {
      input.type = questionCourante.way;
      input.name = "reponse";
      input.value = questionCourante.resp[i] || "";
      span.textContent = questionCourante.resp[i] || "";
    } else if (questionCourante.way === 'number') {
      input.type = "number";
      input.name = "reponse";
      input.value = "";
      questionsDiv.appendChild(input)
      span.textContent = "";
    }
    else if (questionCourante.way === 'text') {
      input.type = "text";
      input.name = "reponse";
      input.value = "";
      span.textContent = "";
      questionsDiv.appendChild(respall)
      respall.appendChild(input)
      if (i === 0) {
        labels.forEach(el => {
          el.style.display = 'block';
        });
      } else {
        labels.forEach(el => {
          el.style.display = 'none';
        });
      }
    }
    questionsDiv.appendChild(respall)
    respall.appendChild(input)
    respall.appendChild(spanbox)
    respall.appendChild(span)
  });
  if (replaceIndice) {
    replaceIndice(questionsDiv)
  }
}

let lastClickInQuiz = false;

document.addEventListener('click', (e) => {
  const quizContainer = document.getElementById('quiz');
  lastClickInQuiz = quizContainer.contains(e.target);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && lastClickInQuiz) {
    // Simule un clic sur le bouton "valider"
    verifier();
  }
});


function verifier() {
  const resultat = document.getElementById("resultat");
  const adwarn = document.getElementById('inwarn')
  const inputs = document.querySelectorAll('input[name="reponse"]');

  adwarn.textContent = ""

  let valeur ;
  if (!lesquiz) {
    const choix = Array.from(inputs).find(el => el.checked);
    if (!choix) { adwarn.textContent = "Veuillez sélectionner une réponse.";
      adwarn.style.color = "red";
      return
    }
    valeur = choix.value.trim();

    // On récupère le tableau de questions correspondant
    lesquiz = [...difficulatt[valeur][0]]; // ici valeur = 'Simple' ou 'Moyen : les bases (x1.5)' etc.
    difficultmult = difficulatt[valeur][1]

    if (!lesquiz) {
      adwarn.textContent = "Difficulté inconnue.";
      adwarn.style.color = "red";
      return;
    }

    adwarn.textContent = "";

    choisirQuestion();
    return
  }

  else if (lesquiz && ended || quizabandon) {
    lesquiz = false

    questionCourante = null;

    questionlimits = 5

    questionnum = 0

    goodnumber = 0

    ended = false
    choisirunquiz()
    return
  }

  console.log(questionCourante)
  if (questionCourante.way === 'radio') {
    const choix = Array.from(inputs).find(el => el.checked);
    if (!choix) { adwarn.textContent = "Veuillez sélectionner une réponse.";
      adwarn.style.color = "red";
      return
    }
    valeur = choix.value;
    if (valeur === questionCourante.good) {
      right(adwarn)
    } else {
      wrong(adwarn)
    }
  } else if (questionCourante.way === 'checkbox') {
    const checked = Array.from(inputs).filter(el => el.checked).map(el => el.value);
    if (!checked.length) {
      adwarn.textContent = "Veuillez cocher au moins une case.";
      adwarn.style.color = "red"
      return;
    }
  
    const bonnes = questionCourante.good;
    const mauvaises = questionCourante.resp.filter(r => !bonnes.includes(r));
  
    const nbBonsChoix = checked.filter(val => bonnes.includes(val)).length;
    const nbMauvaisChoix = checked.filter(val => mauvaises.includes(val)).length;
    const nball = checked.filter(val => mauvaises.includes(val)).length + checked.filter(val => bonnes.includes(val)).length;
  
    if (nbBonsChoix === bonnes.length && nbMauvaisChoix === 0) { //Tout bon
      right(adwarn);
    } else if (nball === bonnes.length + mauvaises.length) {
      lazy(adwarn)
    } else if (nbBonsChoix > 0) { //Pas toutes cochés ou mauvaise présente
      midright(nbBonsChoix, bonnes.length, nbMauvaisChoix);
    } else { //Rien de bon
      wrong(adwarn);
    }
  }
   else if (questionCourante.way === 'number' || questionCourante.way === 'text') {
    const input = inputs[0];
    valeur = input.value.trim().toUpperCase();
    console.log(valeur)
    input.checked = true
    if (!valeur) { adwarn.textContent = "Veuillez entrer une réponse.";
      adwarn.style.color = "red";
      return
    }
    if (questionCourante.good.includes(valeur)) {
      right(adwarn)
    } else {
      wrong(adwarn)
    }
  }

  // Désactiver tous les inputs après validation
  inputs.forEach(el => el.disabled = true);

  const questionsDiv = document.getElementById("questions");

  function right() {
    adwarn.style.color = "green"
    goodnumber++
    document.getElementById('valiquiz').disabled = true
    inputs.forEach(input => {
      if (input.checked) {
        const box = input.nextElementSibling;
      if (box && box.classList.contains('box')) {
        box.style.borderColor = 'green';
        input.style.backgroundColor = 'green'
      }
      }
    })
    setTimeout(()=> { 
      choisirQuestion()
      adwarn.textContent = ""
    }, 2000)
  }
  
  function midright(bonnesrep, touteslesbonnes = 4, mauvaisesrep = 0) {
  let noloose = 0
  adwarn.style.color = "orange"
    if (mauvaisesrep > 0) {
      adwarn.textContent = "Ouais mais euh, non";
    }
    else {adwarn.textContent = "Il manque des choses";}
    noloose = (bonnesrep - mauvaisesrep) / touteslesbonnes;
    if (noloose < 0) {noloose=0}
    goodnumber += noloose;
    document.getElementById('valiquiz').disabled = true
    inputs.forEach(input => {
      if (input.checked) {
        const box = input.nextElementSibling;
      if (box && box.classList.contains('box')) {
        box.style.borderColor = 'orange';
        input.style.backgroundColor = 'orange'
      }
      }
    })
    setTimeout(()=> {
      choisirQuestion()
      adwarn.textContent = ""
    }, 2000)
  }
  
  function wrong() {
    adwarn.style.color = "red"
    document.getElementById('valiquiz').disabled = true
    inputs.forEach(input => {
      if (input.checked) {
        const box = input.nextElementSibling;
      if (box && box.classList.contains('box')) {
        box.style.borderColor = 'red';
        input.style.backgroundColor = 'red'}
      }
    })
    setTimeout(()=> {
      choisirQuestion()
      adwarn.textContent = ""
    }, 2000)
  }
  
  function lazy() {
    adwarn.style.color = "red"
    adwarn.textContent = "...";
    document.getElementById('valiquiz').disabled = true
    inputs.forEach(input => {
      if (input) {
        const box = input.nextElementSibling;
      if (box && box.classList.contains('box')) {
        box.style.borderColor = 'red';}
        input.style.backgroundColor = 'red'
      }
    })
    setTimeout(()=> {
      choisirQuestion()
      adwarn.textContent = ""
    }, 2000)
  }
}

function afficherquiz() {
  choisirunquiz(); // Chargement au départ
}
