import { writable, type Writable } from "svelte/store";
import { getCookie, setCookie } from "$lib/functions/cookieHelpers";

// Value of sidebar collapse
const initialCollapse = getCookie("sidebarCollapse") === "true";

// Store to collapse sidebar
export const sidebarCollapse: Writable<boolean> = writable(initialCollapse);

// Subscribe to sidebar collapse and set cookie
if (typeof window !== 'undefined') {
    sidebarCollapse.subscribe((value) => {
        setCookie('sidebarCollapse', value.toString());
    });
}
