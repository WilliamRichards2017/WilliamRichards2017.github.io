<template>
  <div class="side-projects">
    <h2 class="subheading">Featured Side Projects</h2>
    <div class="project-grid">
      <component
        v-for="project in projects"
        :key="project.id"
        :is="project.externalUrl ? 'a' : 'router-link'"
        :href="project.externalUrl"
        :target="project.externalUrl ? '_blank' : undefined"
        :to="!project.externalUrl ? {
          name: 'ProjectDetail',
          params: { id: project.id }
        } : undefined"
        :class="['project-card', 'animated-element']"
        :style="{ backgroundImage: 'url(' + project.preview + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        <div class="card-overlay"></div>
        <div class="card-content">
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
          <div class="highlights">
            <div v-for="highlight in project.highlights" :key="highlight" class="highlight-item">{{ highlight }}</div>
          </div>
        </div>
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import projects from './../../config/projects'

export default {
  data() {
    return {
      projects
    }
  }
}
</script>

<style scoped>


.highlights {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  position: relative;
  display: block;
  text-decoration: none;
  color: rgb(var(--v-theme-text-primary));
  border-radius: 8px;
  overflow: hidden;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(var(--v-theme-secondary));
}

.project-card:hover {
  transform: translateY(-5px);
  color: rgb(var(--v-theme-text-primary)) !important;
  opacity: 0.9;
  border-color: rgb(var(--v-theme-primary));
  border-width: 3px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);

}

.project-card:hover .highlight-item {
  border-color: rgb(var(--v-theme-primary)) !important;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(var(--v-theme-overlay-start), 0.9),
    rgba(var(--v-theme-overlay-end), 0.7)
  ) !important;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay:hover {
  opacity: 0.7;
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: rgb(var(--v-theme-text-primary));
}

.card-content h1 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px rgba(var(--v-theme-text-shadow), 0.5);
}

.card-content p {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
  opacity: 0.9;
  text-shadow: 2px 2px 4px rgba(var(--v-theme-text-shadow), 0.7);
}

.highlight-item {
  background: rgba(var(--v-theme-highlight-bg), 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(var(--v-theme-secondary));
    transition: all 0.5s ease-out;

}



.project-card:hover .card-button {
  transform: translate(-50%, 0);
  opacity: 1;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    min-height: 250px;
  }
}






</style>
