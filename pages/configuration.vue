<template>
  <v-layout wrap>
    <page-title>{{ title }}</page-title>
    <v-flex xs1>
      <components-container
        :components="components"
        :dragging="dragging">
      </components-container>
    </v-flex>
    <v-flex xs11>
      <div :id="'lc' + template.id" class="layout-container">
        <layout
          :template="template"
          :dragging="dragging">
        </layout>
      </div>
    </v-flex>
    
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ComponentsContainer from "../components/ComponentsContainer";

export default {
  components: {
    Layout,
    PageTitle,
    ComponentsContainer
  },
  data() {
    return {
      title: "Configuration Screen",
      dragging: {
        active: false,
        index: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      template: "templates/getCurrentTemplate",
      components: "configuration/getComponents"
    })
  },
  async beforeMount() {
    const { id } = this.$route.query;
    await this.getTemplateById(id);
    await this.fetchComponents();
  },
  methods: {
    ...mapActions({
      fetchComponents: 'configuration/fetchComponents',
      getTemplateById: 'templates/getTemplateById'
    })
  }
};
</script>

<style scoped>
.layout-container {
  cursor: default;
  height: 80vh;
}

.components-side-bar {
  padding: 20px;
}


</style>

