/*URL validation */
/*Write a program using a regex that matches valid URLs.Valid URLs should start with either http:// or https//. followed by one or more letters,digits,or special characters,followed by a 
dot,followed by one or more letters.print a message indicating the input matches the conditions or not. */


function validateURL(url){
    const regex = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/;
    
    if(regex.test(url)){
        console.log("Input matches the conditions: Valid URL");
    }
    else{
      console.log("Input does not match the conditions: Invalid URL");
    }
    
}

//Testing 

validateURL("http://www.testing1.com");
validateURL("https://www.testing2.com");
validateURL("sptth://www.testing3.com");
validateURL("http://127.0.0.1:8080");
validateURL("https://subdomain.dsfsf.com/page");
validateURL("ftp://www.sdfdsfdsfd.com");