# Base URL Crawling	
Out of curiosity I wanted a way to see just how connected the web is. 	
I build this very simple tool that scrapes base URLs off pages and continues to do this same thing on every page it finds. 	
I was quite surprised to see the infinite number of pages I get to by just putting in googles home page. 	
The tool is hosted on [here on github pages](http://baseurlscrape.tk/), so anyone is welcome to mess around with it.

## Current Problem
Reverse proxy has a limit of 50,000 requests per day so if the site is not working properly it could be because that max has been hit for the day. Working on a local version that you can run without being dependent on a remote cors proxy.