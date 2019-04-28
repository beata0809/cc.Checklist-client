import Api from './Api/Api';

class LoginPage {
  static render() {
    document.body.style.backgroundImage = `url(./src/img/background.jpg)`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    document.querySelector('#root').innerHTML = `
            <div id="LoginPage">
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
                                    <label>E-mail</label>
                                    <input id=email type="text" class="form-control" placeholder="E-mail">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input id=pass type="password" class="form-control" placeholder="Password">
                                    <p id="info"></p>
                                </div>
                                <button type="submit" id="loginBtn" class="btn btn-black">Login</button>
                                <button type="submit" id="registerBtn" class="btn btn-secondary">Register</button>
                            </form>
                        </div>

                </div>
            </div>
        `;

    document.querySelector('#loginBtn').addEventListener('click', async e => {
      e.preventDefault();
      const loginData = {
        email: document.querySelector('input[type=text]').value,
        password: document.querySelector('input[type=password]').value,
      };
      const user = await Api.Login(loginData);

      if (user) {
        const data = await Api.getUserById(user._id);
        localStorage.setItem('user', JSON.stringify(data));
        window.location.hash = '#/lists';
      } else notValid();
    });

    document.querySelector('#registerBtn').addEventListener('click', async e => {
      e.preventDefault();
      window.location.hash = '#/register';
    });


    function notValid() {
      const fields = ['email', 'pass'];
      fields.forEach(field => {
        let classes = document.querySelector(`#${field}`).classList;
        if (!classes.contains("notvalid")) classes.toggle("notvalid");
      });
      document.querySelector(`#info`).innerHTML = 'Invalid email or password';
    }
  }
}

export default LoginPage;
