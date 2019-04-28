import Api from './Api/Api';

class LoginPage {
  static async login(e) {
    e.preventDefault();
    const loginData = {
      email: document.querySelector('input[type=text]').value,
      password: document.querySelector('input[type=password]').value,
    };
    console.log(loginData);
    const user = await Api.Login(loginData);

    if (user) {
      const data = await Api.getUserById(user._id);
      localStorage.setItem('user', JSON.stringify(data));
      window.location.hash = '#/lists';
    } else window.alert('Invalid email or password');
  }

  static async register(e) {
    e.preventDefault();
    console.log(1);
    const registerData = {
      email: document.querySelector('input[type=text]').value,
      password: document.querySelector('input[type=password]').value,
    };
    const account = await Api.createUser(registerData);
    console.log(account);
    if (account.status == 400) {
      window.alert(account.data);
    } else {
      document.querySelector('input[type=text]').value = null;
      document.querySelector('input[type=password]').value = null;
      window.alert('Account created. Now you can log in.');
    }
  }

  static render() {
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
