
export const ADD_BREADCRUMB='ADD_BREADCRUMB';
export const DELETE_BREADCRUMB='DELETE_BREADCRUMB';

export function add_breadcrumb(title,path,checked,id) {
    return{
        type:ADD_BREADCRUMB,
        payload:{
            title:title,
            path:path,
            checked:checked,
            id:id
        }
    }
}

export function delete_breadcrumb(title,path,checked,id) {
    return{
        type:DELETE_BREADCRUMB,
        payload:{
            title:title,
            path:path,
            checked:checked,
            id:id
        }
    }
}
