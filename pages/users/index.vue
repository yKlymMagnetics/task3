<template>
  <div>
    <div>Users page</div>
    <ul v-if="users && users.length">
      <UserListItem v-for="(user, idx) in users" :key="idx" :user="user" />
    </ul>
  </div>
</template>

<script lang="ts">
import UserListItem from '@/components/UserListItem.vue'
import { Component, State, Vue, Action } from 'nuxt-property-decorator'
import { IRootStoreState, IUser } from '~/common'

@Component({
  components: { UserListItem },
})
export default class UserIndexPage extends Vue {
  async fetch() {
    if (!this.users) {
      await this.loadUsers()
    }
  }

  @State((state: IRootStoreState) => state.users)
  users!: IUser[] | null

  @Action
  loadUsers!: () => {}
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>