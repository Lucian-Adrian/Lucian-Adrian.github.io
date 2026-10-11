// Keep interface translations separate from source listing text and saved answers.
const wordRows = `
tagline|Un chez-soi qui te ressemble.|Ein Zuhause, das zu dir passt.
where|Où veux-tu habiter ?|Wo möchtest du wohnen?
destination|Ville recherchée|Gesuchte Stadt
cityPlaceholder|Berlin, New York, Chișinău…|Berlin, New York, Chișinău…
search|Rechercher|Suchen
language|Langue|Sprache
back|Retour|Zurück
next|Continuer|Weiter
skip|Passer|Überspringen
saveAnswer|Enregistrer|Speichern
shareApp|Partager Domi|Domi teilen
copyLink|Copier le lien|Link kopieren
shareLinkHelp|Ce lien ne contient pas tes choix enregistrés.|Dieser Link enthält keine gespeicherten Antworten.
installApp|Installer|Installieren
appInstalled|Domi est sur ton écran d’accueil.|Domi ist auf deinem Startbildschirm.
shareCopied|Lien copié. Tes choix restent privés.|Link kopiert. Deine Antworten bleiben privat.
installHelpTitle|Garde Domi à portée de main|Domi immer griffbereit
installHelpText|Dans Safari, touche Partager, puis Sur l’écran d’accueil.|Tippe in Safari auf Teilen und dann auf Zum Home-Bildschirm.
chapterMove|Ta recherche|Deine Suche
chapterMoney|Ton budget|Dein Budget
chapterLife|Le quotidien|Der Alltag
chapterMeet|Ta présentation|Deine Vorstellung
stepOf|Question|Frage
optional|Facultatif|Optional
backToResults|Voir les résultats|Zu den Ergebnissen
profileTitle|Qu’est-ce qui compte pour toi ?|Was ist dir wichtig?
profileSub|Tu peux passer les questions et revenir plus tard.|Du kannst Fragen überspringen und später zurückkommen.
finishTitle|Ta recherche prend forme|Deine Suche nimmt Gestalt an
finishSub|Tu peux modifier tes réponses à tout moment.|Du kannst deine Antworten jederzeit ändern.
profileCta|Affiner ma recherche|Suche anpassen
editProfile|Modifier mes réponses|Antworten bearbeiten
finish|Voir les logements|Wohnungen ansehen
profilePrivate|Tes réponses restent sur cet appareil. Ton plafond de loyer reste privé.|Deine Antworten bleiben auf diesem Gerät. Deine Mietobergrenze bleibt privat.
home|Logements|Wohnungen
people|Personnes|Menschen
together|Ensemble|Gemeinsam
saved|Favoris|Gemerkt
you|Toi|Du
resultsHomes|Logements à|Wohnungen in
resultsPeople|Personnes près de|Menschen in der Nähe von
peopleSub|Des personnes qui cherchent un logement dans la même zone.|Menschen, die in derselben Gegend suchen.
changePlace|Changer de lieu|Ort ändern
filters|Filtres|Filter
sort|Trier|Sortieren
allHomes|Tous|Alle
rooms|Chambres|Zimmer
wholeHomes|Logements entiers|Ganze Wohnungen
clearFilters|Effacer|Zurücksetzen
sourceUnknown|Détails de la source indisponibles|Quelldetails nicht verfügbar
observed|Source consultée|Quelle geprüft
askRent|Loyer non indiqué|Miete nicht angegeben
perMonth|/ mois|/ Monat
sourceTag|Source de l’annonce|Anzeigenquelle
bills|Charges|Nebenkosten
deposit|Caution|Kaution
unknown|Non indiqué|Nicht angegeben
availability|Disponibilité|Verfügbarkeit
availabilityUnknown|À confirmer|Zu bestätigen
bedrooms|Chambres à coucher|Schlafzimmer
roomsCount|Pièces|Zimmer
size|Surface|Fläche
fit|Pour ta recherche|Für deine Suche
noHomes|Aucun logement trouvé ici.|Hier wurden keine Wohnungen gefunden.
noHomesText|Change de zone ou de ville.|Ändere die Gegend oder Stadt.
tryBerlin|Voir Berlin|Berlin ansehen
searchElse|Changer de ville|Stadt ändern
firstSearch|Chercher ailleurs|Anderen Ort suchen
locationRequired|Saisis une ville.|Gib eine Stadt ein.
noPeople|Personne ici pour le moment.|Hier ist noch niemand.
noPeopleText|Seules les personnes qui choisissent d’être visibles apparaissent ici.|Hier erscheinen nur Menschen, die sichtbar sein möchten.
tailorTitle|Affiner la recherche|Suche anpassen
tailorText|Qu’est-ce qui compte pour toi ?|Was ist dir wichtig?
startQuestions|Choisir mes préférences|Vorlieben auswählen
homeDetails|Le logement|Die Wohnung
personDetails|À propos|Über die Person
description|À propos du logement|Über die Wohnung
costs|Les coûts|Kosten
fitDetails|Ce qui peut te convenir|Was zu dir passen könnte
notKnown|Non confirmé|Nicht bestätigt
features|Équipements|Ausstattung
askHost|À confirmer avec l’hôte|Mit dem Anbieter bestätigen
listingInfo|L’annonce|Die Anzeige
openSource|Voir l’annonce d’origine|Originalanzeige öffnen
hide|Masquer|Ausblenden
save|Enregistrer|Merken
savedLabel|Enregistré|Gemerkt
viewProfile|Voir le profil|Profil ansehen
connect|Préparer une présentation|Vorstellung vorbereiten
privateRent|Ma part de loyer|Mein Mietanteil
wholeRent|Loyer du logement entier|Miete der ganzen Wohnung
moneyNoCurrency|Choisis une devise|Währung wählen
costNote|Aucun partage supposé. Les charges et la caution doivent être indiquées par la source.|Keine Aufteilung angenommen. Nebenkosten und Kaution müssen aus der Quelle stammen.
sampleNote|Confirme la disponibilité et les coûts dans l’annonce d’origine.|Bestätige Verfügbarkeit und Kosten in der Originalanzeige.
rankingTitle|Tes choix affinent la recherche|Deine Auswahl verfeinert die Suche
rankingText|Les informations manquantes restent inconnues.|Fehlende Angaben bleiben unbekannt.
rankingChanged|L’ordre reflète tes derniers choix.|Die Reihenfolge berücksichtigt deine Auswahl.
hidePrompt|Pourquoi masquer ce logement ?|Warum diese Wohnung ausblenden?
hideTooCostly|Trop cher|Zu teuer
hideWrongArea|Mauvaise zone|Falsche Gegend
hideWrongSpace|Autre type de logement|Falsche Wohnungsart
hideMissing|Pas assez d’informations|Zu wenige Angaben
hideOther|Pas pour moi|Passt nicht zu mir
hiddenNote|Masqué sur cet appareil.|Auf diesem Gerät ausgeblendet.
undo|Annuler|Rückgängig
askIntro|Un premier bonjour.|Ein erstes Hallo.
introDraft|Présentation privée|Private Vorstellung
introName|Ton nom|Dein Name
introMessage|Ton message|Deine Nachricht
introPlaceholder|Bonjour ! Je cherche un logement calme et accueillant…|Hallo! Ich suche ein ruhiges, freundliches Zuhause…
introPreview|Prévisualiser|Vorschau
keepDraft|Garder le brouillon|Entwurf speichern
draftSaved|Brouillon enregistré. Rien n’a été envoyé.|Entwurf gespeichert. Nichts wurde gesendet.
draftOnly|Ce brouillon reste sur cet appareil.|Dieser Entwurf bleibt auf deinem Gerät.
createTogether|Chercher ensemble|Gemeinsam suchen
togetherTitle|Mes projets|Meine Pläne
togetherSub|Une recherche ensemble, à votre rythme.|Eine gemeinsame Suche in eurem Tempo.
sharedShortlist|Favoris partagés|Gemeinsame Merkliste
roomPlan|Chambres et coûts|Zimmer und Kosten
viewingPlan|Visite|Besichtigung
nextStep|La suite|Nächster Schritt
groupName|Nom de la recherche|Name der Suche
groupNamePlaceholder|Notre premier chez-nous|Unser erstes Zuhause
inviteNames|Personnes à inviter|Wen möchtest du einladen?
invitePlaceholder|Un nom par ligne|Ein Name pro Zeile
previewInvite|Prévisualiser l’invitation|Einladung ansehen
inviteOnly|Brouillon d’invitation|Einladungsentwurf
createGroup|Créer une recherche privée|Private Suche erstellen
groupCreated|Recherche enregistrée sur cet appareil.|Suche auf diesem Gerät gespeichert.
members|Participants|Teilnehmende
owner|Toi|Du
invitePending|Invitation non envoyée|Einladung nicht gesendet
participantUnknown|Pas de réponse|Noch keine Antwort
inviteWarning|Domi n’envoie pas d’invitations. Tu peux partager le texte toi-même.|Domi sendet keine Einladungen. Du kannst den Text selbst teilen.
copyInvite|Copier l’invitation|Einladung kopieren
copied|Copié. À toi de choisir comment le partager.|Kopiert. Du entscheidest, wie du es teilst.
proposedPlan|Proposition de partage|Vorgeschlagene Aufteilung
planExplain|Ajoute les montants discutés. Ils restent des propositions tant que les personnes n’ont pas confirmé.|Trage besprochene Beträge ein. Sie bleiben Vorschläge, bis die Personen zustimmen.
wholeCost|Loyer total par mois|Gesamte Monatsmiete
personAmount|Contribution proposée|Vorgeschlagener Anteil
participant|Personne|Person
addProposal|Enregistrer la proposition|Vorschlag speichern
proposalSaved|Proposition enregistrée. Personne ne l’a encore acceptée.|Vorschlag gespeichert. Noch niemand hat zugestimmt.
noSplit|Aucun partage supposé.|Keine Aufteilung angenommen.
viewingPlace|Logement à visiter|Wohnung zur Besichtigung
viewingDate|Date|Datum
viewingTime|Heure|Uhrzeit
viewingPeople|Qui vient ?|Wer kommt mit?
createViewing|Enregistrer la visite|Besichtigungsplan speichern
viewingSaved|Plan enregistré. Aucune demande envoyée à l’hôte.|Plan gespeichert. Keine Anfrage an den Anbieter gesendet.
viewingOutcome|Comment était le logement ?|Wie war die Wohnung?
outcomeInterested|Je veux continuer|Ich möchte weitermachen
outcomeQuestions|J’ai encore des questions|Ich habe noch Fragen
outcomePass|Ça ne me convient pas|Passt nicht zu mir
saveOutcome|Enregistrer|Speichern
outcomeSaved|Réponse enregistrée pour ta prochaine recherche.|Antwort für deine nächste Suche gespeichert.
groupNone|Mes projets|Meine Pläne
groupNoneText|Prépare une visite ou cherche avec d’autres personnes.|Plane eine Besichtigung oder suche gemeinsam.
savedTitle|Favoris|Gemerkt
savedSub|Tes possibilités préférées.|Deine gemerkten Möglichkeiten.
noSaved|Rien d’enregistré pour le moment.|Noch nichts gemerkt.
noSavedText|Touche le cœur d’un logement.|Tippe bei einer Wohnung auf das Herz.
youTitle|Toi|Du
youSub|Tes choix.|Deine Auswahl.
profileStatus|Tes réponses|Deine Antworten
answered|réponses|beantwortet
complete|terminé|vollständig
unanswered|Sans réponse|Nicht beantwortet
skippedStatus|Passé|Übersprungen
changeAnswer|Modifier|Ändern
resume|Continuer mes réponses|Antworten fortsetzen
privacy|Confidentialité et langue|Datenschutz und Sprache
localOnly|Tes données restent sur cet appareil.|Deine Daten bleiben auf diesem Gerät.
dataTitle|Tes données|Deine Daten
dataText|Exporte ou efface les données de ce navigateur.|Exportiere oder lösche die Daten dieses Browsers.
export|Télécharger mes données|Meine Daten herunterladen
reset|Effacer mes données|Meine Daten löschen
resetConfirm|Effacer les réponses, favoris et brouillons de cet appareil ?|Antworten, Merkliste und Entwürfe auf diesem Gerät löschen?
clearEverything|Tout effacer|Alles löschen
cancel|Annuler|Abbrechen
keepData|Garder mes données|Daten behalten
resetDone|Cet appareil est prêt pour une nouvelle recherche.|Dieses Gerät ist bereit für eine neue Suche.
resultsOrder|L’ordre suit tes choix. Les informations manquantes restent inconnues.|Die Reihenfolge folgt deiner Auswahl. Fehlende Angaben bleiben unbekannt.
homePlan|Préparer une visite|Besichtigung planen
noProposal|Aucune proposition.|Noch keine Vorschläge.
noEvents|Aucune visite prévue.|Noch keine Besichtigung geplant.
unknownPersonDetails|Non partagé|Nicht geteilt
savePerson|Enregistrer le profil|Profil merken
groupExists|Une recherche partagée existe déjà ici.|Hier besteht bereits eine gemeinsame Suche.
ariaClose|Fermer|Schließen
priceLabel|Loyer mensuel|Monatsmiete
messageRequired|Écris une courte présentation.|Schreibe eine kurze Vorstellung.
placeNotFound|Choisis une ville.|Wähle eine Stadt.
unknownCity|Tu peux chercher ici même si aucun logement n’est disponible dans notre collection.|Du kannst hier suchen, auch wenn unsere Sammlung keine Wohnungen enthält.
demoCity|Ville|Stadt
amountHelp|Ce montant reste privé.|Dieser Betrag bleibt privat.
maxHelp|Ce plafond reste privé.|Diese Obergrenze bleibt privat.
skipKeepsUnknown|Tu peux répondre plus tard.|Du kannst später antworten.
chooseOrSkip|Choisis une réponse ou passe la question.|Wähle eine Antwort oder überspringe die Frage.
budgetConflict|Ton plafond est inférieur à ton loyer souhaité. Ajuste l’un des montants.|Deine Obergrenze liegt unter deiner Wunschmiete. Passe einen Betrag an.
catalogLoading|Chargement des annonces…|Anzeigen werden geladen…
catalogUnavailable|Les logements ne peuvent pas être chargés.|Die Wohnungen konnten nicht geladen werden.
catalogUnavailableText|Réessaie dans un moment ou change de ville.|Versuche es später noch einmal oder ändere die Stadt.
noDiscoverablePeople|Seules les personnes qui choisissent d’être visibles apparaissent ici.|Hier erscheinen nur Menschen, die sichtbar sein möchten.
noHomes|Aucune annonce trouvée pour {place}.|Noch keine Anzeigen für {place} gefunden.
noHomesText|Élargis la zone ou choisis une autre ville.|Erweitere die Gegend oder wähle eine andere Stadt.
seeResults|Voir les résultats|Ergebnisse ansehen
`;

