export const usePagesStore = defineStore("pages", {
  // State
  state: () => ({
    pages: [],
  }),

  // Getters
  getters: {
    // Example: Get a specific page by its title
    getPageById: (state) => (id) => {
      return state.pages.find((page) => page.id === id);
    },
    teamMembers: (state) => {
      const aboutPageAcf = state.pages.find((page) => page.id === 77)?.acf;
      if (!aboutPageAcf) return [];

      const members = [];
      for (let i = 1; i <= 4; i++) {
        const imgKey = `teamimg${i}`;
        const introKey = `teamintro${i}`;
        if (aboutPageAcf[imgKey] && aboutPageAcf[introKey]) {
          members.push({
            img: aboutPageAcf[imgKey],
            intro: aboutPageAcf[introKey],
          });
        }
      }
      return members;
    },
  },

  // Actions
  actions: {
    async fetchPages() {
      try {
        const response = await fetch(
          "https://neurodiversegemeinschaft.de/staging/wp-json/acf/v3/pages/"
        );
        const data = await response.json();
        this.pages = data; // Use `this` to refer to the state within actions
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    },
  },
});
