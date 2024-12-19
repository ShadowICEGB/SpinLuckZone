<script lang="ts">
	import '../app.postcss';
	let { children } = $props();
</script>

<svelte:head>
	<title>SpinLuckZone</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
</svelte:head>

{@render children()}
