Send from Omnibox
=================

Version 0.1

Compose an email in Chrome's address bar.

[Click here to install from the Chrome Web Store!](https://chrome.google.com/webstore/detail/send-from-omnibox/pfebpahfiklkbdgdacdcdojjejhpbkgc)

##Examples

```
. matt@nlts.co sub What's up?, I thought you'd enjoy this picture: http://bit.ly/6kEfZ0
```

opens this window:
![alt text](http://i.imgur.com/6VTcHTt.png "The pic is a 1906 panorama of SF after the earthquake.")

###Creating email shorcuts

Save m in localstorage for future use:

```
. set m, matt@nlts.co
```

```
. m sub What's up?, I thought you'd enjoy this picture: http://bit.ly/6kEfZ0
```

###The subject is optional

```
. m We're meeting at 3 in room 301.
```

##Installation

[Click here to install from the Chrome Web Store,](https://chrome.google.com/webstore/detail/send-from-omnibox/pfebpahfiklkbdgdacdcdojjejhpbkgc) or:
- Put everything in a directory
- Visit chrome://extensions
- Check the "Developer mode" box at the top right
- Click the "Load unpacked extension..." button and select your directory

##Planned updates
- Newline support
- Rewrite using regexes
- Message templates/shortcuts
- Allow changing of "from" address
- Settings page

##MIT Licensed
```
Copyright (c)2013 Matthew Townsend

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


