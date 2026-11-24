/* Banca Dati Ufficiale — Simulatore Esame Antincendio 3-FOR (150 Domande) */
window.SHEETS_META = [
  {
    "id": 1,
    "title": "Scheda 1 — Fondamenti della Combustione",
    "subtitle": "Triangolo del fuoco, classi d'incendio, parametri fisici e dinamica",
    "tag": "Modulo 1"
  },
  {
    "id": 2,
    "title": "Scheda 2 — Gas Tossici, Estinguenti e Rischi",
    "subtitle": "Effetti sull'uomo, acqua/schiuma/polveri/CO₂, R=F×M e profilo Rvita",
    "tag": "Modulo 1"
  },
  {
    "id": 3,
    "title": "Scheda 3 — Prevenzione, Segnaletica e Controlli",
    "subtitle": "Normativa, comportamenti preventivi, D.M. 1/9/2021, sorveglianza vs manutenzione",
    "tag": "Modulo 1"
  },
  {
    "id": 4,
    "title": "Scheda 4 — Aree a Rischio Specifico e ATEX",
    "subtitle": "Deflagrazione/detonazione, LEL-UEL, zone 0-1-2 / 20-21-22, misure ATEX",
    "tag": "Modulo 2"
  },
  {
    "id": 5,
    "title": "Scheda 5 — Reazione, Resistenza e Compartimentazione",
    "subtitle": "Classi europee/italiane, R-E-I-Sa, carico qf,d, filtri e spazio scoperto",
    "tag": "Modulo 2"
  },
  {
    "id": 6,
    "title": "Scheda 6 — Sistema d'Esodo, IRAI e Controllo Fumi",
    "subtitle": "Modalità d'esodo, lunghezze/larghezze, rivelatori, pulsanti, SVOF e SEFC",
    "tag": "Modulo 2"
  },
  {
    "id": 7,
    "title": "Scheda 7 — Estintori, Reti Idranti e Impianti Automatici",
    "subtitle": "Scelta estintori, UNI 10779, Sprinkler, Diluvio, Water Mist, Gas e ORS",
    "tag": "Modulo 3"
  },
  {
    "id": 8,
    "title": "Scheda 8 — Operatività VVF, GSA e Piano di Emergenza",
    "subtitle": "Accesso mezzi, ascensori antincendio/soccorso, chiamate VVF, esigenze speciali",
    "tag": "Modulo 3"
  },
  {
    "id": 9,
    "title": "Scheda 9 — Pratica: Estintori, Idranti, Motopompa e APVR",
    "subtitle": "Manovre operative, soprasuolo/sottosuolo, attacco UNI 70, maschere e autorespiratori",
    "tag": "Modulo 4"
  },
  {
    "id": 10,
    "title": "Scheda 10 — Simulazione Mista & Trabocchetti d'Esame",
    "subtitle": "I 15 quesiti più insidiosi e frequenti nelle prove ufficiali CNVVF",
    "tag": "Mista 1-4"
  }
];

