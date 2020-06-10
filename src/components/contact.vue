<template>
    <div class="contact">
    <h1 style="padding-left: 25px">Contact me</h1>
    <div/>
      <div class="flex-container" style="padding-left: 25px">
        <div><a href="mailto:richardsw2017@gmail.com"><img class="icon" src="../assets/email.png" width=50px></a></div>
        <div><a href="https://github.com/williamrichards2017"><img class="icon" src="../assets/github.png" width=50px></a></div>
          <div><a download="William-Richards-resume"  target="_blank" href="../../public/resume.pdf">
              <img alt="ResumeIcon" width="50" class="icon" src="../assets/circle-cropped.png">
          </a>
          </div>
      </div>
      </div>
</template>

<style scoped>

.icon{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50%;
}

.flex-container {
  display: flex;
}

h1 {
    color:#9068be;
	margin:0 0 10px;
  padding-top:.3em;
	padding-bottom:.2em;
	font:normal 17px Georgia, serif;
	border-bottom:1px solid #efece7;
}

a {
  padding-top:1rem;
  padding-right:2rem;
  padding-bottom:1rem;
}


    .contact{
        position: fixed;
        bottom: 0;
        width: 100vw;
    }

</style>
