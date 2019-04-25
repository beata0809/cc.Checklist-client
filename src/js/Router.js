import NotFound from './404';

export default (url, routes) => {
    for (let route in routes) {
        if (url === route) {
            return routes[route];
        }
    }
    return NotFound;
};