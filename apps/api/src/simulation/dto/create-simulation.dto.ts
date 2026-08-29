import { IsIn, IsInt, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateSimulationDto {
  @IsString()
  projectName: string;

  @IsString()
  region: string;

  @IsString()
  installationType: string;

  @IsString()
  roofType: string;

  @IsInt()
  @Min(1)
  autonomyDays: number;

  @IsIn([12, 24, 48])
  systemVoltage: number;

  @IsIn([230])
  outputVoltage: number;

  @IsIn(["EUR", "USD"])
  currency: string;

  @IsInt()
  @Min(0)
  lightPoints: number;

  @IsNumber()
  @Min(0)
  wattsPerLightPoint: number;

  @IsInt()
  @Min(0)
  socketPoints: number;

  @IsString()
  socketCircuitType: string;

  @IsNumber()
  @Min(0)
  averageSocketWatts: number;

  @IsInt()
  @Min(0)
  specializedSocketPoints: number;

  @IsNumber()
  @Min(0)
  specializedSocketWatts: number;

  @IsOptional()
  @IsString()
  dedicatedLoadLabel?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  dedicatedLoadWatts?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  dedicatedLoadHours?: number;

  @IsOptional()
  @IsString()
  otherSpecificLoads?: string;
}
