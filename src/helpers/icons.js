import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faCirclePlus,
  faAddressBook,
  faEnvelope,
  faMapLocationDot,
  faHashtag,
  faLock,
  faCircleQuestion
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faCirclePlus, faAddressBook, faEnvelope, faMapLocationDot, faHashtag, faLock, faCircleQuestion);
};

export default Icons;
