"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['src/**/*.entity.{js,ts}'],
    migrations: ['src/migrations/**/*.{js,ts}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map