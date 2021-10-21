import { User } from './User';
import { Company } from './Company';
// //import color from './User'; // console.log(color); => 'red' it is for - export default 'red';
//
// const user = new User();
// console.log(user);
//
// const company = new Company();
// console.log(company);

import {CustomMap} from "./CustomMap";

const divId: string = 'map';
const user = new User();
const company = new Company();

const customMap = new CustomMap(divId);
customMap.addMarker(user);
customMap.addMarker(company);
