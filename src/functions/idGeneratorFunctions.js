let lastId = 0;

const idGenerator = (prefix='id') => {
    lastId++;
    return `${prefix}${lastId}`;
}

export{
    idGenerator
}

// export default function(prefix='id') {
//     lastId++;
//     return `${prefix}${lastId}`;
// }