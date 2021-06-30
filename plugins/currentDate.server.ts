import { Plugin } from '@nuxt/types'

const currentDateServerPlugin: Plugin =  (_, inject) => {
    inject('currentDate', () => {
        const date = new Date();
        return `${date.getHours()} : ${date.getMinutes()}, ${date.getDate()} ${date.getMonth()}`
    })
};

export default currentDateServerPlugin;