function splitArr(arr,perPage) {
    let n = 0;
    const red = arr.reduce((acc, element, i) =>((acc[i % perPage] = acc[i % perPage] || []).push(element), acc),[])
    return red.reduce((acc,element) => {
        console.log(element);
     return [...acc,{page: ++n, universitis: element}]
    },[]);
}


module.exports = {splitArr}
