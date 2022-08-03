import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateQuotaDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  count_title: number;
}

export class UpdateQuotaDto {
  @IsString()
  @IsNotEmpty()
  cod: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  count_title: number;
}