<script lang="ts">
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentRoute } from '$lib/stores/currentRoute';
    import { sidebarCollapse } from '$lib/stores/sidebarCollabse';
    import { applicationVersion } from '$lib/configs/version';
	import { goto } from '$app/navigation';
    import { sidebarMenuList } from '$lib/configs/sidebarNavMenu';

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

    let iconCollabseLightMode: string = $sidebarCollapse ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    function toggleLightMode(): void {
        $modeCurrent = !$modeCurrent;
        setModeUserPrefers($modeCurrent);
        setModeCurrent($modeCurrent);
        if ($modeCurrent) {
            iconCollabseLightMode = 'fa-solid fa-sun';
        } else {
            iconCollabseLightMode = 'fa-solid fa-moon';
        }
    }

    // Function to collapse the sidebar
    const collapseSidebar: () => void = () => {
        if ($sidebarCollapse) {
            $sidebarCollapse = false;
        } else {
            $sidebarCollapse = true;
            if ($modeCurrent) {
                iconCollabseLightMode = 'fa-solid fa-sun';
            } else {
                iconCollabseLightMode = 'fa-solid fa-moon';
            }
        }
    }

    // Update the store and active index on route change
    let activeRoute: string = '/';
    let activeIndex: number = 0; // Index to track active item
    $: $page.url.pathname, activeRoute = $page.url.pathname;

    // Update the store and active index on route change
    onMount(() => {
        currentRoute.set(activeRoute);
        activeIndex = sidebarMenuList.findIndex(item => item.link === activeRoute);
    });

    // Track the active index for sliding animation
    $: activeIndex = sidebarMenuList.findIndex(item => item.link === activeRoute);
</script>

