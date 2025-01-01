import type { Changelog } from "../types";

// Labels for the change, e.g. "bug", "feature", "improvement", "removal", "addition", "change", "update", "fix", "rework", "revert", "refactor", "cleanup", "security", "performance", "design", "content", "translation", "documentation", "test", "dependency", "build", "release", "other"

export const list_changelogs: Changelog = [
    {
        id: "#9",
        date: "2025-01-01",
        title: "PageHeader Mockup Popups",
        timestamp: "2025-01-01T17:58:11Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release", "pageheader", "mockup", "popups", "beta"],
        version: "0.09.0",
        headline: "New PageHeader Mockup Popups",
        description: "This is the first version of the new PageHeader mockup popups. The popups are now visually appealing and easy to navigate. At the moment, the popups are static and do not have any functionality. ",
        alertBox: "Alpha content | Please dont report any bugs or issues you find.",
        changes: [
            "New design for the PageHeader mockup popups",
            "Visually appealing",
            "Easy to use",
            "Static popups",
            "Future features will be added to the popups"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        id: "#9",
        date: "2025-01-01",
        title: "Sidebar Menu Items Improvement",
        timestamp: "2025-01-01T17:58:11Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "bugfix",
        labels: ["bugfix", "sidebar", "menu", "improvement", "beta"],
        version: "0.08.1",
        headline: "Fixed a bug in the Sidebar Menu Items",
        description: "Fixed a bug in the Sidebar Menu Items. The menu items were not displaying correctly and were overlapping with each other. The bug has been fixed and the menu items should now display correctly and not overlap with each other. The design of the menu items has been improved and they are now visually appealing and easy to navigate. The design is responsive and should work on all devices. We will continue to improve the design of the menu items and add new features in the future.",
        alertBox: "Fixed a bug in the Sidebar Menu Items | Beta content | Please report any bugs or issues you find.",
        changes: [
            "Fixed a bug in the Sidebar Menu Items",
            "Menu items were not displaying correctly and were overlapping with each other",
            "Menu items should now display correctly and not overlap with each other",
            "Improved design of the menu items",
            "Visually appealing",
            "Easy to navigate",
            "Responsive design",
            "Future features will be added to the menu items"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        id: "#8",
        date: "2025-01-01",
        title: "PageHeader Design V1",
        timestamp: "2025-01-01T17:50:23Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release", "sidebar", "design", "improvement", "beta", "enhancement"],
        version: "0.08.0",
        headline: "New PageHeader Design V1",
        description: "This is the first version of the new PageHeader design. The PageHeader is now visually appealing and easy to navigate. The design is responsive and should work on all devices. We will add more features to the PageHeader, like popups and notifications. ",
        alertBox: "Beta content | Please report any bugs or issues you find.",
        changes: [
            "New design for the PageHeader",
            "Visually appealing",
            "Easy to use",
            "Responsive design",
            "Future features will be added to the PageHeader"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        id: "#7",
        date: "2025-01-01",
        title: "Sidebar Design V2",
        timestamp: "2025-01-01T17:16:43Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release", "sidebar", "design", "improvement", "beta"],
        version: "0.06.0",
        headline: "New Sidebar Design V2",
        description: "This is the second version of the new sidebar design. The sidebar is now more visually appealing and easier to navigate. We added a function to collapse the sidebar to save space and make it easier to focus on the content. The design is responsive and should work on all devices. We wanted to make the sidebar more visually appealing and easier to navigate. The sidebar is finalized and will not be updated in the future, unless a critical bug is found. We will continue to improve the webpage and add new features in the future.",
        alertBox: "Beta content | Please report any bugs or issues you find.",
        changes: [
            "New design for the sidebar",
            "Visually appealing",
            "Easy to navigate",
            "Responsive design",
            "Added function to collapse the sidebar",
            "Finished design, no future updates planned"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        id: "#6",
        date: "2024-12-31",
        title: "Sidebar Design V1",
        timestamp: "2024-12-29T17:10:12Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release", "sidebar", "design", "improvement", "beta"],
        version: "0.05.0",
        headline: "New Sidebar Design",
        description: "Added a new design to the sidebar. The sidebar is now more visually appealing and easier to navigate. The design is responsive and should work on all devices. The sidebar will be updated with every new release of the webpage. A future design will be added to the sidebar to make it more visually appealing. This current sidebar design is not the final design and will be updated in the future.",
        alertBox: "Beta content | Please report any bugs or issues you find.",
        changes: [
            "New design for the sidebar",
            "Visually appealing",
            "Easy to navigate",
            "Responsive design"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        id: "#5",
        date: "2024-12-29",
        title: "Slug Routing on Changelog Page",
        timestamp: "2024-12-29T01:20:32Z",
        participants: ["/images/participants/ShadowICE.png"],
        type: "release",
        labels: ["release", "slug", "routing", "improvement", "beta", "changelog", "feature"],
        version: "0.04.0",
        headline: "New Feature for Changelog Page",
        description: "Added a new feature to the Changelog Page. Each item in the changelog now has a unique slug that can be used to navigate directly to the item. The slug is generated based on the title of the item and is added to the URL. This makes it easier to share and link to specific items in the changelog. The slug is also used to generate a unique ID for each item in the changelog. The layout of the Changelog Page has been adjusted to accommodate the new feature. The layout is designed to be responsive and should work on all devices. It is also designed to be easy to use and navigate. The changelog page will be updated with every new release of the webpage. A future design will be added to the changelog page to make it more visually appealing. This current changelog is not the final design and will be updated in the future.",
        alertBox: "Beta content | Please report any bugs or issues you find.",
        changes: [
            "New feature for Changelog Page",
            "Each item in the changelog has a unique slug",
            "The slug is generated based on the title of the item",
            "The slug is added to the URL",
            "The slug is used to generate a unique ID for each item in the changelog",
            "Layout adjustments",
            "Responsive design",
            "Easy to use and navigate",
            "Changelog page will be updated with every new release of the webpage"
        ],
        image: "/images/bg/bgProfilePlaceholder3.webp"
    },
    {
        id: "#4",
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
        id: "#3",
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
        id: "#2",
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
        id: "#1",
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
