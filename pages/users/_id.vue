<template>
  <div>
    <h1 v-if="user">{{ user.name }}</h1>
  </div>
</template>

<script lang="ts">
import {
  Component,
  State,
  Vue,
  Watch,
  Action,
  Getter,
} from 'nuxt-property-decorator'
import { IRootStoreState, IUser } from '~/common'


@Component({})
export default class UserPage extends Vue {
  user: IUser | null = null

  async fetch() {
    const params = this.$route.params
    if (!this.users) {
      await this.loadUsers()
    }
    this.user = this.getUser(params.id)
  }

  @Action('loadUsers')
  loadUsers!: () => {}

  @State((state: IRootStoreState) => state.users)
  users!: IUser[] | null

  @Getter('getUserById')
  getUser!: (id: string) => IUser

  @Watch('users')
  watchUsers(newUsers: IUser[]) {
    if (newUsers && newUsers.length) {
      this.user = this.getUser(this.$route.params.id)
    }
  }
}
</script>