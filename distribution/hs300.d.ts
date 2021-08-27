/**
 * @package     tplink-cloud-api
 * @author      Alexandre Dumont <adumont@gmail.com>
 * @copyright   (C) 2017 - Alexandre Dumont
 * @license     https://www.gnu.org/licenses/gpl-3.0.txt
 * @link        http://itnerd.space
 */
import hs100 from "./hs100";
import HS300child from "./hs300child";
import TPLink from "./tplink";
export default class HS300 extends hs100 {
    children: any[];
    tpLink: TPLink;
    constructor(tpLink: TPLink, deviceInfo: any);
    getChildren(): Promise<any>;
    findChild(alias: string): any;
    getChild(alias: any): HS300child;
}
