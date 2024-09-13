let choices = [
    {
        png: 'images/exoh.png', // Path to the image file
        title: 'Exs and Ohs',
        choice: 'The number of your exes is the number of your shots.',
        type: 'TRUTH'
    },
    {
        png: 'images/fakehappy.png', // Path to the image file
        title: 'Fake Happy',
        choice: 'Vote who is most likely to be depressed but hides it in a smile. That person chooses who drinks.',
        type: 'VOTE'
    },
    {
        png: 'images/5secs.png', // Path to the image file
        title: '5 Seconds of Summer',
        choice: 'Kiss someone for 5 seconds, the one who took the last shot chooses your partner.',
        type: 'DARE'
    },
    {
        png: 'images/story.png', // Path to the image file
        title: 'The Story Left Untold',
        choice: 'Whisper someone of your choice a secret you have never told anyone.',
        type: 'TRUTH'
    },
    {
        png: 'images/dialtone.png', // Path to the image file
        title: 'Dial Tones',
        choice: 'Call your recent ex. If he/she does not answer, you drink.',
        type: 'DARE'
    },
    {
        png: 'images/tongue.png', // Path to the image file
        title: 'Tongue Tied',
        choice: 'Call, Chat, or say Hi to your crush.',
        type: 'DARE'
    },
    {
        png: 'images/heaven.png', // Path to the image file
        title: 'Heavenly',
        choice: 'Everyone votes on who will be your partner getting locked in a room for 1 minute.',
        type: 'VOTE'
    },
    {
        png: 'images/lips.png', // Path to the image file
        title: 'Lips of an Angel',
        choice: 'Reveal all the details of your first kiss.',
        type: 'TRUTH'
    },
    {
        png: 'images/love.png', // Path to the image file
        title: 'Chemical Reaction',
        choice: 'Vote who is quickest to fall in love. That person drinks.',
        type: 'VOTE'
    },
    {
        png: 'images/animal.png', // Path to the image file (updated to ensure all images are unique)
        title: 'The Animal in Me',
        choice: 'Starting with you, take turns naming an animal—the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/flag.png', // Path to the image file (updated to ensure all images are unique)
        title: 'Freak Flags',
        choice: 'Starting with you, take turns naming a country—the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/song.png', // Path to the image file (updated to ensure all images are unique)
        title: 'Last Song Syndrome',
        choice: 'Choose a singer/band and starting with you, take turns naming a song of that artist—the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/angel.png', // Path to the image file
        title: 'Angel with a Shotgun',
        choice: 'Everyone votes who is most likely to die for their loved ones. That person chooses who drinks.',
        type: 'VOTE'
    },
    {
        png: 'images/curtain.png', // Path to the image file
        title: 'Curtains Close',
        choice: 'Choose someone you want to tell/do something behind closed doors. Only you two will know.',
        type: 'DARE'
    },
    {
        png: 'images/broken.png', // Path to the image file
        title: 'Brokenhearted',
        choice: 'Who hurt you the most? It can be a family, a friend, or a special someone.',
        type: 'TRUTH'
    },
    {
        png: 'images/wire.png', // Path to the image file (updated to ensure all images are unique)
        title: 'Man on a Wire',
        choice: 'Walk on a straight line for 15 seconds. If you stagger or fall down you drink',
        type: 'DARE'
    },
    {
        png: 'images/hero.png', // Path to the image file (updated to ensure all images are unique)
        title: 'Superheroes',
        choice: 'Starting from you, take turns naming a superhero—the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/villain.png', // Path to the image file (updated to ensure all images are unique)
        title: 'Chillin Like a Villain',
        choice: 'Vote who is likely to be a villain in a movie. That villian chooses two persons to drink.',
        type: 'VOTE'
    },
    {
        png: 'images/first.png', // Path to the image file
        title: 'For the First Time',
        choice: 'Who took your virginity?',
        type: 'TRUTH'
    },
    {
        png: 'images/eye.png', // Path to the image file
        title: 'When You Look Me In The Eyes',
        choice: 'Pick someone to challenge you in a staring contest, The one who loses drinks.',
        type: 'DARE'
    },
    {
        png: 'images/prada.png', // Path to the image file
        title: 'The Devil Wears Prada',
        choice: 'Everyone votes for someone who is always good with fashion or wears nice clothes. The devil chooses two persons to drink.',
        type: 'VOTE'
    },
    {
        png: 'images/zombie.png', // Path to the image file
        title: 'Zombie Dance',
        choice: 'Go on Facebook Live and pretend that you are a zombie or sleepwalking',
        type: 'DARE'
    },
    {
        png: 'images/movie.png', // Path to the image file
        title: 'Life is a Movie',
        choice: 'Starting from you, take turns naming a movie-the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/head.png', // Path to the image file
        title: 'Stuck in Your Head',
        choice: 'What is the most embarrassing moment of your life?',
        type: 'TRUTH'
    },
    {
        png: 'images/masterpiece.png', // Path to the image file
        title: 'Masterpiece',
        choice: 'Draw your favorite TV show, ones who cannot guess it in one-minute drinks (If you write letters/words or if no one guesses it correctly, you drink)',
        type: 'GAME'
    },
    {
        png: 'images/masterpiece.png', // Path to the image file
        title: 'Masterpiece II',
        choice: 'Draw your favorite Movie, ones who cannot guess it in one-minute drinks (If you write letters/words or if no one guesses it correctly, you drink)',
        type: 'GAME'
    },
    {
        png: 'images/fantasy.png', // Path to the image file
        title: 'Wildest Dreams',
        choice: 'What is your wildest fantasy?',
        type: 'TRUTH'
    },
    {
        png: 'images/teardrop.png', // Path to the image file
        title: 'Teardrops',
        choice: 'When was the last time you cried?',
        type: 'TRUTH'
    },
    {
        png: 'images/scare.png', // Path to the image file
        title: 'Get Scared',
        choice: 'Whisper someone your biggest fear/phobia.',
        type: 'TRUTH'
    },
    {
        png: 'images/free.png', // Path to the image file
        title: 'The truth will set you free, Literally.',
        choice: 'Do you believe it is ok to have secrets in a relationship? Explain why.',
        type: 'TRUTH'
    },
    {
        png: 'images/history.png', // Path to the image file
        title: 'The Entire History of You',
        choice: 'Show your search history of all time or drink.',
        type: 'DARE'
    },
    {
        png: 'images/valentine.png', // Path to the image file
        title: 'Secret Valentine',
        choice: 'Vote who is most likely to lose their virginity at the youngest age. That person drinks.',
        type: 'VOTE'
    },
    {
        png: 'images/sapnu.png', // Path to the image file
        title: 'Sapnu Puas',
        choice: 'Everyone votes who is most likely to send a nude picture to someone they met online. That person drinks and chooses someone to drink as well.',
        type: 'VOTE'
    },
    {
        png: 'images/shameless.png', // Path to the image file
        title: 'Shameless',
        choice: 'Vote on whose sex life would get the most views if it were posted on amateur porn sites? That person chooses who drinks.',
        type: 'VOTE'
    },
    {
        png: 'images/panic.png', // Path to the image file
        title: 'The Peace and the Panic',
        choice: 'Change your relationship status on Facebook from single to in a relationship/vice versa until the game ends or drink.',
        type: 'DARE'
    },
    {
        png: 'images/forever.png', // Path to the image file
        title: 'Give Me Your Forever',
        choice: 'Everyone votes on who will be the first to get married. That person drinks twice.',
        type: 'VOTE'
    },
    {
        png: 'images/mothertongue.png', // Path to the image file
        title: 'Mother Tongue in Reverse',
        choice: 'Speak English until it is your turn again.',
        type: 'DARE'
    },
    {
        png: 'images/hands.png', // Path to the image file
        title: 'Hands Like Houses',
        choice: 'Act a movie scene for a minute, everyone who cannot guess it drinks (If you speak or if no one guesses it correctly, you drink)',
        type: 'GAME'
    },
    {
        png: 'images/kama.png', // Path to the image file
        title: 'Kama Sutra',
        choice: 'Starting with you, take turns naming a sex position-the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/brand.png', // Path to the image file
        title: 'Brand of Sacrifice',
        choice: 'Starting with you, take turns naming a brand of an item of your choice-the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/gift.png', // Path to the image file (updated to ensure all images are unique)
        title: 'A Gift from the Gods',
        choice: 'Starting with you, take turns naming an international singer/band—the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/gift.png', // Path to the image file (updated to ensure all images are unique)
        title: 'A Gift from the Gods II',
        choice: 'Starting with you, take turns naming a local singer/band—the one who hesitates drinks.',
        type: 'GAME'
    },
    {
        png: 'images/mirror.png', // Path to the image file (updated to ensure all images are unique)
        title: 'Mirrors',
        choice: 'Vote for a person and on who is his/her lookalike celebrity. If everyone agrees, the chosen person drinks. Or else, you drink.',
        type: 'VOTE'
    },
    {
        png: 'images/doppel.png', // Path to the image file (updated to ensure all images are unique)
        title: 'Doppelganger',
        choice: 'Vote for a person and on who is his/her lookalike friend or someone you know. If everyone agrees, the chosen person drinks. Or else, you drink.',
        type: 'VOTE'
    }
];

