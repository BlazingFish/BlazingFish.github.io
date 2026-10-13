const output = document.getElementById("output")
const options = document.getElementById("buttons")
const speed = document.getElementById("speed")

var buttons
var dialogue
var splitDialogue

var frameCount = 0
var characterCount = 0

var textSpeed = 10

function setSpeed(s) {
    if (s == 14) {
        speed.innerHTML = "Slow"
    }
    else if (s == 10) {
        speed.innerHTML = "Medium"
    }
    else if (s == 4) {
        speed.innerHTML = "Fast"
    }
    else if (s == 3) {
        speed.innerHTML = "Fast"
    }
    else {
        speed.innerHTML = "Lightspeed"
    }
    textSpeed = s
}

// This function is pretty redundant, but I can't be fucked to change it
function start() {
    output.innerHTML = ""
    wakeUp()
}

function wakeUp() {
    dialogue = `
    BEEP BEEP|BEEP BEEP||*Yawn*||Looks like yet another start to yet another school day...|Man, I wish school could be more exciting...||
    *You start walking to school. As you walk, you hear the school bell*||Oh crap, I'm late!||*You rush into homeclass*||Silver: Did I make it?|
    Mr McCusker: Just in time, Silver..!|
    Silver: Yes!|
    Mr McCusker: For specialist maths!|
    Silver: Oh, I missed homeclass. Could I check my emails first?|
    Mr McCusker (Like a tsundere): Ugh, well go on then.||
    *You take your seat with BlazingFish and Redguy*||
    As you check your emails, you can't help but feel like something is wrong.|
    You open Discord, and...|
    Most of your friends are skipping school?|
    They're going to the city?|
    And they want you to come?||
    `
    buttons = [createButton("Hell yeah!", "busToCity()"), createButton("No, I need to revise", "stayInSchool()")]
    splitDialogue = dialogue.split("")

    speech()
}

function busToCity() {
    clearHTML()

    dialogue = `
    *You rush to the bus stop, desperate to not be late once again*|
    *You arrive seconds before the bus does*||
    Bemannu: Silver! We're glad you could make it!|
    Pat: Yeah, we thought you might flake on us.||
    Overscore, Pat, Jinko, Kitsune, MindOfLiv, Island, and Bemannu are at the bus stop.||
    *You all go into the bus and sit near the front.*|
    *The bus approaches a red light.*|
    *You can't help but notice how it's not slowing down.*|
    *You see the bus driver visibly panic*||
    Silver: Ummm... guys? Are you seeing this?|
    Overscore: Nahh, it's probably fine.||
    `
    buttons = [createButton("Help the bus driver.", "saveBus()"), createButton("The bus driver is the expert.", "destroyBus()")]
    splitDialogue = dialogue.split("")

    speech()
}

function saveBus() {
    clearHTML()

    dialogue = `
    You run up.|
    You see the dashboard.|
    A grin creeps across your face, as you let out a chuckle.|
    You've been working with computers for years. This is just the job for you.|
    Behind you, your friends start to notice that something's wrong.||
    Kitsune: Are we stopping? There's a red light.|
    MindOfLiv: Maybe they're trying to run the red light..?||
    On the bus' dashboard, you open the digital control panel.|
    You tap the 'enable breaks' button.|
    The bus comes to a screeching halt, right before the intersection.||
    Everyone: Yay! You saved us!||
    Everyone claps.|
    The bus driver faints.|
    You get behind the wheel, and drive to the city. Something like this is no problem for the likes of you.||
    `
    buttons = [createButton("Guess what? I'm the best.", "arriveAtCity()")]
    splitDialogue = dialogue.split("")

    speech()
}

function arriveAtCity() {
    clearHTML()

    dialogue = `
    Once you and your friends arrive at the city, you start wondering around aimlessly.||
    Overscore: So, what are we getting for lunch guys.|
    Pat: How about you decide, Silver.||
    `
    buttons = [createButton("I'm really craving some Chinese", "chinese()"), createButton("I want some Italian.", "italian()"), createButton("I'm not sure. I think if I heard Overscore sing, it would really help me make up my mind.", "sing()")]
    splitDialogue = dialogue.split("")

    speech()
}

