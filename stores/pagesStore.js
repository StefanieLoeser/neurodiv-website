export const usePagesStore = defineStore("pages", {
  // State
  state: () => ({
    pages: [],
  }),

  // Getters
  getters: {
    // Example: Get a specific page by its title
    getPageByTitle: (state) => (title) => {
      return state.pages.find((page) => {
        if (Array.isArray(page.acf)) {
          return false; // or handle the array case as needed
        } else {
          return page.acf.titel === title;
        }
      });
    },
    getPageById: (state) => (id) => {
      return state.pages.find((page) => page.id === id);
    },
  },

  // Actions
  actions: {
    async fetchPages() {
      try {
        const response = await fetch(
          "https://neurodiversegemeinschaft.de/wp-json/acf/v3/pages/"
        );
        const data = await response.json();
        this.pages = data; // Use `this` to refer to the state within actions
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    },
  },
});
