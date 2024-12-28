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