function sing() {
    clearHTML()

    dialogue = `
    Overscore: I would be happy to oblige.||
    Overscore: Our whole universe was in a hot, dense state|
    Then nearly fourteen billion years ago, expansion started, wait|
    The Earth began to cool|
    The autotrophs began to drool|
    Neanderthals developed tools|
    We built a wall (We built the pyramids)|
    Math, science, history, unraveling the mystery|
    That all started with the Big Bang (Bang)||
    Overscore: Since the dawn of man is really not that long|
    As every galaxy was formed in less time than it takes to sing this song|
    A fraction of a second and the elements were made|
    The bipeds stood up straight|
    The dinosaurs all met their fate|
    They tried to leap but they were late|
    And they all died (They froze their asses off)|
    The oceans and Pangea|
    See ya, wouldn't wanna be ya|
    Set in motion by the same Big Bang||
    Overscore: It all started with the Big... Bang||
    Overscore: It's expanding ever outward but one day|
    It will pause and start to go the other way|
    Collapsing ever inward, we won't be here, it won't be heard|
    Our best and brightest figure that it'll make an even bigger bang||
    Overscore: Australopithecus would really have been sick of us|
    Debating how we're here, they're catching deer (We're catching viruses)|
    Religion or astronomy, Descartes or Deuteronomy|
    It all started with the Big Bang||
    Overscore: Music and mythology, Einstein and astrology|
    It all started with the Big Bang|
    It all started with the Big... Bang!||
    Silver: Alright, now I've decided. I want...
    `
    buttons = [createButton("Chinese.", "chinese()"), createButton("Italian.", "italian()")]
    splitDialogue = dialogue.split("")

    speech()
}

function italian() {
    clearHTML()

    dialogue = `
    You all arrive at an Italian resturant.|
    After 5 minutes of conversing, someone bursts through the door.||
    Robber (has a knife): I'm here to rob this place!|
    Resturant Owner: We don't have any cash! We only accept digital payment!|
    Robber: Well I guess I'll just have to kill you then!||
    Bemannu: What should we do?|
    Jinko: We could run away.|
    Kitsune: Where? The only place to go is through this hole in the floor which leads to the sewers.|
    Jinko: Yeah, good point. What's it gonna be, Silver?||
    Why are they asking me again?||
    `
    buttons = [createButton("The sewers are smelly, and we shouldn't risk attracting the robber's attention.", "stayInResturant()"), createButton("We need to leave, no matter what.", "sewer()")]
    splitDialogue = dialogue.split("")

    speech()
}

function stayInResturant() {
    clearHTML()

    dialogue = `
    You all watch in horror, as the robber gets closer and closer to the resturant owner.|
    Just as she (I bet you thought the robber was a guy you sexist pig) was about to plunge the knife into the resturant owner's chest (wow and now you're trying to rationalise your biases, typical), A projectile bursts through the window, breaking the glass and sending the robber flying.|
    Everyone looks out the window to see who did that.||
    Everyone: IRON MAN?|
    Iron man: haha its me iron man|
    Robber: Iron man... I'm so sorry... please forgive me.|
    Iron man: no go to jail||
    And so, all of your friends make it out of the Italian shop, eager to go home after an overeventful day.||
    `
    buttons = [createButton("All's well that ends well.", "tonyStarkAtHouse()")]
    splitDialogue = dialogue.split("")

    speech()
}

function sewer() {
    clearHTML()

    dialogue = `
    Silver: Well, here goes nothing.||
    You jump into the sewers. Everyone else follows you.||
    Silver: Ow!||
    You hit the floor, because there was no ladder leading down.||
    Silver: OW!||
    Overscore lands on you, because there was no ladder leading down.||
    Overscore: OW!||
    MindOfLiv lands on Overscore, because there was no ladder leading down.|
    This pattern continues until everyone is in the sewers.||
    Silver: Alright, let's go... This way.||
    You all start trudging through the sewers, looking for a way out.|
    You hear a faint squeak in the distance.||
    Kitsune: What was that?||
    You all stop and rapidly start looking around.|
    In the chaos, Bemannu accidentally trips Jinko, who falls into the sewage.|
    This leads Jinko to accidentally tripping Pat, who falls into the sewage.|
    This leads Pat to accidentally tripping Overscore, who falls into the sewage.|
    This pattern continues until everyone except for you has fallen into the sewage.||
    `
    buttons = [createButton("Dive in after them.", "inTheSewage()"), createButton("No way, they'll be fine.", "ratKing()")]
    splitDialogue = dialogue.split("")

    speech()
}

