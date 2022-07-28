import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
export declare class TitlesService {
    create(createTitleDto: CreateTitleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTitleDto: UpdateTitleDto): string;
    remove(id: number): string;
}
