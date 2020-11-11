import Challanges from "./scripts/class.js";
import generateProjectHtml from "./scripts/projectGenerator.js";

const projectShowcase = document.querySelector(".project-showcase");

/* Insert New Challanges
challanges.addChallange("Chat app CSS illustration");
The folder name should be chat_app_css_illustration
All lower case and with underscore "_"
Same goes for the thumbnail chat_app_css_illustration.jpg
Place latest at the top
*/
const challanges = new Challanges();
challanges.addChallange("manage landing page")
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

const challangeArr = challanges.viewChallange();
challangeArr.forEach((element) => {
  projectShowcase.innerHTML += generateProjectHtml(element);
});
