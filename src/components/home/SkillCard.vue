<script setup lang="ts">
defineProps<{
  title: string;
  tags: string[];
  description: string;
}>();
</script>

<template>
  <article class="skill-card">
    <div class="skill-card__header">
      <h3>{{ title }}</h3>
      <ul aria-label="使用工具與技術">
        <li v-for="tag in tags" :key="tag">
          <span aria-hidden="true">#</span>{{ tag }}
        </li>
      </ul>
    </div>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
.skill-card {
  background: #fff;
  border-radius: 24px;
  color: #323232;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  width: 100%;
}

.skill-card__header {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
}

.skill-card h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.skill-card ul {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-size: 18px;
  gap: 12px;
  justify-content: flex-end;
  line-height: 1.5;
  list-style: none;
  margin: 0;
  padding: 0;
}

.skill-card li {
  white-space: nowrap;
}

.skill-card li span {
  color: #00d9ff;
  font-weight: 600;
}

.skill-card > p {
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 900px) {
  .skill-card__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .skill-card ul {
    justify-content: flex-start;
  }
}

@media (max-width: 600px) {
  .skill-card {
    border-radius: 18px;
    padding: 20px;
  }

  .skill-card h3 {
    font-size: 20px;
  }

  .skill-card ul,
  .skill-card > p {
    font-size: 16px;
  }
}
</style>
