import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsString, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class DedicatedLoadDto {
  @IsString()
  label: string;

  @IsNumber()
  @Min(0)
  watts: number;

  @IsNumber()
  @Min(0)
  hoursPerDay: number;

  @IsInt()
  @Min(1)
  quantity: number;
}

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DedicatedLoadDto)
  dedicatedLoads: DedicatedLoadDto[];

  @IsOptional()
  @IsString()
  otherSpecificLoads?: string;
}
