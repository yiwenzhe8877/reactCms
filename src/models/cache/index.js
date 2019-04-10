export function setCache(obj) {
    localStorage.setItem(obj.k,obj.v)
}

export function getCache(k) {
    return localStorage.getItem(k)
}
export function clearCache(arr) {
    for(var i=0;i<arr.length;i++){
        localStorage.removeItem(arr[i]);
    }
}
