CIS-486 Dev Lab ALPHA Story Card 

 # User Story (Story Points) 💻

**As a** qualifying developer (note: one time usage only)  

**I want** to deploy a demo node.js app 

**So That** an end user is able to use a user friendly dynamic web application. 🖱️

## Comments/Steps to implement 🥇

### Setup: Nodejs and npm
- Check to see if NodeJs and npm are installed.  Open new terminal Terminal >> New Terminal, or ctl+shift+~(tilda symbol, next to 1)
- From terminal type node -v (nodejs) and npm -v (node package manager),  . if you see
somthing similar to below 👍.  No version # install node from here: [Install NodeJS for Windows](https://nodejs.org/en/). 
   
   * accept installation defaults.
   * Recheck with node -v and npm -v 👍

![image](https://user-images.githubusercontent.com/54637063/131032697-8c234ca5-465a-4f9e-b0e2-28f1f6f51c15.png)

### Setup Project MS Visual Code
* Create project folder on desktop, use appropriate project name.
* Open project folder in vsCode, or drag project folder on to vsCode 🩳cut.
* ctl+shift+p > type "Select Defualt Profile" to set preferred terminal 💻.


### Code the app
* Create file for project.  File >> New file from menu, or 
![image](https://user-images.githubusercontent.com/54637063/131036587-01710413-3ecd-4e21-9050-663b48f7efca.png) icon.
* Verify the current terminal directory, type "pwd". If not in correct directory cd to correct directory.
* Initialize project.  At terminal type "npm init".  
** Accept defualts, creates package.json configuration file.
* Copy 📋 demo code from: [Express code](https://www.npmjs.com/package/expres) to file.  Save file.


## Test app
* Open terminal Terminal >> New Terminal, or ctl+shift+~(tilda symbol, next to 1). 
* Start nodejs server.  Type "node (filename).js  If node server started will see somthing similar to this: Your msg may differ.

![image](https://user-images.githubusercontent.com/54637063/131038299-6f490fae-cc29-452a-80b8-89867e9d6482.png)

* Open web browser of choice.  In browser address bar type: "localhost:3000  
* If working correctly should see something similar to below.  Your display may differ.

![image](https://user-images.githubusercontent.com/54637063/131039198-97be2372-85f5-44f6-a2ec-6a0e8f217814.png)




# How to know when you are done. Acceptance Criteria/Rubric 

- [ ] navigate to a GitHub Repository w/a readme in markdown: 0 | 5 | 10
- [ ] file directory and naming: 0 | 5 | 10 
- [ ] clear instructions (w/shortcuts), in m/d, on readme to spin up the project: 0 | 5 | 10 
- [ ] successful spin up, user can run the node.js app & get an http response: 0 | 5 | 10 
- [ ] code quality: logical, readable, functional: 0 | 5 | 10 
