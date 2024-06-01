
export const handleHome = (e) => {
  const home = document.getElementById("hero");
  e.preventDefault();
  home && home.scrollIntoView({behavior: "smooth", block: "start"});
}

export const handleAbout = (e) => {
  const about = document.getElementById("about");
  e.preventDefault();
  about && about.scrollIntoView({behavior: "smooth", block: "start"});
}

export const handleContact = (e) => {
  const contact = document.getElementById("contact");
  e.preventDefault();
  contact && contact.scrollIntoView({behavior: "smooth", block: "start"});
}
