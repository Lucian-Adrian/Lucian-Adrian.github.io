const REPLIES = {
  en: {
    open: "I’ll leave that part open for now.",
    goal: {
      room: "A room to call yours. I’ll keep a lamp on.",
      home: "A whole home to shape. I’ll bring the imaginary tape measure.",
      people: "People first. The kettle can meet the homes later.",
      household: "A home for your crew. I’ll count mugs, not opinions.",
      offer: "A home looking for its people. Let’s describe it.",
    },
    offerType: {
      room: "A room to offer. I’ll leave the welcome mat by the door.",
      "whole-home": "A whole home to offer. I’ll bring the imaginary tape measure.",
    },
    space: {
      private: "A room of your own. I’ll leave the lamp metaphorical.",
      shared: "A shared room. I’ll label the sock drawer.",
      any: "Flexible on bedrooms. I’ll leave the floor plan open.",
      number: "At least {n} bedrooms. I’ll leave room for the kettle.",
    },
    party: {
      solo: "Solo move. That’s one mug on my packing list.",
      "with-one": "Two in the moving crew. I’ll count two mugs.",
      "with-two": "Three in the moving crew. The kettle gets a committee.",
      "with-three": "Four or more. I’ll set out extra mugs.",
      unsure: "Still deciding who’s moving. The chairs can wait.",
    },
    householdSize: {
      any: "No fixed household size. I’ll leave room for new plans.",
      number: "{n} people in the home. I’ll count chairs, not guesses.",
    },
    moveDate: {
      asap: "As soon as you can. I’ll keep the calendar loose.",
      month: "Within the next month. The calendar can breathe.",
      later: "One to three months. There’s time to find the boxes.",
      flexible: "Flexible timing. The calendar can have a nap.",
    },
    stayLength: {
      "under-six": "A few months. An estimate isn’t a promise.",
      year: "About a year. Time to pick a favorite mug.",
      long: "A few years. Plenty of time for a favorite mug.",
      unsure: "Still unsure how long. We can leave that open.",
    },
    quiet: {
      mornings: "Quiet mornings. I’ll be quieter than the toaster.",
      evenings: "Quiet evenings. I’ll turn down the kettle.",
      flexible: "No strict quiet hours. Routines can be a house chat.",
    },
    workHome: {
      often: "Home most days. A work corner belongs in the chat.",
      sometimes: "Some days at home. Workspace can stay a question.",
      rarely: "Rarely working at home. I won’t assume a desk is needed.",
      unsure: "Your routine is still open. I won’t guess about a desk.",
    },
    smoking: {
      "smoke-ok": "Indoor smoking works for you. I’ll keep the house rule clear.",
      "smoke-outside": "Outside only. The smoking rule stays by the door.",
      "smoke-free": "A smoke-free home matters to you. Clear preference.",
      "smoke-unsure": "You’d rather discuss it. I’ll leave room for that chat.",
    },
    pets: {
      "pet-with-me": "Your pet is moving too. Check each home’s pet rule.",
      "pet-welcome": "You’d like pets to be welcome. Check each home’s policy.",
      "no-pet": "No pet in your plans. One less bowl on the packing list.",
      "pet-discuss": "It depends on the home. Pet rules stay listing by listing.",
    },
    guests: {
      "guests-often": "Friends often visit. I’ll add extra mugs to the house chat.",
      "guests-sometimes": "Sometimes, with a heads-up. Even the doorbell can be polite.",
      "guests-rarely": "You like a quiet home. The sofa can stay in slippers.",
      "guests-discuss": "Guest plans are a house chat. I’ll leave the door rule open.",
    },
    cleaning: {
      "clean-rotate": "Chores on rotation. Even the sponge gets a schedule.",
      "clean-own": "Everyone handles their own. The dishes know the rule.",
      "clean-schedule": "A simple weekly plan. The broom can stop guessing.",
      "clean-discuss": "You’d rather agree together. The mop can skip the meeting.",
    },
    languages: {
      one: "One language for home. I’ve got “tea” covered.",
      many: "More languages for home. More ways to say “tea.”",
    },
    mustHaves: {
      one: "{features} is on your list. Check each listing to confirm it.",
      many: "{features} are on your list. Each listing must confirm them.",
      more: "{features} and more are on your list. Check each listing.",
    },
    comfortableRent: "Your rent preference stays on this device.",
    privateCeiling: "Your rent ceiling stays on this device.",
    upfrontFunds: "This amount stays on your device, tucked away.",
    areas: "Area notes saved. I won’t guess the commute.",
    intro: "A little hello is ready. I’ll leave the rest in your words.",
    visibility: {
      private: "Private is your choice here. This preview publishes nothing.",
      "intro-only": "Share when you start a chat. This preview shares nothing.",
      visible: "Nearby visibility is your preference. This preview publishes nothing.",
    },
    offer: {
      offerRent: {
        room: "Room rent stays on this device in the preview.",
        "whole-home": "Whole-home rent stays on this device in the preview.",
        general: "Rent stays on this device in the preview.",
      },
      moveDate: {
        asap: "Ready as soon as possible. I’ll keep the calendar loose.",
        month: "Ready within the next month. The calendar can breathe.",
        later: "Ready in one to three months. Time to prep the keys.",
        flexible: "Availability is flexible. The calendar can have a nap.",
      },
      stayLength: {
        "under-six": "A few months could work. Keep the exact terms clear.",
        year: "About a year could work. The details can stay a house chat.",
        long: "A few years could work. Keep the exact terms clear.",
        unsure: "How long someone could stay is still open. That’s fine.",
      },
      householdSize: {
        any: "No set household size. I’ll leave the mug count flexible.",
        number: "A {n}-person household. Future housemates can picture it.",
      },
      pets: {
        "pet-with-me": "Your pet is part of the household. Future pet rules need a chat.",
        "pet-welcome": "You’d welcome pets. Keep the house rules clear.",
        "no-pet": "No pet is part of this household. Future housemates can know that.",
        "pet-discuss": "Pet arrangements depend on the household. Leave room to talk.",
      },
      quiet: {
        mornings: "Quiet mornings at home. The toaster can keep its voice down.",
        evenings: "Quiet evenings. Even the kettle can whisper.",
        flexible: "No fixed quiet hours. Future housemates can agree on a rhythm.",
      },
      workHome: {
        often: "Working at home most days. The daytime routine matters.",
        sometimes: "Some workdays at home. A quick routine chat can help.",
        rarely: "Rarely working at home. I won’t invent a desk routine.",
        unsure: "That daytime rhythm is still open for a house chat.",
      },
      smoking: {
        "smoke-ok": "Indoor smoking works for you. Keep the house rule clear.",
        "smoke-outside": "Outside only. The doorway can keep the rule clear.",
        "smoke-free": "You prefer a smoke-free home. Keep that boundary clear.",
        "smoke-unsure": "You’d rather discuss smoking. The house rules can be a chat.",
      },
      guests: {
        "guests-often": "Friends often visit. The doorbell can learn the house rhythm.",
        "guests-sometimes": "Sometimes, with notice. The doorbell appreciates a heads-up.",
        "guests-rarely": "Few guests, by preference. The sofa gets a quiet evening.",
        "guests-discuss": "Agree on visits together. The doorbell can wait for the house rules.",
      },
      cleaning: {
        "clean-rotate": "Shared chores on rotation. Even the sponge gets a turn.",
        "clean-own": "Everyone handles their own. The plates know their owner.",
        "clean-schedule": "A weekly cleaning plan. The broom can stop guessing.",
        "clean-discuss": "Cleaning rules belong in the house chat. The mop can sit this one out.",
      },
      languages: {
        one: "One language for the household. I can say “tea” in that one.",
        many: "Several home languages. That’s more ways to say “tea.”",
      },
      intro: "Your place’s welcome is taking shape. I’ll leave it in your words.",
    },
  },
  ro: {
    open: "Lăsăm răspunsul deschis deocamdată.",
    goal: {
      room: "O cameră doar a ta. Las aprinsă o lampă imaginară.",
      home: "O locuință întreagă de amenajat. Aduc ruleta imaginară.",
      people: "Mai întâi oamenii. Ceainicul poate aștepta până găsim locuința.",
      household: "O casă pentru grupul vostru. Număr cănile, nu părerile.",
      offer: "O locuință își caută oamenii. Hai să o descriem.",
    },
    offerType: {
      room: "O cameră de oferit. Las preșul de bun venit la ușă.",
      "whole-home": "O locuință întreagă. Aduc ruleta imaginară.",
    },
    space: {
      private: "O cameră doar a ta. Las loc și pentru veioză.",
      shared: "Cameră împărțită. Pun etichetă pe sertarul comun de șosete.",
      any: "Ești flexibil(ă) la dormitoare. Las planul deschis.",
      number: "Cel puțin {n} dormitoare. Păstrez loc și pentru ceainic.",
    },
    party: {
      solo: "Te muți pe cont propriu. O cană intră pe lista de împachetat.",
      "with-one": "Doi în grupul de mutare. Pun două căni pe listă.",
      "with-two": "Trei în grupul de mutare. Ceainicul intră în ședință.",
      "with-three": "Cel puțin patru. Scot cănile în plus.",
      unsure: "Încă vă hotărâți cine se mută. Scaunele mai pot aștepta.",
    },
    householdSize: {
      any: "Fără un număr fix pentru locuință. Las loc pentru planuri noi.",
      number: "{n} persoane în locuință. Număr scaunele fără să ghicesc.",
    },
    moveDate: {
      asap: "Cât mai curând. Las calendarul deschis.",
      month: "În următoarele 30 de zile. Calendarul are timp să respire.",
      later: "În 1–3 luni. Avem timp să găsim cutiile.",
      flexible: "Data e flexibilă. Calendarul poate trage un pui de somn.",
    },
    stayLength: {
      "under-six": "Câteva luni. O estimare nu devine promisiune.",
      year: "Cam un an. Destul cât să alegi cana preferată.",
      long: "Câțiva ani. Cana preferată are timp să apară.",
      unsure: "Încă nu știi cât timp. Lăsăm răspunsul deschis.",
    },
    quiet: {
      mornings: "Liniște dimineața. Trec mai încet decât prăjitorul.",
      evenings: "Liniște seara. Dau ceainicului volumul mai încet.",
      flexible: "Fără ore stricte. Rutina casei se poate discuta.",
    },
    workHome: {
      often: "Lucrezi de acasă des. Păstrez un colț de lucru în discuție.",
      sometimes: "Unele zile de acasă. Spațiul de lucru rămâne de discutat.",
      rarely: "Lucrezi rar de acasă. Nu presupun că ai nevoie de birou.",
      unsure: "Programul rămâne neclar. Nu ghicesc dacă e nevoie de birou.",
    },
    smoking: {
      "smoke-ok": "Fumatul în casă e în regulă pentru tine. Regula rămâne clară.",
      "smoke-outside": "Doar afară. Regula rămâne lângă ușă.",
      "smoke-free": "Preferi o locuință fără fum. Am păstrat preferința clară.",
      "smoke-unsure": "Preferi să discuți regula. Las loc pentru conversație.",
    },
    pets: {
      "pet-with-me": "Te muți cu un animal. Verifică regula fiecărei locuințe.",
      "pet-welcome": "Ai vrea ca animalele să fie acceptate. Verifică fiecare anunț.",
      "no-pet": "Nu ai animal în plan. Un bol mai puțin de împachetat.",
      "pet-discuss": "Depinde de locuință. Regula se verifică pentru fiecare anunț.",
    },
    guests: {
      "guests-often": "Vin des prietenii. Pregătesc căni în plus pentru musafiri.",
      "guests-sometimes": "Uneori, cu anunț înainte. Și soneria poate fi politicoasă.",
      "guests-rarely": "Preferi liniște acasă. Canapeaua poate rămâne în papuci.",
      "guests-discuss": "Stabiliți împreună. Las regula vizitelor deschisă.",
    },
    cleaning: {
      "clean-rotate": "Treburile se împart pe rând. Buretele are programul lui.",
      "clean-own": "Fiecare se ocupă de ale sale. Și farfuriile știu regula.",
      "clean-schedule": "Un plan săptămânal simplu. Mătura nu mai ghicește.",
      "clean-discuss": "Stabiliți împreună. Las mopul în afara ședinței.",
    },
    languages: {
      one: "O limbă de vorbit acasă. De „ceai” mă ocup.",
      many: "Mai multe limbi acasă. Și mai multe feluri de a spune „ceai”.",
    },
    mustHaves: {
      one: "{features} e pe listă. Verifică dotarea în fiecare anunț.",
      many: "{features} sunt pe listă. Fiecare anunț trebuie verificat.",
      more: "{features} și altele sunt pe listă. Verifică fiecare anunț.",
    },
    comfortableRent: "Preferința de chirie rămâne pe dispozitivul tău.",
    privateCeiling: "Limita de chirie rămâne pe dispozitivul tău.",
    upfrontFunds: "Suma inițială rămâne pe dispozitivul tău.",
    areas: "Ai ales zonele. Nu ghicesc distanțele.",
    intro: "Un salut e gata. Las restul în cuvintele tale.",
    visibility: {
      private: "Alegerea ta rămâne privată aici. Previzualizarea nu publică nimic.",
      "intro-only": "Distribuire la conversație. Previzualizarea nu trimite nimic.",
      visible: "Vizibilitatea în zonă e preferința ta. Previzualizarea nu publică nimic.",
    },
    offer: {
      offerRent: {
        room: "Chiria camerei rămâne pe dispozitiv în previzualizare.",
        "whole-home": "Chiria locuinței rămâne pe dispozitiv în previzualizare.",
        general: "Chiria rămâne pe dispozitiv în previzualizare.",
      },
      moveDate: {
        asap: "Poți primi pe cineva cât mai curând. Las calendarul deschis.",
        month: "Poți primi pe cineva în următoarele 30 de zile. Calendarul respiră.",
        later: "În 1–3 luni. Rămâne timp să pregătești cheile.",
        flexible: "Disponibilitatea e flexibilă. Calendarul poate trage un pui de somn.",
      },
      stayLength: {
        "under-six": "Câteva luni ar putea funcționa. Stabiliți clar durata.",
        year: "Cam un an ar putea funcționa. Detaliile se pot discuta.",
        long: "Câțiva ani ar putea funcționa. Stabiliți clar condițiile.",
        unsure: "Cât timp ar putea sta cineva rămâne de stabilit. E în regulă.",
      },
      householdSize: {
        any: "Fără un număr fix în gospodărie. Las cănile necontate.",
        number: "O gospodărie de {n} persoane. Viitorii colegi își pot face o idee.",
      },
      pets: {
        "pet-with-me": "Animalul tău face parte din gospodărie. Clarifică regulile pentru viitorii colegi.",
        "pet-welcome": "Ai accepta animale. E bine ca regulile casei să fie clare.",
        "no-pet": "Nu ai animal în gospodărie. Viitorii colegi pot ști asta.",
        "pet-discuss": "Depinde de gospodărie. Regulile pentru animale se pot discuta.",
      },
      quiet: {
        mornings: "Dimineți liniștite acasă. Și prăjitorul poate vorbi mai încet.",
        evenings: "Liniște seara. Și ceainicul poate șopti.",
        flexible: "Fără ore fixe de liniște. Rutina se discută cu viitorii colegi.",
      },
      workHome: {
        often: "Lucrezi des de acasă. E bine ca rutina de zi să fie clară.",
        sometimes: "Unele zile de acasă. Rutina de lucru se poate discuta.",
        rarely: "Lucrezi rar de acasă. Nu inventez reguli pentru birou.",
        unsure: "Programul de acasă rămâne deschis pentru o discuție.",
      },
      smoking: {
        "smoke-ok": "Fumatul în interior e în regulă. Regula casei trebuie să fie clară.",
        "smoke-outside": "Doar afară. Regula rămâne clară la intrare.",
        "smoke-free": "Preferi o locuință fără fum. Limita merită spusă clar.",
        "smoke-unsure": "Preferi să discuți fumatul. Regulile casei se pot stabili împreună.",
      },
      guests: {
        "guests-often": "Vin des prietenii. Soneria va învăța ritmul casei.",
        "guests-sometimes": "Uneori, cu anunț înainte. Soneria apreciază avertismentul.",
        "guests-rarely": "Preferi puține vizite. Canapeaua are parte de o seară liniștită.",
        "guests-discuss": "Stabiliți vizitele împreună. Soneria mai poate aștepta.",
      },
      cleaning: {
        "clean-rotate": "Treburile se împart pe rând. Și buretele își așteaptă tura.",
        "clean-own": "Fiecare se ocupă de ale sale. Farfuriile își știu stăpânul.",
        "clean-schedule": "Un plan săptămânal. Mătura nu mai trebuie să ghicească.",
        "clean-discuss": "Regulile se discută în casă. Mopul poate lipsi de la ședință.",
      },
      languages: {
        one: "O limbă pentru gospodărie. Știu să spun „ceai” și așa.",
        many: "Mai multe limbi acasă. Mai multe feluri de a spune „ceai”.",
      },
      intro: "Prezentarea locuinței prinde contur. Las textul în cuvintele tale.",
    },
  },
  es: {
    open: "Dejamos esa parte abierta por ahora.",
    goal: {
      room: "Una habitación para ti. Dejo encendida una lámpara imaginaria.",
      home: "Una vivienda entera por preparar. Traigo la cinta métrica imaginaria.",
      people: "Primero las personas. El hervidor puede esperar a las viviendas.",
      household: "Una vivienda para el grupo. Cuento tazas, no opiniones.",
      offer: "Una vivienda busca a su gente. Vamos a describirla.",
    },
    offerType: {
      room: "Una habitación para ofrecer. Dejo listo el felpudo.",
      "whole-home": "Una vivienda entera para ofrecer. Traigo la cinta métrica imaginaria.",
    },
    space: {
      private: "Habitación propia. Mi lámpara imaginaria ya tiene sitio.",
      shared: "Habitación compartida. Etiqueto el cajón común de calcetines.",
      any: "Te sirven varias opciones. Dejo el plano sin cerrar.",
      number: "Al menos {n} dormitorios. También dejo sitio para el hervidor.",
    },
    party: {
      solo: "Te mudas por tu cuenta. Una taza va en la lista de embalaje.",
      "with-one": "Dos personas en la mudanza. Guardo dos tazas para el viaje.",
      "with-two": "Tres en el grupo. El hervidor ya tiene voz en la reunión.",
      "with-three": "Cuatro o más. Saco las tazas extra.",
      unsure: "Aún decidís quién se muda. Las sillas pueden esperar.",
    },
    householdSize: {
      any: "Sin un número fijo para el hogar. Dejo sitio para nuevos planes.",
      number: "{n} personas en casa. Cuento sillas sin adivinar.",
    },
    moveDate: {
      asap: "En cuanto puedas. Dejo abierto el calendario.",
      month: "Dentro de los próximos 30 días. El calendario puede respirar.",
      later: "En uno a tres meses. Hay tiempo para buscar las cajas.",
      flexible: "Fecha flexible. El calendario puede echar una siesta.",
    },
    stayLength: {
      "under-six": "Unos meses. Una estimación no es una promesa.",
      year: "Aproximadamente un año. Tiempo para elegir taza favorita.",
      long: "Varios años. Da tiempo a encontrar una taza favorita.",
      unsure: "Aún no sabes cuánto tiempo. Lo dejamos abierto.",
    },
    quiet: {
      mornings: "Mañanas tranquilas. Haré menos ruido que la tostadora.",
      evenings: "Tardes tranquilas. Bajo el volumen del hervidor.",
      flexible: "Sin horario estricto. Las rutinas se pueden hablar.",
    },
    workHome: {
      often: "Casi todos los días en casa. El espacio de trabajo cuenta.",
      sometimes: "Algunos días en casa. El espacio queda por hablar.",
      rarely: "Rara vez trabajas en casa. No doy por hecho que necesites escritorio.",
      unsure: "La rutina aún no está clara. No doy por hecho que haga falta escritorio.",
    },
    smoking: {
      "smoke-ok": "Fumar dentro te parece bien. La norma queda clara.",
      "smoke-outside": "Solo fuera. La norma se queda en la puerta.",
      "smoke-free": "Prefieres una casa sin humo. Mantengo clara esa preferencia.",
      "smoke-unsure": "Prefieres hablarlo. Dejo espacio para esa conversación.",
    },
    pets: {
      "pet-with-me": "Te mudas con una mascota. Comprueba la norma de cada vivienda.",
      "pet-welcome": "Te gustaría que se aceptaran mascotas. Comprueba cada anuncio.",
      "no-pet": "No tienes mascota en tus planes. Un cuenco menos que embalar.",
      "pet-discuss": "Depende de la vivienda. Comprueba la norma en cada anuncio.",
    },
    guests: {
      "guests-often": "Recibes visitas a menudo. Dejo tazas extra para la casa.",
      "guests-sometimes": "A veces, avisando antes. Hasta el timbre puede ser educado.",
      "guests-rarely": "Prefieres tranquilidad en casa. La casa puede ir a su ritmo.",
      "guests-discuss": "Lo acordáis entre todos. Dejo la norma de visitas abierta.",
    },
    cleaning: {
      "clean-rotate": "Tareas por turnos. Hasta la esponja tendrá calendario.",
      "clean-own": "Cada persona se ocupa de lo suyo. Los platos conocen la regla.",
      "clean-schedule": "Plan semanal sencillo. La escoba deja de tener que adivinar.",
      "clean-discuss": "Lo habláis entre todos. Dejo la fregona fuera de la reunión.",
    },
    languages: {
      one: "Un idioma para casa. De “té” me ocupo.",
      many: "Más idiomas para casa. Más formas de decir “té”.",
    },
    mustHaves: {
      one: "{features} está en tu lista. Comprueba cada anuncio.",
      many: "{features} están en tu lista. Cada anuncio debe confirmarlo.",
      more: "{features} y más están en tu lista. Comprueba cada anuncio.",
    },
    comfortableRent: "Tu preferencia de alquiler queda en este dispositivo.",
    privateCeiling: "Tu límite de alquiler queda en este dispositivo.",
    upfrontFunds: "Esta cantidad queda guardada en tu dispositivo.",
    areas: "Zonas elegidas. No adivino las distancias.",
    intro: "Un pequeño saludo está listo. El resto queda en tus palabras.",
    visibility: {
      private: "Aquí eliges mantenerlo privado. Esta vista previa no publica nada.",
      "intro-only": "Compartir al iniciar una conversación. Esta vista no comparte nada.",
      visible: "La visibilidad cercana es tu preferencia. Esta vista previa no publica nada.",
    },
    offer: {
      offerRent: {
        room: "El alquiler de la habitación queda en este dispositivo.",
        "whole-home": "El alquiler de la vivienda queda en este dispositivo.",
        general: "El alquiler queda en este dispositivo.",
      },
      moveDate: {
        asap: "Podrías recibir a alguien pronto. Dejo abierto el calendario.",
        month: "Podrías recibir a alguien dentro de los próximos 30 días. El calendario respira.",
        later: "En uno a tres meses. Hay tiempo para preparar las llaves.",
        flexible: "La disponibilidad es flexible. El calendario puede echar una siesta.",
      },
      stayLength: {
        "under-six": "Unos meses podrían encajar. Deja claras las condiciones.",
        year: "Un año podría encajar. Los detalles se pueden hablar.",
        long: "Varios años podrían encajar. Deja claras las condiciones.",
        unsure: "Cuánto tiempo podría quedarse alguien sigue abierto. Está bien.",
      },
      householdSize: {
        any: "Sin tamaño fijo para el hogar. Dejo las tazas sin contar.",
        number: "Un hogar de {n} personas. Quien se una podrá hacerse una idea.",
      },
      pets: {
        "pet-with-me": "Tu mascota forma parte del hogar. Aclara las reglas con quienes se unan.",
        "pet-welcome": "Aceptarías mascotas. Conviene dejar claras las reglas de casa.",
        "no-pet": "No hay mascotas en el hogar. Quien se una lo sabrá.",
        "pet-discuss": "Depende del hogar. Las normas sobre mascotas se pueden hablar.",
      },
      quiet: {
        mornings: "Mañanas tranquilas en casa. La tostadora puede bajar la voz.",
        evenings: "Tardes tranquilas. Hasta el hervidor puede susurrar.",
        flexible: "Sin horario fijo. La rutina se acuerda con quienes se unan.",
      },
      workHome: {
        often: "Trabajas en casa la mayoría de los días. La rutina diurna importa.",
        sometimes: "Algunos días trabajas en casa. Una charla sobre la rutina ayuda.",
        rarely: "Rara vez trabajas en casa. No invento reglas para un escritorio.",
        unsure: "La rutina de trabajo en casa queda abierta para hablarla.",
      },
      smoking: {
        "smoke-ok": "Fumar dentro te parece bien. Deja clara la norma de casa.",
        "smoke-outside": "Solo fuera. La entrada puede dejar clara la norma.",
        "smoke-free": "Prefieres una casa sin humo. Conviene explicar ese límite.",
        "smoke-unsure": "Prefieres hablar sobre fumar. Las normas se acuerdan en casa.",
      },
      guests: {
        "guests-often": "Recibes visitas a menudo. El timbre aprenderá el ritmo de casa.",
        "guests-sometimes": "A veces, avisando antes. El timbre agradece el aviso.",
        "guests-rarely": "Prefieres pocas visitas. El sofá disfruta de una tarde tranquila.",
        "guests-discuss": "Acordad las visitas entre todos. El timbre puede esperar.",
      },
      cleaning: {
        "clean-rotate": "Tareas por turnos. Hasta la esponja tiene su turno.",
        "clean-own": "Cada persona se ocupa de lo suyo. Los platos conocen la norma.",
        "clean-schedule": "Plan semanal de limpieza. La escoba deja de adivinar.",
        "clean-discuss": "Las normas se hablan en casa. La fregona puede faltar a la reunión.",
      },
      languages: {
        one: "Un idioma para el hogar. Sé decir “té” en ese idioma.",
        many: "Varios idiomas en casa. Más formas de decir “té”.",
      },
      intro: "La bienvenida de tu vivienda toma forma. Dejo el texto en tus palabras.",
    },
  },
  fr: {
    open: "On peut laisser cette réponse en suspens.",
    goal: {
      room: "Une chambre à toi. Je laisse une veilleuse imaginaire allumée.",
      home: "Un logement entier à aménager. J’apporte le mètre ruban imaginaire.",
      people: "Les personnes d’abord. La bouilloire attendra pour les logements.",
      household: "Un logement pour votre groupe. Je compte les tasses, pas les avis.",
      offer: "Un logement cherche ses habitants. Décrivons-le ensemble.",
    },
    offerType: {
      room: "Une chambre à proposer. Je déroule le paillasson.",
      "whole-home": "Un logement entier à proposer. J’apporte le mètre ruban imaginaire.",
    },
    space: {
      private: "Une chambre à toi. Je garde une place pour la lampe.",
      shared: "Chambre partagée. Je marque le tiroir commun à chaussettes.",
      any: "Tu es ouvert aux options. Je laisse le plan souple.",
      number: "Au moins {n} chambres. Je garde une place pour la bouilloire.",
    },
    party: {
      solo: "Tu déménages en solo. Une tasse rejoint la liste des cartons.",
      "with-one": "Vous êtes deux à déménager. Je prépare deux tasses.",
      "with-two": "Trois dans le groupe. La bouilloire a voix au chapitre.",
      "with-three": "Au moins quatre. Je sors les tasses en plus.",
      unsure: "Le groupe est encore à définir. Les chaises peuvent attendre.",
    },
    householdSize: {
      any: "Pas de taille fixe pour le foyer. Je laisse de la place aux projets.",
      number: "{n} personnes au foyer. Je compte les chaises sans deviner.",
    },
    moveDate: {
      asap: "Dès que possible. Je garde le calendrier souple.",
      month: "Dans les 30 prochains jours. Le calendrier peut respirer.",
      later: "Dans un à trois mois. On a le temps de trouver les cartons.",
      flexible: "Date flexible. Le calendrier peut faire une sieste.",
    },
    stayLength: {
      "under-six": "Quelques mois. Une estimation n’est pas une promesse.",
      year: "Environ un an. Le temps de choisir sa tasse préférée.",
      long: "Quelques années. Une tasse préférée aura le temps d’arriver.",
      unsure: "Tu ne sais pas encore combien de temps. On laisse ouvert.",
    },
    quiet: {
      mornings: "Des matins calmes. Je ferai moins de bruit que le grille-pain.",
      evenings: "Des soirées calmes. Je baisse le volume de la bouilloire.",
      flexible: "Pas d’horaire strict. On peut parler des habitudes.",
    },
    workHome: {
      often: "Souvent à la maison. Le coin bureau reste à discuter.",
      sometimes: "Quelques jours à la maison. L’espace de travail reste à voir.",
      rarely: "Rarement à la maison pour travailler. Je ne suppose pas qu’il faut un bureau.",
      unsure: "Le rythme reste à définir. Je ne devine pas s’il faut un bureau.",
    },
    smoking: {
      "smoke-ok": "Fumer à l’intérieur te convient. La règle restera claire.",
      "smoke-outside": "Dehors seulement. La règle reste près de la porte.",
      "smoke-free": "Tu préfères un logement sans fumée. La préférence est claire.",
      "smoke-unsure": "Tu préfères en discuter. Je laisse de la place à la conversation.",
    },
    pets: {
      "pet-with-me": "Tu déménages avec un animal. Vérifie la règle de chaque logement.",
      "pet-welcome": "Tu aimerais que les animaux soient acceptés. Vérifie chaque annonce.",
      "no-pet": "Pas d’animal prévu. Une gamelle de moins à emballer.",
      "pet-discuss": "Cela dépend du logement. Vérifie la règle dans chaque annonce.",
    },
    guests: {
      "guests-often": "Tes amis viennent souvent. Je prévois des tasses en plus.",
      "guests-sometimes": "Parfois, en prévenant. Même la sonnette peut être polie.",
      "guests-rarely": "Tu préfères le calme chez toi. Le canapé peut rester en chaussons.",
      "guests-discuss": "À décider ensemble. Je laisse la règle des visites ouverte.",
    },
    cleaning: {
      "clean-rotate": "Les tâches à tour de rôle. Même l’éponge aura son planning.",
      "clean-own": "Chacun s’occupe de ses affaires. Les assiettes connaissent la règle.",
      "clean-schedule": "Un planning hebdomadaire simple. Le balai n’a plus à deviner.",
      "clean-discuss": "À discuter ensemble. Je laisse la serpillière hors de la réunion.",
    },
    languages: {
      one: "Une langue à la maison. Je sais dire « thé ».",
      many: "Langues choisies. Plus de façons de dire « thé ».",
    },
    mustHaves: {
      one: "{features} est sur ta liste. Vérifie chaque annonce.",
      many: "{features} sont sur ta liste. Chaque annonce doit le confirmer.",
      more: "{features} et d’autres sont sur ta liste. Vérifie chaque annonce.",
    },
    comfortableRent: "Ta préférence de loyer reste sur cet appareil.",
    privateCeiling: "Ta limite de loyer reste sur cet appareil.",
    upfrontFunds: "Cette somme reste sur ton appareil, à l’abri.",
    areas: "Tu as choisi des zones. Je ne devine pas les distances.",
    intro: "Un petit bonjour est prêt. Je laisse la suite avec tes mots.",
    visibility: {
      private: "Tu choisis de garder cela privé. Cet aperçu ne publie rien.",
      "intro-only": "Partager au début d’une conversation. Cet aperçu ne partage rien.",
      visible: "La visibilité à proximité est ta préférence. Cet aperçu ne publie rien.",
    },
    offer: {
      offerRent: {
        room: "Le loyer de la chambre reste sur cet appareil.",
        "whole-home": "Le loyer du logement reste sur cet appareil.",
        general: "Le loyer reste sur cet appareil.",
      },
      moveDate: {
        asap: "Tu peux accueillir quelqu’un bientôt. Le calendrier reste souple.",
        month: "Tu peux accueillir quelqu’un dans les 30 prochains jours. Le calendrier respire.",
        later: "Dans un à trois mois. Le temps de préparer les clés.",
        flexible: "La disponibilité est flexible. Le calendrier peut faire une sieste.",
      },
      stayLength: {
        "under-six": "Quelques mois pourraient convenir. Les conditions restent à préciser.",
        year: "Environ un an pourrait convenir. Les détails restent à discuter.",
        long: "Quelques années pourraient convenir. Les conditions restent à préciser.",
        unsure: "La durée possible reste à définir. C’est tout à fait normal.",
      },
      householdSize: {
        any: "Pas de taille fixe pour le foyer. Je laisse les tasses libres.",
        number: "Un foyer de {n} personnes. Les futurs colocataires peuvent se projeter.",
      },
      pets: {
        "pet-with-me": "Ton animal fait partie du foyer. Les règles restent à clarifier avec les colocataires.",
        "pet-welcome": "Tu accepterais les animaux. Mieux vaut préciser les règles du logement.",
        "no-pet": "Pas d’animal dans le foyer. Les prochains colocataires le sauront.",
        "pet-discuss": "Cela dépend du foyer. Les règles sur les animaux restent à discuter.",
      },
      quiet: {
        mornings: "Des matins calmes à la maison. Le grille-pain peut parler moins fort.",
        evenings: "Des soirées calmes. La bouilloire peut chuchoter aussi.",
        flexible: "Pas d’horaires fixes. Les prochains colocataires peuvent en parler.",
      },
      workHome: {
        often: "Tu travailles souvent à la maison. Le rythme de la journée compte.",
        sometimes: "Quelques jours à la maison. La routine peut se discuter.",
        rarely: "Rarement à la maison pour travailler. Je n’invente pas de règle de bureau.",
        unsure: "Le rythme du télétravail reste à discuter avec les colocataires.",
      },
      smoking: {
        "smoke-ok": "Fumer à l’intérieur te convient. La règle du foyer doit être claire.",
        "smoke-outside": "Dehors seulement. La règle reste claire dès l’entrée.",
        "smoke-free": "Tu préfères un logement sans fumée. Autant le dire clairement.",
        "smoke-unsure": "Tu préfères en parler. Les règles se décident ensemble.",
      },
      guests: {
        "guests-often": "Tes amis viennent souvent. La sonnette apprendra le rythme du foyer.",
        "guests-sometimes": "Parfois, en prévenant. La sonnette apprécie le message.",
        "guests-rarely": "Tu préfères peu de visites. Le canapé profite du calme.",
        "guests-discuss": "Les visites se décident ensemble. La sonnette peut attendre.",
      },
      cleaning: {
        "clean-rotate": "Les tâches à tour de rôle. Même l’éponge a son tour.",
        "clean-own": "Chacun s’occupe de ses affaires. Les assiettes connaissent la règle.",
        "clean-schedule": "Un planning hebdomadaire. Le balai n’a plus à deviner.",
        "clean-discuss": "Les règles se discutent à la maison. La serpillière peut sécher.",
      },
      languages: {
        one: "Une langue pour le foyer. Je sais dire « thé » dans celle-là.",
        many: "Plusieurs langues à la maison. Plus de façons de dire « thé ».",
      },
      intro: "Ton mot d’accueil prend forme. Je garde tes propres mots.",
    },
  },
  de: {
    open: "Diesen Punkt lassen wir erst einmal offen.",
    goal: {
      room: "Ein Zimmer für dich. Ich lasse ein imaginäres Licht an.",
      home: "Ein ganzes Zuhause zum Gestalten. Ich bringe das Maßband.",
      people: "Erst die Menschen. Der Wasserkocher wartet mit den Wohnungen.",
      household: "Ein Zuhause für eure Runde. Ich zähle Tassen, keine Meinungen.",
      offer: "Ein Zuhause sucht seine Menschen. Beschreiben wir es.",
    },
    offerType: {
      room: "Ein Zimmer zum Anbieten. Die Fußmatte liegt bereit.",
      "whole-home": "Ein ganzes Zuhause zum Anbieten. Ich bringe das Maßband.",
    },
    space: {
      private: "Ein eigenes Zimmer. Für die Lampe bleibt Platz.",
      shared: "Ein geteiltes Zimmer. Ich beschrifte die Sockenschublade.",
      any: "Bei den Zimmern bist du offen. Der Grundriss bleibt flexibel.",
      number: "Mindestens {n} Schlafzimmer. Platz für den Wasserkocher bleibt.",
    },
    party: {
      solo: "Du ziehst allein um. Eine Tasse kommt auf die Packliste.",
      "with-one": "Zwei ziehen um. Ich stelle zwei Tassen bereit.",
      "with-two": "Drei in der Umzugsrunde. Der Wasserkocher darf mitreden.",
      "with-three": "Mindestens vier. Ich stelle mehr Tassen raus.",
      unsure: "Wer mitzieht, ist noch offen. Die Stühle können warten.",
    },
    householdSize: {
      any: "Keine feste Haushaltsgröße. Ich lasse Platz für neue Pläne.",
      number: "{n} Personen im Zuhause. Ich zähle Stühle ohne zu raten.",
    },
    moveDate: {
      asap: "Sobald es geht. Der Kalender bleibt locker.",
      month: "In den nächsten 30 Tagen. Der Kalender kann durchatmen.",
      later: "In ein bis drei Monaten. Zeit, die Kartons zu finden.",
      flexible: "Der Termin ist flexibel. Der Kalender darf ein Nickerchen machen.",
    },
    stayLength: {
      "under-six": "Ein paar Monate. Eine Schätzung ist kein Versprechen.",
      year: "Etwa ein Jahr. Zeit für eine Lieblingstasse.",
      long: "Ein paar Jahre. Zeit genug für eine Lieblingstasse.",
      unsure: "Wie lange, ist noch offen. Das lassen wir einfach so.",
    },
    quiet: {
      mornings: "Ruhige Morgen. Ich bin leiser als der Toaster.",
      evenings: "Ruhige Abende. Ich drehe den Wasserkocher leiser.",
      flexible: "Keine festen Ruhezeiten. Routinen lassen sich besprechen.",
    },
    workHome: {
      often: "Meistens zu Hause. Ein Arbeitsbereich gehört ins Gespräch.",
      sometimes: "Manche Tage zu Hause. Der Arbeitsbereich bleibt offen.",
      rarely: "Selten zu Hause bei der Arbeit. Ich setze keinen Schreibtisch voraus.",
      unsure: "Dein Rhythmus ist noch offen. Ich rate nicht beim Schreibtisch.",
    },
    smoking: {
      "smoke-ok": "Rauchen drinnen ist für dich in Ordnung. Eine klare Hausregel hilft.",
      "smoke-outside": "Nur draußen. Die Regel bleibt an der Tür.",
      "smoke-free": "Du möchtest ein rauchfreies Zuhause. Klare Präferenz.",
      "smoke-unsure": "Du möchtest es besprechen. Dafür bleibt Platz im Gespräch.",
    },
    pets: {
      "pet-with-me": "Dein Tier zieht mit. Bitte prüfe die Regel jedes Zuhauses.",
      "pet-welcome": "Tiere sollen willkommen sein. Bitte prüfe jedes Inserat.",
      "no-pet": "Kein Tier geplant. Eine Wasserschüssel weniger zum Einpacken.",
      "pet-discuss": "Das hängt vom Zuhause ab. Prüfe die Regel in jedem Inserat.",
    },
    guests: {
      "guests-often": "Freunde kommen oft vorbei. Ich stelle zusätzliche Tassen hin.",
      "guests-sometimes": "Manchmal, mit Vorwarnung. Selbst die Klingel kann höflich sein.",
      "guests-rarely": "Du magst es zu Hause ruhig. Das Sofa bleibt in Hausschuhen.",
      "guests-discuss": "Besuche besprecht ihr gemeinsam. Die Regel bleibt offen.",
    },
    cleaning: {
      "clean-rotate": "Aufgaben im Wechsel. Sogar der Schwamm bekommt einen Plan.",
      "clean-own": "Alle kümmern sich um ihr eigenes. Das Geschirr kennt die Regel.",
      "clean-schedule": "Ein einfacher Wochenplan. Der Besen muss nicht mehr raten.",
      "clean-discuss": "Ihr besprecht es gemeinsam. Der Wischmopp bleibt aus dem Meeting.",
    },
    languages: {
      one: "Eine Sprache für zu Hause. „Tee“ kann ich schon.",
      many: "Sprachen für zu Hause. Mehr Wege, „Tee“ zu sagen.",
    },
    mustHaves: {
      one: "{features} steht auf deiner Liste. Prüfe jedes Inserat.",
      many: "{features} stehen auf deiner Liste. Jedes Inserat muss es bestätigen.",
      more: "{features} und mehr stehen auf deiner Liste. Prüfe jedes Inserat.",
    },
    comfortableRent: "Deine Mietpräferenz bleibt auf diesem Gerät.",
    privateCeiling: "Deine Mietobergrenze bleibt auf diesem Gerät.",
    upfrontFunds: "Dieser Betrag bleibt auf deinem Gerät.",
    areas: "Die Gebiete stehen fest. Entfernungen rate ich nicht.",
    intro: "Ein kleines Hallo ist bereit. Den Rest überlasse ich deinen Worten.",
    visibility: {
      private: "Du möchtest es privat halten. Diese Vorschau veröffentlicht nichts.",
      "intro-only": "Teilen beim Gesprächsbeginn. Diese Vorschau teilt nichts.",
      visible: "Sichtbarkeit in der Nähe ist deine Präferenz. Diese Vorschau veröffentlicht nichts.",
    },
    offer: {
      offerRent: {
        room: "Die Zimmermiete bleibt in dieser Vorschau auf dem Gerät.",
        "whole-home": "Die Miete fürs ganze Zuhause bleibt auf dem Gerät.",
        general: "Die Miete bleibt in dieser Vorschau auf dem Gerät.",
      },
      moveDate: {
        asap: "Ein Einzug wäre bald möglich. Der Kalender bleibt locker.",
        month: "Ein Einzug wäre in den nächsten 30 Tagen möglich. Der Kalender kann durchatmen.",
        later: "In ein bis drei Monaten. Zeit, die Schlüssel vorzubereiten.",
        flexible: "Der Einzugstermin ist flexibel. Der Kalender darf ein Nickerchen machen.",
      },
      stayLength: {
        "under-six": "Ein paar Monate könnten passen. Die Bedingungen bleiben zu klären.",
        year: "Etwa ein Jahr könnte passen. Die Details lassen sich besprechen.",
        long: "Ein paar Jahre könnten passen. Die Bedingungen bleiben zu klären.",
        unsure: "Wie lange jemand bleiben könnte, ist noch offen. Das ist in Ordnung.",
      },
      householdSize: {
        any: "Keine feste Haushaltsgröße. Ich lasse die Tassen ungezählt.",
        number: "Ein Haushalt mit {n} Personen. Neue Mitbewohner können es sich vorstellen.",
      },
      pets: {
        "pet-with-me": "Dein Tier gehört zum Haushalt. Regeln für künftige Mitbewohner bleiben zu klären.",
        "pet-welcome": "Haustiere wären willkommen. Die Hausregeln sollten klar sein.",
        "no-pet": "Kein Tier im Haushalt. Künftige Mitbewohner können es wissen.",
        "pet-discuss": "Das hängt vom Haushalt ab. Die Regeln lassen sich besprechen.",
      },
      quiet: {
        mornings: "Ruhige Morgen zu Hause. Auch der Toaster kann leiser sein.",
        evenings: "Ruhige Abende. Der Wasserkocher kann flüstern.",
        flexible: "Keine festen Ruhezeiten. Mit neuen Mitbewohnern lässt sich das klären.",
      },
      workHome: {
        often: "Du arbeitest meist zu Hause. Der Tagesrhythmus gehört ins Gespräch.",
        sometimes: "Manche Tage zu Hause. Die Routine lässt sich besprechen.",
        rarely: "Selten zu Hause bei der Arbeit. Ich erfinde keine Schreibtischregeln.",
        unsure: "Der Arbeitsrhythmus zu Hause bleibt noch offen.",
      },
      smoking: {
        "smoke-ok": "Rauchen drinnen ist für dich in Ordnung. Die Hausregel sollte klar sein.",
        "smoke-outside": "Nur draußen. Die Regel bleibt gleich an der Tür klar.",
        "smoke-free": "Du möchtest ein rauchfreies Zuhause. Sag die Grenze klar.",
        "smoke-unsure": "Du möchtest Rauchen besprechen. Die Hausregeln könnt ihr abstimmen.",
      },
      guests: {
        "guests-often": "Freunde kommen oft vorbei. Die Klingel lernt den Hausrhythmus.",
        "guests-sometimes": "Manchmal, mit Vorwarnung. Die Klingel mag Bescheid wissen.",
        "guests-rarely": "Du magst wenige Besuche. Das Sofa genießt einen ruhigen Abend.",
        "guests-discuss": "Besuche besprecht ihr gemeinsam. Die Klingel kann warten.",
      },
      cleaning: {
        "clean-rotate": "Aufgaben im Wechsel. Sogar der Schwamm ist mal dran.",
        "clean-own": "Alle kümmern sich um ihr eigenes. Das Geschirr kennt die Regel.",
        "clean-schedule": "Ein Wochenplan. Der Besen muss nicht mehr raten.",
        "clean-discuss": "Die Hausregeln besprecht ihr gemeinsam. Der Wischmopp kann warten.",
      },
      languages: {
        one: "Eine Sprache für den Haushalt. „Tee“ kann ich schon sagen.",
        many: "Mehrere Sprachen zu Hause. Mehr Wege, „Tee“ zu sagen.",
      },
      intro: "Der Willkommensgruß für dein Zuhause nimmt Form an. Deine Worte bleiben deine.",
    },
  },
};

