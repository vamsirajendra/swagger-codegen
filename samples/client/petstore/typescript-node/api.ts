import request = require('request');
import promise = require('bluebird');
import http = require('http');

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    /**
    * User Status
    */
    userStatus: number;
}

export class Category {
    id: number;
    name: string;
}

export class Pet {
    id: number;
    category: Category;
    name: string;
    photoUrls: Array<string>;
    tags: Array<Tag>;
    /**
    * pet status in the store
    */
    status: Pet.StatusEnum;
}

export module Pet {
    export enum StatusEnum { 
        available = <any> 'available',
        pending = <any> 'pending',
        sold = <any> 'sold',
    }
}
export class Tag {
    id: number;
    name: string;
}

export class Order {
    id: number;
    petId: number;
    quantity: number;
    shipDate: Date;
    /**
    * Order Status
    */
    status: Order.StatusEnum;
    complete: boolean;
}

export module Order {
    export enum StatusEnum { 
        placed = <any> 'placed',
        approved = <any> 'approved',
        delivered = <any> 'delivered',
    }
}

interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: request.Options): void;
}

class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: request.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header") {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

class OAuth implements Authentication {
    applyToRequest(requestOptions: request.Options): void {
        // TODO: support oauth
    }
}

class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        // Do nothing
    }
}

export class UserApi {
    private basePath = 'http://petstore.swagger.io/v2';
    public authentications = {
        'default': <Authentication>new VoidAuth(),
        'api_key': new ApiKeyAuth('header', 'api_key'),
        'petstore_auth': new OAuth(),
    }

    constructor(url: string, basePath?: string);
    constructor(private url: string, basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set apiKey(key: string) {
        this.authentications.api_key.apiKey = key;
    }

    public createUser (body?: User) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/user';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
            body: body,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public createUsersWithArrayInput (body?: Array<User>) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/user/createWithArray';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
            body: body,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public createUsersWithListInput (body?: Array<User>) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/user/createWithList';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
            body: body,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public loginUser (username?: string, password?: string) : Promise<{ response: http.ClientResponse; body: string;  }> {
        var path = this.url + this.basePath + '/user/login';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        if (username !== undefined) {
            queryParameters['username'] = username;
        }

        if (password !== undefined) {
            queryParameters['password'] = password;
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: string;  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public logoutUser () : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/user/logout';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public getUserByName (username: string) : Promise<{ response: http.ClientResponse; body: User;  }> {
        var path = this.url + this.basePath + '/user/{username}';

        path = path.replace('{' + 'username' + '}', String(username));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling getUserByName');
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: User;  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public updateUser (username: string, body?: User) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/user/{username}';

        path = path.replace('{' + 'username' + '}', String(username));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling updateUser');
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
            body: body,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public deleteUser (username: string) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/user/{username}';

        path = path.replace('{' + 'username' + '}', String(username));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling deleteUser');
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }
}
export class PetApi {
    private basePath = 'http://petstore.swagger.io/v2';
    public authentications = {
        'default': <Authentication>new VoidAuth(),
        'api_key': new ApiKeyAuth('header', 'api_key'),
        'petstore_auth': new OAuth(),
    }

    constructor(url: string, basePath?: string);
    constructor(private url: string, basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set apiKey(key: string) {
        this.authentications.api_key.apiKey = key;
    }

    public updatePet (body?: Pet) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/pet';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
            body: body,
        }

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public addPet (body?: Pet) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/pet';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
            body: body,
        }

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public findPetsByStatus (status?: Array<string>) : Promise<{ response: http.ClientResponse; body: Array<Pet>;  }> {
        var path = this.url + this.basePath + '/pet/findByStatus';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        if (status !== undefined) {
            queryParameters['status'] = status;
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: Array<Pet>;  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public findPetsByTags (tags?: Array<string>) : Promise<{ response: http.ClientResponse; body: Array<Pet>;  }> {
        var path = this.url + this.basePath + '/pet/findByTags';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        if (tags !== undefined) {
            queryParameters['tags'] = tags;
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: Array<Pet>;  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public getPetById (petId: number) : Promise<{ response: http.ClientResponse; body: Pet;  }> {
        var path = this.url + this.basePath + '/pet/{petId}';

        path = path.replace('{' + 'petId' + '}', String(petId));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling getPetById');
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: Pet;  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.api_key.applyToRequest(requestOptions);

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public updatePetWithForm (petId: string, name?: string, status?: string) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/pet/{petId}';

        path = path.replace('{' + 'petId' + '}', String(petId));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling updatePetWithForm');
        }

        var useFormData = false;

        if (name !== undefined) {
            formParams['name'] = name;
        }

        if (status !== undefined) {
            formParams['status'] = status;
        }

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public deletePet (petId: number, apiKey?: string) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/pet/{petId}';

        path = path.replace('{' + 'petId' + '}', String(petId));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling deletePet');
        }

        headerParams['api_key'] = apiKey;

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public uploadFile (petId: number, additionalMetadata?: string, file?: any) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/pet/{petId}/uploadImage';

        path = path.replace('{' + 'petId' + '}', String(petId));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling uploadFile');
        }

        var useFormData = false;

        if (additionalMetadata !== undefined) {
            formParams['additionalMetadata'] = additionalMetadata;
        }

        if (file !== undefined) {
            formParams['file'] = file;
        }
        useFormData = true;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.petstore_auth.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }
}
export class StoreApi {
    private basePath = 'http://petstore.swagger.io/v2';
    public authentications = {
        'default': <Authentication>new VoidAuth(),
        'api_key': new ApiKeyAuth('header', 'api_key'),
        'petstore_auth': new OAuth(),
    }

    constructor(url: string, basePath?: string);
    constructor(private url: string, basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set apiKey(key: string) {
        this.authentications.api_key.apiKey = key;
    }

    public getInventory () : Promise<{ response: http.ClientResponse; body: { [key: string]: number; };  }> {
        var path = this.url + this.basePath + '/store/inventory';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: { [key: string]: number; };  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.api_key.applyToRequest(requestOptions);

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public placeOrder (body?: Order) : Promise<{ response: http.ClientResponse; body: Order;  }> {
        var path = this.url + this.basePath + '/store/order';

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: Order;  }>();

        var requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
            body: body,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public getOrderById (orderId: string) : Promise<{ response: http.ClientResponse; body: Order;  }> {
        var path = this.url + this.basePath + '/store/order/{orderId}';

        path = path.replace('{' + 'orderId' + '}', String(orderId));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'orderId' is set
        if (!orderId) {
            throw new Error('Missing required parameter orderId when calling getOrderById');
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse; body: Order;  }>();

        var requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }

    public deleteOrder (orderId: string) : Promise<{ response: http.ClientResponse;  }> {
        var path = this.url + this.basePath + '/store/order/{orderId}';

        path = path.replace('{' + 'orderId' + '}', String(orderId));

        var queryParameters: any = {};
        var headerParams: any = {};
        var formParams: any = {};


        // verify required parameter 'orderId' is set
        if (!orderId) {
            throw new Error('Missing required parameter orderId when calling deleteOrder');
        }

        var useFormData = false;

        var deferred = promise.defer<{ response: http.ClientResponse;  }>();

        var requestOptions: request.Options = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: path,
            json: true,
        }

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        request(requestOptions, (error, response, body) => {
            if (error) {
                deferred.reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });

        return deferred.promise;
    }
}