import { writable, type Writable } from "svelte/store";

// Store to collapse sidebar
export const sidebarCollapse: Writable<boolean> = writable(false);
