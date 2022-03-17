# Package Test

A project to manage packages requests  


## Author

Jerónimo Sola


## Description

in this website an user can upload a shipment.  
In the /test path is possible to check the status of a particular shipment, if the status is "completed" you can get a pdf file with the shipment data.


## Test environment

[Heroku link](https://testpackage123.herokuapp.com)


## Running instructions

**npm install** --> install dependencies  
**npm start** &nbsp; --> run locally in port 3000  
**npm test** &nbsp; &nbsp; --> run all unit test


## Testing live instructions

http://localhost:3000/ --> Form to create a shipment

http://localhost:3000/test --> Form to check status of shipment   
(for download shipment pdf data try with shipment number 3)


## Dependencies

express  
ejs  
chai  
chai-http  
mocha  
html-pdf  
nodemon  


## Documentation

Api Documentation  
[Documentation](https://app.swaggerhub.com/apis-docs/cuchujero/packageAPI2/1.0.0)


Database Diagram

![alt text](https://i.ibb.co/hRdNcD6/bd-image.png)


For more documentation search in "documents" project folder


## Future upgrades

Backend validations for requests     

Change JSON files for database (base in the database diagram in documentation) 

Implement and use Type-ORM    

Detect automatically postal_code and country_code from database table information (data previously loaded)  

Add that one user can select dynamically countries, cities and provinces from database (data previously loaded)    

Add that one user can select dynamically units from database (data previously loaded)    

Add that one user can upload more than one package to the shipment    

Implements JWT for security    

Implements APIKey for security    

Implements units test for all the endpoints    

Implements that the api request be asynchronous     

Implements in the case that the request have more than one pdf file, compress and download all the files in a zip file    

Upgrate the pdf design (have to be more formal)     

Implements .env file for manage all the environments properly       
