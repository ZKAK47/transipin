const Lignes = {
    A: ["Je traverse Paris", "Je dessert La Défense", "Je suis H24 blindé", "Je dessert le 95", "Je respecte plus les intervalles que les horaires(non, c'est techniquement pas du retard)"],
    B: ["Je traverse Paris", "Je suis H24 blindé", "Je dessert le 91", "Mon terminus sud est dans un milieu pas très dense", "Je dessert le 93"],
    C: ["Je traverse Paris", "J'ai le plus d'arrêt à Paris", "Je relie l'Essonne à Paris en 10 minutes", "Les usagers du T12 rêvent de mon retour", "Je dessert absolument tout les départements d'IDF sauf le 77"],
    D: ["Je traverse Paris", "Je suis H24 semi ou complétement blindé", "Je possède des trains modernes", "Si j'ai un problème au Nord, le Sud est également perturbé sauf deux certains axes", "Mes deux terminus Nord et Sud quittent l'Île-de-France"],
    E: ["Je traverse Paris", "Je dessert La Défense", "Je ne dessert pas Châtelet Les Halles", "J'ai des trains modernes", "N'importe quoi, je ne suis pas le RER A, c'est lui qui me suit"],
    H: ["Je suis au départ de Paris", "Je dessert le 93", "Depuis Paris, un TER direct emmène à un de mes terminus", "J'ai qu'un seul type de train sur ma ligne", "J'ai une fréquence <10 minutes en tron commun (heure creuses)"],
    J: ["Je suis au départ de Paris", "Je possède les trains les plus anciens dans mon parc", "Le samedi une partie des mes arrêts est uniquement desservies par des TER", "Je dessert la plus grosse ville du 95", "Je dessert le 95"],
    K: ["Je suis au départ de Paris", "Mes usagers dépendent beaucoup du TER", "Je dessert le 93", "Je dessert le 77", "Je sors d'Île-de-France à mon terminus"],
    L: ["Je suis au départ de Paris", "Je dessert La Défense", "J'ai une desserte de RER", "Je ne suit pas le RER A, c'est lui qui me suit", "Je dessert Versailles"],
    N: ["Je suis au départ de Paris", "Je dessert Versailles", "+ on se rapproche de Paris + je suis vide", "Depuis Paris, un TER semi-direct emmène à mon terminus", "Je dessert Saint-Quentin-en-Yvelines - Montigny-le-Bretonneux - qui-boutingy-sur-yvelines (ok j'ai inventé la fin)"],
    P: ["Je suis au départ de Paris", "Je suis la ligne la plus longue de tout le réseau", "Tout mes premiers arrêts après Paris se situent au terminus d'une mission de trains (tous confondus) sauf 1 arrêt", "Des Z20500 peuvent sur ma ligne", "Je ne dessert que le 77"],
    R: ["Je suis au départ de Paris", "Tout mes premiers arrêts après Paris se situent au terminus d'une mission de trains (tous confondus) sauf 1 arrêt", "J'ai un assez grand écarts entre les arrêts", "Je dessert une gare secrète à des horaires précises", "Je suis toujours blindé entre mes deux premiers arrêts"],
    U: ["Je dessert La Défense", "Je dessert Versailles", "Des Z2N circulent sur ma ligne", "Je dessert Saint-Quentin-en-Yvelines - Montigny-le-Bretonneux", "J'ai beau être court, si je suis supprimé, tout le 78 s'écroule"],
    V: ["Je dessert Versailles", "Je dessert le 91", "Je dessert des milieux peu denses", "Je me ferai bientôt concurrencé par un métro", "SHHHH je suis à court d'indice"]
};

let resultats = {}

let viewedspecial = false

// Choisir une lettre au hasard
const lettres = Object.keys(Lignes);

let popups = [];

let Minepop = [];

function openthewindow(msg, y, x) {
  const popup = document.createElement("div");
  popup.id = "temp-popup";  // ID unique
  popup.style.position = "fixed";
  popup.style.left = `${x}%`;
  popup.style.top = `${y}%`;
  popup.style.width = "200px";
  popup.style.height = "150px";
  popup.style.transform = `translate(-${y}%, -${x}%)`;
  popup.style.backgroundColor = "#111";
  popup.style.color = "#0f0";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.fontFamily = "monospace";
  popup.style.zIndex = 999999;
  popup.style.padding = "10px";
  popup.style.borderRadius = "10px";
  popup.innerHTML = `<h1>${msg}</h1>`

   // Ajouter à la page
   document.body.appendChild(popup);

   // Ajouter à la liste des popups
   popups.push(popup);
}

