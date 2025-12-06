import { Controller, Post, Body } from '@nestjs/common';

@Controller('ussd')
export class UssdController {
  @Post('callback')
  handleUssd(@Body() body: any) {
    return `CON Welcome to SmartFarm Connect
1. Suppliers
2. Transport
3. Warehouses
4. Finance`;
  }
}
