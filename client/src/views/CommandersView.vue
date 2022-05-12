<template>
  <div>
    <h1 class="mb-5 mt-5">Mission Commanders</h1>
    <button class="btn btn-primary mb-3" @click="addCommander">
      Add Commander
    </button>

    <ListMC />
  </div>
</template>

<script>
import ListMC from "@/components/ListMC.vue";

export default {
  name: "CommandersView",
  data() {
    return {};
  },
  components: {
    ListMC,
  },
};
</script>