function openMinechat(msg, y) {
  const Minepop = document.createElement("div");
  Minepop.id = "temp-popup";  // ID unique
  Minepop.style.position = "fixed";
  Minepop.style.left = `0`;
  Minepop.style.bottom = `${y}%`;
  Minepop.style.backgroundColor = "rgba(0,0,0,0.5)";
  Minepop.style.color = "white";
  Minepop.style.fontFamily = "monospace";
  Minepop.style.zIndex = 99999999999999999999999999999999999999;
  Minepop.style.padding = "0px";
  Minepop.style.pointerEvents = 'none'
  Minepop.innerHTML = `<h2 style="margin : 0; padding: 0">${msg}</h2>`

   // Ajouter à la page
   document.body.appendChild(Minepop);

   // Ajouter à la liste des popups
   popups.push(Minepop);
   setTimeout(() => {
    popups.forEach(p => {
        p.remove(); // On supprime les éléments créés
    });
    }, 10000);
}

function GameStart() {
    let userinput = ""

    while (userinput !== 'Oui' && userinput !== 'Non') {
        userinput = confirm(`Attention, la mécanique du jeu est un peu dépassée
            Il est fortement déconseillé de bloquer les pop ups (truc indique) du site (si bloqués, le mini-jeu peut disfonctionner totalement).
            Voulez-vous poursuivre tout de même ?`)
            if (userinput)
            {
        userinput = prompt("On joue à un jeu ? (Oui ou Non)").toLowerCase();
        if (userinput === 'oui') {
            if (!viewedspecial) { viewedspecial = true
                openthewindow("I'VE PLAYED", 75, 25)
            setTimeout(() => {
                openthewindow("THESE GAMES", 25, 75)
            }, 1000);
            setTimeout(() => {
                openthewindow("BEFORE",  50, 50)
            }, 2000);
            setTimeout(() => {
                alert("/execute at DontClickTheSound run summon minecraft:creeper ~ ~ ~ {powered:1b}");
                popups.forEach(p => {
                    p.remove(); // On supprime les éléments créés
                });
                openMinechat("summoned new Creeper","20")
            }, 3000);
            setTimeout(() => {
                openMinechat("DontClickTheSound was blown up by Creeper","15")
            }, 5000);
            setTimeout(() => {
                openMinechat("DontClickTheSound left the server","10")
            }, 10000);
                return; // on ne fait pas `return GameChoice()` directement
            }
            else { return GameChoice()}
        }
        else if (userinput === 'non') {
            alert("Bah pk t'écris GAME alors frère ? Tu me fais perdre mon temps là. Plus jamais");
            break
        }
        else if (userinput === null) {
            break;
        }
        else {
            alert("Monsieur, je sais très bien que vous disposez d'une assez bonne intelligence pour déterminer comment 'Oui' ou 'Non' dans un int. Savez-vous que vous avez pris Numériques et Sciences informatiques en spé ?");
        }
    }
    else {return}
  }
}

function GameChoice() {
    let input = ""
    input = prompt("Qui va penser").toLowerCase()
        if (input==="toi") {
            return FindLine()
        }
        else if (input==="moi") {
            return GuessLine()
        }
        else {alert("Tu ne réponds pas à ma question là")}
}

function FindLine() {
    const lettredubot = lettres[Math.floor(Math.random() * lettres.length)];
    // Liste des indices disponibles pour cette lettre
    let indicesRestants = [...Lignes[lettredubot]];
    let tries = 0
    let input=prompt(`Je pense à une ligne, sais-tu laquelle ?
        (répond en citant une seule lettre (ex: "A"))`).toUpperCase()
    tries += 1
    console.log(input, lettredubot, tries)
    while (input !== lettredubot && input !== null && tries <= 6) {
        if (6-tries === 0) {
            input=prompt(`Dernière essai, ${donnerIndice()}
            Qui suis-je ?`)
        }
        else {
        input=prompt(`Raté, voici un indice :
            ${donnerIndice()}.
        Qui suis-je ?.
        Il te reste, ${6-tries} autres essais`).toUpperCase()
        tries += 1}
    }
    if (input === lettredubot) {
        alert(`Bien joué c'était la ligne ${lettredubot}.`)
        return resultats = {win: true, lose: false, tries: tries, game: 'FindLine', end: true}
    }
    else if (tries <= 6) {
        alert(`Dommage, plus d'essais, c'était la ligne ${lettredubot}.`)
        return resultats = {win: false, lose: true, tries: tries, game: 'FindLine', end: true}
    }
    else if (input === null) {
        alert("Il semblerait que vous ayez choisi d'annulé la partie, c'était la ligne ",lettredubot,".")
        return {win: false, lose: false, tries: tries, game: 'FindLine', end: false}
    }
    else {
        alert("Il semblerait qu'une erreur s'est produite.")
        return 'error'
    }
    // Fonction appelée à chaque erreur
function donnerIndice() {
    if (indicesRestants.length === 0) {
      console.log("Plus aucun indice disponible.");
      return ("Plus aucun indice disponible");
    }
  
    const i = Math.floor(Math.random() * indicesRestants.length);
    const indiceChoisi = indicesRestants.splice(i, 1)[0]; // Retire l’indice pour ne pas le répéter
  
    return indiceChoisi
  }
}

