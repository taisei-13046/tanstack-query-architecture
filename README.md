# TanStack Query Architecture

![69271ab8-a4d0-4c1c-93d2-f1e891f419e2](https://github.com/taisei-13046/tanstack-query-architecture/assets/78260526/be927d58-0526-4bf5-a4e3-6c60958a5203)

This project is an example of the architecture in TanStack Query.

```
 ├ domain # Manage the data structures and types used within the application.
 ├ pages
 ├ service # Manage the logic related to API communication.
 | └ post # Divide directories for each resource.
 |   ├ function.ts # Data fetching and updating.
 |   ├ index.ts # Manage custom hooks that wrap TanStack Query's API.
 |   ├ key.ts # Manage the factory functions for queryKey.
 |   ├ selector.ts # Manage the data transformation functions used in the select option.
 |   └ type.ts # Manage the type definitions associated with API communication.
```
