/*
ALTER TABLE "Shipment" DROP CONSTRAINT "FK_Shipment_City";
ALTER TABLE "Shipment" DROP CONSTRAINT "FK_Shipment_City";
ALTER TABLE "City" DROP CONSTRAINT "FK_City_Province";
ALTER TABLE "Province" DROP CONSTRAINT "FK_Province_Country";
ALTER TABLE "Package" DROP CONSTRAINT "FK_Package_mensions_unit";
ALTER TABLE "Package" DROP CONSTRAINT "FK_Package_Weight_unit";
ALTER TABLE "Package" DROP CONSTRAINT "FK_Package_Shipment";
DROP TABLE "Shipment" PURGE;
DROP SEQUENCE "SQ_Shipment";
DROP TABLE "Country" PURGE;
DROP SEQUENCE "SQ_Country";
DROP TABLE "City" PURGE;
DROP SEQUENCE "SQ_City";
DROP TABLE "Province" PURGE;
DROP SEQUENCE "SQ_Province";
DROP TABLE "Package" PURGE;
DROP SEQUENCE "SQ_Package";
DROP TABLE "Weight_unit" PURGE;
DROP SEQUENCE "SQ_Weight_unit";
DROP TABLE "Dimensions_unit" PURGE;
DROP SEQUENCE "SQ_Dimensions_unit";
-- */

-------------------------------------------------------------------------------
--            Shipment
-------------------------------------------------------------------------------

CREATE TABLE "Shipment" (
    "id"                              INTEGER             NOT NULL
  , "name_origin"                     VARCHAR             NOT NULL
  , "street_origin"                   VARCHAR             NOT NULL
  , "name_destination"                VARCHAR             NOT NULL
  , "street_destination"              VARCHAR             NOT NULL
  , "City_origin_id"                  INTEGER             NOT NULL
  , "City_destination_id"             INTEGER             NOT NULL
  , "creation_date"                   DATE                NOT NULL
  , "receipt_date"                    DATE                NOT NULL
  , CONSTRAINT "PK_Shipment" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_Shipment";

CREATE OR REPLACE TRIGGER "TG_Shipment_BI"
    BEFORE INSERT ON "Shipment"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_Shipment".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            Country
-------------------------------------------------------------------------------

CREATE TABLE "Country" (
    "id"                              INTEGER             NOT NULL
  , "name"                            VARCHAR             NOT NULL
  , "country_code"                    VARCHAR             NOT NULL
  , CONSTRAINT "PK_Country" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_Country";

CREATE OR REPLACE TRIGGER "TG_Country_BI"
    BEFORE INSERT ON "Country"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_Country".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            City
-------------------------------------------------------------------------------

CREATE TABLE "City" (
    "id"                              INTEGER             NOT NULL
  , "name"                            VARCHAR             NOT NULL
  , "postal_code"                     INTEGER             NOT NULL
  , "Province_id"                     INTEGER             NOT NULL
  , CONSTRAINT "PK_City" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_City";

CREATE OR REPLACE TRIGGER "TG_City_BI"
    BEFORE INSERT ON "City"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_City".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            Province
-------------------------------------------------------------------------------

CREATE TABLE "Province" (
    "id"                              INTEGER             NOT NULL
  , "name"                            VARCHAR             NOT NULL
  , "Country_id"                      INTEGER             NOT NULL
  , CONSTRAINT "PK_Province" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_Province";

CREATE OR REPLACE TRIGGER "TG_Province_BI"
    BEFORE INSERT ON "Province"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_Province".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            Package
-------------------------------------------------------------------------------

CREATE TABLE "Package" (
    "id"                              INTEGER             NOT NULL
  , "length"                          DECIMAL             NOT NULL
  , "width"                           DECIMAL             NOT NULL
  , "height"                          DECIMAL             NOT NULL
  , "weight"                          DECIMAL             NOT NULL
  , "Dimensions_unit_id"              INTEGER             NOT NULL
  , "Weight_unit_id"                  INTEGER             NOT NULL
  , "Shipment_id"                     INTEGER             NOT NULL
  , CONSTRAINT "PK_Package" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_Package";

CREATE OR REPLACE TRIGGER "TG_Package_BI"
    BEFORE INSERT ON "Package"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_Package".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            Weight_unit
-------------------------------------------------------------------------------

CREATE TABLE "Weight_unit" (
    "id"                              INTEGER             NOT NULL
  , "unit"                            VARCHAR             NOT NULL
  , CONSTRAINT "PK_Weight_unit" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_Weight_unit";

CREATE OR REPLACE TRIGGER "TG_Weight_unit_BI"
    BEFORE INSERT ON "Weight_unit"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_Weight_unit".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            Dimensions_unit
-------------------------------------------------------------------------------

CREATE TABLE "Dimensions_unit" (
    "id"                              INTEGER             NOT NULL
  , "unit"                            VARCHAR             NOT NULL
  , CONSTRAINT "PK_Dimensions_unit" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_Dimensions_unit";

CREATE OR REPLACE TRIGGER "TG_Dimensions_unit_BI"
    BEFORE INSERT ON "Dimensions_unit"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_Dimensions_unit".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------

ALTER TABLE "Shipment" ADD CONSTRAINT "FK_Shipment_City" FOREIGN KEY ( "City_origin_id" ) REFERENCES "City" ( "id" );
ALTER TABLE "Shipment" ADD CONSTRAINT "FK_Shipment_City" FOREIGN KEY ( "City_destination_id" ) REFERENCES "City" ( "id" );
ALTER TABLE "City" ADD CONSTRAINT "FK_City_Province" FOREIGN KEY ( "Province_id" ) REFERENCES "Province" ( "id" );
ALTER TABLE "Province" ADD CONSTRAINT "FK_Province_Country" FOREIGN KEY ( "Country_id" ) REFERENCES "Country" ( "id" );
ALTER TABLE "Package" ADD CONSTRAINT "FK_Package_mensions_unit" FOREIGN KEY ( "Dimensions_unit_id" ) REFERENCES "Dimensions_unit" ( "id" );
ALTER TABLE "Package" ADD CONSTRAINT "FK_Package_Weight_unit" FOREIGN KEY ( "Weight_unit_id" ) REFERENCES "Weight_unit" ( "id" );
ALTER TABLE "Package" ADD CONSTRAINT "FK_Package_Shipment" FOREIGN KEY ( "Shipment_id" ) REFERENCES "Shipment" ( "id" );