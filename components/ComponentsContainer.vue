<template>
  <div class="components-wrapper">
    <div class="inner">
      <div class="component-container"
        v-for="(c) in components" :key="c.id">
          <component :is="c.name" :id="c.id" class="component" :class="{ dragging: dragging.active && c.id === dragging.index }"
            @drag="mousedrag">
            {{ c.name }}
          </component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import components from '@/components/components';

export default {
  components: {
    ...components
  },
  props: ['components', 'dragging'],
  methods: {
    mousedrag(cid, e) {
      let cs = document.defaultView.getComputedStyle(e.target);
      let bounds = e.target.getBoundingClientRect();

      this.dX = bounds.left - e.clientX;
      this.dY = bounds.top - e.clientY;

      this.dragElement = e.target;
      this.dragElement.style.width = parseFloat(cs.width) + "px";
      this.dragElement.style.height = this.dragElement.parentElement.style.height =
        parseFloat(cs.height) + "px";

      this.dragMove(e);

      document.documentElement.addEventListener(
        "mousemove",
        this.dragMove
      );
      document.documentElement.addEventListener(
        "mouseup",
        this.dragStop
      );

      this.dragging.active = true;
      this.dragging.index = cid;
    },

    dragMove(e) {
      this.dragElement.style.left = e.clientX + this.dX + "px";
      this.dragElement.style.top = e.clientY + this.dY + "px";
    },

    dragStop() {
      document.documentElement.removeEventListener(
        "mousemove",
        this.dragMove
      );
      document.documentElement.removeEventListener(
        "mouseup",
        this.dragStop
      );

      this.dragElement.parentElement.removeAttribute("style");
      this.dragElement.removeAttribute("style");

      this.dragElement = null;
      this.dragging.active = false;
    }
  }
};
</script>

<style scoped>
.components-wrapper {
  height: 100%;
  padding: 0 10px;
  position: relative;
}

.inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 10px 0;
  overflow: auto;
}

.component-container {
  margin: 0 0 10px;
}

.component {
  padding: 15px 10px;
  border: 1px solid #ccc;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
}

.component.dragging {
  pointer-events: none;
  position: fixed;
  z-index: 1000;
  opacity: 0.8;
}
</style>

