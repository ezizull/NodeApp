class Apps {
  constructor() {
    this.links = document.querySelectorAll(".nav-link");
    this.navbar = document.querySelector("nav");
    this.eventHandle();
  }

  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {});

    var {links, navbar} = this;

    window.onscroll = function () {
      // pageYOffset or scrollY
      if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
        links.forEach((v) => {
          v.classList.add("scrolled");
        });
      } else {
        navbar.classList.remove("scrolled");
        links.forEach((v) => {
          v.classList.remove("scrolled");
        });
      }
    };
  }
}

class Todos {
  constructor() {
    this.task = document.querySelector("#tasks");
    this.intodo = document.querySelector("#intodo");
    this.submit = document.querySelector("#submit");
    this.input = document.querySelector("#newtask input");
    this.eventHandle();
  }

  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {});

    let {task, intodo, submit, input} = this;

    if (intodo != null && submit !== null && task !== null && input !== null) {
      intodo.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          document.getElementById("submit").click();
        }
      });

      submit.onclick = function (e) {
        if (input.value.length == 0) {
          alert("Input Hewan Terlebih Dahulu");
        } else {
          task.innerHTML += `
				   <div class="task">
					   <div class="name">
						   <span id="taskname">${document.querySelector("#newtask input").value}</span>
					   </div>
					   <div class="delete">
						   <button class="icon">
							   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
								   <path fillRule="evenodd"
									   d="M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
							   </svg>
						   </button>
					   </div>
				   </div>
				   `;

          let current_task = document.querySelectorAll(".delete");
          for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
              this.parentNode.remove();
            };
          }
        }
        // e.preventDefault(); // uncomments to use todo
      };
    }
  }
}

class Photos {
  constructor() {
    this.API_KEY = "563492ad6f91700001000001f277827d3d4546d99cea7b770bbbf482";
    this.photorow = document.querySelector(".photo .flexrow");
    this.addmore = document.querySelector("#addmore");
    this.icon = document.querySelector("#icon");
    this.pageIndex = 0;
    this.eventHandle();
  }

  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {});

    let {addmore, photorow, icon} = this;

    if (addmore !== null && icon !== null && photorow !== null) {
      addmore.addEventListener("click", (e) => {
        setTimeout(() => {
          this.AddMore(e);
          icon.classList.add("on");
        }, 50);
        icon.classList.remove("on");

        // console.log('success')
      });
    }
  }

  async getImg(pageIndex) {
    const baseURL = `https://api.pexels.com/v1/search?query=animals&page=${pageIndex}&per_page=6`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
    console.log(data);
  }

  async fetchImages(baseURL) {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this.API_KEY,
      },
    });
    const data = await response.json();
    return data;
  }

  GenerateHTML(photos) {
    const photocol = this.photorow.querySelectorAll(".flexcol");
    photos.forEach((photo, index) => {
      photocol[index % photocol.length].innerHTML += `
				<img class="picture"
					src="${photo.src.large}"
				alt="gambar">
				`;
    });
    // console.log(photocol);
  }

  AddMore() {
    let index = ++this.pageIndex;
    this.getImg(index);
  }
}

const App = new Apps();
const Todo = new Todos();
const Photo = new Photos();
