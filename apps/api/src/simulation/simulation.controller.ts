import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateSimulationDto } from "./dto/create-simulation.dto";
import { SimulationService } from "./simulation.service";

@Controller("simulations")
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}

  @Post("calculate")
  calculate(@Body() dto: CreateSimulationDto) {
    return this.simulationService.calculate(dto);
  }

  @Get()
  findAll() {
    return this.simulationService.findAll();
  }
}
