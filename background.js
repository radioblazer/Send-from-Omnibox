// "Send From Omnibox" Chrome extension
// MIT Licensed
// matt@nlts.co, 2012 

// chrome.omnibox code modified from "omnix" omnibox example,
// which came with the following license:
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Source URL:
// http://developer.chrome.com/extensions/samples.html#be68e4d262d74d2457999fc402f5bf5e


chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
  });


// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    address = text.substr(0,text.indexOf(' '));
    // save a custom email address shortcut
    if (address == "set") {
      message = text.substr(text.indexOf(' ')+1);
      key = message.substr(0,message.indexOf(' ')-1);
      value = message.substr(message.indexOf(' ')+1);
      setItem(key, value);
    }
      else{
      if (getItem(address) !== null) {
        address = getItem(address);
      }
      var subject = "";
      var message = text.substr(text.indexOf(' ')+1);
      // creates subject if "sub ... ," exists in message
      if (message.substr(0,3) === "sub") {
        subject = message.substr(4,message.indexOf(',')-4);
        message = message.substr(message.indexOf(',')+2);
      }
      if (subject !== "") {
        subject = "?subject=" + subject;
        message = "&body=" + message;
      }
      else
      {
        message = "?body=" + message;
      }
      chrome.windows.create({url: "mailto:"+address+subject+message, width: 760, height: 600});
  }
  });
  
// localstorage code from chromnibar extension source, MIT licensed, found at
// http://code.google.com/p/chromnibar/
var logging  = false;

  function setItem(key, value) {
      try {
          log("Inside setItem:" + key + ":" + value);
          window.localStorage.removeItem(key);
          window.localStorage.setItem(key, value);
      }catch(e) {
          log("Error inside setItem");
          log(e);
      }
      log("Return from setItem" + key + ":" +  value);
  }
  // Gets the item from local storage with the specified key...
  function getItem(key) {
      var value;
      log('Get Item:' + key);
      try {
          value = window.localStorage.getItem(key);
      }catch(e) {
          log("Error inside getItem() for key:" + key);
          log(e);
          value = "null";
      }
      log("Returning value: " + value);
      return value;
  }
  // Clears all the key value pairs in the local storage
      function clearStrg() {
      log('about to clear local storage');
      window.localStorage.clear();
      log('cleared');
  }

  function log(txt) {
      if(logging) {
          console.log(txt);
      }
  }

  function removeItem(key) {
      try {
          log("Inside setItem:" + key + ":" + value);
          window.localStorage.removeItem(key);
      }catch(e) {
          log("Error inside removeItem");
          log(e);
      }
      log("Return from removeItem" + key + ":" +  value);
  }

