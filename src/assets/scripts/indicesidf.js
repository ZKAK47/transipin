const IDFRougeCoquelicot = '#E3051C';
const IDFOrange = '#F28E42';
const IDFJauneVif = '#FFCE00';
const IDFJauneOcre = '#E3B32A';
const IDFMarron = '#8D5E2A';
const IDFOliveClair = '#D5C900';
const IDFOliveFonce = '#9F9825';
const IDFVertFonce = '#00814F';
const IDFVertClair = '#83C491';
const IDFTurquoise = '#00A88F';
const IDFBleuClair = '#98D4E2';
const IDFBleuOutremer = '#5291CE';
const IDFBleuFonce = '#0064B0';
const IDFViolet = '#662483';
const IDFBleuNuit = '#14489F';
const IDFMagenta = '#C04191';
const IDFLilas = '#CEADD2';
const IDFRose = '#F3A4BA';
const IDFRougeFramboise = '#B90845';
const IDFNoir = '#25303B';
const IDFBlanc = '#FFFFFF';

const pictobus = {
    '2122':     { 'bg-col': IDFMarron, 'text-col': IDFBlanc },
    'P':       {'bg-col': IDFJauneVif, 'text-col': IDFNoir},
    '17Ex':    {'bg-col': IDFBleuOutremer, 'text-col': IDFBlanc},
    '34':    {'bg-col': IDFBleuOutremer, 'text-col': IDFBlanc},
    '4250':    { 'bg-col': IDFBleuNuit, 'text-col': 'white' },
    '4251':      { 'bg-col': IDFBleuNuit, 'text-col': 'white' },
    '4203':      { 'bg-col': IDFBleuFonce, 'text-col': 'white' },
    '4243':      { 'bg-col': IDFVertFonce, 'text-col': 'white' },
    'Orlybus': { 'bg-col': '#008d36', 'text-col': 'white' }
    // ➕ ajoute d'autres lignes ici...
};

// Replace text nodes in the document
function replaceIndice(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        let replaced = false;

        text = text.replace(/\bBus ([A-Za-z0-9]{1,5})\b/g, (match, code) => {
            replaced = true;
            const style = pictobus[code];
        
            if (style) {
                return `<span class="mode-picto"><img src="/assets/images/pictos/Bus.svg" class="Logotext"> <span class="indice-bus" style="background-color: ${style['bg-col']}; color: ${style['text-col']};"><p>${code}</p></span></span>`;
            } else {
                return `<span class="mode-picto"><img src="/assets/images/pictos/Bus.svg" class="Logotext"> <span class="indice-bus">${code}</span></span>`;
            }
        });

        text = text.replace(/\bN(\d{1,3})\b/g, (_, line) => {
            replaced = true;
            return `<img src="/assets/images/pictos/N${line}.svg" class="Logotext">`
        });

        text = text.replace(/\bfiléo\b/g, (_) => {
            replaced = true;
            return `<img src="/assets/images/pictos/filéo.svg" class="Logotext">`
        });

        // RER/Transilien
        text = text.replace(/\b(RER|Ligne) ([A-Z])\b/g, (match, mode, line) => {
            replaced = true;

            const Tlogo = (mode === "Ligne") ? "Train" : mode;

            const validLines = ['A', 'B', 'C', 'D', 'E', 'H', 'J', 'K', 'L', 'N', 'P', 'R', 'U', 'V'];

            if (validLines.includes(line)) {

            return `<span class="mode-picto"><img src="/assets/images/pictos/${Tlogo}.svg" class="Logotext" alt="${mode}">` + ' ' + `<img src="/assets/images/pictos/${line}.svg" class="Logotext"  alt="${line}"></span>`;}

            else {
                return `<span class="mode-picto"><img src="/assets/images/pictos/${Tlogo}.svg" class="Logotext" alt="${mode}">` + ' ' + `<span class="train-ico"><p>${line}</p></span></span>`;}
            });

        // Tram TXX
        text = text.replace(/\bTram T(\d{1,2})\b/g, (_, line) => {
            replaced = true;
            return `<span class="mode-picto"><img src="/assets/images/pictos/Tram.svg" class="Logotext">` + ' ' + `<img src="/assets/images/pictos/T${line}.svg" class="Logotext"></span>`
        });

        // TER
        text = text.replace(/\bTER ((K\d{1,2})|)\b/g, (match, mode, line) => {
            replaced = true;

            if (line) {
                return `
            <span style="white-space: nowrap">
                <img src="/assets/images/pictos/TER.svg" class="Logotext">
                <span class="restrain-ico" style="background-color: ${IDFVertFonce}; color: white;">
                    ${line}
                </span>
            </span>
        `;
            }

            else {
            return `<img src="/assets/images/pictos/TER.svg" class="Logotext">`
        }
        });

        text = text.replace(/\bRémi\b/g, (match) => {
            replaced = true;
                return `<img src="/assets/images/pictos/${match}.svg" class="Logotext">`
        });

        if (replaced) {
            const span = document.createElement('span');
            span.innerHTML = text;
            node.replaceWith(span);
        }

    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== "SCRIPT" && node.tagName !== "STYLE") {
        for (const child of Array.from(node.childNodes)) {
            replaceIndice(child);
        }
    }
}