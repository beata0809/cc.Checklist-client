import Api from './Api/Api';

class RegisterPage {
  static async register(e) {
    e.preventDefault();

    if (this.validate()) {
      const registerData = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#pass').value,
      };

      const newUser = await Api.createUser(registerData);
      console.log(newUser);
      if (!newUser.data) {
        window.alert('New account was created. Now you can log in.');
        window.location.hash = '#';
      } else {
        window.alert(newUser.data);
      }
    }
  }

  static validate() {
    const fields = ['name', 'email', 'pass', 'pass2'];
    let valid = true;

    fields.forEach(field => {
      let validField = document.querySelector(`#valid${field}`);
      let classes = document.querySelector(`#${field}`).classList;
      if (!document.querySelector(`#${field}`).value) {
        if (!classes.contains('notvalid')) classes.toggle('notvalid');
        valid = false;
        validField.innerHTML = 'Field cannot be empty';
      } else {
        if (classes.contains('notvalid')) classes.toggle('notvalid');
        validField.innerHTML = '';
      }
    });

    const validpass2 = document.querySelector('#validpass2');
    let classes1 = document.querySelector(`#pass`).classList;
    let classes2 = document.querySelector(`#pass2`).classList;
    if (valid) {
      if (document.querySelector('#pass').value !== document.querySelector('#pass2').value) {
        if (!classes1.contains('notvalid')) classes1.toggle('notvalid');
        if (!classes2.contains('notvalid')) classes2.toggle('notvalid');

        valid = false;
        validpass2.innerHTML = 'The password and its confirm are not the same';
      } else if (!document.querySelector(`#pass`).value & !document.querySelector(`#pass2`).value) {
        validpass2.innerHTML = '';
      }
    }
    return valid;
  }

  static render() {
    document.querySelector('#root').innerHTML = `
            <div id="RegisterPage">
              <div class="register-main">
                <div class="register-form">
                  <h2>Create new account</h2>
                  <h3>and start using our great app</h3>
                  <hr>
                  <form>
                    <div class="form-group">
                      <label>Name</label>
                      <input id="name" type="text" class="form-control" placeholder="Name">
                      <p id="validname"></p>
                    </div>
                    <div class="form-group">
                      <label>E-mail</label>
                      <input id="email" type="text" class="form-control" placeholder="E-mail">
                      <p id="validemail"></p>
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input id="pass" type="password" class="form-control" placeholder="Password">
                      <p id="validpass"></p>
                    </div>
                    <div class="form-group">
                      <label>Confirm Password</label>
                      <input id="pass2" type="password" class="form-control" placeholder="Confirm Password">
                      <p id="validpass2"></p>
                    </div>
                    <button type="submit" id="registerBtn" class="btn btn-secondary">REGISTER</button>
                  </form>
                  <div class="link">
                  <a href=#>I already have an account</a>
                  </div>
                </div>
              </div>
            </div>
        `;

    document.querySelector('#registerBtn').addEventListener('click', async e => this.register(e));
  }
}

export default RegisterPage;
