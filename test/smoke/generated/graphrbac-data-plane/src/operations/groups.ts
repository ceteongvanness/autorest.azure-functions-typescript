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
  CheckGroupMembershipParameters,
  GroupsIsMemberOfResponse,
  GroupAddMemberParameters,
  GroupCreateParameters,
  GroupsCreateResponse,
  GroupsListOptionalParams,
  GroupsListResponse,
  GroupsGetGroupMembersResponse,
  GroupsGetResponse,
  GroupGetMemberGroupsParameters,
  GroupsGetMemberGroupsResponse,
  GroupsListOwnersResponse,
  AddOwnerParameters,
  GroupsListNextResponse,
  GroupsGetGroupMembersNextResponse,
  GroupsListOwnersNextResponse
} from "../models";

/**
 * Class representing a Groups.
 */
export class Groups {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class Groups class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Checks whether the specified user, group, contact, or service principal is a direct or transitive
   * member of the specified group.
   * @param parameters The check group membership parameters.
   * @param options The options parameters.
   */
  isMemberOf(
    parameters: CheckGroupMembershipParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsIsMemberOfResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { parameters, options: operationOptions },
      isMemberOfOperationSpec
    ) as Promise<GroupsIsMemberOfResponse>;
  }

  /**
   * Remove a member from a group.
   * @param groupObjectId The object ID of the group from which to remove the member.
   * @param memberObjectId Member object id
   * @param options The options parameters.
   */
  removeMember(
    groupObjectId: string,
    memberObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { groupObjectId, memberObjectId, options: operationOptions },
      removeMemberOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Add a member to a group.
   * @param groupObjectId The object ID of the group to which to add the member.
   * @param parameters The URL of the member object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addMember(
    groupObjectId: string,
    parameters: GroupAddMemberParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { groupObjectId, parameters, options: operationOptions },
      addMemberOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Create a group in the directory.
   * @param parameters The parameters for the group to create.
   * @param options The options parameters.
   */
  create(
    parameters: GroupCreateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsCreateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { parameters, options: operationOptions },
      createOperationSpec
    ) as Promise<GroupsCreateResponse>;
  }

  /**
   * Gets list of groups for the current tenant.
   * @param options The options parameters.
   */
  list(options?: GroupsListOptionalParams): Promise<GroupsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<GroupsListResponse>;
  }

  /**
   * Gets the members of a group.
   * @param objectId The object ID of the group whose members should be retrieved.
   * @param options The options parameters.
   */
  getGroupMembers(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetGroupMembersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, options: operationOptions },
      getGroupMembersOperationSpec
    ) as Promise<GroupsGetGroupMembersResponse>;
  }

  /**
   * Gets group information from the directory.
   * @param objectId The object ID of the user for which to get group information.
   * @param options The options parameters.
   */
  get(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, options: operationOptions },
      getOperationSpec
    ) as Promise<GroupsGetResponse>;
  }

  /**
   * Delete a group from the directory.
   * @param objectId The object ID of the group to delete.
   * @param options The options parameters.
   */
  delete(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a collection of object IDs of groups of which the specified group is a member.
   * @param objectId The object ID of the group for which to get group membership.
   * @param parameters Group filtering parameters.
   * @param options The options parameters.
   */
  getMemberGroups(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetMemberGroupsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, parameters, options: operationOptions },
      getMemberGroupsOperationSpec
    ) as Promise<GroupsGetMemberGroupsResponse>;
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the group for which to get owners.
   * @param options The options parameters.
   */
  listOwners(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsListOwnersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, options: operationOptions },
      listOwnersOperationSpec
    ) as Promise<GroupsListOwnersResponse>;
  }

  /**
   * Add an owner to a group.
   * @param objectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addOwner(
    objectId: string,
    parameters: AddOwnerParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, parameters, options: operationOptions },
      addOwnerOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Remove a member from owners.
   * @param objectId The object ID of the group from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The options parameters.
   */
  removeOwner(
    objectId: string,
    ownerObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, ownerObjectId, options: operationOptions },
      removeOwnerOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a list of groups for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<GroupsListNextResponse>;
  }

  /**
   * Gets the members of a group.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  getGroupMembersNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetGroupMembersNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getGroupMembersNextOperationSpec
    ) as Promise<GroupsGetGroupMembersNextResponse>;
  }

  /**
   * ListOwnersNext
   * @param objectId The object ID of the group for which to get owners.
   * @param nextLink The nextLink from the previous successful call to the ListOwners method.
   * @param options The options parameters.
   */
  listOwnersNext(
    objectId: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsListOwnersNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { objectId, nextLink, options: operationOptions },
      listOwnersNextOperationSpec
    ) as Promise<GroupsListOwnersNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const isMemberOfOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/isMemberOf",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckGroupMembershipResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeMemberOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{groupObjectId}/$links/members/{memberObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.groupObjectId,
    Parameters.memberObjectId
  ],
  serializer
};
const addMemberOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{groupObjectId}/$links/members",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.groupObjectId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ADGroup
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  serializer
};
const getGroupMembersOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/members",
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
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ADGroup
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  serializer
};
const getMemberGroupsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/getMemberGroups",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GroupGetMemberGroupsResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOwnersOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/owners",
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
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  serializer
};
const addOwnerOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/$links/owners",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeOwnerOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/$links/owners/{ownerObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.ownerObjectId,
    Parameters.objectId
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  serializer
};
const getGroupMembersNextOperationSpec: coreHttp.OperationSpec = {
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
const listOwnersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
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
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.nextLink,
    Parameters.objectId
  ],
  serializer
};
