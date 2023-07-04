import resume from '../fonts/resume.pdf';

// Replace 'resume.pdf' with the actual file name and extension of your resume
const resumeFile = 'resume.pdf';

// Replace 'path/to/resume.pdf' with the actual path to your resume file
const resumeFilePath = {resume};

// Get the download link element
const downloadLink = document.getElementById('download-link');

// Set the download link's href attribute to the resume file path
downloadLink.setAttribute('href', resumeFilePath);

// Set the download attribute to the resume file name
downloadLink.setAttribute('download', resumeFile);
