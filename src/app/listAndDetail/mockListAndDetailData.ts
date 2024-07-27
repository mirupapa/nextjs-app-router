import { faker } from '@faker-js/faker'
import { User } from '~/app/listAndDetail/type'

export const mockListAndDetailData: User[] = [...Array(100)].map(
  (_, index) => ({
    id: index + 1,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  })
)
