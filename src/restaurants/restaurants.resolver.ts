import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantsResolver {
  @Query((returns) => Boolean) // <-- return type NOT OPTIONAL for 📐GraphQL
  // OPTIONAL return type for 📐Typescript
  isPizzaGood(): Boolean {
    return true;
  }
}
