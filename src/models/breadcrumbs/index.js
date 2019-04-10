
const breadkey  ='breadcrumbs'


export function add_breadcrumb(item) {
    let list = localStorage.getItem(breadkey);

    if(list){
        list = JSON.parse(list);

        let arr=[]
        for(var m=0;m<list.length;m++){
            list[m].checked=false;
            arr.push(list[m].title)
        }

        if(arr.indexOf(item.title)==-1){
            list.push(item);
        }

        for(var m=0;m<list.length;m++){
            if(item.title==list[m].title){
                list[m].checked=true;
            }
        }

    }else{
        list=[item]
    }

    localStorage.setItem(breadkey,JSON.stringify(list))
    return list;
}

export function get_breadcrumb() {
    let list = localStorage.getItem(breadkey);
    if(list){
        return JSON.parse(list);
    }
    return [];

}

export function delete_breadcrumb(item) {
    let list = localStorage.getItem(breadkey);

    if(!list)return;
    list = JSON.parse(list);

    let arr=[];
    for(let i=0;i<list.length;i++){
        var v = list[i];
        if(v.path!=item.path){
            arr.push(v);
        }
    }
    localStorage.setItem(breadkey,JSON.stringify(arr))
    return arr;
}
export function clear_breadcrumb(item) {
    localStorage.removeItem(breadkey)
}