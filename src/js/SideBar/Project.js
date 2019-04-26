class Project {
  constructor(name) {
    this.element = document.createElement('section');
    this.name = name;
    console.log(name);
  }

  render() {
    document.querySelector('#accordionExample').appendChild(this.element);
    this.element.innerHTML = `
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-${
                    this.name
                  }" aria-expanded="true" aria-controls="collapse-${this.name}">
                    ${this.name}
                  </button>
                </h2>
              </div>

              <div id="collapse-${
                this.name
              }" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  Coś
                </div>
                <div class="card-body">
                  Coś
                </div>
              </div>
            </div>
        `;
  }
}

export default Project;
