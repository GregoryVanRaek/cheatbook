var sequences = [
  [0, 2, 4],
  [3, 5, 7],
  [6, 8, 0],
  [9, 1, 3],
  [2, 1, 1],
  [5, 4, 7],
  [8, 7, 0],
  [4, 3, 9],
  [7, 6, 8],
  [5, 9, 1],
  [8, 2, 4],
  [7, 5, 7],
  [0, 8, 0],
  [2, 4, 4],
  [5, 9, 5],
  [9, 2, 3],
  [6, 6, 6],
]; // Tableau de toutes les séquences possibles

var langue = document.documentElement.lang;

var selectedRunes = []; // Tableau pour stocker les runes sélectionnées
var phrasesErreur = [
  ["Un barbare insiste pour utiliser une cuillère comme arme légendaire.",
    "Een barbaar staat erop om een lepel als legendarisch wapen te gebruiken.",
    "A barbarian insists on using a spoon as a legendary weapon."],
  ["Le magicien a pris sa liste de courses au lieu de ses sorts.",
    "De tovenaar heeft zijn boodschappenlijst meegenomen in plaats van zijn spreuken.",
    "The wizard took his shopping list instead of his spells."],
  ["Un gobelin vous propose un marché, mais il oublie ce qu’il voulait échanger.",
    "Een goblin biedt je een deal aan, maar vergeet wat hij wilde ruilen.",
    "A goblin offers you a deal but forgets what he wanted to trade."],

  ["Le barde chante si faux que les monstres fuient.",
    "De bard zingt zo vals dat de monsters vluchten.",
    "The bard sings so badly that the monsters flee."],

  ["Une poule enchantée se met à vous suivre en criant 'trahison' à chaque fois que vous lui tournez le dos.",
    "Een betoverde kip begint je te volgen en roept 'verraad' elke keer als je haar de rug toekeert.",
    "An enchanted chicken starts following you, yelling 'betrayal' every time you turn your back."],

  ["Vous trouvez une clé qui ouvre une porte déjà ouverte.",
    "Je vindt een sleutel die een deur opent die al open is.",
    "You find a key that opens a door that’s already open."],

  ["Un nain vous explique en détail comment il a battu un dragon… avant de révéler qu’il s’agissait d’un lézard.",
    "Een dwerg legt je in detail uit hoe hij een draak versloeg… voordat hij onthult dat het een hagedis was.",
    "A dwarf explains in detail how he defeated a dragon… before revealing it was a lizard."],

  ["Le druide parle à un arbre, mais l’arbre refuse de lui répondre.",
    "De druïde praat tegen een boom, maar de boom weigert te antwoorden.",
    "The druid talks to a tree, but the tree refuses to reply."],

  ["La baguette du sorcier émet des bulles à chaque sort lancé.",
    "De staf van de tovenaar blaast bellen bij elke uitgesproken spreuk.",
    "The wizard's wand emits bubbles with every spell cast."],

  ["Le voleur trébuche en pleine discrétion et fait tomber une pile de casseroles.",
    "De dief struikelt midden in zijn sluipactie en laat een stapel pannen vallen.",
    "The thief trips while sneaking and drops a stack of pans."],

  ["Un orc, fin gourmet décide de vous mettre des tartes.",
    "Een ork, een fijnproever, besluit taarten naar je te gooien.",
    "An orc, a fine gourmet, decides to throw pies at you."]

  ["Vous découvrez un coffre qui ne peut s’ouvrir qu’au niveau 100.",
  "Je vindt een kist die alleen op level 100 geopend kan worden.",
  "You discover a chest that can only be opened at level 100."],

    ["Le guerrier se bat héroïquement contre une ombre… qui s’avère être la sienne.",
      "De krijger vecht heroïsch tegen een schaduw... die blijkt zijn eigen schaduw te zijn.",
      "The warrior fights heroically against a shadow... that turns out to be his own."],

    ["Un miroir magique vous renvoie votre mort prochaine.",
      "Een magische spiegel toont je je komende dood.",
      "A magical mirror shows you your impending death."],

    ["Le barde perd à une partie de dés contre un fantôme tricheur.",
      "De bard verliest een dobbelspel tegen een bedrieglijke geest.",
      "The bard loses a dice game to a cheating ghost."],

    ["Le ranger Elfe se perd dans les bois malgré son sens de l’orientation légendaire.",
      "De elfenwoudloper raakt verdwaald in het bos, ondanks zijn legendarische oriëntatievermogen.",
      "The Elven ranger gets lost in the woods despite his legendary sense of direction."],

    ["Une cape d’invisibilité rend vos vêtements invisibles, mais pas vous.",
      "Een onzichtbaarheidsmantel maakt je kleding onzichtbaar, maar niet jou.",
      "An invisibility cloak makes your clothes invisible, but not you."],

    ["Un géant chante une chanson de 2 jours et vous oblige à l'écouter.",
      "Een reus zingt een lied van twee dagen en dwingt je om te luisteren.",
      "A giant sings a two-day song and forces you to listen."],

    ["Une potion vous confère une force surhumaine… mais uniquement pour soulever des plumes.",
      "Een potion geeft je bovenmenselijke kracht... maar alleen om veren op te tillen.",
      "A potion grants you superhuman strength... but only to lift feathers."],

    ["Les villageois sont terrorisés par un 'dragon', qui est en fait un chaton avec des ailes en carton.",
      "De dorpelingen zijn doodsbang voor een 'draak', die in werkelijkheid een kitten met kartonnen vleugels is.",
      "The villagers are terrified of a 'dragon', which is actually a kitten with cardboard wings."],

    ["Un grimoire parle, mais il ne fait que se plaindre des fautes de grammaire du magicien.",
      "Een boek spreekt, maar klaagt alleen over de grammaticale fouten van de tovenaar.",
      "A grimoire speaks, but only complains about the wizard's grammar mistakes."],

    ["Votre groupe découvre un coffre rempli uniquement de chaussettes dépareillées.",
      "Jullie groep ontdekt een kist die alleen gevuld is met sokken zonder paar.",
      "Your group discovers a chest filled only with mismatched socks."],

    ["Une épée magique chante des chansons pop chaque fois qu’elle frappe.",
      "Een magisch zwaard zingt popliedjes elke keer als het slaat.",
      "A magical sword sings pop songs every time it strikes."],

    ["Le barde joue un air si mélancolique que même les squelettes pleurent.",
      "De bard speelt een deuntje zo melancholisch dat zelfs de skeletten huilen.",
      "The bard plays such a melancholic tune that even the skeletons cry."],

    ["Un Orc vous pose des devinettes, mais il oublie toujours les réponses.",
      "Een ork stelt je raadsels, maar vergeet altijd de antwoorden.",
      "An Orc asks you riddles but always forgets the answers."],

    ["Vous décocher une flèche magique qui se retourne contre vous faute de cible.",
      "Je schiet een magische pijl die zich tegen je keert omdat er geen doel is.",
      "You shoot a magical arrow that turns against you for lack of a target."],

    ["Le barbare adopte un rat géant qu’il nomme 'Petit Bijou'.",
      "De barbarian adopteert een gigantisch rat die hij 'Kleine Juweel' noemt.",
      "The barbarian adopts a giant rat and names it 'Little Jewel'."],

    ["Le magicien transforme accidentellement un dragon en pigeon, mais il est trop fier pour l’admettre.",
      "De tovenaar verandert per ongeluk een draak in een duif, maar hij is te trots om het toe te geven.",
      "The wizard accidentally transforms a dragon into a pigeon, but he’s too proud to admit it."],

    ["Le voleur vole ses propres affaires pour améliorer sa discrétion.",
      "De dief steelt zijn eigen spullen om zijn sluipvaardigheid te verbeteren.",
      "The thief steals his own belongings to improve his stealth."],

    ["Un vieux mage a inventé une machine à voyager dans le temps… qui ne fonctionnera que dans 100 ans.",
      "Een oude tovenaar heeft een tijdmachine uitgevonden... die pas over 100 jaar zal werken.",
      "An old wizard invented a time machine... that will only work in 100 years."],

    ["Le druide parle à un poisson enchanté, qui est en fait un très bon menteur.",
      "De druïde spreekt tegen een betoverde vis, die eigenlijk een zeer goede leugenaar is.",
      "The druid talks to an enchanted fish, which is actually a very good liar."],

    ["Un sort de téléportation envoie le groupe… de l’autre côté de la pièce.",
      "Een teleportatiespreuk stuurt de groep... naar de andere kant van de kamer.",
      "A teleportation spell sends the group... to the other side of the room."],

    ["Votre cheval refuse de bouger tant qu’on ne lui chante pas une berceuse.",
      "Je paard weigert te bewegen zolang er geen wiegelied voor hem wordt gezongen.",
      "Your horse refuses to move unless you sing it a lullaby."],

    ["Un gobelin collectionne des slips troués et vous les offre.",
      "Een goblin verzamelt gaten in zijn ondergoed en geeft ze aan jou.",
      "A goblin collects holey underwear and gives them to you."]

    ["Une armure magique hurle 'à l’aide' dès qu’elle est frappée.",
      "Een magisch pantser schreeuwt 'help' zodra het wordt geslagen.",
      "A magical armor screams 'help' as soon as it is struck."],

    ["Une licorne refuse d’aider tant qu’on ne lui raconte pas une blague.",
      "Een eenhoorn weigert te helpen tenzij je hem een grap vertelt.",
      "A unicorn refuses to help unless you tell it a joke."],

    ["Un elfe se prend les pieds dans ses propres cheveux.",
      "Een elf struikelt over zijn eigen haar.",
      "An elf trips over his own hair."],

    ["Un piège semble mortel, mais ne contient que des confettis.",
      "Een val lijkt dodelijk, maar bevat alleen confetti.",
      "A trap seems deadly, but only contains confetti."],

    ["Le voleur vole la bourse d’un démon… qui est remplie de bonbons.",
      "De dief steelt de beurs van een demon... die vol zit met snoep.",
      "The thief steals a demon's pouch... which is filled with candy."],

    ["Une araignée géante vous tricote un pull.",
      "Een gigantische spin breit een trui voor je.",
      "A giant spider knits you a sweater."],

    ["Le ranger passe un an à dresser un écureuil qui s'étouffe avec une noisette.",
      "De ranger besteedt een jaar aan het trainen van een eekhoorn die stikt in een noot.",
      "The ranger spends a year training a squirrel that chokes on a hazelnut."],

    ["Une vieille sorcière refuse de lancer un sort tant qu’on ne lui fait pas un bisous.",
      "Een oude heks weigert een spreuk uit te spreken tenzij je haar een kus geeft.",
      "An old witch refuses to cast a spell unless you give her a kiss."],

    ["Le nain refuse de traverser une rivière… car elle est trop propre.",
      "De dwerg weigert een rivier over te steken... omdat hij te schoon is.",
      "The dwarf refuses to cross a river... because it's too clean."],

    ["Une statue magique ne bouge que quand personne ne la regarde, mais elle danse très mal.",
      "Een magisch standbeeld beweegt alleen als niemand het kijkt, maar het danst heel slecht.",
      "A magical statue only moves when no one is looking, but it dances very badly."],

    ["Le barde compose une chanson si mauvaise que le troll envisage de vous relâcher.",
      "De bard schrijft een lied zo slecht dat de troll overweegt je vrij te laten.",
      "The bard composes a song so bad that the troll considers releasing you."],

    ["Vous résolvez une énigme par accident et vous ne savez pas à quoi ça sert.",
      "Je lost per ongeluk een raadsel op en weet niet wat het nut is.",
      "You solve a riddle by accident and don't know what it's for."],

    ["Vous prenez une potion qui fait pousser des moustaches arc-en-ciel à tous ceux qui la boivent.",
      "Je neem een drankje dat regenboogsnorren laat groeien bij iedereen die het drinkt.",
      "You take a potion that grows rainbow mustaches on anyone who drinks it."],

    ["Une carte au trésor mène à un coffre vide.",
      "Een schatkaart leidt naar een lege kist.",
      "A treasure map leads to an empty chest."],

    ["Le barde essaie de draguer un golem ivre.",
      "De bard probeert een dronken golem te versieren.",
      "The bard tries to flirt with a drunken golem."],

    ["Le guerrier refuse de se battre car il est en pleine sieste.",
      "De krijger weigert te vechten omdat hij een dutje doet.",
      "The warrior refuses to fight because he is napping."],

    ["Le sorcier invoque un démon, mais il est trop timide pour discuter avec lui.",
      "De tovenaar roept een demon op, maar is te verlegen om met hem te praten.",
      "The wizard summons a demon, but he is too shy to talk to him."],

    ["Une bague magique vous force à chanter chaque fois que vous parlez.",
      "Een magische ring dwingt je te zingen telkens wanneer je spreekt.",
      "A magical ring forces you to sing whenever you speak."],

    ["Vous découvrez une épée légendaire… en plastique.",
      "Je vindt een legendarisch zwaard... van plastic.",
      "You discover a legendary sword... made of plastic."],

    ["Un chapeau enchanté vous insulte quand vous essayez de le porter.",
      "Een betoverde hoed beledigt je wanneer je probeert hem te dragen.",
      "An enchanted hat insults you when you try to wear it."],

    ["Un chevalier fantôme ferre son cheval.",
      "Een spookridder beslaat zijn paard.",
      "A ghost knight shoes his horse."],

    ["Le voleur vole une couronne maudite et elle refuse de quitter sa tête.",
      "De dief steelt een vervloekte kroon en deze weigert zijn hoofd te verlaten.",
      "The thief steals a cursed crown, and it refuses to leave his head."],

    ["Une armure enchantée refuse de bouger tant qu’on ne lui sert pas un thé.",
      "Een betoverd pantser weigert te bewegen tenzij je thee voor hem zet.",
      "An enchanted armor refuses to move unless you serve it tea."],

    ["Une potion fait grandir vos cheveux de 10 mètres.",
      "Een drankje laat je haar met 10 meter groeien.",
      "A potion makes your hair grow by 10 meters."],

    ["Le troll vous demande de retrouver son 'doudou'.",
      "De troll vraagt je om zijn 'knuffel' terug te vinden.",
      "The troll asks you to find his 'comfort toy'."],

    ["Le druide se transforme en canard, mais ne sait plus comment redevenir humain.",
      "De druïde verandert in een eend, maar weet niet meer hoe hij weer een mens wordt.",
      "The druid turns into a duck but doesn't know how to become human again."],

    ["Une harpe magique joue des musiques de flatulences en boucle.",
      "Een magische harp speelt constant muziek van winderigheid.",
      "A magical harp plays fart music on loop."],

    ["Une boîte enchantée parle, mais elle ne raconte que des ragots.",
      "Een betoverde doos spreekt, maar vertelt alleen roddels.",
      "An enchanted box speaks, but it only tells gossip."],

    ["Une poignard légendaire refuse de couper autre chose que du beurre.",
      "Een legendarisch mes weigert iets anders te snijden dan boter.",
      "A legendary dagger refuses to cut anything but butter."],

    ["Le magicien invoque un élémentaire de feu qui se met à cuire des saucisses.",
      "De tovenaar roept een vuurelementaal op die begint worstjes te koken.",
      "The wizard summons a fire elemental who starts cooking sausages."],

    ["Une porte magique s’ouvre mais vous ne pouvez avancer.",
      "Een magische deur gaat open, maar je kunt niet verder.",
      "A magical door opens, but you can't move forward."],

    ["Un bandit vole les clés de vos poneys.",
      "Een bandiet steelt de sleutels van je pony's.",
      "A bandit steals the keys to your ponies."],

    ["Une gemme maudite vous rend éternellement pauvre.",
      "Een vervloekte edelsteen maakt je voor altijd arm.",
      "A cursed gem makes you eternally poor."],

    ["Le guerrier achève héroïquement… une tasse en argile.",
      "De krijger voltooit heroïsch... een klei beker.",
      "The warrior heroically finishes off... a clay cup."],

    ["Le voleur vole un poisson rare… qui se met à hurler dès qu’on le touche.",
      "De dief steelt een zeldzame vis... die begint te schreeuwen zodra je hem aanraakt.",
      "The thief steals a rare fish... which starts screaming as soon as you touch it."],

    ["Un grimoire ne s’ouvre que si vous chatouillez le Nain.",
      "Een boek opent zich alleen als je de dwerg kietelt.",
      "A grimoire opens only if you tickle the dwarf."],

    ["Une potion vous donne des ailes… mais elles sont inutilisables.",
      "Een drankje geeft je vleugels... maar ze zijn onbruikbaar.",
      "A potion gives you wings... but they are unusable."],

    ["Le druide se lie d’amitié avec un moustique géant.",
      "De druïde sluit vriendschap met een gigantische mug.",
      "The druid befriends a giant mosquito."],

    ["Une armure disparait dès que vous essayez de la porter.",
      "Een pantser verdwijnt zodra je probeert het te dragen.",
      "An armor disappears as soon as you try to wear it."],

    ["Un chat magique miaule et puis s'en va.",
      "Een magische kat miauwt en loopt dan weg.",
      "A magical cat meows and then walks away."],

    ["Un miroir maudit vous donne des conseils vestimentaires sarcastiques.",
      "Een vervloekte spiegel geeft sarcastische modeadvies.",
      "A cursed mirror gives you sarcastic fashion advice."],

    ["Une clé magique qui refuse d’ouvrir les serrures ordinaires.",
      "Een magische sleutel weigert gewone sloten te openen.",
      "A magical key refuses to open ordinary locks."],

    ["Un squelette joue du xylophone sur ses propres côtes.",
      "Een skelet speelt xylofoon op zijn eigen ribben.",
      "A skeleton plays the xylophone on its own ribs."],

    ["Vous voyez un rat répondre à une énigme par accident.",
      "Je ziet een rat per ongeluk een raadsel beantwoorden.",
      "You see a rat accidentally answer a riddle."],

    ["Le barde compose un poème si mauvais qu’il met le troll en colère.",
      "De bard schrijft een gedicht zo slecht dat de troll boos wordt.",
      "The bard writes such a bad poem that it makes the troll angry."],

    ["Un sorcier prétend être puissant, mais il est surtout très bon en prestidigitation.",
      "Een tovenaar beweert krachtig te zijn, maar is vooral heel goed in goochelen.",
      "A wizard claims to be powerful, but he is mostly very good at sleight of hand."],

    ["Votre poney parle, mais il ne fait que vous insulter.",
      "Je pony praat, maar hij beledigt je alleen.",
      "Your pony talks, but it just insults you."],

    ["Une potion rend invincible… mais uniquement les Naines Orcs unijambistes.",
      "Een drankje maakt je onoverwinnelijk... maar alleen voor eenbenige orken dwergen.",
      "A potion makes you invincible... but only for one-legged Orc dwarves."],

    ["Vous rencontrez une souris qui pense être un géant.",
      "Je ontmoet een muis die denkt een gigant te zijn.",
      "You meet a mouse that thinks it's a giant."],

    ["Une lampe magique libère un génie… parti en congé.",
      "Een magische lamp bevrijdt een geest... die op vakantie is.",
      "A magic lamp releases a genie... who's on vacation."],

    ["Un coffre contient un autre coffre plus petit, et ainsi de suite.",
      "Een kist bevat een kleinere kist, en zo verder.",
      "A chest contains another smaller chest, and so on."],

    ["Un orc collectionne des peluches et refuse de se battre.",
      "Een ork verzamelt knuffels en weigert te vechten.",
      "An orc collects stuffed animals and refuses to fight."],

    ["Une potion donne des pouvoirs télépathiques, mais uniquement avec les limaces de mer.",
      "Een drankje geeft telepathische krachten, maar alleen met zeeslakken.",
      "A potion grants telepathic powers, but only with sea slugs."],

    ["Le magicien invoque un familier… un poisson rouge.",
      "De tovenaar roept een familier op... een goudvis.",
      "The wizard summons a familiar... a goldfish."],

    ["Une statue animée vous fait la morale sur l’écologie.",
      "Een levende standbeeld geeft je een les over ecologie.",
      "An animated statue gives you a lecture on ecology."],

    ["Vous trouvez une bague maudite qui vous fait danser à chaque mensonge.",
      "Je vindt een vervloekte ring die je laat dansen bij elke leugen.",
      "You find a cursed ring that makes you dance with every lie."],

    ["Vous faites face à une porte de mauvaise humeur qui refuse de s’ouvrir.",
      "Je staat tegenover een humeurige deur die weigert open te gaan.",
      "You face a moody door that refuses to open."],

    ["Un livre enchanté refuse d’être lu et saute des pages au hasard.",
      "Een betoverd boek weigert gelezen te worden en slaat willekeurig pagina's over.",
      "An enchanted book refuses to be read and skips pages randomly."],

    ["Une hache magique refuse de verser une goutte de sang.",
      "Een magische bijl weigert een druppel bloed te laten vallen.",
      "A magical axe refuses to spill a drop of blood."],

    ["Un roi gobelin vous lance un duel… de karaoké.",
      "Een goblinkoning daagt je uit voor een duel... karaoke.",
      "A goblin king challenges you to a duel... of karaoke."],
];

