import { scriptsBanners } from "./config/scriptsBanners";
import { scriptsEmails } from "./config/scriptsEmails";
import { scriptsWeb } from "./config/scriptsWebsites";

const scriptsArr = [];
scriptsArr = scriptsArr.concat(scriptsEmails, scriptsBanners, scriptsWeb);

export { scriptsArr };
