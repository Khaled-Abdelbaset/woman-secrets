import { defineStore } from "pinia";
import axios from "axios";

export const useTestingStore = defineStore("testing", {
  state: () => ({
    header: {},
    about: {},
    brands: {},
    contact: {},
    footer: {},
    baseURL: "https://api-woman-secrets.spider-te8.com/api/testing",
  }),
  actions: {
    async getTestingData() {
      try {
        const response = await axios.get(this.baseURL);
        const data = response.data.data
        this.header = data.header;
        this.about = data.about;
        this.brands = data.brands;
        this.contact = data.contact;
        this.footer = data.footer;
      } catch (error) {
        console.error("Error In Fetching Testing Data", error);
      }
    },
  },
});
