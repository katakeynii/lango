export class Service {

	identifier: string;
	host: string;
	port: number;	

	constructor(identifier:string, host: string, port = 80) {
		this.identifier = identifier;
		this.host = host;
		this.port = port;
	}
}