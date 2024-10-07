<template>
  <div>
    <p>This is home page</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data(){
    return{
    window: document.defaultView,
    USER: null,
    USERNAME: null,
    }
  },
  async created(){
    this.USER = this.window.Telegram.WebApp.initDataUnsafe.user.id
    this.USERNAME = this.window.Telegram.WebApp.initDataUnsafe.user.username
  },
}
</script>

