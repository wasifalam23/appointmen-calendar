// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	routeRules: {
		"/calendar/**": {
			proxy: "https://slotbooker.netlify.app/**",
		},
	},

	devtools: { enabled: false },
	modules: ["@nuxt/ui"],
	colorMode: {
		preference: "light",
	},
	runtimeConfig: {
		public: {
			realmAppId: "",
			mongoDbName: "",
		},
	},
	app: {},
});
