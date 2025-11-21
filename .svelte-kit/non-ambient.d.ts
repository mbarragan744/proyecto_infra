
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/auth" | "/api/auth/change-password" | "/api/auth/login" | "/api/auth/profile" | "/api/auth/register" | "/api/cart" | "/api/categories" | "/api/categories/[id]" | "/api/orders" | "/api/orders/[id]" | "/api/products" | "/api/products/[id]" | "/cart" | "/orders" | "/profile";
		RouteParams(): {
			"/api/categories/[id]": { id: string };
			"/api/orders/[id]": { id: string };
			"/api/products/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/api": { id?: string };
			"/api/auth": Record<string, never>;
			"/api/auth/change-password": Record<string, never>;
			"/api/auth/login": Record<string, never>;
			"/api/auth/profile": Record<string, never>;
			"/api/auth/register": Record<string, never>;
			"/api/cart": Record<string, never>;
			"/api/categories": { id?: string };
			"/api/categories/[id]": { id: string };
			"/api/orders": { id?: string };
			"/api/orders/[id]": { id: string };
			"/api/products": { id?: string };
			"/api/products/[id]": { id: string };
			"/cart": Record<string, never>;
			"/orders": Record<string, never>;
			"/profile": Record<string, never>
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/auth" | "/api/auth/" | "/api/auth/change-password" | "/api/auth/change-password/" | "/api/auth/login" | "/api/auth/login/" | "/api/auth/profile" | "/api/auth/profile/" | "/api/auth/register" | "/api/auth/register/" | "/api/cart" | "/api/cart/" | "/api/categories" | "/api/categories/" | `/api/categories/${string}` & {} | `/api/categories/${string}/` & {} | "/api/orders" | "/api/orders/" | `/api/orders/${string}` & {} | `/api/orders/${string}/` & {} | "/api/products" | "/api/products/" | `/api/products/${string}` & {} | `/api/products/${string}/` & {} | "/cart" | "/cart/" | "/orders" | "/orders/" | "/profile" | "/profile/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | string & {};
	}
}