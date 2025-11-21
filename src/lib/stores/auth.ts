import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  password: string;
  role: 'customer' | 'admin';
}

interface AuthError {
  field?: string;
  message: string;
}

export function createAuthStore() {
  const { subscribe, set } = writable<User | null>(null);
  const errorStore = writable<AuthError | null>(null);

  // Inicializar usuarios de demostración
  const initializeDemoUsers = () => {
    if (browser) {
      const users = localStorage.getItem('users');
      if (!users) {
        const demoUsers: User[] = [
          {
            id: 'demo1',
            email: 'demo@example.com',
            name: 'Usuario Demo',
            password: 'demo123',
            phone: '+34 666 777 888',
            address: 'Calle Principal 123',
            city: 'Madrid',
            postalCode: '28001',
            country: 'España',
            role: 'customer'
          }
        ];
        localStorage.setItem('users', JSON.stringify(demoUsers));
      }
    }
  };

  if (browser) initializeDemoUsers();

  return {
    subscribe,
    setError: (error: AuthError | null) => errorStore.set(error),
    subscribeError: errorStore.subscribe,

    register(email: string, name: string, password: string): boolean {
      if (!browser) return false;
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

      if (users.some(u => u.email === email)) {
        errorStore.set({ field: 'email', message: 'Este email ya está registrado' });
        return false;
      }

      if (password.length < 6) {
        errorStore.set({ field: 'password', message: 'La contraseña debe tener al menos 6 caracteres' });
        return false;
      }

      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        password,
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        role: 'customer'
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      set(newUser);
      errorStore.set(null);
      return true;
    },

    login(email: string, password: string): boolean {
      if (!browser) return false;
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        errorStore.set({ message: 'Email o contraseña incorrectos' });
        return false;
      }

      set(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      errorStore.set(null);
      return true;
    },

    getProfile() {
      if (!browser) return null;
      const stored = localStorage.getItem('currentUser');
      return stored ? JSON.parse(stored) as User : null;
    },

    updateProfile(updates: Partial<User>): boolean {
      if (!browser) return false;
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

      if (!currentUser) {
        errorStore.set({ message: 'No hay usuario autenticado' });
        return false;
      }

      const userIndex = users.findIndex(u => u.id === currentUser.id);
      if (userIndex === -1) {
        errorStore.set({ message: 'Usuario no encontrado' });
        return false;
      }

      const updatedUser = { ...users[userIndex], ...updates };
      users[userIndex] = updatedUser;

      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      set(updatedUser);
      errorStore.set(null);
      return true;
    },

    changePassword(currentPassword: string, newPassword: string): boolean {
      if (!browser) return false;
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

      if (!currentUser) {
        errorStore.set({ message: 'No hay usuario autenticado' });
        return false;
      }

      if (currentPassword !== currentUser.password) {
        errorStore.set({ field: 'currentPassword', message: 'La contraseña actual es incorrecta' });
        return false;
      }

      if (newPassword.length < 6) {
        errorStore.set({ field: 'newPassword', message: 'La nueva contraseña debe tener al menos 6 caracteres' });
        return false;
      }

      if (currentPassword === newPassword) {
        errorStore.set({ message: 'La nueva contraseña debe ser diferente a la actual' });
        return false;
      }

      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.id === currentUser.id);

      if (userIndex === -1) {
        errorStore.set({ message: 'Usuario no encontrado' });
        return false;
      }

      users[userIndex].password = newPassword;
      const updatedUser = { ...users[userIndex] };

      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      set(updatedUser);
      errorStore.set(null);
      return true;
    },

    logout() {
      if (!browser) return;
      set(null);
      localStorage.removeItem('currentUser');
      errorStore.set(null);
    },

    initializeFromLocalStorage() {
      if (browser) {
        const stored = localStorage.getItem('currentUser');
        if (stored) set(JSON.parse(stored));
      }
    }
  };
}