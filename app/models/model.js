/**
 * Created by Akhil on 24-07-2016.
 */

export function model(param) {
    return function (target, name, decor) {
        Object.assign(target.prototype,
            {
                endpoint: target.name,
                methods: {get: 'get', put: 'put', post: 'post', 'delete': 'delete'}
            }
            , param)
    }
}