import { writable, type Writable } from "svelte/store";

// Store to track the current route
export const currentRoute: Writable<string> = writable('/');
