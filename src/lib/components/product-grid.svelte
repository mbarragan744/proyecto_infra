<script lang="ts">
	import ProductCard from './product-card.svelte';

	const products = [
		{
			id: 1,
			name: 'Auriculares Premium',
			price: 129.99,
			image: '/placeholder.svg?height=300&width=300',
			category: 'Audio'
		},
		{
			id: 2,
			name: 'Reloj Inteligente',
			price: 199.99,
			image: '/placeholder.svg?height=300&width=300',
			category: 'Accesorios'
		},
		{
			id: 3,
			name: 'Cámara de Acción',
			price: 349.99,
			image: '/placeholder.svg?height=300&width=300',
			category: 'Electrónica'
		},
		{
			id: 4,
			name: 'Mochila Tech',
			price: 89.99,
			image: '/placeholder.svg?height=300&width=300',
			category: 'Accesorios'
		},
		{
			id: 5,
			name: 'Cargador Rápido',
			price: 49.99,
			image: '/placeholder.svg?height=300&width=300',
			category: 'Accesorios'
		},
		{
			id: 6,
			name: 'Funda Protectora',
			price: 39.99,
			image: '/placeholder.svg?height=300&width=300',
			category: 'Protección'
		}
	];
</script>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<h2 class="text-3xl font-bold mb-12 text-foreground">Productos Destacados</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each products as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</section>
