<template>
	<div class="blue"
		@mousedown.left.prevent.stop="handleDrag(id, $event)">
	</div>
</template>

<script>
import component from '@/mixins/component';

export default {
  mixins: [component]
};
</script>
