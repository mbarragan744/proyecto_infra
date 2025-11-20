<script lang="ts">
	import { cartItems } from '$lib/store.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ordersStore } from '$lib/stores/orders.svelte.js';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth.svelte.js';
	import { Trash2 } from 'lucide-svelte';

	let currentUser = $derived.by(() => {
		let user;
		authStore.subscribe(u => user = u)();
		return user;
	});

	let items = $derived(cartItems.items);
	let total = $derived(cartItems.getTotal());

	function handleCheckout() {
		if (!currentUser) {
			alert('Por favor inicia sesión para continuar');
			return;
		}

		if (items.length === 0) {
			alert('El carrito está vacío');
			return;
		}

		ordersStore.createOrder(currentUser.id, items, total);
		cartItems.clearCart();
		goto('/orders');
	}

	function removeItem(id: string) {
		cartItems.removeItem(id);
	}

	function updateQuantity(id: string, quantity: number) {
		cartItems.updateQuantity(id, quantity);
	}
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-3xl font-bold text-foreground mb-8">Carrito de Compras</h1>

	{#if items.length === 0}
		<div class="text-center py-12 bg-secondary/50 rounded-lg">
			<p class="text-lg text-muted-foreground mb-6">Tu carrito está vacío</p>
			<Button onclick={() => goto('/')} class="bg-accent text-accent-foreground">
				Continuar comprando
			</Button>
		</div>
	{:else}
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div class="lg:col-span-2">
				<div class="space-y-4">
					{#each items as item (item.id)}
						<div class="flex gap-4 bg-card p-4 rounded-lg border border-border">
							<img
								src={item.image || "/placeholder.svg"}
								alt={item.name}
								class="w-20 h-20 object-cover rounded-md bg-secondary"
							/>
							<div class="flex-1">
								<h3 class="font-semibold text-foreground">{item.name}</h3>
								<p class="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
							</div>
							<div class="flex items-center gap-2">
								<button
									onclick={() => updateQuantity(item.id, item.quantity - 1)}
									class="px-2 py-1 border border-border rounded hover:bg-secondary"
								>
									−
								</button>
								<span class="w-8 text-center font-semibold">{item.quantity}</span>
								<button
									onclick={() => updateQuantity(item.id, item.quantity + 1)}
									class="px-2 py-1 border border-border rounded hover:bg-secondary"
								>
									+
								</button>
							</div>
							<div class="text-right">
								<p class="font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
								<button
									onclick={() => removeItem(item.id)}
									class="text-destructive hover:opacity-80 transition-opacity mt-2"
									title="Eliminar producto"
								>
									<Trash2 size={18} />
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Resumen -->
			<div class="bg-card p-6 rounded-lg border border-border h-fit">
				<h2 class="text-xl font-bold text-foreground mb-4">Resumen</h2>
				<div class="space-y-2 mb-6 text-sm">
					<div class="flex justify-between text-muted-foreground">
						<span>Subtotal ({items.length} items)</span>
						<span>${total.toFixed(2)}</span>
					</div>
					<div class="flex justify-between text-muted-foreground">
						<span>Envío</span>
						<span>Gratis</span>
					</div>
					<div class="border-t border-border pt-2 mt-2 flex justify-between font-bold text-foreground">
						<span>Total</span>
						<span>${total.toFixed(2)}</span>
					</div>
				</div>
				<Button onclick={handleCheckout} class="w-full bg-accent text-accent-foreground hover:opacity-90">
					Ir al Checkout
				</Button>
				<Button
					onclick={() => goto('/')}
					variant="outline"
					class="w-full mt-2 border-border"
				>
					Seguir comprando
				</Button>
			</div>
		</div>
	{/if}
</div>
