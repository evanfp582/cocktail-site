# cocktail-site
A website for at home bartenders

## Current state of the code
It is a mess Ryan, I am sorry. There is so much commented out code and messy code  
This will get sorted once we are fully in DB form  
I commended out code  that broke when the CSV DB was moved folder locations, it was not worth it to actually fix  
I need to add a fleshed out recipe creation screen tbh  

## How to install dependencies
_Honestly I am a little iffy, but I think you just cd into client type `npm install` then cd into server and type 'npm install'_

## How to run
**Client**
  'cd .\client\'
  'npm run start'

**Server**
  `cd .\server\`
  `npm run start`

**Python DB UI**
  _This is best done in the CMD now in an IDE_
  `cd .\database_junk\`
  `python cocktail_add_gui.py`

To include ENV vars just add a .env file to the server folder and add every variable needed  
For example:  
  DB_HOST='THISISANEXAMPLE.amazonaws.com'
