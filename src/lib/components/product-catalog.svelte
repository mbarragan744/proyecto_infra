<script lang="ts">
  import { filteredProductsStore, type Product } from '$lib/stores/products.svelte.ts';
  import ProductCard from './product-card.svelte';
  import CategoryFilter from './category-filter.svelte';

  let products = $derived.by(() => $filteredProductsStore);
</script>

<div class="flex gap-6 p-6">
  <!-- Sidebar con filtros -->
  <aside class="w-64 flex-shrink-0">
    <CategoryFilter />
  </aside>

  <!-- Grid de productos -->
  <main class="flex-1">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-foreground">
        {products.length} productos encontrados
      </h2>
    </div>

    {#if products.length === 0}
      <div class="flex items-center justify-center h-96 bg-secondary/50 rounded-lg">
        <p class="text-muted-foreground">No hay productos en esta categoría</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each products as product (product.id)}
          <ProductCard {product} />
        {/each}
      </div>
    {/if}
  </main>
</div>
