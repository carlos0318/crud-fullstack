<template>
    <div class="container">
        <h1 class="mt-5 mb-5">Mission Commander</h1>
        <input type="text" v-model="missionCommander.name" class="form-control my-3">
        <input type="text" v-model="missionCommander.username" class="form-control my-3">
        <input type="text" v-model="missionCommander.mainStack" class="form-control my-3">
        <button class="btn btn-success" @click="edit">Edit</button>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'CommandersView',
    computed: {
        ...mapState(["missionCommander"]),
    },
    methods: {
        edit() {
            let mc = {
                id: this.missionCommander.id,
                name: this.missionCommander.name,
                username: this.missionCommander.username,
                mainStack: this.missionCommander.mainStack
            };
            this.updatedMissionCommander(mc);
            this.$router.push({ path: '/' })
        },
        ...mapActions(["getMissionCommander", "updatedMissionCommander"]),
    },
    mounted() {
        this.getMissionCommander(this.$route.params.id);
    },
}
</script>