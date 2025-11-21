const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.C8jTCVTk.js",app:"_app/immutable/entry/app.VlXiHsv_.js",imports:["_app/immutable/entry/start.C8jTCVTk.js","_app/immutable/chunks/BEL6xb7T.js","_app/immutable/chunks/CjCuP7Dm.js","_app/immutable/chunks/BO4drnAo.js","_app/immutable/entry/app.VlXiHsv_.js","_app/immutable/chunks/CjCuP7Dm.js","_app/immutable/chunks/BMgd0Fyj.js","_app/immutable/chunks/BO4drnAo.js","_app/immutable/chunks/CClzeexG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BoXH5mv6.js')),
			__memo(() => import('./chunks/1-BY1_wsYF.js')),
			__memo(() => import('./chunks/2-iErrVtIe.js')),
			__memo(() => import('./chunks/3-C-QGZu0U.js')),
			__memo(() => import('./chunks/4-B5GUxQnR.js')),
			__memo(() => import('./chunks/5-fuchBdvs.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/auth/change-password",
				pattern: /^\/api\/auth\/change-password\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C--xzbNX.js'))
			},
			{
				id: "/api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D0lnlijq.js'))
			},
			{
				id: "/api/auth/profile",
				pattern: /^\/api\/auth\/profile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DVSOt6aF.js'))
			},
			{
				id: "/api/auth/register",
				pattern: /^\/api\/auth\/register\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-L7d2Y9ky.js'))
			},
			{
				id: "/api/cart",
				pattern: /^\/api\/cart\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BHp6uXSP.js'))
			},
			{
				id: "/api/categories",
				pattern: /^\/api\/categories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B_-02HoN.js'))
			},
			{
				id: "/api/categories/[id]",
				pattern: /^\/api\/categories\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DPsZ8LK-.js'))
			},
			{
				id: "/api/orders",
				pattern: /^\/api\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DXO3SbW3.js'))
			},
			{
				id: "/api/orders/[id]",
				pattern: /^\/api\/orders\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Kt-LZi6K.js'))
			},
			{
				id: "/api/products",
				pattern: /^\/api\/products\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B6tZQEeH.js'))
			},
			{
				id: "/api/products/[id]",
				pattern: /^\/api\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CPvjGbFK.js'))
			},
			{
				id: "/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/orders",
				pattern: /^\/orders\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
