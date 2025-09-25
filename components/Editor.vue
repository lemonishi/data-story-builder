<script setup>
import { ref } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { Placeholder } from "@tiptap/extensions";

import H1Icon from "vue-material-design-icons/FormatHeader1.vue";
import H2Icon from "vue-material-design-icons/FormatHeader2.vue";
import H3Icon from "vue-material-design-icons/FormatHeader3.vue";
import PIcon from "vue-material-design-icons/FormatParagraph.vue";
import BoldIcon from "vue-material-design-icons/FormatBold.vue";
import ItalicIcon from "vue-material-design-icons/FormatItalic.vue";
import StrikeIcon from "vue-material-design-icons/FormatStrikethroughVariant.vue";
import HLIcon from "vue-material-design-icons/FormatColorHighlight.vue";
import LeftIcon from "vue-material-design-icons/FormatAlignLeft.vue";
import CenterIcon from "vue-material-design-icons/FormatAlignCenter.vue";
import RightIcon from "vue-material-design-icons/FormatAlignRight.vue";
import JustifyIcon from "vue-material-design-icons/FormatAlignJustify.vue";

const title = ref("");
const tags = ref([]);

const editor = useEditor({
  extensions: [
    StarterKit,
    Typography,
    Placeholder.configure({
      placeholder: "Write something ...",
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Highlight,
  ],
});
</script>

<template>
  <div v-if="editor" class="container">
    <div class="control-group">
      <div class="button-group">
        <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
          <H1Icon :size="24" :title="H1" />
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
          <H2Icon :size="24" :title="H2" />
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
          <H3Icon :size="24" :title="H3" />
        </button>
        <button
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }"
        >
          <PIcon :size="24" :title="Paragraph" />
        </button>
        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
        >
          <BoldIcon :size="24" title="Bold" />
        </button>
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
        >
          <ItalicIcon :size="24" title="Italic" />
        </button>
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
        >
          <StrikeIcon :size="24" title="Italic" />
        </button>
        <button
          @click="editor.chain().focus().toggleHighlight().run()"
          :class="{ 'is-active': editor.isActive('highlight') }"
        >
          <HLIcon :size="24" title="Highlight" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        >
          <LeftIcon :size="24" title="Left" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        >
          <CenterIcon :size="24" title="Center" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        >
          <RightIcon :size="24" title="Right" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('justify').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
        >
          <JustifyIcon :size="24" title="Justify" />
        </button>
      </div>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<style>
.tiptap p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

.title-field {
}

.ProseMirror {
  border: 1px solid gray;
  border-radius: 5px;
  padding-inline: 0.25rem;
}
</style>
