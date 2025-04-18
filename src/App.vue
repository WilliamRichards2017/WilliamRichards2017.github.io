<template>
  <v-app>
    <!-- Screen reader announcement -->
    <div aria-live="polite" class="sr-only">
      This portfolio implements WAI-ARIA standards and offers multiple accessibility controls.
    </div>

    <Header />

    <v-main class="main">
      <router-view />

      <!-- Dynamic FAB -->
      <v-btn
        v-if="!showAccessibilityStatement && !showKeyboardHelp"
        class="fab-button"
        app
        title="Accessibility Controls"
        aria-label="Open detailed accessibility controls"
        @click="drawer = !drawer"
      >
        <icon :path="mdiHuman" size="32" />
      </v-btn>

      <!-- Accessibility Drawer -->
      <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
        width="400"
        class="accessibility-drawer"
      >
        <v-toolbar color="background">
          <v-toolbar-title class="text-h6">
            Accessibility Controls
          </v-toolbar-title>
          <v-btn @click="drawer = false" aria-label="Close accessibility controls">
            <icon :path="mdiClose" />
          </v-btn>
        </v-toolbar>

          <ul class="py-0">
            <!-- Motion Control -->
            <li class="v-list-item">
              <div class="v-list-item__prepend">
                <icon :path="mdiMotion" class="mr-2" />
              </div>
              <div class="v-list-item__content">
                <div class="v-list-item-title">Motion Reduction</div>
                <div class="v-list-item-subtitle">
                  System preference: {{ systemPrefersReducedMotion ? 'Enabled' : 'Disabled' }}
                </div>
              </div>
              <div class="v-list-item__append">
                <v-switch
                  v-model="disableAnimations"
                  color="primary"
                  role="switch"
                  :aria-label="`Motion reduction ${disableAnimations ? 'enabled' : 'disabled'}`"
                />
              </div>
            </li>

            <!-- Text Scaling -->
            <li class="v-list-item">
              <div class="v-list-item__prepend">
                <icon :path="mdiFormatSize" class="mr-2" />
              </div>
              <div class="v-list-item__content">
                <label for="text-scaling-slider">Text Scaling</label>
                <div class="v-list-item-subtitle">
                  Current scale: {{ textScale }}x
                </div>
              </div>
              <div class="v-list-item__append">
                <div class="slidecontainer">
                  <input
                    type="range"
                    id="text-scaling-slider"
                    class="slider"
                    v-model="textScale"
                    min="0.8"
                    max="1.5"
                    step="0.1"
                    aria-label="Text Scaling"
                    style="width: 120px"
                  />
                </div>
              </div>
            </li>

            <!-- Contrast Control -->
            <li class="v-list-item">
              <div class="v-list-item__prepend">
                <icon :path="mdiContrastCircle" class="mr-2" />
              </div>
              <div class="v-list-item__content">
                <div class="v-list-item-title">High Contrast</div>
                <div class="v-list-item-subtitle">
                  {{ highContrast ? 'Enabled' : 'System default' }}
                </div>
              </div>
              <div class="v-list-item__append">
                <v-switch
                  v-model="highContrast"
                  color="primary"
                  role="switch"
                  :aria-label="`High contrast mode ${highContrast ? 'enabled' : 'disabled'}`"
                />
              </div>
            </li>
          </ul>

          <!-- Drawer Footer -->

          <template #append>
          <div class="drawer-footer pa-4">
            <p class="text-caption">
              <icon :path="mdiInformation" size="16" class="mr-1" />
              Settings are saved for future visits.
              <a
                class="text-primary"
                @click.prevent="showAccessibilityStatement = true"
                aria-label="Read our full accessibility statement"
              >
                Read full statement
              </a>
            </p>
          </div>
          </template>
      </v-navigation-drawer>

      <!-- Dialogs -->
      <v-dialog v-model="showAccessibilityStatement" max-width="600">
        <AccessibilityStatement @close="showAccessibilityStatement = false" />
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, defineComponent, provide, computed } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';

import {
  mdiHuman,
  mdiClose,
  mdiMotion,
  mdiFormatSize,
  mdiContrastCircle,
  mdiInformation
} from '@mdi/js';