var phrasesReussite = [
  ["L’OS caché derrière les dragons montre un chiffre lorsque la flèche de la colonne s’aligne sur un crâne…",
    "De Bot verborgen achter de draken toont een nummer wanneer de pijl op de kolom op één lijn staat met een schedel.",
    "The Bone hidden behind the dragons show a number when the column arrow aligns with a skull."],

  ["Le titre de la carte fait référence à un endroit précis sur la carte à examiner.",
    "De kaarttitel verwijst naar een specifieke plaats op de te onderzoeken kaart.",
    "The map title refers to a specific location on the map to be examined."],

  ["Des chaines de ces couleurs se trouvent dans la pièce, elles ont un nombre de maillons différent.",
    "Kettingen van deze kleuren bevinden zich in de kamer, ze hebben een verschillend aantal schakels.",
    "Chains of these colors can be found in the room, each with a different number of links."],

  ["En examinant les endroits marqués d’une « x », vous trouvez un certain nombre de pièces d’or.",
    "Door de plekken gemarkeerd met een 'x' te onderzoeken, vind je een bepaald aantal gouden munten.",
    "By examining the spots marked with an 'x', you find a certain number of gold coins."],

  ["",
    "",
    ""],

  ["Une fois la grosse clé trouvée dans le livre, positionner judicieusement les figurines obtenues auprès des prisonniers.",
    "Zodra de grote sleutel in het boek is gevonden, plaats de figuren verkregen van de gevangenen op de juiste manier.",
    "Once the big key is found in the book, strategically position the figurines obtained from the prisoners."],

  ["On dirait qu’il manque quelque chose dans ce bouclier. Vous la trouverez après avoir joué au jeu de plateau.",
    "Het lijkt erop dat er iets ontbreekt in dit schild. Je vindt het nadat je het bordspel hebt gespeeld.",
    "It seems something is missing in this shield. You’ll find it after playing the board game."],

  ["Il va falloir trouver un plan et ses 4 membres pour le réassembler.",
    "Je moet een plan vinden en de 4 delen ervan om het weer in elkaar te zetten.",
    "You’ll need to find a plan and its 4 parts to reassemble it."],

  ["Une fois la clé trouvée, vous pourrez remonter le fantôme du sorcier.",
    "Zodra de sleutel is gevonden, kun je de geest van de tovenaar herstellen.",
    "Once the key is found, you can restore the wizard's ghost."],

  ["Seul un voleur de niveau 3 peut l’ouvrir. Les armes doivent être rangées dans un certain ordre.",
    "Alleen een dief van niveau 3 kan het openen. De wapens moeten in een specifieke volgorde worden geplaatst.",
    "Only a level 3 thief can open it. The weapons must be arranged in a specific order."],

  ["Seul un mage de niveau 3 peut activer les runes. Il faudra aussi retrouver les 4 parties du labyrinthe.",
    "Alleen een magiër van niveau 3 kan de runen activeren. Je moet ook de 4 delen van het labyrint vinden.",
    "Only a level 3 mage can activate the runes. You'll also need to find the 4 parts of the labyrinth."],

  ["",
    "",
    ""],

  ["",
    "",
    ""],

  ["Seule une clé magique ouvrira ce coffre.",
    "Alleen een magische sleutel opent deze kist.",
    "Only a magic key will open this chest."],

  ["Seule une clé magique ouvrira ce coffre.",
    "Alleen een magische sleutel opent deze kist.",
    "Only a magic key will open this chest."],

  ["",
    "",
    ""],

  ["Donne une arme bonus.",
    "Geeft een bonuswapen.",
    "Grants a bonus weapon."]
];
 // Tableau de messages de réussite personnalisés pour chaque combinaison

