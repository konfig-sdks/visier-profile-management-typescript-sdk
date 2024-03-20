<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for managing the profiles assigned to users

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visierprofilemanagement.profileManagement.assignAnalyticProfile`](#visierprofilemanagementprofilemanagementassignanalyticprofile)
  * [`visierprofilemanagement.profileManagement.assignProfile`](#visierprofilemanagementprofilemanagementassignprofile)
  * [`visierprofilemanagement.profileManagement.getAllProfiles`](#visierprofilemanagementprofilemanagementgetallprofiles)
  * [`visierprofilemanagement.profileManagement.getAnalyticProfileDetail`](#visierprofilemanagementprofilemanagementgetanalyticprofiledetail)
  * [`visierprofilemanagement.profileManagement.getAnalyticProfiles`](#visierprofilemanagementprofilemanagementgetanalyticprofiles)
  * [`visierprofilemanagement.profileManagement.getAnalyticUserProfile`](#visierprofilemanagementprofilemanagementgetanalyticuserprofile)
  * [`visierprofilemanagement.profileManagement.getProfileDetail`](#visierprofilemanagementprofilemanagementgetprofiledetail)
  * [`visierprofilemanagement.profileManagement.getUserProfile`](#visierprofilemanagementprofilemanagementgetuserprofile)
  * [`visierprofilemanagement.profileManagement.removeAnalyticProfile`](#visierprofilemanagementprofilemanagementremoveanalyticprofile)
  * [`visierprofilemanagement.profileManagement.removeProfile`](#visierprofilemanagementprofilemanagementremoveprofile)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=ProfileManagement&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierProfileManagement } from "visier-profile-management-typescript-sdk";

const visierprofilemanagement = new VisierProfileManagement({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const assignAnalyticProfileResponse =
  await visierprofilemanagement.profileManagement.assignAnalyticProfile({
    profileId: "profileId_example",
  });

console.log(assignAnalyticProfileResponse);
```

## Reference<a id="reference"></a>


### `visierprofilemanagement.profileManagement.assignAnalyticProfile`<a id="visierprofilemanagementprofilemanagementassignanalyticprofile"></a>

