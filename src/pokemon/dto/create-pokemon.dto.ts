import { Prisma } from "@prisma/client";
import { Pokemon } from "../entities/pokemon.entity";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePokemonDto extends Pokemon {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  height?: number | null;

  @IsOptional()
  Images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
