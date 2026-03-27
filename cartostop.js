function clearMarkers() {
    currentMarkers.forEach(marker => map.removeLayer(marker));
    currentMarkers = [];
  }
  
function addStopsToMap(stops, lineColor, markerStyleClass = "Terminalstop") {
  stops.forEach(point => {
    // Déterminer le style du marqueur selon le stoptype
    const isTerminus = point.stoptype === "Terminus";
    const markerStyleClass = isTerminus ? "Terminalstop" : "Regularstop";
    // Définir le style de l'icône en fonction du type d'arrêt
    const iconhtml = (markerStyleClass !== "Terminalstop") 
      ? `<div class="circle-marker" style="border:2px solid ${lineColor};"></div>` 
      : `<div class="terminal-circle-marker" style="background: ${lineColor};"></div>`;

    // Créer le marqueur
    const marker = L.marker(point.coords, {
      icon: L.divIcon({
        className: '',
        html: iconhtml,
        iconSize: [5, 5],
        iconAnchor: [5, 5]
      })
    }).addTo(map);

    // Définir l'option `permanent` du tooltip en fonction du `stoptype`
    const permanent = (point.stoptype === "Regular") ? false : true;

    // Ajouter le tooltip avec la condition sur `permanent`
    marker.bindTooltip(point.name, {
      permanent: permanent,
      direction: 'right',
      className: markerStyleClass,
      offset: [0, -10]
    });

    // Ajouter le marqueur à la liste des marqueurs
    currentMarkers.push(marker);
  });
}


  const Dstops = [
    { name: "Juvisy", coords: [48.689909, 2.384055], stoptype: "Regular" },
    { name: "Viry-Châtillon", coords: [48.676222, 2.38663], stoptype: "Regular" },
    { name: "Grand Bourg", coords: [48.648073, 2.435949], stoptype: "Regular" },
    { name: "Evry Val de Seine", coords: [48.6345309, 2.4522049], stoptype: "Regular" },
    { name: "Moulin Galant", coords: [48.586361, 2.473498], stoptype: "Regular" },
    { name: "Mennecy", coords: [48.571058, 2.433091], stoptype: "Regular" },
    { name: "Ballancourt", coords: [48.532164, 2.371105], stoptype: "Regular" },
    { name: "Boutigny", coords: [48.434881, 2.376193], stoptype: "Regular" },
    { name: "Maisse", coords: [48.393671, 2.393448], stoptype: "Regular" },
    { name: "Buno-Gironville", coords: [48.370735, 2.387067], stoptype: "Regular" },
    { name: "Boigneville", coords: [48.342076, 2.378983], stoptype: "Regular" },
    { name: "Essonnes-Robinson", coords: [48.605589, 2.462611], stoptype: "Regular" },
    { name: "Villabé", coords: [48.592771, 2.461597], stoptype: "Regular" },
    { name: "Le Plessis-Chenet", coords: [48.573533, 2.479616], stoptype: "Regular" },
    { name: "Le Coudray-Montceaux", coords: [48.566175, 2.492475], stoptype: "Regular" },
    { name: "Ponthierry-Pringy", coords: [48.535018, 2.544896], stoptype: "Regular" },
    { name: "Boissise-le-Roi", coords: [48.529381, 2.57293], stoptype: "Regular" },
    { name: "Vosves", coords: [48.515162, 2.599149], stoptype: "Regular" },
    { name: "Ris-Orangis", coords: [48.659289, 2.414374], stoptype: "Main" },
    { name: "Corbeil-Essonnes", coords: [48.614002, 2.473603], stoptype: "Main" },
    { name: "La Ferté-Alais", coords: [48.484763, 2.351777], stoptype: "Main" },
    { name: "Saint-Fargeau", coords: [48.564487, 2.542664], stoptype: "Main" },
    { name: "Paris Gare de Lyon - (Grandes Lignes)", coords: [48.844515, 2.37375], stoptype: "Terminus" },
    { name: "Juvisy", coords: [48.689909, 2.384055], stoptype: "Terminus" },
    { name: "Malesherbes", coords: [48.293421, 2.401205], stoptype: "Terminus" },
    { name: "Melun", coords: [48.527334, 2.654821], stoptype: "Terminus" }
  ];
  
  const Hstops = [
    { name: "Epinay-Villetaneuse", coords: [48.958151, 2.328381], stoptype: "Regular" },
    { name: "La Barre - Omesson", coords: [48.966231, 2.316726], stoptype: "Regular" },
    { name: "Enghien-les-Bains", coords: [48.972853, 2.306973], stoptype: "Regular" },
    { name: "Champs de courses - d'Enghien", coords: [48.979612, 2.291923], stoptype: "Regular" },
    { name: "Cernay", coords: [48.985123, 2.257121], stoptype: "Regular" },
    { name: "Fraconville - Le Plessis-Bouchard", coords: [48.993427, 2.235028], stoptype: "Regular" },
    { name: "Montigny - Beauchamp", coords: [49.007443, 2.197539], stoptype: "Regular" },
    { name: "Pierrelaye", coords: [49.019429, 2.153569], stoptype: "Regular" },
    { name: "Saint-Ouen-l'Aumône-Liesse", coords: [49.033971, 2.128314], stoptype: "Regular" },
    { name: "Saint-Ouen-l'Aumône", coords: [49.045276, 2.105933], stoptype: "Regular" },
    { name: "Ermont-Halte", coords: [48.989927, 2.263407], stoptype: "Regular" },
    { name: "Gros Noyer - Saint-Prix", coords: [48.996281, 2.259519], stoptype: "Regular" },
    { name: "Vaucelles", coords: [49.021833, 2.229267], stoptype: "Regular" },
    { name: "Taverny", coords: [49.025212, 2.221767], stoptype: "Regular" },
    { name: "Besancourt", coords: [49.035753, 2.209829], stoptype: "Regular" },
    { name: "Frépillon", coords: [49.046184, 2.197021], stoptype: "Regular" },
    { name: "Méry-sur-Oise", coords: [49.057703, 2.191029], stoptype: "Regular" },
    { name: "Mériel", coords: [49.077714, 2.205461], stoptype: "Regular" },
    { name: "L'Isle-Adam - Parmain", coords: [49.114787, 2.210033], stoptype: "Regular" },
    { name: "Champagne-sur-Oise", coords: [49.135722, 2.241889], stoptype: "Regular" },
    { name: "Deuil Montmagny", coords: [48.975932, 2.338293], stoptype: "Regular" },
    { name: "Groslay", coords: [48.984363, 2.35349], stoptype: "Regular" },
    { name: "Ecouen Ezanville", coords: [49.022948, 2.362647], stoptype: "Regular" },
    { name: "Domont", coords: [49.032777, 2.337741], stoptype: "Regular" },
    { name: "Bouffémont Moisselles", coords: [49.045182, 2.32291], stoptype: "Regular" },
    { name: "Nointel - Mours", coords: [49.132585, 2.280507], stoptype: "Regular" },
    { name: "Presles Courcelles", coords: [49.113498, 2.287837], stoptype: "Regular" },
    { name: "Villaines", coords: [49.079842, 2.351401], stoptype: "Regular" },
    { name: "Belloy Saint-Martin", coords: [49.098121, 2.361113], stoptype: "Regular" },
    { name: "Viarmes", coords: [49.116852, 2.3685], stoptype: "Regular" },
    { name: "Seugy", coords: [49.11898, 2.398913], stoptype: "Regular" },
    { name: "Epluches", coords: [49.054712, 2.122383], stoptype: "Regular" },
    { name: "Pont-Petit", coords: [49.060382, 2.13066], stoptype: "Regular" },
    { name: "Chaponval", coords: [49.069431, 2.142231], stoptype: "Regular" },
    { name: "Auvers-sur-Oise", coords: [49.070466, 2.175357], stoptype: "Regular" },
    { name: "Bruyères-sur-Oise", coords: [49.15521, 2.326019], stoptype: "Regular" },
    { name: "Boran-sur-Oise", coords: [49.167062, 2.3625], stoptype: "Regular" },
    { name: "Précy-sur-Oise", coords: [49.203369, 2.376522], stoptype: "Regular" },
    { name: "Saint-Leu-d'Esserent", coords: [49.214079, 2.417769], stoptype: "Regular" },
    { name: "Ermont-Eaubonne", coords: [48.980626, 2.271423], stoptype: "Main" },
    { name: "Sarcelles Saint-Brice", coords: [48.996154, 2.368729], stoptype: "Main" },
    { name: "Montsoult Maffliers", coords: [49.066017, 2.322603], stoptype: "Main" },
    { name: "Saint-Leu-la-Forêt", coords: [49.015552, 2.242399], stoptype: "Main" },
    { name: "Valmondois", coords: [49.091715, 2.202153], stoptype: "Main" },
    { name: "Saint-Denis", coords: [48.934923, 2.345289], stoptype: "Main" },
    { name: "Paris Gare du Nord", coords: [48.880939, 2.356825], stoptype: "Terminus" },
    { name: "Persan-Beaumont", coords: [49.147845, 2.278413], stoptype: "Terminus" },
    { name: "Pontoise", coords: [49.046916, 2.095661], stoptype: "Terminus" },
    { name: "Luzarches", coords: [49.117235, 2.420407], stoptype: "Terminus" },
    { name: "Creil", coords: [49.264269, 2.468727], stoptype: "Terminus" }
  ];
  
  const Jstops = [
    { name: "Asnières-sur-Seine", coords: [48.905997, 2.283402], stoptype: "Regular" },
    { name: "Bois Colombes", coords: [48.914329, 2.271475], stoptype: "Regular" },
    { name: "Colombes", coords: [48.924022, 2.259304], stoptype: "Regular" },
    { name: "Le Stade", coords: [48.931392, 2.260763], stoptype: "Regular" },
    { name: "Sannois", coords: [48.970862, 2.263864], stoptype: "Regular" },
    { name: "Val d'Argenteuil", coords: [48.950451, 2.231835], stoptype: "Regular" },
    { name: "Corneilles-en-Parisis", coords: [48.968509, 2.193424], stoptype: "Regular" },
    { name: "La Frette-Montigny", coords: [48.98026, 2.180018], stoptype: "Regular" },
    { name: "Herblay", coords: [48.990296, 2.1619], stoptype: "Regular" },
    { name: "Conflans Fin d'Oise", coords: [48.991954, 2.074983], stoptype: "Regular" },
    { name: "Maurcourt", coords: [48.987051, 2.059808], stoptype: "Regular" },
    { name: "Andrésy", coords: [48.974821, 2.049084], stoptype: "Regular" },
    { name: "Chanteloup-les-Vignes", coords: [48.970366, 2.027658], stoptype: "Regular" },
    { name: "Triel-sur-Sine", coords: [48.981071, 2.006021], stoptype: "Regular" },
    { name: "Vaux-sur-Seine", coords: [49.007102, 1.963585], stoptype: "Regular" },
    { name: "Thun-le-Paradis", coords: [49.006699, 1.919247], stoptype: "Regular" },
    { name: "Meulan Hadricourt", coords: [49.005773, 1.901868], stoptype: "Regular" },
    { name: "Juziers", coords: [48.992232, 1.84573], stoptype: "Regular" },
    { name: "Gargenville", coords: [48.982993, 1.809039], stoptype: "Regular" },
    { name: "Issou Porcheville", coords: [48.979295, 1.783974], stoptype: "Regular" },
    { name: "Limay", coords: [48.984254, 1.747341], stoptype: "Regular" },
    { name: "Mantes-Station", coords: [48.98356, 1.715332], stoptype: "Regular" },
    { name: "Villennes-sur-Seine", coords: [48.939878, 1.999532], stoptype: "Regular" },
    { name: "Vernouillet Verneuil", coords: [48.98143, 1.983128], stoptype: "Regular" },
    { name: "Les Clairières de Verneuil", coords: [48.99264, 1.955411], stoptype: "Regular" },
    { name: "Aubergenville Elisabethville", coords: [48.972098, 1.848224], stoptype: "Regular" },
    { name: "Epône Mézières", coords: [48.963361, 1.808817], stoptype: "Regular" },
    { name: "Rosny-sur-Seine", coords: [48.997403, 1.630142], stoptype: "Regular" },
    { name: "Bonnières", coords: [49.038768, 1.581575], stoptype: "Regular" },
    { name: "Eragny - Neuville", coords: [49.01809, 2.090642], stoptype: "Regular" },
    { name: "Saint-Ouen l'Aumône - Quartier de l'Eglise", coords: [49.039672, 2.103747], stoptype: "Regular" },
    { name: "Osny", coords: [49.062885, 2.058348], stoptype: "Regular" },
    { name: "Montgeroult Courcelles", coords: [49.080854, 2.002845], stoptype: "Regular" },
    { name: "ඞ Us", coords: [49.099559, 1.970565], stoptype: "Regular" },
    { name: "Santeuil le Perchay", coords: [49.124167, 1.949013], stoptype: "Regular" },
    { name: "Chars", coords: [49.162647, 1.936919], stoptype: "Regular" },
    { name: "La Villetertre", coords: [49.201993, 1.920512], stoptype: "Regular" },
    { name: "Liancourt Saint-Pierre", coords: [49.221631, 1.905054], stoptype: "Regular" },
    { name: "Chaumont-en-Vexin", coords: [49.261201, 1.872954], stoptype: "Regular" },
    { name: "Trie Château", coords: [49.282312, 1.818655], stoptype: "Regular" },
    { name: "Argenteuil", coords: [48.946942, 2.257867], stoptype: "Main" },
    { name: "Conflans-Sainte-Honorine", coords: [48.996931, 2.098405], stoptype: "Main" },
    { name: "Les Mureaux", coords: [48.992514, 1.9133], stoptype: "Main" },
    { name: "Pontoise", coords: [49.046726, 2.095194], stoptype: "Main" },
    { name: "Houilles Carrières-sur-Seine", coords: [48.92032, 2.185394], stoptype: "Main" },
    { name: "Poissy", coords: [48.933306, 2.041062], stoptype: "Main" },
    { name: "Paris Saint-Lazare", coords: [48.87665, 2.324947], stoptype: "Terminus" },
    { name: "Ermont-Eaubonne", coords: [48.980323, 2.269744], stoptype: "Terminus" },
    { name: "Mantes-la-Jolie", coords: [48.989398, 1.703106], stoptype: "Terminus" },
    { name: "Vernon - Giverny", coords: [49.091358, 1.478114], stoptype: "Terminus" },
    { name: "Boissy l'Aillerie", coords: [49.075801, 2.025124], stoptype: "Terminus" },
    { name: "Gisors", coords: [49.285367, 1.784731], stoptype: "Terminus" }
  ];
  
  const Kstops = [
    { name: "Compans", coords: [48.991498, 2.665222], stoptype: "Regular" },
    { name: "Thieux - Nantouillet", coords: [49.007924, 2.680098], stoptype: "Regular" },
    { name: "Le Plessis-Bellevue", coords: [49.095967, 2.744675], stoptype: "Regular" },
    { name: "Nanteuil-le-Haudouin", coords: [49.142812, 2.794379], stoptype: "Regular" },
    { name: "Ormoy-Villiers", coords: [49.200187, 2.837444], stoptype: "Regular" },
    { name: "Aulnay-sous-Bois", coords: [48.932048, 2.49521], stoptype: "Main" },
    { name: "Mitry-Claye", coords: [48.975837, 2.642389], stoptype: "Main" },
    { name: "Dammartin Juilly Saint-Mard", coords: [49.032118, 2.699096], stoptype: "Main" },
    { name: "Paris Gare du Nord", coords: [48.880878, 2.357087], stoptype: "Terminus" },
    { name: "Crépy-en-Valois", coords: [49.231111, 2.888148], stoptype: "Terminus" }
  ];
  
  const Lstops = [
    { name: "Pont Cardinet", coords: [48.888002, 2.313802], stoptype: "Regular" },
    { name: "Clichy Levallois", coords: [48.89759, 2.297354], stoptype: "Regular" },
    { name: "Bécon-les-Bruyères", coords: [48.905557, 2.268783], stoptype: "Regular" },
    { name: "Courbevoie", coords: [48.898486, 2.248855], stoptype: "Regular" },
    { name: "Puteaux", coords: [48.883112, 2.233442], stoptype: "Regular" },
    { name: "Suresnes<>Mont Valérien", coords: [48.871536, 2.220965], stoptype: "Regular" },
    { name: "Le Val d'Or", coords: [48.856076, 2.216588], stoptype: "Regular" },
    { name: "Garches Marnes - la Coquette", coords: [48.838232, 2.187124], stoptype: "Regular" },
    { name: "Vaucresson", coords: [48.836742, 2.152424], stoptype: "Regular" },
    { name: "La Celle - Saint-Cloud", coords: [48.84269, 2.138163], stoptype: "Regular" },
    { name: "Bougival", coords: [48.853915, 2.132053], stoptype: "Regular" },
    { name: "Louveciennes", coords: [48.861212, 2.123076], stoptype: "Regular" },
    { name: "Marly-le-Roi", coords: [48.871472, 2.096682], stoptype: "Regular" },
    { name: "L'Etang-la-Ville", coords: [48.868141, 2.076842], stoptype: "Regular" },
    { name: "Sèvres Ville d'Avray", coords: [48.827397, 2.200752], stoptype: "Regular" },
    { name: "Chaville Rive Droite", coords: [48.812338, 2.188065], stoptype: "Regular" },
    { name: "Montreuil", coords: [48.806422, 2.1514], stoptype: "Regular" },
    { name: "Les Vallées", coords: [48.913604, 2.25761], stoptype: "Regular" },
    { name: "La Garenne Colombes", coords: [48.909694, 2.239869], stoptype: "Regular" },
    { name: "Satrouville", coords: [48.937742, 2.157236], stoptype: "Regular" },
    { name: "Achères Ville", coords: [48.970196, 2.077722], stoptype: "Regular" },
    { name: "Neuville Université", coords: [49.013886, 2.078331], stoptype: "Regular" },
    { name: "Cergy Préfecture", coords: [49.036545, 2.07941], stoptype: "Regular" },
    { name: "Cergy Saint-Christophe", coords: [49.049634, 2.034412], stoptype: "Regular" },
    { name: "Asnières-sur-Seine", coords: [48.905789, 2.282895], stoptype: "Main" },
    { name: "La Défense", coords: [48.892326, 2.236967], stoptype: "Main" },
    { name: "Saint-Cloud", coords: [48.846127, 2.217623], stoptype: "Main" },
    { name: "Viroflay Rive Droite", coords: [48.805488, 2.168316], stoptype: "Main" },
    { name: "Nanterre Université", coords: [48.90129, 2.213766], stoptype: "Main" },
    { name: "Houilles - Carrières-sur-Seine", coords: [48.92034, 2.184986], stoptype: "Main" },
    { name: "Conflans-Fin-d'Oise", coords: [48.99043, 2.073921], stoptype: "Main" },
    { name: "Paris Saint-Lazare", coords: [48.87665, 2.324947], stoptype: "Terminus" },
    { name: "Saint-Nom-la Bretêche - Forêt de Marly", coords: [48.867381, 2.051275], stoptype: "Terminus" },
    { name: "Versailles Rive Droite", coords: [48.80958, 2.135717], stoptype: "Terminus" },
    { name: "Maison Laffitte", coords: [48.945747, 2.144627], stoptype: "Terminus" },
    { name: "Cergy-le-Haut", coords: [49.047949, 2.011185], stoptype: "Terminus" }
  ];
  
  const Nstops = [
    { name: "Vances Malakoff", coords: [48.818343, 2.291995], stoptype: "Regular" },
    { name: "Clamart", coords: [48.814225, 2.274432], stoptype: "Regular" },
    { name: "Meudon", coords: [48.814962, 2.240658], stoptype: "Regular" },
    { name: "Bellevue", coords: [48.819221, 2.22907], stoptype: "Regular" },
    { name: "Sèvres Rive Gauche", coords: [48.821252, 2.215375], stoptype: "Regular" },
    { name: "Chaville Rive Gauche", coords: [48.804949, 2.189111], stoptype: "Regular" },
    { name: "Viroflay Rive Gauche", coords: [48.800668, 2.171602], stoptype: "Regular" },
    { name: "Saint-Cyr", coords: [48.798808, 2.072661], stoptype: "Regular" },
    { name: "Trappes", coords: [48.77482, 2.00664], stoptype: "Regular" },
    { name: "La Verrière", coords: [48.755245, 1.943617], stoptype: "Regular" },
    { name: "Coignères", coords: [48.743732, 1.921389], stoptype: "Regular" },
    { name: "Les Essarts-le-Roi", coords: [48.721841, 1.889889], stoptype: "Regular" },
    { name: "Le Perray", coords: [48.693076, 1.8566], stoptype: "Regular" },
    { name: "Fontenay-le-Fleury", coords: [48.807291, 2.040369], stoptype: "Regular" },
    { name: "Villepreux-les-Clayes", coords: [48.823777, 1.992705], stoptype: "Regular" },
    { name: "Plaisir-les-Clayes", coords: [48.83096, 1.96004], stoptype: "Regular" },
    { name: "Villiers-Neauphle-Pontchartrain", coords: [48.81522, 1.877412], stoptype: "Regular" },
    { name: "Montfort-l'Armaury Méré", coords: [48.80268, 1.815884], stoptype: "Regular" },
    { name: "Garancières-la-Queue", coords: [48.810444, 1.76478], stoptype: "Regular" },
    { name: "Orgerus-Behoust", coords: [48.826655, 1.702789], stoptype: "Regular" },
    { name: "Tacoignères-Richebourg", coords: [48.82942, 1.668985], stoptype: "Regular" },
    { name: "Marchezais Broué", coords: [48.768339, 1.513575], stoptype: "Regular" },
    { name: "Beynes", coords: [48.859976, 1.875614], stoptype: "Regular" },
    { name: "Mareil-sur-Mauldre", coords: [48.893289, 1.871715], stoptype: "Regular" },
    { name: "Maule", coords: [48.909287, 1.85729], stoptype: "Regular" },
    { name: "Nézel-Aulnay", coords: [48.939601, 1.840059], stoptype: "Regular" },
    { name: "Versailles Chantiers", coords: [48.795048, 2.134457], stoptype: "Main" },
    { name: "Saint-Quentin-en-Yvelines - Montigny-le-Bretonneux", coords: [48.787375, 2.044387], stoptype: "Main" },
    { name: "Houdan", coords: [48.796051, 1.602359], stoptype: "Main" },
    { name: "Epône Mézières", coords: [48.963378, 1.808806], stoptype: "Main" },
    { name: "Paris Montparnasse", coords: [48.840615, 2.319544], stoptype: "Terminus" },
    { name: "Rambouillet", coords: [48.644165, 1.83267], stoptype: "Terminus" },
    { name: "Dreux", coords: [48.731147, 1.37038], stoptype: "Terminus" },
    { name: "Plaisir-Grignon", coords: [48.83197, 1.943467], stoptype: "Terminus" },
    { name: "Mantes-la-Jolie", coords: [48.98908, 1.703497], stoptype: "Terminus" }
  ];
  
  const Pstops = [
    { name: "Vaires-Torcy", coords: [48.87523, 2.638666], stoptype: "Regular" },
    { name: "Lagny Thorigny", coords: [48.882208, 2.706279], stoptype: "Regular" },
    { name: "Trilport", coords: [48.960227, 2.949859], stoptype: "Regular" },
    { name: "Changis Saint-Jean", coords: [48.959174, 3.02666], stoptype: "Regular" },
    { name: "Nanteuil Saâcy", coords: [48.973957, 3.220058], stoptype: "Regular" },
    { name: "Nogent l'Artaud Charty", coords: [48.968747, 3.322758], stoptype: "Regular" },
    { name: "Chézy-sur-Marne", coords: [48.991826, 3.364316], stoptype: "Regular" },
    { name: "Isles Armentières Congis", coords: [48.998569, 3.008303], stoptype: "Regular" },
    { name: "Crouy-sur-Ourcq", coords: [49.091792, 3.062781], stoptype: "Regular" },
    { name: "Mareuil-sur-Ourcq", coords: [49.135533, 3.075648], stoptype: "Regular" },
    { name: "Marles-en-Brie", coords: [48.734586, 2.868428], stoptype: "Regular" },
    { name: "Mortcerf", coords: [48.789902, 2.907268], stoptype: "Regular" },
    { name: "Guérard La Celle-sur-Morin", coords: [48.810771, 2.95389], stoptype: "Regular" },
    { name: "Faremoutiers Pommeuse", coords: [48.808614, 2.993109], stoptype: "Regular" },
    { name: "Mouroux", coords: [48.813804, 3.043019], stoptype: "Regular" },
    { name: "Mormant", coords: [48.614165, 2.887929], stoptype: "Regular" },
    { name: "Nangis", coords: [48.562128, 3.011746], stoptype: "Regular" },
    { name: "Sainte-Colombe Septveilles", coords: [48.528973, 3.255081], stoptype: "Regular" },
    { name: "Champbenoist Poigny", coords: [48.545363, 3.286921], stoptype: "Regular" },
    { name: "Chelles-Gournay", coords: [48.874163, 2.583179], stoptype: "Main" },
    { name: "Esbly", coords: [48.903171, 2.81066], stoptype: "Main" },
    { name: "Lizy-sur-Ourcq", coords: [49.021778, 3.031808], stoptype: "Main" },
    { name: "La Ferté-sous-Jouarre", coords: [48.950814, 3.124886], stoptype: "Main" },
    { name: "Tournan", coords: [48.739513, 2.758711], stoptype: "Main" },
    { name: "Verneuil l'Etang", coords: [48.644433, 2.825055], stoptype: "Main" },
    { name: "Longueville", coords: [48.513689, 3.250346], stoptype: "Main" },
    { name: "Paris Est", coords: [48.877433, 2.359783], stoptype: "Terminus" },
    { name: "Meaux", coords: [48.957169, 2.873455], stoptype: "Terminus" },
    { name: "Château-Thierry", coords: [49.037909, 3.40935], stoptype: "Terminus" },
    { name: "La Ferté-Milon", coords: [49.179651, 3.120887], stoptype: "Terminus" },
    { name: "Coulommiers", coords: [48.807742, 3.082032], stoptype: "Terminus" },
    { name: "Provins", coords: [48.55557, 3.302724], stoptype: "Terminus" }
  ];
  
  const BPstops = [
    { name: "Champgoulin", coords: [48.791843, 3.255955], stoptype: "Regular" },
    { name: "Avenue des États-Unis (La Ferté-Gaucher)", coords: [48.780873, 3.299267], stoptype: "Regular" },
    { name: "Moulin de Boissy (Chailly - Boissy-le-Châtel)", coords: [48.815934, 3.150764], stoptype: "Main" },
    { name: "Pot d'Étain D66 (Chauffry)", coords: [48.811289, 3.180885], stoptype: "Main" },
    { name: "Saint-Siméon", coords: [48.799458, 3.209789], stoptype: "Main" },
    { name: "Moulin du Pont - D66 (Saint-Rémy-la-Vanne)", coords: [48.805171, 3.235232], stoptype: "Main" },
    { name: "Eustache Lenoir", coords: [48.798067, 3.267403], stoptype: "Main" },
    { name: "Monuments aux Morts (Jouy-sur-Morin - Le Marais)", coords: [48.791224, 3.272201], stoptype: "Main" },
    { name: "La Ferté-Gaucher - Centre", coords: [48.782167, 3.306002], stoptype: "Terminus" },
    { name: "Coulommiers", coords: [48.807773, 3.082218], stoptype: "Terminus" }
  ];
  
  const Rstops = [
    { name: "Bois-le-Roi", coords: [48.47558, 2.69191], stoptype: "Regular" },
    { name: "Thomery", coords: [48.394279, 2.763984], stoptype: "Regular" },
    { name: "Moret Veneux-les-Sablons", coords: [48.378396, 2.799282], stoptype: "Regular" },
    { name: "Saint-Mammès", coords: [48.382272, 2.815783], stoptype: "Regular" },
    { name: "Montigny-sur-Loing", coords: [48.336477, 2.738546], stoptype: "Regular" },
    { name: "Bourron-Marlotte-Grez", coords: [48.33268, 2.692463], stoptype: "Regular" },
    { name: "Bagneaux-sur-Loing", coords: [48.230386, 2.703495], stoptype: "Regular" },
    { name: "Dordives", coords: [48.147261, 2.762729], stoptype: "Regular" },
    { name: "Ferrières-Fontenay", coords: [48.096512, 2.772304], stoptype: "Regular" },
    { name: "Livry-sur-Seine", coords: [48.510343, 2.678942], stoptype: "Regular" },
    { name: "Chartrettes", coords: [48.48706, 2.695057], stoptype: "Regular" },
    { name: "Fontaine-le-Port", coords: [48.487177, 2.751198], stoptype: "Regular" },
    { name: "Héricy", coords: [48.442734, 2.760771], stoptype: "Regular" },
    { name: "Vulaines-sur-Seine - Samoreau", coords: [48.430664, 2.753057], stoptype: "Regular" },
    { name: "Vernou-sur-Seine", coords: [48.38643, 2.842557], stoptype: "Regular" },
    { name: "La Grande-Paroisse", coords: [48.378782, 2.897145], stoptype: "Regular" },
    { name: "Fontainebleau-Avon", coords: [48.416319, 2.726629], stoptype: "Main" },
    { name: "Nemours Saint-Pierre", coords: [48.267841, 2.685564], stoptype: "Main" },
    { name: "Souppes Château-Landon", coords: [48.181758, 2.73496], stoptype: "Main" },
    { name: "Champagne-sur-Seine", coords: [48.406676, 2.799304], stoptype: "Main" },
    { name: "Paris Gare de Lyon", coords: [48.844432, 2.373658], stoptype: "Terminus" },
    { name: "Melun", coords: [48.527519, 2.655025], stoptype: "Terminus" },
    { name: "Montargis", coords: [48.006671, 2.743219], stoptype: "Terminus" },
    { name: "Montereau", coords: [48.379454, 2.942542], stoptype: "Terminus" }
  ];
  
  const Ustops = [
    
    { name: "Puteaux", coords: [48.88342, 2.233717], stoptype: "Main" },
    { name: "Suresnes Mont-Valérien", coords: [48.871619, 2.221057], stoptype: "Main" },
    { name: "Saint-Cloud", coords: [48.846133, 2.217618], stoptype: "Main" },
    { name: "Sèvres Ville d'Avray", coords: [48.827409, 2.200761], stoptype: "Main" },
    { name: "Chaville Rive Droite", coords: [48.812786, 2.188438], stoptype: "Main" },
    { name: "Versailles chantiers", coords: [48.795318, 2.135451], stoptype: "Main" },
    { name: "Saint-Cyr", coords: [48.798776, 2.0728], stoptype: "Main" },
    { name: "Saint-Quentin-en-Yvelines Montigny le Bretonneux", coords: [48.787667, 2.044777], stoptype: "Main" },
    { name: "Trappes", coords: [48.774836, 2.00666], stoptype: "Main" },
    { name: "La Défense", coords: [48.891986, 2.236775], stoptype: "Terminus" },
    { name: "La Verrière", coords: [48.755367, 1.943464], stoptype: "Terminus" }
];
  
