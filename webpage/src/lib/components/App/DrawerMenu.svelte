<script lang="ts">
    import { getDrawerStore } from '@skeletonlabs/skeleton';
    const drawerStore = getDrawerStore();

    // Function to close the sidebar when triggered
    const closeSidebar = () => {
        drawerStore.close();
    }
</script>

<div class="drawerMenu relative">
    <!-- Close button to close the sidebar -->
    <button 
        class="outline-none"
        on:click={closeSidebar} 
        on:keydown={(e) => e.key === 'Enter' && closeSidebar()} 
        aria-label="Open sidebar"
    >
        <!-- Icon for the close button (X) -->
        <i class="fa-solid fa-x p-3 bg-[rgba(var(--color-tertiary-500)/1)] rounded-lg cursor-pointer"></i>
    </button>

    <!-- Drawer menu content -->
    <p>drawerMenu</p>
</div>
