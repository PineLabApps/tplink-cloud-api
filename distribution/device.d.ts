/**
 * @package     tplink-cloud-api
 * @author      Alexandre Dumont <adumont@gmail.com>
 * @copyright   (C) 2017 - Alexandre Dumont
 * @license     https://www.gnu.org/licenses/gpl-3.0.txt
 * @link        http://itnerd.space
 */
import tplink from "./tplink";
export interface TPLinkDeviceInfo {
    fwVer: string;
    alias: string;
    status: number;
    deviceId: string;
    role: string;
    deviceMac: string;
    deviceName: string;
    deviceType: string;
    deviceModel: string;
    appServerUrl: string;
}
export default class TPLinkDevice {
    genericType: string;
    device: TPLinkDeviceInfo;
    private params;
    constructor(tpLink: tplink, deviceInfo: TPLinkDeviceInfo);
    get firmwareVersion(): string;
    get role(): string;
    get mac(): string;
    get model(): string;
    get type(): string;
    get name(): string;
    get disconnected(): boolean;
    get connected(): boolean;
    get status(): number;
    get humanName(): string;
    get alias(): string;
    get id(): string;
    getDeviceId(): string;
    get appServerUrl(): string;
    getSystemInfo(): Promise<any>;
    tplink_request(command: any): Promise<any>;
    passthroughRequest(command: any): Promise<any>;
}
