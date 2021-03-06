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
import { ComputeManagementClient } from "../computeManagementClient";
import { VirtualMachineSizesListResponse } from "../models";

/**
 * Class representing a VirtualMachineSizes.
 */
export class VirtualMachineSizes {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class VirtualMachineSizes class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * This API is deprecated. Use [Resources
   * Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualMachineSizesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, options: operationOptions },
      listOperationSpec
    ) as Promise<VirtualMachineSizesListResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/vmSizes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineSizeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1
  ],
  serializer
};
