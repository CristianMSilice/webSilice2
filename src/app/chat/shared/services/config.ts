import { Injectable, InjectionToken } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export const TOKEN = new InjectionToken<string>('TOKEN');

export function ConfigFactory(configService: ConfigService, file: string, property: string) {
    return configService.loadJSON(file)[property];
}

@Injectable()
export class ConfigService {

    public config: any;
    constructor(private http: Http) {
    }

    loadJSON(filePath) {
        const json = this.loadTextFileAjaxSync(filePath, "application/json");
        return JSON.parse(json);
    }

    loadTextFileAjaxSync(filePath, mimeType) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        if (mimeType != null) {
            if (xmlhttp.overrideMimeType) {
                xmlhttp.overrideMimeType(mimeType);
            }
        }
        xmlhttp.send();
        if (xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
        else {
            return null;
        }
    }
}