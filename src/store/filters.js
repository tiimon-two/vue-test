import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFiltersStore = defineStore('filters', () => {
    const filters = reactive([]);

    function addFilter(filter) {
      filters.push(filter);
    }

    function removeFilter(index) {
      filters.splice(index, 1);
    }

    return {filters, addFilter, removeFilter};
})
