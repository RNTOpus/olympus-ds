export interface WebComponentSchema {
  name: string
  attributes?: string[] | { name: Partial<NxDevKitNames>, type: Partial<NxDevKitNames> }[] | undefined
}

export type NxDevKitNames = {
  fileName: string;
  className: string;
  propertyName: string;
  constantName: string;
}
