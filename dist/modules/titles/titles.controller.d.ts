import { TitlesService } from './titles.service';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
export declare class TitlesController {
    private readonly titlesService;
    constructor(titlesService: TitlesService);
    create(createTitleDto: CreateTitleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTitleDto: UpdateTitleDto): string;
    remove(id: string): string;
}
