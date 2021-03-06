import { LocationBase } from './geocoding.common';
export declare function getLocationFromName(searchString: string): Promise<Location>;
export declare function getLocationListFromName(searchString: string, maxResCount?: number): Promise<Array<Location>>;
export declare class Location extends LocationBase {
    ios: CLPlacemark;
}
