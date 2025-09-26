<script setup>
import { computed } from "vue";
import { getPostById } from "../../data/dummy.js";
import { marked } from "marked";

const route = useRoute();
const router = useRouter();

const post = computed(() => {
  const id = route.params.id;
  return getPostById(id);
});

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
  });
}

// Convert markdown content to HTML
const htmlContent = computed(() => {
  if (!post.value) return "";
  return marked(post.value.content);
});

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// SEO meta tags
useSeoMeta({
  title: () => post.value?.title || "Post not found",
  ogTitle: () => post.value?.title || "Post not found",
  description: () => post.value?.excerpt || "",
  ogDescription: () => post.value?.excerpt || "",
  ogType: "article",
});
</script>

<template>
  <div
    v-if="post"
    class="post-container"
  >
    <!-- Post Header -->
    <div class="post-header">
      <v-btn
        variant="text"
        prepend-icon="mdi-arrow-left"
        @click="router.back()"
        class="back-button"
      >
        Back
      </v-btn>

      <div class="post-header-content">
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-subtitle">{{ post.subtitle }}</p>

        <div class="post-meta">
          <div class="author-section">
            <v-avatar
              size="40"
              class="me-3"
            >
              <v-icon>mdi-account</v-icon>
            </v-avatar>
            <div>
              <div class="author-name">{{ post.author }}</div>
              <div class="post-details">
                {{ formatDate(post.publishedAt) }} • {{ post.readTime }}
              </div>
            </div>
          </div>

          <div class="post-tags">
            <v-chip
              v-for="tag in post.tags"
              :key="tag"
              size="small"
              variant="outlined"
              color="primary"
              class="me-2 mb-1"
            >
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </div>
    </div>

    <!-- Post Content -->
    <div class="post-body">
      <article
        class="markdown-content"
        v-html="htmlContent"
      ></article>
    </div>

    <!-- Post Footer -->
    <div class="post-footer">
      <v-divider class="mb-6"></v-divider>

      <div class="footer-content">
        <div class="author-bio">
          <v-avatar
            size="60"
            class="me-4"
          >
            <v-icon size="30">mdi-account</v-icon>
          </v-avatar>
          <div>
            <h3>{{ post.author }}</h3>
            <p>
              Thanks for reading! Follow for more insights on technology and
              development.
            </p>
          </div>
        </div>

        <v-btn
          color="primary"
          variant="outlined"
          prepend-icon="mdi-arrow-left"
          @click="navigateTo('/')"
        >
          Back to All Posts
        </v-btn>
      </div>
    </div>
  </div>

  <!-- This shouldn't be needed since we throw 404 error above -->
  <div
    v-else
    class="loading-container"
  >
    <v-progress-circular indeterminate></v-progress-circular>
    <p>Post not found</p>
  </div>
</template>

<style lang="scss" scoped>
.post-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.post-header {
  margin-bottom: 3rem;

  .back-button {
    margin-bottom: 1rem;
  }

  .post-header-content {
    .post-title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: #1a1a1a;
    }

    .post-subtitle {
      font-size: 1.25rem;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 2rem;
      line-height: 1.4;
    }

    .post-meta {
      .author-section {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        .author-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .post-details {
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.875rem;
        }
      }

      .post-tags {
        margin-top: 0.5rem;
      }
    }
  }
}

.post-body {
  margin-bottom: 3rem;
}

.post-footer {
  margin-bottom: 2rem;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    .author-bio {
      display: flex;
      align-items: center;
      flex: 1;

      h3 {
        margin-bottom: 0.5rem;
        font-weight: 600;
      }

      p {
        color: rgba(0, 0, 0, 0.6);
        margin: 0;
        line-height: 1.4;
      }
    }
  }
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 1rem;
}

@media (max-width: 768px) {
  .post-header {
    .post-header-content {
      .post-title {
        font-size: 2rem;
      }

      .post-subtitle {
        font-size: 1.1rem;
      }
    }
  }

  .post-footer {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>

<style lang="scss">
/* Global markdown content styles */
.markdown-content {
  line-height: 1.7;
  font-size: 1.1rem;
  color: #2c3e50;

  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
    color: #1a1a1a;
  }

  h1 {
    font-size: 2.25rem;
    border-bottom: 2px solid #e1e5e9;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.875rem;
    color: #2d3748;
  }

  h3 {
    font-size: 1.5rem;
    color: #4a5568;
  }

  h4 {
    font-size: 1.25rem;
    color: #4a5568;
  }

  h5,
  h6 {
    font-size: 1.125rem;
    color: #4a5568;
  }

  /* Paragraphs */
  p {
    margin-bottom: 1.5rem;
    color: #4a5568;
  }

  /* Lists */
  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
      color: #4a5568;

      p {
        margin-bottom: 0.5rem;
      }
    }
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  /* Blockquotes */
  blockquote {
    border-left: 4px solid #3182ce;
    background-color: #f7fafc;
    padding: 1rem 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #2d3748;
    border-radius: 0 4px 4px 0;

    p {
      margin-bottom: 0;
      font-size: 1.1rem;
    }
  }

  /* Code */
  code {
    background-color: #f1f5f9;
    color: #e53e3e;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: #1a202c;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;

    code {
      background: none;
      color: inherit;
      padding: 0;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }

  /* Links */
  a {
    color: #3182ce;
    text-decoration: underline;

    &:hover {
      color: #2c5282;
      text-decoration: none;
    }
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;

    th,
    td {
      border: 1px solid #e2e8f0;
      padding: 0.75rem;
      text-align: left;
    }

    th {
      background-color: #f7fafc;
      font-weight: 600;
      color: #2d3748;
    }

    td {
      color: #4a5568;
    }
  }

  /* Horizontal Rule */
  hr {
    border: none;
    border-top: 2px solid #e2e8f0;
    margin: 3rem 0;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
  }

  /* Strong and Emphasis */
  strong {
    font-weight: 600;
    color: #1a1a1a;
  }

  em {
    font-style: italic;
    color: #2d3748;
  }

  /* Mark highlighting */
  mark {
    background-color: #fed7d7;
    color: #742a2a;
    padding: 0.1rem 0.2rem;
    border-radius: 2px;
  }
}

/* Mobile responsiveness for markdown content */
@media (max-width: 768px) {
  .markdown-content {
    font-size: 1rem;

    h1 {
      font-size: 1.875rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    pre {
      padding: 1rem;
      font-size: 0.875rem;
    }

    blockquote {
      padding: 0.75rem 1rem;
      margin: 1.5rem 0;
    }
  }
}
</style>
