import type { Changelog } from "../types";

// Labels for the change, e.g. "bug", "feature", "improvement", "removal", "addition", "change", "update", "fix", "rework", "revert", "refactor", "cleanup", "security", "performance", "design", "content", "translation", "documentation", "test", "dependency", "build", "release", "other"

/**
 * @description We are using the Semantic Versioning 2.0.0 scheme for versioning the project.
 * @details 
 * MAJOR version when you make incompatible API changes
 * MINOR version when you add functionality in a backward compatible manner
 * PATCH version when you make backward compatible bug fixes
 * 
 * @type {string}
 */
export const applicationVersion: string = "V 0.03.1";

export const list_changelogs: Changelog = [
    {
        date: "2024-12-29",
        title: "Error on Changelog Page",
        timestamp: "2024-12-29T00:13:11Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "bugfix",
        labels: ["bugfix", "changelog", "beta", "improvement"],
        version: "0.03.1",
        headline: "Fixed a bug on the Changelog Page",
        description: "Fixed a bug on the Changelog Page. While loading the page, an error occurred that prevented the page from loading correctly. The error has been fixed and the Changelog Page should now load correctly.",
        alertBox: "Beta content | Please report any bugs or issues you find.",
        changes: [
            "Fixed a bug on the Changelog Page",
            "Changelog Page should now load correctly",
            "Fixed error in list_changelog where the date was incorrect"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        date: "2024-12-28",
        title: "Changelog Page",
        timestamp: "2024-12-28T23:48:41Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release", "layout", "improvement", "beta", "changelog", "barebone"],
        version: "0.03.0",
        headline: "New Changelog Page",
        description: "The new changelog page is now live. It is a barebone version of the webpage and is still in beta. The layout will be adjusted and improved over time. The layout is designed to be responsive and should work on all devices. It is also designed to be easy to use and navigate. The changelog page will be updated with every new release of the webpage. A future design will be added to the changelog page to make it more visually appealing. We will also add a feature where each item in the changelog will be clickable to show more details.",
        alertBox: "Beta content | Please report any bugs or issues you find.",
        changes: [
            "New layout",
            "Responsive design",
            "Changelog page",
            "Each release will be added to the changelog page",
            "Beta version",
            "Future design will be added to the changelog page",
            "Each item in the changelog will be clickable to show more details"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        date: "2024-12-28",
        title: "WebLayout",
        timestamp: "2024-12-28T22:16:23Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release", "layout", "improvement", "barebone", "beta"],
        version: "0.02.0",
        headline: "New Webpage Layout",
        description: "The new layout of the webpage is now live. It is a barebone version of the webpage and is still in beta. The layout will be adjusted and improved over time. The layout is designed to be responsive and should work on all devices. It is also designed to be easy to use and navigate.",
        alertBox: "Beta content | Please report any bugs or issues you find.",
        changes: [
            "New layout",
            "Responsive design",
            "Easy to use and navigate",
            "Beta version"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        date: "2024-12-28",
        title: "Initial Release",
        timestamp: "2024-12-28T20:32:52Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release"],
        version: "0.01.0",
        headline: "Initial Release",
        description: "This is the initial release of the SpinLuckZone Webpage.",
        alertBox: "initial release",
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
];
