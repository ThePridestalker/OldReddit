// reddit.com
let redditUrl = window.location.hostname.toString().substring(4);

// https://
let https = window.location.href.toString().split(window.location.hostname)[0];

//the rest of the url
let rest = window.location.href.toString().split(window.location.hostname)[1];

//Opens the new url in the actual tab
window.location = https + "old." + redditUrl + rest; 
