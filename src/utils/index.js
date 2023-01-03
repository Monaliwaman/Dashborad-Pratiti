import { transform, isEqual, isObject } from 'lodash';

export const objectsDifference = (object, base) => {
	return transform(object, (result, value, key) => {
		if (!isEqual(value, base[key])) {
			result[key] = isObject(value) && isObject(base[key]) ? objectsDifference(value, base[key]) : value;
		}
	});
}