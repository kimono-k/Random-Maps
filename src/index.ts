// When you export you also have to import to gain access
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addUserMaker(user);
customMap.addCompanyMarker(company);