<script lang="ts">
	import { authStore } from '$lib/stores/auth.svelte.js';
	import { ordersStore } from '$lib/stores/orders.svelte.js';
	import { Button } from '$lib/components/ui/button'; // Corregir ruta de importación del Button
	import { goto } from '$app/navigation';
	import { Package } from 'lucide-svelte';

	let currentUser = $derived.by(() => {
		let user;
		authStore.subscribe(u => user = u)();
		return user;
	});

	let orders = $derived.by(() => {
		if (!currentUser) return [];
		let all: any[] = [];
		ordersStore.subscribe(o => all = o)();
		return all.filter(order => order.userId === currentUser.id);
	});

	const statusLabels = {
		pending: 'Pendiente',
		confirmed: 'Confirmada',
		shipped: 'Enviada',
		delivered: 'Entregada'
	};

	const statusColors = {
		pending: 'bg-yellow-100 text-yellow-800',
		confirmed: 'bg-blue-100 text-blue-800',
		shipped: 'bg-purple-100 text-purple-800',
		delivered: 'bg-green-100 text-green-800'
	};
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-3xl font-bold text-foreground mb-8">Mis Órdenes</h1>

	{#if !currentUser}
		<div class="text-center py-12 bg-secondary/50 rounded-lg">
			<p class="text-lg text-muted-foreground mb-6">Por favor inicia sesión para ver tus órdenes</p>
			<Button onclick={() => goto('/')} class="bg-accent text-accent-foreground">
				Volver al inicio
			</Button>
		</div>
	{:else if orders.length === 0}
		<div class="text-center py-12 bg-secondary/50 rounded-lg">
			<Package class="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
			<p class="text-lg text-muted-foreground mb-6">No tienes órdenes todavía</p>
			<Button onclick={() => goto('/')} class="bg-accent text-accent-foreground">
				Empezar a comprar
			</Button>
		</div>
	{:else}
		<div class="space-y-4">
			{#each orders as order (order.id)}
				<div class="bg-card p-6 rounded-lg border border-border">
					<div class="flex items-start justify-between mb-4">
						<div>
							<h3 class="text-lg font-semibold text-foreground">{order.id}</h3>
							<p class="text-sm text-muted-foreground">
								{new Date(order.createdAt).toLocaleDateString('es-ES', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</p>
						</div>
						<span class={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}>
							{statusLabels[order.status]}
						</span>
					</div>

					<div class="mb-4">
						<p class="text-sm text-muted-foreground mb-2">Artículos ({order.items.length})</p>
						<div class="space-y-1">
							{#each order.items as item}
								<div class="flex justify-between text-sm">
									<span>{item.name} x {item.quantity}</span>
									<span class="text-foreground font-medium">${(item.price * item.quantity).toFixed(2)}</span>
								</div>
							{/each}
						</div>
					</div>

					<div class="border-t border-border pt-4">
						<div class="flex justify-between">
							<span class="font-semibold text-foreground">Total:</span>
							<span class="font-bold text-lg text-accent">${order.total.toFixed(2)}</span>
						</div>
						{#if order.deliveryDate}
							<p class="text-xs text-muted-foreground mt-2">
								Entrega estimada: {new Date(order.deliveryDate).toLocaleDateString('es-ES')}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
