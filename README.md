# ADA Insurance Landing Page

This site is hosted at Heroku.

---

## When committing changes, please make two pushes.

### THIS HAS BEEN MIGRATED TO GITHUB WORKFLOW

``git push``  
 or  
``git push origin master``


---

## This site doesn't actually use PHP

In order to "trick" Heroku into serving this static site (it is not an app), we pretend it's a php app. We do this with two files:

``composer.json`` Although this file is basically empty, it tells Heroku that this is a php app and to look for an index.php file

``index.php`` There is no php code to execute, but Heroku will be looking for an index.php page - so we use this as our home page


