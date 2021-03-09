<template>
  <div class="mainContent">
    <div class="row">
      <div style="float: left; width:61%">
          <about/>
      </div>
      <div style="float: left; width:39%">
        <div id="main-image"><img class="my-rounded" src="../../assets/Will_Richards.jpg" width="90%" height="90%"></div>
        <div id="logo">
          Will Richards
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>

#main-image {
  text-align:center;
  padding-top: 20px;

}

.my-rounded {
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.mainContent {
  margin-bottom:20px;

}

.column {
  float: left;
  width: 50%;
  heigh: 50vh;
}

.row {
  float: left;
  padding-left: 20px;
}

#logo {
	margin-bottom:20px;
	font:normal 17px Georgia, serif;
  text-align:center;
}

</style>
