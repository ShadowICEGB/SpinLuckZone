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
    <div>
        <h1 class="text-4xl font-extrabold text-center mb-10">Changelogs</h1>
        
        <!-- Changelog List -->
        {#each Object.entries(groupedChangelogs) as [monthYear, items]}
        <section class="mb-8">
            <h2 class="text-xl font-bold text-gray-300 mb-4">
                {monthYear}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each items as item}
                <div 
                    class="bg-[#111011] rounded-lg p-6 shadow-md hover:shadow-lg transition relative"
                    role="button"
                    tabindex="0"
                    on:click={() => goto(`/libary/changelogs/${slugify(item.title)}`)}
                    on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') goto(`/libary/changelogs/${slugify(item.title)}`); }}
                >
                    <!-- Date and Version -->
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-left">
                            <span class="block text-lg font-bold">{formatDate(item.date).weekday}</span>
                            <span class="block text-2xl font-extrabold">{formatDate(item.date).day}</span>
                        </div>
                        <div class="text-right">
                            <span class="block text-sm text-gray-400">Version</span>
                            <span class="block text-lg font-bold">{item.version}</span>
                        </div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-bold text-white mb-2">{item.title}</h3>

                    <!-- Time and Type -->
                    <div class="flex items-center text-gray-400 text-sm space-x-4 mb-4">
                        <div class="flex items-center">
                            <i class="fa-solid fa-clock mr-1"></i> {item.timestamp}
                        </div>
                        <div class="flex items-center">
                            <i class="fa-solid fa-wand-magic-sparkles mr-1"></i> {item.type}
                        </div>
                    </div>

                    <!-- Participants -->
                    {#if item.participants}
                    <div class="flex -space-x-2 mb-4">
                        {#each item.participants as participant}
                        <img 
                            src="{participant}" 
                            alt="Participant" 
                            class="w-8 h-8 rounded-full border-2 border-gray-800"
                        >
                        {/each}
                    </div>
                    {/if}

                    <!-- Read More Button -->
                    <button 
                        class="w-full bg-pink-500 text-white py-2 px-4 rounded-lg font-bold uppercase hover:bg-pink-600 transition"
                        type="button"
                        on:click={(e) => { e.stopPropagation(); goto(`/libary/changelogs/${slugify(item.title)}`); }}>
                        Read More
                    </button>
                </div>
                {/each}
            </div>
        </section>
        {/each}
    </div>
</main>
