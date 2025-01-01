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

<div class="header mt-3 mx-3 rounded-tl-2xl rounded-tr-2xl dark:bg-surface-600 bg-tertiary-200 px-6">
    <div class="container flex justify-between items-center">
        <div>
            <!-- Hamburger button to trigger sidebar opening on mobile devices -->
            <button 
                class="hamburger w-8 h-8 flex items-center justify-center 2xl:hidden" 
                on:click={openSidebar} 
                on:keydown={(e) => e.key === 'Enter' && openSidebar()} 
                aria-label="Open sidebar"
            >
                <i class="fa-solid fa-bars p-3 bg-tertiary-400 dark:bg-[#1a1a1a] rounded-lg cursor-pointer"></i>
            </button>
            <div class="space-x-5">
                <button aria-label="Notifications" class="relative">
                    <span class="badge-icon variant-filled-warning absolute -top-2 -right-2 z-10">2</span>
                    <i class="fa-regular fa-bell dark:bg-[#1d1d1d] bg-tertiary-400 py-3 px-4 rounded-lg"></i>
                </button>
                <button aria-label="Help" class="relative">
                    <i class="fa-regular fa-circle-question dark:bg-[#1d1d1d] bg-tertiary-400 py-3 px-4 rounded-lg"></i>
                </button>
            </div>
        </div>
        <div>
            <img src="/images/logos/SpinLuckZone.png" alt="SpinLuckZone_Logo" class="w-20 h-20" draggable="false" />
        </div>
        <div class="flex items-center">
            <div class="dark:bg-[#1d1d1d] w-36 h-6 rounded-full flex justify-center items-center">
                <p class="text-xs select-none">Lvl (cooming soon)</p>
            </div>
            <button class="bg-tertiary-400 dark:bg-[#1d1d1d] p-1 rounded-2xl flex justify-center items-center ml-10">
                <img src="/images/icons/user.png" alt="User_Logo" class="w-10 h-10 rounded-full" draggable="false">
            </button>
        </div>
    </div>
</div>
