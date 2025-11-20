<script lang="ts">
  import { categoriesStore } from '$lib/stores/categories.svelte.ts';
  import { selectedCategoryStore } from '$lib/stores/products.svelte.ts';
  import { Button } from '$lib/components/ui/button/index.js';

  let categories = $derived.by(() => $categoriesStore);
  let selectedCategory = $derived.by(() => $selectedCategoryStore);
</script>

<div class="flex flex-col gap-3 p-4 bg-card rounded-lg border border-border">
  <h3 class="font-semibold text-foreground">Categorías</h3>
  <button
    onclick={() => selectedCategoryStore.set(null)}
    class={`text-left px-3 py-2 rounded-md transition-colors ${
      selectedCategory === null
        ? 'bg-accent text-accent-foreground'
        : 'hover:bg-secondary text-foreground'
    }`}
  >
    Todas las categorías
  </button>

  {#each categories as category}
    <button
      onclick={() => selectedCategoryStore.set(category.id)}
      class={`text-left px-3 py-2 rounded-md transition-colors ${
        selectedCategory === category.id
          ? 'bg-accent text-accent-foreground'
          : 'hover:bg-secondary text-foreground'
      }`}
    >
      {category.name}
    </button>
  {/each}
</div>
