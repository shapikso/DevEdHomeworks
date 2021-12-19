function splitArr(arr,perPage) {
    let n = 0;
    const red = arr.reduce((acc, element, i) =>((acc[i % perPage] = acc[i % perPage] || []).push(element), acc),[])
    return red.reduce((acc,element) => {
     return [...acc,{page: ++n, universitis: element}]
    },[]);
}

function makeDefault(data) {
    if (!data.name || !data.pages || !data.perPage) {
        data.name = data.name ? data.name  : 'а';
        data.page = data.page ? data.page : 1 ;
        data.perPage = data.perPage ? data.perPage :  2;
      }
    return data;
}


module.exports = {splitArr,makeDefault}