function inTheSewage() {
    clearHTML()

    dialogue = `
    These people are your friends. They've helped you through thick and thin. Would you really let them drown in smelly sewage?|
    No. Of course not.|
    You steel yourself, and dive headfirst into the sewage. You try swimming around to look for your friends, but the current is too strong.|
    It sweeps you away like one of those conveyor belts for people which are at airports.|
    You hit your head on a pipe, and-||
    'Is he going to be alright?'|
    'I sure hope so.'|
    'I can't believe he dove in after us!'||
    You open your eyes.||
    Silver: Guys! You're... ok?|
    Bemannu: No need to sound so confused. Or maybe there is.|
    Silver: Why do you guys look like that?|
    Kitsune: Well, we don't really know. MindOfLiv thinks it's some radiation thing.||
    You look at your hands.|
    They're green!||
    Silver: Ohmygosh, what am I?|
    Overscore: Well Silver, we are...|
    Jinko: Adolescent Deformed Samurai Reptiles!||
    `
    buttons = ["ENDING: Adolescent Deformed Samurai Reptiles"]
    splitDialogue = dialogue.split("")

    speech()
}

function ratKing() {
    clearHTML()

    dialogue = `
    These people are your friends. They've helped you through thick and thin. Would you really let them drown in smelly sewage?|
    Yeah, you would. To be fair, it seems really smelly in there, and it's not like you could do much anyway.|
    You continue walking through the sewers on your own.||
    ONE WEEK LATER||
    How much time has passed? You don't know.|
    Long enough for the smell to become normal.|
    You were scared at first, but not anymore.|
    The rats have become your greatest assets, and your closest friends.|
    They show you new paths.|
    They show you where to find drinking water.|
    They taste delicious.|
    And they're great conversationalists.||
    MEANWHILE: ON THE SURFACE||
    Redguy: Do you know where Silver went?|
    BlazingFish: I dunno. Dunno where everyone else went either.||
    ONE MONTH LATER||
    BREAKING NEWS: Word of a troubled young man who has made a home out of this cities sewage system has been spreading like wildfire, with people calling this mysterious figure the 'Rat King'.|
    Sightings of this 'Rat King' are yet to be confirmed, but we encourage everyone to be wary in these trying times. Especially around drainage gates.||
    `
    buttons = ["ENDING: Rat King"]
    splitDialogue = dialogue.split("")

    speech()
}

function chinese() {
    clearHTML()

    dialogue = `
    You all arrive at a Chinese resturant.|
    After 5 minutes of conversing, the waiter asks to take your order.||
    Bemannu: It's all up to you, Silver.||
    `
    buttons = [createButton("How about hotpot?", "hotpot()"), createButton("I'd like some dumplings please!", "dumplings()")]
    splitDialogue = dialogue.split("")

    speech()
}

function hotpot() {
    clearHTML()

    dialogue = `
    You order hotpot for you and your friends.|
    While you're waiting, you talk about school.||
    Silver: School, more like... 's not cool!|
    Everyone: Hahaha|
    Silver: School, more like drool!|
    Everyone: Hahaha||
    It's personal and nuanced discussions like these that remind you how incredible friendship is.|
    It's been a while since the waiter disappeared. People are looking at the kitchen with eager eyes.|
    An hour after ordering, the food arrives. Everyone is scarfing down their hotpot, you included.|
    The mood is ravenous.|
    The smell is serendipitous.|
    The food is delicious.|
    The room is spinning.|
    Wait, what?||
    You look around and see your friends limped over, with their eyes half closed. What's going on?|
    You make eye contact with the waiter. He smirks as he watches you fall.|
    Did... did he poison the food?||
    Silver: H...hey man, w-w-what's your problem..?||
    You collapse to the floor. What the hell is wrong with that guy?|
    `
    buttons = ["ENDING: Poison the Pot<br><br>btw this is like the worst ending it is so unsatisfying and i regret writing it but cant be fucked to change it<br>sorry if you got this one first ૮(˶ㅠ︿ㅠ)ა"]
    splitDialogue = dialogue.split("")

    speech()
}

