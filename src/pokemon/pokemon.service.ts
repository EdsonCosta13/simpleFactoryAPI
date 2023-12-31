import { Injectable } from "@nestjs/common";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { UpdatePokemonDto } from "./dto/update-pokemon.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}
  // private readonly _include = [
  //   Image:{
  //     select:{
  //       url:true,
  //     },
  //   }
  // ];
  create(data: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data,
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany({
      // include:this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where: { id },
    });
  }
}