window.QUESTION_BANK = [
  {
    "id": 1,
    "sheet": 1,
    "module": 1,
    "question": "Quali sono i tre elementi del cosiddetto 'triangolo del fuoco'?",
    "options": [
      "Combustibile, fumo e ossigeno",
      "Combustibile, comburente ed energia di attivazione",
      "Calore, fiamma e anidride carbonica"
    ],
    "answer": 1,
    "explanation": "Per innescare e mantenere la combustione servono contemporaneamente combustibile, comburente (di solito ossigeno) ed energia di attivazione."
  },
  {
    "id": 2,
    "sheet": 1,
    "module": 1,
    "question": "Qual è la differenza fondamentale tra combustione e incendio?",
    "options": [
      "La combustione è una reazione controllata nello spazio e nel tempo; l'incendio è incontrollato",
      "Non esiste alcuna differenza tecnica tra i due termini",
      "La combustione avviene solo nei gas, l'incendio nei solidi"
    ],
    "answer": 0,
    "explanation": "La combustione è controllata (es. fornello domestico), mentre l'incendio è una reazione incontrollata che si propaga con pericolo per persone e beni."
  },
  {
    "id": 3,
    "sheet": 1,
    "module": 1,
    "question": "Come si definisce il sistema di spegnimento che consiste nel sottrarre calore al combustibile?",
    "options": [
      "Esaurimento del combustibile",
      "Soffocamento",
      "Raffreddamento"
    ],
    "answer": 2,
    "explanation": "Il raffreddamento abbassa la temperatura del combustibile al di sotto del valore necessario al mantenimento della combustione."
  },
  {
    "id": 4,
    "sheet": 1,
    "module": 1,
    "question": "In cosa consiste l'estinzione per inibizione chimica (anticatalisi)?",
    "options": [
      "Nel diluire il combustibile con grandi volumi di acqua",
      "Nell'allontanare fisicamente il combustibile dal focolaio",
      "Nel bloccare chimicamente la reazione di ossidazione tramite agenti inibitori"
    ],
    "answer": 2,
    "explanation": "L'inibizione chimica (o anticatalisi) impiega agenti chimici che interrompono la reazione a catena della combustione."
  },
  {
    "id": 5,
    "sheet": 1,
    "module": 1,
    "question": "A quale classe di fuoco appartengono gli incendi di materiali solidi (es. legno, carta, tessuti)?",
    "options": [
      "Classe A",
      "Classe C",
      "Classe B"
    ],
    "answer": 0,
    "explanation": "Classe A: solidi; Classe B: liquidi infiammabili; Classe C: gas infiammabili; Classe D: metalli; Classe F: oli e grassi di cottura."
  },
  {
    "id": 6,
    "sheet": 1,
    "module": 1,
    "question": "A quale classe di fuoco appartengono gli incendi di oli e grassi vegetali o animali in apparecchi di cottura?",
    "options": [
      "Classe F",
      "Classe B",
      "Classe D"
    ],
    "answer": 0,
    "explanation": "La classe F riguarda specificamente i mezzi di cottura con oli e grassi vegetali e animali."
  },
  {
    "id": 7,
    "sheet": 1,
    "module": 1,
    "question": "Perché la vecchia 'classe E' (apparecchiature elettriche in tensione) non è più prevista nella classificazione attuale?",
    "options": [
      "Perché le apparecchiature elettriche moderne non bruciano",
      "Perché i materiali coinvolti sono assimilabili alle classi A e B, pur aggiungendo il rischio di elettrocuzione",
      "Perché è stata inglobata nella classe D dei metalli"
    ],
    "answer": 1,
    "explanation": "I materiali bruciano come classe A o B, ma l'addetto deve comunque considerare il rischio aggiuntivo di elettrocuzione."
  },
  {
    "id": 8,
    "sheet": 1,
    "module": 1,
    "question": "Quale fenomeno avviene in un combustibile solido riscaldato che libera molecole pronte a combinarsi con l'ossigeno?",
    "options": [
      "Pirolisi (decomposizione termochimica)",
      "Sublimazione inversa",
      "Condensazione superficiale"
    ],
    "answer": 0,
    "explanation": "Nei solidi il calore induce la pirolisi, che rompe i legami chimici liberando sostanze volatili combustibili."
  },
  {
    "id": 9,
    "sheet": 1,
    "module": 1,
    "question": "Cosa rappresenta la temperatura di infiammabilità (Ti) di un liquido?",
    "options": [
      "La temperatura minima alla quale il liquido emette vapori sufficienti a bruciare in presenza di innesco",
      "La temperatura alla quale il liquido bolle",
      "La temperatura minima alla quale il liquido si accende da solo senza innesco"
    ],
    "answer": 0,
    "explanation": "A temperatura di infiammabilità si forma la miscela vapore-aria infiammabile (2 lati del triangolo), ma serve sempre un innesco."
  },
  {
    "id": 10,
    "sheet": 1,
    "module": 1,
    "question": "Quale temperatura identifica la soglia minima a cui una sostanza solida, liquida o gassosa brucia spontaneamente senza innesco?",
    "options": [
      "Temperatura di accensione (o autoaccensione, Ta)",
      "Temperatura di infiammabilità (Ti)",
      "Temperatura di congelamento"
    ],
    "answer": 0,
    "explanation": "La temperatura di autoaccensione (Ta) è definita per tutti gli stati fisici e non richiede alcuna sorgente d'innesco esterna."
  },
  {
    "id": 11,
    "sheet": 1,
    "module": 1,
    "question": "In base alla temperatura di infiammabilità, a quale categoria appartengono liquidi come benzina (-20 °C) e acetone (-18 °C)?",
    "options": [
      "Categoria C (65–125 °C)",
      "Categoria B (21–65 °C)",
      "Categoria A (< 21 °C)"
    ],
    "answer": 2,
    "explanation": "Categoria A: Ti < 21 °C; Categoria B: 21–65 °C; Categoria C: 65–125 °C."
  },
  {
    "id": 12,
    "sheet": 1,
    "module": 1,
    "question": "Un gas con densità rispetto all'aria inferiore a 0,8 (es. metano, idrogeno) dove tende a stratificare se liberato?",
    "options": [
      "Resta fermo esclusivamente a metà altezza",
      "In basso, penetrando in cunicoli e pozzetti",
      "Verso l'alto"
    ],
    "answer": 2,
    "explanation": "I gas leggeri (densità < 0,8) stratificano verso l'alto; quelli pesanti (> 0,8 come il GPL) ristagnano in basso."
  },
  {
    "id": 13,
    "sheet": 1,
    "module": 1,
    "question": "Qual è il meccanismo di trasmissione del calore che avviene anche nel vuoto attraverso onde elettromagnetiche?",
    "options": [
      "Irraggiamento (radiazione termica)",
      "Conduzione",
      "Convezione"
    ],
    "answer": 0,
    "explanation": "L'irraggiamento si propaga per onde elettromagnetiche anche nel vuoto ed è il principale meccanismo di propagazione negli incendi confinati."
  },
  {
    "id": 14,
    "sheet": 1,
    "module": 1,
    "question": "Quali sono le 4 fasi caratteristiche dell'evoluzione di un incendio in ambiente confinato?",
    "options": [
      "Ignizione, propagazione, incendio generalizzato (flash-over), estinzione e raffreddamento",
      "Innesco, esplosione, fumo, bonifica",
      "Evaporazione, pirolisi, detonazione, spegnimento"
    ],
    "answer": 0,
    "explanation": "La curva temperatura-tempo in ambiente chiuso distingue: ignizione, propagazione, incendio generalizzato (flash-over), estinzione e raffreddamento."
  },
  {
    "id": 15,
    "sheet": 1,
    "module": 1,
    "question": "Intorno a quali valori di temperatura e flusso termico radiante a pavimento si raggiunge la fase di flash-over?",
    "options": [
      "1200–1500 °C e 60 kW/m²",
      "500–600 °C e 15–20 kW/m²",
      "150–200 °C e 3 kW/m²"
    ],
    "answer": 1,
    "explanation": "Il flash-over si innesca intorno a 500–600 °C e 15–20 kW/m², causando l'autoaccensione istantanea di tutti i combustibili del locale."
  },
  {
    "id": 16,
    "sheet": 2,
    "module": 1,
    "question": "Cos'è il fenomeno del 'backdraft' (ritorno di fiamma)?",
    "options": [
      "La propagazione verticale delle fiamme su una facciata ventilata",
      "Lo spegnimento naturale di un incendio all'aperto",
      "La riaccensione violenta causata dall'ingresso improvviso di aria in un locale caldo, chiuso e povero di ossigeno"
    ],
    "answer": 2,
    "explanation": "In un locale chiuso dove la combustione è rallentata per carenza di O₂, l'apertura di porte o finestre introduce comburente innescando il backdraft."
  },
  {
    "id": 17,
    "sheet": 2,
    "module": 1,
    "question": "Qual è la caratteristica che rende il monossido di carbonio (CO) particolarmente insidioso negli incendi?",
    "options": [
      "Ha un forte odore pungente di mandorle amare",
      "È visibile come denso fumo bianco al di sotto dei 100 °C",
      "È incolore, inodore, non irritante e ha un'affinità con l'emoglobina circa 220 volte superiore all'ossigeno"
    ],
    "answer": 2,
    "explanation": "Il CO forma carbossiemoglobina bloccando il trasporto di ossigeno nel sangue ed è la prima causa di morte negli incendi."
  },
  {
    "id": 18,
    "sheet": 2,
    "module": 1,
    "question": "L'anidride carbonica (CO₂) prodotta in un incendio provoca asfissia quando riduce l'ossigeno nell'aria al di sotto di quale soglia?",
    "options": [
      "Sotto il 21% in volume",
      "Sotto il 17% in volume",
      "Solo sotto il 5% in volume"
    ],
    "answer": 1,
    "explanation": "La CO₂ non è tossica in sé ma sostituisce l'ossigeno causando asfissia sotto il 17%, oltre ad accelerare il ritmo respiratorio."
  },
  {
    "id": 19,
    "sheet": 2,
    "module": 1,
    "question": "Qual è la temperatura massima dell'aria umida generalmente ritenuta respirabile dall'uomo per breve tempo durante un incendio?",
    "options": [
      "Circa 150 °C",
      "Circa 60 °C",
      "Circa 110 °C"
    ],
    "answer": 1,
    "explanation": "In aria secca la pelle sopporta brevemente ~150 °C, ma negli incendi l'aria è umida (vapore acqueo) e la massima temperatura respirabile è ~60 °C."
  },
  {
    "id": 20,
    "sheet": 2,
    "module": 1,
    "question": "Quale gas tossico con odore caratteristico di mandorle amare si può sviluppare dalla combustione incompleta di lana, seta o resine?",
    "options": [
      "Anidride solforosa",
      "Acido cianidrico (HCN)",
      "Fosgene"
    ],
    "answer": 1,
    "explanation": "L'acido cianidrico ha odore di mandorle amare e interrompe la respirazione cellulare."
  },
  {
    "id": 21,
    "sheet": 2,
    "module": 1,
    "question": "Da quali materiali si può sprigionare il fosgene, che a contatto con l'umidità si scinde formando acido cloridrico caustico?",
    "options": [
      "Da materie plastiche contenenti cloro",
      "Esclusivamente da legname non trattato",
      "Da carta e cartone riciclati"
    ],
    "answer": 0,
    "explanation": "La combustione di materiali plastici contenenti cloro può liberare fosgene (COCl₂)."
  },
  {
    "id": 22,
    "sheet": 2,
    "module": 1,
    "question": "Perché l'acqua è così efficace nel raffreddare un incendio quando raggiunge i 100 °C ed evapora?",
    "options": [
      "Perché assorbe circa 2260 kJ/kg per evaporare (6 volte il calore per scaldarla) e aumenta di volume 1670 volte",
      "Perché reagisce chimicamente producendo schiuma",
      "Perché ha il calore specifico più basso tra tutte le sostanze"
    ],
    "answer": 0,
    "explanation": "L'evaporazione assorbe un'enorme quantità di calore e il vapore formato (volume ×1670) svolge anche azione soffocante."
  },
  {
    "id": 23,
    "sheet": 2,
    "module": 1,
    "question": "Quando è consentito usare un estintore ad acqua su apparecchiature elettriche in tensione?",
    "options": [
      "Mai in nessun caso, nemmeno se certificato dielettrico",
      "Sempre, con getto pieno",
      "Solo se è ad acqua frazionata/nebulizzata che ha superato la prova dielettrica (fino a 1000 V alla distanza di 1 m)"
    ],
    "answer": 2,
    "explanation": "L'acqua a getto pieno è vietata su impianti in tensione; esistono però estintori idrici nebulizzati certificati fino a 1000 V a 1 m."
  },
  {
    "id": 24,
    "sheet": 2,
    "module": 1,
    "question": "Perché l'acqua è incompatibile con incendi di metalli alcalini come sodio e potassio?",
    "options": [
      "Perché congela istantaneamente sul metallo",
      "Perché reagisce liberando idrogeno, gas estremamente infiammabile",
      "Perché non bagna le superfici metalliche"
    ],
    "answer": 1,
    "explanation": "Sodio e potassio a contatto con l'acqua liberano idrogeno, aggravando violentemente l'incendio."
  },
  {
    "id": 25,
    "sheet": 2,
    "module": 1,
    "question": "Come si classificano le schiume antincendio in base al rapporto di espansione?",
    "options": [
      "Bassa (< 1:5), Media (1:5–1:10), Alta (> 1:10)",
      "Leggera (< 0,8), Media (0,8–1), Pesante (> 1)",
      "Bassa (< 1:20), Media (1:20–1:200), Alta (> 1:200)"
    ],
    "answer": 2,
    "explanation": "Le schiume (90–95% acqua + 5–10% schiumogeno + aria) si distinguono in bassa (<1:20), media (1:20–1:200) e alta (>1:200) espansione."
  },
  {
    "id": 26,
    "sheet": 2,
    "module": 1,
    "question": "Quali sono i principali limiti delle polveri antincendio?",
    "options": [
      "Non spengono efficacemente le braci, possono danneggiare apparecchiature e sono irritanti/riducono la visibilità",
      "Possono spegnere solo incendi di classe D",
      "Non sono dielettriche e conducono corrente"
    ],
    "answer": 0,
    "explanation": "Le polveri agiscono per anticatalisi e sono dielettriche, ma risultano inefficaci sulle braci profonde, sporcano/danneggiano e riducono la visibilità."
  },
  {
    "id": 27,
    "sheet": 2,
    "module": 1,
    "question": "A quale temperatura e in che forma esce l'anidride carbonica (CO₂) dal cono diffusore di un estintore?",
    "options": [
      "A circa 0 °C allo stato liquido",
      "A circa +20 °C come schiuma densa",
      "A circa -78 °C sotto forma di 'neve carbonica' o ghiaccio secco"
    ],
    "answer": 2,
    "explanation": "Conservata liquida a 55–60 bar (a 20 °C), espandendosi dal diffusore scende a circa -78 °C unendo soffocamento e raffreddamento."
  },
  {
    "id": 28,
    "sheet": 2,
    "module": 1,
    "question": "Nella formula analitica del rischio (R = Frequenza × Magnitudo), su quale fattore agiscono le misure di prevenzione?",
    "options": [
      "Azzerano completamente sia frequenza che magnitudo",
      "Riducono la frequenza (probabilità di accadimento dell'incendio)",
      "Riducono esclusivamente la magnitudo (entità del danno)"
    ],
    "answer": 1,
    "explanation": "La prevenzione (prioritaria) riduce la frequenza; la protezione (attiva e passiva) attenua la magnitudo."
  },
  {
    "id": 29,
    "sheet": 2,
    "module": 1,
    "question": "Nel profilo di rischio vita (Rvita), cosa indica la lettera 'B' del parametro degli occupanti (δocc)?",
    "options": [
      "Occupanti in stato di veglia con familiarità con l'edificio",
      "Occupanti addormentati in albergo o dormitorio",
      "Occupanti in stato di veglia che NON hanno familiarità con l'edificio"
    ],
    "answer": 2,
    "explanation": "A = svegli con familiarità; B = svegli senza familiarità (es. negozi, teatri, ristoranti); C = addormentati; D = cure mediche; E = in transito."
  },
  {
    "id": 30,
    "sheet": 2,
    "module": 1,
    "question": "Nel profilo Rvita, quali valori numerici assume il parametro δα (velocità caratteristica di crescita dell'incendio)?",
    "options": [
      "Da A1 a F",
      "Da 1 (lenta) a 4 (ultrarapida)",
      "Da 0 a 5"
    ],
    "answer": 1,
    "explanation": "δα va da 1 (lenta), 2 (media), 3 (rapida) a 4 (ultrarapida), riferito al tempo tα per raggiungere 1000 kW."
  },
  {
    "id": 31,
    "sheet": 3,
    "module": 1,
    "question": "Quale decreto ministeriale è comunemente denominato 'Codice di prevenzione incendi'?",
    "options": [
      "D.Lgs. 81/2008",
      "D.M. 1 settembre 2021",
      "D.M. 3 agosto 2015"
    ],
    "answer": 2,
    "explanation": "Il D.M. 3 agosto 2015 approva le norme tecniche di prevenzione incendi note come Codice di prevenzione incendi."
  },
  {
    "id": 32,
    "sheet": 3,
    "module": 1,
    "question": "Quale decreto disciplina i criteri generali per il controllo e la manutenzione dei presidi antincendio e qualifica i tecnici manutentori?",
    "options": [
      "D.M. 1 settembre 2021",
      "D.M. 2 settembre 2021",
      "D.M. 3 settembre 2021"
    ],
    "answer": 0,
    "explanation": "D.M. 1/9/2021 = Controlli e manutenzione; D.M. 2/9/2021 = Gestione emergenze e formazione; D.M. 3/9/2021 = Progettazione luoghi di lavoro."
  },
  {
    "id": 33,
    "sheet": 3,
    "module": 1,
    "question": "Quale tra le seguenti misure rientra nella protezione PASSIVA?",
    "options": [
      "Compartimentazione antincendio e materiali classificati per reazione al fuoco",
      "Impianto automatico sprinkler",
      "Estintori portatili e rete di idranti"
    ],
    "answer": 0,
    "explanation": "La protezione passiva non richiede intervento umano né attivazione di impianti (compartimentazione, reazione/resistenza al fuoco, sistemi d'esodo)."
  },
  {
    "id": 34,
    "sheet": 3,
    "module": 1,
    "question": "Quale tra le seguenti misure rientra nella protezione ATTIVA?",
    "options": [
      "Sistemi di esodo e porte tagliafuoco fisse",
      "Impianti di rivelazione e allarme incendio (IRAI) ed evacuatori di fumo e calore",
      "Distanze di sicurezza tra edifici"
    ],
    "answer": 1,
    "explanation": "La protezione attiva richiede l'intervento umano o l'attivazione di un impianto (estintori, idranti, IRAI, sprinkler, EFC)."
  },
  {
    "id": 35,
    "sheet": 3,
    "module": 1,
    "question": "Perché i lavori di manutenzione ordinaria e straordinaria aumentano sensibilmente il rischio di incendio?",
    "options": [
      "Perché aumentano automaticamente il profilo δocc degli occupanti",
      "Solo quando si eseguono di notte",
      "Perché possono comportare lavori a caldo, disattivazione temporanea di impianti, interruzione di compartimentazioni o uso di solventi"
    ],
    "answer": 2,
    "explanation": "Durante le manutenzioni compaiono sorgenti di rischio aggiuntive non presenti nell'esercizio ordinario."
  },
  {
    "id": 36,
    "sheet": 3,
    "module": 1,
    "question": "Quale comportamento è corretto riguardo ai rifiuti e agli scarti di lavorazione combustibili?",
    "options": [
      "Possono essere accumulati lungo i corridoi di esodo fino a fine settimana",
      "Vanno svuotati insieme al contenuto dei portacenere",
      "Vanno rimossi giornalmente e depositati in un'area idonea fuori dall'edificio, mai lungo le vie di esodo"
    ],
    "answer": 2,
    "explanation": "I rifiuti non vanno depositati neppure temporaneamente sulle vie d'esodo e vanno rimossi quotidianamente."
  },
  {
    "id": 37,
    "sheet": 3,
    "module": 1,
    "question": "Cosa prevede la prevenzione comportamentale per i materiali infiammabili sul luogo di lavoro?",
    "options": [
      "Usarli solo vicino a fonti di riscaldamento per evitare condensa",
      "Limitare il quantitativo a quello strettamente necessario alla normale conduzione, lontano dalle vie di esodo",
      "Conservarne sempre una scorta mensile accanto alle postazioni"
    ],
    "answer": 1,
    "explanation": "I quantitativi in eccedenza devono essere stoccati in appositi locali o aree dedicate, e ove possibile sostituiti con prodotti meno pericolosi."
  },
  {
    "id": 38,
    "sheet": 3,
    "module": 1,
    "question": "Cosa bisogna evitare nella gestione degli impianti e delle attrezzature elettriche?",
    "options": [
      "Installare impianti conformi alla regola dell'arte",
      "Spegnere le apparecchiature elettriche quando inutilizzate",
      "Sovraccaricare prese multiple, lasciare cavi danneggiati e far eseguire riparazioni a personale non qualificato"
    ],
    "answer": 2,
    "explanation": "Sovraccarichi, cattivo isolamento e riparazioni improvvisate sono tra le principali cause elettriche di incendio."
  },
  {
    "id": 39,
    "sheet": 3,
    "module": 1,
    "question": "Quale forma e colore contraddistinguono i segnali di DIVIETO (es. vietato fumare, divieto di spegnere con acqua)?",
    "options": [
      "Triangolo giallo con bordo nero",
      "Cerchio con bordo e banda trasversale rossa su sfondo bianco e pittogramma nero",
      "Cerchio blu con pittogramma bianco"
    ],
    "answer": 1,
    "explanation": "Divieto = tondo rosso/bianco; Avvertimento = triangolo giallo/nero; Prescrizione (obbligo) = tondo blu/bianco."
  },
  {
    "id": 40,
    "sheet": 3,
    "module": 1,
    "question": "Quale segnale di sicurezza indica un obbligo di comportamento o l'uso obbligatorio di un DPI (es. guanti, maschera)?",
    "options": [
      "Segnale di divieto (cerchio rosso)",
      "Segnale di prescrizione (cerchio azzurro/blu con pittogramma bianco)",
      "Segnale di avvertimento (triangolo giallo)"
    ],
    "answer": 1,
    "explanation": "I segnali di prescrizione (obbligo) sono circolari a sfondo blu con simbolo bianco."
  },
  {
    "id": 41,
    "sheet": 3,
    "module": 1,
    "question": "Qual è la differenza sostanziale tra 'sorveglianza' e 'controllo periodico' secondo il D.M. 1/9/2021?",
    "options": [
      "Il controllo periodico è visivo, mentre la sorveglianza richiede lo smontaggio dell'estintore",
      "La sorveglianza consiste in controlli visivi effettuabili anche da lavoratori istruiti; il controllo periodico spetta solo al tecnico manutentore qualificato",
      "Sono sinonimi e possono essere svolti entrambi da qualsiasi lavoratore"
    ],
    "answer": 1,
    "explanation": "La sorveglianza verifica visivamente fruibilità e assenza di danni evidenti; il controllo periodico verifica la completa funzionalità tecnica ed è riservato al manutentore qualificato."
  },
  {
    "id": 42,
    "sheet": 3,
    "module": 1,
    "question": "Come acquisisce la qualifica il 'tecnico manutentore qualificato' introdotto dal D.M. 1/9/2021?",
    "options": [
      "Seguendo uno specifico percorso formativo e superando un esame presso una commissione del CNVVF",
      "Frequentando un corso 1-FOR di 4 ore",
      "Con la sola esperienza pratica sul campo senza alcun esame"
    ],
    "answer": 0,
    "explanation": "Il D.M. 1/9/2021 richiede percorso formativo specifico ed esame davanti a commissione di dirigenti e funzionari dei Vigili del Fuoco."
  },
  {
    "id": 43,
    "sheet": 3,
    "module": 1,
    "question": "Cos'è l'autocombustione?",
    "options": [
      "L'accensione di un materiale dovuta al contatto con un fiammifero",
      "L'accensione provocata da un corto circuito elettrico",
      "L'innesco senza sorgenti esterne, dovuto ad accumulo di calore generato da ossidazioni, fermentazioni o reazioni biochimiche"
    ],
    "answer": 2,
    "explanation": "Accade quando la produzione interna di calore (es. cumuli di fieno, carbone attivo, stracci oleosi) supera la dissipazione fino alla Ta."
  },
  {
    "id": 44,
    "sheet": 3,
    "module": 1,
    "question": "In un combustibile solido a parità di massa, cosa succede se diminuisce la pezzatura (es. da ceppo a polvere di legno)?",
    "options": [
      "Aumenta la superficie di scambio termico con l'aria e quindi la facilità di accensione e velocità di combustione",
      "Non cambia nulla ai fini della combustione",
      "Diminuisce la superficie esposta all'aria e brucia con più difficoltà"
    ],
    "answer": 0,
    "explanation": "Minore pezzatura significa maggiore superficie specifica esposta all'ossigeno e al calore, quindi maggiore infiammabilità."
  },
  {
    "id": 45,
    "sheet": 3,
    "module": 1,
    "question": "Un litro di gas liquefatto (es. GPL), passando allo stato gassoso, quanti litri di gas può sviluppare?",
    "options": [
      "Fino a circa 10 litri",
      "Fino a circa 800 litri",
      "Esattamente 1 litro"
    ],
    "answer": 1,
    "explanation": "1 litro di gas liquefatto può sviluppare fino a 800 litri di gas; per questo i recipienti devono rispettare un preciso grado massimo di riempimento."
  },
  {
    "id": 46,
    "sheet": 4,
    "module": 2,
    "question": "Cosa si intende per 'area a rischio specifico' secondo il Codice di Prevenzione Incendi?",
    "options": [
      "Un ambito dell'attività caratterizzato da un rischio di incendio sostanzialmente differente rispetto a quello tipico del resto dell'attività",
      "Qualsiasi ufficio aperto al pubblico",
      "Esclusivamente le aree esterne di parcheggio"
    ],
    "answer": 0,
    "explanation": "Individuare aree a rischio specifico permette di concentrarvi misure mirate senza sovradimensionare l'intera attività."
  },
  {
    "id": 47,
    "sheet": 4,
    "module": 2,
    "question": "Oltre quale soglia di carico di incendio specifico (qf) un'area non occupata o a presenza occasionale è considerata area a rischio specifico?",
    "options": [
      "qf > 1200 MJ/m²",
      "qf > 300 MJ/m²",
      "qf > 600 MJ/m²"
    ],
    "answer": 0,
    "explanation": "Tra i criteri generali di individuazione figura un carico di incendio specifico qf > 1200 MJ/m² in aree non occupate o a presenza breve/occasionale."
  },
  {
    "id": 48,
    "sheet": 4,
    "module": 2,
    "question": "Quale tra le seguenti misure NON è adatta a mitigare un'area a rischio specifico?",
    "options": [
      "Inserirla in un compartimento distinto con rivelazione e spegnimento dedicati",
      "Installare intercettazioni automatiche/manuali di energia elettrica e fluidi pericolosi",
      "Rimuovere la segnaletica per non creare allarmismo tra i lavoratori"
    ],
    "answer": 2,
    "explanation": "Oltre alle misure tecniche (compartimentazione, impianti, contenimento), servono sempre segnaletica, procedure gestionali e formazione degli addetti."
  },
  {
    "id": 49,
    "sheet": 4,
    "module": 2,
    "question": "Qual è la differenza tra DEFLAGRAZIONE e DETONAZIONE?",
    "options": [
      "La deflagrazione riguarda solo i solidi, la detonazione solo i liquidi",
      "Nella deflagrazione la combustione si propaga a velocità inferiore a quella del suono; nella detonazione a velocità superiore",
      "La deflagrazione produce effetti distruttivi molto maggiori della detonazione"
    ],
    "answer": 1,
    "explanation": "La deflagrazione è subsonica; la detonazione è supersonica e genera onde d'urto con effetti distruttivi molto più severi."
  },
  {
    "id": 50,
    "sheet": 4,
    "module": 2,
    "question": "In un ambiente chiuso saturo di gas, vapori o polveri infiammabili, fino a quante volte la pressione iniziale può salire la pressione durante un'esplosione?",
    "options": [
      "Non si verifica alcun aumento di pressione",
      "Fino a 8 volte",
      "Fino a 2 volte"
    ],
    "answer": 1,
    "explanation": "Il rapido innalzamento di temperatura in ambiente confinato può portare la pressione fino a 8 volte quella atmosferica iniziale."
  },
  {
    "id": 51,
    "sheet": 4,
    "module": 2,
    "question": "Che cosa rappresentano i parametri LEL e UEL nella protezione contro le esplosioni?",
    "options": [
      "La temperatura minima e massima di esercizio di un estintore",
      "Il limite inferiore (LEL) e superiore (UEL) di esplodibilità di una sostanza infiammabile in aria",
      "I livelli di pressione minima e massima della rete idranti"
    ],
    "answer": 1,
    "explanation": "Sotto il LEL (miscela troppo magra) e sopra l'UEL (miscela troppo ricca) l'atmosfera non esplode; il pericolo sta nel range tra LEL e UEL."
  },
  {
    "id": 52,
    "sheet": 4,
    "module": 2,
    "question": "Che cos'è la MIE (Minimum Ignition Energy)?",
    "options": [
      "La quantità minima di acqua richiesta da uno sprinkler",
      "Il limite massimo di esposizione al monossido di carbonio",
      "La più bassa energia necessaria a provocare l'accensione di una miscela esplosiva"
    ],
    "answer": 2,
    "explanation": "Una sorgente d'innesco è efficace per un'atmosfera esplosiva solo se fornisce energia almeno pari alla MIE."
  },
  {
    "id": 53,
    "sheet": 4,
    "module": 2,
    "question": "Quale titolo del D.Lgs. 81/2008 stabilisce le prescrizioni minime per la protezione dalle atmosfere esplosive (ATEX)?",
    "options": [
      "Titolo I",
      "Titolo XI (artt. 287–297)",
      "Titolo V"
    ],
    "answer": 1,
    "explanation": "Il Titolo XI del D.Lgs. 81/2008 disciplina la protezione da atmosfere esplosive."
  },
  {
    "id": 54,
    "sheet": 4,
    "module": 2,
    "question": "Qual è il corretto ordine di priorità decrescente degli obiettivi imposti al datore di lavoro in presenza di rischio esplosione?",
    "options": [
      "1) Installare estintori a polvere, 2) Evacuare, 3) Ventilare",
      "1) Prevenire la formazione di atmosfere esplosive, 2) Evitare l'accensione, 3) Attenuare i danni",
      "1) Attenuare i danni, 2) Evitare l'accensione, 3) Prevenire la formazione"
    ],
    "answer": 1,
    "explanation": "La gerarchia obbligatoria è: prevenire la formazione → evitare l'accensione → attenuare gli effetti di un'eventuale esplosione."
  },
  {
    "id": 55,
    "sheet": 4,
    "module": 2,
    "question": "Come viene definita la 'Zona 0' nella classificazione ATEX per gas, vapori e nebbie?",
    "options": [
      "Area in cui l'atmosfera esplosiva è presente in permanenza, per lunghi periodi o frequentemente (> 1000 ore/anno)",
      "Area in cui l'atmosfera esplosiva non è probabile o dura solo brevi istanti",
      "Area in cui la formazione è probabile solo occasionalmente"
    ],
    "answer": 0,
    "explanation": "Zona 0 (gas) e Zona 20 (polveri): presenza continua o frequente (>1000 h/anno)."
  },
  {
    "id": 56,
    "sheet": 4,
    "module": 2,
    "question": "Quali numeri identificano le zone ATEX riferite a nubi di POLVERI combustibili?",
    "options": [
      "Zone 20, 21, 22",
      "Zone 0, 1, 2",
      "Zone 10, 11, 12"
    ],
    "answer": 0,
    "explanation": "Gas/vapori/nebbie = Zone 0, 1, 2; Polveri combustibili = Zone 20 (continua), 21 (occasionale), 22 (breve/anomala)."
  },
  {
    "id": 57,
    "sheet": 4,
    "module": 2,
    "question": "Quale area corrisponde alla 'Zona 21'?",
    "options": [
      "Area con presenza occasionale di gas infiammabile",
      "Area totalmente priva di polveri combustibili",
      "Area in cui la formazione di atmosfera esplosiva da nube di polvere combustibile è probabile occasionalmente durante le normali attività"
    ],
    "answer": 2,
    "explanation": "Zona 21 è l'equivalente per le polveri della Zona 1 per i gas (10–1000 ore/anno)."
  },
  {
    "id": 58,
    "sheet": 4,
    "module": 2,
    "question": "Quale segnale di avvertimento identifica obbligatoriamente le aree in cui possono formarsi atmosfere esplosive?",
    "options": [
      "Cerchio rosso con fiamma barrata",
      "Quadrato verde con freccia bianca",
      "Triangolo giallo bordato di nero con la scritta 'EX' al centro"
    ],
    "answer": 2,
    "explanation": "Il cartello triangolare giallo 'EX' segnala il pericolo esplosione (con indicazioni 'PERICOLO ESPLOSIONE' / 'DANGER EXPLOSION')."
  },
  {
    "id": 59,
    "sheet": 4,
    "module": 2,
    "question": "Quale tra le seguenti è una misura tecnica per ATTENUARE gli effetti quando un'esplosione non può essere evitata?",
    "options": [
      "Sostituzione delle sostanze infiammabili",
      "Aumento della temperatura di processo",
      "Scarico dell'esplosione, soppressione e isolamento (barriere antifiamma, valvole)"
    ],
    "answer": 2,
    "explanation": "Sistemi resistenti alla pressione, scarico, soppressione e isolamento attenuano i danni quando la prevenzione non basta."
  },
  {
    "id": 60,
    "sheet": 4,
    "module": 2,
    "question": "Quale documento specifico deve elaborare e aggiornare il datore di lavoro in presenza di rischio esplosione?",
    "options": [
      "Il solo certificato di prevenzione incendi",
      "Il documento sulla protezione contro le esplosioni",
      "Il registro delle verifiche degli estintori"
    ],
    "answer": 1,
    "explanation": "Il datore di lavoro deve elaborare e mantenere aggiornato il 'documento sulla protezione contro le esplosioni'."
  },
  {
    "id": 61,
    "sheet": 5,
    "module": 2,
    "question": "In quale fase dell'incendio esplica i suoi principali effetti la misura della REAZIONE AL FUOCO?",
    "options": [
      "Solo nella fase di raffreddamento finale",
      "Esclusivamente dopo il crollo strutturale dell'edificio",
      "Nella fase iniziale (pre-flashover), limitando l'innesco dei materiali e la prima propagazione"
    ],
    "answer": 2,
    "explanation": "La reazione al fuoco misura il grado di partecipazione dei materiali (rivestimenti, arredi) nella fase iniziale pre-flashover."
  },
  {
    "id": 62,
    "sheet": 5,
    "module": 2,
    "question": "Nella classificazione EUROPEA di reazione al fuoco dei prodotti da costruzione (A1, A2, B, C, D, E, F), quale classe offre la prestazione migliore (incombustibile)?",
    "options": [
      "Classe C",
      "Classe F",
      "Classe A1"
    ],
    "answer": 2,
    "explanation": "La partecipazione al fuoco cresce da A1 (migliore/incombustibile) verso F (prestazione non determinata)."
  },
  {
    "id": 63,
    "sheet": 5,
    "module": 2,
    "question": "Nella classificazione ITALIANA di reazione al fuoco (0, 1, 2, 3, 4, 5), quale classe identifica i materiali incombustibili?",
    "options": [
      "Classe 1",
      "Classe 0",
      "Classe 5"
    ],
    "answer": 1,
    "explanation": "In Italia la classe 0 identifica i materiali incombustibili; da 1 a 5 aumenta la partecipazione al fuoco."
  },
  {
    "id": 64,
    "sheet": 5,
    "module": 2,
    "question": "Come vengono classificati per la reazione al fuoco i mobili imbottiti e i materassi (es. in ospedali o alberghi)?",
    "options": [
      "Con le sigle REI 30, REI 60, REI 120",
      "Con le classi A, B, C, D, F",
      "Con le classi 1IM, 2IM, 3IM"
    ],
    "answer": 2,
    "explanation": "I mobili imbottiti hanno le classi specifiche 1IM, 2IM e 3IM (prestazione decrescente da 1IM a 3IM)."
  },
  {
    "id": 65,
    "sheet": 5,
    "module": 2,
    "question": "Cosa significa il simbolo 'R' nella classificazione di resistenza al fuoco (es. R 60, REI 60)?",
    "options": [
      "Rapidità di evacuazione dei fumi",
      "Resistenza alla corrosione chimica",
      "Capacità portante (mantenimento della resistenza meccanica sotto l'azione del fuoco)"
    ],
    "answer": 2,
    "explanation": "R = Capacità portante; E = Tenuta ai fumi e gas caldi; I = Isolamento termico."
  },
  {
    "id": 66,
    "sheet": 5,
    "module": 2,
    "question": "Quali prestazioni garantisce un elemento costruttivo classificato 'REI 60'?",
    "options": [
      "Solo capacità portante per 60 secondi",
      "Esclusivamente isolamento termico per 60 minuti",
      "Capacità portante (R), tenuta ai fumi/gas caldi (E) e isolamento termico (I) per 60 minuti"
    ],
    "answer": 2,
    "explanation": "Il numero esprime sempre l'intervallo di tempo in minuti riferito a una curva di incendio nominale."
  },
  {
    "id": 67,
    "sheet": 5,
    "module": 2,
    "question": "Quali requisiti di resistenza al fuoco possono caratterizzare una parete divisoria NON portante o una porta tagliafuoco?",
    "options": [
      "Esclusivamente il requisito R",
      "Nessun requisito, poiché non reggono il tetto",
      "Requisiti di tenuta (E) ed isolamento (I), privi di capacità portante R"
    ],
    "answer": 2,
    "explanation": "Gli elementi separanti non portanti non hanno la R, ma assicurano la compartimentazione tramite E, EI (e talvolta Sa per i fumi freddi)."
  },
  {
    "id": 68,
    "sheet": 5,
    "module": 2,
    "question": "Nella sigla di una porta tagliafuoco 'EI 60-Sa', cosa indica il pedice 'Sa'?",
    "options": [
      "Apertura automatica verso l'esterno",
      "Tenuta anche ai fumi freddi",
      "Resistenza all'urto meccanico"
    ],
    "answer": 1,
    "explanation": "Il simbolo Sa indica la tenuta al passaggio dei fumi freddi."
  },
  {
    "id": 69,
    "sheet": 5,
    "module": 2,
    "question": "Come viene definito il carico di incendio specifico (qf) di un compartimento?",
    "options": [
      "Il potenziale termico totale dei combustibili riferito all'unità di superficie lorda di piano, espresso in MJ/m²",
      "La temperatura massima raggiunta in un'ora di incendio",
      "Il numero di estintori presenti per ogni 100 m²"
    ],
    "answer": 0,
    "explanation": "Il carico d'incendio (MJ) diviso la superficie lorda dà qf (MJ/m²); corretto per rischio e protezioni diventa qf,d (di progetto)."
  },
  {
    "id": 70,
    "sheet": 5,
    "module": 2,
    "question": "Convenzionalmente, a quanti kg di legna equivalente corrisponde 1 MJ di carico di incendio?",
    "options": [
      "1 kg di legna equivalente",
      "0,057 kg di legna equivalente",
      "10 kg di legna equivalente"
    ],
    "answer": 1,
    "explanation": "Da D.M. 3/8/2015: convenzionalmente 1 MJ corrisponde all'energia sviluppata da 0,057 kg di legna equivalente."
  },
  {
    "id": 71,
    "sheet": 5,
    "module": 2,
    "question": "Quali requisiti deve avere uno 'spazio scoperto' secondo il Codice di Prevenzione Incendi?",
    "options": [
      "Almeno 100 m² e distanza minima di 1 m",
      "Qualsiasi cortile coperto da tettoia in plastica",
      "Superficie lorda libera S ≥ 3 × H1 (parete più bassa) e distanza tra strutture verticali ≥ 3,50 m"
    ],
    "answer": 2,
    "explanation": "Lo spazio scoperto è a cielo libero o grigliato con S ≥ 3·H1 e distanza ≥ 3,50 m; attenzione: non è automaticamente un luogo sicuro."
  },
  {
    "id": 72,
    "sheet": 5,
    "module": 2,
    "question": "Quali sono i requisiti di un 'filtro' (compartimento a probabilità d'incendio trascurabile)?",
    "options": [
      "Resistenza ≥ 30 min, almeno 2 chiusure E 30-Sa, carico qf ≤ 50 MJ/m², assenza di sostanze o lavorazioni pericolose",
      "Una sola porta tagliafuoco e impianto sprinkler obbligatorio",
      "Resistenza ≥ 15 min e carico qf ≤ 300 MJ/m²"
    ],
    "answer": 0,
    "explanation": "Nel filtro l'innesco è trascurabile grazie a qf ≤ 50 MJ/m², assenza di pericoli, resistenza ≥ 30 min e ≥ 2 varchi E 30-Sa."
  },
  {
    "id": 73,
    "sheet": 5,
    "module": 2,
    "question": "Quale tra queste caratteristiche realizza un 'filtro a prova di fumo' (se monopiano e di ridotta superficie)?",
    "options": [
      "Sovrappressione ≥ 30 Pa in emergenza, oppure camino di sezione ≥ 0,10 m², oppure apertura diretta verso l'esterno ≥ 1 m²",
      "La sola installazione di due estintori a CO₂",
      "Una finestra apribile manualmente di 0,20 m²"
    ],
    "answer": 0,
    "explanation": "Le tre soluzioni tradizionali sono: sovrappressione ≥ 30 Pa, camino ≥ 0,10 m² (con ripresa aria), oppure apertura diretta esterna ≥ 1 m²."
  },
  {
    "id": 74,
    "sheet": 5,
    "module": 2,
    "question": "In che posizione devono rimanere normalmente le porte tagliafuoco?",
    "options": [
      "Aperte di giorno e chiuse a chiave di notte",
      "Sempre aperte con un cuneo per facilitare il passaggio",
      "Normalmente chiuse, salvo quelle dotate di fermo elettromagnetico asservito all'impianto IRAI"
    ],
    "answer": 2,
    "explanation": "Una porta tagliafuoco bloccata con cunei vanifica la compartimentazione; può stare aperta solo con sgancio elettromagnetico automatico."
  },
  {
    "id": 75,
    "sheet": 5,
    "module": 2,
    "question": "Quali elementi edilizi possono favorire la propagazione verticale dell'incendio tra piani se non adeguatamente protetti?",
    "options": [
      "Le scale esterne distanziate oltre 2,50 m",
      "I pavimenti in ceramica incombustibile",
      "Le facciate ventilate e i cavedi tecnici/attraversamenti impiantistici non sigillati"
    ],
    "answer": 2,
    "explanation": "Facciate ventilate e cavedi impiantistici senza sigillature resistenti al fuoco fungono da vie preferenziali tra i piani."
  },
  {
    "id": 76,
    "sheet": 6,
    "module": 2,
    "question": "Cos'è uno 'spazio calmo' all'interno del sistema d'esodo?",
    "options": [
      "Qualsiasi corridoio cieco dotato di estintore",
      "Un luogo sicuro temporaneo dove gli occupanti (es. con ridotta mobilità) possono attendere e ricevere assistenza per completare l'esodo",
      "L'ufficio del datore di lavoro"
    ],
    "answer": 1,
    "explanation": "Lo spazio calmo consente alle persone non autonome sulle scale di attendere in sicurezza l'assistenza dei soccorritori."
  },
  {
    "id": 77,
    "sheet": 6,
    "module": 2,
    "question": "Quale modalità d'esodo prevede lo spostamento degli occupanti dal compartimento di innesco a un compartimento adiacente protetto (tipico dei reparti ospedalieri)?",
    "options": [
      "Esodo orizzontale progressivo",
      "Esodo simultaneo",
      "Protezione sul posto"
    ],
    "answer": 0,
    "explanation": "L'esodo orizzontale progressivo sposta gli occupanti (es. pazienti allettati) in un compartimento adiacente protetto sullo stesso piano."
  },
  {
    "id": 78,
    "sheet": 6,
    "module": 2,
    "question": "Quali tra i seguenti elementi NON possono essere considerati vie d'esodo ordinarie?",
    "options": [
      "Ascensori ordinari, scale portatili e rampe con pendenza superiore al 20%",
      "Scale esterne dotate di corrimano laterale",
      "Scale protette e corridoi con pendenza ≤ 5%"
    ],
    "answer": 0,
    "explanation": "Scale portatili, ascensori ordinari e rampe > 20% sono esclusi dal sistema d'esodo (per disabili motori max 8% in autonomia)."
  },
  {
    "id": 79,
    "sheet": 6,
    "module": 2,
    "question": "Cos'è un 'corridoio cieco' (percorso unidirezionale)?",
    "options": [
      "Un corridoio privo di illuminazione di sicurezza",
      "Una porzione di via d'esodo da cui è possibile evacuare in un'unica direzione senza alternative",
      "Un corridoio privo di finestre"
    ],
    "answer": 1,
    "explanation": "Nel corridoio cieco l'incendio può bloccare l'unica via di fuga; per questo la sua lunghezza massima ammessa è circa la metà (10–45 m)."
  },
  {
    "id": 80,
    "sheet": 6,
    "module": 2,
    "question": "Entro quale intervallo varia di norma la lunghezza massima della via d'esodo (fino a luogo sicuro temporaneo) a seconda del profilo di rischio?",
    "options": [
      "Tra 20 e 70 metri",
      "Tra 100 e 200 metri",
      "Tra 5 e 15 metri"
    ],
    "answer": 0,
    "explanation": "Si va da 20 m (es. occupanti addormentati e incendio rapido) fino a 70 m (occupanti svegli con familiarità e incendio lento)."
  },
  {
    "id": 81,
    "sheet": 6,
    "module": 2,
    "question": "Qual è l'altezza minima ordinaria delle vie di esodo?",
    "options": [
      "2,70 metri",
      "2,00 metri",
      "1,80 metri"
    ],
    "answer": 1,
    "explanation": "L'altezza minima delle vie d'esodo è pari a 2 m (deroghe per brevi tratti segnalati solo in locali impianti/depositi con personale formato)."
  },
  {
    "id": 82,
    "sheet": 6,
    "module": 2,
    "question": "Qual è la larghezza minima di una via d'esodo orizzontale per un ambito servito con affollamento ≤ 300 occupanti (adatta anche a chi usa ausili per il movimento)?",
    "options": [
      "≥ 900 mm (≥ 800 mm per varchi fino a 50 occupanti)",
      "≥ 1800 mm",
      "≥ 500 mm"
    ],
    "answer": 0,
    "explanation": "Larghezze minime orizzontali: ≥1200 mm (>1000 occ.), ≥1000 mm (>300), ≥900 mm (≤300), ≥800 mm (≤50), ≥700 mm (≤10), ≥600 mm (solo addetti)."
  },
  {
    "id": 83,
    "sheet": 6,
    "module": 2,
    "question": "Nel calcolo della larghezza utile di una via d'esodo, quali sporgenze possono essere escluse dalla detrazione?",
    "options": [
      "Qualsiasi arredo purché incombustibile",
      "Armadi metallici e fotocopiatrici",
      "Estintori, nonché corrimano e dispositivi di apertura porte con sporgenza ≤ 80 mm"
    ],
    "answer": 2,
    "explanation": "Dalla larghezza (misurata fino a 2 m di altezza) si deducono gli ingombri sporgenti, esclusi estintori e corrimano/maniglioni ≤ 80 mm."
  },
  {
    "id": 84,
    "sheet": 6,
    "module": 2,
    "question": "Che cosa differenzia la 'rilevazione' dalla 'rivelazione' di un incendio?",
    "options": [
      "La rilevazione misura un fenomeno fisico; la rivelazione è l'insieme di rilevazione + segnalazione al sistema o all'uomo",
      "La rivelazione riguarda solo i fumi, la rilevazione solo il calore",
      "Sono due errori di stampa per lo stesso termine"
    ],
    "answer": 0,
    "explanation": "Formula chiave della dispensa: Rilevazione + Segnalazione = Rivelazione."
  },
  {
    "id": 85,
    "sheet": 6,
    "module": 2,
    "question": "A quale distanza massima di percorso e a quale altezza dal pavimento devono essere installati i pulsanti manuali di allarme (IRAI)?",
    "options": [
      "Percorso 15–30 m; altezza 1,00–1,60 m (consigliata circa 110 cm per accessibilità)",
      "Percorso max 100 m; altezza 2,20 m per evitare urti",
      "Solo uno per edificio all'ingresso principale"
    ],
    "answer": 0,
    "explanation": "Devono esserci almeno 2 pulsanti per zona, raggiungibili in 15–30 m, ad altezza 1,00–1,60 m (consigliata ~110 cm per persone in carrozzina)."
  },
  {
    "id": 86,
    "sheet": 6,
    "module": 2,
    "question": "Come funziona un rivelatore d'incendio di tipo 'velocimetrico'?",
    "options": [
      "Confronta il fumo tra due locali diversi",
      "Va in allarme quando la rapidità di variazione della grandezza misurata nel tempo supera un certo valore",
      "Interviene solo quando la temperatura supera una soglia fissa prestabilita"
    ],
    "answer": 1,
    "explanation": "Statico = soglia fissa; Differenziale = differenza tra due punti; Velocimetrico = velocità di crescita della grandezza (es. rapido aumento di T)."
  },
  {
    "id": 87,
    "sheet": 6,
    "module": 2,
    "question": "Quale tipologia di rivelatore è consigliata in una cucina per evitare falsi allarmi dovuti a vapori di cottura?",
    "options": [
      "Rivelatore di temperatura a soglia fissa (termostatico)",
      "Rivelatore ottico di fumo ad alta sensibilità",
      "Rivelatore lineare di fumo"
    ],
    "answer": 0,
    "explanation": "In cucina i fumi e vapori ordinari causerebbero falsi allarmi; si usano sensori di temperatura a soglia fissa."
  },
  {
    "id": 88,
    "sheet": 6,
    "module": 2,
    "question": "Qual è la funzione delle 'aperture di smaltimento di fumo e calore di emergenza' (es. finestre, lucernari, pannelli bassofondenti)?",
    "options": [
      "Impedire completamente la formazione di fumo nel locale",
      "Sostituire integralmente gli impianti sprinkler",
      "Hanno la sola funzione di facilitare l'opera di estinzione dei soccorritori"
    ],
    "answer": 2,
    "explanation": "Le aperture di smaltimento d'emergenza servono solo a facilitare l'intervento delle squadre di soccorso, non a garantire l'esodo."
  },
  {
    "id": 89,
    "sheet": 6,
    "module": 2,
    "question": "Quali vantaggi offrono i Sistemi di Evacuazione di Fumo e Calore (SEFC, naturali SENFC o forzati SEFFC)?",
    "options": [
      "Funzionano solo all'aperto",
      "Aumentano la temperatura interna per bruciare i fumi",
      "Mantengono uno strato libero da fumo sopra l'altezza d'uomo, proteggono le vie d'esodo e ritardano o prevengono il flash-over"
    ],
    "answer": 2,
    "explanation": "I SEFC evacuano fumo e calore dall'alto mantenendo respirabile e visibile la fascia bassa dell'ambiente protetto."
  },
  {
    "id": 90,
    "sheet": 6,
    "module": 2,
    "question": "Cosa devono riportare le planimetrie semplificate esposte a ogni piano per l'orientamento degli occupanti?",
    "options": [
      "La posizione del lettore ('Voi siete qui') correttamente orientata e il layout di vie d'esodo, spazi calmi e luoghi sicuri",
      "Il solo calcolo strutturale dei pilastri",
      "L'elenco telefonico dei fornitori"
    ],
    "answer": 0,
    "explanation": "Le planimetrie d'emergenza devono essere correttamente orientate con il punto 'Voi siete qui' e tutte le indicazioni d'esodo."
  },
  {
    "id": 91,
    "sheet": 7,
    "module": 3,
    "question": "Qual è la differenza tra 'soppressione' ed 'estinzione' di un incendio?",
    "options": [
      "La soppressione riduce drasticamente fiamme e potenza ma può lasciare braci riattivabili; l'estinzione spegne definitivamente fiamme e braci",
      "Sono esattamente sinonimi",
      "La soppressione si fa solo con estintori, l'estinzione solo con sprinkler"
    ],
    "answer": 0,
    "explanation": "Controllo = contiene la crescita; Soppressione = abbatte fiamme ma restano braci; Estinzione = spegnimento completo senza rischio riaccensione."
  },
  {
    "id": 92,
    "sheet": 7,
    "module": 3,
    "question": "Qual è la massa massima pronta all'uso che distingue un estintore portatile da un estintore carrellato?",
    "options": [
      "Portatile ≤ 20 kg; carrellato > 20 kg (con cariche fino a 150 kg)",
      "Portatile ≤ 10 kg; carrellato > 10 kg",
      "Portatile ≤ 6 kg totali; carrellato > 6 kg"
    ],
    "answer": 0,
    "explanation": "Un estintore portatile ha massa complessiva pronta all'uso ≤ 20 kg (mentre la carica nominale di norma non supera 6 kg o 6 litri)."
  },
  {
    "id": 93,
    "sheet": 7,
    "module": 3,
    "question": "Perché l'impiego di estintori a POLVERE è fortemente sconsigliato nei luoghi chiusi?",
    "options": [
      "Perché la polvere è conduttrice di elettricità",
      "Perché la polvere non spegne fuochi di classe A o B",
      "Perché causa un'improvvisa perdita di visibilità ostacolando l'esodo, irrita mucose/pelle e danneggia macchinari"
    ],
    "answer": 2,
    "explanation": "Nei luoghi chiusi la dispensa raccomanda di preferire estintori a base d'acqua (idrici) invece della polvere."
  },
  {
    "id": 94,
    "sheet": 7,
    "module": 3,
    "question": "Qual è la distanza massima di raggiungimento di un estintore di classe A per profili di rischio medio (es. B1, B2, C1, C2, D1, D2, A3)?",
    "options": [
      "30 metri (capacità minima 21A)",
      "40 metri (capacità 13A)",
      "15 metri (capacità minima 55A)"
    ],
    "answer": 0,
    "explanation": "Classe A: 40 m (13A) per A1–A2; 30 m (21A) per profili intermedi; 20 m (27A) per profili elevati (A4, B3, C3, E3). Classe B: max 15 m."
  },
  {
    "id": 95,
    "sheet": 7,
    "module": 3,
    "question": "Come va estinto in sicurezza un principio d'incendio di classe C (gas) da parte di occupanti non specificamente addestrati?",
    "options": [
      "Chiudendo la valvola di intercettazione del gas disponibile in prossimità",
      "Spruzzando subito acqua a getto pieno sulla fiamma",
      "Usando esclusivamente schiuma ad alta espansione"
    ],
    "answer": 0,
    "explanation": "Spegnere la fiamma senza chiudere il gas crea una nube esplosiva; la prima azione sicura è chiudere la valvola di intercettazione."
  },
  {
    "id": 96,
    "sheet": 7,
    "module": 3,
    "question": "Qual è la differenza tra un idrante a muro DN 45 e un naspo DN 25?",
    "options": [
      "L'idrante a muro ha manichetta flessibile piatta a riposo (di norma 20 m); il naspo ha bobina con tubazione semirigida (max 30 m)",
      "Il naspo ha diametro maggiore dell'idrante a muro",
      "L'idrante a muro si usa solo all'esterno"
    ],
    "answer": 0,
    "explanation": "Naspo DN 25 = tubazione semirigida su bobina fino a 30 m; Idrante a muro DN 45 = tubazione flessibile appiattita a riposo, in genere 20 m."
  },
  {
    "id": 97,
    "sheet": 7,
    "module": 3,
    "question": "Quale norma tecnica italiana disciplina la progettazione, installazione ed esercizio delle reti di idranti?",
    "options": [
      "UNI EN 12101-6",
      "UNI 10779",
      "UNI EN 12845"
    ],
    "answer": 1,
    "explanation": "UNI 10779 = Reti di idranti; UNI EN 12845 = Impianti sprinkler; UNI EN 12101-6 = Sistemi a pressione differenziale."
  },
  {
    "id": 98,
    "sheet": 7,
    "module": 3,
    "question": "Negli impianti sprinkler automatici (UNI EN 12845), a quale temperatura si rompe il bulbo di vetro di colore ROSSO (il più diffuso)?",
    "options": [
      "141 °C",
      "57 °C",
      "68 °C"
    ],
    "answer": 2,
    "explanation": "Scala colori bulbi sprinkler: arancio 57 °C, rosso 68 °C (più comune), giallo 79 °C, verde 93 °C, blu 141 °C, malva 183 °C."
  },
  {
    "id": 99,
    "sheet": 7,
    "module": 3,
    "question": "Quando si installa un impianto sprinkler 'a secco' (tubazioni piene di aria compressa anziché acqua)?",
    "options": [
      "In ambienti non riscaldati o refrigerati dove l'acqua nei tubi potrebbe congelare",
      "Quando si vogliono spegnere incendi di metalli di classe D",
      "Negli uffici riscaldati per risparmiare peso"
    ],
    "answer": 0,
    "explanation": "L'impianto a secco evita il congelamento delle tubazioni; quando si apre un ugello l'aria esce, apre la valvola a secco ed entra l'acqua."
  },
  {
    "id": 100,
    "sheet": 7,
    "module": 3,
    "question": "Come funziona un impianto sprinkler 'a preazione' (o preallarme)?",
    "options": [
      "Funziona con acqua d'estate e azoto d'inverno",
      "Richiede un doppio consenso: l'impianto di rivelazione riempie le tubazioni e l'acqua esce solo dagli ugelli aperti dal calore",
      "Scarica acqua contemporaneamente da tutti gli ugelli aperti"
    ],
    "answer": 1,
    "explanation": "Il sistema a preazione unisce tubazioni a secco + rivelazione automatica (doppio consenso), evitando scariche accidentali per rotture meccaniche."
  },
  {
    "id": 101,
    "sheet": 7,
    "module": 3,
    "question": "Cosa caratterizza un impianto automatico 'a diluvio'?",
    "options": [
      "Erogazione esclusiva di azoto gassoso",
      "Ugelli sempre aperti (privi di tappo/bulbo) che inondano simultaneamente tutta l'area su comando di un impianto di rivelazione",
      "Ugelli chiusi con bulbo rosso a 68 °C"
    ],
    "answer": 1,
    "explanation": "Gli impianti a diluvio proteggono aree ad altissimo rischio dove serve un'inondazione immediata e simultanea."
  },
  {
    "id": 102,
    "sheet": 7,
    "module": 3,
    "question": "A quali pressioni opera un impianto ad acqua nebulizzata 'Water Mist' e qual è il suo risparmio idrico rispetto a uno sprinkler tradizionale?",
    "options": [
      "15 bar con consumo d'acqua doppio",
      "80–140 bar (gocce 50–120 µm) con riduzione dell'impiego di acqua fino al 90%",
      "3–5 bar con risparmio idrico del 10%"
    ],
    "answer": 1,
    "explanation": "Il Water Mist ad alta pressione usa fino al 90% di acqua in meno, raffredda istantaneamente, soffoca (volume ×1640) e blocca l'irraggiamento."
  },
  {
    "id": 103,
    "sheet": 7,
    "module": 3,
    "question": "Come funziona un impianto di spegnimento ad aerosol condensato?",
    "options": [
      "Tramite batterie di bombole ad alta pressione da 300 bar",
      "Spruzzando schiuma proteica a bassa espansione",
      "Tramite generatori con composto solido (a base di sali di potassio) che attivandosi termicamente saturano il volume senza bombole né ugelli"
    ],
    "answer": 2,
    "explanation": "Gli impianti ad aerosol non richiedono bombole né rete di ugelli e saturano il volume protetto (classi A, B, C)."
  },
  {
    "id": 104,
    "sheet": 7,
    "module": 3,
    "question": "Qual è il principio di funzionamento di un impianto ORS (Oxygen Reduction System — a deplezione di ossigeno)?",
    "options": [
      "Spruzza acqua nebulizzata solo in caso di allarme",
      "Aumenta l'ossigeno per bruciare rapidamente i fumi",
      "Riduce costantemente l'ossigeno nell'ambiente sotto il LOC (13–17%), impedendo alla combustione di sostenersi anche con innesco"
    ],
    "answer": 2,
    "explanation": "L'ORS elimina in permanenza il lato comburente del triangolo del fuoco (ideale per CED, archivi, magazzini automatizzati)."
  },
  {
    "id": 105,
    "sheet": 7,
    "module": 3,
    "question": "Sotto quale percentuale di ossigeno nell'aria l'atmosfera diventa non respirabile con calo drastico dell'efficienza psicofisica (pericolo negli impianti ORS)?",
    "options": [
      "Sotto il 21%",
      "Sotto il 18% (e sotto il 12% subentrano problemi gravi, svenimento e morte)",
      "Solo sotto il 5%"
    ],
    "answer": 1,
    "explanation": "Tra 21% e 18% possibili difficoltà respiratorie; <18% atmosfera non respirabile; <12% grave pericolo di svenimento e morte."
  },
  {
    "id": 106,
    "sheet": 8,
    "module": 3,
    "question": "Per garantire l'operatività antincendio, a quale distanza massima dagli accessi per soccorritori devono potersi avvicinare i mezzi dei Vigili del Fuoco?",
    "options": [
      "≤ 200 metri",
      "≤ 50 metri",
      "≤ 500 metri"
    ],
    "answer": 1,
    "explanation": "I mezzi VVF devono poter accostare a ≤ 50 m dagli accessi; invece un idrante esterno/pubblico deve essere raggiungibile entro 500 m dai confini."
  },
  {
    "id": 107,
    "sheet": 8,
    "module": 3,
    "question": "Qual è la differenza tra 'ascensore antincendio' e 'ascensore di soccorso'?",
    "options": [
      "L'ascensore antincendio è usato ordinariamente dagli occupanti ma protetto per uso VVF/evacuazione assistita; l'ascensore di soccorso è installato esclusivamente per il trasporto attrezzature VVF ed emergenze",
      "Sono entrambi vietati in caso di incendio",
      "L'ascensore di soccorso serve solo per i clienti"
    ],
    "answer": 0,
    "explanation": "Entrambi sono utilizzabili in emergenza sotto controllo dei soccorritori, ma l'ascensore di soccorso è dedicato in via esclusiva al servizio antincendio."
  },
  {
    "id": 108,
    "sheet": 8,
    "module": 3,
    "question": "Quali sono i due ambiti in cui si articola la Gestione della Sicurezza Antincendio (GSA)?",
    "options": [
      "GSA diurna e GSA notturna",
      "GSA in esercizio (condizioni ordinarie) e GSA in emergenza (attuazione piano di emergenza)",
      "GSA passiva e GSA strutturale"
    ],
    "answer": 1,
    "explanation": "In esercizio si mantengono prevenzione, vie d'esodo, sorveglianza e prove; in emergenza si attiva e gestisce il piano di emergenza."
  },
  {
    "id": 109,
    "sheet": 8,
    "module": 3,
    "question": "Nella checklist di sorveglianza di un estintore portatile, come deve essere orientata l'etichetta con le istruzioni d'uso?",
    "options": [
      "Rivolta verso l'esterno in modo pienamente visibile e leggibile in lingua italiana",
      "Non è obbligatoria la lingua italiana se ci sono pittogrammi",
      "Rivolta verso la parete per proteggerla dalla luce"
    ],
    "answer": 0,
    "explanation": "L'etichetta deve essere leggibile, in italiano e rivolta verso gli occupanti (mai girata contro il muro)."
  },
  {
    "id": 110,
    "sheet": 8,
    "module": 3,
    "question": "Durante la sorveglianza visiva di un estintore portatile, quale condizione rappresenta un'anomalia (esito KO)?",
    "options": [
      "Cartellino di manutenzione presente e non scaduto",
      "Estintore portatile appoggiato direttamente a pavimento, privo di supporto/gancio o con sigillo rotto",
      "Lancetta del manometro all'interno del campo verde"
    ],
    "answer": 1,
    "explanation": "L'estintore portatile non deve stare a pavimento ma su supporto/gancio saldamente ancorato, integro e con sigillo intatto."
  },
  {
    "id": 111,
    "sheet": 8,
    "module": 3,
    "question": "Se durante la sorveglianza si riscontra un'anomalia su un presidio non ripristinabile internamente (es. manometro sul rosso), cosa bisogna fare?",
    "options": [
      "Attendere la visita semestrale successiva",
      "Ricaricarlo autonomamente con aria compressa",
      "Segnalare immediatamente e richiedere il ripristino al tecnico manutentore qualificato"
    ],
    "answer": 2,
    "explanation": "Le anomalie tecniche vanno subito segnalate e risolte da un tecnico manutentore qualificato."
  },
  {
    "id": 112,
    "sheet": 8,
    "module": 3,
    "question": "Quale tra questi compiti NON rientra tra quelli dell'addetto antincendio in caso di emergenza?",
    "options": [
      "Mettere in sicurezza gli impianti tecnologici e assistere persone con esigenze speciali",
      "Disporre la ripresa delle lavorazioni prima che i Vigili del Fuoco o i controlli confermino la sicurezza",
      "Tentare lo spegnimento di un principio di incendio e coordinare l'evacuazione"
    ],
    "answer": 1,
    "explanation": "La ripresa dell'attività avviene solo dopo aver accertato la sicurezza di locali e impianti e dichiarato la fine emergenza."
  },
  {
    "id": 113,
    "sheet": 8,
    "module": 3,
    "question": "Quali informazioni essenziali vanno fornite ai Vigili del Fuoco durante la chiamata di emergenza?",
    "options": [
      "Nome e indirizzo attività, tipo e gravità emergenza, eventuali infortunati, sostanze pericolose presenti e vie di accesso preferenziali",
      "Il numero di partita IVA e l'elenco di tutti gli estintori",
      "Solo il nome di chi chiama e il numero di telefono"
    ],
    "answer": 0,
    "explanation": "Fornire subito indirizzo, tipo/gravità, feriti, sostanze pericolose e accessi preferenziali accelera e rende sicuro il soccorso."
  },
  {
    "id": 114,
    "sheet": 8,
    "module": 3,
    "question": "Quando è obbligatorio aggiornare il Piano di Emergenza secondo l'Allegato II del D.M. 2/9/2021?",
    "options": [
      "Solo ogni 10 anni",
      "In occasione di ogni modifica che possa alterare le misure di prevenzione e protezione, informando i lavoratori e coinvolgendo gli addetti",
      "Mai, una volta approvato resta definitivo"
    ],
    "answer": 1,
    "explanation": "Il piano va revisionato periodicamente e sempre aggiornato ad ogni modifica dell'attività o delle misure di sicurezza."
  },
  {
    "id": 115,
    "sheet": 8,
    "module": 3,
    "question": "Cosa deve avvenire se più luoghi di lavoro con titolari diversi sono ubicati nello stesso edificio?",
    "options": [
      "È sufficiente il piano di emergenza del solo proprietario dello stabile",
      "I piani di emergenza devono essere coordinati tra i vari titolari",
      "Ogni azienda agisce in totale autonomia senza avvisare le altre"
    ],
    "answer": 1,
    "explanation": "Il D.M. 2/9/2021 impone il coordinamento dei piani di emergenza per attività diverse nello stesso edificio."
  },
  {
    "id": 116,
    "sheet": 8,
    "module": 3,
    "question": "Quali elementi devono essere indicati obbligatoriamente nelle planimetrie allegate al Piano di Emergenza?",
    "options": [
      "Solo le dimensioni dei locali in metri quadrati",
      "Vie d'esodo, compartimentazioni, presidi antincendio, allarmi, interruttore generale elettrico, valvole gas/acqua, locali a rischio specifico, primo soccorso e soli ascensori utilizzabili",
      "Esclusivamente le uscite di sicurezza"
    ],
    "answer": 1,
    "explanation": "Le planimetrie del piano di emergenza devono riportare tutti i presidi, gli organi di intercettazione utenze e i rischi specifici."
  },
  {
    "id": 117,
    "sheet": 8,
    "module": 3,
    "question": "Chi rientra tra le 'persone con esigenze speciali' da considerare nel piano di emergenza (D.M. 2/9/2021)?",
    "options": [
      "Persone con disabilità motorie/sensoriali/cognitive (anche temporanee), anziani, donne in stato di gravidanza e bambini",
      "Esclusivamente i visitatori esterni",
      "Solo i lavoratori con disabilità motoria permanente"
    ],
    "answer": 0,
    "explanation": "La normativa include disabilità permanenti o temporanee, anziani, donne incinte e bambini, prevedendo anche allarmi visivi/vibrazione/EVAC."
  },
  {
    "id": 118,
    "sheet": 8,
    "module": 3,
    "question": "Cosa devono fare gli addetti antincendio una volta giunti al punto di raccolta con gli occupanti?",
    "options": [
      "Lasciare subito liberi tutti di tornare a casa o rientrare a prendere gli oggetti personali",
      "Chiudere i cancelli dall'esterno impedendo l'ingresso ai VVF",
      "Verificare tramite appello che tutti abbiano raggiunto il luogo sicuro e assicurarsi che vi restino fino a fine emergenza"
    ],
    "answer": 2,
    "explanation": "L'appello permette di segnalare immediatamente ai VVF eventuali dispersi o persone bloccate all'interno."
  },
  {
    "id": 119,
    "sheet": 8,
    "module": 3,
    "question": "Quanti sono i livelli di prestazione della Gestione della Sicurezza Antincendio (GSA) previsti dal D.M. 3/8/2015?",
    "options": [
      "Un unico livello uguale per tutte le aziende",
      "5 livelli (da I a V)",
      "3 livelli (I, II, III) a complessità crescente"
    ],
    "answer": 2,
    "explanation": "I livelli GSA sono 3 (I, II, III); invece i livelli di prestazione per la resistenza al fuoco delle strutture sono 5 (I–V)."
  },
  {
    "id": 120,
    "sheet": 8,
    "module": 3,
    "question": "Quale comportamento corretto prevede la procedura di allarme per evitare il panico?",
    "options": [
      "Urlare 'al fuoco' correndo nei corridoi",
      "Attendere almeno 10 minuti prima di avvisare chiunque",
      "Mantenere la calma, dare l'allarme secondo il piano evitando agitazione, assistere chi è in difficoltà e attenersi alle procedure"
    ],
    "answer": 2,
    "explanation": "Calma, tempestività e rispetto delle procedure di allarme impediscono reazioni di panico e velocizzano l'esodo."
  },
  {
    "id": 121,
    "sheet": 9,
    "module": 4,
    "question": "Nell'utilizzo di un estintore portatile all'aperto o in presenza di correnti d'aria, come deve posizionarsi l'operatore?",
    "options": [
      "Sottovento, con il fumo che viene verso di lui",
      "Esattamente sopra le fiamme puntando verso la punta",
      "Sopravvento rispetto al focolare, dirigendo il getto alla base delle fiamme con movimento a ventaglio"
    ],
    "answer": 2,
    "explanation": "Operare sopravvento protegge da calore e fumi; il getto va diretto alla base delle fiamme dalle più vicine alle più lontane."
  },
  {
    "id": 122,
    "sheet": 9,
    "module": 4,
    "question": "Se due operatori intervengono contemporaneamente con due estintori sullo stesso focolaio, come devono disporsi?",
    "options": [
      "A distanza inferiore a 30 cm dalle fiamme",
      "Nella stessa direzione o formando un angolo non superiore a 90° rispetto al fuoco",
      "In posizione contrapposta (uno di fronte all'altro) per accerchiare il fuoco"
    ],
    "answer": 1,
    "explanation": "Mai operare in posizioni contrapposte: si rischia di proiettare fiamme, gas caldi o materiale incendiato verso il collega."
  },
  {
    "id": 123,
    "sheet": 9,
    "module": 4,
    "question": "Come bisogna avvicinarsi a un focolaio d'incendio in un locale chiuso per ridurre l'esposizione ai fumi caldi?",
    "options": [
      "Correndo in posizione eretta",
      "Assumendo la posizione più bassa possibile (e assicurandosi a una corda di recupero in caso di intervento al chiuso)",
      "Trattenendo il respiro senza DPI"
    ],
    "answer": 1,
    "explanation": "I fumi caldi stratificano verso l'alto; stare in basso migliora visibilità e respirabilità, ma occorrono DPI adeguati."
  },
  {
    "id": 124,
    "sheet": 9,
    "module": 4,
    "question": "Nell'utilizzo di un naspo antincendio (1 operatore), qual è la sequenza corretta prima di avanzare verso il fuoco?",
    "options": [
      "Staccare la lancia e svitare il raccordo",
      "Aprire il portello (≥ 170°), ruotare il naspo a compasso, aprire subito la saracinesca/rubinetto e avanzare con la tubazione sul lato destro fino a 5–6 m",
      "Srotolare prima tutta la tubazione a terra, tornare indietro e poi aprire la valvola"
    ],
    "answer": 1,
    "explanation": "Poiché la tubazione del naspo è semirigida, si mette in pressione subito aprendo la saracinesca e si avanza verso il fuoco."
  },
  {
    "id": 125,
    "sheet": 9,
    "module": 4,
    "question": "Nella manovra con cassetta idrante UNI 45 (1 operatore), quando va aperta la valvola di messa in pressione?",
    "options": [
      "Dopo aver disteso completamente la tubazione a terra, verificato l'assenza di spire/strozzature e controllato che la lancia sia chiusa",
      "Prima di estrarre la manichetta dalla cassetta",
      "Solo dopo aver aperto la lancia"
    ],
    "answer": 0,
    "explanation": "La manichetta flessibile UNI 45 va distesa interamente senza strozzature prima di aprire la valvola, altrimenti l'acqua non passa o crea colpi di frusta."
  },
  {
    "id": 126,
    "sheet": 9,
    "module": 4,
    "question": "Nella stesura di una condotta antincendio con manichette, quale raccordo deve essere sempre rivolto verso l'incendio?",
    "options": [
      "Il raccordo maschio (mentre il raccordo femmina va verso l'idrante; la lancia ha raccordo femmina)",
      "È indifferente perché tutti i raccordi sono uguali",
      "Il raccordo femmina verso l'incendio"
    ],
    "answer": 0,
    "explanation": "Regola pratica fondamentale: raccordo femmina all'idrante, raccordo maschio diretto verso l'incendio (dove si avvita la lancia che ha attacco femmina)."
  },
  {
    "id": 127,
    "sheet": 9,
    "module": 4,
    "question": "Quanti operatori servono per la manovra di un idrante soprasuolo o sottosuolo DN 70 e quale regola di sicurezza va rispettata?",
    "options": [
      "Almeno 4 operatori",
      "2 operatori che devono mantenersi sempre a vista",
      "1 solo operatore senza necessità di comunicazione"
    ],
    "answer": 1,
    "explanation": "Le manovre con idranti esterni DN 70 richiedono 2 operatori (uno alla lancia e uno alla valvola con chiave), sempre a vista tra loro."
  },
  {
    "id": 128,
    "sheet": 9,
    "module": 4,
    "question": "Come è protetto e segnalato un idrante SOTTOSUOLO secondo la dispensa CNVVF?",
    "options": [
      "Chiusino ovale con scritta 'IDRANTE' e cartello 'IDRANTE SOTTOSUOLO' con le distanze, posto a circa 2 m d'altezza",
      "Un semplice palo giallo piantato sull'erba",
      "Chiusino quadrato rosso privo di scritte"
    ],
    "answer": 0,
    "explanation": "L'idrante sottosuolo usa un chiusino ovale marcato 'IDRANTE' e cartello dedicato a ~2 m con indicazione delle distanze."
  },
  {
    "id": 129,
    "sheet": 9,
    "module": 4,
    "question": "Nella manovra dell'idrante sottosuolo, cosa si fa con la chiave a 'T' subito dopo aver tolto il tappo cieco e PRIMA di avvitare il collo di cigno?",
    "options": [
      "Si apre brevemente la saracinesca per far uscire un po' d'acqua (spurgare sedimenti) e la si richiude",
      "Si svita l'intero corpo in ghisa",
      "Si lascia la valvola aperta al massimo per tutto il tempo del montaggio"
    ],
    "answer": 0,
    "explanation": "Si batte il chiusino per liberare i sedimenti, poi si spurga brevemente l'acqua aprendo e richiudendo con chiave a T prima di inserire la colonnina."
  },
  {
    "id": 130,
    "sheet": 9,
    "module": 4,
    "question": "Qual è la funzione della 'valvola di non ritorno' (o valvola a clapet) nell'attacco di mandata per autopompa/motopompa UNI 70?",
    "options": [
      "Scaricare l'acqua in eccesso in caso di sovrappressione",
      "Collegare le manichette da 45 mm",
      "Permettere all'acqua immessa dall'autopompa VVF di fluire in una sola direzione (verso l'impianto)"
    ],
    "answer": 2,
    "explanation": "La valvola a clapet impedisce il reflusso; è invece la valvola di sicurezza in ottone che scarica eventuali sovrappressioni."
  },
  {
    "id": 131,
    "sheet": 9,
    "module": 4,
    "question": "A quale categoria di DPI appartengono tutti gli Apparecchi di Protezione delle Vie Respiratorie (APVR)?",
    "options": [
      "DPI di III Categoria (obbligo di formazione e addestramento specifico)",
      "DPI di I Categoria (rischi minori)",
      "DPI di II Categoria"
    ],
    "answer": 0,
    "explanation": "Tutti gli APVR sono DPI salvavita di III Categoria, per i quali è obbligatorio specifico addestramento (oltre a eventuale visita medica)."
  },
  {
    "id": 132,
    "sheet": 9,
    "module": 4,
    "question": "Quando è VIETATO utilizzare respiratori a filtro (maschere antipolvere, antigas o combinate) ed è obbligatorio un respiratore isolante?",
    "options": [
      "Solo quando la temperatura supera i 10 °C",
      "Quando si opera all'aperto con vento leggero",
      "Quando la percentuale di ossigeno nell'aria è inferiore al 17% (e in genere in ambienti chiusi con incendio), se i contaminanti superano i limiti o se sono inodori/sconosciuti"
    ],
    "answer": 2,
    "explanation": "I respiratori a filtro respirano l'aria ambiente purificandola: non forniscono ossigeno e non proteggono con O₂ < 17% o gas sconosciuti/inodori come il CO."
  },
  {
    "id": 133,
    "sheet": 9,
    "module": 4,
    "question": "Quale autonomia e quale principio caratterizzano un autorespiratore ISOLANTE A CIRCUITO CHIUSO?",
    "options": [
      "Circa 30 minuti; scarica l'aria espirata all'esterno",
      "Circa 4 ore (peso ~13 kg, ideale per gallerie); depura l'aria espirata da CO₂/vapore e reintegra O₂ da bombola 2 L a 200 bar",
      "Circa 10 minuti; usa un filtro a carbone attivo"
    ],
    "answer": 1,
    "explanation": "Il circuito chiuso ricicla l'aria espirata tramite cartuccia alcalina e aggiunge O₂ (1,5 L/min) raffreddandola, raggiungendo ~4 ore di autonomia."
  },
  {
    "id": 134,
    "sheet": 9,
    "module": 4,
    "question": "In un autorespiratore ISOLANTE A CIRCUITO APERTO, a quale pressione il gruppo riduttore (primo stadio) porta l'aria della bombola (200–300 bar)?",
    "options": [
      "A 0,1 bar",
      "A 100 bar direttamente in maschera",
      "A circa 6–9 bar (media pressione), prima di inviarla all'erogatore"
    ],
    "answer": 2,
    "explanation": "La bombola (es. 7 L a 200 o 300 bar) alimenta il riduttore di pressione che porta l'aria a 6–9 bar verso il gruppo maschera/erogatore a sovrappressione."
  },
  {
    "id": 135,
    "sheet": 9,
    "module": 4,
    "question": "Come è colorata per norma la calotta (ogiva) della bombola di aria compressa di un autorespiratore a circuito aperto?",
    "options": [
      "Interamente verde chiaro",
      "Interamente rossa",
      "A spicchi alternati bianchi e neri"
    ],
    "answer": 2,
    "explanation": "Secondo la dispensa (p. 114), la bombola di aria compressa ha la calotta verniciata a spicchi alternati bianchi e neri."
  },
  {
    "id": 136,
    "sheet": 10,
    "module": 1,
    "question": "TRABOCCHETTO — Confrontando benzina e carta: quale affermazione è VERA?",
    "options": [
      "La benzina ha sia temperatura di infiammabilità sia temperatura di autoaccensione più basse della carta",
      "La benzina ha una temperatura di infiammabilità bassissima (-20 °C), ma una temperatura di autoaccensione (250 °C) leggermente più alta della carta (230 °C)",
      "La carta ha una temperatura di infiammabilità di -18 °C"
    ],
    "answer": 1,
    "explanation": "Classico trabocchetto della dispensa (p. 10–11): Ti è definita solo per i liquidi; la benzina ha Ti = -20 °C ma Ta = 250 °C > carta (230 °C)!"
  },
  {
    "id": 137,
    "sheet": 10,
    "module": 1,
    "question": "TRABOCCHETTO — Un mozzicone di sigaretta acceso lasciato cadere in una pozza di liquido infiammabile:",
    "options": [
      "Difficilmente è efficace all'innesco e più facilmente si spegne una volta immerso nel liquido",
      "Provoca sempre un'esplosione immediata",
      "Porta il liquido istantaneamente alla temperatura di autoaccensione"
    ],
    "answer": 0,
    "explanation": "Come evidenzia la dispensa (p. 21), le sigarette accendono bene carta/imbottiture/schiume, ma cadendo in una pozza di liquido tendono a spegnersi."
  },
  {
    "id": 138,
    "sheet": 10,
    "module": 1,
    "question": "TRABOCCHETTO — Il vapore acqueo sviluppato durante un incendio è classificato come 'gas di combustione'?",
    "options": [
      "No, perché raffreddandosi al di sotto dei 100 °C torna allo stato liquido (condensa creando fumo bianco)",
      "Sì, perché resta gassoso anche a 15 °C",
      "Sì, ed è il più tossico tra i gas del sangue"
    ],
    "answer": 0,
    "explanation": "I gas di combustione restano gassosi anche raffreddati a 15 °C; il vapore acqueo condensa tornando liquido (p. 21–22)."
  },
  {
    "id": 139,
    "sheet": 10,
    "module": 1,
    "question": "TRABOCCHETTO — Cosa succede alla fiamma di un fornello a metano se la concentrazione di gas in aria supera il 15% (limite superiore di infiammabilità)?",
    "options": [
      "La fiamma si estingue per eccesso di combustibile (la miscela esce dal campo di infiammabilità)",
      "Si innesca automaticamente una detonazione",
      "La temperatura raddoppia istantaneamente"
    ],
    "answer": 0,
    "explanation": "Il campo di infiammabilità del metano è 5%–15%: sotto il 5% manca combustibile, sopra il 15% manca comburente e la fiamma si spegne."
  },
  {
    "id": 140,
    "sheet": 10,
    "module": 2,
    "question": "TRABOCCHETTO — Lo 'spazio scoperto' è automaticamente considerato un 'luogo sicuro' per l'esodo degli occupanti?",
    "options": [
      "Sì, sempre, perché è a cielo libero",
      "No: un distanziamento di 3,50 m non garantisce a priori l'assenza di effetti dell'incendio (fumi, irraggiamento, crolli)",
      "Sì, ma solo se coperto da una tettoia"
    ],
    "answer": 1,
    "explanation": "Dispensa p. 59: lo spazio scoperto NON è a priori un luogo sicuro, né è un compartimento antincendio; è un luogo sicuro temporaneo/sfogo fumi."
  },
  {
    "id": 141,
    "sheet": 10,
    "module": 2,
    "question": "TRABOCCHETTO — Se in un edificio non è prevista alcuna compartimentazione antincendio, cosa si intende per 'compartimento'?",
    "options": [
      "Ogni singola stanza è comunque un compartimento REI 60",
      "Si intende che il compartimento coincida con l'intera opera da costruzione",
      "Non esiste alcun compartimento"
    ],
    "answer": 1,
    "explanation": "Definizione esatta del D.M. 3/8/2015 (p. 58): in assenza di compartimentazione, il compartimento coincide con l'intera opera da costruzione."
  },
  {
    "id": 142,
    "sheet": 10,
    "module": 2,
    "question": "TRABOCCHETTO — In quale caso il campo di esplodibilità di una sostanza è più ampio del suo campo di infiammabilità?",
    "options": [
      "Solo per i combustibili solidi",
      "Sempre, per tutti i gas",
      "Di norma mai: il campo di esplodibilità è generalmente contenuto all'interno del campo di infiammabilità"
    ],
    "answer": 2,
    "explanation": "Dispensa p. 11: i limiti di esplodibilità inferiore e superiore sono rispettivamente maggiore e minore dei corrispondenti limiti di infiammabilità."
  },
  {
    "id": 143,
    "sheet": 10,
    "module": 2,
    "question": "TRABOCCHETTO — Un pilastro portante in cemento armato all'interno di un capannone aperto quale sigla di resistenza al fuoco può possedere al massimo?",
    "options": [
      "EI 60-Sa",
      "REI 120",
      "Solo R (es. R 60, R 120), perché travi e pilastri sono privi di funzione di compartimentazione"
    ],
    "answer": 2,
    "explanation": "Travi e pilastri sono elementi portanti ma non separanti: possono possedere solo il requisito R, mai E o I (p. 55)."
  },
  {
    "id": 144,
    "sheet": 10,
    "module": 2,
    "question": "TRABOCCHETTO — In quale situazione è ammesso il Livello di prestazione I per la resistenza al fuoco (nessun requisito strutturale)?",
    "options": [
      "In qualsiasi albergo a un solo piano",
      "Solo se non vi è presenza di occupanti (salvo breve/occasionale di addetti) e il collasso non causa conseguenze esterne su altri manufatti",
      "In tutte le scuole e gli uffici sotto i 200 m²"
    ],
    "answer": 1,
    "explanation": "Livello I (es. depositi automatizzati isolati) accetta il collasso solo senza occupanti e senza danni verso l'esterno (p. 56)."
  },
  {
    "id": 145,
    "sheet": 10,
    "module": 3,
    "question": "TRABOCCHETTO — Un impianto sprinkler standard in funzione garantisce sempre da solo l'estinzione completa dell'incendio?",
    "options": [
      "No: lo sprinkler standard esercita tipicamente un'azione di 'controllo'; le squadre verificano lo spegnimento completo prima di autorizzare la chiusura",
      "Sì, per cui le squadre d'emergenza devono chiudere subito la valvola appena suona l'allarme",
      "No, perché lo sprinkler funziona solo manualmente"
    ],
    "answer": 0,
    "explanation": "Dispensa p. 81: lo sprinkler standard è il sistema di controllo per antonomasia; solo le squadre di emergenza verificano l'estinzione e autorizzano la chiusura."
  },
  {
    "id": 146,
    "sheet": 10,
    "module": 3,
    "question": "TRABOCCHETTO — Gli estintori portatili con carica superiore a 6 kg (o 6 litri) sono sempre vietati?",
    "options": [
      "Sì, in assoluto su tutto il territorio nazionale",
      "No, sono obbligatori in tutti gli uffici pubblici",
      "No: sono utilizzabili solo negli ambienti destinati ad attività di processo non accessibili al pubblico (se non permanentemente accompagnato)"
    ],
    "answer": 2,
    "explanation": "Estratto D.M. 3/8/2015 (p. 82): carica max 6 kg/6 L; cariche superiori solo in aree di processo non accessibili al pubblico non accompagnato."
  },
  {
    "id": 147,
    "sheet": 10,
    "module": 3,
    "question": "TRABOCCHETTO — Per spegnere un incendio di solventi polari (es. acetone) quale estintore portatile tra questi è idoneo?",
    "options": [
      "Solo estintori per classe D",
      "Qualsiasi schiuma standard senza specifiche",
      "Estintori a polvere, estintori a CO₂ oppure idrici/schiuma specificamente marcati 'adatti anche per l'uso su solventi polari'"
    ],
    "answer": 2,
    "explanation": "Dispensa p. 83: polvere e CO₂ sono considerati idonei sui solventi polari; gli altri devono riportarlo espressamente in etichetta (o schiumogeni per alcoli)."
  },
  {
    "id": 148,
    "sheet": 10,
    "module": 3,
    "question": "TRABOCCHETTO — Negli ambienti con scarsa concentrazione di ossigeno o in presenza di CO₂ al 3%, cosa succede al respiro umano?",
    "options": [
      "Con il 3% di CO₂ la velocità e la profondità del respiro raddoppiano (+100%), facendo inalare ancora più gas tossici",
      "Non avviene alcuna variazione del respiro",
      "Il ritmo respiratorio rallenta del 50%"
    ],
    "answer": 0,
    "explanation": "Al 2% di CO₂ il respiro aumenta del 50%; al 3% raddoppia (+100%), aggravando rapidamente l'intossicazione da altri gas (p. 34)."
  },
  {
    "id": 149,
    "sheet": 10,
    "module": 4,
    "question": "TRABOCCHETTO — Su un incendio di liquido infiammabile contenuto in una vasca, come va diretto il getto dell'estintore?",
    "options": [
      "Con forza direttamente dentro il liquido per mescolarlo",
      "In modo radente/controllato affinché il getto non proietti il liquido incendiato fuori dal recipiente propagando il fuoco",
      "Esclusivamente dall'alto verso il basso a distanza di 20 cm"
    ],
    "answer": 1,
    "explanation": "Un getto violento diretto nel liquido farebbe tracimare e schizzare liquido infiammato all'esterno (p. 103)."
  },
  {
    "id": 150,
    "sheet": 10,
    "module": 4,
    "question": "TRABOCCHETTO — Durante l'uso di un autorespiratore a circuito aperto, cosa avvisa l'operatore che l'aria sta entrando in riserva?",
    "options": [
      "La maschera si stacca automaticamente dal viso",
      "La bombola cambia colore",
      "Entra in funzione un segnalatore acustico che emette un sibilo continuo"
    ],
    "answer": 2,
    "explanation": "Quando la pressione scende al valore di riserva, il segnalatore acustico emette un sibilo per avvertire di abbandonare subito la zona contaminata (p. 113)."
  }
];
