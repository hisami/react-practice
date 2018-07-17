// レスポンスからランキング情報だけを抜き出す
const getRanking = response => {
    const ranking = [];
    const itemLength = response.ResultSet.totalResultsReturned
    for (let index = 0; index < itemLength; index++) {
        const item = response.ResultSet['0'].Result[index + ''];
        ranking.push({
            code: item.Code,
            name: item.Name,
            url: item.Url,
            imageUrl: item.Image.Medium
        })
    }
    return ranking;
}

const initialState = {
    categoryId: undefined,
    ranking: undefined,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {

    }
}