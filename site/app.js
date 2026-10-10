const STORAGE_KEY = "domi-product-preview-v1";
const APP_LANGUAGES = ["en", "ro", "es"];

const WORDS = {
  en: {
    tagline: "A home that fits.", searchTitle: "A home that fits.", searchSub: "Find a place that feels right. Meet people who make it feel like home.",
    where: "Where would you like to live?", destination: "Destination city", cityPlaceholder: "Berlin, New York, Chișinău...", search: "Search",
    promiseBrowse: "Start with the place", promiseBrowseText: "See homes and people before building a profile.", promisePrivate: "Your pace, your privacy", promisePrivateText: "Add only the details that help you find a fit.",
    footerLocal: "This preview keeps your choices on this device.", footerTagline: "Choose a place. Find your people. Build a home together.",
    language: "Language", back: "Back", next: "Continue", skip: "Skip for now", saveAnswer: "Save answer",
    chapterMove: "Find your place", chapterMoney: "Make the numbers work", chapterLife: "Life together", chapterMeet: "Meet your people",
    stepOf: "Question", optional: "Optional", backToResults: "Back to results", profileTitle: "Make your matches feel like you", profileSub: "A few thoughtful answers help us bring the right homes and people closer. Skip anything you are not ready to share.",
    finishTitle: "Your search is taking shape", finishSub: "Your answers can help sort homes and people by what matters to you. You can change them any time.",
    profileCta: "Personalize my results", editProfile: "Edit my answers", finish: "See my matches", profilePrivate: "Your answers stay on this device in this preview. Your private rent limit is never shown to other people.",
    home: "Homes", people: "People", together: "Together", saved: "Saved", you: "You",
    resultsHomes: "Homes in", resultsPeople: "People near", homesSub: "A place to start imagining what comes next.", peopleSub: "People looking for a home around the same place.",
    changePlace: "Change place", filters: "Filters", sort: "Sort", allHomes: "All homes", rooms: "Rooms", wholeHomes: "Whole homes", clearFilters: "Clear",
    previewData: "Example for preview", previewPeople: "Example profile", sourceUnknown: "Source details unavailable", observed: "Source checked", askRent: "Rent not listed", perMonth: "/ month",
    sourceTag: "Listing source", bills: "Bills", deposit: "Deposit", unknown: "Not provided", availability: "Availability", availabilityUnknown: "Needs confirmation", bedrooms: "Bedrooms", roomsCount: "Rooms", size: "Area", fit: "Fits your search",
    noHomes: "No homes shown for this city yet", noHomesText: "This preview has no home data for {place}. Try one of the cities with preview homes, or keep your search ready for new listings.", tryBerlin: "Explore Berlin listings", searchElse: "Change destination", firstSearch: "Search another city", locationRequired: "Enter a city to start your search.",
    noPeople: "No people shown here yet", noPeopleText: "There are no profiles in this preview for {place}. You can still explore your own match preferences.",
    tailorTitle: "A little more you, a better starting point", tailorText: "Answer a few optional questions to sort homes and potential housemates around your plans.",
    startQuestions: "Build my profile", homeDetails: "Home details", personDetails: "About", description: "About this place", costs: "What the price includes", fitDetails: "Why this may fit", notKnown: "Not confirmed", features: "Features", askHost: "Confirm with the host", listingInfo: "Listing information", openSource: "Open original source", hide: "Hide", save: "Save", savedLabel: "Saved", viewProfile: "View profile", connect: "Start an introduction",
    privateRent: "Personal rent share", wholeRent: "Whole home rent", moneyNoCurrency: "Choose a currency", costNote: "Bills and deposit are shown only when the listing provides them. No split is assumed.", sampleNote: "Preview records are clearly labelled. Unknown details stay unknown; confirm current availability and costs at the original source.",
    rankingTitle: "Your results learn from your choices", rankingText: "Your answers, saved places and hidden cards can adjust this order on this device. A missing detail never counts as a mismatch.", rankingChanged: "Your order changed because you saved or hid a result.", hidePrompt: "Why hide this?", hideTooCostly: "Over my budget", hideWrongArea: "Wrong area", hideWrongSpace: "Wrong kind of home", hideMissing: "Not enough information", hideOther: "Not for me", hiddenNote: "Hidden from your results on this device.", undo: "Undo",
    askIntro: "A good first hello starts with a little context.", introDraft: "Introduction draft", introName: "Your name", introMessage: "Your message", introPlaceholder: "Hi! I’m looking for a calm, friendly home in this area...", introPreview: "Review introduction", keepDraft: "Save draft here", draftSaved: "Saved as a local draft. Nothing was sent.", draftOnly: "This is a preview. Saving keeps the text on this device; it does not contact anyone.",
    createTogether: "Start a shared search", togetherTitle: "A home is better when the plan is shared", togetherSub: "Make a private shortlist and keep the next decisions in one place.",
    sharedShortlist: "Shared shortlist", roomPlan: "Room and cost plan", viewingPlan: "Viewing plan", nextStep: "Your next step",
    groupName: "Search name", groupNamePlaceholder: "Our first place", inviteNames: "People to invite", invitePlaceholder: "Add names, one per line", previewInvite: "Preview invitation", inviteOnly: "Invitation preview", createGroup: "Create shared search", groupCreated: "Shared search saved on this device.",
    members: "People in this search", owner: "You", invitePending: "Invitation not sent", participantUnknown: "No response yet", inviteWarning: "This preview never sends invitations. You can copy the text or share it yourself outside the app.", copyInvite: "Copy invitation text", copied: "Copied. You choose how to share it.",
    proposedPlan: "Room and contribution proposal", planExplain: "Add only amounts people have actually discussed. Each amount stays a proposal until that person confirms it.", wholeCost: "Total monthly rent", personAmount: "Proposed contribution", participant: "Person", addProposal: "Save proposal", proposalSaved: "Proposal saved here. No one has accepted it yet.", noSplit: "No split has been assumed.",
    viewingPlace: "Home to view", viewingDate: "Possible date", viewingTime: "Possible time", viewingPeople: "Who may join?", createViewing: "Save viewing plan", viewingSaved: "Viewing plan saved here. No request was sent to the host.", viewingOutcome: "Afterwards, what happened?", outcomeInterested: "We want to continue", outcomeQuestions: "We need more answers", outcomePass: "Not right for us", saveOutcome: "Save our outcome", outcomeSaved: "Your outcome is saved and can shape your next results.",
    groupNone: "Your shared search starts here", groupNoneText: "Create a shortlist you can discuss, collect open questions and plan a viewing together.",
    savedTitle: "Keep the good possibilities close", savedSub: "Saved homes and people stay together here.", noSaved: "Nothing saved yet", noSavedText: "Tap the heart on a home or save a person to build your shortlist.",
    youTitle: "Your search, in your hands", youSub: "See what you have shared with yourself, update your answers and manage this preview.", profileStatus: "Profile progress", answered: "answered", complete: "complete", unanswered: "Not answered", skippedStatus: "Skipped for now", changeAnswer: "Change", resume: "Continue my profile",
    privacy: "Privacy and language", localOnly: "Preview data stays on this device.", dataTitle: "Your data", dataText: "Export or clear answers, saved cards and shared-search drafts from this browser.", export: "Download my data", reset: "Clear this preview", resetConfirm: "Clear your saved answers, shortlists and drafts from this device?", clearEverything: "Clear everything", cancel: "Keep my data", resetDone: "This device is clear. Start a fresh search any time.",
    resultsOrder: "Homes are ordered using the details you chose. Missing listing details remain unknown.", homePlan: "Plan a viewing", noProposal: "No contribution proposals yet", noEvents: "No viewing plans yet", unknownPersonDetails: "Not shared", savePerson: "Save person", groupExists: "You already have a shared search here.",
    ariaClose: "Close", priceLabel: "Monthly rent", messageRequired: "Write a short introduction first.", placeNotFound: "Choose a destination city.", unknownCity: "We can keep this search ready even when the preview has no listings.", demoCity: "Preview city", amountHelp: "This amount is personal and stays private. It only helps sort rent you may be comfortable with.", maxHelp: "This is a private ceiling for your own search. It is never shown on your profile or to other people.", skipKeepsUnknown: "Skip leaves this detail unknown. You can fill it in later.", chooseOrSkip: "Choose an answer or skip this question to keep the detail unknown.", budgetConflict: "Your private maximum is below the rent you said feels comfortable. Adjust either amount before continuing.",
  },
  ro: {
    tagline: "O casă pe măsura ta.", searchTitle: "O casă pe măsura ta.", searchSub: "Găsește un loc potrivit. Cunoaște oameni care îl pot transforma în acasă.",
    where: "Unde ai vrea să locuiești?", destination: "Orașul dorit", cityPlaceholder: "Berlin, New York, Chișinău...", search: "Caută",
    promiseBrowse: "Începe cu locul", promiseBrowseText: "Vezi locuințele și oamenii înainte să-ți completezi profilul.", promisePrivate: "Ritmul și intimitatea ta", promisePrivateText: "Adaugă doar detaliile care te ajută să găsești o potrivire.",
    footerLocal: "În această previzualizare, alegerile rămân pe acest dispozitiv.", footerTagline: "Alege un loc. Găsește-ți oamenii. Construiți împreună un cămin.",
    language: "Limba", back: "Înapoi", next: "Continuă", skip: "Sar peste deocamdată", saveAnswer: "Salvează răspunsul",
    chapterMove: "Alege locul potrivit", chapterMoney: "Stabilește bugetul", chapterLife: "Viața împreună", chapterMeet: "Cunoaște-ți oamenii",
    stepOf: "Întrebarea", optional: "Opțional", backToResults: "Înapoi la rezultate", profileTitle: "Potriviri care ți se potrivesc", profileSub: "Câteva răspunsuri alese te ajută să găsești locuințe și oameni potriviți. Poți sări peste ce nu vrei să împărtășești.",
    finishTitle: "Căutarea ta prinde contur", finishSub: "Răspunsurile te pot ajuta să vezi mai întâi locuințele și oamenii care contează pentru tine. Le poți schimba oricând.",
    profileCta: "Personalizează rezultatele", editProfile: "Editează răspunsurile", finish: "Vezi potrivirile", profilePrivate: "În această previzualizare, răspunsurile rămân pe dispozitiv. Limita ta personală de chirie nu este afișată altor persoane.",
    home: "Locuințe", people: "Oameni", together: "Împreună", saved: "Salvate", you: "Tu",
    resultsHomes: "Locuințe în", resultsPeople: "Oameni aproape de", homesSub: "Un loc de la care poți începe să-ți imaginezi ce urmează.", peopleSub: "Oameni care caută o locuință în aceeași zonă.",
    changePlace: "Schimbă orașul", filters: "Filtre", sort: "Ordonează", allHomes: "Toate locuințele", rooms: "Camere", wholeHomes: "Locuințe întregi", clearFilters: "Șterge",
    previewData: "Exemplu de previzualizare", previewPeople: "Profil demonstrativ", sourceUnknown: "Sursa nu este disponibilă", observed: "Sursa verificată", askRent: "Chiria nu este afișată", perMonth: "/ lună",
    sourceTag: "Sursa anunțului", bills: "Utilități", deposit: "Garanție", unknown: "Necomunicat", availability: "Disponibilitate", availabilityUnknown: "Trebuie confirmată", bedrooms: "Dormitoare", roomsCount: "Camere", size: "Suprafață", fit: "Se potrivește căutării", 
    noHomes: "Momentan nu sunt locuințe pentru acest oraș", noHomesText: "Previzualizarea nu are date pentru {place}. Încearcă un oraș cu exemple sau păstrează căutarea pentru anunțuri noi.", tryBerlin: "Explorează locuințele din Berlin", searchElse: "Schimbă destinația", firstSearch: "Caută alt oraș", locationRequired: "Introdu un oraș pentru a începe căutarea.",
    noPeople: "Momentan nu sunt persoane în acest oraș", noPeopleText: "Previzualizarea nu are profiluri pentru {place}. Îți poți configura în continuare preferințele.",
    tailorTitle: "Mai mult despre tine, un început mai bun", tailorText: "Răspunde la câteva întrebări opționale ca să găsești locuințe și posibili colegi de apartament potriviți planurilor tale.",
    startQuestions: "Creează-mi profilul", homeDetails: "Detalii despre locuință", personDetails: "Despre", description: "Despre această locuință", costs: "Ce include prețul", fitDetails: "De ce s-ar putea potrivi", notKnown: "Neconfirmat", features: "Dotări", askHost: "Confirmă cu gazda", listingInfo: "Informații despre anunț", openSource: "Deschide sursa originală", hide: "Ascunde", save: "Salvează", savedLabel: "Salvat", viewProfile: "Vezi profilul", connect: "Scrie o introducere",
    privateRent: "Partea ta de chirie", wholeRent: "Chiria întregii locuințe", moneyNoCurrency: "Alege moneda", costNote: "Utilitățile și garanția apar doar dacă sunt menționate în anunț. Nu presupunem cum se împarte costul.", sampleNote: "Exemplele sunt marcate clar. Detaliile lipsă rămân necunoscute; confirmă disponibilitatea și costurile la sursa originală.",
    rankingTitle: "Alegerile tale îți ordonează rezultatele", rankingText: "Răspunsurile și anunțurile salvate sau ascunse pot schimba ordinea pe acest dispozitiv. O informație lipsă nu înseamnă o incompatibilitate.", rankingChanged: "Ordinea s-a schimbat după ce ai salvat sau ai ascuns un rezultat.", hidePrompt: "De ce vrei să ascunzi anunțul?", hideTooCostly: "Depășește bugetul", hideWrongArea: "Altă zonă", hideWrongSpace: "Alt tip de locuință", hideMissing: "Lipsesc informații", hideOther: "Nu mi se potrivește", hiddenNote: "Ascuns din rezultate pe acest dispozitiv.", undo: "Anulează",
    askIntro: "O primă conversație bună începe cu puțin context.", introDraft: "Ciornă de prezentare", introName: "Numele tău", introMessage: "Mesajul tău", introPlaceholder: "Bună! Caut o locuință liniștită și prietenoasă în această zonă...", introPreview: "Verifică mesajul", keepDraft: "Salvează ciorna aici", draftSaved: "Ciorna a fost salvată pe acest dispozitiv. Nu a fost trimisă.", draftOnly: "Aceasta este o previzualizare. Ciorna rămâne pe dispozitiv și nu contactează pe nimeni.",
    createTogether: "Începeți o căutare împreună", togetherTitle: "E mai ușor să alegi o locuință când planul e comun", togetherSub: "Creați o listă privată și păstrați deciziile următoare într-un singur loc.",
    sharedShortlist: "Listă comună", roomPlan: "Plan pentru cameră și costuri", viewingPlan: "Planificați o vizionare", nextStep: "Pasul următor",
    groupName: "Numele căutării", groupNamePlaceholder: "Prima noastră locuință", inviteNames: "Pe cine inviți", invitePlaceholder: "Adaugă câte un nume pe rând", previewInvite: "Previzualizează invitația", inviteOnly: "Doar previzualizarea invitației", createGroup: "Creează căutarea comună", groupCreated: "Căutarea comună a fost salvată pe dispozitiv.",
    members: "Persoane în această căutare", owner: "Tu", invitePending: "Invitația nu a fost trimisă", participantUnknown: "Încă nu a răspuns", inviteWarning: "Această previzualizare nu trimite invitații. Poți copia textul și îl poți trimite tu în afara aplicației.", copyInvite: "Copiază textul invitației", copied: "Text copiat. Tu alegi cum îl trimiți.",
    proposedPlan: "Propunere de cameră și contribuții", planExplain: "Adaugă doar sume discutate efectiv. Fiecare contribuție rămâne o propunere până o confirmă persoana respectivă.", wholeCost: "Chiria lunară totală", personAmount: "Contribuție propusă", participant: "Persoană", addProposal: "Salvează propunerea", proposalSaved: "Propunerea e salvată aici. Nimeni nu a acceptat-o încă.", noSplit: "Nu presupunem cum se împarte chiria.",
    viewingPlace: "Locuința de vizitat", viewingDate: "Dată posibilă", viewingTime: "Oră posibilă", viewingPeople: "Cine ar putea veni?", createViewing: "Salvează planul de vizionare", viewingSaved: "Planul a fost salvat aici. Gazdei nu i-a fost trimisă nicio cerere.", viewingOutcome: "Ce s-a întâmplat după vizionare?", outcomeInterested: "Vrem să continuăm", outcomeQuestions: "Avem nevoie de răspunsuri", outcomePass: "Nu ni se potrivește", saveOutcome: "Salvează concluzia", outcomeSaved: "Concluzia poate influența rezultatele următoare.",
    groupNone: "Căutarea comună începe aici", groupNoneText: "Creați o listă, adunați întrebările rămase și planificați împreună o vizionare.",
    savedTitle: "Păstrează aproape opțiunile bune", savedSub: "Locuințele și persoanele salvate rămân aici.", noSaved: "N-ai salvat nimic încă", noSavedText: "Apasă pe inimă la o locuință sau salvează un profil pentru a începe lista.",
    youTitle: "Căutarea ta, în mâinile tale", youSub: "Vezi ce ai notat, schimbă răspunsurile și gestionează previzualizarea.", profileStatus: "Progresul profilului", answered: "cu răspuns", complete: "complet", unanswered: "Nu ai răspuns", skippedStatus: "Sărit deocamdată", changeAnswer: "Schimbă", resume: "Continuă profilul",
    privacy: "Intimitate și limbă", localOnly: "Datele rămân pe acest dispozitiv în previzualizare.", dataTitle: "Datele tale", dataText: "Descarcă sau șterge răspunsurile, lista salvată și ciornele din acest browser.", export: "Descarcă datele mele", reset: "Șterge previzualizarea", resetConfirm: "Ștergi de pe acest dispozitiv răspunsurile, listele și ciornele salvate?", clearEverything: "Șterge tot", cancel: "Păstrează datele", resetDone: "Datele de pe dispozitiv au fost șterse. Poți începe o căutare nouă.",
    resultsOrder: "Locuințele sunt ordonate după criteriile alese. Detaliile necomunicate rămân necunoscute.", homePlan: "Planifică o vizionare", noProposal: "Încă nu există contribuții propuse", noEvents: "Încă nu există planuri de vizionare", unknownPersonDetails: "Nu a fost comunicat", savePerson: "Salvează persoana", groupExists: "Ai deja o căutare comună aici.",
    ariaClose: "Închide", priceLabel: "Chirie lunară", messageRequired: "Scrie mai întâi o scurtă prezentare.", placeNotFound: "Alege un oraș ca destinație.", unknownCity: "Putem păstra căutarea chiar dacă previzualizarea nu are anunțuri pentru orașul ales.", demoCity: "Oraș demonstrativ", amountHelp: "Suma este personală și rămâne privată. Ajută doar la ordonarea chiriilor potrivite pentru tine.", maxHelp: "Aceasta este o limită personală. Nu apare în profil și nu este arătată altor persoane.", skipKeepsUnknown: "Dacă sari peste întrebare, detaliul rămâne necunoscut și îl poți completa mai târziu.", chooseOrSkip: "Alege un răspuns sau sari peste întrebare pentru ca informația să rămână necunoscută.", budgetConflict: "Limita ta privată este mai mică decât chiria pe care ai spus că o consideri confortabilă. Ajustează una dintre sume înainte să continui.",
  },
  es: {
    tagline: "Un hogar que encaja contigo.", searchTitle: "Un hogar que encaja contigo.", searchSub: "Encuentra un lugar que te guste. Conoce a quienes pueden convertirlo en hogar.",
    where: "¿Dónde te gustaría vivir?", destination: "Ciudad de destino", cityPlaceholder: "Berlín, Nueva York, Chisináu...", search: "Buscar",
    promiseBrowse: "Empieza por el lugar", promiseBrowseText: "Explora viviendas y personas antes de crear un perfil.", promisePrivate: "A tu ritmo y con privacidad", promisePrivateText: "Añade solo lo que te ayude a encontrar una buena opción.",
    footerLocal: "En esta vista previa, tus decisiones se guardan en este dispositivo.", footerTagline: "Elige un lugar. Encuentra a tu gente. Cread un hogar juntos.",
    language: "Idioma", back: "Atrás", next: "Continuar", skip: "Omitir por ahora", saveAnswer: "Guardar respuesta",
    chapterMove: "Encuentra tu lugar", chapterMoney: "Cuadra las cuentas", chapterLife: "La convivencia", chapterMeet: "Conoce a tu gente",
    stepOf: "Pregunta", optional: "Opcional", backToResults: "Volver a resultados", profileTitle: "Encuentra opciones que encajen contigo", profileSub: "Con unas pocas respuestas podemos acercarte a viviendas y personas compatibles. Omite lo que aún no quieras compartir.",
    finishTitle: "Tu búsqueda va tomando forma", finishSub: "Tus respuestas pueden ordenar las viviendas y personas según lo que te importa. Puedes cambiarlas cuando quieras.",
    profileCta: "Personalizar resultados", editProfile: "Editar respuestas", finish: "Ver mis opciones", profilePrivate: "En esta vista previa, tus respuestas se quedan en el dispositivo. Tu límite personal de alquiler nunca se muestra a otras personas.",
    home: "Viviendas", people: "Personas", together: "En grupo", saved: "Guardado", you: "Tú",
    resultsHomes: "Viviendas en", resultsPeople: "Personas cerca de", homesSub: "Un lugar para empezar a imaginar lo que viene.", peopleSub: "Personas que buscan vivienda por la misma zona.",
    changePlace: "Cambiar ciudad", filters: "Filtros", sort: "Ordenar", allHomes: "Todas", rooms: "Habitaciones", wholeHomes: "Viviendas enteras", clearFilters: "Quitar",
    previewData: "Ejemplo de vista previa", previewPeople: "Perfil de ejemplo", sourceUnknown: "No hay datos de la fuente", observed: "Fuente consultada", askRent: "Alquiler sin indicar", perMonth: "/ mes",
    sourceTag: "Fuente del anuncio", bills: "Suministros", deposit: "Fianza", unknown: "Sin información", availability: "Disponibilidad", availabilityUnknown: "Hay que confirmarla", bedrooms: "Dormitorios", roomsCount: "Habitaciones", size: "Superficie", fit: "Encaja con tu búsqueda",
    noHomes: "Aún no hay viviendas para esta ciudad", noHomesText: "Esta vista previa no tiene datos de {place}. Prueba una ciudad con ejemplos o deja preparada tu búsqueda para nuevos anuncios.", tryBerlin: "Explorar viviendas de Berlín", searchElse: "Cambiar destino", firstSearch: "Buscar otra ciudad", locationRequired: "Escribe una ciudad para empezar a buscar.",
    noPeople: "Aún no hay personas en esta ciudad", noPeopleText: "Esta vista previa no tiene perfiles para {place}. Puedes configurar tus preferencias igualmente.",
    tailorTitle: "Cuéntanos un poco más para empezar mejor", tailorText: "Responde algunas preguntas opcionales para ordenar viviendas y posibles compañeros de piso según tus planes.",
    startQuestions: "Crear mi perfil", homeDetails: "Detalles de la vivienda", personDetails: "Sobre esta persona", description: "Sobre este lugar", costs: "Qué incluye el precio", fitDetails: "Por qué podría encajar", notKnown: "Sin confirmar", features: "Características", askHost: "Confirma con el anfitrión", listingInfo: "Información del anuncio", openSource: "Abrir fuente original", hide: "Ocultar", save: "Guardar", savedLabel: "Guardado", viewProfile: "Ver perfil", connect: "Preparar una presentación",
    privateRent: "Tu parte del alquiler", wholeRent: "Alquiler de toda la vivienda", moneyNoCurrency: "Elige moneda", costNote: "Los suministros y la fianza solo aparecen cuando el anuncio los indica. No suponemos cómo se reparte el coste.", sampleNote: "Los ejemplos están identificados. Los datos desconocidos siguen así; confirma disponibilidad y costes en la fuente original.",
    rankingTitle: "Tus elecciones ordenan tus resultados", rankingText: "Tus respuestas, viviendas guardadas y anuncios ocultos pueden cambiar el orden en este dispositivo. Un dato desconocido no cuenta como incompatibilidad.", rankingChanged: "El orden cambió porque guardaste u ocultaste un resultado.", hidePrompt: "¿Por qué ocultas este anuncio?", hideTooCostly: "Supera mi presupuesto", hideWrongArea: "Otra zona", hideWrongSpace: "Otro tipo de vivienda", hideMissing: "Faltan datos", hideOther: "No es para mí", hiddenNote: "Oculto en este dispositivo.", undo: "Deshacer",
    askIntro: "Un buen primer saludo empieza con un poco de contexto.", introDraft: "Borrador de presentación", introName: "Tu nombre", introMessage: "Tu mensaje", introPlaceholder: "¡Hola! Busco un hogar tranquilo y agradable por esta zona...", introPreview: "Revisar presentación", keepDraft: "Guardar borrador aquí", draftSaved: "Borrador guardado en este dispositivo. No se envió.", draftOnly: "Esta es una vista previa. El borrador se queda en este dispositivo y no contacta con nadie.",
    createTogether: "Empezar una búsqueda compartida", togetherTitle: "Encontrar casa es mejor cuando el plan es de todos", togetherSub: "Cread una lista privada y reunid aquí las próximas decisiones.",
    sharedShortlist: "Lista compartida", roomPlan: "Plan de habitación y gastos", viewingPlan: "Plan de visita", nextStep: "Siguiente paso",
    groupName: "Nombre de la búsqueda", groupNamePlaceholder: "Nuestro primer hogar", inviteNames: "Personas a invitar", invitePlaceholder: "Escribe un nombre en cada línea", previewInvite: "Vista previa de invitación", inviteOnly: "Solo vista previa", createGroup: "Crear búsqueda compartida", groupCreated: "Búsqueda compartida guardada en este dispositivo.",
    members: "Personas en esta búsqueda", owner: "Tú", invitePending: "Invitación sin enviar", participantUnknown: "Aún no ha respondido", inviteWarning: "Esta vista previa no envía invitaciones. Puedes copiar el texto y compartirlo fuera de la aplicación.", copyInvite: "Copiar texto de invitación", copied: "Texto copiado. Tú decides cómo compartirlo.",
    proposedPlan: "Propuesta de habitación y aportes", planExplain: "Añade solo cantidades que hayáis comentado. Cada aporte es una propuesta hasta que esa persona lo confirme.", wholeCost: "Alquiler mensual total", personAmount: "Aporte propuesto", participant: "Persona", addProposal: "Guardar propuesta", proposalSaved: "Propuesta guardada aquí. Nadie la ha aceptado todavía.", noSplit: "No suponemos cómo se divide el alquiler.",
    viewingPlace: "Vivienda para visitar", viewingDate: "Fecha posible", viewingTime: "Hora posible", viewingPeople: "¿Quién podría acompañarte?", createViewing: "Guardar plan de visita", viewingSaved: "Plan guardado aquí. No se envió ninguna solicitud al anfitrión.", viewingOutcome: "Después, ¿qué ocurrió?", outcomeInterested: "Queremos seguir", outcomeQuestions: "Necesitamos más respuestas", outcomePass: "No es para nosotros", saveOutcome: "Guardar conclusión", outcomeSaved: "La conclusión puede ayudar a ordenar tus próximos resultados.",
    groupNone: "Tu búsqueda compartida empieza aquí", groupNoneText: "Cread una lista, reunid las preguntas pendientes y planificad juntos una visita.",
    savedTitle: "Ten a mano las opciones que te gustan", savedSub: "Aquí se guardan las viviendas y personas que te interesan.", noSaved: "Todavía no has guardado nada", noSavedText: "Pulsa el corazón de una vivienda o guarda un perfil para crear tu lista.",
    youTitle: "Tú decides sobre tu búsqueda", youSub: "Revisa tus notas, cambia tus respuestas y gestiona esta vista previa.", profileStatus: "Progreso del perfil", answered: "respondidas", complete: "completo", unanswered: "Sin responder", skippedStatus: "Omitida por ahora", changeAnswer: "Cambiar", resume: "Continuar perfil",
    privacy: "Privacidad e idioma", localOnly: "En esta vista previa, los datos se quedan en este dispositivo.", dataTitle: "Tus datos", dataText: "Descarga o borra las respuestas, la lista guardada y los borradores de este navegador.", export: "Descargar mis datos", reset: "Borrar esta vista previa", resetConfirm: "¿Quieres borrar de este dispositivo las respuestas, listas y borradores guardados?", clearEverything: "Borrar todo", cancel: "Conservar mis datos", resetDone: "Se han borrado los datos de este dispositivo. Puedes empezar otra búsqueda.",
    resultsOrder: "Las viviendas se ordenan con los datos que elegiste. Lo que el anuncio no informa sigue siendo desconocido.", homePlan: "Planificar una visita", noProposal: "Aún no hay aportes propuestos", noEvents: "Aún no hay planes de visita", unknownPersonDetails: "Sin compartir", savePerson: "Guardar persona", groupExists: "Ya tienes una búsqueda compartida aquí.",
    ariaClose: "Cerrar", priceLabel: "Alquiler mensual", messageRequired: "Escribe primero una breve presentación.", placeNotFound: "Elige una ciudad de destino.", unknownCity: "Podemos dejar preparada tu búsqueda aunque no haya anuncios en la vista previa.", demoCity: "Ciudad de ejemplo", amountHelp: "Esta cantidad es personal y privada. Solo ayuda a ordenar los alquileres que te pueden resultar cómodos.", maxHelp: "Este es tu límite personal. No aparece en tu perfil ni se muestra a otras personas.", skipKeepsUnknown: "Si omites esta pregunta, el dato queda desconocido. Puedes completarlo más adelante.", chooseOrSkip: "Elige una respuesta u omite la pregunta para dejar este dato sin definir.", budgetConflict: "Tu límite privado es inferior al alquiler que dijiste que te resulta cómodo. Ajusta uno de los importes para continuar.",
  },
};

