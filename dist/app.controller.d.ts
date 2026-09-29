import { ConfigService } from '@nestjs/config';
export declare class AppController {
    private readonly config;
    constructor(config: ConfigService);
    hello(): {
        success: boolean;
        service: string;
        environment: string;
        message: string;
        route: string;
    };
}
