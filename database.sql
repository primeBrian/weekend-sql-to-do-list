CREATE TABLE "Todo_List" (
"id" serial primary key,
"task" varchar (80) NOT NULL,
"location" VARCHAR (80), 
"complete" varchar (10) NOT NULL)

INSERT INTO "Todo_List" ("task", "location", "complete") VALUES ('clean some things', 'my house', 'true');
