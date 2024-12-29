<script lang="ts">
    import { list_changelogs } from '$lib/configs/list_changelogs';
    import { page } from '$app/stores';

    let item: { id: string; date: string; title: string; timestamp: string; participants?: string[] | undefined; type?: string; labels?: string[]; version: string; headline: string; description: string; alertBox?: string; changes?: string[]; image?: string; } | undefined;

    // Function to calculate the days ago
    function calculateDaysAgo(dateString: string): string {
        const itemDate = new Date(dateString); // Date of the item
        const today = new Date(); // Current date
        const timeDifference = today.getTime() - itemDate.getTime(); // Difference in milliseconds
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
        return daysDifference === 0
            ? "Created today"
            : `Created ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    }

    $: {
        const slug = $page.params.slug;
        item = list_changelogs.find(changelog => 
            slug === changelog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        );
    }
</script>

<main>
    <div class="container">
    {#if item}
        <div class="relative">
            <div class="imgBox rounded-xl w-full h-80 overflow-hidden mb-20" style="background-image: url({item.image});background-repeat: no-repeat;background-size: cover"></div>
        </div>
        <h1>
            <span>{item.id}</span>
            <span>{item.title}</span>
        </h1>
        <p>{item.description}</p>
        <p>{calculateDaysAgo(item.date)}</p>
        {#if item.labels}
        <div class="space-x-2 flex items-center justify-start flex-wrap mt-5">
            {#each item.labels as label}
            <span class="label bg-[#388bfd1a] text-[#4493f8] py-1 px-3 rounded-full cursor-default mb-3">{label}</span>
            {/each}
        </div>
        {/if}
        {#if item.alertBox}
        <div class="rounded-lg my-10 bg-gradient-to-r from-[rgba(var(--color-primary-500)/1)] to-[rgba(var(--color-secondary-500)/1)] p-[2px]">
            <p class="w-full h-full rounded-lg py-3 px-5 flex items-center">
                <img src="/images/icons/warning.png" alt="warning" class="w-6 inline-block mr-2" draggable="false"/>
                <span class="">{item.alertBox}</span>
            </p>
        </div>
        {/if}
        <div>
            {#if item.changes}
            <h3 class="text-2xl font-bold mb-3">Changes</h3>
            <ul class="list-none pl-4">
                {#each item.changes as change}
                <li class="flex items-center mb-2 text-gray-300">
                    <i class="fa-solid fa-plus text-[rgba(var(--color-success-500)/1)] mr-2"></i>
                    {change}
                </li>
                {/each}
            </ul>
            {:else}
            <p class="text-gray-300">No changes detected</p>
            {/if}
        </div>
    {:else}
    <p class="text-gray-400">No changelog found for this URL.</p>
    {/if}
    </div>
</main>

<style lang="postcss">
    .imgBox::after {
        content: '';
        position: absolute;
        width: 100%;height: 100%;
        background: inherit;
        background-position: center center;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5)) blur(20px);
        z-index: -1;
        animation: oscillate 1s cubic-bezier(.17, .67, .45, 1.32) infinite alternate;
    }
    @keyframes oscillate {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.004);
        }
    }
</style>
