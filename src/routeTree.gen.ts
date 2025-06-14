/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as onboardingOnboardingImport } from './routes/(onboarding)/onboarding'
import { Route as dashboardLayoutImport } from './routes/(dashboard)/_layout'
import { Route as authLayoutImport } from './routes/(auth)/_layout'
import { Route as authLayoutVerifyEmailImport } from './routes/(auth)/_layout/verify-email'
import { Route as authLayoutSignUpImport } from './routes/(auth)/_layout/sign-up'
import { Route as authLayoutSignInImport } from './routes/(auth)/_layout/sign-in'
import { Route as authLayoutResetPasswordImport } from './routes/(auth)/_layout/reset-password'
import { Route as authLayoutForgetPasswordImport } from './routes/(auth)/_layout/forget-password'
import { Route as dashboardLayoutDashboardIndexImport } from './routes/(dashboard)/_layout/dashboard/index'
import { Route as dashboardLayoutDashboardProductsIndexImport } from './routes/(dashboard)/_layout/dashboard/products/index'

// Create Virtual Routes

const dashboardImport = createFileRoute('/(dashboard)')()
const authImport = createFileRoute('/(auth)')()

// Create/Update Routes

const dashboardRoute = dashboardImport.update({
  id: '/(dashboard)',
  getParentRoute: () => rootRoute,
} as any)

const authRoute = authImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const onboardingOnboardingRoute = onboardingOnboardingImport.update({
  id: '/(onboarding)/onboarding',
  path: '/onboarding',
  getParentRoute: () => rootRoute,
} as any)

const dashboardLayoutRoute = dashboardLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => dashboardRoute,
} as any)

const authLayoutRoute = authLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => authRoute,
} as any)

const authLayoutVerifyEmailRoute = authLayoutVerifyEmailImport.update({
  id: '/verify-email',
  path: '/verify-email',
  getParentRoute: () => authLayoutRoute,
} as any)

const authLayoutSignUpRoute = authLayoutSignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => authLayoutRoute,
} as any)

const authLayoutSignInRoute = authLayoutSignInImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => authLayoutRoute,
} as any)

const authLayoutResetPasswordRoute = authLayoutResetPasswordImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => authLayoutRoute,
} as any)

const authLayoutForgetPasswordRoute = authLayoutForgetPasswordImport.update({
  id: '/forget-password',
  path: '/forget-password',
  getParentRoute: () => authLayoutRoute,
} as any)

const dashboardLayoutDashboardIndexRoute =
  dashboardLayoutDashboardIndexImport.update({
    id: '/dashboard/',
    path: '/dashboard/',
    getParentRoute: () => dashboardLayoutRoute,
  } as any)

const dashboardLayoutDashboardProductsIndexRoute =
  dashboardLayoutDashboardProductsIndexImport.update({
    id: '/dashboard/products/',
    path: '/dashboard/products/',
    getParentRoute: () => dashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_layout': {
      id: '/(auth)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authLayoutImport
      parentRoute: typeof authRoute
    }
    '/(dashboard)': {
      id: '/(dashboard)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardImport
      parentRoute: typeof rootRoute
    }
    '/(dashboard)/_layout': {
      id: '/(dashboard)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardLayoutImport
      parentRoute: typeof dashboardRoute
    }
    '/(onboarding)/onboarding': {
      id: '/(onboarding)/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof onboardingOnboardingImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_layout/forget-password': {
      id: '/(auth)/_layout/forget-password'
      path: '/forget-password'
      fullPath: '/forget-password'
      preLoaderRoute: typeof authLayoutForgetPasswordImport
      parentRoute: typeof authLayoutImport
    }
    '/(auth)/_layout/reset-password': {
      id: '/(auth)/_layout/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof authLayoutResetPasswordImport
      parentRoute: typeof authLayoutImport
    }
    '/(auth)/_layout/sign-in': {
      id: '/(auth)/_layout/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof authLayoutSignInImport
      parentRoute: typeof authLayoutImport
    }
    '/(auth)/_layout/sign-up': {
      id: '/(auth)/_layout/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof authLayoutSignUpImport
      parentRoute: typeof authLayoutImport
    }
    '/(auth)/_layout/verify-email': {
      id: '/(auth)/_layout/verify-email'
      path: '/verify-email'
      fullPath: '/verify-email'
      preLoaderRoute: typeof authLayoutVerifyEmailImport
      parentRoute: typeof authLayoutImport
    }
    '/(dashboard)/_layout/dashboard/': {
      id: '/(dashboard)/_layout/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof dashboardLayoutDashboardIndexImport
      parentRoute: typeof dashboardLayoutImport
    }
    '/(dashboard)/_layout/dashboard/products/': {
      id: '/(dashboard)/_layout/dashboard/products/'
      path: '/dashboard/products'
      fullPath: '/dashboard/products'
      preLoaderRoute: typeof dashboardLayoutDashboardProductsIndexImport
      parentRoute: typeof dashboardLayoutImport
    }
  }
}

