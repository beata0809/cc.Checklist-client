class UserBar{
    constructor(elementId) {
        this.element = document.createElement('section');
        this.element.id = elementId;
    }

    render(){
        document.querySelector('#root').appendChild(this.element);
        this.element.innerHTML = `
        <div class="navbar-div">
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-1 text-right">
                        <a href="#"><h6 class="text-white"> Wyloguj </h6></a> 
                        <a href="#"><h6 class="text-white"> Zmień hasło </h6></a>
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
        </div>
        `
    }
}

export default UserBar;