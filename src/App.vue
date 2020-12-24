<template>
  <v-app class="grey lighten-4">
    <Navbar v-if="!$route.meta.hiddens"/>
    <v-main>
      <div class="content" v-if="!$route.meta.hiddens">
        <router-view/>
      </div>
    </v-main>

    <div class="login-template" v-if="$route.meta.hiddens">
      <router-view/>
    </div>
  </v-app>
</template>
<script>

import Navbar from "@/components/Nabar";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({

  }),
};
</script>

<style scoped lang="scss">
.content{
  background-color: $bg-content;
  height: 100%;
 width: 100%;
}

</style>
