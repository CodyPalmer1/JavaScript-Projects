let player = {
    name: "",
    hp: 10,
    gold: 0,
    inventory: [],
};

let choices = [
    {
        id: 1,
        text: "You see a cave. Do you want to enter?",
        options: [
            {
                text: "Yes",
                outcome: "You enter the cave and find a chest with 10 gold coins.",
                hp: 0,
                gold: 10,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 2,
        text: "You find a village. Do you want to visit it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You visit the village and buy a health potion for 5 gold coins.",
                hp: 5,
                gold: -5,
                inventory: ["Health Potion"],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 3,
        text: "You come across a river. Do you want to swim across?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You swim across the river and find a treasure chest with 50 gold coins.",
                hp: -3,
                gold: 50,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 4,
        text: "You see a bandit camp. Do you want to attack?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You attack the bandit camp and defeat the bandits. You find 20 gold coins in their treasure chest.",
                hp: -5,
                gold: 20,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 5,
        text: "You find a magical portal. Do you want to enter?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You enter the magical portal and find yourself in a strange land. You find a chest with a magic sword.",
                hp: 0,
                gold: 0,
                inventory: ["Magic Sword"],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 6,
        text: "You find a dungeon. Do you want to explore it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You explore the dungeon and find a treasure chest with 30 gold coins.",
                hp: -7,
                gold: 30,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 7,
        text: "You find a hidden path. Do you want to follow it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You follow the hidden path and find a chest with a rare gemstone worth 100 gold coins.",
                hp: 0,
                gold: 100,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 8,
        text: "You come across a bridge. Do you want to cross it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You cross the bridge and find a merchant. You buy a rare healing herb for 15 gold coins.",
                hp: 10,
                gold: -15,
                inventory: ["Healing Herb"],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 9,
        text: "You find an abandoned mine. Do you want to explore it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You explore the mine and find a vein of gold. You mine it and find 50 gold coins.",
                hp: -5,
                gold: 50,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 10,
        text: "You come across a group of travelers. Do you want to talk to them?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You talk to the travelers and they give you some tips on the local area. You gain 2 gold coins.",
                hp: 0,
                gold: 2,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 11,
        text: "You find a haunted mansion. Do you want to enter?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You enter the mansion and find a ghost. You defeat the ghost and find a treasure chest with 50 gold coins.",
                hp: -10,
                gold: 50,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 12,
        text: "You find a mystical forest. Do you want to explore it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You explore the mystical forest and find a fairy. The fairy gives you a magical charm that increases your max HP by 5.",
                hp: 0,
                gold: 0,
                inventory: ["Magical Charm"],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 13,
        text: "You come across a pack of wolves. Do you want to fight them?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You defeat the pack of wolves and find a treasure chest with 30 gold coins.",
                hp: -5,
                gold: 30,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You run away from the pack of wolves.",
                hp: -3,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 14,
        text: "You find a tower. Do you want to climb it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You climb the tower and find a wizard. The wizard gives you a magical staff.",
                hp: 0,
                gold: 0,
                inventory: ["Magical Staff"],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 15,
        text: "You come across a goblin. Do you want to fight it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You defeat the goblin and find a treasure chest with 20 gold coins.",
                hp: -3,
                gold: 20,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You run away from the goblin.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 16,
        text: "You find an abandoned castle. Do you want to explore it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You explore the abandoned castle and find a treasure chest with 40 gold coins.",
                hp: -5,
                gold: 40,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 17,
        text: "You come across a dragon. Do you want to fight it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You defeat the dragon and find a treasure chest with 100 gold coins.",
                hp: -10,
                gold: 100,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You run away from the dragon.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 18,
        text: "You find a mysterious island. Do you want to explore it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You explore the mysterious island and find a hidden treasure chest with 75 gold coins.",
                hp: -5,
                gold: 75,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 19,
        text: "You come across a group of bandits. Do you want to fight them?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You defeat the group of bandits and find a treasure chest with 50 gold coins.",
                hp: -7,
                gold: 50,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You run away from the group of bandits.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 20,
        text: "You find a mysterious statue. Do you want to investigate it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You investigate the statue and find a hidden switch. You press it and find a secret room with a treasure chest with 80 gold coins.",
                hp: -5,
                gold: 80,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 21,
        text: "You come across a giant spider. Do you want to fight it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You defeat the giant spider and find a treasure chest with 40 gold coins.",
                hp: -5,
                gold: 40,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You run away from the giant spider.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 22,
        text: "You find a hidden cave. Do you want to explore it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You explore the cave and find a vein of precious stones. You mine it and find 60 gold coins.",
                hp: -5,
                gold: 60,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 23,
        text: "You come across a pack of wild dogs. Do you want to fight them?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You defeat the pack of wild dogs and find a treasure chest with 30 gold coins.",
                hp: -5,
                gold: 30,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You run away from the pack of wild dogs.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 24,
        text: "You find a dark alley. Do you want to go through it?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You go through the dark alley and find a thief. You catch the thief and find a treasure chest with 60 gold coins.",
                hp: -7,
                gold: 60,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
    {
        id: 25,
        text: "You find a lost child. Do you want to help the child?",
        options: [
            {
                text: "Yes",
                outcome:
                    "You help the lost child find their way back home. The child's parents reward you with 50 gold coins.",
                hp: 0,
                gold: 50,
                inventory: [],
            },
            {
                text: "No",
                outcome: "You continue on your journey.",
                hp: 0,
                gold: 0,
                inventory: [],
            },
        ],
    },
];

function startAdventure() {
    let currentId = 1;
    let hp = 20;
    let gold = 0;
    let inventory = [];

    function updateDisplay() {
        const currentScene = scenes.find((scene) => scene.id === currentId);

        console.log(`HP: ${hp}`);
        console.log(`Gold: ${gold}`);
        console.log(`Inventory: ${inventory.join(", ")}`);
        console.log(currentScene.text);

        currentScene.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option.text}`);
        });
    }

    function makeChoice(choice) {
        const currentScene = scenes.find((scene) => scene.id === currentId);
        const selectedOption = currentScene.options[choice - 1];

        console.log(selectedOption.outcome);

        hp += selectedOption.hp;
        gold += selectedOption.gold;

        if (selectedOption.inventory.length > 0) {
            selectedOption.inventory.forEach((item) => inventory.push(item));
        }

        if (selectedOption.nextScene) {
            currentId = selectedOption.nextScene;
        } else {
            currentId += 1;
        }

        updateDisplay();
    }

    updateDisplay();

    return makeChoice;
}

const play = startAdventure();

play(2); // Example playthrough - choose second option on first scene