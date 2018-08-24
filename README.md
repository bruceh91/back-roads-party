# Back Roads Party Co. webpage.

### personal notes

#### to get access to server
- in terminal cd into Downloads
- ssh -i BackRoadsPartykeypair.pem ubuntu@34.238.47.107
#### to restart server to make push live
- run 
    + cd /
    + cd /www/back-roads-party
    + sudo forever start -c "npm start" ./
#### all db credentials are saved in source folder with the file name "backroadsparty info"
- server/src/config/db.js is untracked and not on github. don't panic
    
