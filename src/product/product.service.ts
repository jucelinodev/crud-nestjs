import { Injectable } from '@nestjs/common'
import { Repository, DeleteResult } from 'typeorm'
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
    return await this.productRepository.findOne(id)
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto)
    return await this.productRepository.save(product)
  }

  async updateProductById(
    id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const product = await this.productRepository.findOne(id)
    const result = this.productRepository.merge(product, createProductDto)
    return await this.productRepository.save(result)
  }

  async deleteProductById(id: string): Promise<void> {
    await this.productRepository.delete(id)
  }
}
