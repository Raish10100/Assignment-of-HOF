 /*Linkedin Profile URL Validator. */
/*As a developer,you want to create a program that validates Linkedin profile URLs to ensure that they are formatted correctly and contain only valid characters.Valid Linkedin profile URLs should start with https://www.linkedin.com/in/ followed by a combination of one or more letters,digits,underscores.or hyphens,and end with a letter or
digit.The length of the profile ID should be between 5 and 30 characters.

The program should use a regular expression to match valid linkedin profile URLs,and should not match URLs that do not follow this format or contain invalid charactes.The program should provide clear output messages indicating whether each input is a valid Linkedin profile Url or not.*/


function validateLinkedInURL(url){
const regex = /^https:\/\/www.linkedin.com\/in\/[A-Za-z0-9_]{5,30}[A-Za-z0-9]$/;

if (regex.test(url)) {
    console.log("Input is a valid LinkedIn profile URL.");
  } else {
    console.log("Input is not a valid LinkedIn profile URL.");
  }
}

// Testing

validateLinkedInURL("https://www.linkedin.com/in/Rakesh123");
  validateLinkedInURL("https://www.linkedin.com/in/aryan-ambani");
  validateLinkedInURL("https://www.linkedin.com/in/12345");
  validateLinkedInURL("https://www.linkedin.com/in/mokeshambani");
  validateLinkedInURL("https://www.linkedin.com/in/Renishkhan");
  validateLinkedInURL("https://www.linkedin.com/in/invalid@user");
  