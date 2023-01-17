import { ReactiveControllerHost } from "lit";

export type AccessibilityHost<T> = ReactiveControllerHost & HTMLElement & T
