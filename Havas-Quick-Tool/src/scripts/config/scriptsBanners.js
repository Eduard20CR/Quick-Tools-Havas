const scriptsBanners = [
  {
    id: "banners-1",
    script: function (colorSelected) {
      const anchors = document.getElementsByTagName("a");
      [...anchors].forEach((e) => {
        e.style.backgroundColor = colorSelected == "" ? "red" : colorSelected;
        e.style.color = "#ffffff";
      });
    },
    title: "Centrar Banner",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sit! Voluptatem excepturi animi, ipsa et repudiandae quasi illum accusamus soluta.",
    scope: "banners",
    category: "copy",
  },
];

export { scriptsBanners };
