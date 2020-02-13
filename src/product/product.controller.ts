import { Controller, Get, Post, Body } from '@nestjs/common'
import { ProductService } from './product.service'
import { Product } from './product.entity'
import { CreateProductDto } from './dto/create-product.dto'

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async index(): Promise<Product[]> {
    return this.productService.getAllProducts()
  }

  @Post()
  async store(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto)
  }
}
