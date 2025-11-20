<script lang="ts">
  import { authStore } from '$lib/stores/auth.svelte.js';
  import { Button } from '$lib/components/ui/button';
  import { Card } from '$lib/components/ui/card';
  
  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }

  let { isOpen, onClose } = $props();
  let activeTab = $state<'login' | 'register'>('login');
  let email = $state('');
  let password = $state('');
  let name = $state('');
  let error = $state('');

  function handleLogin() {
    if (!email || !password) {
      error = 'Por favor completa todos los campos';
      return;
    }
    
    const success = authStore.login(email, password);
    if (success) {
      resetForm();
      onClose();
    } else {
      let errorMsg = '';
      authStore.subscribeError(err => {
        if (err) errorMsg = err.message;
      });
      error = errorMsg || 'Error al iniciar sesión';
    }
  }

  function handleRegister() {
    if (!email || !password || !name) {
      error = 'Por favor completa todos los campos';
      return;
    }
    
    const success = authStore.register(email, name, password);
    if (success) {
      resetForm();
      onClose();
    } else {
      let errorMsg = '';
      authStore.subscribeError(err => {
        if (err) errorMsg = err.message;
      });
      error = errorMsg || 'Error al registrar usuario';
    }
  }

  function resetForm() {
    email = '';
    password = '';
    name = '';
    error = '';
    activeTab = 'login';
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <Card class="w-full max-w-md">
      <div class="p-6">
        <div class="flex gap-4 mb-6">
          <button
            onclick={() => {
              activeTab = 'login';
              error = '';
            }}
            class={`pb-2 border-b-2 transition-colors ${
              activeTab === 'login'
                ? 'border-accent text-accent font-semibold'
                : 'border-transparent text-muted-foreground'
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onclick={() => {
              activeTab = 'register';
              error = '';
            }}
            class={`pb-2 border-b-2 transition-colors ${
              activeTab === 'register'
                ? 'border-accent text-accent font-semibold'
                : 'border-transparent text-muted-foreground'
            }`}
          >
            Registro
          </button>
        </div>

        {#if error}
          <div class="mb-4 p-3 bg-destructive/10 text-destructive text-sm rounded-md">
            {error}
          </div>
        {/if}

        <div class="space-y-4">
          {#if activeTab === 'register'}
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Nombre</label>
              <input
                id="name"
                type="text"
                bind:value={name}
                placeholder="Tu nombre"
                class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          {/if}

          <div>
            <label for="email" class="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              bind:value={email}
              placeholder="tu@email.com"
              class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium mb-2">Contraseña</label>
            <input
              id="password"
              type="password"
              bind:value={password}
              placeholder="••••••••"
              class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <Button
            onclick={activeTab === 'login' ? handleLogin : handleRegister}
            class="w-full bg-accent text-accent-foreground hover:opacity-90"
          >
            {activeTab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </Button>

          <Button
            onclick={onClose}
            class="w-full bg-muted text-muted-foreground hover:bg-muted/80"
          >
            Salir
          </Button>
        </div>

        <button
          onclick={onClose}
          class="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>
      </div>
    </Card>
  </div>
{/if}
