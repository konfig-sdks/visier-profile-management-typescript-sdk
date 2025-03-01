/*
Visier Profile Management APIs

Visier APIs for managing the profiles assigned to users

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReducedTenantCodeErrorDTO } from './reduced-tenant-code-error-dto';
import { ReducedUserIdErrorDTO } from './reduced-user-id-error-dto';
import { SuccessfulLocalTenantProfileAssignmentDTO } from './successful-local-tenant-profile-assignment-dto';

/**
 * 
 * @export
 * @interface AccessibleTenantProfileRevokeResponseDTO
 */
export interface AccessibleTenantProfileRevokeResponseDTO {
    /**
     * A list of objects representing any tenants that returned errors.
     * @type {Array<ReducedTenantCodeErrorDTO>}
     * @memberof AccessibleTenantProfileRevokeResponseDTO
     */
    'badTenantCodes'?: Array<ReducedTenantCodeErrorDTO>;
    /**
     * A list of objects representing the user IDs that may not be valid.
     * @type {Array<ReducedUserIdErrorDTO>}
     * @memberof AccessibleTenantProfileRevokeResponseDTO
     */
    'badUserIds'?: Array<ReducedUserIdErrorDTO>;
    /**
     * A list of objects representing the valid user IDs that were not affected.
     * @type {Array<SuccessfulLocalTenantProfileAssignmentDTO>}
     * @memberof AccessibleTenantProfileRevokeResponseDTO
     */
    'unaffectedUsers'?: Array<SuccessfulLocalTenantProfileAssignmentDTO>;
    /**
     * A list of objects representing the valid user IDs that succeeded.
     * @type {Array<SuccessfulLocalTenantProfileAssignmentDTO>}
     * @memberof AccessibleTenantProfileRevokeResponseDTO
     */
    'succeeded'?: Array<SuccessfulLocalTenantProfileAssignmentDTO>;
}