const Icon = defineComponent({
  props: {
    path: { type: String, required: true },
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' }
  },
  setup(props) {
    return () => h('svg', {
      viewBox: "0 0 24 24",
      width: props.size,
      height: props.size,
      fill: props.color,
      class: "inline-block align-middle"
    }, [
      h('path', { d: props.path })
    ]);
  }
});

const theme = useTheme();
const isDark = ref(localStorage.getItem("theme") === "dark");
const highContrast = ref(localStorage.getItem("highContrast") === "true");

// Unified Theme Update
const updateTheme = () => {
  const themeName = highContrast.value 
    ? `highContrast`
    : isDark.value ? 'dark' : 'light';
  
  theme.global.name.value = themeName;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  localStorage.setItem("highContrast", highContrast.value.toString());
};

// Theme Toggle Function
const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const iconColor = computed(() => {
  return highContrast.value || isDark.value ? 'white' : 'black';
});

provide('isDark', isDark);
provide('toggleTheme', toggleTheme);
provide('iconColor', iconColor);

// Other Accessibility Settings
const systemPrefersReducedMotion = ref(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
const disableAnimations = ref(localStorage.getItem("disableAnimations") === "true" || systemPrefersReducedMotion.value);
const textScale = ref(parseFloat(localStorage.getItem("textScale") || "1"));

// Watchers
watch([disableAnimations, textScale, highContrast, isDark], () => {
  document.body.classList.toggle("no-animations", disableAnimations.value);
  document.documentElement.style.setProperty('--text-scale', `${textScale.value}`);
  localStorage.setItem("disableAnimations", disableAnimations.value.toString());
  localStorage.setItem("textScale", textScale.value.toString());
  updateTheme();
});

// Initial Setup
onMounted(() => {
  document.body.classList.toggle("no-animations", disableAnimations.value);
  document.documentElement.style.setProperty('--text-scale', `${textScale.value}`);
  updateTheme();
});

const drawer = ref(false);
const showAccessibilityStatement = ref(false);
const showKeyboardHelp = ref(false);
</script>

<style>
:root {
  --text-scale: 1;
}

body.no-animations .animated-element {
  animation: none !important;
  transition: none !important;
  transform: none !important;

}

.v-list-item-subtitle {
  -webkit-line-clamp: unset !important;
  color: rgba(var(--v-theme-text-secondary));
  font-size: 0.875rem
}

html {
  font-size: calc(1rem * var(--text-scale));
}

/* FAB Positioning Fix */
.fab-button {
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 1000;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-text-primary));
  height: 64px !important;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  padding: 8px;
  backdrop-filter: blur(4px);
  border: 1px solid rgb(var(--v-theme-border));
}

.fab-button:hover {
    color: rgb(var(--v-theme-primary)) !important;
}


.fab-button:active {
  background-color: var(--v-theme-primary-darken-2);
}

.fab-adjusted {
  transform: translateX(calc(-320px + -2rem)) !important;
}

@media (max-width: 960px) {
  .fab-adjusted {
    transform: translateY(calc(-100% - 2rem)) !important;
  }
}



.icon-link {
  color: rgba(var(--v-theme-text-secondary), var(--v-medium-emphasis-opacity));
  transition: transform 0.2s ease, color 0.2s ease;
  padding: 8px;
}

.icon-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
    background-color: rgb(var(--v-theme-primary), 0.2);

  filter: brightness(1.1);
  transform: translateY(-2px);
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

/* Focus States */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--v-theme-primary) !important;
  outline-offset: 2px;
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.accessibility-drawer ul {
  padding-bottom: 96px;
}

.drawer-footer {
  width: 100%;
  background: rgba(var(--v-theme-background), 0.9);
  backdrop-filter: blur(4px);
  padding: 16px;
}

/* List Item Styles */
.v-list-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.v-list-item__prepend {
  margin-right: 16px;
}

.v-list-item__content {
  flex: 1;
}

.v-list-item__append {
  margin-left: 16px;
}

.slidecontainer {
  width: 100%;
}


.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: rgba(var(--v-theme-primary));
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}

.main {
  border-top: 1px solid rgb(var(--v-theme-border));
    border-bottom: 1px solid rgb(var(--v-theme-border))

}


</style>
