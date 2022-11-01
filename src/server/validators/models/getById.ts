import { Prisma } from '@prisma/client';

export const modelWithDetailsSelect = Prisma.validator<Prisma.ModelSelect>()({
  id: true,
  name: true,
  description: true,
  trainedWords: true,
  nsfw: true,
  type: true,
  updatedAt: true,
  user: {
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  },
  modelVersions: {
    select: {
      id: true,
      name: true,
      description: true,
      steps: true,
      epochs: true,
      trainingDataUrl: true,
      url: true,
      sizeKB: true,
      createdAt: true,
      updatedAt: true,
      images: {
        orderBy: {
          index: 'asc',
        },
        select: {
          index: true,
          image: {
            select: {
              id: true,
              name: true,
              url: true,
              nsfw: true,
              prompt: true,
              height: true,
              width: true,
              hash: true,
            },
          },
        },
      },
    },
  },
  reviews: {
    select: {
      text: true,
      rating: true,
      user: true,
      nsfw: true,
      createdAt: true,
      modelVersion: { select: { id: true, name: true } },
      imagesOnReviews: { select: { image: { select: { id: true, name: true, url: true } } } },
    },
  },
  tagsOnModels: { select: { tag: true } },
  rank: true,
});

const modelWithDetails = Prisma.validator<Prisma.ModelArgs>()({
  select: modelWithDetailsSelect,
});

export type ModelWithDetails = Prisma.ModelGetPayload<typeof modelWithDetails>;
