/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `Car` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageId` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "imageId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Car_imageId_key" ON "Car"("imageId");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
