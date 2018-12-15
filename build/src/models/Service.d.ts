import { ServiceType } from "../types.d";
/**
 *
 * @author Mohamed Camara GUEYE
 *
 */
export declare class Service implements ServiceType {
    identifier: string;
    host: string;
    port: number;
    constructor(identifier: string, host: string, port?: number);
    toString(): string;
}
