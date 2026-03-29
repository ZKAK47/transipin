//besoin d'indicesIDF.js et probablement de cartotrain.js
const lines_spec = {
  D: {
    travelMode: 'Train',
    network: 'Réseau Transilien Paris-Lyon Ouest',
    couleur: IDFVertFonce,
    infos: {desserte : '91', nocturne : ['Bus 4250', 'Bus 4251', 'N139'], frequence_min : '30 minutes', frequence_moy : 'heures', connexes : 'RER D', didyaknow : ['Seulement 4 aller-retours vont à Paris Gare de Lyon et sont sans arrêt jusque Juvisy (on parle de la Ligne S)', 'La Ligne D est la seule à desservir Malesherbes (pas de TER) qui est hors Île-de-France','Faute de fréquentation, le service en extrême soirée est assurée par les lignes de bus indirectement par les bus 4203, bus 4243, dirctement par les bus 4250 et bus 4251.']}
  },
  H: {
    travelMode: 'Train',
    network: 'Réseau Transilien Paris-Nord Ouest',
    couleur: IDFMarron,
    infos: {desserte : ['93', '95'], nocturne : ['N43', 'N51', 'N147', 'N150', 'N154'], frequence_min : '7 minutes', frequence_moy : '45 minutes', frequence_max : '2h', connexes : ['RER C', 'RER D'], didyaknow : ["La section Creil - Pontoise n'est pas cadencée (circule aléatoirement)", 'La Ligne H possède une fréquence moyenne de 6,7 minutes en tronc commun comparable aux 5 minutes du RER A']}
  },
  J: {
    travelMode: 'Train',
    network: 'Réseau Transilien Saint-Lazare Nord',
    couleur: IDFOliveClair,
    infos: {desserte : ['78', '95'], nocturne : ['N52', 'N150', 'N151', 'N152', 'N154', 'N155'], frequence_min : '8 minutes', frequence_moy : '45 minutes', frequence_max : '2h', connexes : ['RER A', 'Ligne L'], didyaknow : ["La section de Mantes à Vernon est uniquement desservie par des TER les week-ends", 'Dans le future, le RER E remplacera la Ligne J entre Houilles et Mantes-la-Jolie', "Tôt le matin et tard le soir, la Ligne J dessert exceptionnellement Sartrouville et Maison-Laffitte (circule avant/après le service du RER A et Ligne L)"]}
  },
  K: {
    travelMode: 'Train',
    network: 'Réseau Transilien Paris-Nord Est',
    rame1: 'Francilien',
    couleur: IDFOliveFonce,
    infos: {desserte : ['93', '77'], nocturne : ['N143','filéo'], frequence_moy : 'non-cadencé', connexes : ['TER K15', 'RER B', 'Bus 2122'], didyaknow : ["La ligne qui circule le moins de tout le réseau Transilien (Même le TER circule plus souvent)", "L'offre assez pauvre de la ligne est en grande partie couverte par les TER et les bus (du moins en IDF)."]}
  },
  L: {
    travelMode: 'Train',
    network: 'Réseau Transilien Saint-Lazare Sud',
    couleur: IDFLilas,
    infos: {desserte : ['Paris', '92', '95', '78'], nocturne : ['N24','N53','N66', 'N152','N154'], frequence_min : '4 minutes', frequence_moy : '13 minutes', frequence_max : '30 minutes', connexes : ['RER A', 'Ligne J', 'Ligne U'], didyaknow : ['La ligne Transilien avec la desserte la plus "locale"', "La ligne sert de renfort au RER A en semaine à Cergy en semaine (sinon : terminus Maison-Laffitte)"]}
  },
  N: {
    travelMode: 'Train',
    network: 'Réseau Transilien Montparnasse',
    couleur: IDFTurquoise,
    infos: {desserte : ['92', '78'], nocturne : ['N61','N62', 'N63', 'N160', 'N161', 'N162'], frequence_min : '20 minutes', frequence_moy : '45 minutes', frequence_max : '60 minutes', connexes : ['RER C', 'Ligne U', 'TER Rémi'], didyaknow : ["Peu de personne la prenne de Versailles à Paris (ça devrait être l'inverse)", "Des TER directs circulent entre Paris et Rambouillet (avec pour seul arrêt Versailles !)", "La ligne fait à elle-seul les Yvelines du nord au sud"]}
  },
  P: {
    travelMode: 'Train',
    network: 'Réseau Transilien Paris-Est',
    couleur: IDFOrange,
    infos: {desserte : '77', nocturne : ['N141', 'N142','Bus 17Ex'], frequence_min : '15 minutes', frequence_moy : '55 minutes', frequence_max : '60 minutes', connexes : ['RER E'], didyaknow : ["Cette ligne passe une grande partie de son trajet sans arrêt (version direct du RER E)", "La section Meaux - La Ferté-Milon est la seule à circuler avec des trains au biogaz", "Oui, oui, le train fait demi-tour à Longueville"]}
  },
  BusP: {
    travelMode: 'Bus',
    network: 'Autocars de substitution Coulommiers - La Ferté-Gaucher',
    couleur: IDFJauneVif,
    infos: {desserte : '77', nocturne : ['Bus 17Ex'], frequence_moy : '2 heures', connexes : ['Bus 17Ex'], didyaknow : ["Depuis un accident cette section est remplacé par des bus", "Depuis fort longtemps il est prévu de la rouvrir mais ce n'est jamais arrivé (faute d'oseille)", "le Bus 17Ex est en fait bien plus rapide que le Bus P pour rejoindre La Ferté-Gaucher depuis Coulommiers", "A beau être un bus de substitution, il effectue quand même quelques arrêts en dehors des gares anciennement desservies (Champgoulin, Eustache Lenoir, et Centre)"]}
  },
  T14: {
    travelMode: 'Tram',
    network: "Ligne d'Esbly à Crécy-la-Chapelle (ex-Ligne P)",
    rame1: 'Citadis Dualis carmillon',
    couleur: IDFTurquoise,
    infos: {desserte : '77', frequence_moy : '60 minutes', didyaknow : "Ancienne branche de la ligne P, c'est le tram le moins fréquenté d'IDF (1 trains par HEURE)",}
  },
  R: {
    travelMode: 'Train',
    network: 'Réseau Transilien Paris-Lyon Est',
    couleur: IDFRose,
    infos: {desserte : '77', nocturne : ['N137'], frequence_min : '30 minutes', frequence_moy : '60 minutes', frequence_max : '60 minutes', connexes : ['RER D', 'TER BFC', 'Bus 34'], didyaknow : ["Le train peu circuler en UM3 (3 trains collés ensembles)", "Il existe une gare secrète entre Fontainebleau-Avon et Bois-le-Roi permettant aux randonneurs de rejoindre la forêt", 'Les trains Ligne R à destination de Montreau sont parfois remplacés par des TER BFC à destination de Laroches-Migenes (surtout en pointe).']}
  },
  U: {
    travelMode: 'Train',
    network: 'Tangentielle La Défense - Saint-Quentin-en-Yvelines',
    couleur: IDFRougeFramboise,
    infos: {desserte : ['92', '78'], nocturne : ['N161', 'N162'], frequence_moy : '30 minutes', connexes : ['RER C', 'Ligne N', 'Ligne L'], didyaknow : ["Malgré le fait que la desserte sud Yvelines est comunne aux Ligne N et RER C, la Ligne U est souvent la plus blindé !"]}
  },
  V: {
    travelMode: 'Train',
    network: 'Tangentielle Massy - Versailles',
    couleur: IDFOliveFonce,
    infos: {desserte : ['91', '78'], frequence_moy : '30 minutes', didyaknow : ["Bien qu'indépendante, la ligne partage ses trains avec le RER C", "Avant son existence et celle du Tram T12, le RER C faisait une boucle Versailles chantiers - Versailles Château via Massy et Juvisy (Le piège à tourisme ultime)", "Dans le future, le métro 18 concurrencera la Ligne V deservant toutes les deux Versailles et Massy."]}
  },
}