const STRINGS = (en, ro, es) => ({ en, ro, es });
const localeIndex = () => Math.max(0, APP_LANGUAGES.indexOf(state.locale));
const tr = (key) => WORDS[state.locale]?.[key] ?? WORDS.en[key] ?? key;
const localized = (value) => typeof value === "string" ? value : (value?.[state.locale] ?? value?.en ?? "");

const iconPaths = {
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.7"/><path d="m16 16 4.5 4.5"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  together: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-1a6 6 0 0 1 12 0v1ZM15 15a5 5 0 0 1 6 4v1h-3"/>',
  heart: '<path d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  back: '<path d="m15 18-6-6 6-6M9 12h12"/>',
  pencil: '<path d="m12 20 9-9-4-4-9 9-1 5 5-1Z"/><path d="m14 7 4 4"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  sparkle: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  euro: '<path d="M19 5a7 7 0 0 0-4-1c-4 0-7 3.6-7 8s3 8 7 8a7 7 0 0 0 4-1M5 10h9M5 14h8"/>',
  sliders: '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  leaf: '<path d="M20 4C10 4 5 8 5 14c0 3 2 5 5 5 6 0 10-5 10-15Z"/><path d="M4 21c2-5 6-8 11-11"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  moon: '<path d="M20.9 13A8.9 8.9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  external: '<path d="M14 3h7v7m0-7-9 9"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-12.8 7.4L3 21l2.1-5.2A8.5 8.5 0 1 1 21 11.5Z"/>',
  bed: '<path d="M2 4v17m20-7v7M2 17h20M6 8h5a3 3 0 0 1 3 3v3H6Z"/><path d="M14 11h4a4 4 0 0 1 4 4v2"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2"/>',
  dog: '<path d="M10 5 8 3 5 5 3 4v6l2 2v5a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-5l2-2V4l-3 1-2-2-2 2Z"/><path d="M9 10h.01M15 10h.01M10 15h4"/>',
  key: '<circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 8-8 2 2-2 2 2 2-3 3-2-2-2 2"/>',
  broom: '<path d="m15 4 5 5M4 20l8-8m-2 10 12-12-6-6L4 18l-2 4Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  stairs: '<path d="M3 20h4v-4h4v-4h4V8h4V4"/>',
  plant: '<path d="M12 22v-9m0 2C4 15 4 8 4 8s7-1 8 5m0-3c0-6 8-7 8-7s0 8-8 8"/>',
  sparkleHouse: '<path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"/><path d="m19 2 .6 1.5L21 4l-1.4.5L19 6l-.5-1.5L17 4l1.5-.5L19 2Z"/>',
};

