<template>
    <grid-layout
        :layout="template.layout"
        :col-num="template.colNum"
        :row-height="rowHeight"
        :is-draggable="false"
        :is-resizable="false"
        :vertical-compact="false"
        :margin="[10, template.verticalMargin]"
        :use-css-transforms="true">

        <grid-item v-for="el in template.layout"
            :key="el.i"
            :id="el.i"
            :x="el.x"
            :y="el.y"
            :w="el.w"
            :h="el.h"
            :i="el.i"
            :class="el.component || ''">
        </grid-item>
    </grid-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["template", "dragging"],
  data() {
    return {
      rowHeight: 0
    };
  },
  computed: {
    ...mapGetters({
      components: "configuration/getComponents",
      layouts: "templates/getLayoutItems"
    })
  },
  watch: {
    "dragging.active"(active) {
      if (active) {
        this.startDrag();
      } else {
        this.stopDrag();
      }
    }
  },
  mounted() {
    const h = document.getElementById("lc" + this.template.id).clientHeight;
    this.rowHeight = Math.floor(h / this.template.rowNum - this.template.verticalMargin);
    if (this.layouts != null && this.$route.path !== '/layouts') {
      this.layouts.forEach(l => {
        if (l.isDirty) {
          const e = document.getElementById(l.i);
          this.addCloseTag(e, l);
        }
      });
    }
  },
  methods: {
    ...mapActions({
      setLayoutItem: "templates/setLayoutItem"
    }),
    startDrag() {
      this.addItemEvents();
    },
    stopDrag() {
      this.removeItemEvents();
    },
    mouseEnter(e) {
      const element = e.target;
      if (this.layouts[element.id].isDirty) {
        return;
      }

      const item = this.template.layout[element.id];
      const component = this.components.find(c => c.id === this.dragging.index);
      if (!this.layouts[element.id].isDirty) {
        element.classList.add(component.name.toLowerCase());
        element.style.opacity = "0.6";
      }
    },
    mouseLeave(e) {
      const element = e.target;
      if (this.layouts[element.id].isDirty) {
        return;
      }

      const item = this.template.layout[element.id];
      const component = this.components.find(c => c.id === this.dragging.index);
      element.classList.remove(component.name.toLowerCase());
    },
    mouseUp(e) {
      const element = e.target;
      const item = this.template.layout[element.id];
      const component = this.components.find(c => c.id === this.dragging.index);
      const className = component.name.toLowerCase();
      if (this.layouts[element.id].isDirty) {
        return;
      } else {
        item.isDirty = true;
        item.component = className;
      }


      element.classList.add(item.component);
      element.classList.add('tag-remove');
      element.style.opacity = '1';

      this.addCloseTag(element, item);
      this.setLayoutItem(item);

      this.removeItemEvents();
    },
    addItemEvents() {
      this.template.layout.forEach((v, i) => {
        const child = this.$el.childNodes[i];
        if (child.id === v.i) {
          child.addEventListener('mouseenter', this.mouseEnter);
          child.addEventListener('mouseleave', this.mouseLeave);
          child.addEventListener('mouseup', this.mouseUp);
        }
      });
    },
    removeItemEvents() {
      this.template.layout.forEach((v, i) => {
        const child = this.$el.childNodes[i];
        if (child.id === v.i) {
          child.removeEventListener('mouseenter', this.mouseEnter);
          child.removeEventListener('mouseleave', this.mouseLeave);
          child.removeEventListener('mouseup', this.mouseUp);
        }
      });
    },
    addCloseTag(element, item) {
      const span = document.createElement('span');
      span.classList.add('tag-remove');
      span.innerHTML = 'X';
      span.onclick = () => {
        element.classList.remove(item.component);
        element.removeChild(span);
        delete item.component;
        delete item.isDirty;
        delete item.element;
        this.setLayoutItem(item);
      };

      element.appendChild(span);
      item.element = element;
    }
  }
};
</script>

<style scoped>
.vue-grid-item {
  border: 1px solid black;
}
</style>


