<template>
  <div class="about">
    <h1>About Me</h1>
    <p>
      I graduated from 
      <a href="http://carleton.edu" target="_blank">Carleton College</a> 
      with a degree in Computer Science in July 2017. 
    </p>
    
    <p>
      I am currently a Senior Front-End Engineer at 
      <a href="https://www.modelop.com/" target="_blank">ModelOp</a>, where I have spent the last 4 years honing my front-end engineering skills (2 as Front-End Engineer, 2 as Senior Front-End Engineer). I have owned and led major parts of our web application, which is used by Fortune 100 companies such as Fidelity, BNY, and Kaiser Permanente. 
    </p>

    <p>
      My responsibilities at ModelOp include building features end-to-end, collaborating with backend teams, and ensuring product quality and performance. refactoring efforts to make our entire application WCAG 2.2 AA compliant, taking on the coding, requirements gathering, and validation. I’ve also developed Python scripts and contributed to our Python SDK. I’ve partnered closely with our customers to design and implement requested features, diagnose production issues, and seamlessly integrate our solutions into their enterprise environments.
    </p>
    
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
  </div>
</template>

<style scoped>
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
