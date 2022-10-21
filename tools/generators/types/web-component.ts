export interface WebComponentSchema {
  name: string
  attributes?: string[] | { name: Partial<NxDevKitNames>, type: Partial<NxDevKitNames> }[] | undefined
  shouldAddToThePlayground?: boolean | false;
  shouldRemoveFromThePlayground?: boolean | false;
}

export interface ComponentSchema {
  name: string
  category: string
  attributes?: string[] | { name: Partial<NxDevKitNames>, type: Partial<NxDevKitNames> }[] | undefined
}

export type NxDevKitNames = {
  fileName: string;
  className: string;
  propertyName: string;
  constantName: string;
}