<svelte:head>
	<!-- Workaround for a svelte parsing error: https://github.com/sveltejs/eslint-plugin-svelte/issues/492 -->
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<div class="sidebar 2xl:w-64 w-0 2xl:block hidden h-full relative transition-[width] duration-200" class:sidebar-collapse={$sidebarCollapse}>

    <!-- Collapse button -->
    <button on:click={collapseSidebar} aria-label="Collapse sidebar" class="absolute top-[30px] right-0 z-40" 
        class:top-[25px]={$sidebarCollapse}
        class:right-[50%]={$sidebarCollapse}
        class:translate-x-[65%]={$sidebarCollapse}
    >
        <i class="fa-solid fa-chevron-left bg-warning-500 text-black rounded-full px-2 py-1 text-xs"></i>
    </button>

    <!-- Sidebar content section -->
    <div class="content flex flex-col h-full justify-between">
        <div>
            <!-- Header -->
            <div class="flex flex-col items-center w-full" class:mt-12={$sidebarCollapse}>
                <div class="flex items-center justify-between pt-5 w-full">
                    <div class="flex items-center w-full" class:justify-center={$sidebarCollapse} class:ml-0={!$sidebarCollapse}>
                        <img src="/images/logos/SpinLuckZone.png" alt="Logo" class="relative w-12 h-12 ml-3" draggable="false" class:left-[88px]={$sidebarCollapse} />
                        <h1 class="text-xl font-bold ml-2 bg-gradient-to-r from-secondary-500 to-primary-500 inline-block text-transparent bg-clip-text mr-8" 
                            style="font-family: 'RussoOne';"
                            class:invisible={$sidebarCollapse}>
                            SpinLuckZone
                        </h1>
                    </div>
                </div>
                <!-- Search Bar -->
                <div class="search mt-5 relative">
                    <!-- Search Input Field -->
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        class="relative left-1/2 -translate-x-1/2 w-[90%] dark:bg-surface-600 bg-tertiary-300 dark:text-surface-300 py-2 pr-2 pl-10 rounded-lg border-none outline-none"
                        class:placeholder-transparent={$sidebarCollapse}
                        class:w-[80%]={$sidebarCollapse}
                        class:ml-1={$sidebarCollapse}
                        class:pointer-events-none={$sidebarCollapse}
                        class:pointer-events-auto={!$sidebarCollapse}
                    />
                    
                    <!-- Search Icon -->
                    <i class="fa-solid fa-magnifying-glass cursor-pointer absolute top-1/2 left-6 -translate-y-1/2 dark:text-surface-300"
                        class:translate-x-[-50%]={$sidebarCollapse}
                        class:posicon={$sidebarCollapse}
                        class:ml-1={$sidebarCollapse}
                    ></i>
                </div>
            </div>
            <nav class:px-5={!$sidebarCollapse} class:px-0={$sidebarCollapse} class="">
                <ul class="mt-8">
                    <!-- Menu Title -->
                    <span class="text-gray-500 w-full select-none" style="line-height: 50px;" 
                        class:justify-center={$sidebarCollapse} 
                        class:text-center={$sidebarCollapse} 
                        class:flex={$sidebarCollapse}
                        class:ml-[1px]={$sidebarCollapse}
                        class:text-xs={$sidebarCollapse}>
                        Menu
                    </span>
            
                    {#each sidebarMenuList as item, index}
                    <li class="relative ml-3 mb-3 flex items-center cursor-pointer transition-colors"
                        class:text-[rgba(var(--color-primary-400))]={index === activeIndex}
                        class:font-bold={index === activeIndex}
                        class:hover={index === activeIndex}
                        class:ml-[0px]={$sidebarCollapse}
                        class:pl-[4px]={$sidebarCollapse}
                    >
                        <button on:click={() => goto(item.link)} class="w-full text-left py-1" class:text-center={$sidebarCollapse}>
                            <i class="{item.icon} w-8"></i>
                            {#if !$sidebarCollapse}  <!-- Only show text when not collapsed -->
                                <span>{item.title}</span>
                            {/if}
                            {#if item.notification}
                            <span class="notification bg-warning-500 text-black rounded-full px-2 py-1 text-xs absolute right-3">
                                {item.notification}
                            </span>
                            {/if}
                        </button>
                    </li>
            
                    {#if index === 5}
                    <hr class="relative left-1/2 -translate-x-1/2 w-10/11 rounded-full mt-8 mb-3 h-[2px] bg-gray-900" class:ml-1={$sidebarCollapse} />
                    <!-- Support Title -->
                    <span class="text-gray-500 w-full select-none" style="line-height: 50px;" 
                        class:justify-center={$sidebarCollapse} 
                        class:text-center={$sidebarCollapse} 
                        class:flex={$sidebarCollapse}
                        class:ml-1={$sidebarCollapse}
                        class:text-xs={$sidebarCollapse}>
                        Support
                    </span>
                    {/if}
                    {/each}
                </ul>
            </nav>            
        </div>
        <div class="pb-5 pt-10 pl-4 pr-3">
            <div class="flex justify-center items-center space-x-2 bg-[#fff] dark:bg-[#1a1a1a] p-1 rounded-lg">
                {#if !$sidebarCollapse}
                <button aria-label="Light Mode" class="w-full bg-tertiary-500 dark:bg-surface-500 py-1 px-3 rounded-lg" on:click={turnOnLightMode}><i class="fa-solid fa-sun"></i></button>
                <button aria-label="Dark Mode" class="w-full bg-tertiary-500 dark:bg-surface-500 py-1 px-3 rounded-lg" on:click={turnOnDarkMode}><i class="fa-solid fa-moon"></i></button>
                {:else}
                <button aria-label="Light Mode" class="w-full bg-tertiary-500 dark:bg-surface-500 py-1 rounded-lg" on:click={toggleLightMode}><i class="{iconCollabseLightMode}"></i></button>
                {/if}
            </div>
            <div class="tags flex justify-center items-center flex-wrap mt-5">
                <span class="tag cursor-default py-1 px-2 rounded-full text-xs bg-[#388bfd1a] text-[#4493f8]" class:ml-1={$sidebarCollapse}>ALPHA</span>
                {#if !$sidebarCollapse}
                <span class="tag cursor-default py-1 px-2 rounded-full ml-2 text-xs bg-[#388bfd1a] text-[#4493f8]">{applicationVersion}</span>
                {:else}
                <span class="tag cursor-default py-1 px-2 rounded-full ml-2 text-xs bg-[#388bfd1a] text-[#4493f8]" 
                    class:ml-1={$sidebarCollapse}
                    class:mt-2={$sidebarCollapse}
                >
                    {applicationVersion.replace('V ', '')}
                </span>
                {/if}
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .posicon { @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2; }
    .sidebar-collapse li { @apply flex items-center justify-center; }
    .sidebar-collapse li span { @apply hidden; }
    .sidebar-collapse li i { @apply w-8; }
    .sidebar-collapse li:hover::before { @apply w-[16%]; }
    .sidebar-collapse .notification { @apply hidden; }
    .sidebar-collapse { @apply w-16; }
    li::before { @apply absolute top-[-3px] left-[-8px] w-[0%] h-[120%] rounded-lg bg-[#34C724] z-[-1] transition-[width] ease-in-out duration-200;content: ''; }
    li:hover::before { @apply w-[16%]; }
    li:hover:not(.font-bold) i { @apply animate-[jello];animation-duration: 1s; }
    li.hover::before { @apply bg-transparent; }
</style>
