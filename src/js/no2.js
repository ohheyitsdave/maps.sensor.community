import 'whatwg-fetch'
//import checkStatus from './utils'

let dataRetrieved = false

let no2 = {
    getData: async function (URL) {

    return await fetch(URL)
    .then((resp) => resp.json())
    .then((geojson) => {
        return Promise.resolve({cells: geojson});
    })
    }
}
export default no2