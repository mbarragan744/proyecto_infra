<script lang="ts">
    import { createAuthStore } from '$lib/stores/auth';
    import { Button } from '$lib/components/ui/button';
    import { Card } from '$lib/components/ui/card';

    // Inicializa el store
    const authStore = createAuthStore();

    // Variables reactivas
    let isEditing = false;
    let editedUser = {
        name: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    };
    let success = '';

    // Suscripción al usuario actual
    let user: any = null;
    authStore.subscribe(u => {
        user = u;
        if (u) {
            editedUser = {
                name: u.name || '',
                phone: u.phone || '',
                address: u.address || '',
                city: u.city || '',
                postalCode: u.postalCode || '',
                country: u.country || ''
            };
        }
    });

    function handleSave() {
        const updated = authStore.updateProfile(editedUser);
        if (updated) {
            success = 'Perfil actualizado exitosamente';
            isEditing = false;
            setTimeout(() => success = '', 3000);
        }
    }

    function handleCancel() {
        if (user) {
            editedUser = {
                name: user.name || '',
                phone: user.phone || '',
                address: user.address || '',
                city: user.city || '',
                postalCode: user.postalCode || '',
                country: user.country || ''
            };
        }
        isEditing = false;
    }
</script>

<Card class="p-6">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Mi Perfil</h2>
        {#if user && !isEditing}
            <Button on:click={() => isEditing = true} class="bg-accent">
                Editar Perfil
            </Button>
        {/if}
    </div>

    {#if success}
        <div class="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
            {success}
        </div>
    {/if}

    {#if user}
        {#if isEditing}
            <!-- Formulario de edición -->
            <div class="space-y-4">
                <!-- Campos editables -->
                <!-- Usa bind:value={editedUser.campo} -->
                <!-- Botones -->
                <div class="flex gap-3 justify-end">
                    <Button on:click={handleCancel} class="bg-muted text-foreground hover:bg-muted/80">
                        Cancelar
                    </Button>
                    <Button on:click={handleSave} class="bg-accent">
                        Guardar Cambios
                    </Button>
                </div>
            </div>
        {:else}
            <!-- Vista de perfil -->
            <div class="space-y-4">
                <p><strong>Nombre:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Teléfono:</strong> {user.phone || 'No especificado'}</p>
                <!-- Resto de campos -->
            </div>
        {/if}
    {:else}
        <p class="text-muted-foreground">Por favor inicia sesión para ver tu perfil</p>
    {/if}
</Card>