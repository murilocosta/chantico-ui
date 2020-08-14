import FlexSearch from 'flexsearch';

import menuJson from '../shared/menu.json';

const searchEngine = FlexSearch.create({
    encode: "balance",
    tokenize: "forward",
    threshold: 0,
    async: true,
    cache: true
});

searchEngine.add(menuJson);

export default searchEngine;
