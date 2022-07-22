const dept=`CREATE TABLE dept (
    ID_fk VARCHAR(200),
    Name VARCHAR(20),
    FOREIGN KEY (ID_fk) REFERENCES user (ID) )`
module.exports=dept;