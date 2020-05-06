<template>
  <div class="mainContent">
    <div class="row">
      <div class="column">
          <about/>
      </div>
      <div class="column">
        <div id="main-image"><img class="rounded" src="../assets/Will_Richards.jpg" width="75%" height="75%"></div>
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

.rounded {
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.mainContent {
  margin-bottom:20px;

}

.column {
  float: left;
  width: 50%;
}

.row {
  float: left;
}

#logo {
	margin-bottom:20px;
	font:normal 18px Georgia, serif;
  text-align:center;
}

</style>
