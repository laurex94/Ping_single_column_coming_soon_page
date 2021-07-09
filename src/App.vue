<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
    <Social></Social>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Social from '@/components/Social'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Social,
    Footer
  }
}
</script>
