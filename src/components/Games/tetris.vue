<template>
  <div class="container">
    <div class="content-section">
      <h1 class="section-title">Tetris with AI Evolution</h1>
      <p class="section-text">
        Experience a modern twist on the classic Tetris game, enhanced with AI capabilities and multiple gameplay modes.
        Built with <strong>Svelte</strong> and <strong>Node.js</strong> serverless functions, this project leverages
        <strong>AWS Amplify</strong> and <strong>DynamoDB</strong> for seamless hosting and data management.
      </p>
      <div class="play-button-container">
        <a href="https://main.dzuwukv72iqz5.amplifyapp.com/" target="_blank" class="play-button">🎮 Play Tetris</a>
      </div>
      <h2 class="subheading">Gameplay Modes:</h2>
      <ul class="section-text">
        <li><strong>Freeplay Mode</strong>: Enjoy Tetris without gravity—perfect for stress free casual play</li>
        <li><strong>Arcade Mode</strong>: Challenge yourself with classic Tetris gameplay featuring increasing gravity.</li>
      </ul> 
      <h2 class="subheading">Features:</h2>
      <ul class="section-text">
        <li><strong>High Scores</strong>: Compete globally with a high-score system powered by AWS DynamoDB.</li>
        <li><strong>AI Training Mode</strong>: Dive into evolutionary algorithms by training AI agents. Customize parameters to evolve genomes (board evaluation functions) and observe their progress over generations.</li>
        <li><strong>Versus Mode</strong>: Test your skills against trained AI agents. Copy genomes to play against specific AI behaviors and strategies.</li>
        <li><strong>Responsive Design</strong>: Enjoy seamless gameplay across devices with mobile-friendly swipe controls and adaptive layout.</li>
      </ul>
      <p class="section-text">
        This project showcases the fusion of classic game design with modern AI techniques and serverless architecture.
        It reflects my passion for innovative problem-solving and interactive user experiences.
      </p>
      <p class="section-text">
        <a href="https://github.com/WilliamRichards2017/serverless-tetris" target="_blank" class="github-link">📂 View Source Code on GitHub</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: rgb(var(--v-theme-text-primary));
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: rgb(var(--v-theme-primary));
}

.subheading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: rgb(var(--v-theme-text-secondary));
  position: relative;
  padding-bottom: 0.5rem;
}

.subheading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: rgb(var(--v-theme-secondary));
}

.section-text {
  line-height: 1.6;
  color: rgba(var(--v-theme-text-secondary));
  margin-bottom: 1.5rem;
  max-width: 75ch;
}

.play-button-container {
  margin: 20px 0;
}

.play-button {
  display: inline-block;
  padding: 15px 25px;
  background-color: #0078d7;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.play-button:hover {
  background-color: rgb(var(--v-theme-primary));
  transform: scale(1.05);
}


.github-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.github-link:hover {
  color: rgba(var(--v-theme-primary), 0.8);
  text-decoration: underline;
}



</style>