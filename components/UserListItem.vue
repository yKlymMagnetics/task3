<template>
  <li>
    <NuxtLink :to="'/users/' + user.id">{{ user.name }}</NuxtLink>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'nuxt-property-decorator'
import { IUser } from '~/common'

@Component
export default class USerListItem extends Vue {
  @Prop()
  readonly user!: IUser
}
</script>