document.addEventListener("DOMContentLoaded", function () {
  let runes = document.querySelectorAll(".runes");

  runes.forEach(function (rune) {
    rune.addEventListener("click", function () {
      let runeIndex = parseInt(this.dataset.index);
      if (selectedRunes.length < 3) {
        selectedRunes.push(runeIndex); // Ajoute la rune cliquée à la liste des runes sélectionnées
        const img = document.getElementById(`${runeIndex}`);
        img.src =`./pic/runes/${runeIndex}-2.jpg`;

        this.classList.add(
          "selected",
        ); // Ajoute une classe pour indiquer que la rune est sélectionnée
        this.classList.add("pressed");
        // Retire la div de décoration
        if (selectedRunes.length === 3) {
          // Si trois runes ont été sélectionnées
          validateSequence(); // Valide la séquence
          setTimeout(() => {
            resetGame();
          },60000)
        }
      }
    });

    // Supprimer la classe 'pressed' après l'animation
    rune.addEventListener("animationend", function () {
      this.classList.remove("pressed");
    });
  });

  const reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    resetGame();
  });
});

function validateSequence() {
  let isMatch = false;
  let index = -1;
  let languageIndex;

  // Trier les runes sélectionnées pour ignorer l'ordre
  let sortedSelectedRunes = selectedRunes.slice().sort((a, b) => a - b);

  // Vérifier si la séquence sélectionnée (triée) correspond à l'une des séquences dans le tableau (triées)
  for (let i = 0; i < sequences.length; i++) {
    let sortedSequence = sequences[i].slice().sort((a, b) => a - b);
    if (arraysEqual(sortedSelectedRunes, sortedSequence)) {
      isMatch = true;
      index = i;
      break;
    }
  }

  if (isMatch) {
    // Si la séquence est trouvée
    let sequenceKey = sortedSelectedRunes.join("-"); // Clé unique pour la séquence triée
    let messagesContainer = document.getElementById("successMessagesContainer");
    messagesContainer.innerHTML = ""; // Réinitialiser les messages précédents
    languageIndex = getLanguage();

    let message = phrasesReussite[index][languageIndex]; // Récupérer les phrases associées à la séquence correcte

    // Afficher toutes les phrases associées à la séquence correcte
    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add('success-message')
    messagesContainer.appendChild(messageElement); // Ajouter le message au conteneur

  } else {
    // Si la séquence n'est pas trouvée
    let randomIndex = Math.floor(Math.random() * phrasesErreur.length);
    languageIndex = getLanguage();
    showMessage(phrasesErreur[randomIndex][languageIndex]);
  }
}

function getLanguage(){
  switch(langue){
    case 'fr' : return 0;
    case 'nl' : return 1;
    case 'en' : return 2;
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function showMessage(message) {
  document.getElementById("successMessagesContainer").innerText = message;
}

function resetGame() {
  document.getElementById("successMessagesContainer").innerText = "";
  selectedRunes = []; // Réinitialiser le tableau des runes sélectionnées

  let runes = document.querySelectorAll(".runes");
  runes.forEach(function (rune) {
    rune.classList.remove(
      "selected",
      "pressed"
    );
    rune.src = `./pic/runes/${rune.id}.jpg`
  });

  // Réinitialiser les autres éléments si nécessaire
  clearSuccessMessages();
}

function clearSuccessMessages() {
  let messagesContainer = document.getElementById("successMessagesContainer");
  messagesContainer.innerHTML = ""; // Vide le contenu du conteneur
}
