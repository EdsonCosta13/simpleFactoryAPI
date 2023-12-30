import { Prisma } from "@prisma/client";

export class Image implements Prisma.ImageUncheckedCreateInput {
  id?: number;
  name: string;
  pokemonId: number;
  url: string;
}
