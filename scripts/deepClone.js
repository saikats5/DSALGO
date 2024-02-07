// structuredClone() - ES6

const data = {
    name: 'John',
    info: {
        hobbies: ['reading', 'coding'],
        address: {
            city: 'New York',
            country: 'USA'
        }
    }
};

//const data1 = {...data};
//const data1 = structuredClone(data)
//const data1 = JSON.parse(JSON.stringify(data));

function deepClone(obj) {
    if (Array.isArray(obj)) {
        return obj.map((item) => {
            deepClone(item)
        });
    } else if (typeof (obj) === 'object' && obj !== null) {
        const clonedObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key])
            }
        }
        return clonedObj;
    } else {
        return obj;
    }
}

const data1 = deepClone(data);
console.log('11', data == data1)
console.log('22', data.info == data1.info)

