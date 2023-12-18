import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class VideoService {
  async getVideoStreamById(id: number) {
    const stream = createReadStream(
      join(process.cwd(), 'uploads', `${id}.mp4`),
    );

    return new StreamableFile(stream, {
      disposition: 'inline',
      type: 'video/mp4',
    });
  }
}
