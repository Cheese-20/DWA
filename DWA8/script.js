const   dataFactories = ()=>{
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

      return {
        createElement,
        toggleTheme
      }
    
}