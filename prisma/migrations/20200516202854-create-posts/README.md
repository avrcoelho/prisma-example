# Migration `20200516202854-create-posts`

This migration has been generated at 5/16/2020, 8:28:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Post" (
"email" text  NOT NULL ,"id" SERIAL,"name" text   ,"userId" integer   ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Post.email" ON "public"."Post"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200516202338-user..20200516202854-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -10,5 +10,14 @@
 model User {
   id    Int     @default(autoincrement()) @id
   name  String?
   email String  @unique
+  posts Post[]
+}
+
+model Post {
+  id     Int     @default(autoincrement()) @id
+  name   String?
+  email  String  @unique
+  User   User?   @relation(fields: [userId], references: [id])
+  userId Int?
 }
```


