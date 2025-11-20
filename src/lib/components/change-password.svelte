<script lang="ts">
  import { authStore } from '$lib/stores/auth.svelte.js';
  import { Button } from '$lib/components/ui/button';
  import { Card } from '$lib/components/ui/card';

  let currentPassword = $state('');
  let newPassword = $state('');
  let confirmPassword = $state('');
  let error = $state('');
  let success = $state('');

  let user = $derived.by(() => {
    let currentUser: any = null;
    authStore.subscribe(u => {
      currentUser = u;
    });
    return currentUser;
  });

  function handleChangePassword() {
    error = '';
    success = '';

    if (!currentPassword || !newPassword || !confirmPassword) {
      error = 'Por favor completa todos los campos';
      return;
    }

    if (newPassword !== confirmPassword) {
      error = 'Las contraseñas nuevas no coinciden';
      return;
    }

    const changed = authStore.changePassword(currentPassword, newPassword);

    if (changed) {
      success = 'Contraseña cambiada exitosamente';
      currentPassword = '';
      newPassword = '';
      confirmPassword = '';
      setTimeout(() => {
        success = '';
      }, 3000);
    } else {
      let errorMsg = '';
      authStore.subscribeError(err => {
        if (err) errorMsg = err.message;
      });
      error = errorMsg || 'Error al cambiar la contraseña';
    }
  }
</script>

<Card class="p-6">
  <h2 class="text-2xl font-bold mb-6">Cambiar Contraseña</h2>

  {#if error}
    <div class="mb-4 p-3 bg-destructive/10 text-destructive rounded-md">
      {error}
    </div>
  {/if}

  {#if success}
    <div class="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
      {success}
    </div>
  {/if}

  {#if user}
    <div class="space-y-4 max-w-md">
      <div>
        <label for="current-password" class="block text-sm font-medium mb-2">Contraseña Actual</label>
        <input
          id="current-password"
          type="password"
          bind:value={currentPassword}
          placeholder="Ingresa tu contraseña actual"
          class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label for="new-password" class="block text-sm font-medium mb-2">Nueva Contraseña</label>
        <input
          id="new-password"
          type="password"
          bind:value={newPassword}
          placeholder="Ingresa tu nueva contraseña"
          class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label for="confirm-password" class="block text-sm font-medium mb-2">Confirmar Nueva Contraseña</label>
        <input
          id="confirm-password"
          type="password"
          bind:value={confirmPassword}
          placeholder="Confirma tu nueva contraseña"
          class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <Button onclick={handleChangePassword} class="w-full bg-accent">
        Cambiar Contraseña
      </Button>
    </div>
  {:else}
    <p class="text-muted-foreground">Por favor inicia sesión para cambiar tu contraseña</p>
  {/if}
</Card>
