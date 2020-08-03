class Challanges {
  constructor() {
    this.myChallanges = [];
  }
  addChallange(challangeName) {
    this.myChallanges.push(challangeName);
  }
  viewChallange() {
    return this.myChallanges;
  }
}
const generateProjectHtml = (challangeName) => {
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

const projectShowcase = document.querySelector(".project-showcase");
const challanges = new Challanges();
challanges.addChallange("Chat app CSS illustration");
challanges.addChallange("Job listings with filtering");
challanges.addChallange("Single Price Grid Component");
challanges.addChallange("Intro component with sign-up form");
challanges.addChallange("Base Apparel coming soon page");
challanges.addChallange("Pricing component with toggle");
challanges.addChallange("Article preview component");
challanges.addChallange("Rock, Paper, Scissors game");
challanges.addChallange("Fylo data storage component");
challanges.addChallange("Social media dashboard with theme switcher");
challangeArr = challanges.viewChallange();
challangeArr.forEach((element) => {
  projectShowcase.innerHTML += generateProjectHtml(element);
});
