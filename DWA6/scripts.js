import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";

let page = 1;
let matches = books;

/**
 * an object containing all variables used
 */
const data = {
  "search-Authors": document.querySelector("[data-search-authors]"),
  "list-Items": document.querySelector("[data-list-items]"),
  "search-Genre": document.querySelector("[data-search-genres]"),
  "list-button": document.querySelector("[data-list-button]"),
  "search-Cancel": document.querySelector("[data-search-cancel]"),
  "search-Overlay": document.querySelector("[data-search-overlay]"),
  "settings-Cancel": document.querySelector("[data-settings-cancel]"),
  "settings-Overlay": document.querySelector("[data-settings-overlay]"),
  "header-Search": document.querySelector("[data-header-search]"),
  "search-Title": document.querySelector("[data-search-title]"),
  "header-Setting": document.querySelector("[data-header-settings]"),
  "list-close": document.querySelector("[data-list-close]"),
  "list-active": document.querySelector("[data-list-active]"),
  "settings-Form": document.querySelector("[data-settings-form]"),
  "search-Form": document.querySelector("[data-search-form]"),
  "list-Msg": document.querySelector("[data-list-message]"),
};
/**
 *
 * @param {string} theme
 */
const toggleTheme = (theme) => {
  if (theme === "night") {
    document.documentElement.style.setProperty("--color-dark", "255, 255, 255");
    document.documentElement.style.setProperty("--color-light", "10, 10, 20");
  } else {
    document.documentElement.style.setProperty("--color-dark", "10, 10, 20");
    document.documentElement.style.setProperty(
      "--color-light",
      "255, 255, 255"
    );
  }
};

const starting = document.createDocumentFragment();


const bookFactory = () => { 
/**
 *
 * @param {string} author
 * @param {string} id
 * @param {string} image
 * @param {string} title
 * @returns {object} 
 */
  const createElement = (author, id, image, title) => {
    const element = document.createElement("button");
    element.classList = "preview";
    element.setAttribute("data-preview", id);

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;
    return element;
    };

 const bookObj = {
  createElement
 }


return bookObj;
}

/**
 * Starting preview
 */

 

// class customPreviewHtml extends HTMLElement {
//   constructor() {
//     super()
//     const previewFrag = document.createDocumentFragment();
// for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)){
//     const element = document.createElement("button");
//     element.classList = "preview";
//     element.setAttribute("data-preview", id);

//     element.innerHTML =  `
//         <img
//         class="preview__image"
//         src="${image}"/>
    
//      <div class="preview__info">
//         <h3 class="preview__title">${title}</h3>
//         <div class="preview__author">${authors[author]}</div>
//         </div>;`
//     console.log(id);
//     previewFrag.appendChild(element)
//     };

//     this.innerHTML = previewFrag
//   }
// }

//   customElements.define("preview-books", customPreviewHtml );

/**
 * Fragments for the search and filter options being created
 * @param {object} type
 * @param {string} name
 * @returns {HTMLElement}
 */

const Createfragment = (type, name) => {
  const OptHTML = document.createDocumentFragment();
  const firstElement = document.createElement("option");
  firstElement.value = "any";
  firstElement.innerText = `All ${name}`;
  OptHTML.appendChild(firstElement);

  for (const [id, name] of Object.entries(type)) {
    const element = document.createElement("option");
    element.value = id;
    element.innerText = name;
    OptHTML.appendChild(element);
  }

  return OptHTML;
};

for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)){
    starting.appendChild(createElement(author, id, image, title));
}

data["search-Genre"].appendChild(Createfragment(genres, "Genres"));

data["search-Authors"].appendChild(Createfragment(authors, "Authors"));

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.querySelector("[data-settings-theme]").value = "night";
  toggleTheme("night");
} else {
  document.querySelector("[data-settings-theme]").value = "day";
  toggleTheme("day");
}

data["list-button"].innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
data["list-button"].disabled = matches.length - page * BOOKS_PER_PAGE > 0;

data["list-button"].innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${
      matches.length - page * BOOKS_PER_PAGE > 0
        ? matches.length - page * BOOKS_PER_PAGE
        : 0
    })</span>
`;

data["search-Cancel"].addEventListener("click", () => {
  data["search-Overlay"].open = false;
});

data["settings-Cancel"].addEventListener("click", () => {
  data["settings-Overlay"].open = false;
});

data["header-Search"].addEventListener("click", () => {
  data["search-Overlay"].open = true;
  data["search-Title"].focus();
});

data["header-Setting"].addEventListener("click", () => {
  data["settings-Overlay"].open = true;
});

data["list-close"].addEventListener("click", () => {
  data["list-active"].open = false;
});

data["settings-Form"].addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);

  toggleTheme(theme);

  data["settings-Overlay"].open = false;
});

data["search-Form"].addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    let genreMatch = filters.genre === "any";

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    if (
      (filters.title.trim() === "" ||
        book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === "any" || book.author === filters.author) &&
      genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  matches = result;

  if (result.length < 1) {
    data["list-Msg"].classList.add("list__message_show");
  } else {
    data["list-Msg"].classList.remove("list__message_show");
  }

  data["list-Items"].innerHTML = "";
  const newItems = document.createDocumentFragment();
  /**
   * filter display
   */
  for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
    newItems.appendChild(createElement(author, id, image, title));
  }

  data["list-Items"].appendChild(newItems);
  data["list-button"].disabled = matches.length - page * BOOKS_PER_PAGE < 1;

  data["list-button"].innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${
          matches.length - page * BOOKS_PER_PAGE > 0
            ? matches.length - page * BOOKS_PER_PAGE
            : 0
        })</span>
    `;

  window.scrollTo({ top: 0, behavior: "smooth" });
  data["search-Overlay"].open = false;
});

data["list-button"].addEventListener("click", () => {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(
    page * BOOKS_PER_PAGE,
    (page + 1) * BOOKS_PER_PAGE
  )) {
    fragment.appendChild(createElement(author, id, image, title));
  }

  data["list-Items"].appendChild(fragment);
  page += 1;
});

/**
 * Preview of the data
 */

data["list-Items"].addEventListener("click", (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      let result = null;

      for (const singleBook of books) {
        if (result) break;
        if (singleBook.id === node?.dataset?.preview) result = singleBook;
      }

      active = result;
    }
  }

  if (active) {
    document.querySelector("[data-list-active]").open = true;
    document.querySelector("[data-list-blur]").src = active.image;
    document.querySelector("[data-list-image]").src = active.image;
    document.querySelector("[data-list-title]").innerText = active.title;
    document.querySelector("[data-list-subtitle]").innerText = `${
      authors[active.author]
    } (${new Date(active.published).getFullYear()})`;
    document.querySelector("[data-list-description]").innerText =
      active.description;
  }
});
