<script lang="ts">
    import { type DrawerSettings, getDrawerStore } from '@skeletonlabs/skeleton';
    const drawerStore = getDrawerStore();
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentRoute } from '$lib/stores/currentRoute';
    import { applicationVersion } from '$lib/configs/version';
	import { goto } from '$app/navigation';

    // Function to open the sidebar with custom drawer settings
    const openSidebar: () => void = () => {
        // Define the settings for the drawer
        const drawerSettings: DrawerSettings = {
            id: 'sidebar',
            bgDrawer: 'bg-[rgba(var(--color-tertiary-900)/1)] text-white',
            bgBackdrop: 'bg-gradient-to-tr from-[rgba(var(--color-primary-500)/1)] via-purple-500/50 to-[rgba(var(--color-primary-500)/1)]',
            width: 'w-full',
            padding: 'p-4',
            rounded: 'rounded-xl',
        };

        // Open the sidebar using the defined settings
        drawerStore.open(drawerSettings);
    }

    // Manage the light/dark mode
    import { modeCurrent, setModeUserPrefers, setModeCurrent, setInitialClassState } from './lightswitch.js';

    function turnOnLightMode(): void {
		$modeCurrent = true;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

    function turnOnDarkMode(): void {
		$modeCurrent = false;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

    // Update the store and active index on route change
    let activeRoute: string = '/';
    let activeIndex: number = 0; // Index to track active item
    $: $page.url.pathname, activeRoute = $page.url.pathname;

    // Update the store and active index on route change
    onMount(() => {
        currentRoute.set(activeRoute);
        activeIndex = menuList.findIndex(item => item.link === activeRoute);
    });

    // Track the active index for sliding animation
    $: activeIndex = menuList.findIndex(item => item.link === activeRoute);


    const menuList = [
        { title: 'Home', icon: 'fa-solid fa-home', link: '/' },
        { title: 'Games', icon: 'fa-solid fa-chess-knight', link: '/games' },
        { title: 'Leaderboard', icon: 'fa-solid fa-crown', link: '/leaderboard', notification: 5 },
        { title: 'Documentation', icon: 'fa-solid fa-book', link: '/documentation' },
        { title: 'Changelogs', icon: 'fa-solid fa-clock-rotate-left', link: '/libary/changelogs', notification: 12 },
        { title: 'Profile', icon: 'fa-solid fa-user', link: '/profile' },
        { title: 'Settings', icon: 'fa-solid fa-gear', link: '/settings' },
        { title: 'Support', icon: 'fa-solid fa-headset', link: '/support', notification: 2 },
    ];


</script>

<svelte:head>
	<!-- Workaround for a svelte parsing error: https://github.com/sveltejs/eslint-plugin-svelte/issues/492 -->
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<div class="sidebar 2xl:w-64 w-0 h-full relative">
    <!-- Hamburger button to trigger sidebar opening on mobile devices -->
    <button 
        class="hamburger fixed top-6 left-3 w-8 h-8 z-40 flex items-center justify-center 2xl:hidden" 
        on:click={openSidebar} 
        on:keydown={(e) => e.key === 'Enter' && openSidebar()} 
        aria-label="Open sidebar"
    >
        <i class="fa-solid fa-bars p-3 bg-tertiary-500 rounded-lg cursor-pointer"></i>
    </button>

    <!-- Sidebar content section -->
    <div class="content flex flex-col h-full justify-between">
        <div>
            <!-- Header -->
            <div class="flex flex-col justify-center items-center">
                <div class="flex items-center justify-between pt-5">
                    <div class="flex items-center">
                        <img src="/images/logos/SpinLuckZone.png" alt="Logo" class="w-12 h-12" draggable="false" />
                        <h1 class="text-xl font-bold ml-2 bg-gradient-to-r from-secondary-500 to-primary-500 inline-block text-transparent bg-clip-text" style="font-family: 'RussoOne';">SpinLuckZone</h1>
                    </div>
                    <button 
                        class="hamburger 2xl:hidden" 
                        on:click={drawerStore.close} 
                        on:keydown={(e) => e.key === 'Enter' && drawerStore.close()} 
                        aria-label="Close sidebar"
                    >
                        <i class="fa-solid fa-times p-3 bg-tertiary-500 rounded-lg cursor-pointer"></i>
                    </button>
                </div>
                <div class="search mt-5 relative">
                    <input type="text" placeholder="Not working for now.." class="relative left-1/2 -translate-x-1/2 w-[90%] dark:bg-surface-600 bg-tertiary-300 dark:text-surface-300 py-2 pr-2 pl-10 rounded-lg border-none outline-none" />
                    <i class="fa-solid fa-magnifying-glass absolute top-1/2 left-6 -translate-y-1/2 dark:text-surface-300"></i>
                </div>
            </div>
            <nav class="px-6">
                <ul class="mt-8">
                    <span class="text-gray-500" style="line-height: 50px;">Menu</span>
                    {#each menuList as item, index}
                    <li class="relative ml-3 mb-3 flex items-center cursor-pointer transition-colors"
                        class:text-[rgba(var(--color-primary-400))]={index === activeIndex}
                        class:font-bold={index === activeIndex}
                        class:hover={index === activeIndex}
                    >
                        <button on:click={() => goto(item.link)} class="w-full text-left py-1">
                            <i class="{item.icon} w-8"></i>
                            <span>{item.title}</span>
                            {#if item.notification}
                            <span class="notification bg-warning-500 text-black rounded-full px-2 py-1 text-xs absolute right-3">
                                {item.notification}
                            </span>
                            {/if}
                        </button>
                    </li>
                    {#if index === 5}
                    <hr class="relative left-1/2 -translate-x-1/2 w-10/11 rounded-full mt-8 mb-3 h-[2px] bg-gray-900" />
                    <span class="text-gray-500" style="line-height: 50px;">Support</span>
                    {/if}
                    {/each}
                </ul>
            </nav>
        </div>
        <div class="pb-5 pt-10 pl-4 pr-3">
            <div class="flex justify-center items-center space-x-2 bg-[#fff] dark:bg-[#1a1a1a] p-1 rounded-lg">
                <button aria-label="Light Mode" class="w-full bg-tertiary-500 dark:bg-surface-500 py-1 px-3 rounded-lg" on:click={turnOnLightMode}><i class="fa-solid fa-sun"></i></button>
                <button aria-label="Dark Mode" class="w-full bg-tertiary-500 dark:bg-surface-500 py-1 px-3 rounded-lg" on:click={turnOnDarkMode}><i class="fa-solid fa-moon"></i></button>
            </div>
            <div class="tags flex justify-center items-center flex-wrap mt-5">
                <span class="tag cursor-default py-1 px-2 rounded-full text-xs bg-[#388bfd1a] text-[#4493f8]">ALPHA</span>
                <span class="tag cursor-default py-1 px-2 rounded-full ml-2 text-xs bg-[#388bfd1a] text-[#4493f8]">{applicationVersion}</span>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    li::before { @apply absolute top-[-3px] left-[-8px] w-[0%] h-[120%] rounded-lg bg-[#34C724] z-[-1] transition-[width] ease-in-out duration-200;content: ''; }
    li:hover::before { @apply w-[16%]; }
    li:hover:not(.font-bold) i { @apply animate-[jello];animation-duration: 1s; }
    li.hover::before { @apply bg-transparent; }
</style>
