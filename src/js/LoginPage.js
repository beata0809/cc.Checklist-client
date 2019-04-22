class LoginPage {
    constructor(elementId) {
        this.element = document.createElement('div');
        this.element.id = elementId;
    }

    render() {
        document.querySelector('#root').appendChild(this.element);
        document.body.style.backgroundImage = `url(./src/img/background.jpg)`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        
        this.element.innerHTML = `
            <div class="sidenav">
                <div class="login-main-text">
                    <h1>TO DO LIST</h1>
                    <p><b>Welcome to our amazing checklist website!</b><br>Organizing your work will be so much simplier with it.</p>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div class="main">
                
                    <div class="login-form">
                        <form>
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control" placeholder="User Name">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-black">Login</button>
                            <button type="submit" class="btn btn-secondary">Register</button>
                        </form>
                    </div>
                
            </div>
        `
    }
}

export default LoginPage;