const phraseRows = `
What are you hoping to find?|Que cherches-tu ?|Was suchst du?
What are you looking for now?|Que cherches-tu maintenant ?|Was suchst du gerade?
What are you looking for?|Que cherches-tu ?|Was suchst du?
A room for me|Une chambre pour moi|Ein Zimmer für mich
A home to share|Un logement à partager|Eine Wohnung zum Teilen
People to live with|Des personnes avec qui vivre|Menschen zum Zusammenwohnen
A whole home for my group|Un logement pour mon groupe|Eine Wohnung für meine Gruppe
A whole home for my household|Un logement pour mon groupe|Eine Wohnung für meine Gruppe
I have a room or home to offer|Je propose une chambre ou un logement|Ich biete ein Zimmer oder eine Wohnung an
What kind of space feels right?|Quel type de chambre te convient ?|Welche Zimmerart passt zu dir?
What kind of room feels right?|Quel type de chambre te convient ?|Welche Zimmerart passt zu dir?
My own room|Ma propre chambre|Ein eigenes Zimmer
A private room|Une chambre privée|Ein eigenes Zimmer
A shared room|Une chambre partagée|Ein geteiltes Zimmer
A room I share|Une chambre partagée|Ein geteiltes Zimmer
I’m open|Pas de préférence|Ich bin offen
No preference|Pas de préférence|Keine Präferenz
Who is moving with you now?|Qui déménage avec toi ?|Wer zieht mit dir um?
Who is moving with you?|Qui déménage avec toi ?|Wer zieht mit dir um?
Just me|Moi uniquement|Nur ich
Me and one other person|Moi et une autre personne|Ich und eine weitere Person
Me and two others|Moi et deux autres personnes|Ich und zwei weitere Personen
Me and three or more others|Moi et au moins trois autres|Ich und mindestens drei weitere Personen
We’re still deciding|On réfléchit encore|Wir entscheiden noch
How many people would you like in the home?|Combien de personnes au total ?|Wie viele Personen insgesamt?
No fixed number|Pas de nombre fixe|Keine feste Anzahl
When would you like to move?|Quand veux-tu déménager ?|Wann möchtest du umziehen?
As soon as I can|Dès que possible|So bald wie möglich
As soon as possible|Dès que possible|So bald wie möglich
In the next month|Le mois prochain|Im nächsten Monat
In 1–3 months|Dans un à trois mois|In ein bis drei Monaten
I’m flexible|Je suis flexible|Ich bin flexibel
How long do you hope to stay?|Combien de temps veux-tu rester ?|Wie lange möchtest du bleiben?
A few months|Quelques mois|Ein paar Monate
Around a year|Environ un an|Etwa ein Jahr
A few years|Quelques années|Ein paar Jahre
I’m not sure yet|Je ne sais pas encore|Ich weiß es noch nicht
What monthly rent feels comfortable?|Quel loyer mensuel te convient ?|Welche Monatsmiete passt zu dir?
Is there a rent amount you do not want to go over?|Quel loyer ne veux-tu pas dépasser ?|Welche Mietgrenze möchtest du nicht überschreiten?
Which areas should we keep close?|Dans quels quartiers chercher ?|In welchen Gegenden sollen wir suchen?
When does a home feel calm to you?|Quand aimes-tu le calme chez toi ?|Wann magst du es zu Hause ruhig?
Mostly mornings|Surtout le matin|Vor allem morgens
Mostly evenings|Surtout le soir|Vor allem abends
No strict preference|Pas de préférence stricte|Keine feste Präferenz
How often will you work or study from home?|À quelle fréquence travailles-tu chez toi ?|Wie oft arbeitest oder lernst du zu Hause?
Most days|La plupart des jours|An den meisten Tagen
Some days|Parfois|Manchmal
Rarely|Rarement|Selten
Not sure yet|Je ne sais pas encore|Noch unklar
What smoking arrangement works for you at home?|Quelle règle pour le tabac ?|Welche Rauchregel passt für dich?
Smoking indoors is okay|À l’intérieur, c’est possible|Rauchen drinnen ist in Ordnung
Smoking outside only|Seulement dehors|Nur draußen rauchen
I prefer a smoke-free home|Je préfère un logement sans fumée|Ich bevorzuge ein rauchfreies Zuhause
I’d rather discuss it|Je préfère en discuter|Ich würde darüber sprechen
What should a future home know about pets?|Et les animaux ?|Was ist mit Haustieren?
I’m moving with a pet|Je déménage avec un animal|Ich ziehe mit einem Haustier um
I’d like pets to be welcome|Je souhaite que les animaux soient acceptés|Haustiere sollten willkommen sein
No pet in my plans|Pas d’animal prévu|Kein Haustier geplant
It depends on the home|Ça dépend du logement|Kommt auf die Wohnung an
How do you like to handle guests?|Comment accueillir les invités ?|Wie möchtet ihr mit Gästen umgehen?
Friends often visit|Des amis viennent souvent|Freunde kommen oft vorbei
Sometimes, with a heads-up|Parfois, en prévenant|Manchmal, nach Absprache
I keep home time quiet|Je préfère le calme chez moi|Ich mag es zu Hause ruhig
Let’s agree together|Décidons ensemble|Gemeinsam absprechen
What feels fair for keeping a home clean?|Comment partager le ménage ?|Wie möchtet ihr die Reinigung teilen?
Rotate shared chores|À tour de rôle|Abwechselnd
Each person handles their own|Chacun s’occupe de ses affaires|Jede Person kümmert sich um ihre eigenen Sachen
A simple weekly plan|Un planning simple|Ein einfacher Wochenplan
Let’s talk about it|Discutons-en|Darüber sprechen
Which languages would you enjoy speaking at home?|Quelles langues parler à la maison ?|Welche Sprachen möchtet ihr zu Hause sprechen?
English|Anglais|Englisch
Romanian|Roumain|Rumänisch
Spanish|Espagnol|Spanisch
French|Français|Französisch
German|Allemand|Deutsch
Another language|Une autre langue|Eine andere Sprache
What would make a place work better for you?|Quels équipements t’aideraient ?|Welche Ausstattung hilft dir?
Step-free access|Accès sans marches|Stufenloser Zugang
An elevator|Ascenseur|Aufzug
Space to work|Espace de travail|Arbeitsplatz
Outdoor space|Espace extérieur|Außenbereich
Close to transit|Près des transports|Nah am Nahverkehr
Useful storage|Rangement|Stauraum
How would you introduce yourself?|Comment te présenterais-tu ?|Wie würdest du dich vorstellen?
Who can see your introduction?|Qui peut voir ta présentation ?|Wer kann deine Vorstellung sehen?
Keep it private|Garder le profil privé|Profil privat lassen
Share when I start a conversation|Partager dans une conversation|In einem Gespräch teilen
Show me to nearby searches|Être visible dans les recherches|In Suchergebnissen sichtbar sein
What kind of room would you need in the shared home?|Quel type de chambre vous faut-il ?|Welche Zimmerart braucht ihr?
How many bedrooms would work for your household?|Combien de chambres vous faut-il ?|Wie viele Schlafzimmer braucht ihr?
How many people already live in the home?|Combien de personnes y vivent déjà ?|Wie viele Personen wohnen bereits dort?
When could someone move into the home?|Quand peut-on emménager ?|Wann ist der Einzug möglich?
What total monthly rent feels comfortable for your household?|Quel loyer total vous convient ?|Welche Gesamtmiete passt für euch?
Is there a total rent your household does not want to go over?|Quel loyer total ne voulez-vous pas dépasser ?|Welche Gesamtmiete möchtet ihr nicht überschreiten?
What monthly rent could you comfortably contribute toward your share?|Quelle part de loyer mensuel te convient ?|Welcher monatliche Mietanteil passt für dich?
What is the most you would personally contribute toward rent?|Quel est ton plafond personnel ?|Was ist deine persönliche Mietobergrenze?
One person|Une personne|Eine Person
Two people|Deux personnes|Zwei Personen
Three people|Trois personnes|Drei Personen
Four or more|Quatre ou plus|Vier oder mehr
Minimum bedrooms|Chambres minimum|Mindestens so viele Schlafzimmer
People in the home, including you|Personnes au total, toi compris|Personen insgesamt, einschließlich dir
bedrooms|chambres|Schlafzimmer
people|personnes|Personen
Neighbourhoods, a station, a landmark…|Quartier, station, repère…|Viertel, Haltestelle, Orientierungspunkt…
Choose one|Choisis une réponse|Wähle eine Antwort
Choose all that feel right|Choisis ce qui te convient|Wähle, was zu dir passt
Your answer|Ta réponse|Deine Antwort
Source listing|Annonce d’origine|Originalanzeige
No home photo supplied|Photo non fournie|Kein Foto vorhanden
Photo not provided|Photo non fournie|Kein Foto vorhanden
Room rent|Loyer de la chambre|Zimmermiete
Whole home total|Loyer du logement entier|Miete der ganzen Wohnung
Rent basis unknown|Base du loyer inconnue|Mietbasis unbekannt
Whole-home total; your personal share is unknown.|Loyer total ; ta part est inconnue.|Gesamtmiete; dein Anteil ist unbekannt.
Room rent. The full home cost is unknown.|Loyer de la chambre. Le coût total est inconnu.|Zimmermiete. Die Gesamtkosten sind unbekannt.
Above your preferred amount|Au-dessus de ton montant souhaité|Über deiner Wunschmiete
Within your preferred rent|Dans ton budget souhaité|Innerhalb deiner Wunschmiete
Above your private limit|Au-dessus de ton plafond privé|Über deiner privaten Obergrenze
room|pièce|Zimmer
bedroom|chambre|Schlafzimmer
Languages|Langues|Sprachen
Quiet|Calme|Ruhe
Observed|Consulté|Beobachtet
Move-in timing|Emménagement|Einzug
Expected stay|Durée prévue|Geplante Dauer
Quiet at home|Calme à la maison|Ruhe zu Hause
Working from home|Travail à domicile|Arbeiten zu Hause
Guests|Invités|Gäste
Shared cleaning|Ménage partagé|Gemeinsame Reinigung
Smoking at home|Tabac à la maison|Rauchen zu Hause
Pets|Animaux|Haustiere
Proposed|Proposé|Vorgeschlagen
No amount|Aucun montant|Kein Betrag
Date not set|Date non choisie|Datum noch offen
Plan saved|Plan enregistré|Plan gespeichert
Your plans|Mes projets|Meine Pläne
Reset ranking signals|Réinitialiser les préférences de tri|Sortierpräferenzen zurücksetzen
Main navigation|Navigation principale|Hauptnavigation
I’m starting a home search in|Je cherche un logement à|Ich suche eine Wohnung in
Would you like to plan it together?|Tu veux qu’on cherche ensemble ?|Möchtest du gemeinsam planen?
Time zone of the viewing|Fuseau horaire de la visite|Zeitzone der Besichtigung
You, and anyone else who has agreed to join|Toi et les personnes qui ont accepté|Du und alle, die zugesagt haben
This plan stays on your device. Contact the host to confirm a time.|Ce plan reste sur ton appareil. Confirme l’heure avec l’hôte.|Dieser Plan bleibt auf deinem Gerät. Bestätige die Zeit mit dem Anbieter.
Start a shared search first to make a group shortlist.|Crée une recherche partagée pour une liste commune.|Erstelle eine gemeinsame Suche für eine gemeinsame Merkliste.
Shared shortlist updated on this device.|Favoris partagés enregistrés ici.|Gemeinsame Merkliste auf diesem Gerät aktualisiert.
Your browser downloaded a copy of your local search data.|Tes données locales ont été téléchargées.|Deine lokalen Suchdaten wurden heruntergeladen.
Select and copy the invitation text above.|Sélectionne et copie le texte de l’invitation.|Wähle den Einladungstext aus und kopiere ihn.
Search ordering feedback was cleared.|Préférences de tri effacées.|Sortierpräferenzen gelöscht.
Amount cleared because the currency changed. Enter it again in the new currency.|Montant effacé après le changement de devise. Saisis-le à nouveau.|Betrag nach dem Währungswechsel gelöscht. Gib ihn erneut ein.
Choose a valid time zone, such as Europe/Berlin.|Choisis un fuseau horaire valide, par exemple Europe/Berlin.|Wähle eine gültige Zeitzone, etwa Europe/Berlin.
How many bedrooms do you need?|Combien de chambres vous faut-il ?|Wie viele Schlafzimmer braucht ihr?
Who already lives in the home?|Qui vit déjà dans le logement ?|Wer wohnt bereits dort?
How many people should live there?|Combien de personnes au total ?|Wie viele Personen insgesamt?
What total rent limit do you want to stay under?|Quel est votre plafond de loyer total ?|Was ist eure Gesamtmietobergrenze?
What rent limit do you want to stay under?|Quel est ton plafond de loyer ?|Was ist deine Mietobergrenze?
What could you put toward upfront costs?|Quel budget peux-tu prévoir pour emménager ?|Welchen Betrag kannst du für den Umzug einplanen?
Approximate location · change it anytime.|Lieu approximatif · modifiable|Ungefährer Ort · jederzeit änderbar
Amount available|Montant disponible|Verfügbarer Betrag
Private amount|Montant privé|Privater Betrag
Only for you|Pour toi uniquement|Nur für dich
Tune search|Affiner la recherche|Suche anpassen
Confirm availability|À confirmer|Zu bestätigen
What does this amount cover?|À quoi correspond ce montant ?|Wofür ist dieser Betrag gedacht?
Choose a basis|Choisir la base|Mietbasis wählen
My share|Ma part|Mein Anteil
Whole home|Logement entier|Ganze Wohnung
Optional and private. This stays separate from monthly rent.|Facultatif et privé. Ce montant reste distinct du loyer mensuel.|Optional und privat. Dieser Betrag bleibt von der Monatsmiete getrennt.
Let’s start with rooms you can browse.|Commençons par les chambres.|Fangen wir mit den Zimmern an.
We’ll look for a whole home to shape together.|Cherchons un chez-vous à partager.|Suchen wir ein Zuhause zum Teilen.
People first. Homes are still one tap away.|Les personnes d’abord. Les logements restent tout près.|Menschen zuerst. Wohnungen bleiben in Reichweite.
We’ll compare the rent for the whole home.|Comparons le loyer du logement entier.|Wir vergleichen die Miete der ganzen Wohnung.
Got it. This is separate from your renter search.|C’est noté. Ce projet reste séparé de ta recherche.|Verstanden. Das bleibt getrennt von deiner Wohnungssuche.
I’ll focus on the areas you choose.|Je garde les quartiers que tu choisis.|Ich achte auf deine gewählten Gegenden.
I’ll keep this private and in {currency}.|Ça reste privé et en {currency}.|Das bleibt privat und in {currency}.
I’ll keep this private and separate from monthly rent.|Ça reste privé et distinct du loyer mensuel.|Das bleibt privat und getrennt von der Monatsmiete.
No rush. We can leave that open.|Pas d’urgence. On peut laisser ça ouvert.|Keine Eile. Das kann offenbleiben.
A little corner to call your own.|Un petit coin à toi.|Eine kleine Ecke für dich.
One moving group, one step at a time.|Un groupe, un pas à la fois.|Eine Gruppe, ein Schritt nach dem anderen.
Room for everyone on your list.|De la place pour votre petit groupe.|Platz für alle auf deiner Liste.
A rough window is plenty.|Une période approximative suffit.|Ein ungefährer Zeitraum reicht.
A home can start with a season.|Un chez-soi peut commencer pour une saison.|Ein Zuhause kann für eine Saison beginnen.
A little quiet goes a long way.|Un peu de calme fait du bien.|Ein bisschen Ruhe tut gut.
Room for a desk and a deep breath.|De la place pour un bureau et une pause.|Platz für einen Schreibtisch und zum Durchatmen.
Clear expectations make a home feel easier.|Une règle claire aide à vivre ensemble.|Klare Absprachen erleichtern das Zusammenleben.
Paws belong in the plan.|Les petites pattes font partie du plan.|Pfoten gehören zum Plan.
A good hello starts at the door.|Un bonjour commence à la porte.|Ein gutes Hallo beginnt an der Tür.
Even little homes need a tidy-up.|Même les petites maisons ont besoin de rangement.|Auch kleine Häuser brauchen Ordnung.
More ways to say hello.|Encore plus de façons de dire bonjour.|Mehr Möglichkeiten, Hallo zu sagen.
We’ll look for details the source confirms.|Gardons les détails confirmés par l’annonce.|Wir achten auf bestätigte Angaben der Quelle.
A small hello is enough.|Un petit bonjour suffit.|Ein kleines Hallo reicht.
You choose who sees this.|Tu choisis qui peut voir ça.|Du wählst, wer das sieht.
I’ll keep this as your private preference.|Je garde ce choix pour toi.|Ich behalte das als deine private Vorliebe.
`;

export const localeWords = { fr: {}, de: {} };
const phrases = { fr: new Map(), de: new Map() };
for (const row of wordRows.trim().split('\n')) {
  const [key, french, german] = row.split('|');
  localeWords.fr[key] = french;
  localeWords.de[key] = german;
}
for (const row of phraseRows.trim().split('\n')) {
  const [english, french, german] = row.split('|');
  phrases.fr.set(english, french);
  phrases.de.set(english, german);
}

export function translateText(locale, englishText) {
  // Source descriptions stay in their source language; never invent a translation.
  return phrases[locale]?.get(englishText) ?? englishText;
}
