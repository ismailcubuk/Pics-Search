import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID wSK4CUpL98jdBDWGbiktUHIQ0_58Kxq2YJFLhNeroVU',
        },
        params: {
            query: term,
        },
    });

    console.log(response);

    return response.data.results;
}
export default searchImages