<script lang="ts">
  import { authStore } from '$lib/stores/auth.svelte.js';
  import UserProfile from '$lib/components/user-profile.svelte';
  import ChangePassword from '$lib/components/change-password.svelte';

  let user = $derived.by(() => {
    let currentUser: any = null;
    authStore.subscribe(u => {
      currentUser = u;
    });
    return currentUser;
  });

  let redirecting = $state(false);

  function handleLogout() {
    authStore.logout();
    redirecting = true;
    window.location.href = '/';
  }
</script>

<main class="min-h-screen bg-background p-4">
  <div class="max-w-2xl mx-auto py-8">
    {#if user}
      <div class="space-y-6">
        <UserProfile />
        <ChangePassword />
        
        <button
          onclick={handleLogout}
          class="w-full px-4 py-3 bg-destructive text-destructive-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
        >
          Cerrar Sesión
        </button>
      </div>
    {:else}
      <div class="text-center py-12">
        <p class="text-lg text-muted-foreground mb-4">No has iniciado sesión</p>
        <a href="/" class="text-accent hover:underline">Volver a inicio</a>
      </div>
    {/if}
  </div>
</main>
