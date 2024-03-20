/*
Visier Profile Management APIs

Visier APIs for managing the profiles assigned to users

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TargetTenantCodeDTO } from './target-tenant-code-dto';

/**
 * 
 * @export
 * @interface AccessibleTenantProfileRevokeRequestDTO
 */
export interface AccessibleTenantProfileRevokeRequestDTO {
    /**
     * A list of users to remove this profile from.
     * @type {Array<string>}
     * @memberof AccessibleTenantProfileRevokeRequestDTO
     */
    'targetUserIds'?: Array<string>;
    /**
     * A list of objects representing the  analytic tenants for removing profiles from each target user ID.
     * @type {Array<TargetTenantCodeDTO>}
     * @memberof AccessibleTenantProfileRevokeRequestDTO
     */
    'targetTenantCodes'?: Array<TargetTenantCodeDTO>;
}

