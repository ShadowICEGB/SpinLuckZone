
/**
 * Set a cookie
 * @param name - The name of the cookie
 * @param value - The value of the cookie
 * @param days - The number of days until the cookie expires
 */
export function setCookie(name: string, value: string, days: number = 7): void {
    if (typeof window !== 'undefined') {
        const expires: string = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }
}

/**
 * Get a cookie
 * @param name - The name of the cookie
 * @returns The value of the cookie
 */
export function getCookie(name: string): string | undefined {
    if (typeof window !== 'undefined') {
        const cookies: Record<string, string> = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, val]: string[] = cookie.split('=');
            acc[key] = val;
            return acc;
        }, {} as Record<string, string>);
        return cookies[name];
    }
}
