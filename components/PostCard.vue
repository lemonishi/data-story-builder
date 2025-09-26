<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <v-card
    class="post-card"
    hover
    @click="navigateTo(`/posts/${post.id}`)"
  >
    <v-card-title class="post-title">
      {{ post.title }}
    </v-card-title>

    <v-card-subtitle class="post-subtitle">
      {{ post.subtitle }}
    </v-card-subtitle>

    <v-card-text class="post-content">
      <p class="post-excerpt">{{ post.excerpt }}</p>

      <div class="post-meta">
        <div class="author-info">
          <v-icon
            size="small"
            class="me-1"
            >mdi-account</v-icon
          >
          <span>{{ post.author }}</span>
        </div>

        <div class="post-date">
          <v-icon
            size="small"
            class="me-1"
            >mdi-calendar</v-icon
          >
          <span>{{ formatDate(post.publishedAt) }}</span>
        </div>

        <div class="read-time">
          <v-icon
            size="small"
            class="me-1"
            >mdi-clock-outline</v-icon
          >
          <span>{{ post.readTime }}</span>
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
    </v-card-text>

    <v-card-actions class="pt-0">
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        color="primary"
        append-icon="mdi-arrow-right"
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.post-card {
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

.post-title {
  font-size: 1.3rem;
  font-weight: 600 !important;
  line-height: 1.3 !important;
}

.post-subtitle {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  padding-bottom: 12px;
}

.post-content {
  padding-top: 0 !important;
}

.post-excerpt {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
}

.post-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
  }
}

.post-tags {
  margin-top: 8px;
}

@media (max-width: 600px) {
  .post-meta {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
