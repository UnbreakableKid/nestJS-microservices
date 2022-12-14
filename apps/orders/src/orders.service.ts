import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(order: CreateOrderDto) {
    this.ordersRepository.create(order);
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
