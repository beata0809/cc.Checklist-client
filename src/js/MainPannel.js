class MainPannel {
  static render() {

    const element = document.createElement('section');
    element.id = 'MainPannel';
    element.innerHTML = `
        <div id='MainPannel'>
          <div class='header'>
            <h1>Project 1</h1>
          </div>
          <div class='lists'>
            <div class='list'>
              <h2>List 1</h2>
              <div class='tasks'>
                <input type="checkbox">Umyć zęby!</input><br>
                <input type="checkbox">Wyjść z psem</input><br>
                <input type="checkbox">Umyć naczynia</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
                <input type="checkbox">Udemy - React - Udemy - React - Udemy - React</input><br>
              </div>
            </div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
            <div class='list'></div>
          </div>
        </div>
        `;
    document.querySelector('.wrapper').appendChild(element);

  }


}

export default MainPannel;
