# First Setup
To use this, you'll need to fork the project and edit `make_webpage.py` to automatically clean the HTML of your own personal webpage. Also, I recommend deleting the contents of `resources` and replacing them with the resources of your own website. Also, I recommend deleting all of the original `.html` files in the repo.

Then, clone the forked repo onto your computer by entering the following command with the address of your forked repo:
```
$ git clone address://of/forked/repo.git
```
Make an empty downloads directory to which you will download your uncleaned webpages:
```
$ cd personal-website
$ mkdir downloads
```

You will also need to clone the forked repo to the hosting service. For example, if you are using MIT Athena:
```
$ ssh athena.dialup.mit.edu -l username
```
Enter your password.
```
$ mkdir www
$ git clone address://of/forked/repo.git
```

# How To Update Your Personal Website
1. Navigate to your uncleaned personal page in Firefox. Save each page (including the resource folder) in the `personal-website/download` directory.
2. Navigate to the `personal-website` directory. Run the following command:
```
$ ./batch_make.sh
```
Now you have generated all the html files for your website. If you downloaded any new resources, you will need to copy them into the `resources` folder manually.

3. After adding the new resources, commit and push everything:
```
$ git add *
$ git commit -a -m "custom update message"
$ git push
```

The next step is to host them on your webpage. For example, this is how to host them on MIT's Athena server:

4. Log into your MIT Athena server:
```
$ ssh athena.dialup.mit.edu -l username
```
5. After entering your password, navigate to the forked repo and pull:
```
$ cd personal-webiste
$ git pull
```
6. Move your html files over to your www directory:
```
$ python move_html.py
```
7. If you updated any resources, you'll need to copy them over. Alternatively, just enter:
```
$ rm -rf ../www/resources
$ cp -r resources ../www/resources
```
