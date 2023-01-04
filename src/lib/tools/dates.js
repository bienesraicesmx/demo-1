import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
dayjs.extend(updateLocale);
    
dayjs.updateLocale('es-mx', {
    relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: 'algunos segundos',
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un día",
        dd: "%d días",
        M: "un mes",
        MM: "%d meses",
        y: "un año",
        yy: "%d años"
    }
})
    
dayjs.extend(relativeTime);
dayjs.locale('es-mx');

export const sinceDate = (date) => dayjs(date).fromNow();