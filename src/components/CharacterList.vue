<template>
  <div class="character_list">
    <label class="chatacter-list__item" v-for="(character, key) in characters" :key="key">
      <p>
        <router-link :to="{ name : 'CharacterDetail', params : { id: key }}">
          {{ character.name }}
        </router-link>
      </p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CharacterList',
  data () {
    return {
      'characters': {
        'mirai': {
          name: '桃山みらい',
          msg: 'キラッとコーデに包まれていく〜',
          image_url: 'http://www.tv-tokyo.co.jp/anime/prichan/images/chara/chara_mirai_illust.png' },
        'emo': {
          name: '萌黄えも',
          msg: 'エモさの塊',
          image_url: 'http://www.tv-tokyo.co.jp/anime/prichan/images/chara/chara_emo_illust.png' }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