// Create and export the route tree

interface authLayoutRouteChildren {
  authLayoutForgetPasswordRoute: typeof authLayoutForgetPasswordRoute
  authLayoutResetPasswordRoute: typeof authLayoutResetPasswordRoute
  authLayoutSignInRoute: typeof authLayoutSignInRoute
  authLayoutSignUpRoute: typeof authLayoutSignUpRoute
  authLayoutVerifyEmailRoute: typeof authLayoutVerifyEmailRoute
}

const authLayoutRouteChildren: authLayoutRouteChildren = {
  authLayoutForgetPasswordRoute: authLayoutForgetPasswordRoute,
  authLayoutResetPasswordRoute: authLayoutResetPasswordRoute,
  authLayoutSignInRoute: authLayoutSignInRoute,
  authLayoutSignUpRoute: authLayoutSignUpRoute,
  authLayoutVerifyEmailRoute: authLayoutVerifyEmailRoute,
}

const authLayoutRouteWithChildren = authLayoutRoute._addFileChildren(
  authLayoutRouteChildren,
)

interface authRouteChildren {
  authLayoutRoute: typeof authLayoutRouteWithChildren
}

const authRouteChildren: authRouteChildren = {
  authLayoutRoute: authLayoutRouteWithChildren,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

interface dashboardLayoutRouteChildren {
  dashboardLayoutDashboardIndexRoute: typeof dashboardLayoutDashboardIndexRoute
  dashboardLayoutDashboardProductsIndexRoute: typeof dashboardLayoutDashboardProductsIndexRoute
}

const dashboardLayoutRouteChildren: dashboardLayoutRouteChildren = {
  dashboardLayoutDashboardIndexRoute: dashboardLayoutDashboardIndexRoute,
  dashboardLayoutDashboardProductsIndexRoute:
    dashboardLayoutDashboardProductsIndexRoute,
}

const dashboardLayoutRouteWithChildren = dashboardLayoutRoute._addFileChildren(
  dashboardLayoutRouteChildren,
)

interface dashboardRouteChildren {
  dashboardLayoutRoute: typeof dashboardLayoutRouteWithChildren
}

const dashboardRouteChildren: dashboardRouteChildren = {
  dashboardLayoutRoute: dashboardLayoutRouteWithChildren,
}

const dashboardRouteWithChildren = dashboardRoute._addFileChildren(
  dashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof dashboardLayoutRouteWithChildren
  '/onboarding': typeof onboardingOnboardingRoute
  '/forget-password': typeof authLayoutForgetPasswordRoute
  '/reset-password': typeof authLayoutResetPasswordRoute
  '/sign-in': typeof authLayoutSignInRoute
  '/sign-up': typeof authLayoutSignUpRoute
  '/verify-email': typeof authLayoutVerifyEmailRoute
  '/dashboard': typeof dashboardLayoutDashboardIndexRoute
  '/dashboard/products': typeof dashboardLayoutDashboardProductsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof dashboardLayoutRouteWithChildren
  '/onboarding': typeof onboardingOnboardingRoute
  '/forget-password': typeof authLayoutForgetPasswordRoute
  '/reset-password': typeof authLayoutResetPasswordRoute
  '/sign-in': typeof authLayoutSignInRoute
  '/sign-up': typeof authLayoutSignUpRoute
  '/verify-email': typeof authLayoutVerifyEmailRoute
  '/dashboard': typeof dashboardLayoutDashboardIndexRoute
  '/dashboard/products': typeof dashboardLayoutDashboardProductsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_layout': typeof authLayoutRouteWithChildren
  '/(dashboard)': typeof dashboardRouteWithChildren
  '/(dashboard)/_layout': typeof dashboardLayoutRouteWithChildren
  '/(onboarding)/onboarding': typeof onboardingOnboardingRoute
  '/(auth)/_layout/forget-password': typeof authLayoutForgetPasswordRoute
  '/(auth)/_layout/reset-password': typeof authLayoutResetPasswordRoute
  '/(auth)/_layout/sign-in': typeof authLayoutSignInRoute
  '/(auth)/_layout/sign-up': typeof authLayoutSignUpRoute
  '/(auth)/_layout/verify-email': typeof authLayoutVerifyEmailRoute
  '/(dashboard)/_layout/dashboard/': typeof dashboardLayoutDashboardIndexRoute
  '/(dashboard)/_layout/dashboard/products/': typeof dashboardLayoutDashboardProductsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/onboarding'
    | '/forget-password'
    | '/reset-password'
    | '/sign-in'
    | '/sign-up'
    | '/verify-email'
    | '/dashboard'
    | '/dashboard/products'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/onboarding'
    | '/forget-password'
    | '/reset-password'
    | '/sign-in'
    | '/sign-up'
    | '/verify-email'
    | '/dashboard'
    | '/dashboard/products'
  id:
    | '__root__'
    | '/'
    | '/(auth)'
    | '/(auth)/_layout'
    | '/(dashboard)'
    | '/(dashboard)/_layout'
    | '/(onboarding)/onboarding'
    | '/(auth)/_layout/forget-password'
    | '/(auth)/_layout/reset-password'
    | '/(auth)/_layout/sign-in'
    | '/(auth)/_layout/sign-up'
    | '/(auth)/_layout/verify-email'
    | '/(dashboard)/_layout/dashboard/'
    | '/(dashboard)/_layout/dashboard/products/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authRoute: typeof authRouteWithChildren
  dashboardRoute: typeof dashboardRouteWithChildren
  onboardingOnboardingRoute: typeof onboardingOnboardingRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authRoute: authRouteWithChildren,
  dashboardRoute: dashboardRouteWithChildren,
  onboardingOnboardingRoute: onboardingOnboardingRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)",
        "/(dashboard)",
        "/(onboarding)/onboarding"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_layout"
      ]
    },
    "/(auth)/_layout": {
      "filePath": "(auth)/_layout.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_layout/forget-password",
        "/(auth)/_layout/reset-password",
        "/(auth)/_layout/sign-in",
        "/(auth)/_layout/sign-up",
        "/(auth)/_layout/verify-email"
      ]
    },
    "/(dashboard)": {
      "filePath": "(dashboard)",
      "children": [
        "/(dashboard)/_layout"
      ]
    },
    "/(dashboard)/_layout": {
      "filePath": "(dashboard)/_layout.tsx",
      "parent": "/(dashboard)",
      "children": [
        "/(dashboard)/_layout/dashboard/",
        "/(dashboard)/_layout/dashboard/products/"
      ]
    },
    "/(onboarding)/onboarding": {
      "filePath": "(onboarding)/onboarding.tsx"
    },
    "/(auth)/_layout/forget-password": {
      "filePath": "(auth)/_layout/forget-password.tsx",
      "parent": "/(auth)/_layout"
    },
    "/(auth)/_layout/reset-password": {
      "filePath": "(auth)/_layout/reset-password.tsx",
      "parent": "/(auth)/_layout"
    },
    "/(auth)/_layout/sign-in": {
      "filePath": "(auth)/_layout/sign-in.tsx",
      "parent": "/(auth)/_layout"
    },
    "/(auth)/_layout/sign-up": {
      "filePath": "(auth)/_layout/sign-up.tsx",
      "parent": "/(auth)/_layout"
    },
    "/(auth)/_layout/verify-email": {
      "filePath": "(auth)/_layout/verify-email.tsx",
      "parent": "/(auth)/_layout"
    },
    "/(dashboard)/_layout/dashboard/": {
      "filePath": "(dashboard)/_layout/dashboard/index.tsx",
      "parent": "/(dashboard)/_layout"
    },
    "/(dashboard)/_layout/dashboard/products/": {
      "filePath": "(dashboard)/_layout/dashboard/products/index.tsx",
      "parent": "/(dashboard)/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
