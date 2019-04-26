class NotFound {
    static render() {
        document.body.style.backgroundImage = `url(./src/img/background.jpg)`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';

        document.querySelector("#root").innerHTML = `
            <div id="notFound">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        `;
    }
};

export default NotFound;