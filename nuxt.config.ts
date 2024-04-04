// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	routeRules: {
		"/**": {
			proxy: "//https://slotbooker.netlify.app" + "/calendar/**",
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
