const degrees=`CREATE TABLE degrees(
    Degree_Name VARCHAR(300),
<<<<<<< HEAD
    ID_fk VARCHAR(200),
    FOREIGN KEY(ID_fk) REFERENCES user(ID))`    
=======
    DoctorId_fk VARCHAR(200),
    FOREIGN KEY(DoctorId_fk) REFERENCES user(ID))`
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
module.exports=degrees;