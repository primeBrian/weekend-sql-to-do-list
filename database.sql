CREATE TABLE "Todo_List" (
"id" serial primary key,
"task" varchar (80) NOT NULL,
"location" VARCHAR (80), 
"complete" varchar (10) NOT NULL)

INSERT INTO "Todo_List" ("task", "location", "complete") VALUES ('clean some things', 'my house', 'true');

-- use a created_at TIMESTAMP DEFAULT NOW ()
-- SELECT * FROM "todos" ORDER BY "created_at" LIMIT 1000;
-- always us lowercase letters
-- DELETE FUNCTION FOR SQL SYNTAX
-- DELETE * FROM "todos" WHERE "id" = 1;
-- UPDATE SYNTAX FOR SQL IS AND YOU CAN STACK MULTIABLE ITEMS
-- UPDATE "todos" SET "comlete" = true WHERE "id" = 2;