
export const getGifDataAPI = (params) => {
    const _data = async (params) => {
       try {
        const _apiResponse = await fetch(
            "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
          );
          const _data = await _apiResponse.json();
            console.log(``);
            console.log(`getGifDataAPI data: `);
            console.log(_data);
            console.log(``);

            return _data;
       } catch (error) {
            console.log(``);
            console.log(`getGifDataAPI error: `);
            console.log(error);
            console.log(``);        

            return error;
       }
    }

    return _data(params);
}