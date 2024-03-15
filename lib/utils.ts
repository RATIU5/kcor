import {clsx, type ClassValue} from 'clsx';
import {ReadonlyURLSearchParams} from 'next/navigation';
import {twMerge} from 'tailwind-merge';

/**
 * Merge dynamic tailwind class names
 * @param inputs class names to merge
 * @returns merged class names
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Create a URL with a given pathname and query parameters (if any)
 * @param pathname the path to create the URL for
 * @param params the query parameters to include in the URL
 * @returns the URL with the given pathname and query parameters
 */
export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

/**
 * Ensure a string starts with a given string
 * @param stringToCheck the string to check
 * @param startsWith the string to ensure the stringToCheck starts with
 * @returns the stringToCheck if it starts with startsWith, otherwise the stringToCheck with startsWith prepended
 */
export const ensureStartsWith = (stringToCheck: string, startsWith: string) => {
  return stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;
};
