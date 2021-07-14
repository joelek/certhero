// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-client";
import * as shared from "./index";

export const makeClient = (options?: Partial<{
	urlPrefix: string,
	requestHandler: autoguard.api.RequestHandler
}>): autoguard.api.Client<shared.Autoguard.Requests, shared.Autoguard.Responses> => ({
	"listDomains": async (request) => {
		let guard = shared.Autoguard.Requests["listDomains"];
		guard.as(request, "request");
		let method = "POST";
		let components = new Array<string>();
		components.push("domain");
		components.push("list");
		let parameters = new Array<[string, string]>();
		parameters.push(...autoguard.api.encodeUndeclaredParameterPairs(request.options ?? {}, [...[], ...parameters.map((parameter) => parameter[0])]));
		let headers = new Array<[string, string]>();
		headers.push(...autoguard.api.encodeUndeclaredHeaderPairs(request.headers ?? {}, headers.map((header) => header[0])));
		let payload = request.payload ?? [];
		let requestHandler = options?.requestHandler ?? autoguard.api.xhr;
		let defaultHeaders = new Array<[string, string]>();
		defaultHeaders.push(["Content-Type", "application/octet-stream"]);
		defaultHeaders.push(["Accept", "application/json; charset=utf-8"]);
		let raw = await requestHandler(autoguard.api.finalizeRequest({ method, components, parameters, headers, payload }, defaultHeaders), options?.urlPrefix);
		{
			let status = raw.status;
			let headers: Record<string, autoguard.api.JSON> = {};
			headers = { ...headers, ...autoguard.api.decodeUndeclaredHeaders(raw.headers ?? {}, Object.keys(headers)) };
			let payload = await autoguard.api.deserializePayload(raw.payload);
			let guard = shared.Autoguard.Responses["listDomains"];
			let response = guard.as({ status, headers, payload }, "response");
			return new autoguard.api.ServerResponse(response, false);
		}
	},
	"listDomainRecords": async (request) => {
		let guard = shared.Autoguard.Requests["listDomainRecords"];
		guard.as(request, "request");
		let method = "POST";
		let components = new Array<string>();
		components.push("domain");
		components.push("listrecords");
		let parameters = new Array<[string, string]>();
		parameters.push(...autoguard.api.encodeUndeclaredParameterPairs(request.options ?? {}, [...[], ...parameters.map((parameter) => parameter[0])]));
		let headers = new Array<[string, string]>();
		headers.push(...autoguard.api.encodeUndeclaredHeaderPairs(request.headers ?? {}, headers.map((header) => header[0])));
		let payload = autoguard.api.serializePayload(request.payload);
		let requestHandler = options?.requestHandler ?? autoguard.api.xhr;
		let defaultHeaders = new Array<[string, string]>();
		defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
		defaultHeaders.push(["Accept", "application/json; charset=utf-8"]);
		let raw = await requestHandler(autoguard.api.finalizeRequest({ method, components, parameters, headers, payload }, defaultHeaders), options?.urlPrefix);
		{
			let status = raw.status;
			let headers: Record<string, autoguard.api.JSON> = {};
			headers = { ...headers, ...autoguard.api.decodeUndeclaredHeaders(raw.headers ?? {}, Object.keys(headers)) };
			let payload = await autoguard.api.deserializePayload(raw.payload);
			let guard = shared.Autoguard.Responses["listDomainRecords"];
			let response = guard.as({ status, headers, payload }, "response");
			return new autoguard.api.ServerResponse(response, false);
		}
	},
	"createDomainRecord": async (request) => {
		let guard = shared.Autoguard.Requests["createDomainRecord"];
		guard.as(request, "request");
		let method = "POST";
		let components = new Array<string>();
		components.push("domain");
		components.push("addrecord");
		let parameters = new Array<[string, string]>();
		parameters.push(...autoguard.api.encodeUndeclaredParameterPairs(request.options ?? {}, [...[], ...parameters.map((parameter) => parameter[0])]));
		let headers = new Array<[string, string]>();
		headers.push(...autoguard.api.encodeUndeclaredHeaderPairs(request.headers ?? {}, headers.map((header) => header[0])));
		let payload = autoguard.api.serializePayload(request.payload);
		let requestHandler = options?.requestHandler ?? autoguard.api.xhr;
		let defaultHeaders = new Array<[string, string]>();
		defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
		defaultHeaders.push(["Accept", "application/json; charset=utf-8"]);
		let raw = await requestHandler(autoguard.api.finalizeRequest({ method, components, parameters, headers, payload }, defaultHeaders), options?.urlPrefix);
		{
			let status = raw.status;
			let headers: Record<string, autoguard.api.JSON> = {};
			headers = { ...headers, ...autoguard.api.decodeUndeclaredHeaders(raw.headers ?? {}, Object.keys(headers)) };
			let payload = await autoguard.api.deserializePayload(raw.payload);
			let guard = shared.Autoguard.Responses["createDomainRecord"];
			let response = guard.as({ status, headers, payload }, "response");
			return new autoguard.api.ServerResponse(response, false);
		}
	},
	"updateDomainRecord": async (request) => {
		let guard = shared.Autoguard.Requests["updateDomainRecord"];
		guard.as(request, "request");
		let method = "POST";
		let components = new Array<string>();
		components.push("domain");
		components.push("updaterecord");
		let parameters = new Array<[string, string]>();
		parameters.push(...autoguard.api.encodeUndeclaredParameterPairs(request.options ?? {}, [...[], ...parameters.map((parameter) => parameter[0])]));
		let headers = new Array<[string, string]>();
		headers.push(...autoguard.api.encodeUndeclaredHeaderPairs(request.headers ?? {}, headers.map((header) => header[0])));
		let payload = autoguard.api.serializePayload(request.payload);
		let requestHandler = options?.requestHandler ?? autoguard.api.xhr;
		let defaultHeaders = new Array<[string, string]>();
		defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
		defaultHeaders.push(["Accept", "application/json; charset=utf-8"]);
		let raw = await requestHandler(autoguard.api.finalizeRequest({ method, components, parameters, headers, payload }, defaultHeaders), options?.urlPrefix);
		{
			let status = raw.status;
			let headers: Record<string, autoguard.api.JSON> = {};
			headers = { ...headers, ...autoguard.api.decodeUndeclaredHeaders(raw.headers ?? {}, Object.keys(headers)) };
			let payload = await autoguard.api.deserializePayload(raw.payload);
			let guard = shared.Autoguard.Responses["updateDomainRecord"];
			let response = guard.as({ status, headers, payload }, "response");
			return new autoguard.api.ServerResponse(response, false);
		}
	},
	"deleteDomainRecord": async (request) => {
		let guard = shared.Autoguard.Requests["deleteDomainRecord"];
		guard.as(request, "request");
		let method = "POST";
		let components = new Array<string>();
		components.push("domain");
		components.push("deleterecord");
		let parameters = new Array<[string, string]>();
		parameters.push(...autoguard.api.encodeUndeclaredParameterPairs(request.options ?? {}, [...[], ...parameters.map((parameter) => parameter[0])]));
		let headers = new Array<[string, string]>();
		headers.push(...autoguard.api.encodeUndeclaredHeaderPairs(request.headers ?? {}, headers.map((header) => header[0])));
		let payload = autoguard.api.serializePayload(request.payload);
		let requestHandler = options?.requestHandler ?? autoguard.api.xhr;
		let defaultHeaders = new Array<[string, string]>();
		defaultHeaders.push(["Content-Type", "application/json; charset=utf-8"]);
		defaultHeaders.push(["Accept", "application/json; charset=utf-8"]);
		let raw = await requestHandler(autoguard.api.finalizeRequest({ method, components, parameters, headers, payload }, defaultHeaders), options?.urlPrefix);
		{
			let status = raw.status;
			let headers: Record<string, autoguard.api.JSON> = {};
			headers = { ...headers, ...autoguard.api.decodeUndeclaredHeaders(raw.headers ?? {}, Object.keys(headers)) };
			let payload = await autoguard.api.deserializePayload(raw.payload);
			let guard = shared.Autoguard.Responses["deleteDomainRecord"];
			let response = guard.as({ status, headers, payload }, "response");
			return new autoguard.api.ServerResponse(response, false);
		}
	},
});
