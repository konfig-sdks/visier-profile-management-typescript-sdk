/*
Visier Profile Management APIs

Visier APIs for managing the profiles assigned to users

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FailedLocalTenantProfileAssignmentDTO } from './failed-local-tenant-profile-assignment-dto';
import { SuccessfulLocalTenantProfileAssignmentDTO } from './successful-local-tenant-profile-assignment-dto';
import { UserIdErrorDTO } from './user-id-error-dto';

/**
 * 
 * @export
 * @interface LocalTenantProfileAssignmentResponseDTO
 */
export interface LocalTenantProfileAssignmentResponseDTO {
    /**
     * If true, an error was generated by the request.
     * @type {boolean}
     * @memberof LocalTenantProfileAssignmentResponseDTO
     */
    'errors'?: boolean;
    /**
     * A list of objects representing the user IDs that may not be valid.
     * @type {Array<UserIdErrorDTO>}
     * @memberof LocalTenantProfileAssignmentResponseDTO
     */
    'badUserIds'?: Array<UserIdErrorDTO>;
    /**
     * A list of objects representing any errors that occurred during the assignment operation.
     * @type {Array<FailedLocalTenantProfileAssignmentDTO>}
     * @memberof LocalTenantProfileAssignmentResponseDTO
     */
    'failedAssignments'?: Array<FailedLocalTenantProfileAssignmentDTO>;
    /**
     * A list of the user IDs that were successfully assigned the profile.
     * @type {Array<SuccessfulLocalTenantProfileAssignmentDTO>}
     * @memberof LocalTenantProfileAssignmentResponseDTO
     */
    'successfulAssignments'?: Array<SuccessfulLocalTenantProfileAssignmentDTO>;
}

