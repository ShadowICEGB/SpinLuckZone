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

<div class="sidebar 2xl:w-64 w-0 h-full relative">
    <!-- Hamburger button to trigger sidebar opening on mobile devices -->
    <button 
        class="hamburger fixed top-6 left-3 w-8 h-8 z-40 flex items-center justify-center 2xl:hidden" 
        on:click={openSidebar} 
        on:keydown={(e) => e.key === 'Enter' && openSidebar()} 
        aria-label="Open sidebar"
    >
        <i class="fa-solid fa-bars p-3 bg-[rgba(var(--color-tertiary-500)/1)] rounded-lg cursor-pointer"></i>
    </button>

    <!-- Sidebar content section -->
    <div class="content">
        <p>Sidebar</p>
    </div>
</div>
