<script lang="ts">
	import { ShoppingCart } from 'lucide-svelte';
	import { cartItems } from '$lib/store.svelte';
	import type { Product } from '$lib/stores/products.svelte.js';

	let { product } = $props<{ product: Product }>();

	function addToCart() {
		cartItems.addItem(product);
	}
</script>

<div class="bg-card text-card-foreground rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
	<div class="h-48 bg-secondary overflow-hidden">
		<img 
			src={product.image || "/placeholder.svg"} 
			alt={product.name}
			class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
		/>
	</div>
	<div class="p-4">
		{#if product.rating}
			<div class="flex items-center gap-1 mb-2">
				<span class="text-xs font-semibold text-accent">★</span>
				<span class="text-xs text-muted-foreground">{product.rating}</span>
			</div>
		{/if}
		<h3 class="text-lg font-semibold mb-2 text-card-foreground">{product.name}</h3>
		<p class="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<span class="text-2xl font-bold text-accent">${product.price.toFixed(2)}</span>
				{#if product.originalPrice}
					<span class="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
				{/if}
			</div>
			<button 
				onclick={addToCart}
				disabled={product.stock === 0}
				class="bg-accent text-accent-foreground p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
				title="Agregar al carrito"
			>
				<ShoppingCart size={20} />
			</button>
		</div>
	</div>
</div>
