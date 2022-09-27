import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() order: CreateOrderDto) {
    return this.ordersService.createOrder(order);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
