import { AppDataSource } from '../data-source';
import { Subjetct } from '../entities/Subject';

export const subjectRepository = AppDataSource.getRepository(Subjetct)