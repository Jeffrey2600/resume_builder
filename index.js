function generateResume() {
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const skills = document.getElementById("skills").value.split(",");
  const education = document.getElementById("education").value;
  const work = document.getElementById("work").value;
  const languages = document.getElementById("languages").value.split(",");
  const interests = document.getElementById("interests").value.split(",");

  document.getElementById("user-name").textContent = name;
  document.getElementById("user-title").textContent = title;
  document.getElementById("user-email").textContent = `Email: ${email}`;
  document.getElementById("user-phone").textContent = `Phone: ${phone}`;
  document.getElementById("education-details").textContent = education;
  document.getElementById("work-details").textContent = work;

  const skillsList = document.getElementById("skills-list");
  const languagesList = document.getElementById("languages-list");
  const interestsList = document.getElementById("interests-list");

  skillsList.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join("");
  languagesList.innerHTML = languages.map(language => `<li>${language.trim()}</li>`).join("");
  interestsList.innerHTML = interests.map(interest => `<li>${interest.trim()}</li>`).join("");

  document.getElementById("resume-container").style.display = "flex";
}

function downloadResume() {
  const element = document.getElementById("resume-container");
  const options = {
    margin: 1,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();
}
