<script lang="ts">
    import { createAuthStore } from '$lib/stores/auth';
    import UserProfile from '$lib/components/user-profile.svelte';
    import ChangePassword from '$lib/components/change-password.svelte';
    import { goto } from '$app/navigation';

    // Inicializa el store
    const authStore = createAuthStore();

    // Variable reactiva para el usuario
    let user: any = null;
    authStore.subscribe(u => user = u);

    let redirecting = false;

    function handleLogout() {
        authStore.logout();
        redirecting = true;
        goto('/'); // Mejor que window.location.href para SSR
    }
</script>

<main class="min-h-screen bg-background p-4">
    <div class="max-w-2xl mx-auto py-8">
        {#if user}
            <div class="space-y-6">
                <UserProfile />
                <ChangePassword />

                <button
                    on:click={handleLogout}
                    class="w-full px-4 py-3 bg-destructive text-destructive-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
                >
                    Cerrar Sesión
                </button>
            </div>
        {:else}
            <div class="text-center py-12">
                <p class="text-lg text-muted-foreground mb-4">No has iniciado sesión</p>
                /Volver a inicio</a>
            </div>
        {/if}
    </div>
</main>