import { defineStore } from "pinia";
import axios from "axios";

export const useSubscribeStore = defineStore("subscribe", {
  state: () => ({
    baseURL: "https://api-woman-secrets.spider-te8.com/api/subscribers",
  }),
  actions: {
    async subscribe(data) {
      try {
        const response = await axios.post(this.baseURL, { email: data });
        return response
      } catch (error) {
        console.error("Error In Subscribing", error);
      }
    },
  },
});
