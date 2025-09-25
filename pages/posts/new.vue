<template>
  <div>
    <client-only>
      <tiptap-editor />
    </client-only>
  </div>
</template>

<script>
import TiptapEditor from "~/components/Editor.vue";
export default {
  components: {
    TiptapEditor,
  },
};
</script>
