import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { SimulationModule } from "./simulation/simulation.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    SimulationModule,
  ],
})
export class AppModule {}
