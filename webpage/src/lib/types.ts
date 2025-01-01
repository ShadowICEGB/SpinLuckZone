/**
 * @file This file contains all the types that are used in the project.
 */

/**
 * @description 
 * The `Changelog` type defines the structure for representing a collection of changelog entries in the project.
 * Each entry corresponds to a particular update or modification in the project, providing detailed information about
 * the change, its participants, version, and associated metadata.
 * 
 * The changelog is typically used for version control, tracking improvements, bug fixes, new features, and other 
 * significant changes in the project over time. This type allows for organizing the changelog entries with 
 * relevant information such as the date, title, version, and a description of the changes made.
 * 
 * This type also supports optional properties like participants, change labels, and an alert box message to 
 * highlight specific information regarding the changelog entry.
 *
 * @typedef {Object} Changelog
 * @property {string} id - The unique identifier for the changelog entry.
 * @property {string} date - The date when the changelog entry was created or released.
 * @property {string} title - The title or headline of the changelog entry.
 * @property {string} timestamp - The exact timestamp of when the changelog entry was created.
 * @property {string[]} [participants] - A list of participants or contributors involved in the change.
 * @property {string} [type] - The type of change (e.g., "bugfix", "feature", "improvement", etc.).
 * @property {string[]} [labels] - A set of labels categorizing the change (e.g., "bug", "feature", "improvement").
 * @property {string} version - The version number associated with this changelog entry.
 * @property {string} headline - A short headline summarizing the key changes.
 * @property {string} description - A detailed description of the changes made in this entry.
 * @property {string} [alertBox] - An optional message for displaying in an alert box, typically for important information.
 * @property {string[]} changes - A list of specific changes or updates made in this version.
 * @property {string} [image] - An optional image associated with the changelog entry, if relevant (e.g., a screenshot).
 * 
 * @module types
 */
export type Changelog = {
    id: string;
    date: string;
    title: string;
    timestamp: string;
    participants?: string[] | undefined;
    type?: string;
    labels?: string[];
    version: string;
    headline: string;
    description: string;
    alertBox?: string;
    changes?: string[];
    image?: string;
}[];

/**
 * @description
 * The `SidebarNavMenu` type defines the structure for representing a collection of sidebar navigation menu items in the project.
 * Each menu item corresponds to a specific link or route in the application, providing a title, icon, and URL path for navigation.
 * 
 * The sidebar navigation menu is typically used for displaying a list of options or sections that users can access to navigate
 * through the application. This type allows for organizing the menu items with relevant information such as the title of the
 * section, an icon representing the section, and the link to the corresponding page or route.
 * 
 * This type also supports an optional property for displaying notifications or alerts associated with specific menu items,
 * indicating new updates, messages, or activities that require user attention.
 * 
 * @typedef {Object[]} SidebarNavMenu
 * @property {string} title - The title or name of the menu item.
 * @property {string} icon - The icon representing the menu item (e.g., a font awesome icon class).
 * @property {string} link - The URL path or route associated with the menu item.
 * @property {number} [notification] - An optional number indicating the count of notifications or alerts for this menu item.
 * 
 * @module types
 */
export type SidebarNavMenu = {
    title: string;
    icon: string;
    link: string;
    notification?: number;
}[];
