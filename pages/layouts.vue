<template>
    <v-layout wrap>
      <page-title>{{ title }}</page-title>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex
              v-for="template in templates"
              :key="template.id"
              xs4
            >
              <v-card @click.native="onLayoutSelect(template.id)">
                <div :id="'lc' + template.id" class="layout-container">
                    <layout :template="template"></layout>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
    
    </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default {
  components: {
    Layout,
    PageTitle
  },
  data() {
    return {
      title: "Layouts Screen"
    };
  },
  computed: {
    ...mapGetters({
      template: "templates/getCurrentTemplate",
      templates: "templates/getTemplates"
    })
  },
  async beforeMount() {
    await this.fetchTemplates();
    this.setCurrentTemplate(this.template || {});
  },
  methods: {
    ...mapActions({
      fetchTemplates: "templates/fetchTemplates",
      setCurrentTemplate: "templates/setCurrentTemplate"
    }),
    onLayoutSelect(id) {
      const layout = this.templates.find(l => l.id === id);
      // this.setCurrentTemplate(layout);
      this.$router.push({ path: "/configuration", query: { id } });
    }
  }
};
</script>

<style scoped>
.layout-container {
    cursor: pointer;
    height: 300px;
}
.layout-container:hover {
    background-color: white;
    opacity: 0.2;
}
</style>

