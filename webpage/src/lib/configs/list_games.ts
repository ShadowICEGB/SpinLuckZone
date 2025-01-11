import type { GameList } from "$lib/types";

export let list_games: GameList = [
    {
        name: "Memory",
        image: "/images/games/memorie.jpeg",
        labels: ["Puzzle", "Memory", "Fun"],
        linkToGame: "/games/memory",
        description: "Train your memory by finding pairs of matching cards in this classic game."
    },
    {
        name: "PickHoldDraw",
        image: "/images/bg/bgProfilePlaceholder3.webp",
        labels: ["Card Game", "Strategy", "Luck"],
        linkToGame: "/games/pickholddraw",
        description: "A strategic card game where you decide to hold, pick, or draw for the win."
    },
    {
        name: "Lucky Spin",
        image: "/images/games/wheel.jpeg",
        labels: ["Wheel", "Luck", "Exciting"],
        linkToGame: "/games/luckyspin",
        description: "Spin the wheel and see if luck is on your side!"
    },
    {
        name: "Coin Toss",
        image: "/images/games/cion.jpeg",
        labels: ["Luck", "Simple", "Fast"],
        linkToGame: "/games/cointoss",
        description: "A fast and simple game where heads or tails decide your fate."
    },
    {
        name: "Slot Machine",
        image: "/images/games/slot.jpeg",
        labels: ["Casino", "Luck", "Exciting"],
        linkToGame: "/games/slotmachine",
        description: "Pull the lever and try your luck on the slot machine!"
    }
];
