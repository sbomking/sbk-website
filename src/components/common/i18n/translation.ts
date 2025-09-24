import { FluentBundle, FluentResource, type FluentVariable } from "@fluent/bundle";
import * as fs from 'fs';


const bundleMap: Map<string, FluentBundle> = new Map<string, FluentBundle> ();


export default async function getMessage(lang: string, key: string) {
    let messageBundle = bundleMap.get(lang);

    if(messageBundle == undefined)
    {
        let fltPath: string = 'src/lang/' + lang + '/sbomking.ftl';
        let data = await fs.promises.readFile(fltPath, 'utf-8');

        let resource = new FluentResource(data);
        let fluentBundle = new FluentBundle(lang);
    
        let errors = fluentBundle.addResource(resource);
        if (errors.length) {
            // Syntax errors are per-message and don't break the whole resource
            console.log(errors);
        }
        else
        {
            bundleMap.set(lang, fluentBundle);
            messageBundle = fluentBundle;
        }
    }

    let value = '';

    if(messageBundle != undefined)
    {
        let message = messageBundle.getMessage(key);
        if(message !== undefined && message.value != undefined)
        {
            value = message.value.toString();
        }
    }
    return value;
}

export async function getMessageWithParam(lang: string, key: string, param: Record<string, FluentVariable>) {
    let messageBundle = bundleMap.get(lang);

    if(messageBundle == undefined)
    {
        let fltPath: string = 'src/lang/' + lang + '/sbomking.ftl';
        let data = await fs.promises.readFile(fltPath, 'utf-8');
        //console.log(data);

        let resource = new FluentResource(data);
        let fluentBundle = new FluentBundle(lang);
    
        let errors = fluentBundle.addResource(resource);
        if (errors.length) {
            // Syntax errors are per-message and don't break the whole resource
            console.log(errors);
        }
        else
        {
            bundleMap.set(lang, fluentBundle);
            messageBundle = fluentBundle;
        }
    }


    let value = '';

    if(messageBundle != undefined)
    {
        let message = messageBundle.getMessage(key);
        if(message !== undefined && message.value != undefined)
        {
            //FOR DEBUGGING PURPOSE I CAN PASS AN ARRAY OF ERROR TO GET THE ERROR BACK
            value = messageBundle.formatPattern(message.value, param);
        }
    }
    return value;
}