function dumplings() {
    clearHTML()

    dialogue = `
    You order dumplings for you and your friends.|
    While you're waiting, you talk about school.||
    Silver: School, more like... 's not cool!|
    Everyone: Hahaha|
    Silver: School, more like drool!|
    Everyone: Hahaha||
    It's personal and nuanced discussions like these that remind you how incredible friendship is.|
    It's been a while since the waiter disappeared. People are looking at the kitchen with eager eyes.|
    An hour after ordering, the food arrives. Everyone is scarfing down their dumplings, you included.|
    The mood is ravenous.|
    The smell is serendipitous.|
    The food is delicious.|
    Once you're all done, you continue hanging out at the city.|
    There's this place near the mall that your friends want to check out.|
    Afterwards, you stop at the park.|
    As the day goes on, people start going home.|
    You're one of the last ones to leave, but eventually, you go home too.|
    This was a good day.||
    `
    buttons = ["ENDING: A fun school day"]
    splitDialogue = dialogue.split("")

    speech()
}

function destroyBus() {
    clearHTML()

    dialogue = `
    There are gonna be two endings here.|
    But that comes later.||
    `
    buttons = ["ENDING: Alpha male in the alpha prototype."]
    splitDialogue = dialogue.split("")

    speech()
}

function stayInSchool() {
    clearHTML()

    dialogue = `
    Nah, it's not worth it. You've got a test coming up, and you need to be responsible.||
    Redguy: Hey Silver, what's the derivative of arccos(x)?||
    `
    buttons = [createButton("(-1)/(1+x^2)^(1/2), I reckon.", "maths()"), createButton("Ummmm... I want to go to the bathroom.", "mathsBathroom()")]
    splitDialogue = dialogue.split("")

    speech()
}

function maths() {
    clearHTML()

    dialogue = `
    Redguy: Thanks Silver!|
    Silver: All good!||
    You and your friends continue doing maths.||
    BlazingFish: Hey Silver, what's the cosine rule again? I forgot.||
    `
    buttons = [createButton("c^2=a^2+b^2-2ab(cos(C))", "physics(maths)"), createButton("Ummmm... I want to go to the bathroom.", "mathsBathroom()")]
    splitDialogue = dialogue.split("")

    speech()
}

function mathsBathroom() {
    clearHTML()

    dialogue = `
    As you drop a motherload, you ponder on how animals mark their territory. Isn't it fascinating how they do it via urine?|
    As you finish up, you hear footsteps.|
    When you open the door to your bathroom stall, you see a masked man in front of you.||
    Masked man: Hey kid, you want some meth?|
    Silver: I dunno, you shouldn't take candy from strangers.|
    Masked man: Heh, this is something even better than candy.||
    Something better than candy? This HAS to be good. Should you risk it?||
    `
    buttons = [createButton("Yeah, why not?", "takingMeth()"), createButton("Nah, drugs are for losers.", "physics('bathroom')")]
    splitDialogue = dialogue.split("")

    speech()
}

function takingMeth() {
    clearHTML()

    dialogue = `
    You accept the man's meth, and immediately lay it out on the bathroom floor.|
    The man tells you how to 'snort' it 'the good way'.|
    Afterwards, you stumble out of the bathroom, trying to make your way to your physics lesson.|
    But as you walk, you notice your vision getting blurry. You try to keep walking, but fall over.||
    *THUD*||
    `
    buttons = [createButton("Maybe I took too much meth...", "field()")]
    splitDialogue = dialogue.split("")

    speech()
}

function field() {
    clearHTML()

    dialogue = `
    When you open your eyes, you see a great blue abyss.|
    The ground beneath you is spiky, yet gentle.|
    You sit up and see that you're in a large, open field.|
    You stand up and start running around, relishing in the freedom.|
    As you frolick, you see a few figures in the distance.||
    5 minutes later...||
    Stranger 1: Hey, are you alright?|
    Stranger 2: We're the Dungon Slayers! I'm the team's tank!|
    Wizard: I'm the team wizard!|
    Swordsman: I'm a knight!|
    Archer: I'm an archer!|
    Tank: Our party recently lost a few members. We could do with your help.||
    `
    buttons = [createButton("That's horrible!", "larpSesh()"), createButton("You guys seem weird.", "aloneInField()")]
    splitDialogue = dialogue.split("")

    speech()
}

