## Sportfolios

### Stack

* AngularJS
* Firebase
* Express

### How to setup project (Overview)

* Fork the project
* Clone your repository
* Open a terminal and run npm run dev
* Open another terminal and run npm run watch
* Your app is now running well and you're ready to code!

### Coding tips

* You should never code in the server/dist folder. The dist folder is entirely generated from the public/app folder
* If you do not have access to the database, send an email to tran.austin.didier@gmail.com to request access

## Setting up a Cloud 9 workspace running the project (Lots of details)

### Forking the project

* If you don't have one, create a Github Account at https://github.com
* Access the sportfolios repository at https://github.com/AustinDidierTran/sportfolios
* Click on the star button on the top right corner to show some love
* Click on the fork button on the top right corner to fork the repository
* You now have a copy of the actual project on your Github Account

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
* Find the link the clone. To find it, go to your repository on GitHub and press on Clone or Download. Select Clone with SSH. Copy the displayed link
* Open a new terminal
* Navigate to the directory where you want your project
* Clone your repository by entering the following command. Don't forget to replace <link> by the actual link

```
git clone <link>
cd sportfolios
```

* With the cd command, you changed directory to sportfolios, the repository you just cloned
* In the same terminal, install dependencies and start the server by typing the following command. This may take a few minutes

```
cd sportfolios
npm run dev
```

* In another terminal, run the gulp tasks with the following command

```
npm install gulp -g
cd sportfolios
npm run watch
```

* Your project should now be running. To preview it, find the Preview tab in Cloud 9, then select Preview Running Application
* To see the page in a seperate browser tab, select the url and paste it in another tab
* Your workspace is now ready for development!

## Setting up a local workspace (For Mac OS, will likely work on Linux with some tweaks)

### Forking the project

* If you don't have one, create a Github Account at https://github.com
* Access the sportfolios repository at https://github.com/AustinDidierTran/sportfolios
* Click on the star button on the top right corner to show some love
* Click on the fork button on the top right corner to fork the repository
* You now have a copy of the actual project on your Github Account

### Giving access to your local repository from your local workspace

* Launch a new terminal
* Verify if you already have an ssh key by running the following command:

```
cat ~/.ssh/id_rsa.pub
```

* If it says file is not found, then you need to generate your SSH key using the following command

```
ssh-keygen -t rsa
```

* Press enter until the ssh key is generated
* Copy your SSH key to your clipboard by running the following command

```
pbcopy < ~/.ssh/id_rsa.pub
```

* Go to your Github Account on https://github.com
* Click on your picture on the top right and access your Settings
* In the Personal Settings, go to SSH and GPG keys
* On the top right, press on New SSH Key
* Give Personal Computer as the title. For the Key, paste your public SSH key
* Your computer now has access to your Git Repository

### Setting up your local workspace

* Find the link the clone. To find it, go to your repository on GitHub and press on Clone or Download. Select Clone with SSH. Copy the displayed link
* Open a new terminal
* Navigate to the directory where you want your project
* Clone your repository by entering the following command. Don't forget to replace <link> by the actual link

```
git clone <link>
cd sportfolios
```

* With the cd command, you changed directory to sportfolios, the repository you just cloned
* In the same terminal, install dependencies and start the server by typing the following command. This may take a few minutes

```
cd sportfolios
npm run dev
```

* In another terminal, run the gulp tasks with the following command

```
npm install gulp -g
cd sportfolios
npm run watch
```

* Your project should now be running. To preview it, find the Preview tab in Cloud 9, then select Preview Running Application
* To see the page in a seperate browser tab, select the url and paste it in another tab
* Your workspace is now ready for development!
