/**
 * Created by Akhil on 24-07-2016.
 */

export function rest(param) {
    return function (target, name, decor) {
        Object.assign(target.prototype,
            {
                endpoint: target.name,
                methods: {GET: 'get', PUT: 'put', POST: 'post', 'DELETE': 'delete'}
            }
            , param)
    }
}