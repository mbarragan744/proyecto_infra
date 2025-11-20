<script lang="ts">
	import { onMount } from 'svelte';
	import { authStore } from '$lib/stores/auth.svelte.js';
	import ProductCatalog from '$lib/components/product-catalog.svelte';

	onMount(() => {
		authStore.initializeFromLocalStorage();
	});
</script>

<main>
	<div class="bg-gradient-to-b from-accent/10 to-transparent py-12 px-4">
		<div class="max-w-7xl mx-auto">
			<h1 class="text-4xl font-bold text-foreground mb-4">Bienvenido a nuestra tienda</h1>
			<p class="text-lg text-muted-foreground">Descubre nuestros productos de alta calidad</p>
		</div>
	</div>

	<ProductCatalog />
</main>
