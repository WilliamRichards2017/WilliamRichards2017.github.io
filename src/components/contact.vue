<template>
    <div class="contact">
    <h1>Contact me</h1>
    <div/>
      <div class="flex-container">
        <!--<div><a href="mailto:richardsw2017@gmail.com"><img class="gmail" src="../assets/gmail.jpeg" width=50px></a></div>-->
        <div><a href="https://github.com/williamrichards2017"><img class="github" src="../assets/github.png" width=50px></a></div>
        <div class="grey" >801-755-8538</div>
      </div>
      </div>
</template>

<style scoped>

.github{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50%;
}

.gmail{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 25%;



}

.flex-container {
  display: flex;
}
.grey {
  color:#656668;
  padding-right:2rem;
  padding-top:1rem;
  padding-bottom:1rem;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);

}

.topPad{
  padding-top: .4em;
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

p {
  padding-bottom: .05em;
}

</style>
