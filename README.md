# Readit


### Content and Requirements

This repository contains html, css and javascript for a webapp that searches and displays posts from a subreddit.

I have not included bootstrap files. Bootstrap cdn has been linked in index.html. Therefore, it requires internet connection to load. Similarly, fonts like Montserrat have been incorporated from Google fonts which again require internet connectivity.

### Resources Used

The logo of the page has been designed from [freelogodesign.org](https://www.freelogodesign.org/).

The favicon has been generated using the logo from [favicon-generator.org](https://www.favicon-generator.org/).

### Working

The UI is simple and easy to use.  
Initially, the page has a form which is based on bootstrap-card with two fields:  

- The keyword that the the user wants to search  
- The number of posts that should be displayed

When the user fills these fields and hits 'search', an EventListener gets triggered in index.js which calls https://www.reddit.com/search.json?q=*query1*&limit=*query2*, where *query1* and *query2* are the values of the two fields entered by the user.   
Once the  json has been fetched, the index.js extracts relevant data like preview.images[], title and selftext. This data is then truncated and displayed on bootstrap-cards.  
In case, a post has no preview image, the standard reddit logo is displayed.
