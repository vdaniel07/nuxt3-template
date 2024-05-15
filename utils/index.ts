export const ONEDAYMS = 1000 * 60 * 60 * 24;

export function groupBy<T, K extends keyof T>(list: T[], getKey: (item: T) => K): Record<K, T[]> {
  return list.reduce(
    (previous, currentItem) => {
      const group = getKey(currentItem);
      if (!previous[group]) previous[group] = [];
      previous[group].push(currentItem);
      return previous;
    },
    {} as Record<K, T[]>
  );
}

export function statusFromPattern(pattern: string, data: string) {
  return data === pattern ? 'PASS' : 'FAILED';
}

export function statusFromMinMax(min: number, max: number, data: number) {
  return data > min && data <= max ? 'FAILED' : 'PASS';
}

export function statusFromMax(max: number, data: number) {
  return data > max ? 'FAILED' : 'PASS';
}

export function getColorState(state: TState | undefined) {
  let color: 'success' | 'warning' | 'error' | undefined = undefined;
  switch (state) {
    case 'LIVRER':
      color = 'success';
      break;
    case 'RETESTER':
      color = 'warning';
      break;
    case 'REBUTER':
      color = 'error';
      break;
    case 'NONE':
      color = undefined;
      break;

    default:
      break;
  }

  return color;
}

export function convertStringToDate(dateString: string, hourString: string) {
  const [day, month, year] = dateString.split('-').map(Number);
  const [hours, minutes, seconds] = hourString.split(':').map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
}
