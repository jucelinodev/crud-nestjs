import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common'

import { ProductService } from './product.service'
import { Product } from './product.entity'
import { CreateProductDto } from './dto/create-product.dto'

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async index(): Promise<Product[]> {
    return await this.productService.getAllProducts()
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    return await this.productService.getProductById(id)
  }

  @Post()
  async store(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(createProductDto)
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productService.updateProductById(id, createProductDto)
  }

  @Delete('/:id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    await this.productService.deleteProductById(id)
  }
}