function larpSesh() {
    clearHTML()

    dialogue = `
    Tank: Wonderful news!|
    Tank: Where are you from?|
    Silver: Well, I'm from a Christian school...|
    Tank: You would make a wonderful healer then!|
    Silver: That doesn't sound bad, I'm not really much of a fighter.|
    Tank: Hmmm, not much of a fighter... You could be a decent bard as well...||
    `
    buttons = [createButton("I'm not religious, but think I can heal!", "healer()"), createButton("Yes! A bard is perfect, I used to play the piano!", "bard()")]
    splitDialogue = dialogue.split("")

    speech()
}

function healer() {
    clearHTML()

    dialogue = `
    Tank: Alright, let's do this!||
    The wizard gives you a bunch of healing gear.||
    Silver: How do I do this?|
    Wizard: Oh, It's simple really. Just wave the wand and let magic do the rest.|
    Silver: Oh, ok.|
    Tank: Lets go everyone!|
    Silver: Go where?|
    Tank: We're going to fight a Dragon!||
    `
    buttons = [createButton("What have I gotten myself into...", "dragonHeal()")]
    splitDialogue = dialogue.split("")

    speech()
}

function dragonHeal() {
    clearHTML()

    dialogue = `
    You and your party walk for like 500 metres and find the dragon.|
    The Dragon towers above your party. You've never seen an animal this big.||
    Tank: Everyone! Stay behind me!||
    You get behind the tank, just in time for the dragon's attack.||
    The dragon eviscerates the tank with it's vicious claws.|
    Red mist is sprayed everywhere. Their innards must have been spread acroos 100 metres of ground.|
    You hear a voice from behind you.||
    Wizard: Fireba-||
    Before he finishes his incantation, the dragon sprays the wizard with fire, brutally immolating them.|
    You turn around, and see their charred, blackened corpse. The team's knight and archer are nowhere to be seen.||
    When you turn back to face the dragon, you see it's jaws open wide, centimetres from your face and approaching fast.|
    You close your eyes.|
    And your eyelids are the last thing you see.||
    `
    buttons = ["ENDING: Dungeons and Dragons"]
    splitDialogue = dialogue.split("")

    speech()
}

function bard() {
    clearHTML()

    dialogue = `
    Tank: Alright, let's do this!||
    The archer gives you a pouch.|
    You look into the pouch. Inside is a wig, an expensive looking dress, and a portable makeup kit.||
    Silver: What do you expect me to do this?|
    Archer: Oh, It's simple really. It's a bard's job to be... diplomatic. Just put the outfit on and let your instincts do the rest.|
    Silver: Oh, ok.||
    You put on the outfit.||
    Tank: Looking fabulous, Bard! Lets go everyone!|
    Silver: Go where?|
    Tank: We're going to fight a Dragon!||
    `
    buttons = [createButton("What have I gotten myself into...", "dragonBard()")]
    splitDialogue = dialogue.split("")

    speech()
}

function dragonBard() {
    clearHTML()

    dialogue = `
    You and your party walk for like 500 metres and find the dragon.|
    The Dragon towers above your party. You've never seen an animal this big.||
    Tank: Everyone! Stay behind me!||
    You get behind the tank, just in time for the dragon's attack.||
    The dragon eviscerates the tank with it's vicious claws.|
    Red mist is sprayed everywhere. Their innards must have been spread acroos 100 metres of ground.|
    You hear a voice from behind you.||
    Wizard: Fireba-||
    Before he finishes his incantation, the dragon sprays the wizard with fire, brutally immolating them.|
    You turn around, and see their charred, blackened corpse. The team's knight and archer are nowhere to be seen.||
    When you turn back to face the dragon, you see it's face, centimetres from yours and approaching fast.|
    You close your eyes.|
    You feel the temperature of the air around you climb rapidly.|
    You open your eyes, and see the smoke from the dragon's nose surround you. The dragon... stopped?||
    Dragon: What's cooking, beautiful? Not you I hope haha|
    Silver: Umm... hello dragon.|
    Dragon: Hey hot stuff. You free tonight? Today's hunt went well, so me and the lads are prepping a barbeque.||
    You look around and see the Wizard, burnt alive on the floor.|
    You suppose you don't have much of a choice.||
    Silver: Well, ok. What's your name?||
    `
    buttons = ["ENDING: Dungeons and Drag Queens"]
    splitDialogue = dialogue.split("")

    speech()
}

