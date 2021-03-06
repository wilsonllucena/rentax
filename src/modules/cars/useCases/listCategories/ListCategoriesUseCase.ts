import { inject, injectable } from 'tsyringe';
import { Category } from '@modules/cars/entities/Category';
import { ICategoriesReposistory } from '@modules/cars/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesReposistory
    ){};

 async execute(): Promise<Category[]>{
  return await this.categoriesRepository.list();
}

}

export { ListCategoriesUseCase}
