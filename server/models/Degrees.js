const degrees=`CREATE TABLE degrees(
    Degree_Name VARCHAR(300),
    DoctorId_fk VARCHAR(200),
    FOREIGN KEY(DoctorId_fk) REFERENCES user(ID))`
module.exports=degrees;