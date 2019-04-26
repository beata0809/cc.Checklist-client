class UserBar {
  static render() {
    const element = document.createElement('section');
    element.id = 'UserBar';
    element.innerHTML = `
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4 text-right">
                        <a href="#"><h5 class="text-white"> Wyloguj </h5></a>
                        <a href="#"><h5 class="text-white"> Zmień hasło </h5></a>
                    </div>
                </div>
                <nav class="navbar navbar-light float-right text-right pr-3
                style="background-color: rgb(100, 0, 0);">
                    <i class="fas fa-user-circle"></i>
                    <h4>User</h4>
                    <button class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"> </span>
                    </button>
                </nav>
            </div>
        `;
    document.getElementById('app').appendChild(element);
  }
}

export default UserBar;
