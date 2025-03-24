document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Retrieve user input values
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const email = document.getElementById('email').value;
  const linkedin = document.getElementById('linkedin').value;
  const summary = document.getElementById('summary').value;
  const experience = document.getElementById('experience').value.split(',');
  const education = document.getElementById('education').value.split(',');
  const skills = document.getElementById('skills').value.split(',');
  const hardskills = document.getElementById('hardskills').value.split(',');
  const achievements = document.getElementById('achievements').value.split(',');

  const profilePic = document.getElementById('profilePic').files[0];

  const resumePreview = document.getElementById('resumePreview');
  resumePreview.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
      <h3>Profile Summary</h3>
      <p>${summary}</p>
      <h3>Work Experience</h3>
      <ul>${experience.map(item => `<li>${item}</li>`).join('')}</ul>
      <h3>Education</h3>
      <ul>${education.map(item => `<li>${item}</li>`).join('')}</ul>
      <h3>Soft Skills</h3>
      <ul>${skills.map(item => `<li>${item}</li>`).join('')}</ul>
      <h3>Hard Skills</h3>
      <ul>${hardskills.map(item => `<li>${item}</li>`).join('')}</ul>
      <h3>Achievements</h3>
      <ul>${achievements.map(item => `<li>${item}</li>`).join('')}</ul>
  `;

  if (profilePic) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const imgElement = document.createElement('img');
          imgElement.src = e.target.result;
          imgElement.style.width = '100px';
          imgElement.style.borderRadius = '50%';
          resumePreview.prepend(imgElement);
      };
      reader.readAsDataURL(profilePic);
  }
});

// Toggle templates
document.getElementById('classicTemplate').addEventListener('click', () => {
  document.getElementById('resumePreview').className = 'classic-template';
});

document.getElementById('modernTemplate').addEventListener('click', () => {
  document.getElementById('resumePreview').className = 'modern-template';
});

// Download PDF
document.getElementById('downloadResume').addEventListener('click', () => {
  const element = document.getElementById('resumePreview');
  html2pdf().from(element).save('resume.pdf');
});
