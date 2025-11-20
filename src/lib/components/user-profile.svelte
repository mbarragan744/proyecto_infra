<script lang="ts">
  import { authStore } from '$lib/stores/auth.svelte.js';
  import { Button } from '$lib/components/ui/button';
  import { Card } from '$lib/components/ui/card';
  import { derived, writable } from 'svelte/store';

  const { subscribe, set } = writable(false);
  const { subscribe: subscribeUser, update } = authStore;

  const user = derived(subscribeUser, ($user) => $user);
  let isEditing = $state(false);
  let editedUser = $state({ name: '', phone: '', address: '', city: '', postalCode: '', country: '' });
  let success = $state('');

  function handleSave() {
    updateProfile({
      name: editedUser.name,
      phone: editedUser.phone,
      address: editedUser.address,
      city: editedUser.city,
      postalCode: editedUser.postalCode,
      country: editedUser.country,
    });
  }

  function handleCancel() {
    editedUser = { ...user };
    isEditing = false;
  }

  function updateProfile(profileData) {
    update(($user) => {
      editedUser = { ...$user, ...profileData };
      success = 'Perfil actualizado exitosamente';
      isEditing = false;
      setTimeout(() => {
        success = '';
      }, 3000);
      return editedUser;
    });
  }
</script>

<Card class="p-6">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-2xl font-bold">Mi Perfil</h2>
    {#if !isEditing}
      <Button onclick={() => isEditing = true} class="bg-accent">
        Editar Perfil
      </Button>
    {/if}
  </div>

  {#if success}
    <div class="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
      {success}
    </div>
  {/if}

  {#if $user}
    {#if isEditing}
      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2" for="name">Nombre</label>
            <input
              type="text"
              bind:value={editedUser.name}
              id="name"
              class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" for="email">Email</label>
            <input
              type="email"
              value={$user.email}
              disabled
              id="email"
              class="w-full px-3 py-2 border border-input rounded-md bg-muted text-muted-foreground cursor-not-allowed"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" for="phone">Teléfono</label>
            <input
              type="tel"
              bind:value={editedUser.phone}
              id="phone"
              class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" for="country">País</label>
            <input
              type="text"
              bind:value={editedUser.country}
              id="country"
              class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" for="city">Ciudad</label>
            <input
              type="text"
              bind:value={editedUser.city}
              id="city"
              class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" for="postalCode">Código Postal</label>
            <input
              type="text"
              bind:value={editedUser.postalCode}
              id="postalCode"
              class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2" for="address">Dirección</label>
          <input
            type="text"
            bind:value={editedUser.address}
            id="address"
            class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div class="flex gap-3 justify-end">
          <Button onclick={handleCancel} class="bg-muted text-foreground hover:bg-muted/80">
            Cancelar
          </Button>
          <Button onclick={handleSave} class="bg-accent">
            Guardar Cambios
          </Button>
        </div>
      </div>
    {:else}
      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="text-sm text-muted-foreground" for="name">Nombre</label>
            <p class="text-lg font-medium" id="name">{$user.name}</p>
          </div>
          <div>
            <label class="text-sm text-muted-foreground" for="email">Email</label>
            <p class="text-lg font-medium" id="email">{$user.email}</p>
          </div>
          <div>
            <label class="text-sm text-muted-foreground" for="phone">Teléfono</label>
            <p class="text-lg font-medium" id="phone">{$user.phone || 'No especificado'}</p>
          </div>
          <div>
            <label class="text-sm text-muted-foreground" for="country">País</label>
            <p class="text-lg font-medium" id="country">{$user.country || 'No especificado'}</p>
          </div>
          <div>
            <label class="text-sm text-muted-foreground" for="city">Ciudad</label>
            <p class="text-lg font-medium" id="city">{$user.city || 'No especificado'}</p>
          </div>
          <div>
            <label class="text-sm text-muted-foreground" for="postalCode">Código Postal</label>
            <p class="text-lg font-medium" id="postalCode">{$user.postalCode || 'No especificado'}</p>
          </div>
        </div>
        <div>
          <label class="text-sm text-muted-foreground" for="address">Dirección</label>
          <p class="text-lg font-medium" id="address">{$user.address || 'No especificada'}</p>
        </div>
      </div>
    {/if}
  {:else}
    <p class="text-muted-foreground">Por favor inicia sesión para ver tu perfil</p>
  {/if}
</Card>