function aloneInField() {
    clearHTML()

    dialogue = `
    Silver: No thanks! You nerds need to mind your business.|
    Tank: Geez, sorry for asking.||
    You continue wondering around the field on your own, until you see different figures approaching in the distance.||
    Silver: Hey! Over here! I need help!||
    The figures stop moving.|
    You hear a loud bang, feel a sharp pain in your thigh, and your vision goes blurry.|
    You stagger around, and fall to the floor.||
    `
    buttons = [createButton("Not again...", "kidnapped()")]
    splitDialogue = dialogue.split("")

    speech()
}

function kidnapped() {
    clearHTML()

    dialogue = `
    Your vision is stained black with darkness. No wait, that's just your eyelids.|
    You open your eyes.|
    Your vision remains stained black with darkness anyway.||
    ???: So, you're finally awake.|
    Silver: Wha...|
    ???: I'll cut straight to the chase. How did you know where to find us?|
    Silver: I... I... I don't know... I just took a crap ton of meth and...|
    ???: DON'T LIE TO ME!!!|
    Silver: EEK!|
    ???: I SAW YOU WITH THOSE FANTASY ROLEPLAYERS! YOU TIPPED THEM OFF, DIDN'T YOU!|
    Silver: I... I swear I don't know what's going on...||
    You hear something from outside. ??? quickly turns around with fear in his eyes.||
    ???: This isn't over!||
    ??? Turns and leaves the room, and you hear the door close.|
    You hear more loud bangs.|
    The door opens once again. This time, it's...||
    Officer Jenny From The Pokémon Anime: Oh my Arceus! Are you ok?||
    `
    buttons = [createButton("Yeah, I'm fine.", "rescuedByJenny()")]
    splitDialogue = dialogue.split("")

    speech()
}

function rescuedByJenny() {
    clearHTML()

    dialogue = `
    You're back at school. It took a while for your leg to heal, but you got there eventually.|
    You're watching a documentary on the Great Northern War. BlazingFish seems really excited, but you jump a little ever time they fire a musket.||
    'Damn, I should've gone with the larpers.'||
    `
    buttons = ["ENDING: Double nap kidnap"]
    splitDialogue = dialogue.split("")

    speech()
}

function physics(previous) {
    clearHTML()

    if (previous == "bathroom") {
        dialogue = `After taking a fat log, you make your way to physics class.|`
    }
    else {
        dialogue = `After helping those bozos, you make your way to physics class.|`
    }

    dialogue += `
    Once you get there, you notice all your classmates staring at you.||
    Mr Schoff: Guess what Silver! Today's your special day!||
    What? Chocolate chip cookie day was months ago!||
    Mr Schoff: You've received a special reward for the WealthyIron Physics Contest!||
    Oh yeah.||
    Mr Schoff: You can choose two rewards: One thousand dollars, or a special surprise.|
    `
    buttons = [createButton("Hell yeah, one thousand dollars!", "chemistry()"), createButton("I'll be taking the 'special surprise' ;)", "tonyStarkAtHouse()")]
    splitDialogue = dialogue.split("")

    speech()
}

function tonyStarkAtHouse() {
    clearHTML()

    dialogue = `
    One week later, you're alone in your room, when...||
    *knock knock knock*||
    You hear voices from the front door, including a 'He's just in his room right now'.|
    Your door opens, and in front of you is a 173cm tall hunk of a man. He's the big man in a suit of armour, the Fe Male himself, he's...||
    Tony Stark: Hey, kid.|
    Silver: Umm...|
    Tony Stark: Nuh uh! Me first.|
    Tony Stark: Quick question, of the rhetorical variety....||
    He brings up Silverspace.io on his phone.||
    Tony Stark: That's you, right?||
    Silver: Umm no. You- whadda you-|
    Tony Stark: Yeah. (he opens orb) Look at you go. Wow, nice detection, 120 fps, live multiplayer? That's not easy. You got mad skills.|
    Silver: That's uhh... that's all AI though right? I mean that's where I found that.|
    Tony Stark: Mhm.||
    As you continue rambling, desperate for Tony Stark to not find out that you legitimately coded orb, he gets onto your computer and pulls up your github history.||
    Tony Stark: What have we here.||
    You stare at each other in silence.||
    Tony Stark: So you're... Silvernio. Silverspace. Silverclaw. Silverman. Crime-fighting Silver.||
    `
    buttons = [createButton("*sigh* just Silver.", "suitUp()")]
    splitDialogue = dialogue.split("")

    speech()
}

