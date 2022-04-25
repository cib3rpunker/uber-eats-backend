import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((_returns) => Restaurant) // <--🟣OPTIONAL This is the type of the root resolver
export class RestaurantsResolver {
  @Query((_returns) => Restaurant) // <-- 🔴MANDATORY return type for GraphQL
  myRestaurant(): Restaurant {
    // 🟣OPTIONAL 🏹 return type for Typescript
    return {
      name: 'Pizza Hut',
      isGood: true,
    };
  }
}
