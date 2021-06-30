import { Store, MutationPayload } from 'vuex'
import { IRootStoreState } from "~/common";

export const StoreLoggerPlugin = (store: Store<IRootStoreState>) => {
    store.subscribe((mutation: MutationPayload) => {
        const {type, payload} = mutation;
        if(type === 'SET_USERS_MUTATION') {
            console.log('Users loaded: ', payload.length);
        }
    })
  }