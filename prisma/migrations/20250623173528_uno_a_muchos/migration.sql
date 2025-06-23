-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "usuarioId" INTEGER;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
