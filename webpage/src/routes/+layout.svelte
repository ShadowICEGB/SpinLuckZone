<script lang="ts">
	// Initialize stores from Skeletonlabs to enable state management
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	// Import global styles and animation libraries
	import '../app.postcss';
	import 'animate.css';

	// Destructure children from props for component reuse
	let { children } = $props();

	// Import App components for layout structure
	import { AppShell, Drawer, Toast } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/App/Header.svelte';
	import Sidebar from '$lib/components/App/Sidebar.svelte';
	import PageFooter from '$lib/components/App/PageFooter.svelte';
	import DrawerMenu from '$lib/components/App/DrawerMenu.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
	// Handle current route
	import { currentRoute } from '$lib/stores/currentRoute';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let activeRoute: string = '/';

	$effect(() => {
		activeRoute = $page.url.pathname;
	});

	onMount(() => {
        currentRoute.set(activeRoute);
    });	
</script>

<svelte:head>
	<title>SpinLuckZone</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
</svelte:head>

<Toast position="t"/>
<Drawer class="z-50"><DrawerMenu/></Drawer>
<AppShell>
	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
	<svelte:fragment slot="pageHeader"><Header /></svelte:fragment>
	{@render children()}
	<svelte:fragment slot="pageFooter"><PageFooter /></svelte:fragment>
</AppShell>
