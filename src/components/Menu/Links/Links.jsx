export const internalLinks = [
  {
    url: "/",
    component: "home",
  },
  {
    url: "/about-us/",
    component: "about us",
  },
  {
    url: "/process/",
    component: "process",
  },
  {
    url: "/gallery/",
    component: "gallery",
  },
  {
    url: "#study-abroad",
    component: "study abroad",
    dropdown: true,
    dropdownLinks: [
      { subComponent: "australia", url: "/study-in/countries/australia/" },
      { subComponent: "usa", url: "/study-in/countries/usa/" },
      { subComponent: "uk", url: "/study-in/countries/uk/" },
      { subComponent: "canada", url: "/study-in/countries/canada/" },
      { subComponent: "new zealand", url: "/study-in/countries/new-zealand/" },
      { subComponent: "japan", url: "/study-in/countries/japan/" },
      { subComponent: "korea", url: "/study-in/countries/korea/" },
    ],
  },
  {
    url: "#our-courses",
    component: "our courses",
    dropdown: true,
    dropdownLinks: [
      { subComponent: "ielts", url: "/courses/ielts" },
      { subComponent: "pte-a", url: "/courses/pte-a" },
      { subComponent: "sat", url: "/courses/sat" },
      { subComponent: "ged", url: "/courses/ged" },
      { subComponent: "toefl", url: "/courses/toefl" },
    ],
  },

  {
    url: "/contact-us",
    component: "contact us",
  },
];
