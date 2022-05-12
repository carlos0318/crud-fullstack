<template>
  <div class="container">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Main Stack</th>
          <th scope="col">Current Enrollment</th>
          <th scope="col">Has Azure Certification</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mc in missionCommanders" :key="mc.id">
          <th scope="row">
            {{ mc.id }} 
          </th>
          <td>{{ mc.name }}</td>
          <td>{{ mc.username }}</td>
          <td>{{ mc.mainStack }}</td>
          <td>{{ mc.currentEnrollment }}</td>
          <td>{{ mc.hasAzureCertification }}</td>
          <td>
            <router-link
              :to="{ name: 'missionCommander', params: { id: mc.id } }"
              ><button type="button" class="btn btn-primary btn-sm">Edit</button>
            </router-link>
            <router-link
              :to="{ name: 'missionCommander', params: { id: mc.id } }"
              ><button type="button" class="btn btn-danger btn-sm ms-2">Delete</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ListMC",
  computed: {
    ...mapState(["missionCommanders"]),
  },
  methods: {
    ...mapActions(["getMissionsCommanders"]),
  },
  mounted() {
    this.getMissionsCommanders();
  },
};
</script>
