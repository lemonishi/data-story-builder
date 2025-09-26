<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ListItem } from "@tiptap/extension-list";
import { Color, TextStyle } from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

import BoldIcon from "vue-material-design-icons/FormatBold.vue";
import ItalicIcon from "vue-material-design-icons/FormatItalic.vue";
import StrikeIcon from "vue-material-design-icons/FormatStrikethroughVariant.vue";
import InlineIcon from "vue-material-design-icons/Xml.vue";
import H1Icon from "vue-material-design-icons/FormatHeader1.vue";
import H2Icon from "vue-material-design-icons/FormatHeader2.vue";
import H3Icon from "vue-material-design-icons/FormatHeader3.vue";
import H4Icon from "vue-material-design-icons/FormatHeader4.vue";
import H5Icon from "vue-material-design-icons/FormatHeader5.vue";
import H6Icon from "vue-material-design-icons/FormatHeader6.vue";
import PIcon from "vue-material-design-icons/FormatParagraph.vue";
import LeftIcon from "vue-material-design-icons/FormatAlignLeft.vue";
import CenterIcon from "vue-material-design-icons/FormatAlignCenter.vue";
import RightIcon from "vue-material-design-icons/FormatAlignRight.vue";
import JustifyIcon from "vue-material-design-icons/FormatAlignJustify.vue";
import ULIcon from "vue-material-design-icons/FormatListBulleted.vue";
import OLIcon from "vue-material-design-icons/FormatListNumbered.vue";
import CodeIcon from "vue-material-design-icons/CodeBraces.vue";
import QuoteIcon from "vue-material-design-icons/FormatQuoteClose.vue";
import UndoIcon from "vue-material-design-icons/ArrowULeftTop.vue";
import RedoIcon from "vue-material-design-icons/ArrowURightTop.vue";

const title = ref("");
const editor = ref(null);
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;

  editor.value = new Editor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit,
    ],
    content: `
        <h2>
          Hi there,
        </h2>
        <p>
          write your <b>post description</b> here!
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>      
      `,
  });
});

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy();
  }
});

const handleSubmit = () => {
  if (!editor.value) return;

  const postData = {
    title: title.value,
    content: editor.value.getHTML(),
  };

  // send to backend server if available
  console.log("Post data:", postData);
  alert("Post submitted! Check console for data structure.");
};
</script>

<template>
  <div class="container">
    <div class="title-section">
      <input
        v-model="title"
        type="text"
        placeholder="Enter your post title..."
        class="title-input"
      />
    </div>

    <div
      v-if="isClient && editor"
      class="editor-section"
    >
      <div class="control-group">
        <div class="button-group format-group">
          <button
            @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
            title="Bold"
          >
            <BoldIcon />
          </button>
          <button
            @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
            title="Italic"
          >
            <ItalicIcon />
          </button>
          <button
            @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }"
            title="Strikethrough"
          >
            <StrikeIcon />
          </button>
          <button
            @click="editor.chain().focus().toggleCode().run()"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{ 'is-active': editor.isActive('code') }"
            title="Inline code"
          >
            <InlineIcon />
          </button>
        </div>

        <div class="button-group heading-group">
          <button
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
            title="Heading 1"
          >
            <H1Icon />
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
            title="Heading 2"
          >
            <H2Icon />
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
            title="Heading 3"
          >
            <H3Icon />
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
            title="Heading 4"
          >
            <H4Icon />
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
            title="Heading 5"
          >
            <H5Icon />
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
            title="Heading 6"
          >
            <H6Icon />
          </button>
          <button
            @click="editor.chain().focus().setParagraph().run()"
            :class="{ 'is-active': editor.isActive('paragraph') }"
            title="Paragraph"
          >
            <PIcon :size="20" />
          </button>
        </div>

        <div class="button-group">
          <button
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
            title="Left"
          >
            <LeftIcon :size="20" />
          </button>
          <button
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
            title="Center"
          >
            <CenterIcon :size="20" />
          </button>
          <button
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
            title="Right"
          >
            <RightIcon :size="20" />
          </button>
          <button
            @click="editor.chain().focus().setTextAlign('justify').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
            title="Justify"
          >
            <JustifyIcon :size="20" />
          </button>
        </div>

        <div class="button-group list-group">
          <button
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }"
            title="Bullet list"
          >
            <ULIcon />
          </button>
          <button
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }"
            title="Ordered list"
          >
            <OLIcon />
          </button>
        </div>

        <div class="button-group block-group">
          <button
            @click="editor.chain().focus().toggleCodeBlock().run()"
            :class="{ 'is-active': editor.isActive('codeBlock') }"
            title="Code block"
          >
            <CodeIcon />
          </button>
          <button
            @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'is-active': editor.isActive('blockquote') }"
            title="Blockquote"
          >
            <QuoteIcon />
          </button>
        </div>

        <div class="button-group action-group">
          <button
            @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()"
            title="Undo"
          >
            <UndoIcon />
          </button>
          <button
            @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()"
            title="Redo"
          >
            <RedoIcon />
          </button>
        </div>
      </div>
      <editor-content :editor="editor" />
    </div>

    <div class="submit-section">
      <button
        @click="handleSubmit"
        class="submit-button"
        :disabled="!title.trim() || !editor?.getText()?.trim()"
      >
        Submit Post
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 50rem;
  margin: 0 auto;
}

