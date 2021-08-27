CIS-486 Dev Lab ALPHA Story Card 

 # User Story (Story Points) 💻

**As a** qualifying developer (note: one time usage only)  

**I want** to deploy a demo node.js app 

**So That** an end user is able to use a user friendly dynamic web application. 🖱️

## Comments/Steps to implement 🥇

### Setup: Nodejs and npm
1. Check to see if NodeJs and npm are installed. Open new terminal in vsCode Terminal >> New Terminal, or ctl+shift+~(tilda symbol, next to 1) 
1. From terminal CLI type node -v (nodejs) then npm -v (node package manager),  if you see somthing similar to below 👍.  
No version # listed = node not installed  Install node from here: [Install NodeJS for Windows](https://nodejs.org/en/). 
   
   * accept installation defaults.
   * Will have to close out of vsCode and re-open
   * Recheck with node -v and npm -v 👍

![image](https://user-images.githubusercontent.com/54637063/131032697-8c234ca5-465a-4f9e-b0e2-28f1f6f51c15.png)

### Create Project in Visual Code
1. Create project folder on desktop, use appropriate project name.
1. Open project folder in vsCode.  File >> Open folder, or drag project folder on desktop to vsCode 🩳cut.
1. Open command pallet View >> command pallet or ctl+shift+p > type "Select Defualt Profile" to set preferred terminal 💻.

    ![image](https://user-images.githubusercontent.com/54637063/131168775-f694dfb8-f4f6-4ed9-b24e-a9b880d10cbe.png)



### Code the app
1. Create file for project.  File >> New file from menu, or click ![image](https://user-images.githubusercontent.com/54637063/131170912-77ee4e3e-08be-4498-ac81-ecf943d7efb3.png) icon. Use appropriate filename.js.
1. Verify the current terminal directory. Open new terminal, CTL+SHIFT+~   At CLI type "pwd" to verify current working directory. If not in correct project directory cd to correct  directory.
1. Initialize project.  At terminal type "npm init".  ** Accept defualts, creates package.json configuration file.
1. Copy 📋 demo code from: [Express code](https://www.npmjs.com/package/expres) to file.  Save file.


## Test app
1. Open terminal Terminal >> New Terminal, or ctl+shift+~(tilda symbol, next to 1). 
1. Start nodejs server.  Type "node (filename).js  If node server started will see somthing similar to this: Your msg may differ.

![image](https://user-images.githubusercontent.com/54637063/131038299-6f490fae-cc29-452a-80b8-89867e9d6482.png)

1. Open web browser of choice.  In browser address bar type: "localhost:3000  
1. If working correctly should see something similar to below.  Your display may differ.

![image](https://user-images.githubusercontent.com/54637063/131039198-97be2372-85f5-44f6-a2ec-6a0e8f217814.png)




# How to know when you are done. Acceptance Criteria/Rubric 

- [ ] navigate to a GitHub Repository w/a readme in markdown: 0 | 5 | 10
- [ ] file directory and naming: 0 | 5 | 10 
- [ ] clear instructions (w/shortcuts), in m/d, on readme to spin up the project: 0 | 5 | 10 
- [ ] successful spin up, user can run the node.js app & get an http response: 0 | 5 | 10 
- [ ] code quality: logical, readable, functional: 0 | 5 | 10 
