import { SvelteKitAuth } from "@auth/sveltekit";
import { env } from "$env/dynamic/private";
// Import providers
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import Discord from "@auth/core/providers/discord";

export const { handle } = SvelteKitAuth({
    providers: [
        GitHub({ clientId: env.AUTH_GITHUB_ID, clientSecret: env.AUTH_GITHUB_SECRET }),
        Google({ clientId: env.AUTH_GOOGLE_ID, clientSecret: env.AUTH_GOOGLE_SECRET }),
        Discord({ clientId: env.AUTH_DISCORD_ID, clientSecret: env.AUTH_DISCORD_SECRET })
        // TODO: Add more providers here
    ],
    callbacks: {
        async jwt({ token, account }: { token: any; account?: any }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any; }) {
            session.access_token = token.accessToken;
            return session;
        }
    },
    trustHost: true
});