function icon(name, size = 20, extra = "") {
  const path = iconPaths[name] ?? iconPaths.sparkle;
  return `<svg aria-hidden="true" class="${extra}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

const question = (id, chapter, type, prompt, description, helper, options = []) => ({ id, chapter, type, prompt, description, helper, options });
const option = (value, iconName, title, description = STRINGS("", "", "")) => ({ value, icon: iconName, title, description });

const STEPS = [
  question("goal", 0, "single", STRINGS("What are you hoping to find?", "Ce speri să găsești?", "¿Qué estás buscando?"), STRINGS("This gives your search a direction. You can still explore everything.", "Răspunsul dă o direcție căutării. Poți explora în continuare toate opțiunile.", "La respuesta da una dirección a tu búsqueda. Puedes explorar todas las opciones."), STRINGS("We use this to bring the most relevant next step closer.", "Folosim răspunsul pentru a-ți arăta mai întâi ce te ajută.", "Usamos esta respuesta para acercarte el siguiente paso más útil."), [
    option("room", "bed", STRINGS("A room for me", "O cameră pentru mine", "Una habitación para mí"), STRINGS("I’d like to join a household.", "Aș vrea să mă alătur unei gospodării.", "Quiero unirme a un hogar compartido.")),
    option("home", "home", STRINGS("A home to share", "O locuință de împărțit", "Una vivienda para compartir"), STRINGS("Find a home and build a household around it.", "Găsește o locuință și construiți împreună o gospodărie.", "Encuentra una vivienda y cread juntos un hogar compartido.")),
    option("people", "users", STRINGS("People to live with", "Oameni cu care să locuiesc", "Personas para convivir"), STRINGS("Let’s find the people first.", "Hai să găsim mai întâi oamenii.", "Busquemos primero a las personas.")),
    option("household", "building", STRINGS("A whole home for my household", "O locuință întreagă pentru ai mei", "Una vivienda entera para mi hogar"), STRINGS("We’re moving together as a household.", "Ne mutăm împreună, ca o gospodărie.", "Nos mudamos juntos como unidad familiar.")),
    option("offer", "key", STRINGS("I have a room or home to offer", "Ofer o cameră sau o locuință", "Tengo una habitación o vivienda que ofrecer"), STRINGS("Find people who may fit the home I can offer.", "Găsește oameni cărora li s-ar potrivi locuința oferită.", "Encuentra personas a quienes les pueda encajar la vivienda.")),
  ]),
  question("space", 0, "single", STRINGS("What kind of space feels right?", "Ce tip de spațiu ți s-ar potrivi?", "¿Qué tipo de espacio te encaja?"), STRINGS("Your own room, a shared room or no preference yet.", "Cameră proprie, cameră împărțită sau încă nu știi.", "Habitación propia, compartida o aún sin preferencia."), STRINGS("This shapes which homes appear first. We won’t rule out a home when the detail is missing.", "Răspunsul ordonează locuințele. Nu excludem o locuință dacă informația lipsește.", "La respuesta ordena las viviendas. No descartamos una si falta este dato."), [
    option("private", "key", STRINGS("My own room", "Camera mea", "Mi propia habitación"), STRINGS("A private bedroom in a shared home.", "Un dormitor privat într-o locuință comună.", "Un dormitorio privado en una vivienda compartida.")),
    option("shared", "users", STRINGS("A room I share", "O cameră împărțită", "Una habitación compartida"), STRINGS("I’m open to sharing the bedroom too.", "Sunt deschis(ă) să împart și dormitorul.", "También puedo compartir el dormitorio.")),
    option("any", "sparkle", STRINGS("I’m open", "Sunt flexibil(ă)", "Tengo flexibilidad"), STRINGS("Show me different possibilities.", "Arată-mi mai multe variante.", "Quiero ver distintas opciones.")),
  ]),
  question("party", 0, "single", STRINGS("How many people are moving with you?", "Câte persoane se mută împreună cu tine?", "¿Cuántas personas se mudan contigo?"), STRINGS("Count everyone who has agreed to search or move together.", "Numără toate persoanele care au acceptat să caute sau să se mute împreună.", "Cuenta a quienes han acordado buscar o mudarse contigo."), STRINGS("This is your known moving group. People you hope to meet later are counted in the next question.", "Acesta este grupul care se mută acum. Oamenii pe care vei cunoaște mai târziu se includ la întrebarea următoare.", "Este el grupo que se muda contigo ahora. Las personas que esperas conocer después se cuentan en la siguiente pregunta."), [
    option("solo", "person", STRINGS("Just me", "Doar eu", "Solo yo")),
    option("with-one", "users", STRINGS("Me and one other person", "Eu și încă o persoană", "Yo y otra persona")),
    option("with-two", "users", STRINGS("Me and two others", "Eu și încă două persoane", "Yo y otras dos personas")),
    option("with-three", "home", STRINGS("Me and three or more others", "Eu și cel puțin încă trei persoane", "Yo y tres personas o más")),
    option("unsure", "sparkle", STRINGS("We’re still deciding", "Încă ne hotărâm", "Aún lo estamos decidiendo")),
  ]),
  question("householdSize", 0, "size", STRINGS("How many people would you like in the home?", "Câte persoane ai vrea să locuiască în casă?", "¿Cuántas personas te gustaría que vivieran en la casa?"), STRINGS("Think about everyone after possible housemates join, including your moving group.", "Include grupul vostru și viitorii colegi de apartament.", "Incluye a tu grupo y a las personas que podrían unirse más adelante."), STRINGS("This is your preferred total household size. It stays separate from the number already moving with you.", "Acesta este numărul total preferat. Este separat de persoanele care se mută deja cu tine.", "Es el tamaño total que prefieres para el hogar, separado del grupo que ya se muda contigo."), [
    option("any", "sparkle", STRINGS("No fixed number", "Fără un număr fix", "Sin una cifra fija")),
  ]),
  question("moveDate", 0, "single", STRINGS("When would you like to move?", "Când ai vrea să te muți?", "¿Cuándo te gustaría mudarte?"), STRINGS("A clear time window helps avoid places that are available too early or too late.", "O perioadă orientativă ajută să evităm locuințe disponibile prea devreme sau prea târziu.", "Un plazo aproximado evita viviendas disponibles demasiado pronto o tarde."), STRINGS("An estimate is enough. Your exact date is not shown publicly.", "E suficientă o estimare. Data exactă nu va fi afișată public.", "Basta con una estimación. Tu fecha exacta no se mostrará públicamente."), [
    option("asap", "sparkle", STRINGS("As soon as I can", "Cât mai curând", "En cuanto pueda")),
    option("month", "calendar", STRINGS("In the next month", "În următoarea lună", "Durante el próximo mes")),
    option("later", "calendar", STRINGS("In 1–3 months", "În 1–3 luni", "En 1–3 meses")),
    option("flexible", "clock", STRINGS("I’m flexible", "Sunt flexibil(ă)", "Tengo flexibilidad")),
  ]),
  question("stayLength", 0, "single", STRINGS("How long do you hope to stay?", "Cât timp ai vrea să rămâi?", "¿Cuánto tiempo esperas quedarte?"), STRINGS("This helps align expectations about a room or a lease.", "Așa potrivim așteptările pentru cameră sau durata chiriei.", "Así podemos alinear las expectativas sobre la habitación o el alquiler."), STRINGS("You can choose unsure. We won’t turn an estimate into a commitment.", "Poți alege „nu știu”. O estimare nu este un angajament.", "Puedes elegir «no lo sé». Una estimación no es un compromiso."), [
    option("under-six", "clock", STRINGS("A few months", "Câteva luni", "Unos meses")),
    option("year", "calendar", STRINGS("Around a year", "Aproximativ un an", "Aproximadamente un año")),
    option("long", "home", STRINGS("A few years", "Câțiva ani", "Varios años")),
    option("unsure", "sparkle", STRINGS("I’m not sure yet", "Încă nu știu", "Aún no lo sé")),
  ]),
  question("comfortableRent", 1, "money", STRINGS("What monthly rent feels comfortable?", "Ce chirie lunară ți se pare confortabilă?", "¿Qué alquiler mensual te resulta cómodo?"), STRINGS("A comfortable range helps put homes in a useful order.", "Un buget confortabil ajută la ordonarea locuințelor.", "Un importe cómodo ayuda a ordenar las viviendas."), STRINGS("This private preference helps sort options. It is not shown on your profile.", "Preferința rămâne privată și te ajută să ordonezi opțiunile. Nu apare în profil.", "Esta preferencia es privada. Ayuda a ordenar las opciones y no aparece en tu perfil.")),
  question("privateCeiling", 1, "money", STRINGS("Is there a rent amount you do not want to go over?", "Există o sumă de chirie peste care nu vrei să treci?", "¿Hay un importe de alquiler que no quieres superar?"), STRINGS("You can keep a firm ceiling for your own search.", "Poți stabili o limită personală pentru căutarea ta.", "Puedes establecer un límite para tu búsqueda personal."), STRINGS("Only use it if seeing a higher rent would be unhelpful. This stays private.", "Completează doar dacă nu vrei să vezi chirii mai mari. Limita rămâne privată.", "Complétalo solo si prefieres no ver alquileres más altos. El límite es privado.")),
  question("areas", 2, "text", STRINGS("Which areas should we keep close?", "Ce zone ai vrea să fie aproape?", "¿Qué zonas quieres tener cerca?"), STRINGS("Add a few neighbourhoods, a landmark or a station.", "Adaugă câteva cartiere, repere sau stații.", "Añade barrios, lugares conocidos o estaciones."), STRINGS("We’ll look for useful distance clues. An unanswered commute or address stays unknown.", "Căutăm indicii de proximitate. O adresă sau navetă neprecizată rămâne necunoscută.", "Buscaremos referencias de distancia. Una dirección o trayecto sin indicar queda desconocido.")),
  question("quiet", 2, "single", STRINGS("When does a home feel calm to you?", "Când ți se pare liniștită o locuință?", "¿Cuándo te resulta tranquilo un hogar?"), STRINGS("Quiet expectations can make shared living easier.", "Așteptările despre liniște pot face conviețuirea mai ușoară.", "Hablar de la tranquilidad facilita la convivencia."), STRINGS("This is a conversation prompt, not a compatibility rule.", "Răspunsul deschide o discuție, nu decide compatibilitatea.", "La respuesta sirve para conversar, no para decidir la compatibilidad."), [
    option("mornings", "sun", STRINGS("Mostly mornings", "Mai ales dimineața", "Sobre todo por la mañana"), STRINGS("I like early hours to be peaceful.", "Prefer liniște în primele ore.", "Prefiero tranquilidad a primera hora.")),
    option("evenings", "moon", STRINGS("Mostly evenings", "Mai ales seara", "Sobre todo por la tarde"), STRINGS("I wind down later in the day.", "Îmi place să mă liniștesc spre seară.", "Prefiero un ambiente tranquilo al final del día.")),
    option("flexible", "clock", STRINGS("No strict preference", "Nu am o preferință strictă", "Sin preferencia fija"), STRINGS("I can talk through house routines.", "Pot discuta regulile casei.", "Puedo hablar sobre las rutinas de casa.")),
  ]),
  question("workHome", 2, "single", STRINGS("How often will you work or study from home?", "Cât de des vei lucra sau învăța de acasă?", "¿Con qué frecuencia trabajarás o estudiarás desde casa?"), STRINGS("This can help you compare space and daytime routines.", "Răspunsul ajută la compararea spațiului și a programului de zi.", "Ayuda a comparar el espacio y las rutinas durante el día."), STRINGS("We use this as a practical discussion point, not as a score against someone.", "Este un subiect practic de discuție, nu un punctaj pentru sau împotriva cuiva.", "Es un tema práctico para hablar, no una puntuación sobre nadie."), [
    option("often", "briefcase", STRINGS("Most days", "În majoritatea zilelor", "La mayoría de los días")),
    option("sometimes", "briefcase", STRINGS("Some days", "Unele zile", "Algunos días")),
    option("rarely", "building", STRINGS("Rarely", "Rareori", "Rara vez")),
    option("unsure", "sparkle", STRINGS("Not sure yet", "Încă nu știu", "Aún no lo sé")),
  ]),
  question("smoking", 2, "single", STRINGS("What smoking arrangement works for you at home?", "Ce regulă despre fumat ți s-ar potrivi acasă?", "¿Qué acuerdo sobre fumar te encaja en casa?"), STRINGS("Agreeing on this early helps everyone feel at ease.", "O înțelegere clară de la început îi ajută pe toți să se simtă confortabil.", "Hablarlo desde el principio ayuda a que todos estén cómodos."), STRINGS("This preference is only used for the search and conversation. It is not a public identity label.", "Preferința ajută la căutare și discuție. Nu este o etichetă publică.", "Esta preferencia ayuda a buscar y conversar. No es una etiqueta pública."), [
    option("smoke-ok", "leaf", STRINGS("Smoking indoors is okay", "Fumatul în interior e în regulă", "Se puede fumar dentro")),
    option("smoke-outside", "plant", STRINGS("Smoking outside only", "Fumatul doar afară", "Solo se fuma fuera")),
    option("smoke-free", "sparkle", STRINGS("I prefer a smoke-free home", "Prefer o locuință fără fum", "Prefiero un hogar sin humo")),
    option("smoke-unsure", "message", STRINGS("I’d rather discuss it", "Aș prefera să discutăm", "Prefiero hablarlo")),
  ]),
  question("pets", 2, "single", STRINGS("What should a future home know about pets?", "Ce ar trebui să știe o viitoare locuință despre animale?", "¿Qué debería saber una futura vivienda sobre mascotas?"), STRINGS("Tell us if a pet is part of your move or an important home preference.", "Spune-ne dacă ai un animal de companie sau dacă acest detaliu contează pentru locuință.", "Cuéntanos si te mudas con una mascota o si este detalle importa en tu vivienda."), STRINGS("We won’t assume pets are allowed. Check each home’s stated policy.", "Nu presupunem că animalele sunt acceptate. Verifică regula fiecărei locuințe.", "No suponemos que se admitan mascotas. Comprueba la norma de cada vivienda."), [
    option("pet-with-me", "dog", STRINGS("I’m moving with a pet", "Mă mut cu un animal", "Me mudo con una mascota")),
    option("pet-welcome", "dog", STRINGS("I’d like pets to be welcome", "Aș vrea să fie acceptate animalele", "Me gustaría que se aceptaran mascotas")),
    option("no-pet", "home", STRINGS("No pet in my plans", "Nu am animal în plan", "No tengo mascota en mis planes")),
    option("pet-discuss", "message", STRINGS("It depends on the home", "Depinde de locuință", "Depende de la vivienda")),
  ]),
  question("guests", 2, "single", STRINGS("How do you like to handle guests?", "Cum preferi să primiți musafiri?", "¿Cómo prefieres recibir visitas?"), STRINGS("A shared idea of guests can prevent awkward surprises.", "O înțelegere comună despre musafiri previne neînțelegerile.", "Acordar cómo recibir visitas evita sorpresas incómodas."), STRINGS("This helps start a respectful house conversation. It does not filter people by itself.", "Ajută la o discuție deschisă și nu exclude pe nimeni automat.", "Ayuda a hablarlo con respeto. No excluye a nadie automáticamente."), [
    option("guests-often", "users", STRINGS("Friends often visit", "Vin des prietenii", "Recibo visitas a menudo")),
    option("guests-sometimes", "message", STRINGS("Sometimes, with a heads-up", "Uneori, cu un anunț înainte", "A veces, avisando antes")),
    option("guests-rarely", "home", STRINGS("I keep home time quiet", "Prefer liniștea acasă", "Prefiero tranquilidad en casa")),
    option("guests-discuss", "sparkle", STRINGS("Let’s agree together", "Stabilim împreună", "Lo acordamos entre todos")),
  ]),
  question("cleaning", 2, "single", STRINGS("What feels fair for keeping a home clean?", "Ce ți se pare corect pentru curățenia casei?", "¿Qué te parece justo para mantener limpia la casa?"), STRINGS("Shared routines work best when everyone knows what to expect.", "Rutinele comune merg mai bine când toți știu ce au de făcut.", "Las rutinas compartidas funcionan mejor si todos saben qué esperar."), STRINGS("This is about an agreement you can discuss, not a cleanliness score.", "Este un acord de discutat, nu un punctaj despre curățenie.", "Es un acuerdo para conversar, no una puntuación de limpieza."), [
    option("clean-rotate", "calendar", STRINGS("Rotate shared chores", "Împărțim treburile pe rând", "Turnarnos las tareas")),
    option("clean-own", "key", STRINGS("Each person handles their own", "Fiecare se ocupă de ale sale", "Cada uno se ocupa de lo suyo")),
    option("clean-schedule", "broom", STRINGS("A simple weekly plan", "Un plan săptămânal simplu", "Un plan semanal sencillo")),
    option("clean-discuss", "message", STRINGS("Let’s talk about it", "Discutăm împreună", "Lo hablamos")),
  ]),
  question("languages", 2, "multi", STRINGS("Which languages would you enjoy speaking at home?", "În ce limbi ți-ar plăcea să vorbiți acasă?", "¿Qué idiomas te gustaría hablar en casa?"), STRINGS("Choose one or more. This can help a group feel welcoming.", "Poți alege una sau mai multe. Asta poate face o locuință mai primitoare.", "Elige uno o varios. Puede ayudar a que todos se sientan cómodos."), STRINGS("Language is a communication preference, never a measure of belonging.", "Limba este o preferință de comunicare, nu o măsură a apartenenței.", "El idioma es una preferencia de comunicación, nunca una medida de pertenencia."), [
    option("en", "globe", STRINGS("English", "Engleză", "Inglés")), option("ro", "globe", STRINGS("Romanian", "Română", "Rumano")),
    option("es", "globe", STRINGS("Spanish", "Spaniolă", "Español")), option("fr", "globe", STRINGS("French", "Franceză", "Francés")),
    option("de", "globe", STRINGS("German", "Germană", "Alemán")), option("other", "globe", STRINGS("Another language", "Altă limbă", "Otro idioma")),
  ]),
  question("mustHaves", 2, "multi", STRINGS("What would make a place work better for you?", "Ce ar face o locuință mai potrivită pentru tine?", "¿Qué haría que una vivienda funcionara mejor para ti?"), STRINGS("Select practical features that matter in your daily life.", "Alege dotările practice importante în viața de zi cu zi.", "Elige características prácticas que importan en tu día a día."), STRINGS("These are your priorities. Each listing still needs to confirm what it actually offers.", "Acestea sunt prioritățile tale. Fiecare anunț trebuie să confirme dotările.", "Estas son tus prioridades. Cada anuncio debe confirmar sus características."), [
    option("step-free", "stairs", STRINGS("Step-free access", "Acces fără trepte", "Acceso sin escalones")),
    option("elevator", "building", STRINGS("An elevator", "Lift", "Ascensor")),
    option("workspace", "briefcase", STRINGS("Space to work", "Spațiu de lucru", "Espacio para trabajar")),
    option("outdoor", "plant", STRINGS("Outdoor space", "Spațiu în aer liber", "Espacio al aire libre")),
    option("transit", "pin", STRINGS("Close to transit", "Aproape de transport", "Cerca del transporte")),
    option("storage", "home", STRINGS("Useful storage", "Spațiu de depozitare", "Espacio de almacenaje")),
  ]),
  question("intro", 3, "intro", STRINGS("How would you introduce yourself?", "Cum te-ai prezenta?", "¿Cómo te presentarías?"), STRINGS("A little about your plans helps people start a real conversation.", "Câteva cuvinte despre planurile tale ajută la o conversație firească.", "Unas palabras sobre tus planes ayudan a empezar una conversación."), STRINGS("Write only what you want a potential housemate to read. You can leave it blank for now.", "Scrie doar ce ai vrea să citească un posibil coleg. Poți lăsa gol deocamdată.", "Comparte solo lo que te gustaría que leyera una posible persona conviviente. Puedes dejarlo en blanco.")),
  question("visibility", 3, "single", STRINGS("Who can see your introduction?", "Cine îți poate vedea prezentarea?", "¿Quién puede ver tu presentación?"), STRINGS("You control when a profile becomes visible.", "Tu decizi când devine vizibil profilul.", "Tú decides cuándo hacer visible tu perfil."), STRINGS("This preview never publishes a profile. In a real service, sharing would need a separate confirmation.", "Această previzualizare nu publică profilul. În produsul real, afișarea ar necesita confirmarea ta.", "Esta vista previa no publica tu perfil. En el servicio real, compartirlo requeriría tu confirmación."), [
    option("private", "shield", STRINGS("Keep it private", "Păstrează-l privat", "Mantener privado"), STRINGS("Only I can see it for now.", "Deocamdată îl văd doar eu.", "Por ahora solo lo veo yo.")),
    option("intro-only", "message", STRINGS("Share when I start a conversation", "Îl împărtășesc când încep o discuție", "Compartirlo al iniciar una conversación"), STRINGS("I’ll decide each time.", "Decid de fiecare dată.", "Decidiré cada vez.")),
    option("visible", "eye", STRINGS("Show me to nearby searches", "Afișează-mă în căutările din zonă", "Mostrarme en búsquedas cercanas"), STRINGS("I’m ready for my profile to be discoverable.", "Sunt gata ca profilul să poată fi găsit.", "Quiero que puedan encontrar mi perfil.")),
  ]),
];

const PREVIEW_HOMES = [
  { id: "preview-berlin-01", title: "A light-filled room near the park", city: "Berlin", country: "Germany", countryCode: "DE", currency: "EUR", monthlyRent: 690, rentBasis: "room", rooms: 3, bedrooms: null, availability: "unknown", bills: null, deposit: null, features: ["Daylight", "Transit nearby"], summary: "A fictional room example for exploring the Domi flow.", isExample: true, imageIsIllustration: true },
  { id: "preview-new-york-01", title: "A shared home with room to settle in", city: "New York", country: "United States", countryCode: "US", currency: "USD", monthlyRent: 1180, rentBasis: "room", rooms: 4, bedrooms: null, availability: "unknown", bills: null, deposit: null, features: ["Shared kitchen", "Transit nearby"], summary: "A fictional room example for exploring the Domi flow.", isExample: true, imageIsIllustration: true },
  { id: "preview-london-01", title: "A calm home on a leafy street", city: "London", country: "United Kingdom", countryCode: "GB", currency: "GBP", monthlyRent: 880, rentBasis: "room", rooms: 3, bedrooms: null, availability: "unknown", bills: null, deposit: null, features: ["Shared garden", "Quiet street"], summary: "A fictional room example for exploring the Domi flow.", isExample: true, imageIsIllustration: true },
];

const PREVIEW_PEOPLE = [
  { id: "preview-person-01", name: "Alex", city: "Berlin", initials: "A", avatarColor: "#eaf2df", bio: "Looking for a friendly place with a shared kitchen and a little room to unwind.", moveIn: "Flexible", stay: "Around a year", budget: null, currency: null, languages: ["English", "German"], quiet: "Evenings", guests: "Sometimes, with a heads-up", cleaning: "A simple weekly plan", smoking: "Smoke-free home", pets: null, isExample: true },
  { id: "preview-person-02", name: "Sam", city: "New York", initials: "S", avatarColor: "#f7e8d9", bio: "I value a considerate home, clear plans and sharing the everyday things fairly.", moveIn: "Next month", stay: "A few years", budget: null, currency: null, languages: ["English", "Spanish"], quiet: "Mornings", guests: "Let’s agree together", cleaning: "Rotate shared chores", smoking: null, pets: "No pet in my plans", isExample: true },
  { id: "preview-person-03", name: "Mika", city: "London", initials: "M", avatarColor: "#e8efff", bio: "Looking for a home that feels welcoming and easy to talk things through in.", moveIn: "Flexible", stay: null, budget: null, currency: null, languages: ["English"], quiet: null, guests: null, cleaning: "Let’s talk about it", smoking: null, pets: null, isExample: true },
];

function initialLocale() {
  const browserPreferences = [...(navigator.languages ?? []), navigator.language ?? "en"].map((value) => value.toLowerCase());
  const match = browserPreferences.find((value) => value.startsWith("ro") || value.startsWith("es") || value.startsWith("en"));
  return match?.startsWith("ro") ? "ro" : match?.startsWith("es") ? "es" : "en";
}

function readSavedState() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (!value || typeof value !== "object") return null;
    return value;
  } catch {
    return null;
  }
}

const savedState = readSavedState();
const state = {
  locale: APP_LANGUAGES.includes(savedState?.locale) ? savedState.locale : initialLocale(),
  view: ["welcome", "questionnaire", "results", "detail-home", "detail-person", "together", "saved", "you"].includes(savedState?.view) ? savedState.view : "welcome",
  tab: ["homes", "people", "together", "saved", "you"].includes(savedState?.tab) ? savedState.tab : "homes",
  place: typeof savedState?.place === "string" ? savedState.place : "",
  answers: savedState?.answers && typeof savedState.answers === "object" ? savedState.answers : {},
  skipped: Array.isArray(savedState?.skipped) ? savedState.skipped : [],
  step: Number.isInteger(savedState?.step) ? Math.max(0, Math.min(STEPS.length - 1, savedState.step)) : 0,
  savedHomes: Array.isArray(savedState?.savedHomes) ? savedState.savedHomes : [],
  savedPeople: Array.isArray(savedState?.savedPeople) ? savedState.savedPeople : [],
  hiddenHomes: savedState?.hiddenHomes && typeof savedState.hiddenHomes === "object" ? savedState.hiddenHomes : {},
  hiddenPeople: savedState?.hiddenPeople && typeof savedState.hiddenPeople === "object" ? savedState.hiddenPeople : {},
  signals: Array.isArray(savedState?.signals) ? savedState.signals : [],
  activeHome: null,
  activePerson: null,
  filterType: "all",
  expandedHomes: false,
  expandedPeople: false,
  group: savedState?.group ?? null,
  inviteDraft: savedState?.inviteDraft ?? null,
  introDrafts: Array.isArray(savedState?.introDrafts) ? savedState.introDrafts : [],
  roomProposals: Array.isArray(savedState?.roomProposals) ? savedState.roomProposals : [],
  viewingPlans: Array.isArray(savedState?.viewingPlans) ? savedState.viewingPlans : [],
  modal: null,
  toastTimer: null,
  error: "",
};

function persist() {
  const saved = {
    locale: state.locale, view: state.view, tab: state.tab, place: state.place,
    answers: state.answers, skipped: state.skipped, step: state.step,
    savedHomes: state.savedHomes, savedPeople: state.savedPeople,
    hiddenHomes: state.hiddenHomes, hiddenPeople: state.hiddenPeople,
    signals: state.signals, group: state.group, inviteDraft: state.inviteDraft,
    introDrafts: state.introDrafts, roomProposals: state.roomProposals, viewingPlans: state.viewingPlans,
  };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(saved)); } catch { /* Keep the current session usable if storage is unavailable. */ }
}

let homes = PREVIEW_HOMES;
let people = PREVIEW_PEOPLE;
let dataInfo = { preview: true, sourceCount: 0, publishedObservations: 0, observedDate: null };

function normalizeHome(item, index) {
  const rent = item.monthlyRent ?? item.price;
  const nullableNumber = (value) => value == null || value === "" || !Number.isFinite(Number(value)) ? null : Number(value);
  return {
    ...item,
    id: String(item.id ?? `home-${index + 1}`),
    title: item.title || item.name || tr("homeDetails"),
    city: item.city || "",
    country: item.country || "",
    countryCode: item.countryCode || "",
    currency: String(item.currency || "").toUpperCase(),
    monthlyRent: nullableNumber(rent),
    rentBasis: item.rentBasis || "unknown",
    rooms: nullableNumber(item.rooms),
    bedrooms: nullableNumber(item.bedrooms),
    availability: item.availability || "unknown",
    bills: item.bills ?? null,
    deposit: item.deposit ?? null,
    features: Array.isArray(item.features) ? item.features : [],
    summary: item.summary || "",
    image: Array.isArray(item.images) ? item.images[0] : item.image,
    isExample: Boolean(item.isExample),
  };
}

function normalizePerson(item, index) {
  return {
    ...item,
    id: String(item.id ?? `person-${index + 1}`),
    name: item.name || tr("people"),
    city: item.city || "",
    initials: item.initials || String(item.name || "?").trim().slice(0, 1).toUpperCase(),
    bio: item.bio || "",
    languages: Array.isArray(item.languages) ? item.languages : [],
    isExample: Boolean(item.isExample),
  };
}

async function loadProductData() {
  try {
    const module = await import("/data.js");
    if (Array.isArray(module.homes)) homes = module.homes.map(normalizeHome);
    if (Array.isArray(module.people)) people = module.people.map(normalizePerson);
    if (module.dataInfo && typeof module.dataInfo === "object") dataInfo = module.dataInfo;
  } catch {
    // The small, labelled local examples keep the review usable without a data file.
  }
}

const app = document.querySelector("#app");
const toastElement = document.querySelector("#toast");
const mascots = {
  welcome: "/brand/mascot-waving.png", search: "/brand/mascot-search-glow-platform.png",
  move: "/brand/mascot-house-in-hand-glow.png", money: "/brand/mascot-gentle-shrug.png",
  life: "/brand/mascot-open-arms.png", meet: "/brand/mascot-roommate-group-glow.png",
  calendar: "/brand/mascot-calendar-dates.png", help: "/brand/mascot-reassuring-hand-on-chest.png",
  home: "/brand/mascot-home-celebration-glow.png", searchGlow: "/brand/mascot-search-glow.png",
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function localizedValue(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) return value[state.locale] ?? value.en ?? "";
  return value ?? "";
}

function currencyForPlace(place) {
  const normalized = String(place).toLocaleLowerCase();
  if (/chișinău|chisinau|bălți|balti|moldova|durlești|durlesti/.test(normalized)) return "MDL";
  if (/new york|chicago|united states|usa|brooklyn|queens/.test(normalized)) return "USD";
  if (/london|united kingdom|england/.test(normalized)) return "GBP";
  if (/bucharest|bucurești|romania|românia/.test(normalized)) return "RON";
  if (/tokyo|japan/.test(normalized)) return "JPY";
  if (/prague|czechia|czech republic/.test(normalized)) return "CZK";
  if (/warsaw|poland/.test(normalized)) return "PLN";
  if (/stockholm|sweden/.test(normalized)) return "SEK";
  if (/copenhagen|denmark/.test(normalized)) return "DKK";
  if (/berlin|paris|madrid|lisbon|amsterdam|brussels|dublin|vienna|helsinki|rome|milan/.test(normalized)) return "EUR";
  return "";
}

function canonicalCity(value) {
  const key = placeKey(value).replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, " ").trim();
  const aliases = {
    "bucuresti": "bucharest", "bucharest": "bucharest", "nyc": "new york", "new york city": "new york",
    "chisinau": "chisinau", "kishinev": "chisinau", "durlesti": "durlesti", "balti": "balti",
  };
  return aliases[key] ?? key;
}

function money(value, currency, options = {}) {
  if (value == null || value === "") return tr("askRent");
  const amount = Number(value);
  if (!Number.isFinite(amount) || !currency) return tr("askRent");
  try {
    return new Intl.NumberFormat(state.locale, { style: "currency", currency, currencyDisplay: "code", minimumFractionDigits: 0, ...options }).format(amount);
  } catch { return `${currency} ${amount}`; }
}

function destinationCurrency() {
  return homes.find((home) => homeCityMatch(home, state.place))?.currency || currencyForPlace(state.place);
}

function humanValue(value) {
  if (value == null || value === "" || (Array.isArray(value) && value.length === 0)) return tr("unanswered");
  if (Array.isArray(value)) return value.map((part) => stepLabel(part)).join(", ");
  if (typeof value === "object" && "amount" in value) return value.amount != null && value.amount !== "" ? money(value.amount, value.currency) : tr("unanswered");
  if (typeof value === "string") return stepLabel(value);
  return String(value);
}

function stepLabel(value) {
  for (const step of STEPS) {
    const match = step.options?.find((item) => item.value === value);
    if (match) return localized(match.title);
  }
  const labels = {
    "under-six": ["A few months", "Câteva luni", "Unos meses"], year: ["Around a year", "Aproximativ un an", "Aproximadamente un año"],
    long: ["A few years", "Câțiva ani", "Varios años"], asap: ["As soon as I can", "Cât mai curând", "En cuanto pueda"],
    month: ["In the next month", "În următoarea lună", "Durante el próximo mes"], later: ["In 1–3 months", "În 1–3 luni", "En 1–3 meses"],
    flexible: ["I’m flexible", "Sunt flexibil(ă)", "Tengo flexibilidad"], unsure: ["Not sure yet", "Încă nu știu", "Aún no lo sé"],
    often: ["Most days", "În majoritatea zilelor", "La mayoría de los días"], sometimes: ["Some days", "Unele zile", "Algunos días"], rarely: ["Rarely", "Rareori", "Rara vez"],
  };
  return labels[value]?.[localeIndex()] ?? String(value);
}

function visibleSteps() {
  const goal = state.answers.goal;
  return STEPS.filter((step) => {
    if (step.id === "space" && goal === "offer") return false;
    if (step.id === "householdSize" && goal === "household") return false;
    if (goal === "household" && ["intro", "visibility"].includes(step.id)) return false;
    if (["comfortableRent", "privateCeiling"].includes(step.id) && goal === "offer") return false;
    return true;
  });
}

function currentStep() { return visibleSteps()[state.step] ?? visibleSteps().at(-1); }

function partySizeFromAnswer() {
  return ({ solo: 1, "with-one": 2, "with-two": 3, "with-three": 4 })[state.answers.party] ?? null;
}

function setAnswer(key, value) {
  if (value == null || value === "" || (Array.isArray(value) && value.length === 0)) delete state.answers[key];
  else state.answers[key] = value;
  state.skipped = state.skipped.filter((item) => item !== key);
  persist();
}

function answerComplete(step) {
  const value = state.answers[step.id];
  if (step.type === "money") return value?.amount !== "" && value?.amount != null && Number.isFinite(Number(value.amount)) && Boolean(value?.currency);
  if (step.type === "intro") return typeof value === "string" && value.trim().length > 0;
  if (step.id === "householdSize") return value === "any" || (value !== "" && value != null && Number.isInteger(Number(value)) && Number(value) >= Math.max(1, partySizeFromAnswer() ?? 1));
  if (step.id === "space" && state.answers.goal === "household") return value === "any" || (value !== "" && value != null && Number.isInteger(Number(value)) && Number(value) >= 0);
  return value != null && value !== "" && (!Array.isArray(value) || value.length > 0);
}

function budgetIsContradictory() {
  const comfortable = state.answers.comfortableRent;
  const ceiling = state.answers.privateCeiling;
  if (!comfortable || !ceiling || comfortable.currency !== ceiling.currency) return false;
  if (comfortable.amount === "" || comfortable.amount == null || ceiling.amount === "" || ceiling.amount == null) return false;
  const comfortableAmount = Number(comfortable.amount);
  const ceilingAmount = Number(ceiling.amount);
  return Number.isFinite(comfortableAmount) && Number.isFinite(ceilingAmount) && ceilingAmount < comfortableAmount;
}

function profileProgress() {
  const steps = visibleSteps();
  return Math.round((steps.filter((step) => answerComplete(step)).length / steps.length) * 100);
}

function currencyChoices() {
  const preferred = destinationCurrency();
  const list = [...new Set([preferred, "EUR", "USD", "GBP", "MDL", "RON", "CAD", "AUD"].filter(Boolean))];
  return list;
}

function loadMoneyAnswer(step) {
  const saved = state.answers[step.id] ?? {};
  const relatedCurrency = step?.id === "privateCeiling" ? state.answers.comfortableRent?.currency : "";
  return { amount: saved.amount ?? "", currency: saved.currency || relatedCurrency || destinationCurrency() || "EUR" };
}

function placeKey(value) {
  return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLocaleLowerCase();
}

function homeCityMatch(home, place) {
  const parts = String(place ?? "").split(",").map((part) => part.trim()).filter(Boolean);
  const query = canonicalCity(parts[0] ?? "");
  if (!query) return false;
  const city = canonicalCity(home.city);
  if (city !== query) return false;
  if (parts.length > 1) {
    const requestedCountry = placeKey(parts.slice(1).join(" "));
    const actualCountry = placeKey(`${home.country ?? ""} ${home.countryCode ?? ""}`);
    if (requestedCountry && !actualCountry.includes(requestedCountry) && !requestedCountry.includes(actualCountry)) return false;
  }
  return true;
}

function personCityMatch(person, place) {
  return homeCityMatch(person, place);
}

function searchRentBasis() {
  return state.answers.goal === "household" ? "whole-home" : "room";
}

function sortVisibleHomes(place) {
  let rows = homes.filter((home) => homeCityMatch(home, place));
  if (state.filterType !== "all") rows = rows.filter((home) => home.rentBasis === state.filterType);
  rows = rows.filter((home) => !state.hiddenHomes[home.id]);
  const answers = state.answers;
  const minimumBedrooms = answers.space;
  if (answers.goal === "household" && minimumBedrooms !== "" && minimumBedrooms != null && minimumBedrooms !== "any" && Number.isInteger(Number(minimumBedrooms))) {
    rows = rows.filter(home => home.bedrooms == null || home.bedrooms >= Number(minimumBedrooms));
  }
  const comfortable = answers.comfortableRent;
  const ceiling = answers.privateCeiling;
  const budgetBasis = searchRentBasis();
  if (ceiling?.amount !== "" && ceiling?.amount != null && Number.isFinite(Number(ceiling.amount))) {
    rows = rows.filter((home) => home.rentBasis !== budgetBasis || home.currency !== ceiling.currency || home.monthlyRent == null || home.monthlyRent <= Number(ceiling.amount));
  }
  const preferredCurrency = comfortable?.currency;
  rows.sort((a, b) => scoreHome(b, comfortable, preferredCurrency, budgetBasis) - scoreHome(a, comfortable, preferredCurrency, budgetBasis));
  return rows;
}

function scoreHome(home, comfortable, preferredCurrency, budgetBasis) {
  let score = 0;
  if (state.answers.space && home.rentBasis === budgetBasis) score += 8;
  if (comfortable?.amount !== "" && comfortable?.amount != null && home.rentBasis === budgetBasis && home.currency === preferredCurrency && home.monthlyRent != null) {
    const ratio = home.monthlyRent / Number(comfortable.amount);
    if (Number(comfortable.amount) === 0) score -= home.monthlyRent === 0 ? 0 : 8;
    else if (ratio <= 1) score += 12 - ratio * 4;
    else score -= Math.min(8, (ratio - 1) * 7);
  }
  for (const signal of state.signals) {
    if (signal.kind === "hide" && signal.itemId === home.id) score -= 40;
    if (signal.kind === "save" && signal.itemType === "home" && signal.itemId !== home.id) {
      const savedHome = homes.find((item) => item.id === signal.itemId);
      if (savedHome?.rentBasis === home.rentBasis) score += 1;
      const likedFeatures = savedHome?.features ?? [];
      score += home.features.filter((feature) => likedFeatures.includes(feature)).length * 2;
    }
  }
  return score;
}

function sortVisiblePeople(place) {
  const rows = people.filter((person) => personCityMatch(person, place) && !state.hiddenPeople[person.id]);
  return rows.sort((a, b) => scorePerson(b) - scorePerson(a));
}

function scorePerson(person) {
  let score = 0;
  const answer = state.answers;
  if (answer.quiet && person.quiet && person.quiet.toLowerCase().includes(answer.quiet.replace("mornings", "morning").replace("evenings", "evening"))) score += 2;
  if (answer.cleaning && person.cleaning && person.cleaning.toLowerCase().includes(answer.cleaning.split("-").at(-1))) score += 2;
  if (answer.moveDate && person.moveIn && /flexible/i.test(person.moveIn) && answer.moveDate === "flexible") score += 1;
  for (const key of ["smoking", "pets", "guests", "workHome"]) {
    if (answer[key] && person[key] && !["discuss", "unknown", "flexible"].includes(person[key]) && answer[key] === person[key]) score += 2;
  }
  const languageCode = value => ({ english: "en", romanian: "ro", română: "ro", spanish: "es", español: "es", french: "fr", german: "de" })[String(value).toLowerCase()] ?? String(value).toLowerCase();
  const spoken = new Set((person.languages ?? []).map(languageCode));
  if (Array.isArray(answer.languages)) score += answer.languages.filter(value => spoken.has(languageCode(value))).length * 2;
  if (person.isExample) score += 0;
  for (const signal of state.signals) {
    if (signal.kind === "hide" && signal.itemType === "person" && signal.itemId === person.id) score -= 40;
    if (signal.kind === "save" && signal.itemType === "person" && signal.itemId !== person.id) {
      const savedPerson = people.find(item => item.id === signal.itemId);
      for (const key of ["quiet", "cleaning", "smoking", "pets", "guests", "workHome"]) {
        if (savedPerson?.[key] && !["discuss", "unknown", "flexible"].includes(savedPerson[key]) && savedPerson[key] === person[key]) score += 1;
      }
    }
  }
  return score;
}

function citySuggestions() {
  const unique = new Map();
  for (const item of [...homes, ...people]) {
    if (!item.city) continue;
    const key = `${placeKey(item.city)}|${placeKey(item.country)}`;
    if (!unique.has(key)) unique.set(key, `${item.city}${item.country ? `, ${item.country}` : ""}`);
  }
  return [...unique.values()];
}

function languagePicker() {
  const options = [["en", "English"], ["ro", "Română"], ["es", "Español"]]
    .map(([code, name]) => `<option value="${code}" ${state.locale === code ? "selected" : ""}>${name}</option>`).join("");
  return `<label class="language-wrap"><span class="sr-only">${escapeHtml(tr("language"))}</span><span class="language-globe">${icon("globe", 17)}</span><select class="language-select" data-action="language" aria-label="${escapeAttr(tr("language"))}">${options}</select></label>`;
}

function brandHeader() {
  const progress = state.view === "questionnaire";
  if (progress) {
    const steps = visibleSteps();
    const current = Math.min(state.step, steps.length - 1);
    const percentage = Math.round(((current + 1) / steps.length) * 100);
    return `<header class="topbar journey-topbar">
      <button class="icon-button" type="button" data-action="step-back" aria-label="${escapeAttr(tr("back"))}">${icon("back", 22)}</button>
      <button class="journey-exit quiet-link" type="button" data-action="leave-profile">${escapeHtml(tr("backToResults"))}</button>
      <div class="top-progress" role="progressbar" aria-label="${escapeAttr(tr("stepOf"))}" aria-valuemin="1" aria-valuemax="${steps.length}" aria-valuenow="${current + 1}">
        <div class="segment-track">${steps.map((_, index) => `<span class="progress-segment ${index <= current ? "done" : ""}"></span>`).join("")}</div>
        <div class="progress-copy"><span>${escapeHtml(tr("stepOf"))} ${current + 1} / ${steps.length}</span><span>${percentage}%</span></div>
      </div>
      ${languagePicker()}
    </header>`;
  }
  const showPlace = !["welcome", "questionnaire"].includes(state.view) && state.place;
  return `<header class="topbar">
    <a class="brand-home" href="/" data-action="brand-home" aria-label="Domi home"><img class="brand-symbol" src="/brand/logo.png" alt=""><img class="brand-wordmark" src="/brand/wordmark.png" alt="Domi"></a>
    ${showPlace ? `<button type="button" class="place-pill" data-action="change-place">${icon("pin", 16)}<span>${escapeHtml(state.place)}</span>${icon("pencil", 14)}</button>` : ""}
    ${languagePicker()}
  </header>`;
}

function footerLandscape() {
  return `<svg class="cityline" aria-hidden="true" viewBox="0 0 800 112" preserveAspectRatio="none"><path d="M0 112V75h35V47h26v65h17V66h29v46h20V55h20v57h19V79h33v33h13V59h21v53h17V75h33v37h20V37h18v75h21V61h34v51h19V71h24v41h18V48h24v64h20V78h35v34h18V61h26v51h19V31h20v81h23V69h36v43h18V49h26v63h43V68h33v44Z" fill="#a8bd90" opacity=".42"/><path d="M0 112V93h18V74h20v38h26V83h20v29h32V99h20v13h26V78h17v34h27V90h19v22h21V69h25v43h26V85h17v27h27V96h23v16h32V77h18v35h34V91h22v21h26V71h25v41h26V87h21v25h29V79h22v33h37V93h19v19h40V84h20v28h34V67h24v45h40V85h22v27h31Z" fill="#7f9b6c" opacity=".55"/></svg>`;
}

function welcomeScreen() {
  const options = citySuggestions().slice(0, 80).map((place) => `<option value="${escapeAttr(place)}"></option>`).join("");
  return `<main class="landing" id="main-content">
    <section class="hero-card" aria-labelledby="welcome-title">
      <div class="hero-copy">
        <h1 class="hero-title" id="welcome-title">${escapeHtml(tr("searchTitle"))}</h1>
        <p class="hero-subtitle">${escapeHtml(tr("where"))}</p>
      </div>
      <div class="hero-mascot-wrap" aria-hidden="true"><span class="hero-orbit one"></span><span class="hero-orbit two"></span><img class="hero-mascot" src="${mascots.welcome}" alt=""></div>
    </section>
    <form class="search-card" id="search-form" novalidate>
      <div class="search-field-group">
        <label class="field-label" for="destination-input">${escapeHtml(tr("destination"))}</label>
        <div class="search-input-wrap">${icon("pin", 20)}<input class="search-input" id="destination-input" name="place" list="city-options" value="${escapeAttr(state.place)}" placeholder="${escapeAttr(tr("cityPlaceholder"))}" autocomplete="address-level2" aria-describedby="search-error" required><datalist id="city-options">${options}</datalist></div>
      </div>
      <button class="primary-button search-button" type="submit">${escapeHtml(tr("search"))}${icon("arrow", 19)}</button>
      ${state.error ? `<p class="inline-error search-error" id="search-error" role="alert">${escapeHtml(state.error)}</p>` : `<span class="sr-only" id="search-error"></span>`}
    </form>
    ${footerLandscape()}
    <p class="landing-footer"><span>${escapeHtml(tr("footerLocal"))}</span><span aria-hidden="true">·</span><span>${escapeHtml(tr("promiseBrowseText"))}</span></p>
  </main>`;
}

function chapterTitle(step) {
  return [tr("chapterMove"), tr("chapterMoney"), tr("chapterLife"), tr("chapterMeet")][step.chapter] ?? tr("chapterMove");
}

function questionCopy(step) {
  if (step.id === "space" && state.answers.goal === "home") {
    return [STRINGS("What kind of room would you need in the shared home?", "De ce fel de cameră ai avea nevoie în locuința comună?", "¿Qué tipo de habitación necesitarías en la vivienda compartida?")[state.locale], STRINGS("Your group’s whole-home rent does not tell us your own share or room arrangement. Agree those together.", "Chiria totală a locuinței nu ne spune partea ta individuală sau cum se împart camerele. Stabiliți-le împreună.", "El alquiler total no indica tu parte individual ni cómo se asignarán las habitaciones. Acordadlo juntos.")[state.locale]];
  }
  if (step.id === "space" && state.answers.goal === "household") {
    return [STRINGS("How many bedrooms would work for your household?", "De câte dormitoare ar avea nevoie gospodăria voastră?", "¿Cuántos dormitorios necesita vuestro hogar?")[state.locale], STRINGS("Enter zero if a studio works for you. A missing listing count stays unknown.", "Introdu zero dacă ți-ar fi potrivită o garsonieră. Numărul lipsă din anunț rămâne necunoscut.", "Escribe cero si te sirve un estudio. Si el anuncio no indica el número, queda desconocido.")[state.locale]];
  }
  if (step.id === "householdSize" && state.answers.goal === "home") {
    return [STRINGS("How many people would you like in the home?", "Câte persoane ai vrea să locuiască în casă?", "¿Cuántas personas te gustaría que vivieran en la casa?")[state.locale], STRINGS("Include your moving group and future housemates. This preferred total is separate from the people already moving with you.", "Include grupul vostru și viitorii colegi. Numărul total preferat este separat de cei care se mută deja cu tine.", "Incluye a tu grupo y a los futuros compañeros. Este total preferido es distinto de las personas que ya se mudan contigo.")[state.locale]];
  }
  if (step.id === "householdSize" && state.answers.goal === "offer") return [localized(step.prompt), localized(step.description)];
  if (step.id === "party" && state.answers.goal === "offer") {
    return [STRINGS("How many people already live in the home?", "Câte persoane locuiesc deja în această locuință?", "¿Cuántas personas viven ya en esta vivienda?")[state.locale], STRINGS("Count the current household so a potential housemate understands who they would live with.", "Numără persoanele din gospodărie, pentru ca un posibil coleg să știe cu cine va locui.", "Cuenta a quienes ya viven allí para que una posible persona conviviente sepa con quién viviría.")[state.locale]];
  }
  if (step.id === "party" && state.answers.goal !== "offer") {
    return [STRINGS("How many people are moving with you?", "Câte persoane se mută împreună cu tine?", "¿Cuántas personas se mudan contigo?")[state.locale], STRINGS("Count everyone who has agreed to search or move together. This is different from your preferred total household size.", "Numără toate persoanele care au acceptat să caute sau să se mute împreună. Numărul e diferit de mărimea totală preferată a locuinței.", "Cuenta a quienes han acordado buscar o mudarse juntos. Es distinto del tamaño total que prefieres para el hogar.")[state.locale]];
  }
  if (step.id === "moveDate" && state.answers.goal === "offer") {
    return [STRINGS("When could someone move into the home?", "Când s-ar putea muta cineva în locuință?", "¿Cuándo podría mudarse alguien a la vivienda?")[state.locale], STRINGS("A rough time window helps people decide whether to start a conversation.", "O perioadă orientativă îi ajută pe oameni să decidă dacă vor să discute.", "Un plazo aproximado ayuda a decidir si iniciar una conversación.")[state.locale]];
  }
  if (["comfortableRent", "privateCeiling"].includes(step.id)) {
    if (state.answers.goal === "household") {
      const prompt = step.id === "comfortableRent"
        ? STRINGS("What total monthly rent feels comfortable for your household?", "Ce chirie lunară totală ar fi confortabilă pentru gospodăria voastră?", "¿Qué alquiler mensual total os resulta cómodo como hogar?")
        : STRINGS("Is there a total rent your household does not want to go over?", "Există o chirie totală peste care nu vreți să treceți?", "¿Hay un alquiler total que no queréis superar?");
      return [prompt[state.locale], tr(step.id === "comfortableRent" ? "amountHelp" : "maxHelp")];
    }
    const prompt = step.id === "comfortableRent"
      ? STRINGS("What monthly rent could you comfortably contribute toward your share?", "Ce chirie lunară ai putea plăti confortabil pentru partea ta?", "¿Qué alquiler mensual podrías pagar cómodamente por tu parte?")
      : STRINGS("What is the most you would personally contribute toward rent?", "Care este suma maximă pe care ai contribui-o personal la chirie?", "¿Cuál es el máximo que aportarías personalmente al alquiler?");
    return [prompt[state.locale], tr(step.id === "comfortableRent" ? "amountHelp" : "maxHelp")];
  }
  return [localized(step.prompt), localized(step.description)];
}

function renderChoice(step, multi = false) {
  const current = state.answers[step.id];
  const options = step.options.map((item) => {
    const selected = multi ? (current ?? []).includes(item.value) : current === item.value;
    const role = multi ? "checkbox" : "radio";
    const checkedAttribute = multi ? `aria-checked="${selected}"` : `aria-checked="${selected}"`;
    const title = step.id === "party" && state.answers.goal === "offer" ? {
      solo: STRINGS("One person", "O persoană", "Una persona"),
      "with-one": STRINGS("Two people", "Două persoane", "Dos personas"),
      "with-two": STRINGS("Three people", "Trei persoane", "Tres personas"),
      "with-three": STRINGS("Four or more", "Patru sau mai multe", "Cuatro o más"),
      unsure: STRINGS("Not sure yet", "Încă nu știm", "Aún no lo sabemos"),
    }[item.value] : localized(item.title);
    return `<button type="button" role="${role}" class="choice-card ${selected ? "selected" : ""}" data-action="answer-choice" data-step="${step.id}" data-value="${escapeAttr(item.value)}" ${checkedAttribute}>
      <span class="choice-icon">${icon(item.icon, 21)}</span><span class="choice-copy"><strong>${escapeHtml(localized(title))}</strong>${item.description ? `<small>${escapeHtml(localized(item.description))}</small>` : ""}</span><span class="choice-check">${selected ? icon("check", 14) : ""}</span>
    </button>`;
  }).join("");
  return `<div class="${step.options.length > 4 ? "choice-grid" : "choice-list"}" role="${multi ? "group" : "radiogroup"}" aria-label="${escapeAttr(localized(step.prompt))}">${options}</div>`;
}

function renderNumericPreference(step, bedrooms = false) {
  const value = state.answers[step.id] ?? "";
  const noPreference = value === "any";
  const label = bedrooms
    ? STRINGS("Minimum bedrooms", "Număr minim de dormitoare", "Dormitorios como mínimo")[state.locale]
    : STRINGS("People in the home, including you", "Persoane în locuință, inclusiv tu", "Personas en la vivienda, incluyéndote")[state.locale];
  const unit = bedrooms
    ? STRINGS("bedrooms", "dormitoare", "dormitorios")[state.locale]
    : STRINGS("people", "persoane", "personas")[state.locale];
  const min = bedrooms ? 0 : Math.max(1, partySizeFromAnswer() ?? 1);
  const minCopy = !bedrooms && partySizeFromAnswer()
    ? STRINGS(`At least ${partySizeFromAnswer()}, including your current moving group.`, `Cel puțin ${partySizeFromAnswer()}, inclusiv grupul care se mută acum.`, `Al menos ${partySizeFromAnswer}, incluido el grupo que se muda ahora.`)[state.locale]
    : "";
  return `<div class="numeric-choice ${noPreference ? "no-preference" : ""}"><label class="small-field-label" for="number-${step.id}">${escapeHtml(label)}</label><div class="numeric-field-wrap"><input class="number-field" type="number" id="number-${step.id}" min="${min}" ${bedrooms ? "" : "step=1"} inputmode="numeric" value="${noPreference ? "" : escapeAttr(value)}" data-size-input data-step="${step.id}" ${noPreference ? "disabled" : ""}><span>${escapeHtml(unit)}</span></div>${minCopy ? `<p class="field-help">${escapeHtml(minCopy)}</p>` : ""}<button class="choice-card no-preference-option ${noPreference ? "selected" : ""}" type="button" data-action="answer-choice" data-step="${step.id}" data-value="any" role="radio" aria-checked="${noPreference}"><span class="choice-icon">${icon("sparkle", 19)}</span><span class="choice-copy"><strong>${escapeHtml(STRINGS("No fixed number", "Fără un număr fix", "Sin una cifra fija")[state.locale])}</strong><small>${escapeHtml(STRINGS("Leave room for the right household to take shape.", "Lasă loc gospodăriei potrivite să prindă contur.", "Deja que el hogar adecuado tome forma.")[state.locale])}</small></span><span class="choice-check">${noPreference ? icon("check", 14) : ""}</span></button></div>`;
}

function renderMoney(step) {
  const saved = loadMoneyAnswer(step);
  const currencyOptions = currencyChoices().map((currency) => `<option value="${currency}" ${saved.currency === currency ? "selected" : ""}>${currency}</option>`).join("");
  return `<div class="money-form">
    <label class="small-field-label" for="money-${step.id}">${escapeHtml(state.answers.goal === "household" ? tr("wholeCost") : tr("privateRent"))}</label>
    <div class="money-input-wrap"><span class="money-symbol">${escapeHtml(saved.currency)}</span><input class="money-field" type="number" min="0" step="any" inputmode="decimal" id="money-${step.id}" value="${escapeAttr(saved.amount)}" placeholder="0" data-money-input data-step="${step.id}" aria-label="${escapeAttr(tr("priceLabel"))}"><select class="currency-select" data-action="change-currency" data-step="${step.id}" aria-label="${escapeAttr(tr("moneyNoCurrency"))}">${currencyOptions}</select></div>
    <p class="field-help">${escapeHtml(localized(step.helper))}</p>
    ${destinationCurrency() && saved.currency !== destinationCurrency() ? `<p class="currency-note">${icon("info", 14)}${escapeHtml(STRINGS(`Your answer remains in ${saved.currency}. It is not converted and will not be compared with ${destinationCurrency()} listings.`, `Răspunsul rămâne în ${saved.currency}. Nu îl convertim și nu îl comparăm cu anunțurile în ${destinationCurrency()}.`, `Tu respuesta sigue en ${saved.currency}. No se convierte ni se compara con anuncios en ${destinationCurrency()}.`)[state.locale])}</p>` : ""}
  </div>`;
}

function renderStepInput(step) {
  if (step.id === "householdSize") return renderNumericPreference(step);
  if (step.id === "space" && state.answers.goal === "household") return renderNumericPreference(step, true);
  if (step.type === "single") return renderChoice(step);
  if (step.type === "multi") return renderChoice(step, true);
  if (step.type === "money") return renderMoney(step);
  if (step.type === "text") {
    return `<label class="sr-only" for="answer-${step.id}">${escapeHtml(localized(step.prompt))}</label><textarea class="textarea-field" id="answer-${step.id}" data-answer-input data-step="${step.id}" maxlength="160" placeholder="${escapeAttr(STRINGS("Neighbourhoods, a station, a landmark…", "Cartiere, o stație, un reper…", "Barrios, una estación, un lugar conocido…")[state.locale])}">${escapeHtml(state.answers[step.id] ?? "")}</textarea><p class="field-help">${escapeHtml(STRINGS("You can add or change these later.", "Poți adăuga sau schimba zonele mai târziu.", "Puedes añadir o cambiar las zonas más adelante.")[state.locale])}</p>`;
  }
  if (step.type === "intro") {
    return `<label class="sr-only" for="answer-${step.id}">${escapeHtml(localized(step.prompt))}</label><textarea class="textarea-field" id="answer-${step.id}" data-answer-input data-step="${step.id}" maxlength="420" placeholder="${escapeAttr(tr("introPlaceholder"))}">${escapeHtml(state.answers[step.id] ?? "")}</textarea><div class="character-count">${String(state.answers[step.id] ?? "").length} / 420</div>`;
  }
  return "";
}

function questionScreen() {
  const steps = visibleSteps();
  if (state.step >= steps.length) state.step = Math.max(0, steps.length - 1);
  const step = currentStep();
  const [prompt, description] = questionCopy(step);
  const mascot = step.chapter === 0 ? mascots.move : step.chapter === 1 ? mascots.money : step.chapter === 2 ? mascots.life : mascots.meet;
  const progress = Math.round(((state.step + 1) / steps.length) * 100);
  return `<main class="journey-shell" id="main-content">
    <div class="journey-heading">
      <p class="journey-kicker">${escapeHtml(chapterTitle(step))} <span class="optional-label">· ${escapeHtml(tr("optional"))}</span></p>
      <h1 class="journey-title">${escapeHtml(prompt)}</h1>
      <p class="journey-subtitle">${escapeHtml(description)}</p>
    </div>
    <section class="journey-card" aria-label="${escapeAttr(prompt)}" key="${step.id}">
      <p class="question-label">${step.type === "single" ? escapeHtml(STRINGS("Choose one", "Alege o variantă", "Elige una opción")[state.locale]) : step.type === "multi" ? escapeHtml(STRINGS("Choose all that feel right", "Alege toate variantele potrivite", "Elige todas las opciones que encajen")[state.locale]) : escapeHtml(STRINGS("Your answer", "Răspunsul tău", "Tu respuesta")[state.locale])}</p>
      ${renderStepInput(step)}
      ${step.type === "money" ? "" : `<div class="helper-note">${icon("info", 17)}<span>${escapeHtml(localized(step.helper))}</span></div>`}
    </section>
    <div class="mascot-tip"><img src="${mascot}" alt=""><p>${escapeHtml(tr("skipKeepsUnknown"))}</p></div>
    <p class="inline-error" id="question-error" role="alert" ${state.error ? "" : "hidden"}>${escapeHtml(state.error)}</p>
    <div class="journey-actions">
      <button class="primary-button" type="button" data-action="step-next">${escapeHtml(state.step === steps.length - 1 ? tr("finish") : tr("next"))}${icon("arrow", 18)}</button>
      <button class="text-button skip-button" type="button" data-action="step-skip">${escapeHtml(tr("skip"))}</button>
    </div>
  </main>`;
}

function knownPhoto(item) {
  if (item.isExample && item.imageIsIllustration) return "/assets/home-example.png";
  const value = item.image || (Array.isArray(item.images) ? item.images[0] : "");
  if (!value) return "";
  try {
    const url = new URL(value, window.location.origin);
    if (url.origin === window.location.origin || url.protocol === "https:") return url.href;
  } catch { /* An untrusted image URL is not rendered. */ }
  return "";
}

function listingArt(item, index, detail = false) {
  const src = knownPhoto(item);
  const isExamplePhoto = item.isExample && item.imageIsIllustration;
  const className = `listing-image tone-${index % 6}${detail ? " detail-cover" : ""}`;
  const badgeLabel = item.isExample ? tr("previewData") : STRINGS("Source listing", "Anunț din sursă", "Anuncio de una fuente")[state.locale];
  const badge = `<span class="image-label">${icon(item.isExample ? "sparkle" : "check", 13)}${escapeHtml(badgeLabel)}</span>`;
  if (src) return `<div class="${className}"><img class="cover ${isExamplePhoto ? "illustration-photo" : ""}" src="${escapeAttr(src)}" alt="${isExamplePhoto ? escapeAttr(tr("previewData")) : ""}" loading="lazy" data-home-image>${badge}</div>`;
  return `<div class="${className} photo-missing" role="img" aria-label="${escapeAttr(STRINGS("No home photo supplied", "Fotografie necomunicată", "No se ha facilitado una foto")[state.locale])}"><div class="photo-placeholder">${icon("building", detail ? 62 : 46)}<span>${escapeHtml(STRINGS("Photo not provided", "Fotografie necomunicată", "Foto no facilitada")[state.locale])}</span></div>${badge}</div>`;
}

function rentBasisLabel(home) {
  return home.rentBasis === "room"
    ? STRINGS("Room rent", "Chiria camerei", "Alquiler de habitación")[state.locale]
    : home.rentBasis === "whole-home"
      ? STRINGS("Whole home total", "Chiria totală a locuinței", "Total de la vivienda")[state.locale]
      : STRINGS("Rent basis unknown", "Nu se cunoaște baza chiriei", "Tipo de alquiler desconocido")[state.locale];
}

function homePrice(home) {
  if (home.monthlyRent == null || !home.currency) return tr("askRent");
  return `${money(home.monthlyRent, home.currency)} ${tr("perMonth")}`;
}

function homeMatchNote(home) {
  const budget = state.answers.comfortableRent;
  const ceiling = state.answers.privateCeiling;
  const basis = searchRentBasis();
  if (home.rentBasis !== basis) {
    return home.rentBasis === "whole-home"
      ? STRINGS("Whole-home total; your personal share is unknown.", "Prețul este pentru toată locuința; partea ta personală nu este cunoscută.", "El precio es de toda la vivienda; tu parte personal es desconocida.")[state.locale]
      : STRINGS("Room rent. The full home cost is unknown.", "Chiria camerei. Costul locuinței întregi nu este cunoscut.", "Alquiler de habitación. Se desconoce el coste total.")[state.locale];
  }
  if (home.monthlyRent == null || !home.currency) return tr("sourceUnknown");
  if (budget?.amount !== "" && budget?.amount != null && Number.isFinite(Number(budget.amount)) && budget.currency === home.currency) {
    if (Number(budget.amount) === 0) return home.monthlyRent === 0 ? tr("fit") : STRINGS("Above your preferred amount", "Depășește suma preferată", "Supera tu importe preferido")[state.locale];
    return home.monthlyRent <= Number(budget.amount) ? STRINGS("Within your preferred rent", "În limita chiriei preferate", "Dentro de tu alquiler preferido")[state.locale] : STRINGS("Above your preferred amount", "Depășește suma preferată", "Supera tu importe preferido")[state.locale];
  }
  if (ceiling?.amount !== "" && ceiling?.amount != null && home.currency === ceiling.currency && home.monthlyRent > Number(ceiling.amount)) {
    return STRINGS("Above your private limit", "Depășește limita ta privată", "Supera tu límite privado")[state.locale];
  }
  return "";
}

function homeFacts(home) {
  const facts = [];
  if (home.rooms != null) facts.push(`${home.rooms} ${home.rooms === 1 ? STRINGS("room", "cameră", "habitación")[state.locale] : tr("roomsCount").toLocaleLowerCase()}`);
  if (home.bedrooms != null) facts.push(`${home.bedrooms} ${home.bedrooms === 1 ? STRINGS("bedroom", "dormitor", "dormitorio")[state.locale] : tr("bedrooms").toLocaleLowerCase()}`);
  if (home.areaM2 != null) facts.push(`${home.areaM2} m²`);
  return facts;
}

function homeCard(home, index) {
  const saved = state.savedHomes.includes(home.id);
  const facts = homeFacts(home);
  const fit = homeMatchNote(home);
  const town = [home.city, home.country].filter(Boolean).join(", ");
  const tags = [rentBasisLabel(home), ...facts, ...(home.availability === "unknown" ? [tr("availabilityUnknown")] : [])].map((label) => `<span class="tag">${escapeHtml(label)}</span>`).join("");
  return `<article class="result-card card-wrap">
    <button class="result-open" type="button" data-action="open-home" data-id="${escapeAttr(home.id)}" aria-label="${escapeAttr(`${home.title}, ${town}`)}">
      ${listingArt(home, index)}
      <div class="listing-copy">
        <div class="listing-topline"><h2 class="listing-title">${escapeHtml(home.title)}</h2><span class="listing-price">${escapeHtml(homePrice(home))}</span></div>
        <p class="listing-location">${escapeHtml(town || state.place)}</p>
        <div class="listing-facts">${tags}</div>
        ${fit ? `<p class="fit-note">${icon(home.rentBasis === searchRentBasis() ? "check" : "info", 15)}<span>${escapeHtml(fit)}</span></p>` : ""}
      </div>
    </button>
    <button class="save-button ${saved ? "saved" : ""}" type="button" data-action="toggle-save-home" data-id="${escapeAttr(home.id)}" aria-label="${escapeAttr(saved ? tr("savedLabel") : tr("save"))}" aria-pressed="${saved}">${icon("heart", 19)}</button>
    <button class="more-button" type="button" data-action="open-hide-menu" data-type="home" data-id="${escapeAttr(home.id)}" aria-label="${escapeAttr(tr("hide"))}">•••</button>
    ${state.modal?.type === "hide-menu" && state.modal.id === home.id ? hideMenu("home", home.id) : ""}
  </article>`;
}

function hideMenu(type, id) {
  const reasons = [["too-costly", "hideTooCostly"], ["wrong-area", "hideWrongArea"], ["wrong-space", "hideWrongSpace"], ["missing-info", "hideMissing"], ["other", "hideOther"]];
  return `<div class="card-menu open" role="menu">${reasons.map(([value, key]) => `<button class="menu-option" type="button" role="menuitem" data-action="hide-item" data-type="${type}" data-id="${escapeAttr(id)}" data-reason="${value}">${escapeHtml(tr(key))}</button>`).join("")}</div>`;
}

function sourceSummary(home) {
  if (home.isExample) return tr("previewData");
  const source = localizedValue(home.source) || tr("sourceUnknown");
  const date = home.observedAt || dataInfo.observedDate;
  return `${source}${date ? ` · ${escapeHtml(tr("observed"))} ${escapeHtml(date)}` : ""}`;
}

function homeRowsForCurrentTab() {
  return sortVisibleHomes(state.place);
}

function previewBanner(rows = [], kind = "home") {
  let note;
  if (kind === "people") {
    const previewCount = rows.filter((item) => item.isExample).length;
    note = STRINGS(
      `${previewCount} fictional preview profiles. No live people are shown.`,
      `${previewCount} profiluri fictive pentru previzualizare. Nu sunt afișate persoane reale.`,
      `${previewCount} perfiles ficticios de vista previa. No se muestran personas reales.`,
    )[state.locale];
  } else if (kind === "home") {
    const cityRows = homes.filter((home) => homeCityMatch(home, state.place));
    const sourceCount = cityRows.filter((home) => !home.isExample).length;
    const previewCount = cityRows.filter((home) => home.isExample).length;
    note = STRINGS(
      `${sourceCount} source listings for this city. Availability needs confirmation.${previewCount ? ` ${previewCount} fictional examples are labelled.` : ""}`,
      `${sourceCount} anunțuri din surse pentru acest oraș. Disponibilitatea trebuie confirmată.${previewCount ? ` ${previewCount} exemple fictive sunt marcate.` : ""}`,
      `${sourceCount} anuncios de fuentes para esta ciudad. Hay que confirmar la disponibilidad.${previewCount ? ` ${previewCount} ejemplos ficticios están identificados.` : ""}`,
    )[state.locale];
  } else {
    note = tr("draftOnly");
  }
  return `<div class="preview-banner">${icon("info", 17)}<span>${escapeHtml(note)}</span></div>`;
}

function noHomesState() {
  return `<div class="browse-empty"> <img src="${mascots.help}" alt=""><h3>${escapeHtml(tr("noHomes"))}</h3><p>${escapeHtml(tr("noHomesText").replace("{place}", state.place))}</p><div class="empty-actions"><button type="button" class="secondary-button" data-action="preview-city">${escapeHtml(tr("tryBerlin"))}</button><button type="button" class="text-button" data-action="change-place">${escapeHtml(tr("searchElse"))}</button></div></div>`;
}

function browseFilters() {
  const filters = [["all", tr("allHomes")], ["room", tr("rooms")], ["whole-home", tr("wholeHomes")]];
  return `<div class="filter-row" role="group" aria-label="${escapeAttr(tr("filters"))}">${filters.map(([value, label]) => `<button class="filter-chip ${state.filterType === value ? "active" : ""}" type="button" data-action="home-filter" data-value="${value}" aria-pressed="${state.filterType === value}">${escapeHtml(label)}</button>`).join("")}</div>`;
}

function resultsScreen() {
  const tab = state.tab;
  const homesTab = tab === "homes";
  const peopleTab = tab === "people";
  const rows = homesTab ? homeRowsForCurrentTab() : sortVisiblePeople(state.place);
  const title = `${tr(homesTab ? "resultsHomes" : "resultsPeople")} ${state.place}`;
  const subtitle = tr(homesTab ? "homesSub" : "peopleSub");
  const emptyState = homesTab ? noHomesState() : noPeopleState();
  const visibleRows = (homesTab ? state.expandedHomes : state.expandedPeople) ? rows : rows.slice(0, 12);
  const nudge = `<div class="soft-cta results-nudge"><div class="soft-cta-copy"><strong>${escapeHtml(tr("tailorTitle"))}</strong><span>${escapeHtml(tr("tailorText"))}</span></div><button type="button" class="primary-button" data-action="start-profile">${escapeHtml(tr("startQuestions"))}${icon("arrow", 17)}</button></div>`;
  const loadMore = rows.length > visibleRows.length
    ? `<button type="button" class="results-more" data-action="load-more">${escapeHtml(STRINGS(`Show ${rows.length - visibleRows.length} more`, `Arată încă ${rows.length - visibleRows.length}`, `Mostrar ${rows.length - visibleRows.length} más`)[state.locale])}${icon("arrow", 16)}</button>`
    : "";
  return `<main class="results-shell" id="main-content">
    <div class="results-head"><div><p class="eyebrow">${escapeHtml(homesTab ? tr("home") : tr("people"))}</p><h1 class="results-title">${escapeHtml(title)}</h1><p class="results-subtitle">${escapeHtml(subtitle)}</p></div><div class="results-head-actions"><button class="pill-button" type="button" data-action="change-place">${icon("pin", 15)}${escapeHtml(tr("changePlace"))}</button></div></div>
    ${homesTab ? browseFilters() : ""}
    ${previewBanner(rows, homesTab ? "home" : "people")}
    ${nudge}
    <section class="${peopleTab ? "people-grid" : "listing-grid"}" aria-label="${escapeAttr(title)}">${rows.length ? visibleRows.map((item, index) => homesTab ? homeCard(item, index) : personCard(item)).join("") : emptyState}</section>
    ${loadMore}
    ${homesTab ? `<div class="sort-note">${icon("sparkle", 15)}<span>${escapeHtml(tr("resultsOrder"))}</span></div>` : ""}
  </main>`;
}

function noPeopleState() {
  return `<div class="browse-empty"><img src="${mascots.meet}" alt=""><h3>${escapeHtml(tr("noPeople"))}</h3><p>${escapeHtml(tr("noPeopleText").replace("{place}", state.place))}</p></div>`;
}

function personSummary(person) {
  const details = [
    person.moveIn ? STRINGS(`Move-in: ${person.moveIn}`, `Mutare: ${person.moveIn}`, `Mudanza: ${person.moveIn}`)[state.locale] : "",
    person.stay ? STRINGS(`Stay: ${person.stay}`, `Durată: ${person.stay}`, `Estancia: ${person.stay}`)[state.locale] : "",
    person.languages?.length ? `${STRINGS("Languages", "Limbi", "Idiomas")[state.locale]}: ${person.languages.join(", ")}` : "",
    person.quiet ? `${STRINGS("Quiet", "Liniște", "Tranquilidad")[state.locale]}: ${stepLabel(person.quiet)}` : "",
  ].filter(Boolean);
  return details;
}

function personCard(person) {
  const saved = state.savedPeople.includes(person.id);
  const known = personSummary(person);
  const initials = escapeHtml(person.initials || person.name.slice(0, 1));
  return `<article class="person-card card-wrap">
    ${person.isExample ? `<div class="person-preview-badge">${icon("sparkle", 13)}${escapeHtml(tr("previewPeople"))}</div>` : ""}
    <button class="person-open" type="button" data-action="open-person" data-id="${escapeAttr(person.id)}">
      <div class="person-top"><span class="avatar avatar-tone-${personTone(person)}">${person.avatar ? `<img src="${escapeAttr(person.avatar)}" alt="">` : `<span class="avatar-initials">${initials}</span>`}</span><span><h2 class="person-name">${escapeHtml(person.name)}</h2><span class="person-subtitle">${escapeHtml(person.city || state.place)}${person.isExample ? ` · ${escapeHtml(tr("previewPeople"))}` : ""}</span></span></div>
      <div class="person-card-body"><p>${escapeHtml(person.bio || tr("unknownPersonDetails"))}</p><div class="person-fit">${known.slice(0, 3).map((detail) => `<span class="fit-row">${icon("check", 14)}${escapeHtml(detail)}</span>`).join("")}${known.length === 0 ? `<span class="fit-row unknown">${icon("info", 14)}${escapeHtml(tr("unknownPersonDetails"))}</span>` : ""}</div></div>
    </button>
    <div class="person-actions"><button class="secondary-button" type="button" data-action="toggle-save-person" data-id="${escapeAttr(person.id)}">${icon(saved ? "check" : "heart", 16)}${escapeHtml(saved ? tr("savedLabel") : tr("savePerson"))}</button><button class="primary-button" type="button" data-action="open-person" data-id="${escapeAttr(person.id)}">${escapeHtml(tr("viewProfile"))}${icon("arrow", 16)}</button></div>
    <button class="more-button person-more" type="button" data-action="open-hide-menu" data-type="person" data-id="${escapeAttr(person.id)}" aria-label="${escapeAttr(tr("hide"))}">•••</button>
    ${state.modal?.type === "hide-menu" && state.modal.id === person.id ? hideMenu("person", person.id) : ""}
  </article>`;
}

function personTone(person) {
  return [...String(person.id ?? person.name)].reduce((total, character) => total + character.charCodeAt(0), 0) % 4;
}

function costValue(value, currency) {
  if (value == null || value === "") return tr("unknown");
  if (typeof value === "number" && currency) return money(value, currency);
  if (typeof value === "object") {
    if (value.amount != null && value.currency) return money(value.amount, value.currency);
    if (value.label) return localizedValue(value.label);
    return tr("unknown");
  }
  return String(value);
}

function sourceLink(home) {
  const raw = home.sourceUrl || home.url;
  if (!raw) return "";
  try {
    const url = new URL(raw, window.location.origin);
    if (url.protocol !== "https:") return "";
    return `<a class="source-link" href="${escapeAttr(url.href)}" target="_blank" rel="noopener noreferrer">${icon("external", 15)}${escapeHtml(tr("openSource"))}</a>`;
  } catch { return ""; }
}

function homeDetailScreen() {
  const home = homes.find((item) => item.id === state.activeHome);
  if (!home) { state.view = "results"; return resultsScreen(); }
  const saved = state.savedHomes.includes(home.id);
  const inSharedShortlist = (state.group?.shortlist ?? []).includes(`home:${home.id}`);
  const facts = homeFacts(home);
  const displayBasis = rentBasisLabel(home);
  const fit = homeMatchNote(home);
  const source = sourceSummary(home);
  const features = home.features.length ? home.features.map((feature) => `<li>${icon("check", 15)}<span>${escapeHtml(localizedValue(feature))}</span></li>`).join("") : `<li class="unknown">${icon("info", 15)}<span>${escapeHtml(tr("unknown"))}</span></li>`;
  const sourceDate = home.observedAt || dataInfo.observedDate;
  const sourceBlock = `<section class="detail-section"><h2>${escapeHtml(tr("listingInfo"))}</h2><ul class="detail-list"><li>${icon("info", 15)}<span>${escapeHtml(source)}</span></li><li>${icon("clock", 15)}<span>${escapeHtml(tr("availability"))}: ${escapeHtml(home.availability && home.availability !== "unknown" ? String(home.availability) : tr("availabilityUnknown"))}</span></li>${sourceDate && !home.isExample ? `<li>${icon("calendar", 15)}<span>${escapeHtml(STRINGS("Observed", "Observat", "Consultado")[state.locale])}: ${escapeHtml(sourceDate)}</span></li>` : ""}</ul>${sourceLink(home)}</section>`;
  const factsMarkup = [...facts, displayBasis].map((fact) => `<div class="fact-tile"><strong>${escapeHtml(fact)}</strong><span>${escapeHtml(fact === displayBasis ? tr("priceLabel") : tr("homeDetails"))}</span></div>`).join("");
  return `<main class="detail-shell" id="main-content">
    <button class="detail-back" type="button" data-action="back-to-results">${icon("back", 19)}${escapeHtml(tr("back"))}</button>
    ${listingArt(home, Math.max(0, homes.indexOf(home)), true)}
    <div class="detail-heading"><div><h1 class="detail-title">${escapeHtml(home.title)}</h1><p class="detail-location">${escapeHtml([home.city, home.country].filter(Boolean).join(", "))}</p></div><div class="detail-price">${escapeHtml(homePrice(home))}<small>${escapeHtml(displayBasis)}</small></div></div>
    <div class="detail-facts">${factsMarkup}</div>
    ${fit ? `<div class="detail-match-note">${icon("info", 17)}<span>${escapeHtml(fit)}</span></div>` : ""}
    <div class="detail-bottom-actions"><button type="button" class="secondary-button" data-action="toggle-save-home" data-id="${escapeAttr(home.id)}">${icon(saved ? "check" : "heart", 18)}${escapeHtml(saved ? tr("savedLabel") : tr("save"))}</button>${state.group ? `<button type="button" class="secondary-button" data-action="add-group-home" data-id="${escapeAttr(home.id)}">${icon(inSharedShortlist ? "check" : "together", 18)}${escapeHtml(STRINGS(inSharedShortlist ? "In shared list" : "Add to shared list", inSharedShortlist ? "În lista comună" : "Adaugă în lista comună", inSharedShortlist ? "En la lista compartida" : "Añadir a la lista compartida")[state.locale])}</button>` : ""}<button type="button" class="primary-button" data-action="plan-viewing" data-id="${escapeAttr(home.id)}">${icon("calendar", 18)}${escapeHtml(tr("homePlan"))}</button></div>
    <section class="detail-section"><h2>${escapeHtml(tr("description"))}</h2><p>${escapeHtml(home.summary || tr("unknown"))}</p></section>
    <section class="detail-section"><h2>${escapeHtml(tr("costs"))}</h2><div class="cost-rows"><div class="cost-row"><span>${escapeHtml(tr("priceLabel"))} · ${escapeHtml(displayBasis)}</span><strong>${escapeHtml(homePrice(home))}</strong></div><div class="cost-row"><span>${escapeHtml(tr("bills"))}</span><strong>${escapeHtml(costValue(home.bills, home.currency))}</strong></div><div class="cost-row"><span>${escapeHtml(tr("deposit"))}</span><strong>${escapeHtml(costValue(home.deposit, home.currency))}</strong></div></div><p class="cost-disclaimer">${escapeHtml(tr("costNote"))}</p></section>
    <section class="detail-section"><h2>${escapeHtml(tr("features"))}</h2><ul class="detail-list">${features}</ul></section>
    ${sourceBlock}
  </main>`;
}

function personDetailValues(person) {
  const fields = [
    ["moveIn", STRINGS("Move-in timing", "Perioada mutării", "Fecha de mudanza")],
    ["stay", STRINGS("Expected stay", "Durata șederii", "Duración prevista")],
    ["languages", STRINGS("Languages", "Limbi", "Idiomas")],
    ["quiet", STRINGS("Quiet at home", "Liniște acasă", "Tranquilidad en casa")],
    ["workFromHome", STRINGS("Working from home", "Lucru de acasă", "Trabajo desde casa")],
    ["guests", STRINGS("Guests", "Musafiri", "Visitas")],
    ["cleaning", STRINGS("Shared cleaning", "Curățenie comună", "Limpieza compartida")],
    ["smoking", STRINGS("Smoking at home", "Fumatul acasă", "Fumar en casa")],
    ["pets", STRINGS("Pets", "Animale", "Mascotas")],
  ];
  return fields.map(([key, label]) => {
    const value = person[key];
    const present = Array.isArray(value) ? value.length > 0 : value != null && value !== "";
    let display = present ? (Array.isArray(value) ? value.join(", ") : String(value)) : tr("unknownPersonDetails");
    if (key === "quiet" && present) display = stepLabel(String(value));
    return { key, label: label[state.locale], display, present };
  });
}

function personDetailScreen() {
  const person = people.find((item) => item.id === state.activePerson);
  if (!person) { state.view = "results"; return resultsScreen(); }
  const saved = state.savedPeople.includes(person.id);
  const inSharedShortlist = (state.group?.shortlist ?? []).includes(`person:${person.id}`);
  const fields = personDetailValues(person);
  const known = fields.filter((field) => field.present);
  const unknown = fields.filter((field) => !field.present);
  return `<main class="detail-shell person-detail-shell" id="main-content">
    <button class="detail-back" type="button" data-action="back-to-results">${icon("back", 19)}${escapeHtml(tr("back"))}</button>
    <section class="person-profile-hero"><span class="avatar profile-avatar avatar-tone-${personTone(person)}">${person.avatar ? `<img src="${escapeAttr(person.avatar)}" alt="">` : `<span class="avatar-initials">${escapeHtml(person.initials || person.name.slice(0, 1))}</span>`}</span><div><p class="eyebrow">${escapeHtml(person.isExample ? tr("previewPeople") : tr("people"))}</p><h1 class="detail-title">${escapeHtml(person.name)}</h1><p class="detail-location">${escapeHtml(person.city || state.place)}</p></div></section>
    <div class="detail-bottom-actions"><button class="secondary-button" type="button" data-action="toggle-save-person" data-id="${escapeAttr(person.id)}">${icon(saved ? "check" : "heart", 18)}${escapeHtml(saved ? tr("savedLabel") : tr("savePerson"))}</button>${state.group ? `<button class="secondary-button" type="button" data-action="add-group-person" data-id="${escapeAttr(person.id)}">${icon(inSharedShortlist ? "check" : "together", 18)}${escapeHtml(STRINGS(inSharedShortlist ? "In shared list" : "Add to shared list", inSharedShortlist ? "În lista comună" : "Adaugă în lista comună", inSharedShortlist ? "En la lista compartida" : "Añadir a la lista compartida")[state.locale])}</button>` : ""}<button class="primary-button" type="button" data-action="draft-intro" data-id="${escapeAttr(person.id)}">${icon("message", 18)}${escapeHtml(tr("connect"))}</button></div>
    ${person.isExample ? `<div class="preview-banner">${icon("info", 17)}<span>${escapeHtml(tr("draftOnly"))}</span></div>` : ""}
    <section class="detail-section"><h2>${escapeHtml(tr("personDetails"))}</h2><p>${escapeHtml(person.bio || tr("unknownPersonDetails"))}</p></section>
    <section class="detail-section"><h2>${escapeHtml(tr("fitDetails"))}</h2><ul class="person-facts-list">${known.map((field) => `<li class="fit-row">${icon("check", 15)}<span><strong>${escapeHtml(field.label)}</strong><span>${escapeHtml(field.display)}</span></span></li>`).join("")}${unknown.slice(0, 4).map((field) => `<li class="fit-row unknown">${icon("info", 15)}<span><strong>${escapeHtml(field.label)}</strong><span>${escapeHtml(tr("unknownPersonDetails"))}</span></span></li>`).join("")}</ul></section>
    <div class="preview-banner">${icon("shield", 17)}<span>${escapeHtml(STRINGS("Only details this person chose to share appear here. Age and other private traits do not rank people.", "Apar doar detaliile pe care persoana a ales să le împărtășească. Vârsta și alte trăsături private nu ordonează oamenii.", "Solo aparecen los datos que esta persona decidió compartir. La edad y otros rasgos privados no ordenan a las personas.")[state.locale])}</span></div>
  </main>`;
}

function tallyAnswered() {
  return visibleSteps().filter(answerComplete).length;
}

function topSection(title, subtitle, kicker = "") {
  return `<div class="section-heading"><div>${kicker ? `<p class="eyebrow">${escapeHtml(kicker)}</p>` : ""}<h1>${escapeHtml(title)}</h1><p>${escapeHtml(subtitle)}</p></div></div>`;
}

function groupMembers() {
  if (!state.group) return [];
  const invited = Array.isArray(state.group.invited) ? state.group.invited : [];
  return [{ name: tr("owner"), status: "owner" }, ...invited.map((name) => ({ name, status: "pending" }))];
}

function memberRows() {
  return groupMembers().map((member, index) => {
    const proposal = state.roomProposals.find((item) => item.participant === member.name);
    const status = member.status === "owner"
      ? (proposal ? `<span class="status-badge draft">${escapeHtml(STRINGS("Proposed", "Propus", "Propuesto")[state.locale])}</span>` : `<span class="status-badge">${escapeHtml(STRINGS("No amount", "Fără sumă", "Sin importe")[state.locale])}</span>`)
      : `<span class="status-badge">${escapeHtml(tr("invitePending"))}</span>`;
    const amount = proposal ? `<span class="contribution-amount">${escapeHtml(money(proposal.amount, proposal.currency))} / ${escapeHtml(tr("perMonth"))}</span>` : "";
    return `<div class="member-row"><span class="member-avatar">${index === 0 ? icon("person", 17) : escapeHtml(member.name.trim().slice(0, 1).toUpperCase())}</span><span class="member-detail"><strong>${escapeHtml(member.name)}</strong><span>${amount || escapeHtml(member.status === "owner" ? tr("noProposal") : tr("participantUnknown"))}</span></span>${status}</div>`;
  }).join("");
}

function groupShortlist() {
  const ids = state.group?.shortlist ?? [];
  const entries = ids.map((key) => {
    const [type, ...idPart] = key.split(":");
    const id = idPart.join(":");
    return type === "home" ? { type, item: homes.find((entry) => entry.id === id) } : { type, item: people.find((entry) => entry.id === id) };
  }).filter((entry) => entry.item);
  if (!entries.length) return `<div class="group-empty compact"><img src="${mascots.searchGlow}" alt=""><h3>${escapeHtml(tr("sharedShortlist"))}</h3><p>${escapeHtml(STRINGS("Save a home or person to start a shortlist everyone can review.", "Salvează o locuință sau o persoană pentru a începe o listă comună.", "Guarda una vivienda o persona para empezar una lista común.")[state.locale])}</p><button class="secondary-button" type="button" data-action="go-tab" data-tab="homes">${escapeHtml(tr("home"))}</button></div>`;
  return `<div class="shared-list">${entries.map(({ type, item }) => `<article class="shared-item"><span class="shared-item-icon">${icon(type === "home" ? "home" : "person", 20)}</span><span class="member-detail"><strong>${escapeHtml(item.title || item.name)}</strong><span>${escapeHtml([item.city, type === "home" ? homePrice(item) : tr("previewPeople")].filter(Boolean).join(" · "))}</span></span><button class="quiet-link" type="button" data-action="remove-shared-item" data-key="${escapeAttr(`${type}:${item.id}`)}">${icon("close", 17)}<span class="sr-only">${escapeHtml(tr("hide"))}</span></button></article>`).join("")}</div>`;
}

function eventTimeZone(city) {
  const zones = { berlin: "Europe/Berlin", amsterdam: "Europe/Amsterdam", madrid: "Europe/Madrid", paris: "Europe/Paris", london: "Europe/London", bucharest: "Europe/Bucharest", chisinau: "Europe/Chisinau", "new york": "America/New_York", chicago: "America/Chicago" };
  return zones[canonicalCity(city)] || "UTC";
}

function planCards() {
  const proposalCount = state.roomProposals.length;
  const viewings = state.viewingPlans;
  return `<section class="plan-card"><div class="plan-head"><span class="together-icon">${icon("key", 22)}</span><div><h2>${escapeHtml(tr("roomPlan"))}</h2><p>${escapeHtml(tr("planExplain"))}</p></div><button type="button" class="quiet-link" data-action="open-room-plan">${icon("arrow", 18)}<span class="sr-only">${escapeHtml(tr("roomPlan"))}</span></button></div>
    <div class="member-list">${memberRows()}</div><p class="plan-footnote">${icon("info", 15)}${escapeHtml(proposalCount ? tr("proposalSaved") : tr("noSplit"))}</p></section>
  <section class="plan-card"><div class="plan-head"><span class="together-icon calendar-icon">${icon("calendar", 22)}</span><div><h2>${escapeHtml(tr("viewingPlan"))}</h2><p>${escapeHtml(viewings.length ? STRINGS("Keep the visit plan and outcome here.", "Păstrează aici planul și concluzia vizionării.", "Guarda aquí el plan y el resultado de la visita.")[state.locale] : tr("noEvents"))}</p></div><button type="button" class="quiet-link" data-action="plan-viewing">${icon("plus", 19)}<span class="sr-only">${escapeHtml(tr("viewingPlan"))}</span></button></div>
    ${viewings.length ? `<div class="member-list">${viewings.map((plan, index) => { const item = homes.find((home) => home.id === plan.homeId); return `<div class="member-row"><span class="member-avatar">${icon("calendar", 16)}</span><span class="member-detail"><strong>${escapeHtml(item?.title || tr("unknown"))}</strong><span>${escapeHtml([plan.date, plan.time, plan.timeZone].filter(Boolean).join(" · ") || STRINGS("Date not set", "Data nu e stabilită", "Fecha sin definir")[state.locale])}</span></span><span class="status-badge ${plan.outcome ? "ready" : "draft"}">${escapeHtml(plan.outcome ? tr(plan.outcome) : STRINGS("Plan saved", "Plan salvat", "Plan guardado")[state.locale])}</span><button class="quiet-link" type="button" data-action="viewing-outcome" data-index="${index}">${icon("arrow", 16)}<span class="sr-only">${escapeHtml(tr("viewingOutcome"))}</span></button></div>`; }).join("")}</div>` : ""}
    <p class="plan-footnote">${icon("shield", 15)}${escapeHtml(tr("viewingSaved"))}</p></section>`;
}

function togetherScreen() {
  if (!state.group) {
    return `<main class="results-shell together-shell" id="main-content">${topSection(tr("togetherTitle"), tr("togetherSub"), tr("together"))}<div class="group-empty"><img src="${mascots.roommates}" alt=""><h2>${escapeHtml(tr("groupNone"))}</h2><p>${escapeHtml(tr("groupNoneText"))}</p><button class="primary-button" type="button" data-action="open-create-group">${escapeHtml(tr("createTogether"))}${icon("arrow", 18)}</button></div>${previewBanner()}</main>`;
  }
  return `<main class="results-shell together-shell" id="main-content">
    ${topSection(state.group.name || tr("togetherTitle"), tr("togetherSub"), tr("together"))}
    <section class="group-panel"><div class="group-panel-head"><div><h2>${escapeHtml(tr("members"))}</h2><p>${escapeHtml(tr("inviteWarning"))}</p></div><button class="pill-button" type="button" data-action="show-invite">${icon("plus", 15)}${escapeHtml(tr("previewInvite"))}</button></div><div class="member-list">${memberRows()}</div><div class="invite-warning">${icon("info", 15)}${escapeHtml(tr("invitePending"))}</div></section>
    <section class="group-panel"><div class="group-panel-head"><div><h2>${escapeHtml(tr("sharedShortlist"))}</h2><p>${escapeHtml(STRINGS("A place to compare possibilities together.", "Un loc unde puteți compara opțiunile împreună.", "Un lugar para comparar opciones juntos.")[state.locale])}</p></div><button class="quiet-link" type="button" data-action="go-tab" data-tab="saved">${icon("arrow", 18)}<span class="sr-only">${escapeHtml(tr("saved"))}</span></button></div>${groupShortlist()}</section>
    ${planCards()}
    ${previewBanner()}
  </main>`;
}

function savedScreen() {
  const savedHomes = state.savedHomes.map((id) => homes.find((home) => home.id === id)).filter(Boolean).filter((home) => !state.hiddenHomes[home.id]);
  const savedPeople = state.savedPeople.map((id) => people.find((person) => person.id === id)).filter(Boolean).filter((person) => !state.hiddenPeople[person.id]);
  const any = savedHomes.length + savedPeople.length > 0;
  return `<main class="results-shell saved-shell" id="main-content">${topSection(tr("savedTitle"), tr("savedSub"), tr("saved"))}
    ${any ? `${savedHomes.length ? `<h2 class="subsection-title">${escapeHtml(tr("home"))}</h2><section class="saved-grid">${savedHomes.map(homeCard).join("")}</section>` : ""}${savedPeople.length ? `<h2 class="subsection-title">${escapeHtml(tr("people"))}</h2><section class="people-grid">${savedPeople.map(personCard).join("")}</section>` : ""}` : `<div class="group-empty saved-empty"><img src="${mascots.search}" alt=""><h2>${escapeHtml(tr("noSaved"))}</h2><p>${escapeHtml(tr("noSavedText"))}</p><button class="primary-button" type="button" data-action="go-tab" data-tab="homes">${escapeHtml(tr("home"))}${icon("arrow", 18)}</button></div>`}
  </main>`;
}

function profileRows() {
  return visibleSteps().map((step, index) => {
    const complete = answerComplete(step);
    const skipped = state.skipped.includes(step.id);
    const value = complete ? humanValue(state.answers[step.id]) : tr(skipped ? "skippedStatus" : "unanswered");
    return `<div class="profile-edit-row"><div><strong>${escapeHtml(localized(step.prompt))}</strong><span>${escapeHtml(value)}</span></div><button type="button" class="quiet-link" data-action="edit-step" data-index="${index}">${escapeHtml(tr("changeAnswer"))}</button></div>`;
  }).join("");
}

function youScreen() {
  const done = tallyAnswered();
  const steps = visibleSteps();
  const percentage = profileProgress();
  return `<main class="results-shell you-shell" id="main-content">${topSection(tr("youTitle"), tr("youSub"), tr("you"))}
    <div class="you-layout"><div class="you-primary">
      <section class="profile-progress-card"><div class="profile-hello"><img src="${mascots.help}" alt=""><div><h2>${escapeHtml(tr("profileStatus"))}</h2><p>${escapeHtml(`${done} / ${steps.length} ${tr("answered")}`)}</p></div></div><progress class="profile-meter" value="${percentage}" max="100" aria-label="${escapeAttr(tr("profileStatus"))}">${percentage}%</progress><div class="profile-meter-copy"><span>${percentage}% ${escapeHtml(tr("complete"))}</span><button class="quiet-link" type="button" data-action="start-profile">${escapeHtml(tr("resume"))}${icon("arrow", 16)}</button></div></section>
      <section class="profile-card"><div class="profile-list-head"><h2>${escapeHtml(tr("editProfile"))}</h2><span>${escapeHtml(tr("profilePrivate"))}</span></div>${profileRows()}</section>
    </div><div class="settings-stack">
      <section class="settings-card"><h2>${escapeHtml(tr("privacy"))}</h2><p>${escapeHtml(tr("localOnly"))}</p><div class="settings-row"><strong>${escapeHtml(tr("language"))}</strong>${languagePicker()}</div><div class="settings-row"><strong>${escapeHtml(tr("place" in WORDS[state.locale] ? "place" : "destination"))}</strong><button class="quiet-link" type="button" data-action="change-place">${escapeHtml(state.place || tr("unanswered"))}${icon("pencil", 15)}</button></div></section>
      <section class="data-card"><h2>${escapeHtml(tr("dataTitle"))}</h2><p>${escapeHtml(tr("dataText"))}</p><div class="data-actions"><button type="button" class="secondary-button" data-action="export-data">${icon("arrow", 16)}${escapeHtml(tr("export"))}</button><button type="button" class="danger-button" data-action="confirm-reset">${icon("close", 16)}${escapeHtml(tr("reset"))}</button></div></section>
      <section class="data-card"><h2>${escapeHtml(tr("rankingTitle"))}</h2><p>${escapeHtml(tr("rankingText"))}</p><button type="button" class="quiet-link" data-action="clear-signals">${escapeHtml(STRINGS("Reset ranking signals", "Resetează semnalele de ordine", "Reiniciar señales de orden")[state.locale])}</button></section>
    </div></div>
  </main>`;
}

function bottomNavigation() {
  const items = [["homes", "home"], ["people", "users"], ["together", "together"], ["saved", "heart"], ["you", "person"]];
  return `<nav class="bottom-nav" aria-label="${escapeAttr(STRINGS("Main navigation", "Navigare principală", "Navegación principal")[state.locale])}">${items.map(([tab, glyph]) => `<button class="nav-item ${state.tab === tab ? "active" : ""}" type="button" data-action="go-tab" data-tab="${tab}" ${state.tab === tab ? 'aria-current="page"' : ""}><span class="nav-icon-wrap">${icon(glyph, 21)}</span><span>${escapeHtml(tr(tab === "homes" ? "home" : tab))}</span></button>`).join("")}</nav>`;
}

function renderMainView() {
  switch (state.view) {
    case "welcome": return welcomeScreen();
    case "questionnaire": return questionScreen();
    case "detail-home": return homeDetailScreen();
    case "detail-person": return personDetailScreen();
    case "together": return togetherScreen();
    case "saved": return savedScreen();
    case "you": return youScreen();
    default: return resultsScreen();
  }
}

function renderApp({ scroll = false } = {}) {
  if (!app) return;
  if (!visibleSteps().length) state.step = 0;
  document.documentElement.lang = state.locale;
  app.innerHTML = `<div class="app-frame">${brandHeader()}${renderMainView()}${["welcome", "questionnaire"].includes(state.view) ? "" : bottomNavigation()}</div>${renderModal()}`;
  bindImageFallbacks();
  persist();
  if (scroll) window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function bindImageFallbacks() {
  app.querySelectorAll("img[data-home-image]").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.parentElement.classList.add("image-failed");
    }, { once: true });
  });
}

function modalHead(title, subtitle = "") {
  return `<div class="modal-head"><div><h2>${escapeHtml(title)}</h2>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}</div><button type="button" class="modal-close" data-action="close-modal" aria-label="${escapeAttr(tr("ariaClose"))}">${icon("close", 19)}</button></div>`;
}

function homeSelectOptions(selected = "") {
  return homes.filter((home) => homeCityMatch(home, state.place)).map((home) => `<option value="${escapeAttr(home.id)}" ${selected === home.id ? "selected" : ""}>${escapeHtml(`${home.title} · ${home.city} · ${homePrice(home)}`)}</option>`).join("");
}

function invitePreviewText(invite) {
  const names = (invite.names ?? []).filter(Boolean).join(", ");
  const hello = state.locale === "ro" ? `Bună${names ? `, ${names}` : ""}!` : state.locale === "es" ? `¡Hola${names ? `, ${names}` : ""}!` : `Hi${names ? `, ${names}` : ""}!`;
  const ask = STRINGS("I’m starting a home search in", "Încep o căutare de locuință în", "Estoy empezando a buscar vivienda en")[state.locale];
  const invitationLine = STRINGS("Would you like to plan it together?", "Vrei să o planificăm împreună?", "¿Te gustaría planificarla conmigo?")[state.locale];
  return `${hello} ${ask} ${state.place}. ${invitationLine}`;
}

function renderModal() {
  const modal = state.modal;
  if (!modal || modal.type === "hide-menu") return "";
  let title = "", subtitle = "", body = "", actions = "";
  if (modal.type === "change-place") {
    title = tr("changePlace");
    subtitle = tr("unknownCity");
    body = `<form id="change-place-form" class="modal-body"><label class="small-field-label" for="modal-place">${escapeHtml(tr("destination"))}</label><input class="text-field" id="modal-place" name="place" list="modal-city-options" value="${escapeAttr(state.place)}" required autocomplete="address-level2"><datalist id="modal-city-options">${citySuggestions().map((place) => `<option value="${escapeAttr(place)}"></option>`).join("")}</datalist><div class="modal-actions"><button class="secondary-button" type="button" data-action="close-modal">${escapeHtml(tr("cancel"))}</button><button class="primary-button" type="submit">${escapeHtml(tr("search"))}${icon("arrow", 16)}</button></div></form>`;
  } else if (["create-group", "invite-people"].includes(modal.type)) {
    title = modal.type === "create-group" ? tr("createTogether") : tr("previewInvite");
    subtitle = tr("inviteWarning");
    body = `<form id="invite-form" class="modal-body"><label class="small-field-label" for="group-name">${escapeHtml(tr("groupName"))}</label><input class="text-field" id="group-name" name="groupName" maxlength="60" value="${escapeAttr(state.group?.name || tr("groupNamePlaceholder"))}" placeholder="${escapeAttr(tr("groupNamePlaceholder"))}"><label class="small-field-label" for="invite-names">${escapeHtml(tr("inviteNames"))}</label><textarea class="textarea-field" id="invite-names" name="inviteNames" maxlength="240" placeholder="${escapeAttr(tr("invitePlaceholder"))}">${escapeHtml((state.group?.invited ?? []).join("\n"))}</textarea><p class="notice-box">${escapeHtml(tr("inviteWarning"))}</p><div class="modal-actions"><button class="secondary-button" type="button" data-action="close-modal">${escapeHtml(tr("cancel"))}</button><button class="primary-button" type="submit">${escapeHtml(tr("previewInvite"))}${icon("arrow", 16)}</button></div></form>`;
  } else if (modal.type === "invite-review") {
    title = tr("inviteOnly");
    subtitle = tr("draftOnly");
    const invite = modal.invite ?? state.inviteDraft ?? { names: [], text: "" };
    body = `<div class="modal-body"><label class="small-field-label" for="invite-text">${escapeHtml(tr("inviteOnly"))}</label><textarea class="textarea-field" id="invite-text" readonly>${escapeHtml(invite.text || invitePreviewText(invite))}</textarea><p class="notice-box">${escapeHtml(tr("inviteWarning"))}</p><div class="modal-actions"><button class="secondary-button" type="button" data-action="back-to-invite">${escapeHtml(tr("back"))}</button><button class="primary-button" type="button" data-action="save-invite-preview">${escapeHtml(state.group ? tr("previewInvite") : tr("createGroup"))}</button></div><button class="quiet-link copy-invite" type="button" data-action="copy-invite">${icon("copy", 16)}${escapeHtml(tr("copyInvite"))}</button></div>`;
  } else if (["intro", "intro-review"].includes(modal.type)) {
    const person = people.find((item) => item.id === modal.personId);
    const current = modal.intro ?? state.introDrafts.find((item) => item.personId === modal.personId) ?? { name: "", message: "" };
    title = modal.type === "intro" ? `${tr("connect")}${person ? ` · ${person.name}` : ""}` : tr("introPreview");
    subtitle = modal.type === "intro" ? tr("askIntro") : tr("draftOnly");
    if (modal.type === "intro") {
      body = `<form id="intro-form" class="modal-body"><label class="small-field-label" for="intro-name">${escapeHtml(tr("introName"))}</label><input class="text-field" id="intro-name" name="name" maxlength="60" value="${escapeAttr(current.name)}" autocomplete="name"><label class="small-field-label" for="intro-message">${escapeHtml(tr("introMessage"))}</label><textarea class="textarea-field" id="intro-message" name="message" maxlength="420" required placeholder="${escapeAttr(tr("introPlaceholder"))}">${escapeHtml(current.message)}</textarea><p class="notice-box">${escapeHtml(tr("draftOnly"))}</p><div class="modal-actions"><button class="secondary-button" type="button" data-action="close-modal">${escapeHtml(tr("cancel"))}</button><button class="primary-button" type="submit">${escapeHtml(tr("introPreview"))}${icon("arrow", 16)}</button></div></form>`;
    } else {
      body = `<div class="modal-body"><div class="intro-letter"><strong>${escapeHtml(current.name || tr("owner"))}</strong><p>${escapeHtml(current.message)}</p><span>${escapeHtml(person?.name || "")}</span></div><p class="notice-box">${escapeHtml(tr("draftOnly"))}</p><div class="modal-actions"><button class="secondary-button" type="button" data-action="edit-intro">${escapeHtml(tr("back"))}</button><button class="primary-button" type="button" data-action="save-intro">${escapeHtml(tr("keepDraft"))}</button></div></div>`;
    }
  } else if (modal.type === "room-plan") {
    title = tr("proposedPlan");
    subtitle = tr("planExplain");
    const existing = state.roomProposals.find((item) => item.participantId === "self" || item.participant === tr("owner")) ?? {};
    const currency = existing.currency || destinationCurrency() || "EUR";
    body = `<form id="room-plan-form" class="modal-body"><div class="notice-box">${escapeHtml(tr("noSplit"))}</div><label class="small-field-label" for="proposal-amount">${escapeHtml(tr("personAmount"))} · ${escapeHtml(tr("owner"))}</label><div class="money-input-wrap"><span class="money-symbol">${escapeHtml(currency)}</span><input class="money-field" id="proposal-amount" name="amount" type="number" min="0" step="any" inputmode="decimal" value="${escapeAttr(existing.amount ?? "")}" placeholder="0"><select class="currency-select" name="currency" aria-label="${escapeAttr(tr("moneyNoCurrency"))}">${[...new Set([currency, "EUR", "USD", "GBP", "MDL", "RON"])].map((code) => `<option value="${code}" ${code === currency ? "selected" : ""}>${code}</option>`).join("")}</select></div><p class="field-help">${escapeHtml(STRINGS("This is only your own proposed amount. Others are added after they agree to participate.", "Aceasta este doar suma propusă de tine. Ceilalți adaugă contribuții doar după ce acceptă să participe.", "Es solo tu cantidad propuesta. Los demás añaden aportes cuando aceptan participar.")[state.locale])}</p><div class="modal-actions"><button class="secondary-button" type="button" data-action="close-modal">${escapeHtml(tr("cancel"))}</button><button class="primary-button" type="submit">${escapeHtml(tr("addProposal"))}</button></div></form>`;
  } else if (modal.type === "viewing-plan") {
    title = tr("viewingPlan");
    subtitle = tr("viewingSaved");
    const homeId = modal.homeId || homes.find((home) => homeCityMatch(home, state.place))?.id || "";
    const selectedHome = homes.find((home) => home.id === homeId);
    body = `<form id="viewing-form" class="modal-body"><label class="small-field-label" for="view-home">${escapeHtml(tr("viewingPlace"))}</label><select class="select-field" id="view-home" name="homeId" required><option value="">${escapeHtml(tr("unknown"))}</option>${homeSelectOptions(homeId)}</select>${selectedHome ? `<div class="notice-box">${escapeHtml(tr("availability"))}: ${escapeHtml(selectedHome.availability && selectedHome.availability !== "unknown" ? selectedHome.availability : tr("availabilityUnknown"))}</div>` : ""}<label class="small-field-label" for="view-date">${escapeHtml(tr("viewingDate"))}</label><input class="text-field" type="date" id="view-date" name="date"><label class="small-field-label" for="view-time">${escapeHtml(tr("viewingTime"))}</label><input class="text-field" type="time" id="view-time" name="time"><label class="small-field-label" for="view-zone">${escapeHtml(STRINGS("Time zone of the viewing", "Fusul orar al vizionării", "Zona horaria de la visita")[state.locale])}</label><input class="text-field" id="view-zone" name="timeZone" value="${escapeAttr(eventTimeZone(selectedHome?.city || state.place))}" maxlength="60" required><label class="small-field-label" for="view-people">${escapeHtml(tr("viewingPeople"))}</label><input class="text-field" id="view-people" name="participants" maxlength="120" placeholder="${escapeAttr(STRINGS("You, and anyone else who has agreed to join", "Tu și persoanele care au confirmat", "Tú y quienes hayan confirmado que asistirán")[state.locale])}"><div class="notice-box">${escapeHtml(tr("viewingSaved"))}</div><div class="modal-actions"><button class="secondary-button" type="button" data-action="close-modal">${escapeHtml(tr("cancel"))}</button><button class="primary-button" type="submit">${escapeHtml(tr("createViewing"))}</button></div></form>`;
  } else if (modal.type === "viewing-outcome") {
    title = tr("viewingOutcome");
    subtitle = STRINGS("Keep the result with the home so the next choice is clearer.", "Păstrează concluzia lângă locuință pentru a ușura următoarea alegere.", "Guarda el resultado junto a la vivienda para decidir el siguiente paso.")[state.locale];
    const plan = state.viewingPlans[modal.index];
    body = `<div class="modal-body"><div class="reason-list">${[["outcomeInterested", "ready"], ["outcomeQuestions", "draft"], ["outcomePass", "unknown"]].map(([key, status]) => `<button type="button" data-action="save-outcome" data-index="${modal.index}" data-outcome="${status}">${escapeHtml(tr(key))}</button>`).join("")}</div>${plan?.outcome ? `<p class="notice-box">${escapeHtml(tr("outcomeSaved"))}</p>` : ""}</div>`;
  } else if (modal.type === "confirm-reset") {
    title = tr("reset");
    subtitle = tr("resetConfirm");
    body = `<div class="modal-actions"><button class="secondary-button" type="button" data-action="close-modal">${escapeHtml(tr("cancel"))}</button><button class="danger-button" type="button" data-action="reset-data">${escapeHtml(tr("clearEverything"))}</button></div>`;
  }
  if (!title) return "";
  return `<div class="modal-scrim" data-action="close-on-scrim"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">${modalHead(title, subtitle).replace("<h2>", "<h2 id=\"modal-title\">")}${body}</section></div>`;
}

function switchTab(tab) {
  if (!["homes", "people", "together", "saved", "you"].includes(tab)) return;
  state.tab = tab;
  state.modal = null;
  state.error = "";
  state.view = ["homes", "people"].includes(tab) ? "results" : tab;
  renderApp({ scroll: true });
}

function openProfile(startIndex = null) {
  const steps = visibleSteps();
  if (startIndex != null) state.step = Math.max(0, Math.min(startIndex, steps.length - 1));
  else {
    const next = steps.findIndex((step) => !answerComplete(step));
    state.step = next >= 0 ? next : 0;
  }
  state.view = "questionnaire";
  state.modal = null;
  state.error = "";
  renderApp({ scroll: true });
}

function startSearch(place) {
  const value = String(place ?? "").trim();
  if (!value) {
    state.error = tr("locationRequired");
    state.view = "welcome";
    renderApp();
    document.querySelector("#destination-input")?.focus();
    return;
  }
  const changed = placeKey(value) !== placeKey(state.place);
  state.place = value;
  if (changed) {
    delete state.answers.areas;
    state.skipped = state.skipped.filter((step) => step !== "areas");
  }
  state.error = "";
  state.filterType = "all";
  state.expandedHomes = false;
  state.expandedPeople = false;
  state.tab = ["people", "offer"].includes(state.answers.goal) ? "people" : "homes";
  state.view = "results";
  state.modal = null;
  persist();
  renderApp({ scroll: true });
}

function stepBack() {
  state.error = "";
  if (state.step > 0) state.step -= 1;
  else state.view = state.place ? "results" : "welcome";
  renderApp({ scroll: true });
}

function finishProfile() {
  state.view = "results";
  state.tab = ["people", "offer"].includes(state.answers.goal) ? "people" : "homes";
  state.error = "";
  persist();
  renderApp({ scroll: true });
  showToast(tr("rankingChanged"));
}

function moveToNextQuestion() {
  const steps = visibleSteps();
  const step = currentStep();
  state.error = "";
  if (["comfortableRent", "privateCeiling"].includes(step.id) && budgetIsContradictory()) {
    state.error = tr("budgetConflict");
    renderApp();
    return;
  }
  if (!answerComplete(step)) {
    state.error = tr("chooseOrSkip");
    renderApp();
    return;
  }
  state.skipped = state.skipped.filter((value) => value !== step.id);
  if (state.step >= steps.length - 1) { finishProfile(); return; }
  state.step += 1;
  renderApp({ scroll: true });
}

function skipQuestion() {
  const steps = visibleSteps();
  const step = currentStep();
  delete state.answers[step.id];
  if (!state.skipped.includes(step.id)) state.skipped.push(step.id);
  state.error = "";
  if (state.step >= steps.length - 1) { finishProfile(); return; }
  state.step += 1;
  renderApp({ scroll: true });
}

function showToast(message, undo = null) {
  if (!toastElement) return;
  if (state.toastTimer) clearTimeout(state.toastTimer);
  state.lastHidden = undo;
  toastElement.innerHTML = `<span>${escapeHtml(message)}</span>${undo ? `<button class="toast-undo" type="button" data-toast-action="undo-hide">${escapeHtml(tr("undo"))}</button>` : ""}`;
  toastElement.classList.add("visible");
  state.toastTimer = setTimeout(() => toastElement.classList.remove("visible"), 3400);
}

function toggleSave(type, id) {
  const key = type === "home" ? "savedHomes" : "savedPeople";
  const collection = state[key];
  const existed = collection.includes(id);
  state[key] = existed ? collection.filter((value) => value !== id) : [...collection, id];
  state.signals = state.signals.filter((signal) => !(signal.kind === "save" && signal.itemType === type && signal.itemId === id));
  if (!existed) state.signals.push({ kind: "save", itemType: type, itemId: id, at: new Date().toISOString() });
  persist();
  renderApp();
  showToast(STRINGS(existed ? "Removed from saved." : "Saved. Your choices can help order this list on this device.", existed ? "A fost eliminat din lista salvată." : "Salvat. Alegerile tale pot ordona lista pe acest dispozitiv.", existed ? "Se quitó de guardados." : "Guardado. Tus elecciones pueden ordenar esta lista en este dispositivo.")[state.locale]);
}

function hideItem(type, id, reason) {
  const key = type === "home" ? "hiddenHomes" : "hiddenPeople";
  state[key][id] = reason;
  state.signals.push({ kind: "hide", itemType: type, itemId: id, reason, at: new Date().toISOString() });
  state.modal = null;
  persist();
  renderApp();
  showToast(tr("hiddenNote"), { type, id, reason });
}

function undoHidden() {
  if (!state.lastHidden) return;
  const { type, id } = state.lastHidden;
  const key = type === "home" ? "hiddenHomes" : "hiddenPeople";
  delete state[key][id];
  state.signals = state.signals.filter((signal) => !(signal.kind === "hide" && signal.itemType === type && signal.itemId === id));
  state.lastHidden = null;
  persist();
  renderApp();
  toastElement?.classList.remove("visible");
}

function toggleGroupShortlist(type, id) {
  if (!state.group) {
    showToast(STRINGS("Start a shared search first to make a group shortlist.", "Începe o căutare comună pentru a crea o listă de grup.", "Empieza una búsqueda compartida para crear una lista de grupo.")[state.locale]);
    return;
  }
  const key = `${type}:${id}`;
  const current = state.group.shortlist ?? [];
  state.group.shortlist = current.includes(key) ? current.filter((value) => value !== key) : [...current, key];
  persist();
  renderApp();
  showToast(STRINGS("Shared shortlist updated on this device.", "Lista comună a fost actualizată pe acest dispozitiv.", "Lista compartida actualizada en este dispositivo.")[state.locale]);
}

function setLanguage(locale) {
  if (!APP_LANGUAGES.includes(locale) || locale === state.locale) return;
  state.locale = locale;
  state.error = "";
  persist();
  renderApp();
}

function changeGoal(goal) {
  const previousGoal = state.answers.goal;
  const changedRentBasis = (previousGoal === "household") !== (goal === "household");
  const changedSpaceMeaning = (previousGoal === "household") !== (goal === "household");
  setAnswer("goal", goal);
  if (changedRentBasis) {
    delete state.answers.comfortableRent;
    delete state.answers.privateCeiling;
    state.skipped = state.skipped.filter((step) => !["comfortableRent", "privateCeiling"].includes(step));
  }
  if (changedSpaceMeaning) {
    delete state.answers.space;
    state.skipped = state.skipped.filter((step) => step !== "space");
  }
  state.step = 0;
  persist();
}

function clearPreviewData() {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* State can still be cleared for this session. */ }
  state.view = "welcome";
  state.tab = "homes";
  state.place = "";
  state.answers = {};
  state.skipped = [];
  state.step = 0;
  state.savedHomes = [];
  state.savedPeople = [];
  state.hiddenHomes = {};
  state.hiddenPeople = {};
  state.signals = [];
  state.group = null;
  state.inviteDraft = null;
  state.introDrafts = [];
  state.roomProposals = [];
  state.viewingPlans = [];
  state.modal = null;
  state.error = "";
  persist();
  renderApp({ scroll: true });
  showToast(tr("resetDone"));
}

function exportData() {
  const payload = {
    product: "Domi local preview",
    exportedAt: new Date().toISOString(),
    destination: state.place || null,
    language: state.locale,
    answers: state.answers,
    unansweredOrSkipped: state.skipped,
    savedHomes: state.savedHomes,
    savedPeople: state.savedPeople,
    hiddenResults: { homes: state.hiddenHomes, people: state.hiddenPeople },
    localPreferenceSignals: state.signals,
    sharedSearchDraft: state.group,
    introductionDrafts: state.introDrafts,
    roomProposals: state.roomProposals,
    viewingPlans: state.viewingPlans,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "domi-search-preview.json";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast(STRINGS("Your browser downloaded a copy of your local search data.", "Browserul a descărcat o copie a datelor locale.", "El navegador descargó una copia de tus datos locales.")[state.locale]);
}

function createInvitePreview(form) {
  const formData = new FormData(form);
  const names = String(formData.get("inviteNames") ?? "").split(/[\n,;]/).map((item) => item.trim()).filter(Boolean).slice(0, 8);
  const uniqueNames = [...new Set(names)];
  const draft = { name: String(formData.get("groupName") ?? "").trim() || tr("groupNamePlaceholder"), names: uniqueNames };
  draft.text = invitePreviewText(draft);
  state.inviteDraft = draft;
  state.modal = { type: "invite-review", invite: draft };
  renderApp();
}

function saveInvitePreview() {
  const invite = state.inviteDraft;
  if (!invite) return;
  if (!state.group) state.group = { name: invite.name, invited: [], shortlist: [], createdAt: new Date().toISOString() };
  if (invite.name) state.group.name = invite.name;
  state.group.invited = [...new Set([...(state.group.invited ?? []), ...invite.names])];
  state.inviteDraft = invite;
  state.view = "together";
  state.tab = "together";
  state.modal = null;
  persist();
  renderApp({ scroll: true });
  showToast(state.group.invited.length ? tr("groupCreated") : tr("groupCreated"));
}

function openIntroduction(personId) {
  const previous = state.introDrafts.find((item) => item.personId === personId) ?? { name: "", message: "" };
  state.modal = { type: "intro", personId, intro: previous };
  renderApp();
}

function openViewing(homeId = "") {
  if (!homeId && state.group?.shortlist?.length) {
    const firstHome = state.group.shortlist.find((key) => key.startsWith("home:"));
    if (firstHome) homeId = firstHome.slice("home:".length);
  }
  state.modal = { type: "viewing-plan", homeId };
  renderApp();
}

app.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  const action = control.dataset.action;
  const id = control.dataset.id;
  const type = control.dataset.type;
  const value = control.dataset.value;

  if (action === "brand-home") {
    event.preventDefault();
    state.view = "welcome";
    state.error = "";
    renderApp({ scroll: true });
  } else if (action === "step-back") stepBack();
  else if (action === "leave-profile") {
    state.view = "results";
    state.tab = ["people", "offer"].includes(state.answers.goal) ? "people" : "homes";
    state.error = "";
    persist();
    renderApp({ scroll: true });
  }
  else if (action === "step-next") moveToNextQuestion();
  else if (action === "step-skip") skipQuestion();
  else if (action === "answer-choice") {
    const step = STEPS.find((item) => item.id === control.dataset.step);
    if (!step) return;
    if (step.type === "multi") {
      const current = Array.isArray(state.answers[step.id]) ? state.answers[step.id] : [];
      setAnswer(step.id, current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
    } else {
      if (step.id === "goal") changeGoal(value);
      else setAnswer(step.id, value);
    }
    state.error = "";
    const stepId = step.id;
    renderApp();
    app.querySelector(`[data-action="answer-choice"][data-step="${stepId}"][data-value="${CSS.escape(value)}"]`)?.focus();
  } else if (action === "go-tab") switchTab(control.dataset.tab);
  else if (action === "start-profile") openProfile();
  else if (action === "edit-step") openProfile(Number(control.dataset.index));
  else if (action === "open-home") {
    state.activeHome = id;
    state.view = "detail-home";
    state.modal = null;
    renderApp({ scroll: true });
  } else if (action === "open-person") {
    state.activePerson = id;
    state.view = "detail-person";
    state.modal = null;
    renderApp({ scroll: true });
  } else if (action === "back-to-results") {
    state.view = state.tab === "together" ? "together" : state.tab === "saved" ? "saved" : "results";
    state.modal = null;
    renderApp({ scroll: true });
  } else if (action === "toggle-save-home") toggleSave("home", id);
  else if (action === "toggle-save-person") toggleSave("person", id);
  else if (action === "open-hide-menu") {
    state.modal = state.modal?.type === "hide-menu" && state.modal.id === id ? null : { type: "hide-menu", id, itemType: type };
    renderApp();
    app.querySelector(`[data-action="open-hide-menu"][data-id="${CSS.escape(id)}"]`)?.focus();
  } else if (action === "hide-item") hideItem(type, id, control.dataset.reason);
  else if (action === "undo-hide") undoHidden();
  else if (action === "home-filter") { state.filterType = value; state.expandedHomes = false; renderApp(); }
  else if (action === "load-more") {
    if (state.tab === "homes") state.expandedHomes = true;
    else state.expandedPeople = true;
    renderApp();
  }
  else if (action === "change-place") { state.modal = { type: "change-place" }; state.error = ""; renderApp(); setTimeout(() => document.querySelector("#modal-place")?.focus(), 0); }
  else if (action === "preview-city") startSearch("Berlin, Germany");
  else if (action === "add-group-home") toggleGroupShortlist("home", id);
  else if (action === "add-group-person") toggleGroupShortlist("person", id);
  else if (action === "remove-shared-item") {
    state.group.shortlist = (state.group.shortlist ?? []).filter((key) => key !== control.dataset.key);
    persist(); renderApp();
  } else if (action === "open-create-group") { state.modal = { type: "create-group" }; renderApp(); }
  else if (action === "show-invite") { state.modal = { type: "invite-people" }; renderApp(); }
  else if (action === "close-modal") { state.modal = null; renderApp(); }
  else if (action === "close-on-scrim" && event.target === control) { state.modal = null; renderApp(); }
  else if (action === "back-to-invite") { state.modal = { type: state.group ? "invite-people" : "create-group" }; renderApp(); }
  else if (action === "save-invite-preview") saveInvitePreview();
  else if (action === "copy-invite") {
    const text = state.inviteDraft?.text || (state.group ? invitePreviewText({ names: state.group.invited ?? [] }) : "");
    navigator.clipboard?.writeText(text).then(() => showToast(tr("copied"))).catch(() => showToast(STRINGS("Select and copy the invitation text above.", "Selectează și copiază textul invitației de mai sus.", "Selecciona y copia el texto de invitación.")[state.locale]));
  } else if (action === "draft-intro") openIntroduction(id);
  else if (action === "edit-intro") { const intro = state.modal.intro; state.modal = { ...state.modal, type: "intro", intro }; renderApp(); }
  else if (action === "save-intro") {
    const current = state.modal?.intro;
    if (!current) return;
    state.introDrafts = [...state.introDrafts.filter((item) => item.personId !== state.modal.personId), { personId: state.modal.personId, name: current.name, message: current.message, savedAt: new Date().toISOString() }];
    state.modal = null; persist(); renderApp(); showToast(tr("draftSaved"));
  } else if (action === "open-room-plan") { state.modal = { type: "room-plan" }; renderApp(); }
  else if (action === "plan-viewing") openViewing(id);
  else if (action === "viewing-outcome") { state.modal = { type: "viewing-outcome", index: Number(control.dataset.index) }; renderApp(); }
  else if (action === "save-outcome") {
    const index = Number(control.dataset.index);
    const plan = state.viewingPlans[index];
    if (!plan) return;
    plan.outcome = control.dataset.outcome;
    persist(); renderApp(); showToast(tr("outcomeSaved"));
  } else if (action === "confirm-reset") { state.modal = { type: "confirm-reset" }; renderApp(); }
  else if (action === "reset-data") clearPreviewData();
  else if (action === "export-data") exportData();
  else if (action === "clear-signals") {
    state.signals = [];
    state.hiddenHomes = {};
    state.hiddenPeople = {};
    persist(); renderApp(); showToast(STRINGS("Search ordering feedback was cleared.", "Semnalele care ordonau căutarea au fost șterse.", "Se borraron las señales de ordenación.")[state.locale]);
  }
});

app.addEventListener("input", (event) => {
  const field = event.target;
  if (field.matches("[data-answer-input]")) {
    setAnswer(field.dataset.step, field.value);
    const count = field.closest(".journey-card")?.querySelector(".character-count");
    if (count) count.textContent = `${field.value.length} / ${field.maxLength}`;
    return;
  }
  if (field.matches("[data-money-input]")) {
    const stepId = field.dataset.step;
    const previous = state.answers[stepId] ?? loadMoneyAnswer(STEPS.find((step) => step.id === stepId));
    setAnswer(stepId, { amount: field.value, currency: previous.currency });
    return;
  }
  if (field.matches("[data-size-input]")) {
    setAnswer(field.dataset.step, field.value);
  }
});

app.addEventListener("change", (event) => {
  const control = event.target;
  if (control.matches("[data-action='language']")) {
    setLanguage(control.value);
    return;
  }
  if (control.matches("[data-action='change-currency']")) {
    const stepId = control.dataset.step;
    const previous = state.answers[stepId] ?? { amount: "" };
    const hasAmount = previous.amount !== "" && previous.amount != null;
    setAnswer(stepId, { amount: "", currency: control.value });
    if (stepId === "comfortableRent" && state.answers.privateCeiling) {
      setAnswer("privateCeiling", { amount: "", currency: control.value });
    }
    renderApp();
    if (hasAmount) showToast(STRINGS("Amount cleared because the currency changed. Enter it again in the new currency.", "Suma a fost ștearsă la schimbarea monedei. Introdu valoarea în moneda nouă.", "Se borró el importe al cambiar la moneda. Vuelve a escribirlo en la moneda nueva.")[state.locale]);
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  if (form.id === "search-form") {
    startSearch(new FormData(form).get("place"));
  } else if (form.id === "change-place-form") {
    const place = new FormData(form).get("place");
    if (!String(place ?? "").trim()) { document.querySelector("#modal-place")?.focus(); return; }
    startSearch(place);
  } else if (form.id === "invite-form") {
    createInvitePreview(form);
  } else if (form.id === "intro-form") {
    const values = new FormData(form);
    const intro = { name: String(values.get("name") ?? "").trim(), message: String(values.get("message") ?? "").trim() };
    if (!intro.message) { showToast(tr("messageRequired")); form.querySelector("[name='message']")?.focus(); return; }
    state.modal = { type: "intro-review", personId: state.modal.personId, intro };
    renderApp();
  } else if (form.id === "room-plan-form") {
    const values = new FormData(form);
    const amount = String(values.get("amount") ?? "");
    const currency = String(values.get("currency") ?? "");
    if (amount === "" || !Number.isFinite(Number(amount)) || Number(amount) < 0 || !currency) { showToast(tr("chooseOrSkip")); return; }
    const homeId = String(values.get("homeId") ?? "");
    state.roomProposals = [...state.roomProposals.filter((item) => !((item.participantId === "self" || item.participant === tr("owner")) && item.homeId === homeId)), { participantId: "self", participant: tr("owner"), amount: Number(amount), currency, homeId, status: "proposed", proposedAt: new Date().toISOString() }];
    state.modal = null; persist(); renderApp(); showToast(tr("proposalSaved"));
  } else if (form.id === "viewing-form") {
    const values = new FormData(form);
    const homeId = String(values.get("homeId") ?? "");
    if (!homeId) { showToast(tr("placeNotFound")); return; }
    const timeZone = String(values.get("timeZone") ?? "").trim();
    try { new Intl.DateTimeFormat("en", { timeZone }).format(); } catch { showToast(STRINGS("Choose a valid time zone, such as Europe/Berlin.", "Alege un fus orar valid, de exemplu Europe/Berlin.", "Elige una zona horaria válida, como Europe/Berlin.")[state.locale]); return; }
    const plan = { homeId, date: String(values.get("date") ?? ""), time: String(values.get("time") ?? ""), timeZone, participants: String(values.get("participants") ?? "").split(/[,;]/).map((part) => part.trim()).filter(Boolean), status: "saved-plan", outcome: null, createdAt: new Date().toISOString() };
    state.viewingPlans.push(plan);
    state.modal = null; state.view = "together"; state.tab = "together"; persist(); renderApp({ scroll: true }); showToast(tr("viewingSaved"));
  }
});

toastElement?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-toast-action='undo-hide']");
  if (button) undoHidden();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modal && state.modal.type !== "hide-menu") {
    state.modal = null;
    renderApp();
  }
});

renderApp();
loadProductData().then(() => renderApp());
