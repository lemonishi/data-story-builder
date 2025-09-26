<script setup>
import PostCard from "../components/PostCard.vue";
import { getRecentPosts } from "../data/dummy.js";

const recentPosts = getRecentPosts();
</script>

<template>
  <div class="container">
    <div class="header-section">
      <h1>Recent Stories</h1>
      <p class="subtitle">
        Discover the latest insights in technology, development, and design
      </p>
    </div>

    <div class="posts-grid">
      <PostCard
        v-for="post in recentPosts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;

  .header-section {
    margin-bottom: 2rem;
    text-align: center;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: #1a1a1a;
    }

    .subtitle {
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.6);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.5;
    }
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
}
</style>
