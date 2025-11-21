<script lang="ts">
    import { ShoppingCart, LogOut, User } from 'lucide-svelte';
    import { cartItems } from '$lib/store.svelte';
    import { createAuthStore } from '$lib/stores/auth';
    import AuthModal from './auth-modal.svelte';
    import { goto } from '$app/navigation';

    // Inicializa el store
    const authStore = createAuthStore();

    // Variables reactivas
    let showAuthModal = false;

    // Suscripción reactiva
    let currentUser: any = null;
    authStore.subscribe(user => currentUser = user);

    // Contador del carrito
    $: cartItemCount = cartItems.items.length;
</script>

<header class="sticky top-0 z-50 bg-background border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2 hover:opacity-80 transitionnter justify-center">
                <span class="text-accent-foreground font-bold text-lg">S</span>
            </div>
            <h1 class="text-xl font-bold text-foreground">Store</h1>
        </a>

        <nav class="hidden md:flex gap-8 items-center">
            /Catálogo</a>
            <a href="/" class="text-foreground hover:text-accent transitionenter gap-4">
            {#if currentUser}
                <div class="text-sm text-muted-foreground">
                    {currentUser.name}
                </div>
                <button
                    on:click={() => authStore.logout()}
                    class="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                    title="Cerrar sesión"
                >
                    <LogOut size={20} />
                </button>
            {:else}
                <button
                    on:click={() => showAuthModal = true}
                    class="flex items-center gap-2 px-3 py-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
                >
                    <User size={18} />
                    Acceder
                </button>
            {/if}

            <button
                on:click={() => goto('/cart')}
                class="relative p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                title="Ir al carrito"
            >
                <ShoppingCart size={24} />
                {#if cartItemCount > 0}
                    <span class="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemCount}
                    </span>
                {/if}
            </button>
        </div>
    </div>
</header>

<AuthModal bind:isOpen={showAuthModal} onClose={() => showAuthModal = false} />