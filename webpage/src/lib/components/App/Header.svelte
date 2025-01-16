<script lang="ts">
	import { type DrawerSettings, getDrawerStore } from '@skeletonlabs/skeleton';
    const drawerStore = getDrawerStore();

    // Import the popup component and the PopupSettings type from the Skeleton library
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';

    // Popup for user profile
    const popupUserProfile: PopupSettings = {
        // Represents the type of event that opens/closed the popup
        event: 'click',
        // Matches the data-popup value on your popup element
        target: 'popupUserProfile',
        // Defines which side of your trigger the popup will appear
        placement: 'bottom',
        // Closes the popup when clicking on this id
        closeQuery: '#will-close',
    };

    // Popup for notifications
    const popupNotification: PopupSettings = {
        // Represents the type of event that opens/closed the popup
        event: 'click',
        // Matches the data-popup value on your popup element
        target: 'popupNotification',
        // Defines which side of your trigger the popup will appear
        placement: 'bottom',
        // Closes the popup when clicking on this id
        closeQuery: '#will-close',
    };

    // Popup for help area
    const popupHelp: PopupSettings = {
        // Represents the type of event that opens/closed the popup
        event: 'click',
        // Matches the data-popup value on your popup element
        target: 'popupHelp',
        // Defines which side of your trigger the popup will appear
        placement: 'bottom',
    };
					

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

<div class="header mx-3 mt-3 rounded-xl dark:bg-surface-500 bg-tertiary-200">
    <div class="container flex justify-between items-center">
        <div class="flex items-center">
            <!-- Hamburger button to trigger sidebar opening on mobile devices -->
            <button 
                class="hamburger w-8 h-8 flex items-center justify-center xl-custom:hidden" 
                on:click={openSidebar} 
                on:keydown={(e) => e.key === 'Enter' && openSidebar()} 
                aria-label="Open sidebar"
            >
                <i class="fa-solid fa-bars p-3 bg-tertiary-400 dark:bg-[#1a1a1a] rounded-lg cursor-pointer"></i>
            </button>
            <div class="space-x-5 xl-custom:ml-0 ml-12">
                <button aria-label="Notifications" class="relative" use:popup={popupNotification}>
                    <span class="badge-icon variant-filled-warning absolute -top-2 -right-2 z-10">2</span>
                    <i class="fa-regular fa-bell dark:bg-[#1d1d1d] bg-tertiary-400 py-3 px-4 rounded-lg"></i>
                </button>
                <button aria-label="Help" class="relative" use:popup={popupHelp}>
                    <i class="fa-regular fa-circle-question dark:bg-[#1d1d1d] bg-tertiary-400 py-3 px-4 rounded-lg"></i>
                </button>

                <!-- Popup for notification -->
                <div class="bg-tertiary-400 dark:bg-[#1d1d1d] w-64 rounded-3xl z-50 flex flex-col items-center text-white shadow-lg" data-popup="popupNotification">
                    <div class="text-center p-4">
                        <h1 class="uppercase">Notification</h1>
                        <p>TODO</p>
                    </div>
                </div>

                <!-- Popup for help -->
                <div class="bg-tertiary-400 dark:bg-[#1d1d1d] w-64 rounded-3xl z-50 flex flex-col items-center text-white shadow-lg" data-popup="popupHelp">
                    <div class="text-center p-4">
                        <h1 class="uppercase">Help</h1>
                        <p>TODO</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="/images/logos/SpinLuckZone.png" alt="SpinLuckZone_Logo" class="w-20 h-20 xl-custom:ml-28 ml-3" draggable="false" />
        </div>
        <div class="flex items-center">
            <div class="dark:bg-[#1d1d1d] w-36 h-6 rounded-full flex justify-center items-center">
                <p class="text-xs select-none">Lvl (cooming soon)</p>
            </div>
            <button class="bg-tertiary-400 dark:bg-[#1d1d1d] p-1 rounded-2xl flex justify-center items-center ml-10" use:popup={popupUserProfile}>
                <img src="/images/icons/user.png" alt="User_Logo" class="w-10 h-10 rounded-full" draggable="false">
            </button>

            <!-- Popup for user profile -->
            <div class="bg-tertiary-400 dark:bg-[#1d1d1d] w-64 rounded-3xl z-50 flex flex-col items-center text-white shadow-lg" data-popup="popupUserProfile">
                <!-- User Information Section -->
                <div class="user flex flex-col items-center justify-center px-10 pt-5" id="wont-close">
                    <img src="/images/icons/user.png" alt="User_Profile_Picture" class="w-20 h-20 rounded-full mb-1" draggable="false">
                    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                    <div class="user-info text-center">
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <p class="text-lg font-bold">username</p>
                        <p class="text-xs text-gray-400 py-2 italic">useremail</p>
                        <p class="text-base text-error-500">TODO: user role</p>
                    </div>
                </div>
            
                <!-- Settings Section -->
                <div class="settings bg-tertiary-600 dark:bg-[#141414] w-full rounded-3xl mt-6 p-6">
                    <h1 class="text-lg font-bold mb-4 flex items-center justify-between">Settings <span class="tag cursor-default py-1 px-2 rounded-full text-xs bg-[#388bfd1a] text-[#4493f8]">ALPHA</span></h1>
                    <span class="text-gray-400">Not working for now</span>
                    <div class="setting-item flex justify-between items-center mb-4 mt-4">
                        <p class="text-sm">Dark Mode</p>
                        <input type="checkbox" class="toggle-checkbox" checked>
                    </div>
                    <div class="setting-item flex justify-between items-center mb-4">
                        <p class="text-sm">Notifications</p>
                        <p class="text-xs text-gray-400">On</p>
                    </div>
                    <div class="setting-item flex justify-between items-center mb-4">
                        <p class="text-sm">Privacy</p>
                        <span class="text-xs text-gray-400">&gt;</span>
                    </div>
                    <div class="setting-item flex justify-between items-center mb-4">
                        <p class="text-sm">TODO ADD MORE</p>
                        <span class="text-xs text-gray-400">&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
					