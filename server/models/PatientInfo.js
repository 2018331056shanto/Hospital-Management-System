const patientInfo=`CREATE TABLE patientInfo(
    Patient_ID VARCHAR(200) PRIMARY KEY UNIQUE,
    Name VARCHAR(20) NOT NULL,
    Email VARCHAR(20) NOT NULL UNIQUE,
    Phone VARCHAR(11) NOT NULL UNIQUE,
    MedicalHistory VARCHAR(50) NOT NULL
)`
module.exports=patientInfo;