let usedChoices = [];
const choiceEl = document.getElementById("choice-el");
const startButton = document.querySelector('button[onclick="startGame()"]');
const newChoiceButton = document.querySelector('button[onclick="newChoice()"]');
const newGameButton = document.getElementById('new-game-btn'); // New button element

function getRandomChoice() {
    const availableChoices = choices.filter(choice => !usedChoices.includes(choice));

    if (availableChoices.length === 0) {
        return null; // No more choices left
    }

    const randomIndex = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[randomIndex];
}

function startGame() {
    usedChoices = []; // Reset the used choices list
    const firstChoice = getRandomChoice();
    if (firstChoice) {
        usedChoices.push(firstChoice);
        renderGame(firstChoice);
        // Hide the Start Game button
        startButton.style.display = 'none';
        // Show the New Choice button
        newChoiceButton.classList.remove('hidden');
        // Hide the New Game button
        newGameButton.classList.add('hidden');
    } else {
        renderNoMoreChoices();
    }
}

function renderGame(choiceDetails) {
    choiceEl.innerHTML = `
        <img src="${choiceDetails.png}" alt="${choiceDetails.title}">
        <div class="title"><strong></strong> ${choiceDetails.title}</div>
        <div class="choice"><strong></strong> ${choiceDetails.choice}</div>
        <div class="type ${choiceDetails.type}"><strong></strong> ${choiceDetails.type}</div>`;
}

function renderNoMoreChoices() {
    choiceEl.textContent = 'All choices have been used.';
    // Hide the New Choice button
    newChoiceButton.classList.add('hidden');
    // Show the New Game button
    newGameButton.classList.remove('hidden');
}

function newChoice() {
    const newChoice = getRandomChoice();
    if (newChoice) {
        usedChoices.push(newChoice);
        renderGame(newChoice);
    } else {
        renderNoMoreChoices();
    }
}