.title-section {
  margin-bottom: 16px;
}

.title-input {
  width: 100%;
  padding: 16px 20px;
  font-size: 24px;
  font-weight: 600;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  outline: none;
  background-color: #ffffff;
  transition: border-color 0.15s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #0969da;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
  }

  &::placeholder {
    color: #8b949e;
    font-weight: 400;
  }
}

.editor-placeholder {
  margin-bottom: 16px;
}

.placeholder-toolbar {
  border: 1px solid #404040;
  border-bottom: 0;
  border-radius: 6px 6px 0 0;
  height: 60px;
  background: linear-gradient(180deg, #2d2d2d 0%, #262626 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.placeholder-content {
  border: 1px solid #404040;
  border-radius: 0 0 6px 6px;
  padding: 16px;
  min-height: 200px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-text {
  color: #8b949e;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 8px;
}

.loading-text::after {
  content: "";
  width: 16px;
  height: 16px;
  border: 2px solid #8b949e;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.editor-section {
  margin-bottom: 16px;
}

.control-group {
  border: 1px solid #404040;
  border-bottom: 0;
  border-radius: 6px 6px 0 0;
  padding: 12px 16px;
  background: linear-gradient(180deg, #2d2d2d 0%, #262626 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
}

.button-group::after {
  content: "";
  width: 1px;
  height: 24px;
  background-color: #404040;
  margin-left: 8px;
  flex-shrink: 0;
}

.button-group:last-child::after {
  display: none;
}

.button-group button {
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 12px;
  transition: all 0.15s ease;
  min-height: 32px;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  position: relative;
  flex-shrink: 0;
}

.button-group button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.button-group button.is-active {
  background-color: #0969da;
  color: #ffffff;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
}

.button-group button:disabled {
  background-color: transparent;
  color: #666666;
  cursor: not-allowed;
}

.button-group button:disabled:hover {
  background-color: transparent;
  color: #666666;
}

.submit-section {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  background: linear-gradient(135deg, #0969da 0%, #0550ae 100%);
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  transition: all 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #0550ae 0%, #033d8b 100%);
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: #8b949e;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
}
</style>

<style lang="scss">
.tiptap {
  border: 1px solid #404040;
  border-radius: 0 0 6px 6px;
  padding: 16px;
  min-height: 200px;
  outline: none;
  background-color: #ffffff;

  :first-child {
    margin-top: 0;
  }

  ul,
  ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin-top: 2.5rem;
    text-wrap: pretty;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  code {
    background-color: #f8f9fa;
    border-radius: 0.4rem;
    color: #e83e8c;
    font-size: 0.85rem;
    padding: 0.25em 0.3em;
  }

  pre {
    background: #0d0d0d;
    border-radius: 0.5rem;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid #d1d9e0;
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid #d1d9e0;
    margin: 2rem 0;
  }
}
</style>
