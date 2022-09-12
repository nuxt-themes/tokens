<script setup lang="ts">
defineProps({
  single: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <p v-bind="$attrs">
    All you need to paint is a few tools, a little instruction, and a vision in your mind. This is your world. That's the way I look when I get home late; black and blue.
  </p>
  <template v-if="!single">
    <p v-bind="$attrs">
      You can work and carry-on and put lots of little happy things in here. You can get away with a lot. In life you need colors.
    </p>
    <p v-bind="$attrs">
      Put it in, leave it alone. Volunteering your time; it pays you and your whole community fantastic dividends. You better get your coat out, this is going to be a cold painting. In nature, dead trees are just as normal as live trees.
    </p>
    <p v-bind="$attrs">
      Isn't that fantastic? Let's get wild today. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. We'll have a super time.
    </p>
    <p v-bind="$attrs">
      We need dark in order to show light. The only prerequisite is that it makes you happy. If it makes you happy then it's good. You can create the world you want to see and be a part of. You have that power. We'll do another happy little painting.
    </p>
    <p v-bind="$attrs">
      Only eight colors that you need. Zip. That easy. You can do anything here. So don't worry about it. You want your tree to have some character. Make it special.
    </p>
    <p v-bind="$attrs">
      Trees get lonely too, so we'll give him a little friend. Think about a cloud. Just float around and be there. You create the dream - then you bring it into your world. And maybe a little bush lives there. You can create anything that makes you happy. Poor old tree.
    </p>
  </template>
</template>

<style scoped lang="ts">
css({
  'p': {
    margin: '{space.6} 0'
  }
})
</style>
