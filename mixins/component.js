export default {
    props: {
        id: {
            type: Number
        }
    },
    methods: {
        handleDrag(id, e) {
            this.$emit('drag', id, e);
        }
    }
}