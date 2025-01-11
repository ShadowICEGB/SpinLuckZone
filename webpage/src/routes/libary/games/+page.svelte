<script lang="ts">
    import { list_games } from "$lib/configs/list_games";
    
    // Search and Filter Variables
	let searchQuery: string = "";
	let selectedLabel: string = "";

	// Filter Games Function
	const filterGames = () =>
		list_games.filter((game) => {
			const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesLabel = selectedLabel ? game.labels.includes(selectedLabel) : true;
			return matchesSearch && matchesLabel;
		});
</script>

<main>
    <div class="container">
        <!-- Header -->
        <header class="mb-6">
            <h1 class="text-4xl font-bold text-center text-gray-300">Game Catalog</h1>
        </header>

        <!-- Search and Filters -->
		<div class="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search games..."
				class="w-full sm:w-1/2 px-4 py-2 bg-white dark:bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
			/>
			<select
				bind:value={selectedLabel}
				class="w-full sm:w-1/4 px-4 py-2 bg-white dark:bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
			>
				<option value="">All Labels</option>
				<option value="Puzzle">Puzzle</option>
				<option value="Memory">Memory</option>
				<option value="Fun">Fun</option>
				<option value="Card Game">Card Game</option>
				<option value="Strategy">Strategy</option>
				<option value="Luck">Luck</option>
				<option value="Spin">Spin</option>
				<option value="Casino">Casino</option>
				<option value="Quick Play">Quick Play</option>
				<option value="Slots">Slots</option>
			</select>
		</div>

        <!-- Game Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-custom:grid-cols-4 gap-6">
			{#each filterGames() as game}
				<div class="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-4 hover:shadow-lg transition">
					<img src={game.image} alt={game.name} class="w-full h-[350px] object-cover rounded-md mb-4" draggable="false"/>
					<h2 class="text-xl font-semibold text-gray-800">{game.name}</h2>
					<div class="mt-2 flex gap-2 flex-wrap">
						{#each game.labels as label}
							<span class="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full">{label}</span>
						{/each}
					</div>
					<div class="mt-4 flex justify-between">
						<a href={game.linkToGame} class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
							Details
						</a>
					</div>
				</div>
			{/each}
		</div>

        <!-- Pagination Placeholder -->
        {#if filterGames().length > 6}
		<div class="mt-6 flex justify-center">
			<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Load More</button>
		</div>
        {/if}
    </div>
</main>
