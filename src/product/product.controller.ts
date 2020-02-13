import { Controller, Get, Post, Body, Put } from '@nestjs/common'
import { ProductService } from './product.service'
import { Product } from './product.entity'
import { CreateProductDto } from './dto/create-product.dto'

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  index(): Promise<Product[]> {
    return this.productService.getAllProducts()
  }

  @Get('/:id')
  show(id: string): Promise<Product> {
    return this.productService.getProductById(id)
  }

  @Post()
  store(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto)
  }

  @Put('/:id')
  update(
    id: string,
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.updateProductById(id, createProductDto)
  }
}
