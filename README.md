### EasyButton's "testing suite"

this is a small project. if you want to test stuff:

### THIS

use the script in this dir

    $ ./test <commit_or_branch_to_test>

### OR

do it yourself

    $ git checkout slapdashTesting

the branch `slapdashTesting` has an `index.html` and this file `README.md`

now get the version of `easy-button.js`

    $ git co <commit_or_branch_to_test> easy-button.js

and start your local server

    $ python -m SimpleHTTPServer 8080


### THEN

open up `localhost:8080` in your browser. do things look right?

