export default function generateProjectHtml (challangeName){
    const getImageName = (str) => {
      return str.toLowerCase().split(" ").join("_");
    };
    const link = getImageName(challangeName);
    const html = `<div class="project">
        <a href="./projects/${link}/index.html" target="_blank" rel="noopener noreferrer">
          <img
            class="project__thumbnail"
            src="assets/thumbnail/${link}.jpg"
            alt=""
          />
          <div class="project__detail">
            <span class="project__detail__title">
              ${challangeName}
              <div class="subtitle">Click Here</div>
            </span>
          </div>
        </a>
        </div>`;
    return html;
  };