<script lang="ts">
	import { type DrawerSettings, getDrawerStore } from '@skeletonlabs/skeleton';
    const drawerStore = getDrawerStore();

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
</script>

<div class="header mt-3 mx-3 rounded-tl-2xl rounded-tr-2xl dark:bg-surface-600 bg-tertiary-200 py-5 px-3">
    <div class="container">
        <!-- Hamburger button to trigger sidebar opening on mobile devices -->
        <button 
            class="hamburger w-8 h-8 flex items-center justify-center 2xl:hidden" 
            on:click={openSidebar} 
            on:keydown={(e) => e.key === 'Enter' && openSidebar()} 
            aria-label="Open sidebar"
        >
            <i class="fa-solid fa-bars p-3 bg-tertiary-400 dark:bg-[#1a1a1a] rounded-lg cursor-pointer"></i>
        </button>
        <p>pageHeader</p>
    </div>
</div>
