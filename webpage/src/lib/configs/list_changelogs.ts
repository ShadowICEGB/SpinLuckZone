import type { Changelog } from "../types";
import participants_ShadowICE from '/images/participants/ShadowICE.webp';
import bg from '/images/bg/bgProfilePlaceholder3.webp';

// Labels for the change, e.g. "bug", "feature", "improvement", "removal", "addition", "change", "update", "fix", "rework", "revert", "refactor", "cleanup", "security", "performance", "design", "content", "translation", "documentation", "test", "dependency", "build", "release", "other"

export const list_changelogs: Changelog = [
    {
        date: "2024-12-28",
        title: "Initial Release",
        timestamp: "2024-12-28T20:32:52Z",
        participants: [`${participants_ShadowICE}`],
        type: "release",
        labels: ["release"],
        version: "0.01.0",
        headline: "Initial Release",
        description: "This is the initial release of the SpinLuckZone Webpage.",
        alertBox: "initial release",
        image: `${bg}`
    },
];