This API allows you to assign an analytic tenant profile to a list of administrating tenant users
 for a list of analytic tenants.

 Note:
  - Administrating tenants only.
  - You can revoke a profile from a user with this request by updating the validityEndTime to be
    "less than" the current time (that is, in the past).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignAnalyticProfileResponse =
  await visierprofilemanagement.profileManagement.assignAnalyticProfile({
    profileId: "profileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### profileId: `string`<a id="profileid-string"></a>

The ID of the profile to assign.

##### targetUserIds: `string`[]<a id="targetuserids-string"></a>

A list of users to assign this profile.

##### targetTenantCodes: [`TargetTenantCodeDTO`](./models/target-tenant-code-dto.ts)[]<a id="targettenantcodes-targettenantcodedtomodelstarget-tenant-code-dtots"></a>

A list of objects representing the  analytic tenants for profiles assigned to the users.

##### validityStartTime: `string`<a id="validitystarttime-string"></a>

An inclusive date-time when this profile is active.

##### validityEndTime: `string`<a id="validityendtime-string"></a>

An exclusive date-time when this profile is no longer active.

#### 🔄 Return<a id="🔄-return"></a>

[AccessibleTenantProfileAssignmentResponseDTO](./models/accessible-tenant-profile-assignment-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles/accessible-tenants/{profileId}/assign` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.assignProfile`<a id="visierprofilemanagementprofilemanagementassignprofile"></a>

This API allows you to assign a profile to a list of users. For administrating tenants,
 this assigns an administrating tenant profile to a list of users.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignProfileResponse =
  await visierprofilemanagement.profileManagement.assignProfile({
    profileId: "profileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### profileId: `string`<a id="profileid-string"></a>

The ID of the profile to assign to a list of users.

##### targetUserIds: `string`[]<a id="targetuserids-string"></a>

A list of users to assign this profile.

##### validityStartTime: `string`<a id="validitystarttime-string"></a>

An inclusive date-time when this profile is active.

##### validityEndTime: `string`<a id="validityendtime-string"></a>

An exclusive date-time when this profile is no longer active.

#### 🔄 Return<a id="🔄-return"></a>

[LocalTenantProfileAssignmentResponseDTO](./models/local-tenant-profile-assignment-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles/{profileId}/assign` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.getAllProfiles`<a id="visierprofilemanagementprofilemanagementgetallprofiles"></a>

This API allows you to get a list of all available profiles. For administrating tenants,
 this retrieves all administrating tenant profiles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllProfilesResponse =
  await visierprofilemanagement.profileManagement.getAllProfiles();
```

#### 🔄 Return<a id="🔄-return"></a>

[ProfilesGetAPIResponseDTO](./models/profiles-get-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.getAnalyticProfileDetail`<a id="visierprofilemanagementprofilemanagementgetanalyticprofiledetail"></a>

This API allows you to get the details of an analytic tenant profile.

 Note: Administrating tenants only.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAnalyticProfileDetailResponse =
  await visierprofilemanagement.profileManagement.getAnalyticProfileDetail({
    profileId: "profileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### profileId: `string`<a id="profileid-string"></a>

The ID of the profile to retrieve details for.

#### 🔄 Return<a id="🔄-return"></a>

[ProfileGetAPIResponseDTO](./models/profile-get-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles/accessible-tenants/{profileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.getAnalyticProfiles`<a id="visierprofilemanagementprofilemanagementgetanalyticprofiles"></a>

This API allows you to retrieve a list of profiles available for analytic tenants.

 Note: Administrating tenants only.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAnalyticProfilesResponse =
  await visierprofilemanagement.profileManagement.getAnalyticProfiles();
```

#### 🔄 Return<a id="🔄-return"></a>

[ProfilesGetAPIResponseDTO](./models/profiles-get-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles/accessible-tenants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.getAnalyticUserProfile`<a id="visierprofilemanagementprofilemanagementgetanalyticuserprofile"></a>

This API allows you to retrieve a specified user's assigned profiles for analytic tenants.

 Note: Administrating tenants only.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAnalyticUserProfileResponse =
  await visierprofilemanagement.profileManagement.getAnalyticUserProfile({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user you want to retrieve.

#### 🔄 Return<a id="🔄-return"></a>

[AllProfileAssignedForAccessibleTenantDTO](./models/all-profile-assigned-for-accessible-tenant-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/{userId}/accessible-tenant-profiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.getProfileDetail`<a id="visierprofilemanagementprofilemanagementgetprofiledetail"></a>

This API allows you to get the details of a specific profile. For administrating tenants, this retrieves
 the details of administrating tenant profiles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProfileDetailResponse =
  await visierprofilemanagement.profileManagement.getProfileDetail({
    profileId: "profileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### profileId: `string`<a id="profileid-string"></a>

The ID of the profile to retrieve details for.

#### 🔄 Return<a id="🔄-return"></a>

[ProfileGetAPIResponseDTO](./models/profile-get-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles/{profileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.getUserProfile`<a id="visierprofilemanagementprofilemanagementgetuserprofile"></a>

This API allows you to retrieve a specified user's assigned profiles. For administrating tenants,
 this retrieves a user's administrating tenant profiles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserProfileResponse =
  await visierprofilemanagement.profileManagement.getUserProfile({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user you want to retrieve.

#### 🔄 Return<a id="🔄-return"></a>

[AllProfileAssignedForLocalTenantDTO](./models/all-profile-assigned-for-local-tenant-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/{userId}/profiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.removeAnalyticProfile`<a id="visierprofilemanagementprofilemanagementremoveanalyticprofile"></a>

This API allows you to remove an analytic tenant profile from a list of administrating tenant users for a list of analytic tenants.

 Note: Administrating tenants only.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAnalyticProfileResponse =
  await visierprofilemanagement.profileManagement.removeAnalyticProfile({
    profileId: "profileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### profileId: `string`<a id="profileid-string"></a>

The ID of the profile to remove.

##### targetUserIds: `string`[]<a id="targetuserids-string"></a>

A list of users to remove this profile from.

##### targetTenantCodes: [`TargetTenantCodeDTO`](./models/target-tenant-code-dto.ts)[]<a id="targettenantcodes-targettenantcodedtomodelstarget-tenant-code-dtots"></a>

A list of objects representing the  analytic tenants for removing profiles from each target user ID.

#### 🔄 Return<a id="🔄-return"></a>

[AccessibleTenantProfileRevokeResponseDTO](./models/accessible-tenant-profile-revoke-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles/accessible-tenants/{profileId}/remove` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierprofilemanagement.profileManagement.removeProfile`<a id="visierprofilemanagementprofilemanagementremoveprofile"></a>

This API allows you to remove a profile from a list of users. For administrating tenants, this
 removes an administrating tenant profile from a list of users.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeProfileResponse =
  await visierprofilemanagement.profileManagement.removeProfile({
    profileId: "profileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### profileId: `string`<a id="profileid-string"></a>

The ID of the profile to remove to a list of users.

##### targetUserIds: `string`[]<a id="targetuserids-string"></a>

A list of users to remove this profile from.

#### 🔄 Return<a id="🔄-return"></a>

[LocalTenantProfileRevokeResponseDTO](./models/local-tenant-profile-revoke-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/profiles/{profileId}/remove` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
