document.querySelectorAll("[data-profile-name]").forEach((element) => {
  element.textContent = PROFILE.name;
});

document.querySelectorAll("[data-email-link]").forEach((element) => {
  if (PROFILE.email.includes("@")) {
    element.href = `mailto:${PROFILE.email}`;
  } else {
    element.hidden = true;
  }
});

document.querySelectorAll("[data-github-link]").forEach((element) => {
  if (PROFILE.github.startsWith("https://")) {
    element.href = PROFILE.github;
    element.target = "_blank";
    element.rel = "noreferrer";
  } else {
    element.hidden = true;
  }
});

document.querySelectorAll("[data-linkedin-link]").forEach((element) => {
  if (PROFILE.linkedin.startsWith("https://")) {
    element.href = PROFILE.linkedin;
    element.target = "_blank";
    element.rel = "noreferrer";
  } else {
    element.hidden = true;
  }
});

document.title = `${PROFILE.name} — Full-Stack Developer`;
document.querySelector("#year").textContent = new Date().getFullYear();
