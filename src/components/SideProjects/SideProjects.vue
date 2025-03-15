<template>
  <div class="side-projects">
    <h2 class="subheading">Featured Side Project</h2>
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="{
          name: 'ProjectDetail',
          params: { id: project.id }
        }"
        :class="['project-card', 'animated-element']"
        :style="{ backgroundImage: 'url(' + project.preview + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
      >

        <div class="card-content">
<div class="border-wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
          <div v-if="project.featured" class="featured-highlights">
            <div v-for="highlight in project.highlights" :key="highlight" class="highlight-item">{{ highlight }}</div>
          </div>
        </div>
      </router-link>
  </div>
</template>

<script>
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
  overflow: hidden;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* border: 2px solid rgb(var(--v-theme-primary)); */
}

.project-card:hover {
  transform: scale(1.02);
  /* box-shadow: 0 4px 8px rgba(var(--v-theme-primary), 0.6); */
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(var(--v-theme-background), 0.7);
  z-index: 1;
  transition: background 0.3s ease;
}

.project-card:hover::before {
  background: rgba(var(--v-theme-background), 0.8);
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: rgb(var(--v-theme-text-primary));
}

.card-content h1 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.card-content p {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.highlight-item {
  background: rgba(var(--v-theme-highlight-bg), 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(var(--v-theme-primary));
}

@media (max-width: 768px) {

  .project-card, .card-content {
    min-height: 250px;
  }
    .featured-highlights {
    gap: 0.5rem;
  }
  .highlight-item {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }
}

.featured-highlights {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}


.border-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:  rgb(var(--v-theme-primary));
  padding: 30px 60px;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.border-wrapper:before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  background: rgba(255, 255, 255, 0.05);
}

.border-wrapper span {
  position: absolute;
  background: linear-gradient(to right, rgb(var(--v-theme-primary)),  rgb(var(--v-theme-primary)));
}

.border-wrapper span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

.border-wrapper span:nth-child(2) {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  animation-delay: 1s;
}

.border-wrapper span:nth-child(3) {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

.border-wrapper span:nth-child(4) {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  animation-delay: 1s;
}

.border-wrapper:hover span:nth-child(1) {
  animation: animate1 2s linear infinite;
}

.border-wrapper:hover span:nth-child(2) {
  animation: animate2 2s linear infinite;
}

.border-wrapper:hover span:nth-child(3) {
  animation: animate3 2s linear infinite;
}

.border-wrapper:hover span:nth-child(4) {
  animation: animate4 2s linear infinite;
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>