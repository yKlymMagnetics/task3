import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { StoreLoggerPlugin } from './plugins/logger';
import { IRootStoreState, IUser } from '~/common/interfaces';

export const state = (): IRootStoreState => ({
    users: null
});

export const plugins = [StoreLoggerPlugin];

export const mutations: MutationTree<IRootStoreState> = {
    SET_USERS_MUTATION: (state, users: IUser[] | null) => {
        state.users = users
    }
}

export const getters: GetterTree<IRootStoreState, IRootStoreState> = {
    getUserById: (state) => (id: string) => state.users?.find(user => user.id.toString() === id)
}

export const actions: ActionTree<IRootStoreState, IRootStoreState> = {
    loadUsers: async ({ commit }) => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const parsedUsers = await users.json();
        commit('SET_USERS_MUTATION', parsedUsers);
    },
    setUsers: ({ commit }, users) => commit('SET_USERS_MUTATION', users)
};