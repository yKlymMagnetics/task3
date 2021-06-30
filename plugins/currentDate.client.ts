import { Plugin } from '@nuxt/types'

const currentDatePluginClient: Plugin = (_, inject) => {
    inject('currentDate', () => new Intl.DateTimeFormat('en-US').format(new Date()))
};

export default currentDatePluginClient;