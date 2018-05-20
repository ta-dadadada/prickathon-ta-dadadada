<template>
  <div class="character_detail">
    {{ usersRef }}
    <img :src="characters[$route.params.id].image_url">
    <h1>{{ characters[$route.params.id].name}} ☆{{ characters[$route.params.id].favorite }}いいね☆</h1>
    <p>{{ characters[$route.params.id].msg }}</p>
    <button v-on:click="increment($route.params.id, 1)">いいね！</button>
    <button v-on:click="increment($route.params.id, 10)">めちゃいいね！</button>
    <button v-on:click="increment($route.params.id, 500000000)">いいぜ！</button>
  </div>
</template>

<script>
export default {
  name: 'CharacterDetail',
  data () {
    return {
      characters: {
        mirai: {
          name: '桃山みらい',
          msg: 'キラッとコーデに包まれていく〜',
          image_url:
            'http://www.tv-tokyo.co.jp/anime/prichan/images/chara/chara_mirai_illust.png',
          favorite: 0
        },
        emo: {
          name: '萌黄えも',
          msg: 'エモさの塊',
          image_url:
            'http://www.tv-tokyo.co.jp/anime/prichan/images/chara/chara_emo_illust.png',
          favorite: 0
        }
      }
    }
  },
  methods: {
    increment (id, num) {
      this.characters[id].favorite += num
    },
    reset (id) {
      this.characters[id].favorite = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
