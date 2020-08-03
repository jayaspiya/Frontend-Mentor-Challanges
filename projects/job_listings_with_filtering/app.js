fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then(function (output) {
    main(output);
  })
  .catch(function (error) {
    console.log(error);
  });

const main = (arr) => {
  arr.forEach((item) => {
    addList(item);
  });
};
const mainList = document.querySelector(".main");
const addList = (objectHere) => {
  const companyName = objectHere.company;
  const imageLocation = objectHere.logo;
  const companyPosition = objectHere.position;
  const lastOnline = objectHere.postedAt;
  const contractType = objectHere.contract;
  const serviceLocation = objectHere.location;
  const isNew = objectHere.new;
  const isFeatured = objectHere.featured;
  const skillslist = [objectHere.role, objectHere.level];

  objectHere.languages.forEach((element) => {
    skillslist.push(element);
  });
  objectHere.tools.forEach((element) => {
    skillslist.push(element);
  });
  makeAListtem(
    companyName,
    imageLocation,
    companyPosition,
    lastOnline,
    contractType,
    serviceLocation,
    skillslist,
    isNew,
    isFeatured
  );
};

const makeAListtem = (
  companyName,
  imageLocation,
  companyPosition,
  lastOnline,
  contractType,
  serviceLocation,
  skillslist,
  isNew,
  isFeatured
) => {
  let itemList = document.createElement("div");

  itemList.className = "item-list";
  let htmlForSkills = "";
  let labelHtml = "";
  if (isNew && isFeatured) {
    labelHtml = `<div class="item-list__user-detail__details__name__highlight">
<div
  class="item-list__user-detail__details__name__highlight--new"
>
  NEW!
</div>
<div
  class="item-list__user-detail__details__name__highlight--featured"
>
  FEATURED
</div>
</div>`;
    console.log("hello");
    itemList.className += " featured-class";
  } else if (isNew) {
    labelHtml = `<div class="item-list__user-detail__details__name__highlight">
    <div class="item-list__user-detail__details__name__highlight--new">
      NEW!
    </div>
  </div>`;
  } else if (isFeatured) {
    labelHtml = `<div class="item-list__user-detail__details__name__highlight">
      <div class="item-list__user-detail__details__name__highlight--featured">
        FEATURED
      </div>
    </div>`;
    itemList.className += " featured-class";
  }
  skillslist.forEach((element) => {
    htmlForSkills += `<div class="item-list__skills__skill-list">
    ${element}
  </div>`;
  });
  let html = `
  <div class="item-list__user-detail">
    <img src="${imageLocation}" alt = "logo"/>
    <div class="item-list__user-detail__details">
      <div class="item-list__user-detail__details__name">
        ${companyName} ${labelHtml}
      </div>
      <div class="item-list__user-detail__details__job-title">
        ${companyPosition}
      </div>
      <div class="item-list__user-detail__details__more-info">
        <div
          class="item-list__user-detail__details__more-info__last-online"
        >
          ${lastOnline}
        </div>
        <div
          class="item-list__user-detail__details__more-info__dot"
        ></div>
        <div
          class="item-list__user-detail__details__more-info__contract"
        >
          ${contractType}
        </div>
        <div
          class="item-list__user-detail__details__more-info__dot"
        ></div>
        <div
          class="item-list__user-detail__details__more-info__location"
        >
          ${serviceLocation}
        </div>
      </div>
    </div>
  </div>
  <div class="item-list__skills">
    ${htmlForSkills}
  </div>
`;
  itemList.innerHTML = html;
  mainList.appendChild(itemList);
};