const FEATURES = {
  en: {
    "step-free": "step-free access",
    elevator: "an elevator",
    workspace: "workspace",
    outdoor: "outdoor space",
    transit: "nearby transit",
    storage: "storage",
  },
  ro: {
    "step-free": "acces fără trepte",
    elevator: "lift",
    workspace: "spațiu de lucru",
    outdoor: "spațiu în aer liber",
    transit: "transport aproape",
    storage: "depozitare",
  },
  es: {
    "step-free": "acceso sin escalones",
    elevator: "ascensor",
    workspace: "espacio de trabajo",
    outdoor: "espacio al aire libre",
    transit: "transporte cercano",
    storage: "almacenamiento",
  },
  fr: {
    "step-free": "un accès sans marche",
    elevator: "un ascenseur",
    workspace: "un espace de travail",
    outdoor: "un espace extérieur",
    transit: "les transports à proximité",
    storage: "du rangement",
  },
  de: {
    "step-free": "stufenlosen Zugang",
    elevator: "einen Aufzug",
    workspace: "einen Arbeitsbereich",
    outdoor: "einen Außenbereich",
    transit: "öffentliche Verkehrsmittel in der Nähe",
    storage: "Stauraum",
  },
};

function isBlank(stepId, value) {
  if (value == null || value === "") return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "string") return value.trim() === "";

  if (["comfortableRent", "privateCeiling", "offerRent"].includes(stepId)) {
    return value.amount == null || value.amount === "" ||
      !Number.isFinite(Number(value.amount)) || !value.currency;
  }
  if (stepId === "upfrontFunds") {
    return value.amount == null || value.amount === "" ||
      !Number.isFinite(Number(value.amount)) || Number(value.amount) < 0 ||
      !value.currency || !["personal-share", "whole-home"].includes(value.basis);
  }
  if (typeof value === "number") return !Number.isFinite(value);
  return false;
}

