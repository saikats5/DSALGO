let data = {
    id: 1,
    name: ['P1','P4'],
    next: {
        id: 1,
        name: ['P3'],
        next: {
            id: 1,
            name: ['P3','P4','P5'],
            next: {
                id: 1,
                name: ['P1','P2','P4'],
                next: {
                    id: 1,
                    name: ['P2','P3','P5'],
                    next: null
                }
            }
        }
    }
}
function nestedCount(obj){
    if(obj === null){
        return {};
    }
    let count = {}
    for(let key of obj.name){
        count[key] = count[key] + 1 || 1;
    }
    const nextCount = nestedCount(obj.next);
    for(let key in nextCount){
        count[key] = (count[key] || 0) + nextCount[key];
    }
    return count;
}
console.log('11',nestedCount(data));