<template>

<div class="footer-group">

    <v-btn
      href="mailto:richardsw2017@gmail.com"
      class="icon-link"
      aria-label="Email William Richards"
      variant="text"
      icon
    >
      <Icon :path="mdiEmailOutline" :color="iconColor" size="24" />
    </v-btn>
    <v-btn
      href="https://github.com/williamrichards2017"
      class="icon-link"
      aria-label="William Richards GitHub Profile"
      variant="text"
      icon
    >
      <Icon :path="mdiGithub" :color="iconColor" size="24" />
    </v-btn>
    <v-btn
      title="resume"
      download="William-Richards-resume.pdf"
      target="_blank"
      href="https://github.com/WilliamRichards2017/WilliamRichards2017.github.io/raw/master/public/resume.pdf"
      class="icon-link"
      aria-label="Download William Richards' Resume"
            variant="text"

      icon
    >
      <Icon :path="mdiFileAccount" :color="iconColor" size="24" />
    </v-btn>

  </div>

</template>

<script lang="ts" setup>
import {
  mdiEmailOutline,
  mdiGithub,
  mdiFileAccount,

} from "@mdi/js";

import { inject, Ref } from 'vue';
import Icon from './Icon.vue';


const iconColor = inject<Ref<string>>('iconColor');


</script>

<style>

.footer-group {
  display: flex;
  align-items: center;
  gap: 1em;
  width: 100%;
  padding: 0.5em 1em;
  background-color: rgb(var(--v-theme-surface));
  justify-content: center;
  border-top: 1px solid rgb(var(--v-theme-border));
}

.toggle-container {
  margin-bottom: 0 !important;
}

.icon {
  width: 32px;
  height: 32px;
}

@media (max-width: 768px) {
  .contact-content {
    padding: 0 1rem;
  }

  .icon {
    width: 28px;
    height: 28px;
  }
}
</style>