function numberReply(template, value) {
  return template.replace("{n}", String(Number(value)));
}

function mustHaveReply(locale, choices) {
  const names = choices.map((choice) => FEATURES[locale][choice]).filter(Boolean);
  if (!names.length) return REPLIES[locale].open;

  const shown = names.slice(0, 2);
  const featureText = shown.length === 1
    ? shown[0]
    : new Intl.ListFormat(locale, { style: "long", type: "conjunction" }).format(shown);
  const kind = names.length === 1 ? "one" : names.length > 2 ? "more" : "many";
  return REPLIES[locale].mustHaves[kind].replace("{features}", featureText);
}

export function domReply(stepId, answers, locale = "en") {
  const values = answers ?? {};
  const answer = values[stepId];
  if (isBlank(stepId, answer)) return "";

  const language = Object.hasOwn(REPLIES, locale) ? locale : "en";
  const copy = REPLIES[language];

  if (stepId === "space" && String(answer) === "0" && ["home", "household"].includes(values.goal)) {
    return {
      en: "A studio. One room, plenty of little corners to make yours.",
      ro: "O garsonieră. O cameră, multe colțuri numai ale tale.",
      es: "Un estudio. Una habitación, muchos rincones para ti.",
      fr: "Un studio. Une pièce, plein de petits coins à toi.",
      de: "Ein Studio. Ein Raum, viele kleine Ecken für dich.",
    }[language];
  }

  if (stepId === "offerType") return copy.offerType[answer] ?? copy.open;
  if (values.goal === "offer" && Object.hasOwn(copy.offer, stepId)) {
    const replies = copy.offer[stepId];
    if (stepId === "offerRent") return replies[values.offerType] ?? replies.general;
    if (stepId === "householdSize" && (typeof answer === "number" || /^\d+$/.test(String(answer)))) {
      return numberReply(replies.number, answer);
    }
    return replies[answer] ?? copy.open;
  }

  if (stepId === "space" && (typeof answer === "number" || /^\d+$/.test(String(answer)))) {
    return numberReply(copy.space.number, answer);
  }
  if (stepId === "householdSize" && (typeof answer === "number" || /^\d+$/.test(String(answer)))) {
    return numberReply(copy.householdSize.number, answer);
  }
  if (stepId === "languages") {
    return copy.languages[answer.length === 1 ? "one" : "many"];
  }
  if (stepId === "mustHaves") return mustHaveReply(language, answer);

  const reply = copy[stepId];
  if (typeof reply === "string") return reply;
  if (reply && typeof reply === "object") return reply[answer] ?? copy.open;
  return "";
}
