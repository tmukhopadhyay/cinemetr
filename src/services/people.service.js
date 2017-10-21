import Vue from 'vue'
import DataService from './data.service'

export default {
    contructCards (people) {
        return people.map((person) => {
            return {
                id: person.id,
                poster: Vue.config.IMAGE_PATH + person.profile_path,
                title: person.name,
                hasTooltip: false,
                labels: person.known_for.map((media) => {
                    return {
                        id: media.id,
                        name: media.title || media.name,
                        type: media.media_type,
                        link: {
                            name: 'App' + media.media_type.charAt(0).toUpperCase() + media.media_type.slice(1),
                            params: {
                                id: media.id
                            }
                        }
                    }
                }),
                hasRatings: false,
                type: 'person'
            }
        })
    },
    getPopularPeople (showAll, page, callback) {
        DataService.getData(Vue.config.SEARCH_PEOPLE, Vue.config.SELECT_POPULAR, page, (response) => {
            let people = response.results
            if (!showAll) {
                people = people.slice(0, Vue.config.CARDS_PER_PAGE)
            }
            callback(this.contructCards(people), response.page, response.total_pages)
        })
    },
    getDetails (id, callback) {
        DataService.getDetails(
            id,
            null,
            Vue.config.TMDB_PERSON_DETAILS,
            'changes%2Ccombined_credits%2Cexternal_ids%2Cimages%2Cmovie_credits%2Ctagged_images%2Ctv_credits',
            (data) => { callback(data) }
        )
    },
    search (searchText, callback) {
        DataService.search(Vue.config.SEARCH_PEOPLE, searchText, (people) => {
            callback(people)
        })
    }
}