function poserOuiNon(question) {
    while (true) {
        let reponse = prompt(question);
        if (reponse === null) return null;
        reponse = reponse.trim().toLowerCase();
        if (reponse === "oui" || reponse === "non") return reponse;
        alert("Merci de répondre uniquement par 'oui' ou 'non'.");
    }
}

function GuessLine() {
    let tries = 0;
    let found = null
    alert("Pour ce jeu tu dois juste répondre oui ou non... (99% des joueurs ont raté)");

    let input = poserOuiNon("Est-ce que ta ligne fait terminus à Paris ?");
    if (input === null) return alert("Partie annulée.");
    tries++;

    if (input === 'oui') {
        input = poserOuiNon("est-ce que ta ligne dessert Versailles");
        if (input === null) return alert("Partie annulée.");
        tries++;

        if (input === 'oui') { // Versailles
            input = poserOuiNon("est-ce que des Z50000 (Francilien) circulent sur ta ligne ?");
            if (input === null) return alert("Partie annulée.");
            tries++;
            if (input === 'oui') {
                alert("Tu penses à la ligne L !");found = "L"
            }
            else {
                alert("Tu penses à la ligne N");found = "N"
            }
        }

        else { // Pas Versailles
            input = poserOuiNon("est-ce que des Z50000 (Francilien) circulent sur ta ligne");
            if (input === null) return alert("Partie annulée.");
            tries++;
            if (input === 'oui') {
                input = poserOuiNon("est-ce que au moins une section de ta ligne peut être considéré comme la version express d'un RER ?");
                if (input === null) return alert("Partie annulée.");
                tries++;
                if (input === 'oui') {
                    input = poserOuiNon("est-ce que plusieurs types de trains cohabitent dans le parc de ta ligne ?");
                    if (input === null) return alert("Partie annulée.");
                    tries++;
                    if (input === 'oui') {
                        input = poserOuiNon("est-ce que ta ligne dessert le Val d'Oise [95] ?");
                        if (input === 'oui') {
                        alert("Tu penses à la ligne J !");found = "J"
                        }
                        else {alert("Tu penses à la ligne P !");found = "P"}
                    }
                    else {
                        alert("Tu penses à la ligne K !");found = "K"
                    }
                }
                else {
                    input = poserOuiNon("Est-ce que ta ligne possède deux branches qui quittent l'Île-de-France");
                    if (input === null) return alert("Partie annulée.");
                    tries++;
                    if (input === 'oui') {
                        alert("Tu penses à la ligne J !");found = "J"
                    }
                    else {
                        alert("tu penses à la ligne H !");found = "H"
                    }
                }
            }
            
            else { // Pas de Francilien
                input = poserOuiNon("est-ce que seulement quelques uns de tes terminus font terminus à Paris");
                if (input === null) return alert("Partie annulée.");
                tries++;
                if (input === 'oui') {
                    alert("Tu penses à la ligne S (a.k.a RER D Sud) !");found = "S (D)"
                }
                else {
                    alert("Tu penses à la ligne R !");found = "R"
                }
            }
        }
    } else {    // Traverse Paris
        input = poserOuiNon("Est-ce que ta ligne dessert Versailles ?");
        if (input === null) return alert("Partie annulée.");
        tries++;

        if (input === "oui") {
            input = poserOuiNon("Est-ce que ta ligne dessert Massy-Palaiseau ?");
            if (input === null) return alert("Partie annulée.");
            tries++;

            if (input === "oui") {
                alert("Tu penses à la ligne V !");found = "V"
            } else {
                alert("Tu penses à la ligne U !");found = "U"
            }
        } else {
            input = poserOuiNon("est-ce que ta ligne dessert Châtelet Les Halles ?");
            if (input === null) return alert("Partie annulée.");
            tries++;
            
            if (input === 'oui') { // Châtelet
                input = poserOuiNon("est-ce que ta ligne dessert La Défense ?");
                if (input === null) return alert("Partie annulée.");
                tries++;
                if (input === 'oui') {
                    alert("Tu penses au RER A");found = "A"
                }
                else {
                    input = poserOuiNon("est-ce des trains modernes circulent sur ta ligne ?");
                    if (input === null) return alert("Partie annulée.");
                    tries++;
                    if (input === 'oui') {
                        alert("Tu penses au RER B !");found = "B"
                    }
                    else {
                        alert("Tu penses au RER D !");found = "D"
                    }
                }
            }

            else { //Pas Châtelet
                input = poserOuiNon("est-ce que des trains modernes circulent sur ta ligne ?");
                if (input === null) return alert("Partie annulée.");
                tries++;
                if (input === 'oui') {
                    alert("Tu penses au RER E !");found = "E"
                }
                else {
                    alert("Tu penses au RER C !");found = "C"
                }
            }
        }
    }

    alert("C'est la fin du jeu")
    foundq = poserOuiNon("est-ce que j'ai trouvé ta ligne ?");
    if (foundq === "non") {found = false}
    return resultats = {found: found, tries: tries, end: true, game: 'GuessLine'}
}