const Vstops = [
    { name: "Igny", coords: [48.740542, 2.230887], stoptype: "Main" },
    { name: "Bièvres", coords: [48.750923, 2.216089], stoptype: "Main" },
    { name: "Vauboyen", coords: [48.758811, 2.193092], stoptype: "Main" },
    { name: "Jouy-en-Josas", coords: [48.764768, 2.164205], stoptype: "Main" },
    { name: "Petit Jouy Les Loges", coords: [48.771744, 2.147006], stoptype: "Main" },
    { name: "Massy-Palaiseau", coords: [48.725638, 2.257886], stoptype: "Terminus" },
    { name: "Versailles chantiers", coords: [48.794933, 2.135113], stoptype: "Terminus" }
];

const T14stops = [
  { name: "Montry Condé", coords: [48.890961, 2.825962], stoptype: "Main" },
  { name: "Couilles Saint-Germain Quincy", coords: [48.882691, 2.854238], stoptype: "Main" },
  { name: "Villiers Montbarbin", coords: [48.863404, 2.882811], stoptype: "Main" },
  { name: "Esbly", coords: [48.902791, 2.809332], stoptype: "Terminus" },
  { name: "Crécy-la-Chapelle", coords: [48.85955, 2.905326], stoptype: "Terminus" }
];