function suitUp() {
    clearHTML()

    dialogue = `
    After your meeting with Mr Stark, he gave you a fancy suit. He calls you 'Silverman' now.|
    He says your job is to be a friendly, neighbourhood kind of Silverman. You have no idea what he's talking about.|
    Anyway, instead of doing that, you go to school and show it off to everyone.|
    You can shoot Silver from your arms.|
    You can stick to walls.|
    You have an AI in your headpiece which you call 'Karen'.|
    After a month of this, Mr Stark comes to see you again.||
    Mr Stark: So, you've been treating Silverman like he's some kind of party trick.|
    Silver: What do you mean?|
    Mr Stark: I'm taking away your suit.|
    Silver: What? I- I'm nothing without this suit!|
    Mr Stark: If you're nothing without this suit, then you shouldn't have it.||
    So, your life goes back to how it was before. School, home, wherever else. You can't help but find some sort of peace in it.||
    `
    buttons = ["ENDING: Silverman, Silverman, does whatever a Silver can."]
    splitDialogue = dialogue.split("")

    speech()
}

function chemistry() {
    clearHTML()

    dialogue = `
    You graciously accept your $1000, and then head to chemistry class.|
    Mr White is teaching today.||
    Mr White: Ok class, today we are going to be titrating the solute to find the optimal temperature for an alkali catalyst.||
    While you're titrating the solute, Mr White walks up to you.||
    Mr White: Good work Rhys.|
    Mr White (whispering): Meet me in the bathroom.|| 
    `
    buttons = [createButton("Sure, that doesn't sound creepy", "chemBathroom()"), createButton("No thanks.", "digiTech()")]
    splitDialogue = dialogue.split("")

    speech()
}

function chemBathroom() {
    clearHTML()

    dialogue = `
    Mr White tells you to hide inside one of the two stalls in the boy's bathroom. That's right. There are only two stalls. And that's not even considering the selfish pricks who use them to get changed during recess. Like we have dedicated changerooms guys, no need to use one of the two stalls we get. Wow, the nerve of some people.|
    Anyway, Mr White is in the bathroom, wearing a shoddily homemade mask.|
    You hear someone enter the bathroom.||
    Mr White: Hey kid, you want some meth?|
    Kid: Yes please! Thank you, kind stranger!||
    After Mr White shows the kid how to 'snort' meth, you come out of the stall.||
    Mr White: So, howsaboutit? You and me, cooking meth.||
    `
    buttons = [createButton("I want out Mr White.", "digiTech()"), createButton("How much money is in this business? (rhetorical)", "drugApprentice()")]
    splitDialogue = dialogue.split("")

    speech()
}

function drugApprentice() {
    clearHTML()

    dialogue = `
    One week later, you find yourself in Mr White's RV. He's showing off his lab like a kid would their lego set while you stare absent-mindedly and nod whenever it feels right.||
    Mr White: Alright, lets do this!||
    So, you and Mr White combine the ephedrine and psuedoephedrine, being careful not to cause spillage.|
    You get the methlylamine and heat it with a solvent. 'Gasoline will do just fine', Mr White says.|
    You do all this while wearing the necessary protective gear.|
    `
    buttons = [createButton("Maybe cooking meth isn't so bad.", "drugMaster()")]
    splitDialogue = dialogue.split("")

    speech()
}

