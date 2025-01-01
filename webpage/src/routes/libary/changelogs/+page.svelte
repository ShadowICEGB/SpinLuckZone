<script lang="ts">
	import { goto } from "$app/navigation";
    import { list_changelogs } from "$lib/configs/list_changelogs";

    // Slugify the title
    const slugify = (title: string): string => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-') 
            .replace(/[^a-z0-9-]/g, '');
    };

    // Format the date and time into a combined Date object
    const createDateTime = (dateStr: string, timestampStr: string): Date => {
        const date = new Date(dateStr);  // convert date to Date object
        const [hour, minute] = timestampStr.split(":").map(Number); // split timestamp into hours and minutes
        date.setHours(hour, minute, 0, 0); // set the time on the date object
        return date;
    };

    // Helper function to format the date (e.g., weekday, day, month, year)
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
        return {
            weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
            day: date.getDate(),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            year: date.getFullYear(),
        };
    };

    // Group by month and year, sort by date and time descending
    const groupedChangelogs = list_changelogs
        .sort((a, b) => {
            const dateTimeA = createDateTime(a.date, a.timestamp);
            const dateTimeB = createDateTime(b.date, b.timestamp);
            
            // Compare by date and time
            return dateTimeB.getTime() - dateTimeA.getTime(); // Sort by date and time descending
        })
        .reduce((acc, item) => {
            const { month, year } = formatDate(item.date);
            const key = `${month} ${year}`;
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {} as Record<string, typeof list_changelogs>);
</script>

<main>
    <div class="container">
        <h1 class="text-3xl font-bold mb-6 text-center">Changelogs</h1>
        
        <!-- Changelog List -->
        {#each Object.entries(groupedChangelogs) as [monthYear, items]}
        <section>
            <h2 class="text-gray-300 font-bold text-xl mb-4">
                {monthYear}
            </h2>
            <div class="space-y-4">
                {#each items as item}
                <div 
                    class="item bg-[#111011] rounded-xl relative overflow-hidden"
                    role="button"
                    tabindex="0"
                    on:click={() => goto(`/libary/changelogs/${slugify(item.title)}`)}
                    on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') goto(`/libary/changelogs/${slugify(item.title)}`); }}
                >
                    <div class="details">
                        <div class="date">
                            <span class="font-bold text-lg uppercase">
                                {formatDate(item.date).weekday}
                            </span>
                            <span class="font-bold text-lg uppercase">
                                {formatDate(item.date).day}
                            </span>
                        </div>
                        <div class="time">
                            <div>
                                <i class="fa-solid fa-clock"></i>
                                <span class="ml-2">{item.timestamp}</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                                <span class="ml-2">{item.type}</span>
                            </div>
                        </div>
                        <div class="version">
                            <div class="font-bold uppercase">Version</div>
                            <div class="font-bold">{item.version}</div>
                        </div>
                        <div class="description">
                            <div class="space-y-2">
                                <span class="font-bold">{item.title}</span>
                                <div class="flex space-x-2">
                                {#if item.participants}
                                    {#each item.participants as participant}
                                    <img src="{participant}" alt="userIMG" class="w-6 rounded-full">
                                    {/each}
                                {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button 
                        class="relative z-10 bg-[rgba(var(--color-primary-400)/1)] py-2 px-4 rounded-lg font-bold uppercase shadow-lg"
                        type="button"
                        on:click={(e) => { e.stopPropagation(); goto(`/libary/changelogs/${slugify(item.title)}`); }} >
                        <span>Read more</span>
                        <i class="fa-solid fa-chevron-down ml-2"></i>
                    </button>
                </div>
                {/each}
            </div>
        </section>
        {/each}
    </div>
</main>
