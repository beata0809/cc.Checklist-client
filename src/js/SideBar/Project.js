class Project{
    constructor(name){
        this.element = document.createElement('section');
        this.name = name;
    }

    render(){
        document.querySelector('#accordionExample').appendChild(this.element);
        this.element.innerHTML =`
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${this.name}
                  </button>
                </h2>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  Coś
                </div>
              </div>
            </div>
        `
    }
}

export default Project;