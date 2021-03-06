/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClient } from "../graphRbacManagementClient";
import {
  SignedInUserGetResponse,
  SignedInUserListOwnedObjectsResponse,
  SignedInUserListOwnedObjectsNextResponse
} from "../models";

/**
 * Class representing a SignedInUser.
 */
export class SignedInUser {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class SignedInUser class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Gets the details for the currently logged-in user.
   * @param options The options parameters.
   */
  get(options?: coreHttp.OperationOptions): Promise<SignedInUserGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getOperationSpec
    ) as Promise<SignedInUserGetResponse>;
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param options The options parameters.
   */
  listOwnedObjects(
    options?: coreHttp.OperationOptions
  ): Promise<SignedInUserListOwnedObjectsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOwnedObjectsOperationSpec
    ) as Promise<SignedInUserListOwnedObjectsResponse>;
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listOwnedObjectsNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SignedInUserListOwnedObjectsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listOwnedObjectsNextOperationSpec
    ) as Promise<SignedInUserListOwnedObjectsNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/me",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  serializer
};
const listOwnedObjectsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/me/ownedObjects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  serializer
};
const listOwnedObjectsNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  serializer
};