function openMenu(line) {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('show');
  sidebar.style.opacity = '1';
  sidebar.style.right = '0';
  document.getElementById('backbutton').classList.add('hidden');
  document.getElementById('sideclose').classList.remove('hidden')

  const lineKey = line in lines_spec ? line : null;
  const spec = lines_spec[lineKey] || {};

  // Travel mode
  const travelModeSrc = `/assets/images/pictos/${spec.travelMode}.svg`;
  setImage('travel-mode', travelModeSrc, spec.travelMode || '');

  // Ligne image + plan
  if (line.startsWith('Bus')) {
    const container = document.getElementById('lignepicto');
    const others = document.getElementById('ligneImage')
    if (others) {
      others.removeAttribute('src');
      others.classList.add('hidden')
    }
    if (container) {
      container.innerHTML = ''; // On vide le conteneur
  
      // Récupérer les caractères après "Bus" (max 4)
      const suffix = line.slice(3, 20); // ex : "25A"
  
      // Créer un span par caractère
      [...suffix].forEach(code => {
        const span = document.createElement('span');
        span.className = 'indice-bus';
        span.style.backgroundColor = spec['couleur'];
        span.style.color = pictobus['text-col'];
        span.style.marginLeft = '10px'
        span.textContent = code;
        container.appendChild(span);
        setImage('planImage', `/assets/images/plan/Ligne ${line}.png`, `plan ligne ${line}`);
      });
    };
  }

  else {
    const others = document.getElementById('lignepicto');
    if (others) {
      others.innerHTML = ''; // On vide le conteneur
    }
    const container = document.getElementById('ligneImage'); container.classList.remove('hidden')
  const altLigne = spec.travelMode === 'Tram' ? line : `Ligne ${line}`;
  setImage('ligneImage', `/assets/images/pictos/${line}.svg`, altLigne);
  setImage('planImage', `/assets/images/plan/Ligne ${line}.png`, `plan ligne ${line}`);}

  // Réseau
  if (spec.network) {
    document.getElementById('network').innerHTML = spec.network;
    document.getElementById('network').style.color = spec.couleur;
  }

 // Infos dans le tableau
const infos = spec.infos || {};

const setText = (id, value) => {
  const el = document.getElementById(id);
  const label = document.getElementById(`${id}-label`);

  if (value && el) {
    el.classList.remove('hidden');
    if (label) label.classList.remove('hidden');
    el.textContent = Array.isArray(value) ? value.join(', ') : value;
  } else if (el) {
    el.classList.add('hidden');
    if (label) label.classList.add('hidden');
    el.textContent = '';
  }

  if  (id === 'frequence-moy') {
    const label = document.querySelectorAll(`[id=${id}-label]`); 
    if (value === 'non-cadencé') {
      label.forEach(k => {
        k.classList.add('hidden')
      });
    }
    else {
      label.forEach(k => {
        k.classList.remove('hidden')
      });
    }
  }

  if (id.includes('frequence')) {
    el.style.color = spec.couleur
  }
};

const setTextnovir = (id, value) => {
  const el = document.getElementById(id);
  const label = document.getElementById(`${id}-label`);

  if (value && el) {
    el.classList.remove('hidden');
    if (label) label.classList.remove('hidden');
    const content = Array.isArray(value)
    ? value.join('<br>')
    : value;
    
    el.textContent = Array.isArray(value) ? value.join('<br>') : value;
  } else if (el) {
    el.classList.add('hidden');
    if (label) label.classList.add('hidden');
    el.textContent = '';
  }

  if  (id === 'frequence-moy') {
    if (value === 'non-cadencé') {
      const label = document.querySelectorAll(`[id=${id}-label]`); 
      label.forEach(k => {
        k.classList.add('hidden')
      });
    }
  }

  if (id.includes('frequence')) {
    el.style.color = spec.couleur
  }
};

setText('desserte', infos.desserte);
setText('frequence-min', infos.frequence_min);
setText('frequence-moy', infos.frequence_moy);
setText('frequence-max', infos.frequence_max);
setTextnovir('connexes', infos.connexes);
setText('nocturne', infos.nocturne);

// Le saviez-vous
const didyk = document.getElementById('didyk');
if (didyk) {
  const facts = infos.didyaknow;
  if (Array.isArray(facts)) {
    didyk.innerHTML = '<ul>' + facts.map(f => `<li>${f}</li>`).join('') + '</ul>';
  } else if (typeof facts === 'string') {
    didyk.innerHTML = `<p>${facts}</p>`;
  } else {
    didyk.innerHTML = '';
  }
}
replaceIndice(document.body)
}


function setImage(id, src, alt) {
  const el = document.getElementById(id);
  if (el) {
    el.src = src;
    el.alt = alt;
  }
}

function clearImage(id) {
  setImage(id, '', '');
}

function setRameImage(id, rameKey) {
  // Gestion spéciale pour 'AGC' → tirage aléatoire
  if (rameKey === 'AGC') {
    const agcVariants = ['AGC blueTransilien', 'AGC carmillon'];
    rameKey = agcVariants[Math.floor(Math.random() * agcVariants.length)];
  }

  const src = `/assets/images/visuels/rames/${rameKey}.png`;
  const alt = rame_alt[rameKey] || rameKey;
  setImage(id, src, alt);
}


  function closeMenu () {
    document.getElementById('sidebar').style.right = '-52%'
    document.getElementById('backbutton').classList.remove('hidden');
    setTimeout(() => {
    document.getElementById('backbutton').style.opacity = '1';}, 100)
  }

  function menuBack () {
    document.getElementById('sidebar').style.right = '0'
  }