function drugMaster() {
    clearHTML()

    dialogue = `
    A year later, you and Mr White own the largest, most profitable drug empire the world has ever seen.|
    You're chilling at home with your fat stacks of cash, when you hear a knock on the door.|
    Well, there is a man here.|
    You received an Egg.||
    Man: Let me tell you how this is gonna go.|
    Silver: Wha...|
    Man: You're gonna stay right here, in this house, until I say so.|
    Silver: Ok?|
    Man: You'll be cooking meth for me.|
    Silver: Why would I do that.|
    Man: Glad you asked. I'll kill your family.|
    Silver: Darn.|
    Silver: Will I get a cut of the profits?|
    Man: No.|
    Silver: ...|
    Man: You'll be working for me, cooking me meth, I'll be getting all the profits, and if you disobey, I'll kill your entire family. Is that clear?|
    Silver: ...|
    Silver: Crystal.||
    `
    buttons = ["ENDING: Crystal Clear"]
    splitDialogue = dialogue.split("")

    speech()
}

function digiTech() {
    clearHTML()

    dialogue = `
    After Mr White's bizzare request, you go to the last lesson of the day: Digital Tech.||
    Mr Smart: Silver.|
    Silver: Yes?|
    Mr Smart: I figured you should know about the emails I've been getting recently.|
    Silver: Emails?|
    Mr Smart: Yeah, people are impressed with your work. One of the emails is from this company 'WealthyIron', and one of them is from the government. Both want to hire you.|
    `
    buttons = [createButton("I'll go with WealthyIron", "tonyStarkAtHouse()"), createButton("I'll go with the government.", "military()"), createButton("I actually don't care.", "yetAnotherSchoolDay()")]
    splitDialogue = dialogue.split("")

    speech()
}

function military() {
    clearHTML()

    dialogue = `
    One week later, you find yourself with a new job. The government reeeaaally wants you to fly these drones.|
    If you press a button while looking at a 'target', you win!|
    Sometimes you miss the target, and end up hitting someone else.|
    Your supervisor's nice. Whenever you miss the target, they smile at you and tell you not to beat yourself up over it.||
    Sometimes you wonder if this really is the job for you.|
    It pays pretty well. Better than what most adults can get.|
    Maybe some of the targets are bad people, so it's not that bad.|
    Besides, if you weren't doing it, someone else would be. And they might be a bad person. Not you though. You're a good person, so it's better if you have this job rather than someone else.|
    Yeah, this is for the best.||
    `
    buttons = ["ENDING: Just following orders"]
    splitDialogue = dialogue.split("")

    speech()
}

function yetAnotherSchoolDay() {
    clearHTML()

    dialogue = `
    Mr Smart: Alright, was just curious.||
    You continue making your 'Live Collab' extension for VSC which offers an alternative to Microsoft's 'Live Share' extension, allows you to open rooms to collaborate, and is available now on the extensions page, as usual.|
    When the bell goes, you continue for a minute or two, then pack up your stuff, as usual.|
    Then you walk to your locker, as usual.|
    Say bye to your friends, as usual.|
    Walk home, as usual.|
    If only school could be more exciting...||
    `
    buttons = ["ENDING: Yet another school day."]
    splitDialogue = dialogue.split("")

    speech()
}

function clearHTML() {
    output.innerHTML = ""
    options.innerHTML = ""
    frameCount = 0
    characterCount = 0
}

function speech() {
    if (characterCount < splitDialogue.length) {
        if (splitDialogue[characterCount] != "|") {
            if (splitDialogue[characterCount - 1] == ":") {
                outputCharacter(25)
            }
            else {
                outputCharacter(1)
            }
        }
        else {
            characterCount++
            output.innerHTML += "<br>"
            setTimeout(speech, 200)
        }
    }
    else {
        for (let i = 0; i < buttons.length; i++) {
            options.innerHTML += buttons[i]
        }
    }
}

function outputCharacter(timing) {
    if (frameCount < textSpeed) {
        frameCount++
    }
    else {
        output.innerHTML += splitDialogue[characterCount]
        characterCount++
        frameCount = 0
    }
    setTimeout(speech, timing)
}

function createButton(text, func) {
    var b = "<button onClick="+func+">"+text+"</button>"
    return b
}

document.body.addEventListener("keydown", (event) => {
    if (event.code == "KeyP" && splitDialogue.length > characterCount) {
        output.innerHTML = ""
        options.innerHTML = ""
        characterCount = splitDialogue.length
        for (let i = 0; i < splitDialogue.length; i++) {
            if (splitDialogue[i] != "|") {
                output.innerHTML += splitDialogue[i]
            }
            else {
                output.innerHTML += "<br>"
            }
        }
    }
});