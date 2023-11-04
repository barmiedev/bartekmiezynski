export const englify = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
