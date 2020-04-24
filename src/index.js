import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from './locales/en';

import JobsList from "./components/jobsList";

ReactDOM.render(
	<IntlProvider locale={language()} messages= {messages()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);

function language() {
    if((navigator.language || navigator.userLanguage).includes("es")){
        return "es";
    } else if((navigator.language || navigator.userLanguage).includes("en")){
        return "en";
    }
    
};

function messages() {
    if(language()=="es"){
        return localeEsMessages;
    } else if(language()=="en"){
        return localeEnMessages;
    }
}