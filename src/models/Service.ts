import * as axiosTypes from "axios";
import axios from "axios";
import * as express from 'express';
import { ServiceType } from "../types.d";

/**
 * 
 * @author Mohamed Camara GUEYE
 * 
 */

export class Service implements ServiceType {

	identifier: string;
	host: string;
	port: number;	

	constructor(identifier:string, host: string, port = 80) {
		this.identifier = identifier;
		this.host = host;
		this.port = port;
	}
	toString(): string {
		return `${this.host}:${this.port}`;
	}

}