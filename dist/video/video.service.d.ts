import { StreamableFile } from '@nestjs/common';
export declare class VideoService {
    getVideoStreamById(id: number): Promise<StreamableFile>;
}
