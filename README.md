# Sportfolios

### Stack

* AngularJS
* Firebase
* Express

### How to setup project

* Fork the project
* Clone your repository
* Open a terminal and run npm run dev
* Open another terminal and run npm run watch
* Your app is now running well and you're ready to code!

### Coding tips

* You should never code in the server/dist folder. The dist folder is entirely generated from the public/app folder

## Setting up a Cloud 9 workspace running the project (Lots of details)

### Forking the project

* If you don't have one, create a Github Account at https://github.com
* Access the sportfolios repository at https://github.com/AustinDidierTran/sportfolios
* Click on the fork button on the top right to fork the repository
* You now have a copy of the actual project

### Giving access to your Git Repository for your Cloud 9 account

* Go to cloud9 at https://c9.io
* Click on the 1st icon next to the sign in button to login with your Github Account
* Click on the first icon to access your account settings
* Copy the text in the gray area. This is your public SSH key. It should start with ssh-rsa
* Go to your Github Account on https://github.com
* Click on your picture on the top right and access your Settings
* In the Personal Settings, go to SSH and GPG keys
* On the top right, press on New SSH Key
* Give Cloud 9 as the title. For the Key, paste your public SSH key
* Your Cloud 9 Account now has access to your Git Repository

### Setting up your Cloud 9 workspace

* Create a new workspace. When choosing a template, choose blank. Set the name to sportfolios and privacy to private
* Find the link the clone. To find it, go to your repository and press on Clone or Download. Select Clone with SSH. Copy the displayed link
* Open a new terminal in your Cloud 9 workspace
* Clone your repository by entering the following command. Don't forget to replace <link> by the actual link

```
git clone <link>
cd sportfolios
```

* With the cd command, you changed directory to sportfolios, the repository you just cloned
* In the same terminal, install dependencies and start the server by typing the following command. This may take a few minutes

```
npm run dev
```

* In another terminal, run the gulp tasks with the following command

```
npm run watch
```

* Your project should now be running. To preview it, find the Preview tab in Cloud 9, then select Preview Running Application
* To see the page in a seperate browser tab, select the url and paste it in another tab
* Your workspace is now ready for development!

### Getting autorisations

* You do not have access to the database. Send an email to tran.austin.didier@gmail.com to request access