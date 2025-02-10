<template>
  <div class="container">
    <div class="top-row"> 
    <div class="content-section"> 
    <h1>About Me</h1>

        <p>
      I’m a creative problem-solver and front-end engineer passionate about crafting intuitive, high-performance web experiences. 
      With 5+ years of expertise, I thrive at the intersection of code and design, building scalable systems, advocating for accessibility, 
      and mentoring teams to deliver solutions that balance technical rigor with user-centricity. 
    </p>
    
    <h1>Current Work</h1>

    <p>
      I am currently a Senior Front-End Engineer at 
      <a href="https://www.modelop.com/" target="_blank">ModelOp</a>, where I have spent the last 4 years honing my front-end engineering skills (2 as Front-End Engineer, 2 as Senior Front-End Engineer). I have owned and led major parts of our web application, which is used by Fortune 100 companies such as Fidelity, BNY, and Kaiser Permanente. 
    </p>

    <p>
      My responsibilities at ModelOp include building features end-to-end, collaborating with backend teams, and ensuring product quality and performance. refactoring efforts to make our entire application WCAG 2.2 AA compliant, taking on the coding, requirements gathering, and validation. I’ve also developed Python scripts and contributed to our Python SDK. I’ve partnered closely with our customers to design and implement requested features, diagnose production issues, and seamlessly integrate our solutions into their enterprise environments.
    </p>

    </div>
          <div class="image-section">
        <div class="main-image">
          <img class="profile-image" src="../../assets/Will_Richards.jpg">
        </div>
        <div class="logo">
          Will Richards
        </div>
      </div>
    </div>
    
    <h1>Previous Work Experience</h1>
    <p>
      Before ModelOp, I spent 3 years as a software developer for the 
      <a href="http://marthlab.org" target="_blank">Marth Lab</a> and 1.5 years developing software for computational genetic discovery. I also gained 1.5 years of experience as a web developer on the 
      <a href="http://iobio.io/" target="_blank">iobio</a> team, building diagnostic tools and visualizations for clinicians.
    </p>

    <h1>Some of my projects include</h1>

    <h3 style="padding-top: 5px">Web Applications</h3>
    <ul style="margin-top:10px;">
      <li><a href="https://pedigree.iobio.io" target="_blank">pedigree.iobio.io</a></li>
      <p>Author of pedigree visualization with interactive genotype/phenotype regression analysis.</p>

      <li><a href="https://gene.iobio.io" target="_blank">gene.iobio.io</a></li>
      <p>Developer for web application used to investigate potential disease-causing variants.</p>

      <li><a href="https://clin.iobio.io" target="_blank">clin.iobio.io</a></li>
      <p>Developer for a web application guiding clinicians through a diagnostic genomic analysis workflow.</p>
    </ul>

    <h3>Backend Software</h3>
    <ul style="margin-top:10px;">
      <div class="row">
        <div class="column">
          <li>
            <a href="https://github.com/WilliamRichards2017/RufAlu" target="_blank">Alu variant detection</a>
          </li>
          <p>Author of Alu mobile element detection plugin for de novo variant caller (C++11).</p>

          <li>
            <a href="https://github.com/WilliamRichards2017/Twofus" target="_blank">Structural variant detection</a>
          </li>
          <p>Author of structural variant detection plugin for de novo variant caller (C++11).</p>
        </div>

        <div class="column" style="padding-left: 20px">
          <li>
            <a href="https://github.com/WilliamRichards2017/pdxFilter" target="_blank">Patient derived tumor xenograft contamination filter</a>
          </li>
          <p>Author of PDX contamination filter, leveraging a convolutional neural network pipeline to filter out murine contamination from patient cancer tissue (Python 3).</p>

          <li>
            <a href="https://github.com/jandrewrfarrell/RUFUS" target="_blank">De novo variant caller</a>
          </li>
          <p>Developer for k-mer based de novo variant caller (C++11).</p>
        </div>
      </div>
    </ul>

  <h1> Education </h1>
      <p>
      I graduated from 
      <a href="http://carleton.edu" target="_blank">Carleton College</a> 
      with a degree in Computer Science in July 2017. 
    </p>

  </div>
</template>

<style scoped>



.top-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.container {
  padding: 20px;
}

.logo {
  margin: 20px 0;
  font: normal 17px Georgia, serif;
  text-align: center;
}

@media (max-width: 768px) {
  .top-row {
    flex-direction: column-reverse;
    padding-left: 0;
    gap: 10px;
  }
  .content-section {
    width: 100%;
    max-width: 100% !important;
  }
  .image-section {
    width: 100%;
    max-width: 100% !important;
  }


}

.image-section {
  flex: 1;
  max-width: 39%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-section {
  flex: 1;
  max-width: 60%;
}

.main-image {
  padding-top: 20px;
  width: 100%;
  text-align: center;
}

.profile-image {
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 90%;
  height: auto;
  max-width: 400px;
}

  ul {
    padding-left: 10px;
  }
  p {
    margin: .2em;
    padding-bottom: .5em;
  }
  .about {
    padding-top: 10px;
  }
  .column {
    float: left;
    width: calc(50% - 10px);
  }
  .row {
    float: left;
    padding-left: 20px;
  }
</style>
