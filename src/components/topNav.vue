<template>
  <div id="topNav">
    <div id="nav"><a v-bind:style="{ textDecoration:mainUnderline}" @click="dmShow = false, mainShow = true, mainUnderline='underline', dmUnderline=''">Home</a>  |
                 <a v-bind:style="{ textDecoration:dmUnderline}" @click="dmShow = true, mainShow = false, mainUnderline='', dmUnderline='underline'"> DataMining</a>
 </div>

 <div  v-if="dmShow">
   <dataMining/>
 </div>
 <div  v-if="mainShow">
     <mainContent/>
   </div>
 </div>
</template>

<script>
    export default {
    	data() {
              return {
                mainUnderline:  'underline',
                dmUnderline: '',
                  dmShow: false,
                  mainShow: true,
            }
        }
    }
</script>

<style scoped>

a:hover {
  color:lightgrey;
}

a:active {
  color: white;
}

#header {
	margin:0 1px;
}

</style>
