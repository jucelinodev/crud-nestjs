import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Product } from './product.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateProductDto } from './dto/create-product.dto'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find()
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id)
    return product
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto)
    return await this.productRepository.save(product)
  }

  //updateProductById(){}

  //deleteProductById(){}
}
