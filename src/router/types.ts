import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import type { DefineComponent } from 'vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type Component<T = any> = DefineComponent | (() => Promise<T>)

export type AppRouteMeta = RouteMeta &
  Partial<{
    title: string
    hiddenMenu: boolean
    hiddenChildrenInMenu: boolean
  }>

// @ts-expect-error: `RouteMeta` 类型，无法扩展
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: AppRouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  props?: Recordable
  fullPath?: string
}

export interface Menu {
  name: string
  path: string
  children?: Menu[]
  mata?: AppRouteMeta
  hiddenMenu?: boolean
  _parentName?: string
  _fullPath: string
  _depth: number
}

export type AppRouteModule = AppRouteRecordRaw
