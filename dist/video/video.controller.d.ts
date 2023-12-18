import { VideoService } from './video.service';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    getvideo(): Promise<import("@nestjs/common").StreamableFile>;
}
