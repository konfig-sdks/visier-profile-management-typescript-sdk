type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/admin/profiles/accessible-tenants/{profileId}/assign-PUT': {
        parameters: [
            {
                name: 'profileId'
            },
            {
                name: 'targetUserIds'
            },
            {
                name: 'targetTenantCodes'
            },
            {
                name: 'validityStartTime'
            },
            {
                name: 'validityEndTime'
            },
        ]
    },
    '/v1/admin/profiles/{profileId}/assign-PUT': {
        parameters: [
            {
                name: 'profileId'
            },
            {
                name: 'targetUserIds'
            },
            {
                name: 'validityStartTime'
            },
            {
                name: 'validityEndTime'
            },
        ]
    },
    '/v1/admin/profiles-GET': {
        parameters: [
        ]
    },
    '/v1/admin/profiles/accessible-tenants/{profileId}-GET': {
        parameters: [
            {
                name: 'profileId'
            },
        ]
    },
    '/v1/admin/profiles/accessible-tenants-GET': {
        parameters: [
        ]
    },
    '/v1/admin/users/{userId}/accessible-tenant-profiles-GET': {
        parameters: [
            {
                name: 'userId'
            },
        ]
    },
    '/v1/admin/profiles/{profileId}-GET': {
        parameters: [
            {
                name: 'profileId'
            },
        ]
    },
    '/v1/admin/users/{userId}/profiles-GET': {
        parameters: [
            {
                name: 'userId'
            },
        ]
    },
    '/v1/admin/profiles/accessible-tenants/{profileId}/remove-DELETE': {
        parameters: [
            {
                name: 'profileId'
            },
            {
                name: 'targetUserIds'
            },
            {
                name: 'targetTenantCodes'
            },
        ]
    },
    '/v1/admin/profiles/{profileId}/remove-DELETE': {
        parameters: [
            {
                name: 'profileId'
            },
            {
                name: 'targetUserIds'
            },
        ]
    },
}